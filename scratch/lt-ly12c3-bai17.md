# <span style="text-align: center; display: block">BÀI 17: MÁY PHÁT ĐIỆN XOAY CHIỀU</span>

---

## 📘 PHẦN 1: TÓM TẮT LÝ THUYẾT TRỌNG TÂM

### <span style="color: #ef4444">1. Nguyên tắc tạo ra dòng điện xoay chiều</span>

Khung dây $\color{blue} MNPQ$ diện tích $\color{blue} S$, $\color{blue} N$ vòng, **quay đều** với tốc độ góc $\color{blue} \omega$ quanh trục $\color{blue} OO'$ vuông góc với đường sức của từ trường đều $\color{blue} \vec{B}$. Góc giữa $\color{blue} \vec{n}$ và $\color{blue} \vec{B}$ tăng đều theo thời gian: $\color{blue} \alpha = \omega t + \varphi_0$, nên

$$\color{blue} \Phi = NBS\cos(\omega t + \varphi_0)$$

Từ thông biến thiên **điều hoà** ⇒ theo định luật Faraday, trong khung xuất hiện **suất điện động xoay chiều**:

$$\color{blue} e = E_0\cos(\omega t + \varphi_0'), \qquad E_0 = NBS\omega$$

* $\color{blue} E_0$: suất điện động **cực đại**; $\color{blue} \varphi_0'$: pha ban đầu của $\color{blue} e$.
* $\color{blue} e$ **trễ pha $\color{blue} \dfrac{\pi}{2}$** so với $\color{blue} \Phi$ (vì $\color{blue} e = -\dfrac{\Delta\Phi}{\Delta t}$ — đạo hàm của cos là $\color{blue} -\sin$): nếu $\color{blue} \Phi = \Phi_0\cos\omega t$ thì $\color{blue} e = \omega\Phi_0\cos\left(\omega t - \dfrac{\pi}{2}\right)$.
* Chu kì và tần số: $\color{blue} T = \dfrac{2\pi}{\omega}$ (s), $\color{blue} f = \dfrac{\omega}{2\pi} = \dfrac{1}{T}$ (Hz).

**Ý nghĩa vật lí (Hình 17.2):** khi mặt khung **vuông góc** với $\color{blue} \vec{B}$ (vị trí 1, 3, 5) thì $\color{blue} \Phi$ **cực đại** nhưng $\color{blue} e = 0$; khi mặt khung **song song** với $\color{blue} \vec{B}$ (vị trí 2, 4) thì $\color{blue} \Phi = 0$ nhưng $\color{blue} |e|$ **cực đại** — vì lúc đó từ thông biến thiên **nhanh nhất**.

Nối hai đầu khung với điện trở $\color{blue} R$ thành mạch kín thì dòng điện trong mạch biến thiên **cùng tần số** với $\color{blue} e$ — đó là **dòng điện xoay chiều**.

> 💡 Nguyên tắc: **làm từ thông qua khung dây biến thiên điều hoà theo thời gian** — dựa trên hiện tượng cảm ứng điện từ.

---

### <span style="color: #ef4444">2. Dòng điện xoay chiều</span>

**Biểu thức:**
$$\color{blue} u = U_0\cos(\omega t + \varphi_u) \ (\text{V}), \qquad i = I_0\cos(\omega t + \varphi_i)\ (\text{A})$$

| Kí hiệu | Tên gọi |
|---|---|
| $\color{blue} u$, $\color{blue} i$ | Điện áp, cường độ dòng điện **tức thời** tại thời điểm $\color{blue} t$ |
| $\color{blue} U_0$, $\color{blue} I_0$ | Giá trị **cực đại** (biên độ) |
| $\color{blue} \omega$ | Tần số góc (rad/s) |
| $\color{blue} \varphi_u$, $\color{blue} \varphi_i$ | Pha ban đầu của $\color{blue} u$ và $\color{blue} i$ |
| $\color{blue} \Delta\varphi = \varphi_u - \varphi_i$ | **Độ lệch pha** giữa $\color{blue} u$ và $\color{blue} i$ |

**Dòng điện có cường độ biến thiên điều hoà với thời gian theo quy luật hàm cosin (hoặc sin) gọi là dòng điện xoay chiều.**

**Giá trị hiệu dụng:** dòng xoay chiều cũng có tác dụng nhiệt. Cho $\color{blue} i = I_0\cos(\omega t + \varphi_i)$ chạy qua điện trở $\color{blue} R$ trong thời gian $\color{blue} t$ (lớn hơn nhiều chu kì) toả nhiệt lượng $\color{blue} Q$. Dòng **không đổi** $\color{blue} I$ chạy qua cùng $\color{blue} R$, cùng $\color{blue} t$ mà toả cùng $\color{blue} Q$ thì $\color{blue} I$ gọi là **cường độ hiệu dụng**:

$$\color{blue} I = \frac{I_0}{\sqrt{2}}, \qquad U = \frac{U_0}{\sqrt{2}}, \qquad E = \frac{E_0}{\sqrt{2}}$$

Ampe kế, vôn kế xoay chiều chỉ giá trị **hiệu dụng**; điện áp "220 V" của mạng điện gia đình là giá trị hiệu dụng, cực đại là $\color{blue} 220\sqrt{2} \approx 311$ V.

**Công suất toả nhiệt trên điện trở:** $\color{blue} P = I^2R = \dfrac{I_0^2R}{2}$, nhiệt lượng $\color{blue} Q = I^2Rt$.

---

### <span style="color: #ef4444">3. Máy phát điện xoay chiều</span>

**Cấu tạo:** hai bộ phận chính:

* **Phần cảm:** nam châm (điện hoặc vĩnh cửu) — **tạo ra từ trường**.
* **Phần ứng:** các cuộn dây — nơi **xuất hiện suất điện động cảm ứng**.

Bộ phận đứng yên gọi là **stato**, bộ phận quay gọi là **rôto**.

**Hai cách hoạt động:**

| | Cách 1 | Cách 2 |
|---|---|---|
| Rôto | **Khung dây** (phần ứng quay) | **Nam châm** (phần cảm quay) |
| Stato | Nam châm | Các cuộn dây |
| Lấy điện ra | Cần **hai vành khuyên** và **hai chổi quét** | Không cần — cuộn dây đứng yên, nối thẳng ra ngoài |
| Nhược điểm | Chổi quét nhanh mòn khi quay nhanh | — |

Máy phát công nghiệp dùng cách 2. Với rôto có $\color{blue} p$ **cặp cực** quay $\color{blue} n$ vòng/giây thì tần số dòng điện phát ra:

$$\color{blue} f = n\,p$$

(nếu $\color{blue} n$ tính bằng vòng/phút thì $\color{blue} f = \dfrac{n\,p}{60}$).

**Máy phát ba pha** (em có biết): stato có ba cuộn dây lệch nhau $\color{blue} 120^\circ$, cho ba suất điện động cùng biên độ, cùng tần số, lệch pha nhau $\color{blue} \dfrac{2\pi}{3}$.

---

### <span style="color: #ef4444">4. Ứng dụng và quy tắc an toàn</span>

Dòng xoay chiều có ưu thế **truyền tải đi xa** (nhờ máy biến áp — Bài 18), dùng rộng rãi nhờ tác dụng nhiệt, từ, phát sáng, sinh lí; trong y học dùng cho máy chụp cộng hưởng từ, siêu âm, X-quang, sốc điện…

Quy tắc an toàn: tuân thủ biển báo; **không chạm** vào chỗ hở, không cầm vật kim loại cắm vào ổ điện; tránh khu vực điện thế cao; kiểm tra bảo trì thiết bị định kì; **ngắt nguồn** khi thiên tai, sấm sét.

<!--QUIZ|Xác định thông số từ phương trình u, i, e|2|1-->

---

# PHẦN 2: PHÂN DẠNG BÀI TẬP & PHƯƠNG PHÁP GIẢI

## 💡 DẠNG 1: XÁC ĐỊNH CÁC THÔNG SỐ TỪ PHƯƠNG TRÌNH $\color{blue} u$, $\color{blue} i$, $\color{blue} e$

### 🛠 Phương pháp giải

#### Bước 1: Đối chiếu với dạng chuẩn $\color{blue} x = X_0\cos(\omega t + \varphi)$
Đọc ra ngay: biên độ $\color{blue} X_0$, tần số góc $\color{blue} \omega$, pha ban đầu $\color{blue} \varphi$. Nếu biểu thức viết bằng $\color{blue} \sin$, chuyển về $\color{blue} \cos$ bằng $\color{blue} \sin x = \cos\left(x - \dfrac{\pi}{2}\right)$. Nếu biên độ **âm**, đổi dấu bằng cách cộng $\color{blue} \pi$ vào pha.

#### Bước 2: Các đại lượng suy ra
$$\color{blue} T = \frac{2\pi}{\omega}, \qquad f = \frac{\omega}{2\pi}, \qquad U = \frac{U_0}{\sqrt{2}}, \qquad I = \frac{I_0}{\sqrt{2}}$$
Pha tại thời điểm $\color{blue} t$: $\color{blue} \omega t + \varphi$. Độ lệch pha $\color{blue} \Delta\varphi = \varphi_u - \varphi_i$: dương ⇒ $\color{blue} u$ **sớm pha** hơn $\color{blue} i$; âm ⇒ $\color{blue} u$ **trễ pha**.

#### Bước 3: Giá trị tức thời tại $\color{blue} t$ cho trước
Thay $\color{blue} t$ vào, **tính bằng radian**.

#### Bước 4: Với suất điện động của khung quay
$\color{blue} E_0 = NBS\omega$; muốn tăng $\color{blue} E_0$ thì tăng $\color{blue} N$, $\color{blue} B$, $\color{blue} S$ hoặc tốc độ quay. Pha ban đầu của $\color{blue} e$ xác định từ vị trí khung lúc $\color{blue} t = 0$: $\color{blue} \vec{n} \parallel \vec{B}$ thì $\color{blue} \Phi$ cực đại, $\color{blue} e = 0$ và đang tăng ⇒ $\color{blue} e = E_0\cos\left(\omega t - \dfrac{\pi}{2}\right)$.

### 🖩 Bấm máy Casio fx-580VN X

**Việc máy làm giúp:** tính giá trị tức thời và đọc pha. Quan trọng nhất là **đơn vị góc**.

| Việc | Bấm | Ghi chú |
|---|---|---|
| Chuyển sang **radian** | `SHIFT` `MENU` → `2` (Đơn vị góc) → `2` (Radian) | Chữ **R** nhỏ hiện ở đầu màn hình |
| Tính $\color{blue} i$ tại $\color{blue} t = 0{,}01$ s với $\color{blue} i = 4\cos\left(100\pi t - \dfrac{\pi}{3}\right)$ | `4` `cos` `(` `100` `SHIFT ×10ˣ` `×` `0.01` `−` `SHIFT ×10ˣ` `÷` `3` `)` `=` | `SHIFT ×10ˣ` là phím $\color{blue} \pi$; máy cho $\color{blue} -2$ |
| Đổi rad ↔ độ nếu cần | `OPTN` → `2` (Đơn vị góc) → chọn | Chỉ khi phải ghi đáp số theo độ |

> ⚠️ **Để máy ở Độ mà bấm phép trên** thì máy hiểu $\color{blue} 100\pi\cdot0{,}01 - \dfrac{\pi}{3} \approx 2{,}09$ là **$\color{blue} 2{,}09$ độ**, cho $\color{blue} i \approx 4$ A thay vì $\color{blue} -2$ A — sai hoàn toàn mà không báo gì.
>
> ![Máy ở chế độ Độ tính sai giá trị tức thời](CASIO_COS_DEG)
>
> Cùng phép bấm sau khi chuyển sang Radian, đúng $\color{blue} -2$:
>
> ![Máy ở chế độ Radian tính đúng](CASIO_COS_RAD)
>
> Xong dạng này nhớ **chuyển về Độ** trước khi làm bài lực từ ở Bài 15.

---

> ### 📌 Ví dụ mẫu
>
> Đặt điện áp $\color{blue} u = 220\sqrt{2}\cos\left(100\pi t - \dfrac{\pi}{2}\right)$ (V) vào hai đầu đoạn mạch thì dòng điện qua mạch là $\color{blue} i = 4\cos\left(100\pi t - \dfrac{\pi}{3}\right)$ (A). Xác định điện áp hiệu dụng, tần số, cường độ dòng điện hiệu dụng và độ lệch pha giữa $\color{blue} u$ và $\color{blue} i$.
>
> Hướng dẫn giải:
> $\color{blue} U_0 = 220\sqrt{2}$ V ⇒ $\color{blue} U = 220$ V. $\color{blue} \omega = 100\pi$ rad/s ⇒ $\color{blue} f = \dfrac{100\pi}{2\pi} = 50$ Hz.
> $\color{blue} I_0 = 4$ A ⇒ $\color{blue} I = \dfrac{4}{\sqrt{2}} = 2\sqrt{2} \approx 2{,}83$ A.
> $\color{blue} \Delta\varphi = \varphi_u - \varphi_i = -\dfrac{\pi}{2} - \left(-\dfrac{\pi}{3}\right) = -\dfrac{\pi}{6}$ ⇒ điện áp **trễ pha** $\color{blue} \dfrac{\pi}{6}$ so với dòng điện.

<!--QUIZ|Xác định thông số từ phương trình u, i, e|3|1,2,3-->

---

## 💡 DẠNG 2: HỆ THỨC VUÔNG PHA GIỮA TỪ THÔNG VÀ SUẤT ĐIỆN ĐỘNG

### 🛠 Phương pháp giải

#### Bước 1: Nhận ra hai đại lượng vuông pha
$\color{blue} \Phi = \Phi_0\cos\omega t$ và $\color{blue} e = E_0\cos\left(\omega t - \dfrac{\pi}{2}\right) = E_0\sin\omega t$ với $\color{blue} E_0 = \omega\Phi_0$. Vì $\color{blue} \cos^2 + \sin^2 = 1$:

$$\color{blue} \left(\frac{\Phi}{\Phi_0}\right)^2 + \left(\frac{e}{E_0}\right)^2 = 1$$

#### Bước 2: Dùng hệ thức khi đề cho hai cặp giá trị tức thời
Hai thời điểm $\color{blue} t_1$, $\color{blue} t_2$ cho $\color{blue} (\Phi_1, e_1)$ và $\color{blue} (\Phi_2, e_2)$ ⇒ hai phương trình ⇒ giải ra $\color{blue} \Phi_0$ và $\color{blue} E_0$, rồi $\color{blue} \omega = \dfrac{E_0}{\Phi_0}$.

#### Bước 3: Suy ra các đại lượng khác
$\color{blue} f = \dfrac{\omega}{2\pi}$; $\color{blue} \Phi_0 = NBS$ ⇒ tìm $\color{blue} B$ hoặc $\color{blue} S$; $\color{blue} E = \dfrac{E_0}{\sqrt{2}}$.

> 💡 Cùng hệ thức áp dụng cho mọi cặp đại lượng vuông pha trong chương: $\color{blue} (\Phi, e)$, và ở Bài 19 là… không — $\color{blue} E$ và $\color{blue} B$ của sóng điện từ **đồng pha**, không dùng hệ thức này. Đừng lẫn.

---

> ### 📌 Ví dụ mẫu
>
> Một khung dây quay đều trong từ trường đều. Tại thời điểm $\color{blue} t_1$, từ thông qua khung là $\color{blue} 6\cdot10^{-3}$ Wb và suất điện động là $\color{blue} 8\pi$ V; tại $\color{blue} t_2$, từ thông là $\color{blue} 8\cdot10^{-3}$ Wb và suất điện động là $\color{blue} 6\pi$ V. Tính tần số quay của khung.
>
> Hướng dẫn giải:
> $\color{blue} \left(\dfrac{6\cdot10^{-3}}{\Phi_0}\right)^2 + \left(\dfrac{8\pi}{E_0}\right)^2 = 1$ và $\color{blue} \left(\dfrac{8\cdot10^{-3}}{\Phi_0}\right)^2 + \left(\dfrac{6\pi}{E_0}\right)^2 = 1$.
> Đặt $\color{blue} a = \dfrac{1}{\Phi_0^2}$, $\color{blue} b = \dfrac{1}{E_0^2}$: $\color{blue} 36\cdot10^{-6}a + 64\pi^2 b = 1$ và $\color{blue} 64\cdot10^{-6}a + 36\pi^2 b = 1$. Trừ vế: $\color{blue} 28\cdot10^{-6}a = 28\pi^2 b \Rightarrow \dfrac{E_0^2}{\Phi_0^2} = \dfrac{\pi^2}{10^{-6}} \Rightarrow \omega = \dfrac{E_0}{\Phi_0} = 1000\pi$ rad/s.
> $\color{blue} f = \dfrac{\omega}{2\pi} = 500$ Hz.

<!--QUIZ|Hệ thức vuông pha giữa từ thông và suất điện động|2|2,3-->

---

## 💡 DẠNG 3: GIÁ TRỊ HIỆU DỤNG VÀ CÔNG SUẤT TOẢ NHIỆT

### 🛠 Phương pháp giải

#### Bước 1: Đưa mọi thứ về giá trị hiệu dụng
$\color{blue} I = \dfrac{I_0}{\sqrt{2}}$, $\color{blue} U = \dfrac{U_0}{\sqrt{2}}$. Với mạch chỉ có điện trở: $\color{blue} I = \dfrac{U}{R}$ và $\color{blue} u$, $\color{blue} i$ **cùng pha**.

#### Bước 2: Công suất và nhiệt lượng
$$\color{blue} P = UI = I^2R = \frac{U^2}{R}, \qquad Q = Pt = I^2Rt$$
(dùng giá trị **hiệu dụng**, không dùng cực đại — dùng $\color{blue} I_0$ thì công suất sai gấp đôi).

#### Bước 3: So sánh với dòng không đổi
Câu hỏi "dòng xoay chiều cực đại $\color{blue} I_0$ toả nhiệt bằng dòng không đổi bao nhiêu?" ⇒ trả lời $\color{blue} I = \dfrac{I_0}{\sqrt{2}}$, đó chính là định nghĩa giá trị hiệu dụng.

#### Bước 4: Nếu đề cho công suất tức thời
$\color{blue} p = ui$ biến thiên theo thời gian; **công suất trung bình** mới là $\color{blue} P = UI\cos\Delta\varphi$ — với mạch thuần điện trở $\color{blue} \cos\Delta\varphi = 1$.

---

> ### 📌 Ví dụ mẫu
>
> Một bếp điện có điện trở $\color{blue} 44\ \Omega$ mắc vào mạng điện $\color{blue} u = 220\sqrt{2}\cos 100\pi t$ (V). Tính cường độ dòng điện hiệu dụng qua bếp, công suất của bếp và nhiệt lượng bếp toả ra trong $\color{blue} 10$ phút.
>
> Hướng dẫn giải:
> $\color{blue} U = \dfrac{220\sqrt{2}}{\sqrt{2}} = 220$ V ⇒ $\color{blue} I = \dfrac{U}{R} = \dfrac{220}{44} = 5$ A.
> $\color{blue} P = I^2R = 25\cdot44 = 1100$ W.
> $\color{blue} Q = Pt = 1100\cdot600 = 6{,}6\cdot10^5$ J $\color{blue} = 660$ kJ.

<!--QUIZ|Tính công suất tỏa nhiệt và giá trị hiệu dụng|3|1,2,3-->

---

## 💡 DẠNG 4: MÁY PHÁT ĐIỆN MỘT PHA — TẦN SỐ $\color{blue} f = np$ VÀ SUẤT ĐIỆN ĐỘNG

### 🛠 Phương pháp giải

#### Bước 1: Đọc $\color{blue} p$ và $\color{blue} n$ cho đúng
$\color{blue} p$ là số **cặp cực** (đề cho "4 cực" thì $\color{blue} p = 2$). $\color{blue} n$ là tốc độ quay tính bằng **vòng/giây** — đề cho vòng/phút thì chia 60.

#### Bước 2: Tần số
$$\color{blue} f = np$$
Bài toán ngược: muốn $\color{blue} f = 50$ Hz với rôto $\color{blue} p$ cặp cực thì $\color{blue} n = \dfrac{50}{p}$ vòng/s $\color{blue} = \dfrac{3000}{p}$ vòng/phút.

#### Bước 3: Suất điện động
$\color{blue} \omega = 2\pi f$, $\color{blue} E_0 = NBS\omega$, $\color{blue} E = \dfrac{E_0}{\sqrt{2}}$. Với máy có nhiều cuộn dây mắc nối tiếp, $\color{blue} N$ là **tổng** số vòng.

#### Bước 4: Khi thay đổi tốc độ quay
$\color{blue} f$ và $\color{blue} E_0$ đều **tỉ lệ thuận** với $\color{blue} n$: tăng tốc độ quay gấp đôi thì tần số và suất điện động cực đại đều gấp đôi.

---

> ### 📌 Ví dụ mẫu
>
> Một máy phát điện xoay chiều một pha có rôto là nam châm gồm $\color{blue} 4$ cặp cực, quay với tốc độ $\color{blue} 750$ vòng/phút. Phần ứng gồm $\color{blue} 4$ cuộn dây mắc nối tiếp, mỗi cuộn $\color{blue} 50$ vòng, từ thông cực đại qua mỗi vòng là $\color{blue} 5$ mWb. Tính tần số và suất điện động hiệu dụng của máy.
>
> Hướng dẫn giải:
> $\color{blue} n = \dfrac{750}{60} = 12{,}5$ vòng/s ⇒ $\color{blue} f = np = 12{,}5\cdot4 = 50$ Hz.
> $\color{blue} \omega = 2\pi f = 100\pi$ rad/s; $\color{blue} N = 4\cdot50 = 200$ vòng; $\color{blue} \Phi_0 = BS = 5\cdot10^{-3}$ Wb.
> $\color{blue} E_0 = N\Phi_0\omega = 200\cdot5\cdot10^{-3}\cdot100\pi = 100\pi \approx 314$ V ⇒ $\color{blue} E = \dfrac{314}{\sqrt{2}} \approx 222$ V.

<!--QUIZ|Máy phát 1 pha và tần số dòng điện f = np|2|1,2,3-->

---

## 💡 DẠNG 5: PHÂN TÍCH ĐỒ THỊ HÌNH SIN — VIẾT BIỂU THỨC $\color{blue} u$, $\color{blue} i$

### 🛠 Phương pháp giải

#### Bước 1: Đọc biên độ
$\color{blue} I_0$ (hoặc $\color{blue} U_0$) là giá trị **cao nhất** trên trục tung. Chú ý đơn vị trên trục (mA, V, ms…).

#### Bước 2: Đọc chu kì
Khoảng cách theo trục thời gian giữa **hai đỉnh liên tiếp**, hoặc gấp đôi khoảng giữa hai lần liên tiếp qua $\color{blue} 0$. Rồi $\color{blue} \omega = \dfrac{2\pi}{T}$, $\color{blue} f = \dfrac{1}{T}$.

#### Bước 3: Đọc pha ban đầu
Nhìn giá trị tại $\color{blue} t = 0$ và **xu hướng** (đang tăng hay giảm):

| Tại $\color{blue} t = 0$ | $\color{blue} \varphi$ |
|---|---|
| Ở đỉnh dương $\color{blue} +X_0$ | $\color{blue} 0$ |
| Ở $\color{blue} 0$ và đang **tăng** | $\color{blue} -\dfrac{\pi}{2}$ |
| Ở $\color{blue} 0$ và đang **giảm** | $\color{blue} +\dfrac{\pi}{2}$ |
| Ở đỉnh âm $\color{blue} -X_0$ | $\color{blue} \pi$ |
| Ở $\color{blue} \dfrac{X_0}{2}$ đang giảm / tăng | $\color{blue} +\dfrac{\pi}{3}$ / $\color{blue} -\dfrac{\pi}{3}$ |

Quy tắc chung: $\color{blue} \cos\varphi = \dfrac{x(0)}{X_0}$, lấy dấu $\color{blue} -$ nếu đang tăng, dấu $\color{blue} +$ nếu đang giảm.

#### Bước 4: Viết biểu thức và đối chiếu
$\color{blue} x = X_0\cos(\omega t + \varphi)$; thay thử một điểm nữa trên đồ thị để kiểm tra.

---

> ### 📌 Ví dụ mẫu
>
> Đồ thị cường độ dòng điện xoay chiều (Hình 17.3 trong sách) có giá trị cực đại $\color{blue} 4$ A; tại $\color{blue} t = 0$ dòng điện bằng $\color{blue} 0$ và đang tăng; lần đầu tiên đạt cực đại $\color{blue} 4$ A tại $\color{blue} t = 0{,}005$ s. Viết biểu thức $\color{blue} i(t)$ và tính giá trị hiệu dụng.
>
> Hướng dẫn giải:
> Từ $\color{blue} 0$ (đang tăng) đến đỉnh dương mất $\color{blue} \dfrac{T}{4} = 0{,}005$ s ⇒ $\color{blue} T = 0{,}02$ s ⇒ $\color{blue} f = 50$ Hz, $\color{blue} \omega = 100\pi$ rad/s.
> Tại $\color{blue} t = 0$: $\color{blue} i = 0$ và đang tăng ⇒ $\color{blue} \varphi_i = -\dfrac{\pi}{2}$.
> $\color{blue} i = 4\cos\left(100\pi t - \dfrac{\pi}{2}\right)$ (A); $\color{blue} I = \dfrac{4}{\sqrt{2}} = 2\sqrt{2}$ A.
> Kiểm tra: $\color{blue} t = 0{,}005$ s ⇒ pha $\color{blue} = 0{,}5\pi - 0{,}5\pi = 0$ ⇒ $\color{blue} i = 4$ A. Khớp.

<!--QUIZ|Phân tích đồ thị hình sin|2|2,3-->
