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

```quiz
{
  "type": "multiple_choice",
  "question": "Tần số dòng điện dân dụng của Việt Nam có tần số là",
  "options": [
    "$50$ Hz.",
    "$100\\pi$ Hz.",
    "$100$ Hz.",
    "$50\\pi$ Hz."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\nNắm vững các thông số định mức của mạng điện dân dụng tại Việt Nam ($U = 220$ V, $f = 50$ Hz).\n\nLời giải:\nTrên thế giới hiện nay Mỹ, Nhật sử dụng mạng điện có $f = 60$ Hz, phần lớn các nước khác trong đó có Việt Nam sử dụng mạng điện có tần số $f = 50$ Hz.\nChọn đáp án A.",
  "sourceQuestionId": "be80a9c8-92d2-488f-abc5-af60ef8223c3",
  "maCauHoi": "CH_1787389470734_cz59"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Ở Việt Nam, mạng điện xoay chiều dân dụng có tần số là",
  "options": [
    "$50\\pi$ Hz.",
    "$100\\pi$ Hz.",
    "$100$ Hz.",
    "$50$ Hz."
  ],
  "answerIndex": 3,
  "answer": "Phương pháp giải:\nKiến thức thực tế về mạng điện dân dụng ở Việt Nam.\n\nLời giải:\nMạng điện xoay chiều dân dụng ở Việt Nam có tần số chuẩn là $50$ Hz và điện áp hiệu dụng là $220$ V.\nChọn D.",
  "sourceQuestionId": "7c7af2ab-fed3-4280-9427-cb9f15f41e6e",
  "maCauHoi": "CH_1787277468072_y5zm"
}
```

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
> ![Máy ở chế độ Độ tính sai giá trị tức thời](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/casio-ly12c3-03-cos-do.png)
>
> Cùng phép bấm sau khi chuyển sang Radian, đúng $\color{blue} -2$:
>
> ![Máy ở chế độ Radian tính đúng](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/casio-ly12c3-04-cos-radian.png)
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

```quiz
{
  "type": "multiple_choice",
  "question": "Dòng điện xoay chiều là dòng điện",
  "options": [
    "có chiều biến thiên tuần hoàn theo thời gian.",
    "có cường độ biến đổi tuần hoàn theo thời gian.",
    "có chiều biến đổi theo thời gian.",
    "có chu kỳ thay đổi theo thời gian."
  ],
  "answerIndex": 1,
  "answer": "Phương pháp giải:\nDựa vào định nghĩa dòng điện xoay chiều.\n\nLời giải:\nDòng điện xoay chiều là dòng điện có cường độ biến đổi tuần hoàn (hoặc điều hòa) theo thời gian.\nChọn B.",
  "sourceQuestionId": "08a106b1-424e-4164-b8fe-1770eda4897c",
  "maCauHoi": "CH_1787277468072_rtj1"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Chọn phát biểu sai? Dòng điện xoay chiều có biểu thức $i = 2\\cos(100\\pi t)$ (A) thì có",
  "options": [
    "cường độ cực đại là $2$ A.",
    "chu kì là $0{,}02$ s.",
    "tần số $50$ Hz.",
    "cường độ hiệu dụng là $2\\sqrt{2}$ A."
  ],
  "answerIndex": 3,
  "answer": "Phương pháp giải:\nTừ phương trình $i = I_0\\cos(\\omega t + \\varphi)$, xác định $I_0$, $I = \\frac{I_0}{\\sqrt{2}}$, $\\omega \\Rightarrow T = \\frac{2\\pi}{\\omega}$, $f = \\frac{\\omega}{2\\pi}$.\n\nLời giải:\nTừ biểu thức $i = 2\\cos(100\\pi t)$ (A), ta có:\n- Cường độ dòng điện cực đại: $I_0 = 2$ A (A đúng).\n- Chu kì: $T = \\frac{2\\pi}{100\\pi} = 0{,}02$ s (B đúng).\n- Tần số: $f = \\frac{1}{T} = 50$ Hz (C đúng).\n- Cường độ hiệu dụng: $I = \\frac{I_0}{\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$ A (D sai).\nChọn đáp án D.",
  "sourceQuestionId": "09e27017-a5d2-49d2-bd64-5c10d1640508",
  "maCauHoi": "CH_1787389470734_p93r"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Cho dòng điện xoay chiều có phương trình $i = 2\\cos\\left(100\\pi t + \\frac{\\pi}{4}\\right)$ (A). Thời điểm đầu tiên dòng điện trong mạch có độ lớn bằng $\\sqrt{3}$ A là",
  "options": [
    "$\\frac{7}{1200}$ s.",
    "$\\frac{7}{600}$ s.",
    "$\\frac{5}{1200}$ s.",
    "$\\frac{5}{600}$ s."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\n- Tính chu kì $T = \\frac{2\\pi}{\\omega}$.\n- Xác định trạng thái ban đầu của $i$ tại $t = 0$.\n- Sử dụng vòng tròn lượng giác hoặc trục thời gian để tìm thời điểm đầu tiên độ lớn $|i| = \\sqrt{3}$ A $= \\frac{I_0\\sqrt{3}}{2}$.\n\nLời giải:\nChu kì của dòng điện xoay chiều là:\n$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{100\\pi} = 0{,}02$ s.\nTại thời điểm $t = 0$, pha của dòng điện là $\\varphi_0 = +\\frac{\\pi}{4} \\Rightarrow i_0 = \\frac{I_0\\sqrt{2}}{2} = \\sqrt{2}$ A và đang giảm.\nThời điểm đầu tiên dòng điện có độ lớn $|i| = \\sqrt{3}$ A $= \\frac{I_0\\sqrt{3}}{2}$ là khi dòng điện đi từ vị trí $\\frac{I_0\\sqrt{2}}{2}$ qua $0$ đến $-\\frac{I_0\\sqrt{3}}{2}$:\n$t = \\Delta t = \\frac{T}{8} + \\frac{T}{6} = \\frac{7T}{24} = \\frac{7 \\times 0{,}02}{24} = \\frac{7}{1200}$ s.\nChọn đáp án A.",
  "sourceQuestionId": "72586f45-8abb-4525-b2fa-21fe08ff0c22",
  "maCauHoi": "CH_1787389470734_jwdp"
}
```

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

```quiz
{
  "type": "multiple_choice",
  "question": "Khung dây kim loại phẳng có diện tích S, có N vòng dây, quay đều với tốc độ góc $\\omega$ quanh trục vuông góc với đường sức của một từ trường đều $\\vec{B}$. Chọn gốc thời gian $t = 0$ s là lúc pháp tuyến $\\vec{n}$ của khung dây có chiều trùng với chiều của vectơ cảm ứng từ $\\vec{B}$. Biểu thức xác định từ thông $\\Phi$ qua khung dây là",
  "options": [
    "$\\Phi = \\omega NBS\\cos\\omega t$.",
    "$\\Phi = NBS\\sin\\omega t$.",
    "$\\Phi = NBS\\cos\\omega t$.",
    "$\\Phi = \\omega NBS\\sin\\omega t$."
  ],
  "answerIndex": 2,
  "answer": "Phương pháp giải:\nTừ thông qua khung dây: $\\Phi = NBS\\cos(\\omega t + \\varphi)$.\n\nLời giải:\nTại $t = 0$, pháp tuyến $\\vec{n}$ cùng chiều với $\\vec{B}$ nên $\\varphi = 0$.\nVậy biểu thức xác định từ thông qua khung dây là $\\Phi = NBS\\cos\\omega t$.\nChọn C.",
  "sourceQuestionId": "5f893550-becf-4f84-91c3-2a55573a9a91",
  "maCauHoi": "CH_1787277468072_0z4j"
}
```

```quiz
{
  "type": "true_false_cluster",
  "question": "Quan sát mô hình máy phát điện xoay chiều được mô tả như hình vẽ dưới đây.\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/5xmlebczu3o_1787393580483.jpg)\nBiết khung dây ABCD quay theo chiều MPNQ trong từ trường đều. Biết suất điện động có giá trị cực đại ở vị trí của khung dây hiện tại. Nhận định nào sau đây là đúng hay sai về suất điện động cảm ứng xuất hiện trong khung dây?",
  "options": [
    {
      "content": "Quá trình điểm B di chuyển từ M đến P thì suất điện động trên khung dây đang giảm.",
      "isTrue": true
    },
    {
      "content": "Khung dây có phương sao cho cạnh BC trùng với phương PQ thì suất điện động có giá trị âm.",
      "isTrue": false
    },
    {
      "content": "Cạnh BC của khung dây trùng với phương MN thì suất điện động luôn có giá trị dương.",
      "isTrue": false
    },
    {
      "content": "Quá trình khung dây quay có điểm B di chuyển từ Q đến M thì suất điện động đang tăng.",
      "isTrue": true
    }
  ],
  "answer": "Phương pháp giải:\n- Biểu thức từ thông và suất điện động: $\\Phi = NBS\\cos(\\omega t + \\varphi)$, $e = -\\frac{d\\Phi}{dt} = NBS\\omega\\sin(\\omega t + \\varphi)$.\n- Khi khung dây ở vị trí song song với vectơ cảm ứng từ $\\vec{B}$ (cạnh BC trùng với phương MN): từ thông $\\Phi = 0$, suất điện động đạt giá trị cực đại về độ lớn $|e| = E_0 = NBS\\omega$ (có thể nhận giá trị $+E_0$ hoặc $-E_0$).\n- Khi khung dây ở vị trí vuông góc với vectơ cảm ứng từ $\\vec{B}$ (cạnh BC trùng với phương PQ): từ thông đạt cực đại về độ lớn $|\\Phi| = NBS$, suất điện động $e = 0$.\n\nLời giải:\na) Đúng. Khi điểm B di chuyển từ M đến P, từ thông qua khung dây biến thiên từ 0 đến giá trị cực trị (vuông góc) nên suất điện động giảm dần từ giá trị cực đại về 0.\nb) Sai. Khi cạnh BC trùng với phương PQ thì mặt phẳng khung dây vuông góc với $\\vec{B}$, tốc độ biến thiên từ thông bằng 0 nên suất điện động bằng 0 ($e = 0$).\nc) Sai. Khi cạnh BC trùng với phương MN, suất điện động đạt độ lớn cực đại nhưng có thể mang giá trị dương hoặc âm ($e = \\pm E_0$).\nd) Đúng. Khi điểm B di chuyển từ Q đến M, khung dây chuyển từ vị trí có $e = 0$ sang vị trí có $|e| = E_0$, do đó độ lớn suất điện động đang tăng dần.",
  "sourceQuestionId": "58343551-e2c0-4f81-af6b-3d9d66feefd7",
  "maCauHoi": "CH_1787393726294_ng32"
}
```

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

```quiz
{
  "type": "multiple_choice",
  "question": "Ở Việt Nam, mạng điện dân dụng một pha có điện áp hiệu dụng là",
  "options": [
    "$220\\sqrt{2}$ V.",
    "$100$ V.",
    "$220$ V.",
    "$100\\sqrt{2}$ V."
  ],
  "answerIndex": 2,
  "answer": "Phương pháp giải:\nKiến thức thực tế về mạng điện dân dụng ở Việt Nam.\n\nLời giải:\nỞ Việt Nam, mạng điện dân dụng có điện áp hiệu dụng định mức là $220$ V.\nChọn C.",
  "sourceQuestionId": "99740474-cdb4-4112-9574-c4fef1539c7a",
  "maCauHoi": "CH_1787277468072_k3ok"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Trong các câu sau, câu nào đúng?",
  "options": [
    "Dòng điện có cường độ biến đổi tuần hoàn theo thời gian là dòng điện xoay chiều.",
    "Dòng điện và điện áp ở hai đầu mạch xoay chiều luôn lệch pha nhau.",
    "Không thể dùng dòng điện xoay chiều để mạ điện.",
    "Cường độ hiệu dụng của dòng điện xoay chiều bằng một nửa giá trị cực đại của nó."
  ],
  "answerIndex": 2,
  "answer": "Phương pháp giải:\n- Hiện tượng mạ điện cần tác dụng hóa học của dòng điện không đổi để các ion kim loại di chuyển về một cực xác định (catot).\n- Công thức giá trị hiệu dụng: $I = \\frac{I_0}{\\sqrt{2}}$.\n\nLời giải:\n- Mạ điện dựa vào tác dụng hoá học của dòng điện một chiều. Do dòng điện xoay chiều đổi chiều liên tục nên không dùng để mạ điện được $\\rightarrow$ C đúng.\n- A sai vì dòng điện biến đổi tuần hoàn nhưng không đổi chiều thì không phải là dòng điện xoay chiều.\n- B sai vì nếu mạch chỉ có điện trở thuần thì $u$ và $i$ cùng pha.\n- D sai vì $I = \\frac{I_0}{\\sqrt{2}}$.\nChọn C.",
  "sourceQuestionId": "cf24819d-b2c5-4ca7-82dc-80e0909e4a61",
  "maCauHoi": "CH_1787277468072_okan"
}
```

```quiz
{
  "type": "true_false_cluster",
  "question": "Đặt điện áp $u = 220\\sqrt{2}\\cos\\left(100\\pi t - \\frac{\\pi}{2}\\right)$ (V) vào hai đầu đoạn mạch thì dòng điện xoay chiều qua mạch có $i = 4\\cos\\left(100\\pi t - \\frac{\\pi}{3}\\right)$ (A). Xét tính đúng/sai của các phát biểu sau:",
  "options": [
    {
      "content": "Điện áp hai đầu mạch chậm pha $\\frac{\\pi}{6}$ so với $i$.",
      "isTrue": true
    },
    {
      "content": "Công suất tiêu thụ của đoạn mạch bằng $440\\sqrt{2}$ W.",
      "isTrue": false
    },
    {
      "content": "Công suất tức thời của đoạn mạch là $p = ui$.",
      "isTrue": true
    },
    {
      "content": "Công suất trung bình của đoạn mạch bằng $0$.",
      "isTrue": false
    }
  ],
  "answer": "Phương pháp giải:\n- Tính độ lệch pha: $\\varphi = \\varphi_u - \\varphi_i$.\n- Công suất tiêu thụ trung bình: $P = UI\\cos\\varphi$.\n- Công suất tức thời: $p = ui$.\n\nLời giải:\na) Đúng. Ta có $\\varphi = \\varphi_u - \\varphi_i = -\\frac{\\pi}{2} - \\left(-\\frac{\\pi}{3}\\right) = -\\frac{\\pi}{6}$ rad $< 0 \\Rightarrow$ điện áp chậm (trễ) pha $\\frac{\\pi}{6}$ so với dòng điện.\nb) Sai. Giá trị hiệu dụng: $U = 220$ V, $I = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}$ A.\nCông suất tiêu thụ: $P = UI\\cos\\varphi = 220 \\cdot 2\\sqrt{2} \\cdot \\cos\\left(-\\frac{\\pi}{6}\\right) = 220 \\cdot 2\\sqrt{2} \\cdot \\frac{\\sqrt{3}}{2} = 220\\sqrt{6}$ W $\\neq 440\\sqrt{2}$ W.\nc) Đúng. Công suất tức thời luôn bằng tích điện áp tức thời và dòng điện tức thời: $p = ui$.\nd) Sai. Công suất trung bình của đoạn mạch trong thời gian dài chính là công suất tiêu thụ $P = 220\\sqrt{6}$ W $> 0$.\nChọn: a - Đ, b - S, c - Đ, d - S.",
  "sourceQuestionId": "f49b0656-cce7-49f3-99af-b570601fc6b2",
  "maCauHoi": "CH_1787389711686_954a"
}
```

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

```quiz
{
  "type": "multiple_choice",
  "question": "Cấu tạo của máy phát điện xoay chiều gồm hai bộ phận chính là",
  "options": [
    "phần cảm và stato.",
    "phần cảm và phần ứng.",
    "phần cảm và rôto.",
    "phần ứng và stato."
  ],
  "answerIndex": 1,
  "answer": "Phương pháp giải:\nDựa vào cấu tạo cơ bản của máy phát điện xoay chiều.\n\nLời giải:\nCấu tạo của máy phát điện xoay chiều gồm hai bộ phận chính là phần cảm và phần ứng.",
  "sourceQuestionId": "5d8f1dec-c587-419a-8a93-0dd546c57cf1",
  "maCauHoi": "CH_1787391256755_zgxq"
}
```

```quiz
{
  "type": "short_answer",
  "question": "Một máy phát điện xoay chiều có khung dây phẳng gồm 500 vòng dây, mỗi vòng dây có diện tích $20\\text{ cm}^2$. Khung dây quay trong một từ trường đều có độ lớn cảm ứng từ là $0{,}015$ T và hướng vuông góc với trục quay, tốc độ quay ổn định là 20 vòng/giây. Suất điện động cảm ứng cực đại là bao nhiêu mili vôn (lấy kết quả sau dấu phẩy một chữ số)? (Làm tròn kết quả đến số nguyên.)",
  "exactAnswer": "1885",
  "answer": "Phương pháp giải:\n- Tốc độ góc: $\\omega = 2\\pi n$.\n- Suất điện động cực đại: $E_0 = NBS\\omega$.\n- Đổi đơn vị diện tích: $S = 20\\text{ cm}^2 = 20 \\cdot 10^{-4}\\text{ m}^2$.\n- Đổi kết quả từ V sang mV: $1$ V $= 1000$ mV.\n\nLời giải:\nTốc độ góc của khung dây là:\n$\\omega = 2\\pi n = 2\\pi \\cdot 20 = 40\\pi$ rad/s.\nSuất điện động cảm ứng cực đại xuất hiện trong khung dây là:\n$E_0 = NBS\\omega = 500 \\cdot 0{,}015 \\cdot (20 \\cdot 10^{-4}) \\cdot 40\\pi = 0{,}6\\pi$ V $\\approx 1{,}88496$ V $= 1884{,}96$ mV $\\approx 1885{,}0$ mV.\n(Nếu tính theo đơn vị Vôn làm tròn một chữ số thập phân thì $E_0 \\approx 1{,}9$ V).",
  "sourceQuestionId": "06ae4324-99b2-4d84-8723-3db6be72f1ac",
  "maCauHoi": "CH_1787393827008_2sgd"
}
```

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

```quiz
{
  "type": "multiple_choice",
  "question": "Hình bên là đồ thị biểu diễn sự phụ thuộc của điện áp xoay chiều u ở hai đầu một đoạn mạch vào thời gian t. \n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/kymb3sqt6jr_1787277694030.jpg)\n Điện áp hiệu dụng ở hai đầu đoạn mạch bằng",
  "options": [
    "$110\\sqrt{2}$ V.",
    "$220\\sqrt{2}$ V.",
    "$220$ V.",
    "$110$ V."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\n- Đọc đỉnh đồ thị để xác định điện áp cực đại $U_0$.\n- Tính điện áp hiệu dụng: $U = \\frac{U_0}{\\sqrt{2}}$.\n\nLời giải:\nTừ đồ thị, giá trị điện áp cực đại là $U_0 = 220$ V.\nĐiện áp hiệu dụng ở hai đầu đoạn mạch là:\n$U = \\frac{U_0}{\\sqrt{2}} = \\frac{220}{\\sqrt{2}} = 110\\sqrt{2}$ V.\nChọn A.",
  "sourceQuestionId": "d54e610f-7f28-4def-b684-580010cabfd2",
  "maCauHoi": "CH_1787277770448_jy4t"
}
```

```quiz
{
  "type": "true_false_cluster",
  "question": "Đồ thị biểu diễn cường độ dòng điện xoay chiều theo thời gian như hình vẽ dưới đây: \n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/yjpcqhgntwr_1787389892926.jpg)\nXét tính đúng/sai của các phát biểu sau:",
  "options": [
    {
      "content": "Khoảng thời gian giữa hai lần liên tiếp dòng điện đạt cùng một giá trị và cùng chiều là một chu kì.",
      "isTrue": true
    },
    {
      "content": "Chu kì của dòng điện là $50$ ms.",
      "isTrue": true
    },
    {
      "content": "Giá trị hiệu dụng của dòng điện là $30$ mA.",
      "isTrue": false
    },
    {
      "content": "Biểu thức cường độ dòng điện chạy qua mạch là $i = 60\\cos\\left(40\\pi t - \\frac{\\pi}{2}\\right)$ (mA).",
      "isTrue": true
    }
  ],
  "answer": "Phương pháp giải:\n- Đọc chu kì $T$, biên độ $I_0$ và pha ban đầu $\\varphi_i$ từ đồ thị $i(t)$.\n- Cường độ hiệu dụng: $I = \\frac{I_0}{\\sqrt{2}}$.\n- Tần số góc $\\omega = \\frac{2\\pi}{T}$.\n\nLời giải:\na) Đúng. Theo định nghĩa chu kì dao động điều hòa, khoảng thời gian ngắn nhất để trạng thái dao động lặp lại như cũ (cùng giá trị và cùng chiều chuyển động) là một chu kì.\nb) Đúng. Tại $t = 0$, $i = 0$ và đang tăng; trạng thái này lặp lại lần tiếp theo tại $t = 50$ ms $\\Rightarrow T = 50$ ms.\nc) Sai. Cường độ cực đại là $I_0 = 60$ mA $\\Rightarrow$ cường độ hiệu dụng là $I = \\frac{I_0}{\\sqrt{2}} = \\frac{60}{\\sqrt{2}} = 30\\sqrt{2}$ mA $\\neq 30$ mA.\nd) Đúng. Tần số góc $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{50 \\cdot 10^{-3}} = 40\\pi$ rad/s.\nTại $t = 0$, $i = 0$ và đang tăng $\\Rightarrow \\varphi_i = -\\frac{\\pi}{2}$ rad.\nBiểu thức dòng điện: $i = 60\\cos\\left(40\\pi t - \\frac{\\pi}{2}\\right)$ (mA).\nChọn: a - Đ, b - Đ, c - S, d - Đ.",
  "sourceQuestionId": "e130b212-1478-45c8-b058-8548a815b362",
  "maCauHoi": "CH_1787390076411_d2qb"
}
```
