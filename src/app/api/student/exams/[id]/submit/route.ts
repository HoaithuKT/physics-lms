import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createClient as createServerClient } from "@/utils/supabase/server";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);


export const maxDuration = 60; // Tăng thời gian xử lý cho Vercel (lên 60s) để AI có đủ thời gian chấm tự luận

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { submission_id, answers } = body;

    if (!submission_id || !answers) {
      return NextResponse.json({ error: "Thiếu dữ liệu nộp bài" }, { status: 400 });
    }

    const supabase = await createServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });

    // Lấy đáp án gốc từ hệ thống
    const { data: exam, error: examError } = await supabaseAdmin
      .from('online_exams')
      .select('exam_data')
      .eq('id', id)
      .single();

    if (examError || !exam) return NextResponse.json({ error: "Không tìm thấy đề thi gốc" }, { status: 404 });

    const examData = exam.exam_data || [];
    let correctPoints = 0;
    const scorePerQuestion = 10 / (examData.length || 1);
    
    // Lưu danh sách các câu tự luận cần AI chấm
    const essayTasks: any[] = [];

    // Chấm điểm ngay lập tức đối với Trắc nghiệm & Đúng Sai & Trả lời ngắn
    examData.forEach((q: any, idx: number) => {
      const type = q.type || 'multiple_choice';
      const studentAns = answers[idx];

      if (type === 'multiple_choice') {
         if (studentAns === q.answerIndex) correctPoints += scorePerQuestion;
      } 
      else if (type === 'true_false') {
         if (q.answers && Array.isArray(studentAns)) {
            // Điểm chia đều cho 4 ý con (mỗi ý 0.25 của câu hỏi đó)
            let countTF = 0;
            for(let i=0; i<4; i++) {
               if (q.answers[i] === studentAns[i]) countTF++;
            }
            correctPoints += (countTF / 4) * scorePerQuestion;
         }
      }
      else if (type === 'short_answer') {
         if (q.correct_answers && studentAns) {
            // So khớp không phân biệt hoa thường và khoảng trắng
            const isMatch = q.correct_answers.some((ans: string) => 
               String(ans).trim().toLowerCase() === String(studentAns).trim().toLowerCase()
            );
            if (isMatch) correctPoints += scorePerQuestion;
         }
      }
      else if (type === 'essay') {
         essayTasks.push({
            qIndex: idx,
            question: q.question,
            answerText: q.answerText,
            studentAnswer: studentAns
         });
      }
    });

    /*
     * KHÔNG gọi AI chấm tự luận ở đây nữa.
     *
     * Đây từng là cửa học sinh tiêu khoá API: cứ nộp một bài có tự luận là một lượt gọi.
     * Google cho 20 lượt/ngày mỗi khoá, nên một buổi của một lớp là đủ đốt sạch hạn mức.
     *
     * Nay bài có câu tự luận DỪNG Ở "SUBMITTED" (chờ thầy cô chấm), điểm hiện ra là điểm
     * phần máy chấm được. Thầy cô chấm xong ở màn chấm tay thì điểm tự luận mới được CỘNG
     * THÊM vào và bài mới chuyển sang "GRADED". Điểm cộng cũng chỉ tính khi ấy.
     */
    const soCauTuLuan = essayTasks.length;

    const finalScore = Math.round(correctPoints * 100) / 100;
    // Đếm số lần thi để xác định là thi lần đầu hay thi lại
    const { count } = await supabaseAdmin
      .from('online_exam_submissions')
      .select('*', { count: 'exact', head: true })
      .eq('exam_id', id)
      .eq('student_id', user.id);

    /* Còn câu tự luận thì bài chưa chấm xong - để nguyên SUBMITTED cho vào hàng chờ. */
    const nextStatus = soCauTuLuan > 0 ? 'SUBMITTED'
                     : (count && count > 1) ? 'PUBLISHED' : 'GRADED';

    const { error: updateError } = await supabaseAdmin
      .from('online_exam_submissions')
      .update({
        status: nextStatus,
        score: finalScore,
        answers: {
          ...answers,
          submitted_time: new Date().toISOString(),
          /* Điểm phần máy chấm được, chốt ngay lúc nộp. Màn chấm tay CỘNG THÊM điểm tự
             luận vào đây chứ không tính lại. */
          _diemMayCham: Math.round(correctPoints * 100) / 100,
          _soCauTuLuan: soCauTuLuan,
        }
      })
      .eq('id', submission_id)
      .eq('student_id', user.id);

    if (updateError) throw updateError;

    return NextResponse.json({ 
      success: true, 
      score: finalScore, 
      status: nextStatus,
      message: "Nộp bài và chấm điểm thành công!"
    });

  } catch (err: any) {
    console.error("Lỗi Submit Exam:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
