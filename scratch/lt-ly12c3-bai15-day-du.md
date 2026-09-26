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

```quiz
{
  "type": "multiple_choice",
  "question": "Hướng của dòng điện, hướng của từ trường và hướng của lực điện từ tác dụng lên dòng điện này",
  "options": [
    "tạo thành một tam diện thuận.",
    "luôn hợp với nhau một góc $120^\\circ.$",
    "luôn cùng hướng với nhau.",
    "tạo thành một tam giác vuông."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\nQuy tắc bàn tay trái xác định chiều của lực từ.\n\nLời giải:\nHướng của dòng điện, hướng của từ trường và hướng của lực điện từ tác dụng lên dòng điện này tạo thành một tam diện thuận.",
  "sourceQuestionId": "2307d288-244f-4b24-97c9-8aa273b24a75",
  "maCauHoi": "CH_1787315132227_t1yj"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Chọn câu sai. Lực điện từ tác dụng lên đoạn dây dẫn có dòng điện đặt trong từ trường",
  "options": [
    "luôn luôn vuông góc với cảm ứng từ.",
    "luôn vuông góc với dây dẫn.",
    "phụ thuộc vào góc giữa dây dẫn và cảm ứng từ.",
    "luôn cùng chiều từ trường."
  ],
  "answerIndex": 3,
  "answer": "Phương pháp giải:\nĐặc điểm của lực từ tác dụng lên đoạn dây dẫn mang dòng điện.\n\nLời giải:\nLực điện từ có phương vuông góc với mặt phẳng chứa dòng điện và cảm ứng từ, nên luôn vuông góc với từ trường và dòng điện, không thể cùng chiều với từ trường. Do đó đáp án D sai.",
  "sourceQuestionId": "c8b07496-b07b-4a8d-8bba-067cda11b108",
  "maCauHoi": "CH_1787315132227_gpv5"
}
```

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

```quiz
{
  "type": "multiple_choice",
  "question": "Khi nói về lực từ, phát biểu nào sau đây là sai?",
  "options": [
    "Lực mà từ trường tác dụng lên nam châm hay dòng điện đều gọi là lực từ.",
    "Lực từ tác dụng lên đoạn dòng điện có phương nằm trong mặt phẳng chứa đoạn dòng điện và véc tơ cảm ứng từ tại điểm khảo sát.",
    "Lực từ tác dụng lên đoạn dòng điện có phương vuông góc với dòng điện và vuông góc với đường sức từ.",
    "Chiều của lực từ tác dụng lên dòng điện được xác định theo quy tắc bàn tay trái."
  ],
  "answerIndex": 1,
  "answer": "Phương pháp giải:\nĐặc điểm phương và chiều của lực từ tác dụng lên đoạn dòng điện.\n\nLời giải:\nLực từ tác dụng lên đoạn dòng điện có phương vuông góc với mặt phẳng chứa đoạn dòng điện và véctơ cảm ứng từ tại điểm khảo sát. Do đó phát biểu B sai.",
  "sourceQuestionId": "2617fd21-baa2-4e99-b566-0e3312f9a3c1",
  "maCauHoi": "CH_1787315132227_nskx"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Hình nào biểu diễn đúng hướng lực từ tác dụng lên một đoạn dây dẫn thẳng mang dòng điện $I$ có chiều như hình vẽ đặt trong từ trường đều, đường sức từ có hướng như hình vẽ",
  "options": [
    "\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/sdrwnsas1r_1787314360766.jpg)\n",
    "\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/zngu05b0gip_1787314441348.jpg)\n",
    "\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/d2jvdr98yf5_1787314572050.jpg)\n",
    "\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/pvhga9ne3j_1787314517350.jpg)\n"
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\n- Đường sức từ đi từ cực Bắc (N) đến cực Nam (S).\n- Áp dụng quy tắc bàn tay trái.\n\nLời giải:\nỞ Hình A, từ trường hướng từ trên xuống dưới (từ N sang S), dòng điện $I$ có chiều đi từ trong ra ngoài ($\\odot$). Theo quy tắc bàn tay trái, lực từ $\\vec{F}$ hướng sang bên phải. Chọn hình A.",
  "sourceQuestionId": "630b27ce-5758-4280-ae6e-00b032ec8a70",
  "maCauHoi": "CH_1787314580014_6ykw"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Hình nào biểu diễn đúng hướng lực từ tác dụng lên một đoạn dây dẫn thẳng mang dòng điện $I$ có chiều như hình vẽ đặt trong từ trường đều, đường sức từ có hướng như hình vẽ",
  "options": [
    "\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/qzzefkkulrc_1787314668638.jpg)\n",
    "\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/dkq1joouou9_1787314856715.jpg)\n",
    "\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/c22ixtyfb4_1787314890237.jpg)\n",
    "\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/5qobanf0ojv_1787315039180.jpg)\n"
  ],
  "answerIndex": 1,
  "answer": "Phương pháp giải:\nÁp dụng quy tắc bàn tay trái để xác định chiều của lực từ $\\vec{F}$.\n\nLời giải:\nỞ Hình B, $\\vec{B}$ hướng từ trái sang phải, dòng điện $I$ có chiều đi ra xa (từ ngoài vào trong mặt phẳng hình vẽ, kí hiệu $\\otimes$ hoặc $\\oplus$). Theo quy tắc bàn tay trái, lực $\\vec{F}$ sẽ hướng thẳng xuống dưới. Chọn hình B.",
  "sourceQuestionId": "a449007d-d574-4386-9e7c-a89d9849bcc2",
  "maCauHoi": "CH_1787315042689_0v5a"
}
```

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
> ![Máy ở chế độ Radian tính sin 60 ra số âm](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/casio-ly12c3-01-sin60-radian.png)
>
> Cùng phép bấm, sau khi đưa về Độ:
>
> ![Máy ở chế độ Độ tính sin 60 đúng](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/casio-ly12c3-02-sin60-do.png)

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

```quiz
{
  "type": "multiple_choice",
  "question": "Một đoạn dây có dòng điện đặt trong từ trường đều B. Để lực điện từ tác dụng lên dây cực tiểu thì góc giữa dây dẫn và véctơ cảm ứng từ phải bằng",
  "options": [
    "$0^\\circ.$",
    "$30^\\circ.$",
    "$60^\\circ.$",
    "$90^\\circ.$"
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\nCông thức độ lớn lực từ tác dụng lên đoạn dòng điện: $F = BIL\\sin\\alpha$.\n\nLời giải:\nTa có $F = BIL\\sin\\alpha \\ge 0$.\nLực từ đạt cực tiểu $F_{\\min} = 0$ khi $\\sin\\alpha = 0 \\Rightarrow \\alpha = 0^\\circ$ (hoặc $\\alpha = 180^\\circ$).",
  "sourceQuestionId": "475a75c4-0b01-46b0-be4f-3aab18150e56",
  "maCauHoi": "CH_1787315679239_70ox"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Một đoạn dây dẫn thẳng, dài $10$ cm mang dòng điện $5$ A đặt trong từ trường đều cảm ứng từ $B = 0,08$ T. Biết đoạn dây dẫn vuông góc với vector cảm ứng từ. Lực từ tác dụng lên đoạn dây dẫn là",
  "options": [
    "$0,02$ N.",
    "$0,04$ N.",
    "$0,06$ N.",
    "$0,08$ N."
  ],
  "answerIndex": 1,
  "answer": "Phương pháp giải:\nSử dụng công thức tính lực từ: $F = BIL\\sin\\alpha$.\n\nLời giải:\nĐổi: $L = 10$ cm $= 0,1$ m.\nVì dây dẫn vuông góc với vectơ cảm ứng từ nên $\\alpha = 90^\\circ$.\nLực từ tác dụng lên đoạn dây là:\n$F = BIL\\sin 90^\\circ = 0,08 \\cdot 5 \\cdot 0,1 \\cdot 1 = 0,04$ N.",
  "sourceQuestionId": "ba4eed9f-4c5c-4261-b4a4-9cac39433528",
  "maCauHoi": "CH_1787315679239_ix6s"
}
```

```quiz
{
  "type": "true_false_cluster",
  "question": "Cho một khung dây dẫn hình chữ nhật có chiều rộng $20$ cm, mang dòng điện, đặt trong từ trường đều có cảm ứng từ $\\vec{B}$ hướng vào trong như hình vẽ. Biết mặt phẳng vòng dây vuông góc với các đường sức từ. Bên ngoài vòng tròn, từ trường bằng 0. \n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/hhw77ufaj6o_1787316059897.jpg)",
  "options": [
    {
      "content": "Lực từ tổng hợp tác dụng lên khung dây hướng xuống dưới.",
      "isTrue": true
    },
    {
      "content": "Nếu sử dụng dòng điện có cường độ $5,00$ A thì lực từ trên mỗi Tesla tác dụng lên khung dây là $2,00$ N/T.",
      "isTrue": false
    },
    {
      "content": "Nếu ta quay khung dây $90^\\circ$ xung quanh một trục nằm trong mặt phẳng của khung và song song với từ trường, lực từ tác dụng lên khung sẽ giảm xuống bằng 0.",
      "isTrue": true
    },
    {
      "content": "Khi dòng điện qua khung dây đổi chiều, lực từ tổng hợp tác dụng lên khung dây sẽ đổi chiều.",
      "isTrue": true
    }
  ],
  "answer": "Phương pháp giải:\n- Áp dụng quy tắc bàn tay trái xác định lực từ tác dụng lên từng cạnh của khung dây.\n- Công thức tính lực từ: $F = BIL\\sin\\alpha$.\n\nLời giải:\na) Lực từ tác dụng lên hai cạnh thẳng đứng có độ lớn bằng nhau và ngược chiều nên triệt tiêu lẫn nhau. Lực từ tác dụng lên cạnh nằm ngang có chiều hướng xuống dưới. Do đó lực từ tổng hợp hướng xuống dưới. -> Đúng.\nb) Tỉ số giữa lực từ tác dụng lên cạnh đáy và cảm ứng từ là:\n$\\frac{F}{B} = IL\\sin 90^\\circ = 5,00 \\cdot 0,2 = 1,00$ N/T $\\neq 2,00$ N/T. -> Sai.\nc) Khi quay khung dây $90^\\circ$ xung quanh trục song song với từ trường, cạnh nằm ngang sẽ song song với đường sức từ nên lực từ tác dụng lên nó bằng 0, hai cạnh thẳng đứng vẫn có lực từ triệt tiêu nhau, do đó lực từ tổng hợp bằng 0. -> Đúng.\nd) Chiều của lực từ tuân theo quy tắc bàn tay trái phụ thuộc vào chiều dòng điện. Khi dòng điện đổi chiều thì lực từ tổng hợp cũng đổi chiều. -> Đúng.",
  "sourceQuestionId": "24811edb-8932-490f-aa36-91403593aeb8",
  "maCauHoi": "CH_1787316226253_nn89"
}
```

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

```quiz
{
  "type": "multiple_choice",
  "question": "Treo một thanh đồng có chiều dài $\\ell = 1$ m và có khối lượng $200$ g vào hai sợi dây thẳng đứng cùng chiều dài trong một từ trường đều có $B = 0,2$ T và có chiều thẳng đứng từ dưới lên trên. Cho dòng điện một chiều qua thanh đồng thì thấy dây treo bị lệch so với phương thẳng đứng một góc $60^0$. Xác định lực căng của mỗi dây treo. (Lấy $g = 10\\text{ m/s}^2$).",
  "options": [
    "A. $2$ N.",
    "B. $4$ N.",
    "C. $6$ N.",
    "D. $8$ N."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\n- Khi thanh đồng cân bằng dưới tác dụng của trọng lực $\\vec{P}$, lực từ $\\vec{F}$ và lực căng của hai dây treo $2\\vec{T}$:\n- Ta có hệ thức: $\\cos\\alpha = \\frac{P}{2T} \\Rightarrow T = \\frac{P}{2\\cos\\alpha}$.\n\nLời giải:\nĐổi: $m = 200$ g $= 0,2$ kg.\nTrọng lượng của thanh đồng: $P = m g = 0,2 \\cdot 10 = 2$ N.\n\nKhi dây treo lệch góc $\\alpha = 60^\\circ$ so với phương thẳng đứng, lực căng tổng cộng của hai sợi dây là $2T$ thoả mãn:\n$\\cos 60^\\circ = \\frac{P}{2T} \\Rightarrow 2T = \\frac{P}{\\cos 60^\\circ} = \\frac{2}{0,5} = 4\\text{ N} \\Rightarrow T = 2\\text{ N}$.\n\nVậy lực căng của mỗi dây treo là $2$ N.\n\nChọn A.",
  "sourceQuestionId": "18272c86-6688-4f82-a6eb-39818f9e09f0",
  "maCauHoi": "CH_1787238233884_28in"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Thanh L có chiều dài $10$ cm nặng $40$ gam, điện trở $1,9\\ \\Omega$, tựa trên hai thanh MN và PQ có điện trở không đáng kể. Suất điện động của nguồn $4$ V, điện trở trong $0,1\\ \\Omega$. Mạch điện đặt trong từ trường đều $B = 0,1$ T, vuông góc với mặt phẳng khung. Thanh L chuyển động với gia tốc \n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/vd811is1ej_1787315668182.jpg)",
  "options": [
    "$0,05\\text{ m/s}^2.$",
    "$0,5\\text{ m/s}^2.$",
    "$0,1\\text{ m/s}^2.$",
    "$1,0\\text{ m/s}^2.$"
  ],
  "answerIndex": 1,
  "answer": "Phương pháp giải:\n- Tính cường độ dòng điện trong mạch: $I = \\frac{E}{R + r}$.\n- Tính lực từ tác dụng lên thanh: $F = BIL\\sin\\alpha$.\n- Áp dụng định luật II Newton: $a = \\frac{F}{m}$.\n\nLời giải:\nCường độ dòng điện qua thanh L:\n$I = \\frac{E}{R + r} = \\frac{4}{1,9 + 0,1} = 2$ A.\nĐổi: $L = 10$ cm $= 0,1$ m; $m = 40$ g $= 0,04$ kg.\nLực từ tác dụng lên thanh:\n$F = BIL\\sin 90^\\circ = 0,1 \\cdot 2 \\cdot 0,1 = 0,02$ N.\nGia tốc chuyển động của thanh L là:\n$a = \\frac{F}{m} = \\frac{0,02}{0,04} = 0,5\\text{ m/s}^2.$",
  "sourceQuestionId": "d2f152f3-aef2-4ae2-8718-18a3c0e35bf6",
  "maCauHoi": "CH_1787315679239_0zzp"
}
```

```quiz
{
  "type": "multiple_choice",
  "question": "Treo đoạn dây dẫn có chiều dài $\\ell = 5$ cm, khối lượng $m = 5$ g bằng hai dây mảnh, nhẹ sao cho dây dẫn nằm ngang. Biết cảm ứng từ của từ trường hướng thẳng đứng xuống dưới, có độ lớn $B = 0,5$ T và dòng điện đi qua dây dẫn là $I = 2$ A. Nếu lấy $g = 10\\text{ m/s}^2$ thì góc lệch $\\alpha$ của dây treo so với phương thẳng đứng là bao nhiêu?",
  "options": [
    "A. $45^0$.",
    "B. $30^0$.",
    "C. $60^0$.",
    "D. $90^0$."
  ],
  "answerIndex": 0,
  "answer": "Phương pháp giải:\n- Trọng lượng đoạn dây: $P = m g$.\n- Lực từ tác dụng lên đoạn dây: $F = I B \\ell$.\n- Góc lệch của dây treo: $\\tan\\alpha = \\frac{F}{P}$.\n\nLời giải:\nĐổi: $\\ell = 5$ cm $= 0,05$ m; $m = 5$ g $= 0,005$ kg.\nTrọng lượng đoạn dây: $P = m g = 0,005 \\cdot 10 = 0,05$ N.\nĐộ lớn lực từ (có phương nằm ngang): $F = I B \\ell = 2 \\cdot 0,5 \\cdot 0,05 = 0,05$ N.\n\nGóc lệch của dây treo so với phương thẳng đứng thoả mãn:\n$\\tan\\alpha = \\frac{F}{P} = \\frac{0,05}{0,05} = 1 \\Rightarrow \\alpha = 45^\\circ$.\n\nChọn A.",
  "sourceQuestionId": "ef4eb827-0fff-4a3e-b4a7-4ad8fd7c518b",
  "maCauHoi": "CH_1787238233884_u57o"
}
```

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

```quiz
{
  "type": "multiple_choice",
  "question": "Khi đo cảm ứng từ bằng phương pháp cân dòng điện, một học sinh bố trí thí nghiệm như hình bên. Sau khi hiệu chỉnh cân về số 0, thay đổi lần lượt thay đổi các giá trị cường độ dòng điện chạy quay dây dẫn và ghi lại số chỉ của cân. Đồ thị biểu diễn sự thay đổi chỉ số của cân theo cường độ dòng điện được cho ở hình dưới. \n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/dffeyw68vcg_1787239083249.jpg)\n\n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/6bum0zj12ic_1787239143690.jpg)\n\nBiểu thức nào sau đây đúng ?",
  "options": [
    "$\\tan \\alpha = \\frac{B \\cdot g}{\\ell}$",
    "$\\tan \\alpha = \\frac{B \\cdot g}{m}$",
    "$\\tan \\alpha = \\frac{B \\cdot \\ell}{g}$",
    "$\\tan \\alpha = \\frac{B \\cdot m}{g}$"
  ],
  "answerIndex": 2,
  "answer": "Phương pháp giải:\n- Từ điều kiện cân bằng của cân dòng điện: $F = m \\cdot g = B \\cdot I \\cdot \\ell$.\n- Biểu diễn số chỉ cân $m$ theo cường độ dòng điện $I$: $m = \\frac{B \\cdot \\ell}{g} \\cdot I$.\n- Xác định hệ số góc của đồ thị $m - I$: $\\tan\\alpha = \\frac{m}{I}$.\n\nLời giải:\n- Lực từ tác dụng làm thay đổi số chỉ của cân:\n$F = m \\cdot g = B \\cdot I \\cdot \\ell$.\n- Suy ra hàm biểu diễn số chỉ cân theo dòng điện $I$:\n$m = \\left(\\frac{B \\cdot \\ell}{g}\\right) \\cdot I$.\n- Đồ thị $m(I)$ là đường thẳng đi qua gốc tọa độ với hệ số góc:\n$\\tan\\alpha = \\frac{m}{I} = \\frac{B \\cdot \\ell}{g}$.",
  "sourceQuestionId": "01d12dbf-80fb-4ced-b91f-d3130b96e618",
  "maCauHoi": "CH_1787239319806_kdhl"
}
```

```quiz
{
  "type": "true_false_cluster",
  "question": "Một đoạn dây dẫn nằm ngang được giữ cố định ở vùng từ trường đều trong khoảng không gian giữa hai cực của nam châm. Nam châm này được đặt trên một cái cân, phần nằm trong từ trường của đoạn dây dẫn có chiều dài là $1,0$ cm. Khi không có dòng điện chạy trong đoạn dây, số chỉ của cân là $500,68$ g. Khi có dòng điện cường độ $0,34$ A chạy trong đoạn dây, số chỉ của cân là $500,12$ g. Lấy $g = 9,8\\text{ m/s}^2$. \n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/8k5xej2a0yp_1787239481049.jpg)\n\nTrong các phát biểu sau đây, phát biểu nào là đúng, phát biểu nào là sai?",
  "options": [
    {
      "content": "Số chỉ của cân giảm đi chứng tỏ có một lực tác dụng vào cân theo chiều thẳng đứng lên trên.",
      "isTrue": true
    },
    {
      "content": "Lực tác dụng làm cho số chỉ của cân giảm là lực từ tác dụng lên đoạn dây và có chiều hướng lên.",
      "isTrue": false
    },
    {
      "content": "Dòng điện trong dây có chiều từ trái sang phải.",
      "isTrue": true
    },
    {
      "content": "Độ lớn cảm ứng từ giữa các cực của nam châm là $0,16$ T.",
      "isTrue": false
    }
  ],
  "answer": "Phương pháp giải:\n- Áp dụng định luật III Newton: Lực từ do nam châm tác dụng lên đoạn dây mang dòng điện $\\vec{F}$ và lực do đoạn dây tác dụng trở lại nam châm $\\vec{F}'$ là hai lực trực đối: $\\vec{F}' = -\\vec{F}$.\n- Áp lực tác dụng lên mặt đĩa cân thay đổi một lượng: $\\Delta N = F' = F$.\n- Độ biến thiên số chỉ của cân: $\\Delta m = |m - m_0| \\Rightarrow F = \\Delta m \\cdot g$.\n- Công thức tính độ lớn lực từ: $F = B \\cdot I \\cdot L \\cdot \\sin\\alpha \\Rightarrow B = \\frac{F}{I \\cdot L \\cdot \\sin\\alpha}$.\n- Xác định chiều của lực từ và chiều dòng điện bằng quy tắc bàn tay trái.\n\nLời giải:\na) Đúng. Ban đầu khi chưa có dòng điện, cân chỉ $m_0 = 500,68$ g. Khi có dòng điện, số chỉ của cân giảm xuống còn $m = 500,12$ g, chứng tỏ có một lực do đoạn dây tác dụng lên nam châm theo phương thẳng đứng hướng lên trên làm giảm áp lực tác dụng lên mặt cân.\nb) Sai. Lực làm cho số chỉ của cân giảm là phản lực $\\vec{F}'$ do đoạn dây tác dụng lên nam châm có chiều hướng thẳng đứng lên trên. Theo định luật III Newton, lực từ do nam châm tác dụng lên đoạn dây dẫn $\\vec{F}$ có chiều hướng thẳng đứng xuống dưới.\nc) Đúng. Đường sức từ của nam châm có chiều đi từ cực Bắc (N) sang cực Nam (S) (từ phải sang trái). Lực từ tác dụng lên đoạn dây hướng thẳng đứng xuống dưới. Áp dụng quy tắc bàn tay trái: đặt bàn tay trái hứng các đường sức từ, ngón tay cái choãi ra $90^\\circ$ hướng thẳng đứng xuống dưới, khi đó chiều từ cổ tay đến ngón tay giữa chỉ chiều dòng điện trong dây dẫn là từ trái sang phải.\nd) Sai. Độ giảm khối lượng do cân ghi nhận:\n$\\Delta m = 500,68 - 500,12 = 0,56$ g $= 0,56 \\cdot 10^{-3}$ kg.\nĐộ lớn lực từ:\n$F = \\Delta m \\cdot g = 0,56 \\cdot 10^{-3} \\cdot 9,8 = 5,488 \\cdot 10^{-3}$ N.\nĐộ lớn cảm ứng từ giữa hai cực của nam châm:\n$B = \\frac{F}{I \\cdot L} = \\frac{5,488 \\cdot 10^{-3}}{0,34 \\cdot 0,01} \\approx 1,61$ T $\\neq 0,16$ T.",
  "sourceQuestionId": "d7e76719-7720-4dd0-8389-9270f779f08f",
  "maCauHoi": "CH_1787239611813_popt"
}
```

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

```quiz
{
  "type": "multiple_choice",
  "question": "Một khung dây hình vuông nằm trong mặt phẳng tờ giấy. Trong vòng dây này có dòng điện với cường độ I chạy theo chiều kim đồng hồ. Nếu cảm ứng từ hướng từ trái sang phải và mỗi cạnh của vòng dây có chiều dài $\\ell$ thì tổng lực từ tác dụng lên vòng dây bằng",
  "options": [
    "$2BI\\ell$.",
    "$BI\\ell$.",
    "$BI\\ell^2$.",
    "0."
  ],
  "answerIndex": 3,
  "answer": "Phương pháp giải:\nTính lực từ tác dụng lên từng cạnh của khung dây kín và tính tổng hợp lực.\n\nLời giải:\nKhung dây hình vuông có 4 cạnh:\n- Cạnh trên (dòng điện sang phải) và cạnh dưới (dòng điện sang trái) song song với $\\vec{B}$ nên lực từ tác dụng lên hai cạnh này bằng $0$.\n- Cạnh bên phải (dòng điện đi xuống) chịu lực từ có độ lớn $F_1 = B I \\ell$, hướng từ ngoài vào trong mặt phẳng tờ giấy.\n- Cạnh bên trái (dòng điện đi lên) chịu lực từ có độ lớn $F_2 = B I \\ell$, hướng từ trong ra ngoài mặt phẳng tờ giấy.\nHai lực $\\vec{F}_1$ và $\\vec{F}_2$ cùng độ lớn, ngược chiều nhau nên tổng hợp lực từ tác dụng lên toàn bộ khung dây bằng $0$.\nChọn D.",
  "sourceQuestionId": "b9cab89a-9189-4e6e-9692-1b54fa935b27",
  "maCauHoi": "CH_1787230559933_p37z"
}
```

```quiz
{
  "type": "true_false_cluster",
  "question": "Cho một khung dây hình chữ nhật ABCD có AB $= 10$ cm; BC $= 20$ cm, có dòng điện $I = 4$ A chạy qua đặt trong một từ trường đều có các đường sức từ song song với mặt phẳng chứa khung dây như hình vẽ. Biết $B = 0,04$ T. \n![Hình ảnh](https://xnnwrymrcuaqyfxhsmer.supabase.co/storage/v1/object/public/lesson_images/editor_images/jgtrezrglue_1787237977715.jpg)",
  "options": [
    {
      "content": "a) Lực từ tác dụng lên các cạnh AB và CD bằng không.",
      "isTrue": true
    },
    {
      "content": "b) Lực tác dụng lên cạnh BC hướng từ trong ra ngoài, lực tác dụng lên cạnh AD hướng từ ngoài vào trong và có độ lớn là $32\\cdot 10^{-3}$ N.",
      "isTrue": true
    },
    {
      "content": "c) Lực từ tác dụng lên các cạnh BC và AD có điểm đặt tại lần lượt tại B và D",
      "isTrue": false
    },
    {
      "content": "d) Lực từ của cạnh AD và BC tạo thành một cặp ngẫu lực có tác dụng làm cho khung dây quay đến vị trí mà mặt phẳng khung dây vuông góc với các đường sức từ.",
      "isTrue": true
    }
  ],
  "answer": "Phương pháp giải:\n- Lực từ tác dụng lên đoạn dây dẫn mang dòng điện: $F = I B L \\sin\\alpha$, với $\\alpha = (\\vec{B}, \\vec{I})$.\n- Xác định chiều lực từ theo quy tắc bàn tay trái.\n- Cặp lực tác dụng lên hai cạnh đối diện có độ lớn bằng nhau, song song, ngược chiều và không cùng giá tạo thành một ngẫu lực từ làm quay khung dây.\n\nLời giải:\na) Cạnh AB và CD song song với các đường sức từ $\\vec{B}$ nên góc $\\alpha = 0^\\circ$ hoặc $180^\\circ$.\nDo đó lực từ tác dụng lên cạnh AB và CD là $F_{\\text{AB}} = F_{\\text{CD}} = 0$. -> Đúng.\nb) Cạnh BC vuông góc với $\\vec{B}$, dòng điện chạy từ B đến C. Theo quy tắc bàn tay trái, lực từ $\\vec{F}_{\\text{BC}}$ hướng từ trong ra ngoài mặt phẳng hình vẽ.\nCạnh AD vuông góc với $\\vec{B}$, dòng điện chạy từ D đến A. Theo quy tắc bàn tay trái, lực từ $\\vec{F}_{\\text{AD}}$ hướng từ ngoài vào trong mặt phẳng hình vẽ.\nĐộ lớn: $F_{\\text{BC}} = F_{\\text{AD}} = I \\cdot$ BC $\\cdot B = 4 \\cdot 0,2 \\cdot 0,04 = 0,032$ N $= 32\\cdot 10^{-3}$ N. -> Đúng.\nc) Điểm đặt của lực từ tác dụng lên mỗi đoạn dây dẫn thẳng đồng tính là tại trung điểm của đoạn dây đó (trung điểm của BC và AD), không phải tại B và D. -> Sai.\nd) Hai lực $\\vec{F}_{\\text{BC}}$ và $\\vec{F}_{\\text{AD}}$ tạo thành ngẫu lực có tác dụng làm quay khung dây quanh trục đối xứng đến vị trí mặt phẳng khung dây vuông góc với các đường sức từ (vị trí cân bằng bền). -> Đúng.",
  "sourceQuestionId": "de80f766-74d3-41ba-891f-7ab479f5b314",
  "maCauHoi": "CH_1787238233884_dtk2"
}
```
