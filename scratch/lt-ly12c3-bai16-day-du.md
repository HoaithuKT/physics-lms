# <span style="text-align: center; display: block">BÀI 16: TỪ THÔNG. HIỆN TƯỢNG CẢM ỨNG ĐIỆN TỪ</span>

---

## 📘 PHẦN 1: TÓM TẮT LÝ THUYẾT TRỌNG TÂM

### <span style="color: #ef4444">1. Từ thông</span>

Xét vòng dây kín $\color{blue} (C)$ diện tích $\color{blue} S$ đặt trong từ trường đều $\color{blue} \vec{B}$. Vẽ vectơ pháp tuyến $\color{blue} \vec{n}$ của $\color{blue} S$ (chiều chọn tuỳ ý), gọi $\color{blue} \alpha$ là góc giữa $\color{blue} \vec{B}$ và $\color{blue} \vec{n}$. **Từ thông** qua diện tích $\color{blue} S$:

$$\color{blue} \Phi = BS\cos\alpha$$

Với cuộn dây $\color{blue} N$ vòng: $\color{blue} \Phi = NBS\cos\alpha$.

**Đơn vị:** vêbe (Wb), $\color{blue} 1\ \text{Wb} = 1\ \text{T}\cdot\text{m}^2$.

**Ý nghĩa:** khi $\color{blue} \alpha = 0$ và $\color{blue} S = 1\ \text{m}^2$ thì $\color{blue} \Phi = B$ — từ thông diễn tả **số đường sức từ xuyên qua** diện tích $\color{blue} S$.

**Dấu và giá trị đặc biệt:**

| Vị trí của khung dây | $\color{blue} \alpha$ | $\color{blue} \Phi$ |
|---|---|---|
| Mặt khung **vuông góc** với đường sức, $\color{blue} \vec{n}$ cùng chiều $\color{blue} \vec{B}$ | $\color{blue} 0^\circ$ | $\color{blue} +BS$ (lớn nhất) |
| Mặt khung **song song** với đường sức | $\color{blue} 90^\circ$ | $\color{blue} 0$ |
| Mặt khung vuông góc với đường sức, $\color{blue} \vec{n}$ ngược chiều $\color{blue} \vec{B}$ | $\color{blue} 180^\circ$ | $\color{blue} -BS$ |

> ⚠️ **Bẫy số một của cả chương:** $\color{blue} \alpha$ là góc giữa $\color{blue} \vec{B}$ và **pháp tuyến** $\color{blue} \vec{n}$, KHÔNG phải góc giữa $\color{blue} \vec{B}$ và **mặt phẳng** khung. Đề cho "mặt phẳng khung hợp với $\color{blue} \vec{B}$ góc $\color{blue} \beta$" thì $\color{blue} \alpha = 90^\circ - \beta$, tức $\color{blue} \Phi = BS\sin\beta$.

---

### <span style="color: #ef4444">2. Hiện tượng cảm ứng điện từ</span>

Hai thí nghiệm trong sách (nam châm vĩnh cửu dịch lại gần / ra xa cuộn dây; nam châm điện đóng ngắt khoá K hoặc dịch con chạy biến trở) đều cho cùng kết luận:

**Khi từ thông qua cuộn dây dẫn kín biến thiên thì trong cuộn dây xuất hiện dòng điện, gọi là dòng điện cảm ứng.** Hiện tượng đó là **hiện tượng cảm ứng điện từ**.

**Hiện tượng chỉ tồn tại trong khoảng thời gian từ thông biến thiên.** Nam châm dừng lại — dù đang ở rất gần cuộn dây — thì dòng điện cảm ứng **tắt ngay**.

**Ba cách làm từ thông biến thiên** (theo $\color{blue} \Phi = BS\cos\alpha$): thay đổi $\color{blue} B$ (dịch nam châm, đổi cường độ dòng điện của nam châm điện), thay đổi $\color{blue} S$ (bóp méo khung, thanh trượt trên ray), thay đổi $\color{blue} \alpha$ (quay khung — chính là nguyên tắc máy phát điện ở Bài 17).

---

### <span style="color: #ef4444">3. Chiều dòng điện cảm ứng — Định luật Lenz</span>

Dòng điện cảm ứng xuất hiện trong mạch kín có chiều sao cho từ trường do nó sinh ra có tác dụng **chống lại sự biến thiên** của từ thông qua mạch kín đó.

Gọi $\color{blue} \vec{B}$ là cảm ứng từ ban đầu (của nam châm), $\color{blue} \vec{B}_c$ là cảm ứng từ do dòng điện cảm ứng sinh ra:

| Từ thông qua mạch | $\color{blue} \vec{B}_c$ so với $\color{blue} \vec{B}$ |
|---|---|
| **Tăng** (nam châm lại gần, $\color{blue} B$ tăng, $\color{blue} S$ tăng…) | **Ngược chiều** $\color{blue} \vec{B}$ |
| **Giảm** (nam châm ra xa, $\color{blue} B$ giảm, $\color{blue} S$ giảm…) | **Cùng chiều** $\color{blue} \vec{B}$ |

Hệ quả cơ học: dòng điện cảm ứng luôn **cản trở chuyển động tương đối** giữa nam châm và mạch — nam châm lại gần thì bị **đẩy**, ra xa thì bị **hút**. Đây là bản chất "cơ năng chuyển hoá thành điện năng".

---

### <span style="color: #ef4444">4. Suất điện động cảm ứng — Định luật Faraday</span>

Suất điện động sinh ra dòng điện cảm ứng gọi là **suất điện động cảm ứng** $\color{blue} e_c$.

Độ lớn của suất điện động cảm ứng trong mạch kín **tỉ lệ với tốc độ biến thiên của từ thông** qua mạch.

$$\color{blue} e_c = -\frac{\Delta\Phi}{\Delta t} \qquad\text{(một vòng)}, \qquad e_c = -N\frac{\Delta\Phi}{\Delta t} \qquad\text{(cuộn N vòng)}$$

Dấu trừ thể hiện định luật Lenz. Khi chỉ cần **độ lớn**: $\color{blue} |e_c| = N\left|\dfrac{\Delta\Phi}{\Delta t}\right|$.

Nếu mạch kín có điện trở $\color{blue} R$: **dòng điện cảm ứng** $\color{blue} I_c = \dfrac{|e_c|}{R}$, **điện lượng** chuyển qua mạch trong thời gian $\color{blue} \Delta t$: $\color{blue} q = I_c\Delta t = \dfrac{N|\Delta\Phi|}{R}$ — đặc biệt $\color{blue} q$ **không phụ thuộc** vào việc biến thiên nhanh hay chậm.

**Thanh dẫn chuyển động** (hình 16.9): thanh $\color{blue} MN$ dài $\color{blue} l$ trượt với tốc độ $\color{blue} v$ trên hai ray, trong từ trường $\color{blue} \vec{B}$ vuông góc mặt phẳng ray. Trong $\color{blue} \Delta t$, diện tích mạch thay đổi $\color{blue} \Delta S = l\,v\,\Delta t$ nên

$$\color{blue} |e_c| = \frac{B\,\Delta S}{\Delta t} = Blv$$

(tổng quát $\color{blue} |e_c| = Blv\sin\theta$ với $\color{blue} \theta$ là góc giữa $\color{blue} \vec{v}$ và $\color{blue} \vec{B}$).

```quiz
{
  "type": "multiple_choice",
  "question": "1 Weber bằng",
  "options": [
    "$1\\text{ T.m}^2$.",
    "$1$ T/m.",
    "$1$ T.m.",
    "$1\\text{ T/m}^2$."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\nĐịnh nghĩa đơn vị từ thông từ công thức $\\Phi = BS\\cos\\alpha$.\n\nLời giải:\nTừ công thức $\\Phi = BS\\cos\\alpha$, ta có $1$ Wb $= 1$ T $\\cdot 1\\text{ m}^2 = 1\\text{ T.m}^2$.",
  "sourceQuestionId": "af85a299-98de-49b4-a17a-69adad9571e9",
  "maCauHoi": "CH_1787318270646_p8di"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Từ thông đi qua vòng dây trong từ trường đều $\\vec{B}$ không phụ thuộc vào",
  "options": [
    "bán kính dây.",
    "diện tích vòng dây.",
    "góc được tạo giữa mặt phẳng vòng dây và phương của $\\vec{B}$.",
    "độ lớn của cảm ứng từ."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\nCông thức tính từ thông $\\Phi = BS\\cos\\alpha$.\n\nLời giải:\nTừ thông qua vòng dây phụ thuộc vào cảm ứng từ $B$, diện tích giới hạn bởi vòng dây $S$ và góc tạo bởi $\\vec{B}$ với mặt phẳng khung dây, không phụ thuộc vào bán kính (tiết diện) của sợi dây dẫn.",
  "sourceQuestionId": "2e64c1e4-5a4a-46ee-ac54-139ed42c591f",
  "maCauHoi": "CH_1787318270646_qxpn"
}
```

---

# PHẦN 2: PHÂN DẠNG BÀI TẬP & PHƯƠNG PHÁP GIẢI

## 💡 DẠNG 1: TÍNH TỪ THÔNG QUA KHUNG DÂY

### 🛠 Phương pháp giải

#### Bước 1: Đổi đơn vị diện tích
$\color{blue} 1\ \text{cm}^2 = 10^{-4}\ \text{m}^2$, $\color{blue} 1\ \text{dm}^2 = 10^{-2}\ \text{m}^2$. Khung hình chữ nhật $\color{blue} a\times b$, hình tròn $\color{blue} \pi r^2$, hình vuông cạnh $\color{blue} a$: $\color{blue} a^2$.

#### Bước 2: Tìm đúng góc $\color{blue} \alpha$ giữa $\color{blue} \vec{B}$ và pháp tuyến
Đề cho góc với **mặt phẳng** khung là $\color{blue} \beta$ thì $\color{blue} \alpha = 90^\circ - \beta$. Đề nói "đường sức xuyên vuông góc mặt khung" thì $\color{blue} \alpha = 0$.

#### Bước 3: Áp dụng $\color{blue} \Phi = NBS\cos\alpha$
Nhớ nhân $\color{blue} N$ nếu là cuộn dây nhiều vòng. Nếu hỏi $\color{blue} \Phi$ cực đại thì lấy $\color{blue} \cos\alpha = 1$.

#### Bước 4: Bài toán ngược
Biết $\color{blue} \Phi$, tìm $\color{blue} B$, $\color{blue} S$, hoặc $\color{blue} \alpha$: $\color{blue} \cos\alpha = \dfrac{\Phi}{NBS}$. Nếu $\color{blue} \Phi$ cho **âm** thì $\color{blue} \alpha$ là góc tù ($\color{blue} \vec{n}$ ngược chiều $\color{blue} \vec{B}$).

---

> ### 📌 Ví dụ mẫu
>
> Một vòng dây phẳng giới hạn diện tích $\color{blue} S = 40$ cm² đặt trong từ trường đều $\color{blue} B = 0{,}1$ T. Mặt phẳng vòng dây hợp với $\color{blue} \vec{B}$ một góc $\color{blue} 30^\circ$. Tính từ thông qua $\color{blue} S$.
>
> Hướng dẫn giải:
> $\color{blue} S = 40\ \text{cm}^2 = 40\cdot10^{-4}\ \text{m}^2$.
> Góc giữa $\color{blue} \vec{B}$ và **mặt phẳng** là $\color{blue} 30^\circ$ ⇒ góc giữa $\color{blue} \vec{B}$ và **pháp tuyến** là $\color{blue} \alpha = 90^\circ - 30^\circ = 60^\circ$.
> $\color{blue} \Phi = BS\cos\alpha = 0{,}1\cdot40\cdot10^{-4}\cdot\cos 60^\circ = 2\cdot10^{-4}$ Wb.
> (Lấy nhầm $\color{blue} \cos 30^\circ$ sẽ ra $\color{blue} 3{,}46\cdot10^{-4}$ Wb — đó là phương án nhiễu quen thuộc.)

```quiz
{
  "type": "multiple_choice",
  "question": "Chọn câu **sai**. Từ thông qua mặt $S$ đặt trong từ trường phụ thuộc vào độ",
  "options": [
    "nghiêng của mặt $S$ so với vecto cảm ứng từ.",
    "lớn của chu vi của đường giới hạn mặt $S$.",
    "lớn của cảm ứng từ vector cảm ứng từ.",
    "lớn của diện tích mặt $S$."
  ],
  "answerIndex": 1,
  "answer": "Phương pháp giải:\nBiểu thức tính từ thông $\\Phi = BS\\cos\\alpha$.\n\nLời giải:\nTừ thông $\\Phi = BS\\cos\\alpha$ phụ thuộc vào độ lớn cảm ứng từ $B$, diện tích mặt $S$ và góc nghiêng của mặt so với hướng của vectơ cảm ứng từ; không phụ thuộc vào chu vi của đường giới hạn mặt $S$.",
  "sourceQuestionId": "6ffec65d-f6c3-4020-ba85-e7bb58a70c9d",
  "maCauHoi": "CH_1787318270646_6ih2"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Từ thông qua khung dây có diện tích $S$ đặt trong từ trường đều đạt giá trị cực đại khi các đường sức từ hợp với mặt phẳng khung dây một góc",
  "options": [
    "$90^\\circ$.",
    "$0^\\circ$.",
    "$180^\\circ$.",
    "$45^\\circ$."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\nCông thức tính từ thông $\\Phi = BS\\cos\\alpha$.\n\nLời giải:\nTa có $\\Phi = BS\\cos\\alpha \\Rightarrow \\Phi = \\Phi_{\\max} \\Leftrightarrow \\cos\\alpha = 1 \\Rightarrow \\alpha = 0^\\circ$.\nVì $\\alpha$ là góc hợp bởi $\\vec{B}$ và vectơ pháp tuyến $\\vec{n}$ của khung dây, nên góc hợp bởi các đường sức từ $\\vec{B}$ với mặt phẳng khung dây là $90^\\circ - 0^\\circ = 90^\\circ$.",
  "sourceQuestionId": "7e3488bb-8cfe-47a8-b1d5-dfe0ee86a1af",
  "maCauHoi": "CH_1787318270646_g95u"
}
```

```quiz
{
  "type": "short_answer",
  "question": "Một khung dây hình chữ nhật ABCD gồm $20$ vòng cạnh $5$ cm và $4$ cm. Khung đặt trong từ trường đều $3 \\cdot 10^{-3}$ T đường sức vuông góc với mặt phẳng khung. Quay khung $60^\\circ$ quanh cạnh AB, độ biến thiên từ thông qua khung có độ lớn bằng bao nhiêu microWeber?",
  "exactAnswer": "60",
  "answer": "Phương pháp giải:\nCông thức tính từ thông: $\\Phi = N B S \\cos\\alpha$.\n\nLời giải:\nDiện tích khung dây: $S = 0,05 \\cdot 0,04 = 0,002\\ \\text{m}^2$.\nBan đầu: Đường sức vuông góc với mặt phẳng khung $\\Rightarrow \\alpha_1 = 0^\\circ$.\nKhi quay $60^\\circ$: Góc giữa véctor pháp tuyến và véctor cảm ứng từ là $\\alpha_2 = 60^\\circ$.\nĐộ biến thiên từ thông:\n$|\\Delta \\Phi| = N B S (\\cos 0^\\circ - \\cos 60^\\circ) = 20 \\cdot (3 \\cdot 10^{-3}) \\cdot 0,002 \\cdot (1 - 0,5) = 60 \\cdot 10^{-6}$ Wb $= 60\\ \\mu$ Wb.",
  "sourceQuestionId": "13518f60-d906-4e01-a390-6893240c220d",
  "maCauHoi": "CH_1787276715808_rolz"
}
```

---

## 💡 DẠNG 2: XÁC ĐỊNH CHIỀU DÒNG ĐIỆN CẢM ỨNG — ĐỊNH LUẬT LENZ

### 🛠 Phương pháp giải

#### Bước 1: Xác định chiều $\color{blue} \vec{B}$ của từ trường ban đầu qua mạch
Nam châm: đường sức **ra N vào S**, nên trước mặt cực N thì $\color{blue} \vec{B}$ hướng **ra xa nam châm**, trước mặt cực S thì $\color{blue} \vec{B}$ hướng **về phía nam châm**. Ống dây hoặc dòng thẳng: quy tắc nắm tay phải (Bài 14).

#### Bước 2: Xét từ thông tăng hay giảm
Nam châm **lại gần**, dòng điện trong nam châm điện **tăng**, khung **đi vào** vùng từ trường, diện tích **tăng** → $\color{blue} \Phi$ **tăng**. Ngược lại → **giảm**. Nam châm chuyển động **dọc theo mặt khung mà không đổi khoảng cách** hay khung tịnh tiến trong từ trường **đều** → $\color{blue} \Phi$ **không đổi** → **không có** dòng cảm ứng.

#### Bước 3: Suy chiều $\color{blue} \vec{B}_c$
$\color{blue} \Phi$ tăng ⇒ $\color{blue} \vec{B}_c$ **ngược** $\color{blue} \vec{B}$; $\color{blue} \Phi$ giảm ⇒ $\color{blue} \vec{B}_c$ **cùng** $\color{blue} \vec{B}$.

#### Bước 4: Từ $\color{blue} \vec{B}_c$ suy chiều dòng điện cảm ứng
Quy tắc nắm tay phải cho dòng tròn: ngón cái theo $\color{blue} \vec{B}_c$ (trong lòng vòng dây), bốn ngón cho chiều dòng điện.

#### Bước 5: Nếu đề hỏi lực tương tác hoặc chiều chuyển động
Lại gần → mạch **đẩy** nam châm (mặt vòng dây đối diện cực N của nam châm trở thành mặt **Bắc**); ra xa → **hút**.

---

> ### 📌 Ví dụ mẫu
>
> Đưa cực Bắc của một thanh nam châm lại gần vòng dây kín treo thẳng đứng (ví dụ 1, Bài 20 trong sách). Xác định chiều dòng điện cảm ứng trong vòng dây và cho biết vòng dây chuyển động về phía nào.
>
> Hướng dẫn giải:
> Đường sức đi ra từ cực N nên $\color{blue} \vec{B}$ tại vòng dây hướng **từ nam châm về phía vòng dây** (giả sử từ trái sang phải).
> Nam châm lại gần ⇒ $\color{blue} \Phi$ **tăng** ⇒ $\color{blue} \vec{B}_c$ **ngược** $\color{blue} \vec{B}$, tức hướng từ phải sang trái.
> Nắm tay phải, ngón cái chỉ sang trái ⇒ nhìn từ phía nam châm, dòng điện cảm ứng chạy **ngược chiều kim đồng hồ**.
> Mặt vòng dây đối diện nam châm có đường sức của $\color{blue} \vec{B}_c$ **đi ra** ⇒ đó là mặt **Bắc**. Cực Bắc nam châm đối diện mặt Bắc vòng dây ⇒ vòng dây **bị đẩy ra xa** nam châm.

```quiz
{
  "type": "multiple_choice",
  "question": "Trong một mạch kín dòng điện cảm ứng xuất hiện khi",
  "options": [
    "trong mạch có một nguồn điện.",
    "mạch điện được đặt trong một từ trường đều.",
    "mạch điện được đặt trong một từ trường không đều.",
    "từ thông qua mạch điện biến thiên theo thời gian."
  ],
  "answerIndex": 3,
  "answer": "Phương pháp giải:\nĐiều kiện xuất hiện hiện tượng cảm ứng điện từ.\n\nLời giải:\nDòng điện cảm ứng xuất hiện trong mạch kín khi và chỉ khi từ thông qua mạch kín đó biến thiên theo thời gian.",
  "sourceQuestionId": "1651da4c-e273-43bc-934c-11c6f7a80a42",
  "maCauHoi": "CH_1787318270646_shl3"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Khi cho nam châm dịch chuyển lại gần hoặc ra xa vòng dây kín thì hình vẽ nào sau đây xác định **đúng** chiều dòng điện cảm ứng?",
  "options": [
    "\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/d1c5tsh57l_1787240647715.jpg)\n",
    "\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/lheqc1tslb_1787240693427.jpg)\n",
    "\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/ws9z2o3ksqp_1787241073160.jpg)\n",
    "\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/725eh1bw0xr_1787240760940.jpg)\n"
  ],
  "answerIndex": 1,
  "answer": "Phương pháp giải:\n- Áp dụng định luật Len-xơ: Vòng dây xuất hiện mặt đối diện cùng tên cực để đẩy cực nam châm lại gần, và khác tên cực để hút cực nam châm ra xa.\n- Cực Bắc (N): nhìn vào thấy dòng điện chạy ngược chiều kim đồng hồ. Cực Nam (S): nhìn vào thấy dòng điện chạy cùng chiều kim đồng hồ.\n\nLời giải:\n- Ở Hình (2): Cực Bắc (N) của nam châm tiến lại gần vòng dây $\\Rightarrow$ mặt bên trái của vòng dây là cực Bắc (N) để đẩy cực N $\\Rightarrow$ nhìn từ bên trái sang, dòng điện chạy ngược chiều kim đồng hồ $\\Rightarrow$ ở nửa dưới/trước mũi tên $i_c$ đi xuống. Hình (2) biểu diễn đúng.\n- Ở Hình (1): Cực N lại gần nhưng vẽ ngược chiều dòng điện.\n- Ở Hình (3): Cực N ra xa thì mặt đối diện là cực Nam (S), dòng điện nhìn từ trái sang phải cùng chiều kim đồng hồ.\n- Ở Hình (4): Có sự biến thiên từ thông nên $i_c \\neq 0$.\nChọn B.",
  "sourceQuestionId": "d89ce434-1072-4001-9ef4-ac8ac4aec073",
  "maCauHoi": "CH_1787241105000_7hlx"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Chọn câu **sai**. Dòng điện cảm ứng là dòng điện",
  "options": [
    "xuất hiện trong một mạch kín khi từ thông qua mạch kín đó biến thiên.",
    "có chiều và cường độ không phụ thuộc chiều và tốc độ biến thiên của từ thông qua mạch kín.",
    "chỉ tồn tại trong mạch kín trong thời gian từ thông qua mạch kín đó biến thiên.",
    "có chiều phụ thuộc chiều biến thiên từ thông qua mạch kín."
  ],
  "answerIndex": 1,
  "answer": "Phương pháp giải:\nTính chất và quy luật của dòng điện cảm ứng trong mạch kín.\n\nLời giải:\nTheo định luật Lenz, chiều của dòng điện cảm ứng phụ thuộc vào chiều biến thiên của từ thông (tăng hay giảm). Đồng thời, theo định luật Faraday, cường độ dòng điện cảm ứng tỉ lệ thuận với tốc độ biến thiên từ thông ($e_c = -\\frac{\\Delta\\Phi}{\\Delta t}$). Do đó khẳng định B là sai.",
  "sourceQuestionId": "2436568e-926f-4dd2-bfe5-305c1e765364",
  "maCauHoi": "CH_1787318270646_v2ex"
}
```

---

## 💡 DẠNG 3: ĐỊNH LUẬT FARADAY — TÍNH $\color{blue} e_c$, $\color{blue} I_c$, $\color{blue} q$

### 🛠 Phương pháp giải

#### Bước 1: Tính từ thông ở hai thời điểm
$\color{blue} \Phi_1 = NBS\cos\alpha_1$, $\color{blue} \Phi_2 = NB'S'\cos\alpha_2$ — chỉ đại lượng nào **thay đổi** mới khác nhau. Rồi $\color{blue} \Delta\Phi = \Phi_2 - \Phi_1$.

> ⚠️ **Khung quay $\color{blue} 180^\circ$** (lật mặt): $\color{blue} \Phi$ đi từ $\color{blue} +BS$ sang $\color{blue} -BS$ nên $\color{blue} |\Delta\Phi| = 2BS$, không phải $\color{blue} 0$. **Rút khung ra khỏi từ trường**: $\color{blue} \Phi_2 = 0$.

#### Bước 2: Suất điện động
$$\color{blue} |e_c| = N\frac{|\Delta\Phi|}{\Delta t}$$
Nếu đã gộp $\color{blue} N$ vào $\color{blue} \Phi$ ở bước 1 thì **không nhân $\color{blue} N$ lần nữa**.

#### Bước 3: Dòng điện và điện lượng
$$\color{blue} I_c = \frac{|e_c|}{R}, \qquad q = I_c\,\Delta t = \frac{N|\Delta\Phi|}{R}$$
Nếu đề cho dây dẫn có điện trở suất, tính $\color{blue} R = \rho\dfrac{\ell}{S_{\text{dây}}}$ với $\color{blue} \ell$ là **tổng chiều dài dây** ($\color{blue} N$ lần chu vi).

#### Bước 4: Từ trường biến thiên đều theo thời gian
Đề cho "$\color{blue} B$ tăng đều từ $\color{blue} B_1$ đến $\color{blue} B_2$ trong $\color{blue} \Delta t$" ⇒ $\color{blue} \dfrac{\Delta B}{\Delta t}$ là hằng số ⇒ $\color{blue} |e_c| = NS\cos\alpha\cdot\dfrac{|\Delta B|}{\Delta t}$ cũng là hằng số suốt quá trình.

---

> ### 📌 Ví dụ mẫu
>
> Một khung dây phẳng $\color{blue} N = 100$ vòng, diện tích mỗi vòng $\color{blue} 50$ cm², điện trở tổng cộng $\color{blue} 2\ \Omega$, đặt vuông góc với từ trường đều. Trong $\color{blue} 0{,}1$ s, cảm ứng từ giảm đều từ $\color{blue} 0{,}5$ T về $\color{blue} 0$. Tính suất điện động cảm ứng, cường độ dòng điện cảm ứng và điện lượng chuyển qua khung.
>
> Hướng dẫn giải:
> $\color{blue} S = 50\cdot10^{-4}$ m², $\color{blue} \alpha = 0$.
> $\color{blue} |\Delta\Phi| = S|\Delta B| = 50\cdot10^{-4}\cdot0{,}5 = 2{,}5\cdot10^{-3}$ Wb (một vòng).
> $\color{blue} |e_c| = N\dfrac{|\Delta\Phi|}{\Delta t} = 100\cdot\dfrac{2{,}5\cdot10^{-3}}{0{,}1} = 2{,}5$ V.
> $\color{blue} I_c = \dfrac{2{,}5}{2} = 1{,}25$ A; $\color{blue} q = I_c\Delta t = 1{,}25\cdot0{,}1 = 0{,}125$ C.
> (Kiểm tra lại $\color{blue} q$ bằng $\color{blue} \dfrac{N|\Delta\Phi|}{R} = \dfrac{100\cdot2{,}5\cdot10^{-3}}{2} = 0{,}125$ C — khớp.)

```quiz
{
  "type": "multiple_choice",
  "question": "Độ lớn của suất điện động cảm ứng trong một mạch kín được xác định theo công thức",
  "options": [
    "$e_c = \\left| \\frac{\\Delta \\Phi}{\\Delta t} \\right|$.",
    "$e_c = |\\Delta \\Phi \\cdot \\Delta t|$.",
    "$e_c = \\left| \\frac{\\Delta t}{\\Delta \\Phi} \\right|$.",
    "$e_c = - \\left| \\frac{\\Delta \\Phi}{\\Delta t} \\right|$."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\n- Ghi nhớ công thức xác định độ lớn của suất điện động cảm ứng theo định luật Faraday.\n\nLời giải:\n- Độ lớn của suất điện động cảm ứng trong mạch kín được tính theo công thức: $e_c = \\left| \\frac{\\Delta \\Phi}{\\Delta t} \\right|$.\n- Chọn đáp án A.",
  "sourceQuestionId": "c241c2b5-0ac8-4cbb-9ff5-9efe1a236599",
  "maCauHoi": "CH_1787243458623_c55g"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Trong các yếu tố sau:\nI. Chiều dài của ống dây kín\nII. Số vòng của ống dây kín\nIII. Tốc độ biến thiên của từ thông qua mỗi vòng dây.\nSuất điện động cảm ứng xuất hiện trong ống dây kín phụ thuộc vào các yếu tố nào?",
  "options": [
    "I và II.",
    "I và III.",
    "III và II.",
    "Chỉ phụ thuộc II."
  ],
  "answerIndex": 2,
  "answer": "Phương pháp giải:\nSử dụng định luật Faraday về cảm ứng điện từ: $e_c = N\\left|\\frac{\\Delta \\Phi}{\\Delta t}\\right|$.\n\nLời giải:\nSuất điện động cảm ứng phụ thuộc vào số vòng dây kín ($N$) và tốc độ biến thiên của từ thông qua mỗi vòng dây $\\left(\\left|\\frac{\\Delta \\Phi}{\\Delta t}\\right|\\right)$.\nDo đó, suất điện động phụ thuộc vào các yếu tố II và III.",
  "sourceQuestionId": "57d501e1-0238-4527-8fcb-70fbe03ab12e",
  "maCauHoi": "CH_1787276715808_xt0p"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Một xôlênôit đường kính $5$ cm và gồm $1000$ vòng dây bằng đồng. Xôlênôit được đặt trong một từ trường đều có vectơ cảm ứng từ $\\vec{B}$ nằm dọc theo trục của xôlênôit, cảm ứng từ biến thiên đều với tốc độ $\\frac{\\Delta B}{\\Delta t} = 10^{-2}$ T/s. Nếu mắc vào hai đầu xôlênôit một tụ điện có $C = 10\\ \\mu$ F thì điện tích trên tụ bằng",
  "options": [
    "$1,96\\cdot 10^{-7}$ C",
    "$2,45\\cdot 10^{-7}$ C",
    "$3,18\\cdot 10^{-8}$ C",
    "$1,6\\cdot 10^{-8}$ C"
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\n- Suất điện động cảm ứng trong xôlênôit: $|e_c| = N S \\cos\\alpha \\frac{\\Delta B}{\\Delta t} = N \\frac{\\pi d^2}{4} \\frac{\\Delta B}{\\Delta t}$.\n- Điện tích trên bản tụ điện: $q = C |e_c|$.\n\nLời giải:\n- Tiết diện ngang của xôlênôit: $S = \\frac{\\pi d^2}{4} = \\frac{\\pi \\cdot (0,05)^2}{4} \\approx 1,9635\\cdot 10^{-3}\\text{ m}^2$.\n- Vectơ cảm ứng từ $\\vec{B}$ nằm dọc theo trục xôlênôit nên góc hợp với vectơ pháp tuyến là $\\alpha = 0^\\circ \\Rightarrow \\cos 0^\\circ = 1$.\n- Suất điện động cảm ứng xuất hiện trong xôlênôit:\n$|e_c| = N S \\frac{\\Delta B}{\\Delta t} = 1000\\cdot \\left(\\frac{\\pi \\cdot 0,05^2}{4}\\right)\\cdot 10^{-2} \\approx 0,019635$ V.\n- Điện tích tích lũy trên tụ điện:\n$q = C |e_c| = (10\\cdot 10^{-6})\\cdot 0,019635 \\approx 1,96\\cdot 10^{-7}$ C.\n- Chọn A.",
  "sourceQuestionId": "f622b2cf-8eaf-448e-a971-700967cda8d6",
  "maCauHoi": "CH_1787365814427_kqje"
}
```

---

## 💡 DẠNG 4: KHAI THÁC ĐỒ THỊ $\color{blue} \Phi - t$ VÀ $\color{blue} B - t$

### 🛠 Phương pháp giải

#### Bước 1: Đọc đúng trục
Trục tung là $\color{blue} \Phi$ (Wb) hay $\color{blue} B$ (T)? Nếu là $\color{blue} B$ thì phải nhân thêm $\color{blue} NS\cos\alpha$ để ra $\color{blue} \Phi$.

#### Bước 2: Chia đồ thị thành từng đoạn thẳng
Trên mỗi đoạn, **độ dốc** $\color{blue} \dfrac{\Delta\Phi}{\Delta t}$ là hằng số ⇒ $\color{blue} e_c$ **không đổi** trên đoạn đó:
$$\color{blue} |e_c| = N\cdot|\text{độ dốc}|$$

#### Bước 3: Đối chiếu ba tình huống
* Đoạn **nằm ngang** ($\color{blue} \Phi$ không đổi): $\color{blue} e_c = 0$, **không có** dòng cảm ứng.
* Đoạn **dốc lên** và **dốc xuống** cho $\color{blue} e_c$ **trái dấu** ⇒ dòng cảm ứng **đổi chiều**.
* Đoạn **càng dốc** ⇒ $\color{blue} |e_c|$ càng lớn — không liên quan $\color{blue} \Phi$ lớn hay nhỏ.

#### Bước 4: Nếu hỏi đồ thị $\color{blue} e_c - t$
Vẽ hàm **bậc thang**: mỗi đoạn thẳng của $\color{blue} \Phi(t)$ thành một đoạn ngang của $\color{blue} e_c(t)$, giá trị bằng $\color{blue} -N\cdot$độ dốc.

---

> ### 📌 Ví dụ mẫu
>
> Từ thông qua một khung dây $\color{blue} 200$ vòng biến thiên theo thời gian: từ $\color{blue} t = 0$ đến $\color{blue} 0{,}2$ s tăng đều từ $\color{blue} 0$ lên $\color{blue} 4\cdot10^{-3}$ Wb; từ $\color{blue} 0{,}2$ s đến $\color{blue} 0{,}5$ s giữ không đổi; từ $\color{blue} 0{,}5$ s đến $\color{blue} 0{,}6$ s giảm đều về $\color{blue} 0$. Tính suất điện động cảm ứng trong từng giai đoạn.
>
> Hướng dẫn giải:
> Giai đoạn 1: độ dốc $\color{blue} \dfrac{4\cdot10^{-3}}{0{,}2} = 0{,}02$ Wb/s ⇒ $\color{blue} |e_1| = 200\cdot0{,}02 = 4$ V.
> Giai đoạn 2: $\color{blue} \Phi$ không đổi ⇒ $\color{blue} e_2 = 0$.
> Giai đoạn 3: độ dốc $\color{blue} \dfrac{4\cdot10^{-3}}{0{,}1} = 0{,}04$ Wb/s ⇒ $\color{blue} |e_3| = 8$ V, và **ngược dấu** với $\color{blue} e_1$.
> Nhận xét: giai đoạn 3 từ thông giảm về cùng mức nhưng trong thời gian ngắn gấp đôi nên suất điện động lớn gấp đôi.

```quiz
{
  "type": "multiple_choice",
  "question": "Từ thông qua một khung dây biến thiên theo thời gian biểu diễn như hình vẽ. \n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/jkb2gpdqq5_1787365632548.jpg)\n Suất điện động cảm ứng trong khung trong các thời điểm tương ứng",
  "options": [
    "trong khoảng thời gian từ $0$ đến $0,1$ s là $3$ V.",
    "trong khoảng thời gian từ $0,1$ đến $0,2$ s là $6$ V.",
    "trong khoảng thời gian từ $0,2$ đến $0,3$ s là $9$ V.",
    "trong khoảng thời gian từ $0$ đến $0,3$ s là $4$ V."
  ],
  "answerIndex": 3,
  "answer": "Phương pháp giải:\n- Độ lớn suất điện động cảm ứng trung bình trong khoảng thời gian $\\Delta t$: $|e_c| = \\frac{|\\Delta\\Phi|}{\\Delta t} = \\frac{|\\Phi_2 - \\Phi_1|}{\\Delta t}$.\n\nLời giải:\n- Dựa vào đồ thị $\\Phi(t)$:\n  + Tại $t = 0$ s thì $\\Phi = 1,2$ Wb.\n  + Tại $t = 0,2$ s thì $\\Phi = 0,6$ Wb.\n  + Tại $t = 0,3$ s thì $\\Phi = 0$ Wb.\n- Tính độ lớn suất điện động cảm ứng trong các khoảng thời gian:\n  + Từ $0$ đến $0,2$ s: $|e_{c1}| = \\frac{|0,6 - 1,2|}{0,2 - 0} = 3$ V.\n  + Từ $0,2$ s đến $0,3$ s: $|e_{c2}| = \\frac{|0 - 0,6|}{0,3 - 0,2} = 6$ V.\n  + Từ $0$ đến $0,3$ s: $|e_{c3}| = \\frac{|0 - 1,2|}{0,3 - 0} = 4$ V.\n- Do đó, phương án D là chính xác.\n- Chọn D.",
  "sourceQuestionId": "45f364fb-978e-4903-bbc8-b6afa92bf56f",
  "maCauHoi": "CH_1787365814427_lqd5"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Từ thông $\\Phi$ qua một khung dây biến đổi theo thời gian được diễn tả bằng đồ thị như hình bên. Đồ thị biểu diễn sự biến đổi của cảm ứng từ $B$ theo thời gian của một từ trường như hình vẽ. Một khung dây dẫn đặt trong từ trường này sao cho mặt phẳng khung dây vuông góc với cảm ứng từ. Gọi $e_1, e_2, e_3$ là độ lớn các suất điện động cảm ứng xuất hiện trong khung với các khoảng thời gian từ $0$ đến $t_1$, $t_1$ đến $t_2$ và $t_2$ đến $t_3$. Xếp theo thứ tự tăng dần của các độ lớn suất điện động này là:\n\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/uoxqovrgjkq_1787276170458.jpg)",
  "options": [
    "$e_1, e_2, e_3$",
    "$e_2, e_3, e_1$",
    "$e_1, e_3, e_2$",
    "$e_3, e_2, e_1$"
  ],
  "answerIndex": 2,
  "answer": "Phương pháp giải:\nĐộ lớn suất điện động cảm ứng tỉ lệ thuận với độ dốc (độ nghiêng) của đường biểu diễn $B$ theo $t$.\n\nLời giải:\n- Trong khoảng từ $0$ đến $t_1$: $B$ không đổi nên $e_1 = 0$.\n- Trong khoảng từ $t_1$ đến $t_2$: $B$ tăng nhanh (đường thẳng có độ dốc lớn nhất) nên $e_2$ lớn nhất.\n- Trong khoảng từ $t_2$ đến $t_3$: $B$ giảm (độ dốc vừa phải) nên $e_3$ có giá trị trung bình ($0 < e_3 < e_2$).\nThứ tự tăng dần: $e_1, e_3, e_2$.",
  "sourceQuestionId": "6663d5be-4f26-49f6-aa42-b3a5b2b999e6",
  "maCauHoi": "CH_1787276715808_8gsu"
}
```

---

## 💡 DẠNG 5: SUẤT ĐIỆN ĐỘNG TRONG THANH DẪN CHUYỂN ĐỘNG

### 🛠 Phương pháp giải

#### Bước 1: Nhận diện bố trí
Thanh dài $\color{blue} l$ trượt trên hai ray với tốc độ $\color{blue} v$, từ trường $\color{blue} \vec{B}$ **vuông góc** mặt phẳng ray ⇒ $\color{blue} |e_c| = Blv$. Nếu $\color{blue} \vec{B}$ hợp với mặt phẳng ray góc $\color{blue} \beta$ thì chỉ thành phần $\color{blue} B\sin\beta$ vuông góc mới đóng góp: $\color{blue} |e_c| = Blv\sin\beta$.

#### Bước 2: Chiều dòng điện cảm ứng
Dùng định luật Lenz với $\color{blue} S$ đang tăng hay giảm; hoặc quy tắc bàn tay phải cho thanh chuyển động: đặt bàn tay phải hứng $\color{blue} \vec{B}$ vào lòng bàn tay, ngón cái theo $\color{blue} \vec{v}$, bốn ngón chỉ chiều dòng điện trong thanh.

#### Bước 3: Dòng điện, lực từ hãm, công suất
$\color{blue} I = \dfrac{Blv}{R}$; thanh chịu lực từ $\color{blue} F = BIl = \dfrac{B^2l^2v}{R}$ **ngược chiều chuyển động** (định luật Lenz). Muốn thanh chuyển động **đều** phải kéo bằng lực $\color{blue} F_k = F$; công suất cơ $\color{blue} F_k v$ **bằng** công suất toả nhiệt $\color{blue} I^2R$.

#### Bước 4: Nếu thanh trượt dưới tác dụng của trọng lực
Thanh đạt tốc độ **giới hạn** khi lực từ cân bằng thành phần trọng lực: $\color{blue} \dfrac{B^2l^2v_{\max}}{R} = mg\sin\gamma$ (ray nghiêng góc $\color{blue} \gamma$).

---

> ### 📌 Ví dụ mẫu
>
> Thanh kim loại $\color{blue} MN$ dài $\color{blue} 20$ cm trượt đều với tốc độ $\color{blue} 2$ m/s trên hai ray nằm ngang, trong từ trường đều $\color{blue} B = 0{,}5$ T thẳng đứng. Mạch kín có điện trở $\color{blue} 0{,}4\ \Omega$. Tính suất điện động cảm ứng, dòng điện trong mạch và lực kéo cần thiết để thanh chuyển động đều.
>
> Hướng dẫn giải:
> $\color{blue} |e_c| = Blv = 0{,}5\cdot0{,}2\cdot2 = 0{,}2$ V.
> $\color{blue} I = \dfrac{0{,}2}{0{,}4} = 0{,}5$ A.
> Lực từ hãm $\color{blue} F = BIl = 0{,}5\cdot0{,}5\cdot0{,}2 = 0{,}05$ N ⇒ lực kéo $\color{blue} F_k = 0{,}05$ N.
> Kiểm tra năng lượng: $\color{blue} F_k v = 0{,}1$ W và $\color{blue} I^2R = 0{,}25\cdot0{,}4 = 0{,}1$ W — khớp.

```quiz
{
  "type": "multiple_choice",
  "question": "Một thanh kim loại nhẹ có thể trượt trên hai thanh ray kim loại nằm ngang, biết rằng hai ray được nối với nhau tại P và Q. Hệ được đặt trong từ trường đều có cảm ứng từ $\\vec{B}$ hướng thẳng đứng lên. Khi tịnh tiến thanh MN với vận tốc $\\vec{v}$ như hình vẽ: \n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/j631p0xkl4g_1787242591438.jpg)\n Nhận định nào về dòng điện cảm ứng xuất hiện trên khung MNPQ là **đúng**?",
  "options": [
    "Cường độ dòng cảm ứng $i = 0$.",
    "Dòng điện cảm ứng có chiều từ M tới N",
    "Dòng điện cảm ứng có chiều từ N tới M",
    "Dòng điện cảm ứng đổi chiều liên tục."
  ],
  "answerIndex": 1,
  "answer": "Phương pháp giải:\n- Xác định sự biến thiên diện tích mạch kín khi thanh chuyển động $\\Rightarrow$ sự biến thiên từ thông.\n- Áp dụng định luật Len-xơ để xác định chiều từ trường cảm ứng $\\vec{B}_c$ và quy tắc nắm tay phải để xác định chiều dòng điện cảm ứng.\n\nLời giải:\n- Khi thanh $MN$ chuyển động sang phải với vận tốc $\\vec{v}$, diện tích mạch kín $MNPQ$ tăng lên $\\Rightarrow$ từ thông $\\Phi$ qua mạch tăng.\n- Vectơ cảm ứng từ $\\vec{B}$ hướng thẳng đứng lên trên. Vì từ thông tăng nên từ trường cảm ứng $\\vec{B}_c$ ngược chiều với $\\vec{B}$, tức là $\\vec{B}_c$ hướng thẳng đứng xuống dưới.\n- Áp dụng quy tắc nắm tay phải: ngón cái hướng xuống dưới $\\Rightarrow$ chiều dòng điện cảm ứng chạy theo chiều kim đồng hồ (nhìn từ trên xuống): $P \\to Q \\to M \\to N \\to P$.\n- Như vậy, trên thanh kim loại $MN$, dòng điện cảm ứng có chiều chạy từ $M$ tới $N$.\nChọn B.",
  "sourceQuestionId": "ced86a2f-033e-4df3-b7fc-035d65b422bd",
  "maCauHoi": "CH_1787243092470_fdh1"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Một thanh dẫn điện dài $1$ m, chuyển động trong từ trường đều có véctor cảm ứng từ vuông góc với thanh và $B = 0,4$ T với vận tốc $2$ m/s, vuông góc với thanh, tạo với véctor cảm ứng từ một góc $\\theta = 45^\\circ$. Nối hai đầu thanh với một điện trở $R = 0,2\\ \\Omega$ thành mạch kín thì cường độ dòng điện qua điện trở bằng",
  "options": [
    "$\\sqrt{3}$ V",
    "$2$ V",
    "$2\\sqrt{3}$ V",
    "$2\\sqrt{2}$ V"
  ],
  "answerIndex": 3,
  "answer": "Phương pháp giải:\nSuất điện động cảm ứng trong thanh chuyển động: $e_c = B v l \\sin\\theta$.\nCường độ dòng điện: $I = \\frac{e_c}{R}$.\n\nLời giải:\nSuất điện động cảm ứng: $e_c = 0,4 \\cdot 2 \\cdot 1 \\cdot \\sin 45^\\circ = 0,4\\sqrt{2}$ V.\nCường độ dòng điện trong mạch: $I = \\frac{e_c}{R} = \\frac{0,4\\sqrt{2}}{0,2} = 2\\sqrt{2}$ A.",
  "sourceQuestionId": "a92a5402-e4f7-4bea-ad5e-305f2212b354",
  "maCauHoi": "CH_1787276715808_csmg"
}
```
