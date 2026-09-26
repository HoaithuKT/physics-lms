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

<!--QUIZ|Tính từ thông qua khung dây|2|1-->

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

<!--QUIZ|Tính từ thông qua khung dây|3|1,2,3-->

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

<!--QUIZ|Xác định chiều dòng điện cảm ứng|3|1,2-->

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

<!--QUIZ|Định luật Faraday tính suất điện động e, dòng điện I, điện lượng q|3|1,2,3-->

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

<!--QUIZ|Khai thác đồ thị từ thông – thời gian, cảm ứng từ - thời gian|2|2,3-->

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

<!--QUIZ|Suất điện động trong thanh dẫn chuyển động|2|2,3-->
