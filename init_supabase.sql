-- ==============================================================================
-- KHỞI TẠO CƠ SỞ DỮ LIỆU LMS VẬT LÝ (Physics LMS)
-- Dành cho PostgreSQL (Supabase)
-- File này được sắp xếp theo đúng thứ tự phụ thuộc giữa các bảng
-- ==============================================================================

-- ======================== DỌN DẸP BẢNG CŨ (NẾU CÓ) ========================
DROP TABLE IF EXISTS public.online_exam_submissions CASCADE;
DROP TABLE IF EXISTS public.online_exam_classes CASCADE;
DROP TABLE IF EXISTS public.online_exams CASCADE;
DROP TABLE IF EXISTS public.exam_results CASCADE;
DROP TABLE IF EXISTS public.attendance CASCADE;
DROP TABLE IF EXISTS public.tuition_fees CASCADE;
DROP TABLE IF EXISTS public.expenses CASCADE;
DROP TABLE IF EXISTS public.sessions CASCADE;
DROP TABLE IF EXISTS public.lesson_modules CASCADE;
DROP TABLE IF EXISTS public.user_progress CASCADE;
DROP TABLE IF EXISTS public.lessons CASCADE;
DROP TABLE IF EXISTS public.chapters CASCADE;
DROP TABLE IF EXISTS public.class_students CASCADE;
DROP TABLE IF EXISTS public.student_course_requests CASCADE;
DROP TABLE IF EXISTS public.classes CASCADE;
DROP TABLE IF EXISTS public.courses CASCADE;
DROP TABLE IF EXISTS public.categories CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

-- ==============================================================================
-- PHẦN 1: CÁC BẢNG CƠ BẢN (CORE TABLES)
-- ==============================================================================

-- 1. Bảng Profiles (Liên kết với bảng users có sẵn của Supabase Auth)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  role TEXT NOT NULL CHECK (role IN ('student', 'teacher', 'parent', 'admin')),
  full_name TEXT,
  avatar_url TEXT,
  school TEXT,
  class_name TEXT,
  student_phone TEXT,
  parent_name TEXT,
  parent_phone TEXT,
  username TEXT UNIQUE,
  is_active BOOLEAN DEFAULT false,
  parent_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  activated_at TIMESTAMPTZ,
  expiration_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public access to profiles" ON public.profiles FOR ALL USING (true);

-- 2. Bảng Categories (Phân loại Khóa học)
CREATE TABLE public.categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL
);

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public access to categories" ON public.categories FOR ALL USING (true);

-- 3. Bảng Courses (Khóa học / Khối lớp) -- phụ thuộc: categories
CREATE TABLE public.courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES public.categories(id),
  title TEXT NOT NULL,
  grade_level INTEGER NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public access to courses" ON public.courses FOR ALL USING (true);

-- 4. Bảng Chapters (Chương) -- phụ thuộc: courses
CREATE TABLE public.chapters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.chapters ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public access to chapters" ON public.chapters FOR ALL USING (true);

-- 5. Bảng Lessons (Bài giảng) -- phụ thuộc: courses, chapters
CREATE TABLE public.lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  chapter_id UUID REFERENCES public.chapters(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content_jsonb JSONB,
  content_markdown TEXT,
  video_url TEXT,
  attachment_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public access to lessons" ON public.lessons FOR ALL USING (true);

-- 6. Bảng Lesson Modules (Các mục trong bài học) -- phụ thuộc: lessons
CREATE TABLE public.lesson_modules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('theory', 'exercise_types', 'practice', 'document', 'solution_video')),
  title TEXT NOT NULL,
  content_markdown TEXT,
  video_url TEXT,
  attachment_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.lesson_modules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public access to lesson modules" ON public.lesson_modules FOR ALL USING (true);

-- 7. Bảng Classes (Lớp học) -- phụ thuộc: categories, courses, profiles
CREATE TABLE public.classes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  grade_level_category_id UUID REFERENCES public.categories(id),
  course_id UUID REFERENCES public.courses(id),
  teacher_id UUID REFERENCES public.profiles(id),
  status TEXT DEFAULT 'active',
  max_students INTEGER DEFAULT 30,
  tuition_fee NUMERIC DEFAULT 0,
  start_date DATE,
  schedule TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public access to classes" ON public.classes FOR ALL USING (true);

-- 8. Bảng Class Students (Phân lớp học sinh) -- phụ thuộc: classes, profiles
CREATE TABLE public.class_students (
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY(class_id, student_id)
);

-- 9. Bảng Student Course Requests (Yêu cầu đăng ký khóa học) -- phụ thuộc: profiles, courses
CREATE TABLE public.student_course_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.student_course_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public access to requests" ON public.student_course_requests FOR ALL USING (true);

-- 10. Bảng User Progress (Tiến độ học tập) -- phụ thuộc: profiles, lessons
CREATE TABLE public.user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  UNIQUE(user_id, lesson_id)
);

-- ==============================================================================
-- PHẦN 2: KIỂM TRA ONLINE (ONLINE EXAMS)
-- ==============================================================================

-- 11. Bảng Online Exams (Kỳ thi) -- phụ thuộc: profiles
CREATE TABLE public.online_exams (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  exam_data JSONB NOT NULL,
  duration_minutes INTEGER NOT NULL,
  start_time TIMESTAMP WITH TIME ZONE,
  end_time TIMESTAMP WITH TIME ZONE,
  password VARCHAR(100),
  shuffle_questions BOOLEAN DEFAULT false,
  shuffle_options BOOLEAN DEFAULT false,
  show_results VARCHAR(50) DEFAULT 'LATER',
  max_cheat_warnings INTEGER DEFAULT 3,
  status VARCHAR(50) DEFAULT 'DRAFT',
  created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 12. Bảng Online Exam Classes (Phân phối đề cho lớp) -- phụ thuộc: online_exams, classes
CREATE TABLE public.online_exam_classes (
  exam_id UUID REFERENCES public.online_exams(id) ON DELETE CASCADE,
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (exam_id, class_id)
);

-- 13. Bảng Online Exam Submissions (Bài nộp) -- phụ thuộc: online_exams, profiles
CREATE TABLE public.online_exam_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  exam_id UUID REFERENCES public.online_exams(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now()),
  submit_time TIMESTAMP WITH TIME ZONE,
  answers JSONB DEFAULT '{}'::jsonb,
  score NUMERIC(5, 2),
  cheat_warnings INTEGER DEFAULT 0,
  status VARCHAR(50) DEFAULT 'IN_PROGRESS',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS cho Online Exams
ALTER TABLE public.online_exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.online_exam_classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.online_exam_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin/Teacher co toan quyen tren online_exams" ON public.online_exams
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'teacher'))
  );

CREATE POLICY "Hoc sinh xem ky thi cua lop minh" ON public.online_exams
  FOR SELECT USING (
    status = 'PUBLISHED' AND
    EXISTS (
      SELECT 1 FROM public.online_exam_classes oec
      JOIN public.class_students cs ON oec.class_id = cs.class_id
      WHERE oec.exam_id = online_exams.id AND cs.student_id = auth.uid()
    )
  );

CREATE POLICY "Admin/Teacher co toan quyen tren exam_classes" ON public.online_exam_classes
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'teacher'))
  );

CREATE POLICY "Hoc sinh co the xem lop cua ky thi" ON public.online_exam_classes
  FOR SELECT USING (true);

CREATE POLICY "Admin/Teacher xem tat ca bai nop" ON public.online_exam_submissions
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'teacher'))
  );

CREATE POLICY "Admin/Teacher cap nhat bai nop" ON public.online_exam_submissions
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'teacher'))
  );

CREATE POLICY "Hoc sinh xem bai cua minh" ON public.online_exam_submissions
  FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Hoc sinh bat dau lam bai" ON public.online_exam_submissions
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Hoc sinh cap nhat bai cua minh" ON public.online_exam_submissions
  FOR UPDATE USING (auth.uid() = student_id);

-- ==============================================================================
-- PHẦN 3: KẾT QUẢ BÀI TẬP (EXAM RESULTS)
-- ==============================================================================

-- 14. Bảng Exam Results (Kết quả luyện tập) -- phụ thuộc: profiles, lessons
CREATE TABLE public.exam_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
  module_id UUID,
  score NUMERIC(5, 2) NOT NULL DEFAULT 0,
  passed BOOLEAN NOT NULL DEFAULT false,
  attempt_number INTEGER NOT NULL DEFAULT 1,
  cheat_warnings INTEGER NOT NULL DEFAULT 0,
  answers JSONB,
  is_reviewed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX idx_exam_results_student_id ON public.exam_results(student_id);
CREATE INDEX idx_exam_results_lesson_id ON public.exam_results(lesson_id);

ALTER TABLE public.exam_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Hoc sinh xem ket qua cua minh" ON public.exam_results
  FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Hoc sinh co the luu diem cua minh" ON public.exam_results
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Admin xem tat ca ket qua" ON public.exam_results
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR role = 'teacher'))
  );

-- Storage bucket cho anh bai lam tu luan
INSERT INTO storage.buckets (id, name, public)
VALUES ('lesson_submissions', 'lesson_submissions', true)
ON CONFLICT (id) DO NOTHING;

-- ==============================================================================
-- PHẦN 4: ĐIỂM DANH VÀ HỌC PHÍ (TÀI CHÍNH)
-- ==============================================================================

-- 15. Bảng Sessions (Buổi học) -- phụ thuộc: classes
CREATE TABLE public.sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  session_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 16. Bảng Attendance (Điểm danh) -- phụ thuộc: sessions, profiles
CREATE TABLE public.attendance (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.sessions(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('PRESENT', 'EXCUSED_ABSENCE', 'UNEXCUSED_ABSENCE', 'LATE')),
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  UNIQUE(session_id, student_id)
);

-- 17. Bảng Tuition Fees (Học phí) -- phụ thuộc: classes, profiles
CREATE TABLE public.tuition_fees (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  month INTEGER NOT NULL,
  year INTEGER NOT NULL,
  base_fee INTEGER DEFAULT 0,
  old_debt INTEGER DEFAULT 0,
  discount INTEGER DEFAULT 0,
  paid_amount INTEGER DEFAULT 0,
  status TEXT DEFAULT 'UNPAID' CHECK (status IN ('UNPAID', 'PARTIAL', 'PAID')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  UNIQUE(class_id, student_id, month, year)
);

-- 18. Bảng Expenses (Chi phí) -- không phụ thuộc bảng khác
CREATE TABLE public.expenses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  amount INTEGER NOT NULL,
  expense_date DATE NOT NULL,
  category TEXT DEFAULT 'OTHER',
  month INTEGER NOT NULL,
  year INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- RLS cho module Tai chinh
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tuition_fees ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expenses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin co the quan ly sessions" ON public.sessions FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Admin co the quan ly attendance" ON public.attendance FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Admin co the quan ly tuition_fees" ON public.tuition_fees FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Admin co the quan ly expenses" ON public.expenses FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);

CREATE POLICY "Nguoi dung xem sessions cua lop minh" ON public.sessions FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.class_students
    WHERE class_students.class_id = sessions.class_id AND class_students.student_id = auth.uid()
  )
);
CREATE POLICY "Nguoi dung xem attendance cua minh" ON public.attendance FOR SELECT USING (
  student_id = auth.uid()
);
CREATE POLICY "Nguoi dung xem hoc phi cua minh" ON public.tuition_fees FOR SELECT USING (
  student_id = auth.uid()
);

-- ==============================================================================
-- HOÀN TẤT! Tất cả 18 bảng đã được tạo thành công.
-- ==============================================================================
