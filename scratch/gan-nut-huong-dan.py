# -*- coding: utf-8 -*-
# A8: gan nut "Huong dan" vao thanh dau trang soan bai (ca hai the dau trang).
import io, sys

G = 'D:/claude/physics-lms/'
p = G + 'src/app/admin/lessons/editor/page.tsx'
s = io.open(p, encoding='utf-8').read()
crlf = '\r\n' in s
s = s.replace('\r\n', '\n')


def thay(noi, cu, moi, ten, lan=1):
    if cu not in noi:
        raise SystemExit('KHONG THAY: ' + ten)
    return noi.replace(cu, moi, lan)


# 1. Nhap hop huong dan
s = thay(s,
    'import { ArrowLeft, Save,',
    'import HuongDanSoanBaiModal from "@/components/admin/HuongDanSoanBaiModal";\nimport { ArrowLeft, HelpCircle, Save,',
    'dong import lucide')

# 2. Trang thai mo hop - dat ngay sau mot useState da co
neo = '  const [isSavingDB, setIsSavingDB] = useState(false);'
if neo not in s:
    raise SystemExit('KHONG THAY neo isSavingDB')
s = thay(s, neo, neo + '\n  const [moHuongDan, setMoHuongDan] = useState(false);', 'trang thai moHuongDan')

# 3. Nut o thanh dau thu gon (truoc dau mui ten cuoi thanh)
cu_gon = '<div className="p-1 bg-gray-200 rounded-md ml-2">'
moi_gon = ("""<button onClick={(e) => { e.stopPropagation(); setMoHuongDan(true); }}
                       title="Bang tra lenh soan bai"
                       className="bg-white border border-gray-300 text-gray-600 px-3 py-1.5 rounded-md text-xs font-bold hover:bg-gray-50 shadow-sm flex items-center gap-1.5 ml-2">
                 <HelpCircle className="w-3.5 h-3.5" /> Huong dan
               </button>
               """ + cu_gon)
s = thay(s, cu_gon, moi_gon, 'nut o thanh thu gon')

# 4. Nut o thanh dau day du (canh nut Luu)
cu_day = """              <button onClick={handleSaveToDB} disabled={isSavingDB} className="bg-teal-600 text-white px-6 py-2.5"""
moi_day = """              <button onClick={() => setMoHuongDan(true)}
                      title="Bảng tra lệnh soạn bài"
                      className="bg-white border border-gray-300 text-gray-600 px-4 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <HelpCircle className="w-4 h-4" /> Hướng dẫn
              </button>

""" + cu_day
s = thay(s, cu_day, moi_day, 'nut o thanh day du')

# 5. Gan hop vao cuoi trang - truoc the dong cuoi cung
neo_cuoi = """        />
      )}
    </div>
  );
}

export default function AIEditorPage() {"""
i = s.rfind(neo_cuoi)
if i < 0:
    raise SystemExit('KHONG THAY neo cuoi trang')
s = s[:i] + """        />
      )}

      <HuongDanSoanBaiModal isOpen={moHuongDan} onClose={() => setMoHuongDan(false)} />
    </div>
  );
}

export default function AIEditorPage() {""" + s[i + len(neo_cuoi):]

if crlf:
    s = s.replace('\n', '\r\n')
io.open(p, 'w', encoding='utf-8', newline='').write(s)
print('xong: da gan nut Huong dan')
