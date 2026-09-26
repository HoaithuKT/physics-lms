# <span style="text-align: center; display: block">BÀI 15: LỰC TỪ TÁC DỤNG LÊN DÂY DẪN MANG DÒNG ĐIỆN. CẢM ỨNG TỪ</span>

---

## 📘 PHẦN 1: TÓM TẮT LÝ THUYẾT TRỌNG TÂM

### <span style="color: #ef4444">1. Lực từ tác dụng lên đoạn dây dẫn mang dòng điện</span>

Thí nghiệm với khung dây treo trên đòn cân, cạnh dưới nằm trong từ trường của nam châm điện: khi đóng công tắc, khung dây bị **kéo xuống hoặc đẩy lên**, lực kế đo được lực ấy. Đổi chiều dòng điện hoặc đổi chiều từ trường thì lực đổi chiều.

Lực từ $\color{blue} \vec{F}$ tác dụng lên đoạn dây dẫn dài $\color{blue} L$ mang dòng điện $\color{blue} I$ đặt trong từ trường đều $\color{blue} \vec{B}$ có:

* **Điểm đặt:** tại **trung điểm** của đoạn dây.
* **Phương:** **vuông góc** với cả đoạn dây (chiều $\color{blue} I$) và với $\color{blue} \vec{B}$ — tức vuông góc với mặt phẳng chứa $\color{blue} I$ và $\color{blue} \vec{B}$.
* **Chiều:** theo **quy tắc bàn tay trái**.
* **Độ lớn:** $$\color{blue} F = BIL\sin\alpha$$ với $\color{blue} \alpha$ là góc hợp bởi chiều dòng điện và $\color{blue} \vec{B}$.

**Quy tắc bàn tay trái:** **Đặt bàn tay trái sao cho vectơ cảm ứng từ $\color{blue} \vec{B}$ hướng vào lòng bàn tay, chiều từ cổ tay đến các ngón tay trùng với chiều dòng điện, thì ngón tay cái choãi ra $\color{blue} 90^\circ$ chỉ chiều của lực từ $\color{blue} \vec{F}$.**

> ⚠️ Ba trường hợp đặc biệt của $\color{blue} \sin\alpha$:
> * Dây **vuông góc** với $\color{blue} \vec{B}$ ($\color{blue} \alpha = 90^\circ$): $\color{blue} F = BIL$ — **lớn nhất**.
> * Dây **song song** với $\color{blue} \vec{B}$ ($\color{blue} \alpha = 0^\circ$ hoặc $\color{blue} 180^\circ$): $\color{blue} F = 0$ — **không có lực từ**. Đây là câu hỏi hình 15.4c trong sách, hay ra thi.
> * Góc $\color{blue} \alpha$ tính giữa **chiều dòng điện** và $\color{blue} \vec{B}$, không phải giữa dây với mặt phẳng nào cả.

---

### <span style="color: #ef4444">2. Cảm ứng từ</span>

Thí nghiệm cho thấy khi thay đổi $\color{blue} L$, $\color{blue} I$, $\color{blue} \alpha$ thì các thương số $\color{blue} \dfrac{F}{L}$, $\color{blue} \dfrac{F}{I}$, $\color{blue} \dfrac{F}{\sin\alpha}$ đều không đổi. Nghĩa là thương số

$$\color{blue} B = \frac{F}{IL\sin\alpha}$$

**chỉ phụ thuộc vào từ trường** tại chỗ đặt dây — người ta lấy nó làm **độ lớn của cảm ứng từ**.

**Đơn vị:** tesla (T). $\color{blue} 1\ \text{T} = \dfrac{1\ \text{N}}{1\ \text{A} \cdot 1\ \text{m}}$ — cảm ứng từ của từ trường đều mà khi đặt vào một dòng điện $\color{blue} 1$ A vuông góc với đường sức thì **mỗi mét dây** chịu lực $\color{blue} 1$ N.

Vì $\color{blue} 1\ \text{N} = 1\ \text{kg}\cdot\text{m}\cdot\text{s}^{-2}$ nên $\color{blue} 1\ \text{T} = 1\ \text{kg}\cdot\text{A}^{-1}\cdot\text{s}^{-2}$.

> 💡 Cỡ độ lớn để kiểm tra kết quả: từ trường Trái Đất cỡ $\color{blue} 5\cdot10^{-5}$ T; nam châm điện trong phòng thí nghiệm cỡ $\color{blue} 10^{-2}$ T; máy chụp cộng hưởng từ cỡ $\color{blue} 1$ – $\color{blue} 3$ T. Ra kết quả hàng chục tesla cho một nam châm chữ U là sai ở đâu đó.

**Vectơ cảm ứng từ $\color{blue} \vec{B}$ tại một điểm** (tổng kết cả Bài 14 và Bài 15):

* Phương trùng với phương của nam châm thử đặt tại điểm đó.
* Chiều từ cực Nam sang cực Bắc của nam châm thử.
* Độ lớn $\color{blue} B = \dfrac{F}{IL\sin\alpha}$.

---

### <span style="color: #ef4444">3. Thực hành đo độ lớn cảm ứng từ</span>

**Ý tưởng:** đặt dây **vuông góc** với $\color{blue} \vec{B}$ ($\color{blue} \alpha = 90^\circ$ để $\color{blue} \sin\alpha = 1$, lực lớn nhất và công thức gọn nhất), đo $\color{blue} F$ bằng lực kế hoặc cân điện tử, đo $\color{blue} I$ bằng ampe kế, biết $\color{blue} L$ → tính $\color{blue} B = \dfrac{F}{IL}$.

**Chú ý khung dây $\color{blue} n$ vòng:** chiều dài dây thực sự nằm trong từ trường là $\color{blue} L = n\,l$ với $\color{blue} l$ là chiều dài một cạnh. Sách dùng $\color{blue} n = 200$ vòng, $\color{blue} l = 10$ cm nên $\color{blue} L = 20$ m.

**Xử lí số liệu:** thay đổi $\color{blue} I$ nhiều lần, ghi $\color{blue} F$, tính $\color{blue} \dfrac{F}{IL}$ từng lần rồi lấy **trung bình**; hoặc vẽ đồ thị $\color{blue} F$ theo $\color{blue} I$ — đồ thị là **đường thẳng qua gốc toạ độ**, **hệ số góc bằng $\color{blue} BL$**.

**Nguyên nhân sai số thường gặp:** từ trường giữa hai cực không thật đều; đọc lực kế/ampe kế bị sai số dụng cụ; khung dây không vuông góc hoàn toàn với $\color{blue} \vec{B}$; dây nối chịu thêm lực.

<!--QUIZ|Quy tắc bàn tay trái xác định F, B, I|2|1-->

---

# PHẦN 2: PHÂN DẠNG BÀI TẬP & PHƯƠNG PHÁP GIẢI

## 💡 DẠNG 1: XÁC ĐỊNH PHƯƠNG, CHIỀU CỦA $\color{blue} \vec{F}$, $\color{blue} \vec{B}$, $\color{blue} I$ — QUY TẮC BÀN TAY TRÁI

### 🛠 Phương pháp giải

#### Bước 1: Xác định hai trong ba yếu tố $\color{blue} \vec{B}$, $\color{blue} I$, $\color{blue} \vec{F}$ đã cho
Đọc kĩ kí hiệu $\color{blue} \odot$ (đi ra khỏi trang giấy) và $\color{blue} \otimes$ (đi vào trang giấy). Nếu đề chỉ cho nam châm, tự vẽ $\color{blue} \vec{B}$ đi từ N sang S trong khoảng giữa hai cực.

#### Bước 2: Đặt bàn tay trái
$\color{blue} \vec{B}$ **xuyên vào lòng bàn tay**, bốn ngón theo chiều $\color{blue} I$, ngón cái choãi ra chỉ $\color{blue} \vec{F}$.

#### Bước 3: Bài toán ngược
* Biết $\color{blue} \vec{F}$ và $\color{blue} \vec{B}$, tìm $\color{blue} I$: giữ $\color{blue} \vec{B}$ vào lòng bàn tay, xoay tay cho ngón cái trùng $\color{blue} \vec{F}$ → bốn ngón cho chiều $\color{blue} I$.
* Biết $\color{blue} \vec{F}$ và $\color{blue} I$, tìm $\color{blue} \vec{B}$: bốn ngón theo $\color{blue} I$, ngón cái theo $\color{blue} \vec{F}$ → $\color{blue} \vec{B}$ đi vào lòng bàn tay.

#### Bước 4: Kiểm tra lại
$\color{blue} \vec{F}$ phải **vuông góc với cả** $\color{blue} I$ và $\color{blue} \vec{B}$. Phương án nào cho $\color{blue} \vec{F}$ song song với dây hay với $\color{blue} \vec{B}$ là loại ngay.

> 🚫 **Dạng này không bấm máy.** Nhưng hãy làm thật với bàn tay trái đặt lên hình vẽ — làm "trong đầu" là nguồn sai phổ biến nhất.

---

> ### 📌 Ví dụ mẫu
>
> Một đoạn dây dẫn thẳng nằm ngang, dòng điện chạy từ trái sang phải, đặt trong từ trường đều có $\color{blue} \vec{B}$ hướng thẳng đứng từ dưới lên. Xác định chiều của lực từ tác dụng lên đoạn dây.
>
> Hướng dẫn giải:
> Đặt bàn tay trái: lòng bàn tay **úp xuống** để $\color{blue} \vec{B}$ (hướng lên) xuyên vào lòng bàn tay; bốn ngón chỉ sang **phải** theo chiều $\color{blue} I$. Ngón cái choãi ra chỉ về phía **người đọc** (đi ra khỏi trang giấy).
> Vậy lực từ có phương nằm ngang, vuông góc với dây, chiều **hướng ra phía trước trang giấy** ($\color{blue} \odot$).
> Kiểm tra: $\color{blue} \vec{F}$ vuông góc với dây (trái–phải) và vuông góc với $\color{blue} \vec{B}$ (lên–xuống) — hợp lệ.

<!--QUIZ|Quy tắc bàn tay trái xác định F, B, I|3|1,2-->

---

## 💡 DẠNG 2: TÍNH LỰC TỪ $\color{blue} F$ VÀ CẢM ỨNG TỪ $\color{blue} B$

### 🛠 Phương pháp giải

#### Bước 1: Đổi hết về đơn vị SI
$\color{blue} L$ ra **mét** (cm → m chia 100), $\color{blue} B$ ra **tesla** (mT → T chia 1000), $\color{blue} I$ ra ampe. Đây là chỗ mất điểm nhiều nhất của dạng này.

#### Bước 2: Xác định góc $\color{blue} \alpha$ giữa chiều dòng điện và $\color{blue} \vec{B}$
Đề nói "vuông góc" → $\color{blue} \alpha = 90^\circ$; "song song" → $\color{blue} F = 0$; "dây hợp với đường sức góc $\color{blue} \alpha$" → dùng thẳng. Nếu đề cho góc giữa dây và **pháp tuyến** của mặt phẳng chứa đường sức thì $\color{blue} \alpha = 90^\circ - \beta$ với $\color{blue} \beta$ là góc đó.

#### Bước 3: Áp dụng $\color{blue} F = BIL\sin\alpha$, hoặc rút đại lượng cần tìm
$$\color{blue} B = \frac{F}{IL\sin\alpha}, \qquad I = \frac{F}{BL\sin\alpha}, \qquad \sin\alpha = \frac{F}{BIL}$$

#### Bước 4: Nếu đề cho số electron thay vì $\color{blue} I$
$\color{blue} I = \dfrac{q}{t} = \dfrac{N_e \cdot |e|}{t}$ với $\color{blue} |e| = 1{,}6\cdot10^{-19}$ C. Đây là ý b) của câu hỏi trong sách.

### 🖩 Bấm máy Casio fx-580VN X

**Việc máy làm giúp:** nhân chia luỹ thừa của 10 và tìm góc $\color{blue} \alpha$ từ $\color{blue} \sin\alpha$.

| Việc | Bấm | Ghi chú |
|---|---|---|
| Nhập $\color{blue} 5\cdot10^{-2}$ | `5` `×10ˣ` `(−)` `2` | Dùng phím `×10ˣ`, đừng gõ `×10^` — dễ sai thứ tự phép tính |
| Tìm $\color{blue} \alpha$ khi biết $\color{blue} \sin\alpha = 0{,}86$ | `SHIFT` `sin` `0.86` `=` | Máy cho $\color{blue} \approx 59{,}3^\circ$ |
| Kiểm tra máy đang ở **độ** | Nhìn chữ **D** nhỏ ở đầu màn hình | Nếu thấy **R** thì `SHIFT` `MENU` → `2` (Đơn vị góc) → `1` (Độ) |

> ⚠️ **Bẫy đơn vị góc:** ở Bài 17 sẽ phải chuyển máy sang **radian** để tính $\color{blue} \cos(100\pi t)$. Chuyển xong mà quên chuyển lại thì ở dạng này `sin 60` cho ra $\color{blue} -0{,}305$ thay vì $\color{blue} 0{,}866$ — kết quả **âm** là dấu hiệu nhận ra ngay.
>
> ![Máy ở chế độ Radian tính sin 60 ra số âm](CASIO_SIN60_RAD)
>
> Cùng phép bấm, sau khi đưa về Độ:
>
> ![Máy ở chế độ Độ tính sin 60 đúng](CASIO_SIN60_DEG)

---

> ### 📌 Ví dụ mẫu
>
> Một dây dẫn dài $\color{blue} 10$ cm đặt trong từ trường đều $\color{blue} B = 5\cdot10^{-2}$ T, dòng điện qua dây $\color{blue} I = 10$ A.
> a) Tính lực từ tác dụng lên dây khi dây đặt vuông góc với $\color{blue} \vec{B}$.
> b) Khi lực từ có độ lớn $\color{blue} 0{,}043$ N, tìm góc giữa $\color{blue} \vec{B}$ và chiều dòng điện.
>
> Hướng dẫn giải:
> Đổi $\color{blue} L = 10\ \text{cm} = 0{,}1\ \text{m}$.
> a) $\color{blue} \alpha = 90^\circ$: $\color{blue} F = BIL\sin 90^\circ = 5\cdot10^{-2}\cdot10\cdot0{,}1 = 0{,}05$ N.
> b) $\color{blue} \sin\alpha = \dfrac{F}{BIL} = \dfrac{0{,}043}{5\cdot10^{-2}\cdot10\cdot0{,}1} = 0{,}86 \Rightarrow \alpha \approx 60^\circ$.
> (Kiểm tra: $\color{blue} 0{,}043 < 0{,}05$ là hợp lí vì lực chỉ lớn nhất khi vuông góc.)

<!--QUIZ|Tính lực từ F và cảm ứng từ B|3|1,2,3-->

---

## 💡 DẠNG 3: CÂN BẰNG CỦA ĐOẠN DÂY MANG DÒNG ĐIỆN TRONG TỪ TRƯỜNG

### 🛠 Phương pháp giải

#### Bước 1: Liệt kê đủ các lực tác dụng lên đoạn dây
Thường gồm: **trọng lực** $\color{blue} \vec{P} = m\vec{g}$, **lực từ** $\color{blue} \vec{F}$, và tuỳ bài: **lực căng dây treo** $\color{blue} \vec{T}$, **phản lực** $\color{blue} \vec{N}$, **ma sát**. Vẽ hình, dùng quy tắc bàn tay trái để đặt chiều $\color{blue} \vec{F}$.

#### Bước 2: Viết điều kiện cân bằng
$$\color{blue} \vec{P} + \vec{F} + \vec{T} + \cdots = \vec{0}$$
rồi **chiếu lên hai trục** (thường là ngang và thẳng đứng), hoặc dùng tam giác lực nếu chỉ có ba lực.

#### Bước 3: Thay $\color{blue} F = BIL\sin\alpha$ và giải
Ba bố trí quen thuộc:

| Bố trí | Điều kiện | Kết quả |
|---|---|---|
| Dây nằm ngang **lơ lửng** (lực từ thẳng đứng hướng lên cân bằng trọng lực) | $\color{blue} BIL = mg$ | $\color{blue} I = \dfrac{mg}{BL}$ |
| Dây treo bằng hai sợi dây, $\color{blue} \vec{F}$ thẳng đứng | $\color{blue} 2T = mg \pm BIL$ | Dấu $\color{blue} +$ khi $\color{blue} \vec{F}$ hướng xuống, $\color{blue} -$ khi hướng lên; $\color{blue} T = 0$ là lúc dây treo chùng |
| Dây treo, $\color{blue} \vec{F}$ nằm ngang, dây treo lệch góc $\color{blue} \theta$ | $\color{blue} \tan\theta = \dfrac{F}{mg} = \dfrac{BIL}{mg}$ | $\color{blue} T = \dfrac{mg}{\cos\theta}$ |

#### Bước 4: Kiểm tra dấu và chiều
Dây "bị nâng lên" hay "chùng xuống" phải khớp với chiều $\color{blue} \vec{F}$ đã tìm bằng bàn tay trái. Nếu tính ra $\color{blue} I$ âm là đã đặt sai chiều dòng điện.

---

> ### 📌 Ví dụ mẫu
>
> Một đoạn dây đồng dài $\color{blue} 20$ cm, khối lượng $\color{blue} 10$ g, được treo nằm ngang bằng hai sợi dây nhẹ, đặt trong từ trường đều $\color{blue} B = 0{,}5$ T có phương thẳng đứng. Cho dòng điện $\color{blue} I$ chạy qua thì hai sợi dây treo lệch khỏi phương thẳng đứng một góc $\color{blue} 30^\circ$. Lấy $\color{blue} g = 10$ m/s². Tính $\color{blue} I$.
>
> Hướng dẫn giải:
> $\color{blue} \vec{B}$ thẳng đứng, dây nằm ngang → dây vuông góc với $\color{blue} \vec{B}$, lực từ $\color{blue} F = BIL$ có phương **nằm ngang**, vuông góc với dây.
> Dây chịu ba lực: $\color{blue} \vec{P}$ (xuống), $\color{blue} \vec{F}$ (ngang), $\color{blue} \vec{T}$ (tổng lực căng, dọc dây treo). Cân bằng ⇒ $\color{blue} \tan 30^\circ = \dfrac{F}{P} = \dfrac{BIL}{mg}$.
> $\color{blue} I = \dfrac{mg\tan 30^\circ}{BL} = \dfrac{0{,}01\cdot10\cdot\dfrac{\sqrt{3}}{3}}{0{,}5\cdot0{,}2} \approx 0{,}58$ A.

<!--QUIZ|Cân bằng đoạn dây mang dòng điện|3|2,3-->

---

## 💡 DẠNG 4: THÍ NGHIỆM ĐO CẢM ỨNG TỪ — XỬ LÍ BẢNG SỐ LIỆU VÀ ĐỒ THỊ

### 🛠 Phương pháp giải

#### Bước 1: Nhận ra đại lượng nào được đo, đại lượng nào cần tính
Đo: $\color{blue} F$ (lực kế, cân điện tử — đọc theo **độ chênh** số chỉ khi có và không có dòng điện), $\color{blue} I$ (ampe kế). Biết trước: $\color{blue} L$ (nhớ nhân số vòng $\color{blue} n$ nếu là khung dây). Cần tính: $\color{blue} B$.

#### Bước 2: Tính $\color{blue} B$ từng lần đo, rồi lấy trung bình
$$\color{blue} B_i = \frac{F_i}{I_i L}, \qquad \overline{B} = \frac{B_1 + B_2 + \cdots + B_k}{k}$$

#### Bước 3: Nếu đề hỏi sai số
$\color{blue} \Delta B_i = |B_i - \overline{B}|$, sai số tuyệt đối trung bình $\color{blue} \overline{\Delta B}$, viết kết quả $\color{blue} B = \overline{B} \pm \overline{\Delta B}$, sai số tỉ đối $\color{blue} \delta = \dfrac{\overline{\Delta B}}{\overline{B}}\cdot100\%$.

#### Bước 4: Nếu đề cho đồ thị $\color{blue} F$ theo $\color{blue} I$
Đồ thị là **đường thẳng qua gốc**, hệ số góc $\color{blue} k = \dfrac{\Delta F}{\Delta I} = BL \Rightarrow B = \dfrac{k}{L}$. Chọn hai điểm **nằm trên đường thẳng** và xa nhau để tính $\color{blue} k$, đừng chọn điểm thực nghiệm lệch.

#### Bước 5: Với cân điện tử (thí nghiệm Bài 20 trong sách)
Cân đặt nam châm; dây dẫn cố định phía trên. Theo định luật III Newton, dây chịu lực từ $\color{blue} F$ thì nam châm chịu lực **bằng và ngược chiều**, nên **số chỉ cân thay đổi một lượng** $\color{blue} \Delta m$ với $\color{blue} F = \Delta m\cdot g$.

---

> ### 📌 Ví dụ mẫu
>
> Bảng số liệu đo lực từ tác dụng lên khung dây có $\color{blue} L = 20$ m đặt vuông góc với từ trường:
>
> | Lần đo | $\color{blue} I$ (A) | $\color{blue} F$ (N) |
> |---|---|---|
> | 1 | $\color{blue} 0{,}1$ | $\color{blue} 0{,}02$ |
> | 2 | $\color{blue} 0{,}2$ | $\color{blue} 0{,}05$ |
> | 3 | $\color{blue} 0{,}3$ | $\color{blue} 0{,}07$ |
> | 4 | $\color{blue} 0{,}4$ | $\color{blue} 0{,}09$ |
>
> Tính giá trị trung bình của cảm ứng từ.
>
> Hướng dẫn giải:
> $\color{blue} B_i = \dfrac{F_i}{I_i L}$: lần 1: $\color{blue} \dfrac{0{,}02}{0{,}1\cdot20} = 0{,}010$ T; lần 2: $\color{blue} 0{,}0125$ T; lần 3: $\color{blue} 0{,}0117$ T; lần 4: $\color{blue} 0{,}01125$ T.
> $\color{blue} \overline{B} = \dfrac{0{,}010 + 0{,}0125 + 0{,}0117 + 0{,}01125}{4} \approx 0{,}0114$ T $\color{blue} \approx 1{,}1\cdot10^{-2}$ T.
> (Khớp cỡ độ lớn của nam châm điện phòng thí nghiệm — hợp lí.)

<!--QUIZ|Thí nghiệm cân dòng điện đo B|2|2,3-->

---

## 💡 DẠNG 5 (MỞ RỘNG): MOMENT NGẪU LỰC TỪ TÁC DỤNG LÊN KHUNG DÂY

### 🛠 Phương pháp giải

Khung dây phẳng $\color{blue} N$ vòng, diện tích $\color{blue} S$, mang dòng $\color{blue} I$, đặt trong từ trường đều $\color{blue} \vec{B}$: hai cạnh đối diện chịu hai lực từ **bằng nhau, ngược chiều** — tạo thành **ngẫu lực** làm khung quay.

#### Bước 1: Xác định góc $\color{blue} \theta$ giữa $\color{blue} \vec{B}$ và **pháp tuyến** $\color{blue} \vec{n}$ của mặt khung

#### Bước 2: Tính moment
$$\color{blue} M = NBIS\sin\theta$$
* $\color{blue} \vec{B}$ **song song mặt khung** ($\color{blue} \theta = 90^\circ$): $\color{blue} M = NBIS$ — lớn nhất.
* $\color{blue} \vec{B}$ **vuông góc mặt khung** ($\color{blue} \theta = 0$): $\color{blue} M = 0$ — khung không quay, chỉ bị các lực từ **kéo dãn hoặc nén** (câu 1 trong Bài tập vận dụng của Bài 20).

> 💡 Sách Kết nối tri thức không đưa công thức này vào bài học chính, nhưng ý "khung dây đặt vuông góc với từ trường thì lực từ làm dãn hoặc nén khung, không làm quay" là câu hỏi trong sách và hay ra thi. Công thức $\color{blue} M$ chỉ để hiểu vì sao động cơ điện quay.

<!--QUIZ|Moment ngẫu lực từ tác dụng lên khung dây|2|1,2,3-->
