/* Kiểm hàm đọc mục "CÔNG THỨC CẦN NHỚ" - biên dịch thẳng tệp thật. */
import { rutCongThucCuoiBai, coMucCongThuc } from './ctCuoiBai.mjs';

let dat = 0, tong = 0;
const kiem = (ten, thuc, mong) => {
  tong++;
  const ok = JSON.stringify(thuc) === JSON.stringify(mong);
  if (ok) dat++;
  console.log(`${ok ? '✓' : '✗ HỎNG'} ${ten}${ok ? '' : `\n     ra : ${JSON.stringify(thuc)}\n     cần: ${JSON.stringify(mong)}`}`);
};

const BAI = `# Bài 5. Hệ thức lượng trong tam giác

## 💡 DẠNG 1: TÍNH CẠNH
### Phương pháp giải
- Dùng định lý cosin
- Chú ý đơn vị góc

## 📌 CÔNG THỨC CẦN NHỚ
- **Định lý Cosin** | $a^2 = b^2 + c^2 - 2bc\\cos A$ | biết hai cạnh và góc xen giữa
- **Diện tích tam giác** | $S = \\dfrac{1}{2}ab\\sin C$ | biết hai cạnh và góc kẹp
- **Định lý Sin** | $\\dfrac{a}{\\sin A} = 2R$ | liên hệ cạnh, góc và bán kính đường tròn ngoại tiếp
`;

console.log('— Bài có mục công thức —');
kiem('nhận ra bài có mục', coMucCongThuc(BAI), true);
const ra = rutCongThucCuoiBai(BAI);
kiem('rút đúng 3 công thức', ra.length, 3);
kiem('tên đúng', ra[0].title, 'Định lý Cosin');
kiem('công thức đã bỏ dấu $ bao ngoài', ra[0].latex_content, 'a^2 = b^2 + c^2 - 2bc\\cos A');
kiem('mô tả đúng', ra[1].description, 'biết hai cạnh và góc kẹp');

console.log('\n— Không quét nhầm gạch đầu dòng của phần lý thuyết phía trên —');
kiem('không lấy "Dùng định lý cosin" ở phần Phương pháp',
  ra.some(c => c.title.includes('Dùng định lý')), false);

console.log('\n— Dừng đúng chỗ khi có mục khác phía sau —');
const CO_MUC_SAU = BAI + '\n## 🎯 BÀI TẬP VỀ NHÀ\n- **Không phải công thức** | $x$ | linh tinh\n';
kiem('vẫn chỉ 3 công thức, không lấn sang mục sau', rutCongThucCuoiBai(CO_MUC_SAU).length, 3);

console.log('\n— Các cách gõ lệch vẫn đọc được —');
kiem('thiếu emoji', rutCongThucCuoiBai('### CÔNG THỨC CẦN NHỚ\n- **A** | $x=1$ | abc').length, 1);
kiem('dùng dấu * thay dấu -', rutCongThucCuoiBai('## 📌 CÔNG THỨC CẦN NHỚ\n* **A** | $x=1$ | abc').length, 1);
kiem('thiếu cột mô tả vẫn nhận', rutCongThucCuoiBai('## CÔNG THỨC CẦN NHỚ\n- **A** | $x=1$')[0]?.description, '');
kiem('dòng thiếu công thức thì bỏ qua', rutCongThucCuoiBai('## CÔNG THỨC CẦN NHỚ\n- **Chỉ có tên**').length, 0);

console.log('\n— Bài chưa có mục —');
kiem('bài không có mục thì báo không', coMucCongThuc('# Bài 1\nNội dung thường'), false);
kiem('và rút ra rỗng', rutCongThucCuoiBai('# Bài 1\n- **A** | $x$ | y').length, 0);

console.log(`\n${dat}/${tong} phép thử đạt.`);
