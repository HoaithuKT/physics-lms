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

<!--QUIZ|Tính toán thông số Máy biến áp lí tưởng và thực tế|2|1-->

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

<!--QUIZ|Tính toán thông số Máy biến áp lí tưởng và thực tế|4|1,2,3-->

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

<!--QUIZ|Truyền tải điện năng và tối ưu hóa hao phí|2|2,3-->

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

<!--QUIZ|Giải thích hiện tượng thực tế Foucault, guitar điện|3|1,2-->
