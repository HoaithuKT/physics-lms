# <span style="text-align: center; display: block">BÀI 18: ỨNG DỤNG HIỆN TƯỢNG CẢM ỨNG ĐIỆN TỪ</span>

---

## 📘 PHẦN 1: TÓM TẮT LÝ THUYẾT TRỌNG TÂM

### <span style="color: #ef4444">1. Máy biến áp</span>

**Cấu tạo:** hai cuộn dây có **số vòng khác nhau** quấn trên một **lõi kín** bằng các lá thép pha silicon ghép cách điện (để giảm hao phí do dòng Foucault).

* **Cuộn sơ cấp** ($\color{blue} N_1$ vòng): nối với nguồn điện xoay chiều $\color{blue} u_1$.
* **Cuộn thứ cấp** ($\color{blue} N_2$ vòng): nối với tải tiêu thụ, cho điện áp $\color{blue} u_2$.

**Nguyên tắc hoạt động:** dòng xoay chiều trong cuộn sơ cấp tạo **từ thông biến thiên** trong lõi; hầu như toàn bộ từ thông ấy chạy trong lõi nên **từ thông qua mỗi vòng dây của hai cuộn bằng nhau** ⇒ suất điện động cảm ứng trong **mỗi vòng** bằng nhau ⇒ suất điện động mỗi cuộn tỉ lệ với số vòng:

$$\color{blue} \frac{U_1}{U_2} = \frac{N_1}{N_2}$$

* $\color{blue} N_2 > N_1$: **máy tăng áp**; $\color{blue} N_2 < N_1$: **máy hạ áp**.
* Máy biến áp **không hoạt động với dòng điện không đổi** (từ thông không biến thiên ⇒ không có cảm ứng).

**Máy biến áp lí tưởng** (bỏ qua mọi hao phí): công suất hai cuộn bằng nhau $\color{blue} U_1I_1 = U_2I_2$, nên

$$\color{blue} \frac{U_1}{U_2} = \frac{N_1}{N_2} = \frac{I_2}{I_1}$$

— tăng áp bao nhiêu lần thì dòng điện **giảm** bấy nhiêu lần.

**Máy biến áp thực tế:** hiệu suất $\color{blue} H = \dfrac{P_2}{P_1} = \dfrac{U_2I_2}{U_1I_1} < 1$.

**Sạc điện không dây** (em có biết) hoạt động như một máy biến áp có lõi không khí: cuộn dây trong đế sạc là sơ cấp, cuộn dây trong điện thoại là thứ cấp.

---

### <span style="color: #ef4444">2. Đàn ghi ta điện</span>

Dây đàn bằng **thép** nằm sát trên nam châm vĩnh cửu nhỏ đặt trong một cuộn dây cảm ứng ⇒ dây đàn bị **từ hoá**, trở thành một nam châm nhỏ.

Gảy dây ⇒ dây dao động ⇒ khoảng cách dây–cuộn dây thay đổi ⇒ **từ thông qua cuộn dây biến thiên** ⇒ xuất hiện **dòng điện cảm ứng** biến đổi **cùng tần số** với dao động của dây ⇒ đưa qua máy tăng âm ra loa.

Vì vậy: dây đàn **phải bằng thép** (nhựa, nilon không nhiễm từ thì không tạo được tín hiệu); đàn **không cần hộp cộng hưởng**; gảy mạnh thì biên độ dao động lớn ⇒ $\color{blue} \left|\dfrac{\Delta\Phi}{\Delta t}\right|$ lớn ⇒ suất điện động lớn ⇒ âm to hơn.

---

### <span style="color: #ef4444">3. Dòng điện Foucault</span>

Dòng điện cảm ứng sinh ra **trong khối vật dẫn** khi vật dẫn chuyển động trong từ trường hoặc đặt trong từ trường biến thiên gọi là **dòng điện Foucault**. Đặc tính: **xoáy** — đường dòng là những đường cong kín trong khối vật dẫn.

Tấm kim loại dao động giữa hai cực nam châm **dừng lại rất nhanh** vì dòng Foucault sinh ra lực từ **cản trở chuyển động** của chính tấm (định luật Lenz). Xẻ rãnh tấm kim loại ⇒ điện trở đối với dòng Foucault **tăng** ⇒ dòng nhỏ đi ⇒ tấm dao động lâu hơn.

| Ứng dụng có lợi | Tác hại và cách khắc phục |
|---|---|
| Phanh điện từ, đồng hồ đo điện (lá nhôm hãm kim), bếp từ, luyện kim (lò cảm ứng), đệm từ | Làm **nóng lõi** máy biến áp, động cơ → hao phí. Khắc phục: lõi ghép từ **lá thép mỏng cách điện**, đặt song song với đường sức |

```quiz
{
  "type": "multiple_choice",
  "question": "Máy biến áp là thiết bị",
  "options": [
    "biến đổi điện áp của dòng điện xoay chiều.",
    "thay đổi điện áp của dòng điện không đổi.",
    "biến đổi tần số của dòng điện không đổi.",
    "biến đổi tần số của dòng điện xoay chiều."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\nĐịnh nghĩa máy biến áp.\n\nLời giải:\nMáy biến áp là thiết bị biến đổi điện áp của dòng điện xoay chiều mà không làm thay đổi tần số của nó.",
  "sourceQuestionId": "edc4218d-baaf-43ff-9138-217de47bb380",
  "maCauHoi": "CH_1787283184068_cvcp"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Khi cho dòng điện không đổi qua cuộn sơ cấp của máy biến áp thì trong mạch kín của cuộn thứ cấp",
  "options": [
    "có dòng điện xoay chiều chạy qua.",
    "có dòng điện một chiều chạy qua.",
    "có dòng điện không đổi chạy qua.",
    "không có dòng điện chạy qua."
  ],
  "answerIndex": 3,
  "answer": "Phương pháp giải:\nNguyên tắc hoạt động của máy biến áp dựa trên hiện tượng cảm ứng điện từ.\n\nLời giải:\nDòng điện không đổi tạo ra từ trường không biến thiên, do đó từ thông qua cuộn thứ cấp không đổi, không sinh ra suất điện động cảm ứng. Vì vậy không có dòng điện chạy qua cuộn thứ cấp.",
  "sourceQuestionId": "7ea103aa-8cf9-4d40-b595-6c21038b29f3",
  "maCauHoi": "CH_1787283184068_3vd0"
}
```

---

# PHẦN 2: PHÂN DẠNG BÀI TẬP & PHƯƠNG PHÁP GIẢI

## 💡 DẠNG 1: MÁY BIẾN ÁP — TÍNH ĐIỆN ÁP, SỐ VÒNG, DÒNG ĐIỆN

### 🛠 Phương pháp giải

#### Bước 1: Xác định cuộn nào là sơ cấp
Cuộn **nối với nguồn** là sơ cấp — không phải cứ cuộn nhiều vòng hơn. Một máy có thể dùng làm tăng áp hay hạ áp tuỳ cách mắc.

#### Bước 2: Dùng tỉ số điện áp – số vòng (đúng cho cả máy thực tế khi thứ cấp hở)
$$\color{blue} \frac{U_1}{U_2} = \frac{N_1}{N_2}$$
Điện áp trong đề là giá trị **hiệu dụng**; nếu cho cực đại thì chia $\color{blue} \sqrt{2}$ trước (hoặc cả hai đều cực đại thì tỉ số vẫn đúng).

#### Bước 3: Nếu là máy lí tưởng, thêm quan hệ dòng điện
$$\color{blue} \frac{I_2}{I_1} = \frac{N_1}{N_2}, \qquad U_1I_1 = U_2I_2$$
Có tải $\color{blue} R$ ở thứ cấp: $\color{blue} I_2 = \dfrac{U_2}{R}$, rồi suy ngược ra $\color{blue} I_1$.

#### Bước 4: Máy thực tế hoặc đề cho hiệu suất
$\color{blue} P_2 = HP_1 \Rightarrow U_2I_2 = H\,U_1I_1$. Tỉ số điện áp vẫn theo số vòng (nếu bỏ qua điện trở dây quấn), chỉ tỉ số dòng điện là thay đổi.

#### Bước 5: Bài "quấn thiếu / quấn ngược"
Quấn ngược $\color{blue} n$ vòng ở một cuộn có $\color{blue} N$ vòng ⇒ số vòng **hiệu dụng** là $\color{blue} N - 2n$ (mỗi vòng ngược triệt tiêu một vòng thuận). Quấn thiếu $\color{blue} n$ vòng ⇒ $\color{blue} N - n$. Lập tỉ số trước và sau khi sửa rồi giải.

### 🖩 Bấm máy Casio fx-580VN X

**Việc máy làm giúp:** giải phương trình tỉ lệ khi ẩn nằm lẫn trong tử và mẫu (bài quấn ngược).

| Việc | Bấm | Ghi chú |
|---|---|---|
| Nhập phương trình $\color{blue} \dfrac{220}{U_2} = \dfrac{1000 - 2x}{100}$ với $\color{blue} U_2 = 24$ | `220` `÷` `24` `ALPHA CALC` (dấu =) `(` `1000` `−` `2` `x` `)` `÷` `100` | `x` là phím `x` ở hàng phím trên |
| Giải | `SHIFT CALC` (SOLVE) → máy hỏi `x?` → `=` | Máy cho $\color{blue} x = 41{,}67$; bài thật lấy số nguyên gần nhất hoặc chọn dữ kiện cho chia hết |

> 💡 Phương trình bậc nhất thì SOLVE ra ngay và không có nghiệm ngoại lai. Chỉ cần đọc lại một lần: $\color{blue} x$ phải **dương và nhỏ hơn** số vòng.

---

> ### 📌 Ví dụ mẫu
>
> Một máy biến áp lí tưởng có cuộn sơ cấp $\color{blue} 1100$ vòng nối với mạng điện $\color{blue} 220$ V, cuộn thứ cấp $\color{blue} 60$ vòng nối với bóng đèn có điện trở $\color{blue} 4\ \Omega$. Tính điện áp hai đầu bóng đèn, cường độ dòng điện qua đèn và cường độ dòng điện trong cuộn sơ cấp.
>
> Hướng dẫn giải:
> $\color{blue} U_2 = U_1\dfrac{N_2}{N_1} = 220\cdot\dfrac{60}{1100} = 12$ V.
> $\color{blue} I_2 = \dfrac{U_2}{R} = \dfrac{12}{4} = 3$ A.
> Lí tưởng: $\color{blue} U_1I_1 = U_2I_2 \Rightarrow I_1 = \dfrac{12\cdot3}{220} \approx 0{,}164$ A.
> (Kiểm tra: $\color{blue} \dfrac{I_2}{I_1} = \dfrac{3}{0{,}164} \approx 18{,}3 = \dfrac{1100}{60}$ — khớp.)

```quiz
{
  "type": "multiple_choice",
  "question": "Một máy hạ áp có số vòng dây của cuộn sơ cấp và cuộn thứ cấp lần lượt là $N_1$ và $N_2$. Kết luận nào sau đây là đúng?",
  "options": [
    "$N_2 = \\frac{1}{N_1}$.",
    "$\\frac{N_2}{N_1} = 1$.",
    "$\\frac{N_2}{N_1} > 1$.",
    "$\\frac{N_2}{N_1} < 1$."
  ],
  "answerIndex": 3,
  "answer": "Phương pháp giải:\nMáy hạ áp có $N_2 < N_1$.\n\nLời giải:\nDo $N_2 < N_1$ nên $\\frac{N_2}{N_1} < 1$.",
  "sourceQuestionId": "c7d8c48a-2c66-4ee0-8d96-f80ef008c236",
  "maCauHoi": "CH_1787283184068_sz0m"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Một máy biến áp lí tưởng có tỉ số giữa số vòng dây của cuộn sơ cấp và số vòng dây của cuộn thứ cấp là $8$. Đặt điện áp xoay chiều có giá trị hiệu dụng $200$ V vào hai đầu cuộn sơ cấp thì điện áp hiệu dụng hai đầu cuộn thứ cấp để hở là",
  "options": [
    "$10$ V.",
    "$25\\sqrt{2}$ V.",
    "$10\\sqrt{2}$ V.",
    "$25$ V."
  ],
  "answerIndex": 3,
  "answer": "Phương pháp giải:\nÁp dụng công thức máy biến áp lí tưởng: $\\frac{U_1}{U_2} = \\frac{N_1}{N_2}.$\n\nLời giải:\nTa có:\n$\\frac{U_1}{U_2} = \\frac{N_1}{N_2} = 8$\n$\\Rightarrow U_2 = \\frac{U_1}{8} = \\frac{200}{8} = 25$ V.",
  "sourceQuestionId": "0a29d7d6-88d0-4e38-9d04-73fe45977fca",
  "maCauHoi": "CH_1787394626362_amnb"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Cuộn thứ cấp của một máy biến áp có $800$ vòng. Từ thông trong lõi biến thế biến thiên với tần số $50$ Hz và giá trị từ thông cực đại qua một vòng dây bằng $2,4$ mWb. Suất điện động hiệu dụng cuộn thứ cấp có giá trị xấp xỉ bằng",
  "options": [
    "$220$ V.",
    "$456,8$ V.",
    "$426,5$ V.",
    "$140$ V."
  ],
  "answerIndex": 2,
  "answer": "Phương pháp giải:\n- Suất điện động cảm ứng cực đại qua cuộn thứ cấp: $E_0 = 2\\pi f N_2 \\Phi_0$.\n- Suất điện động hiệu dụng ở cuộn thứ cấp: $E_2 = \\frac{E_0}{\\sqrt{2}}$.\n\nLời giải:\nDo cấu tạo của máy biến áp, hầu như mọi đường sức từ chỉ chạy trong lõi biến áp nên từ thông qua mỗi vòng dây ở cả hai cuộn bằng nhau, suất điện động cảm ứng trong mỗi vòng dây cũng bằng nhau.\nSuất điện động ở cuộn thứ cấp là $e_{c2} = -N_2 \\frac{\\Delta \\Phi}{\\Delta t} = 2\\pi f N_2 \\Phi_0 \\sin(\\omega t)$.\nSuất điện động hiệu dụng cuộn thứ cấp là:\n$E_2 = \\frac{E_0}{\\sqrt{2}} = \\frac{2\\pi f N_2 \\Phi_0}{\\sqrt{2}} = \\frac{2\\pi \\cdot 50 \\cdot 800 \\cdot 2,4 \\cdot 10^{-3}}{\\sqrt{2}} \\approx 426,5$ V.",
  "sourceQuestionId": "5f17ce14-9505-4f9c-b85a-47ded550b28a",
  "maCauHoi": "CH_1787396035793_fgr1"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Đặt vào hai đầu cuộn sơ cấp của một máy biến áp một điện áp xoay chiều, khi đó điện áp xuất hiện ở hai đầu cuộn thứ cấp là",
  "options": [
    "điện áp không đổi.",
    "điện áp xoay chiều có cùng tần số.",
    "điện áp một chiều.",
    "điện áp xoay chiều khác tần số."
  ],
  "answerIndex": 1,
  "answer": "Phương pháp giải:\nĐặc điểm của máy biến áp.\n\nLời giải:\nMáy biến áp làm thay đổi giá trị hiệu dụng của điện áp xoay chiều nhưng giữ nguyên tần số của điện áp.",
  "sourceQuestionId": "718ef977-eb50-468a-8d8d-72dcf1d5d2ea",
  "maCauHoi": "CH_1787283184068_axaf"
}
```

---

## 💡 DẠNG 2: TRUYỀN TẢI ĐIỆN NĂNG ĐI XA — HAO PHÍ VÀ HIỆU SUẤT

### 🛠 Phương pháp giải

Đây là **lí do lớn nhất** để dùng dòng xoay chiều và máy biến áp (câu hỏi thảo luận trong Bài 17). Nhà máy phát công suất $\color{blue} P$ với điện áp $\color{blue} U$ ở đầu đường dây, dây có điện trở $\color{blue} R$.

#### Bước 1: Dòng điện trên đường dây
$$\color{blue} I = \frac{P}{U}$$
(nếu đề cho hệ số công suất thì $\color{blue} I = \dfrac{P}{U\cos\varphi}$; trong chương này thường $\color{blue} \cos\varphi = 1$).

#### Bước 2: Công suất hao phí do toả nhiệt trên dây
$$\color{blue} \Delta P = I^2R = \frac{P^2R}{U^2}$$

#### Bước 3: Hiệu suất truyền tải
$$\color{blue} H = \frac{P - \Delta P}{P} = 1 - \frac{PR}{U^2}$$

#### Bước 4: Kết luận then chốt
Với $\color{blue} P$ và $\color{blue} R$ cố định, **tăng $\color{blue} U$ lên $\color{blue} k$ lần thì hao phí giảm $\color{blue} k^2$ lần**. Đó là việc của máy tăng áp ở đầu đường dây và máy hạ áp ở nơi tiêu thụ. Giảm $\color{blue} R$ (dây to hơn, vật liệu tốt hơn) cũng được nhưng tốn kém hơn nhiều.

#### Bước 5: Bài "công suất nơi tiêu thụ không đổi"
Khi đề cố định $\color{blue} P_{\text{tt}} = P - \Delta P$ chứ không cố định $\color{blue} P$: lập hai phương trình cho hai trường hợp $\color{blue} (U_1, H_1)$ và $\color{blue} (U_2, H_2)$ với cùng $\color{blue} P_{\text{tt}}$:
$$\color{blue} \Delta P = P - P_{\text{tt}} = \frac{P^2R}{U^2}, \quad P = \frac{P_{\text{tt}}}{H} \Rightarrow H(1 - H)\,U^2 = P_{\text{tt}}R\ \text{(hằng số)} \Rightarrow \frac{U_2^2}{U_1^2} = \frac{H_1(1 - H_1)}{H_2(1 - H_2)}$$

### 🖩 Bấm máy Casio fx-580VN X

Bước 5 cho phương trình **bậc hai** theo $\color{blue} H_2$ — dùng SOLVE thay vì khai triển tay:

Nhập `x(1 − x) × U₂² = H₁(1 − H₁) × U₁²` (thay số) rồi `SHIFT CALC`, cho $\color{blue} x$ khởi đầu là `0.9`. Phương trình có **hai nghiệm** đối xứng qua $\color{blue} 0{,}5$; khi tăng điện áp thì hiệu suất phải **tăng**, nên lấy nghiệm **lớn hơn $\color{blue} H_1$**. Máy dừng ở nghiệm nào tuỳ giá trị khởi đầu — khởi đầu `0.9` để đi về nghiệm gần $\color{blue} 1$.

---

> ### 📌 Ví dụ mẫu
>
> Điện năng được truyền từ trạm phát có công suất $\color{blue} 100$ kW, điện áp $\color{blue} 5$ kV, trên đường dây có điện trở tổng cộng $\color{blue} 10\ \Omega$.
> a) Tính công suất hao phí và hiệu suất truyền tải.
> b) Muốn hao phí giảm còn $\color{blue} \dfrac{1}{25}$ ban đầu thì phải tăng điện áp lên bao nhiêu?
>
> Hướng dẫn giải:
> a) $\color{blue} I = \dfrac{P}{U} = \dfrac{100\cdot10^3}{5\cdot10^3} = 20$ A ⇒ $\color{blue} \Delta P = I^2R = 400\cdot10 = 4000$ W $\color{blue} = 4$ kW.
> $\color{blue} H = 1 - \dfrac{4}{100} = 96\%$.
> b) $\color{blue} \Delta P \propto \dfrac{1}{U^2}$ ⇒ giảm $\color{blue} 25$ lần thì $\color{blue} U$ tăng $\color{blue} \sqrt{25} = 5$ lần ⇒ $\color{blue} U' = 25$ kV.

```quiz
{
  "type": "multiple_choice",
  "question": "Nhận định nào sau đây là **không đúng** khi nói về vai trò của máy biến áp trong truyền tải điện năng?",
  "options": [
    "Máy biến áp có vai trò quan trọng trong chuyển đổi dòng một chiều thành dòng xoay chiều giúp dòng điện xoay chiều được sử dụng rộng rãi hiện nay.",
    "Máy biến áp có vai trò lớn trong truyền tải điện năng đi xa, giúp giảm hao phí trên đường truyền.",
    "Máy biến áp có vai trò quan trọng trong truyền tải dòng điện xoay chiều giúp tăng điện áp trước khi truyền và giảm điện áp ở nơi sử dụng.",
    "Máy biến áp có vai trò lớn trong việc giảm chi phí truyền tải điện năng từ nhà máy đến nơi sử dụng."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\nNắm được vai trò của máy biến áp trong truyền tải điện năng.\n\nLời giải:\nMáy biến áp hoạt động dựa trên hiện tượng cảm ứng điện từ nên chỉ hoạt động với dòng điện xoay chiều, không hoạt động với dòng điện 1 chiều không đổi để biến dòng điện 1 chiều thành dòng điện xoay chiều.",
  "sourceQuestionId": "d4e3eef4-6e37-4811-9f27-1ddc6e78aee1",
  "maCauHoi": "CH_1787394626362_i3w7"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Trong quá trình truyền tải điện năng, biện pháp giảm hao phí trên đường dây tải điện được sử dụng chủ yếu hiện nay là",
  "options": [
    "tăng điện áp trước khi truyền tải.",
    "giảm công suất truyền tải.",
    "tăng chiều dài đường dây.",
    "giảm tiết diện dây."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\nCông thức công suất hao phí: $\\Delta P = \\frac{P^2 R}{U^2 \\cos^2\\varphi}$. Để giảm $\\Delta P$, phương pháp hiệu quả nhất là tăng điện áp $U$.\n\nLời giải:\nTăng điện áp trước khi truyền tải giúp giảm hao phí đáng kể do $\\Delta P \\sim \\frac{1}{U^2}$.",
  "sourceQuestionId": "6c17ea95-bb7f-4c76-886c-acc1bc9d0b6c",
  "maCauHoi": "CH_1787283184068_zxe2"
}
```

---

## 💡 DẠNG 3: GIẢI THÍCH HIỆN TƯỢNG THỰC TẾ BẰNG CẢM ỨNG ĐIỆN TỪ

### 🛠 Phương pháp giải

Mọi câu hỏi giải thích trong bài này đều đi qua **cùng một chuỗi ba mắt xích**:

#### Mắt xích 1: Cái gì làm từ thông biến thiên?
Chuyển động tương đối (dây đàn rung, tấm kim loại dao động, nam châm quay trong phanh), hoặc dòng điện xoay chiều (bếp từ, sạc không dây, máy biến áp).

#### Mắt xích 2: Từ thông biến thiên ở đâu?
Trong **cuộn dây** (đàn ghi ta, sạc không dây, máy biến áp) ⇒ dòng điện cảm ứng trong mạch; hay trong **khối kim loại** (bếp từ, phanh, lõi biến áp) ⇒ dòng Foucault.

#### Mắt xích 3: Hệ quả gì?
* **Điện năng** lấy ra (máy phát, sạc không dây, tín hiệu âm thanh).
* **Nhiệt** (bếp từ làm nóng đáy nồi kim loại; lõi biến áp nóng lên — tác hại).
* **Lực cản** theo định luật Lenz (phanh điện từ, tấm kim loại dừng nhanh, đồng hồ đo điện có lá nhôm hãm dao động kim).

Trả lời gọn theo đúng thứ tự ba mắt xích là đủ điểm tự luận và cũng là cách loại nhanh phương án sai trong trắc nghiệm.

---

> ### 📌 Ví dụ mẫu
>
> Vì sao bếp từ chỉ nấu được bằng nồi có đáy làm từ vật liệu **nhiễm từ** (sắt, thép, inox từ tính) mà không dùng được nồi nhôm hay thuỷ tinh?
>
> Hướng dẫn giải:
> (1) Dưới mặt bếp là cuộn dây có **dòng xoay chiều tần số cao** chạy qua ⇒ tạo **từ trường biến thiên**.
> (2) Từ trường biến thiên xuyên qua **đáy nồi** ⇒ trong đáy nồi (khối kim loại) xuất hiện **dòng Foucault**.
> (3) Dòng Foucault toả nhiệt (hiệu ứng Joule) làm **nóng trực tiếp đáy nồi**.
> Nồi thuỷ tinh không dẫn điện ⇒ không có dòng Foucault. Nồi nhôm dẫn điện nhưng **không nhiễm từ** nên từ thông qua đáy rất nhỏ, dòng Foucault yếu, nhiệt không đủ. Vật liệu sắt từ tập trung đường sức ⇒ từ thông lớn ⇒ dòng Foucault mạnh ⇒ nóng nhanh.

```quiz
{
  "type": "multiple_choice",
  "question": "Hoạt động của máy biến áp dựa trên",
  "options": [
    "hiện tượng tự cảm.",
    "hiện tượng cảm ứng điện từ.",
    "từ trường quay.",
    "tác dụng của lực từ."
  ],
  "answerIndex": 1,
  "answer": "Phương pháp giải:\nNắm vững nguyên tắc hoạt động của máy biến áp.\n\nLời giải:\nHoạt động của máy biến áp dựa trên hiện tượng cảm ứng điện từ.",
  "sourceQuestionId": "ef8b38da-93bd-436f-8be7-b8a0e71bda14",
  "maCauHoi": "CH_1787394626362_z3o5"
}
```

```quiz
{
  "type": "true_false_cluster",
  "question": "Bếp từ là một thiết bị dùng trong nhà bếp sử dụng nguyên lý cảm ứng điện từ để nấu ăn.",
  "options": [
    {
      "content": "Bếp từ chỉ hoạt động với nồi chảo có đáy làm từ vật liệu nhiễm từ.",
      "isTrue": true
    },
    {
      "content": "Bếp từ có thể làm nóng đồ ăn trực tiếp mà không cần nồi chảo.",
      "isTrue": false
    },
    {
      "content": "Bếp từ sử dụng năng lượng điện nhiều hơn so với bếp gas.",
      "isTrue": false
    },
    {
      "content": "Dòng điện chạy qua cuộn dây đồng đặt dưới mặt kính của bếp có thể là dòng điện có cường độ không đổi.",
      "isTrue": false
    }
  ],
  "answer": "Phương pháp giải:\nNguyên lý hoạt động và đặc điểm của bếp từ (ứng dụng dòng điện Foucault).\n\nLời giải:\na) Đúng. Bếp từ hoạt động bằng cách tạo ra từ trường biến thiên tần số cao, sinh ra dòng điện cảm ứng Foucault trong đáy nồi làm bằng vật liệu nhiễm từ (sắt, inox, thép).\nb) Sai. Bếp từ không trực tiếp làm nóng thức ăn mà làm nóng đáy nồi thông qua dòng điện cảm ứng, sau đó nhiệt từ đáy nồi mới truyền sang thức ăn.\nc) Sai. Bếp từ có hiệu suất nhiệt cao (khoảng $90\\%$) và ít thất thoát nhiệt ra môi trường nên tiết kiệm năng lượng hơn so với bếp gas.\nd) Sai. Bếp từ hoạt động dựa trên hiện tượng cảm ứng điện từ nên dòng điện chạy qua cuộn dây phải là dòng điện xoay chiều có tần số cao, không thể là dòng điện có cường độ không đổi.",
  "sourceQuestionId": "08d4a7d3-acfb-48f2-937d-27f307634b32",
  "maCauHoi": "CH_1787364206571_yqy5"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Máy biến áp",
  "options": [
    "là thiết bị biến đổi điện áp của dòng điện.",
    "có hai cuộn dây đồng có số vòng bằng nhau quấn trên lõi thép.",
    "cuộn dây nối với mạng điện xoay chiều gọi là cuộn thứ cấp.",
    "hoạt động dựa vào hiện tượng cảm ứng điện từ."
  ],
  "answerIndex": 3,
  "answer": "Phương pháp giải:\nNắm được cấu tạo và nguyên tắc hoạt động của máy biến áp.\n\nLời giải:\n- Máy biến áp chỉ biến đổi được điện áp xoay chiều (không biến đổi được điện áp một chiều không đổi).\n- Máy biến áp gồm hai cuộn dây có số vòng khác nhau quấn trên một lõi kín (lõi thép từ tính).\n- Cuộn dây nối với nguồn điện xoay chiều gọi là cuộn sơ cấp, cuộn nối với tải tiêu thụ gọi là cuộn thứ cấp.\n- Hoạt động của máy biến áp dựa trên hiện tượng cảm ứng điện từ.",
  "sourceQuestionId": "19c439f4-7ec2-4887-9330-c1422e286f98",
  "maCauHoi": "CH_1787394626362_6a26"
}
```
