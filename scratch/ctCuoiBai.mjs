const MOC_MUC = /^#{1,4}\s*(?:📌\s*)?CÔNG THỨC CẦN NHỚ.*$/im;
function coMucCongThuc(noiDung) {
  return MOC_MUC.test(String(noiDung || ""));
}
function rutCongThucCuoiBai(noiDung) {
  const s = String(noiDung || "");
  const m = s.match(MOC_MUC);
  if (!m || m.index === void 0) return [];
  let doan = s.slice(m.index + m[0].length);
  const capMuc = (m[0].match(/^#+/) || ["##"])[0].length;
  const ketThuc = doan.search(new RegExp(`^#{1,${capMuc}}\\s`, "m"));
  if (ketThuc > 0) doan = doan.slice(0, ketThuc);
  const ra = [];
  for (const dong of doan.split("\n")) {
    const d = dong.trim();
    if (!d.startsWith("-") && !d.startsWith("*")) continue;
    const phan = d.replace(/^[-*]\s*/, "").split("|").map((x) => x.trim());
    if (phan.length < 2) continue;
    const ten = phan[0].replace(/\*\*/g, "").trim();
    const latex = phan[1].replace(/^\$+|\$+$/g, "").trim();
    if (!ten || !latex) continue;
    ra.push({
      title: ten,
      latex_content: latex,
      description: (phan[2] || "").replace(/\*\*/g, "").trim()
    });
  }
  return ra;
}
function dungPromptRutCongThuc(noiDungBai) {
  return `B\u1EA1n l\xE0 gi\xE1o vi\xEAn V\u1EADt l\xED. D\u01B0\u1EDBi \u0111\xE2y l\xE0 m\u1ED9t b\xE0i gi\u1EA3ng. H\xE3y r\xFAt ra c\xE1c C\xD4NG TH\u1EE8C TR\u1ECCNG T\xC2M
m\xE0 b\xE0i n\xE0y th\u1EF1c s\u1EF1 c\xF3 d\xF9ng.

QUY T\u1EAEC:
1. Ch\u1EC9 l\u1EA5y c\xF4ng th\u1EE9c TH\u1EACT S\u1EF0 xu\u1EA5t hi\u1EC7n ho\u1EB7c \u0111\u01B0\u1EE3c d\xF9ng trong b\xE0i. TUY\u1EC6T \u0110\u1ED0I kh\xF4ng b\u1ECBa th\xEAm
   c\xF4ng th\u1EE9c "cho \u0111\u1EE7 b\u1ED9".
2. M\u1ED7i c\xF4ng th\u1EE9c vi\u1EBFt \u0110\xDANG m\u1ED9t d\xF2ng, \u0111\xFAng khu\xF4n sau, kh\xF4ng th\xEAm b\u1EDBt g\xEC:
   - **T\xEAn c\xF4ng th\u1EE9c** | $c\xF4ng th\u1EE9c LaTeX$ | d\xF9ng khi n\xE0o
3. T\xEAn c\xF4ng th\u1EE9c ph\u1EA3i g\u1ECDi \u0111\xFAng t\xEAn v\u1EADt l\xED (VD "\u0110\u1ECBnh lu\u1EADt II Newton", "Chu k\xEC con l\u1EAFc \u0111\u01A1n"),
   kh\xF4ng \u0111\u1EB7t t\xEAn chung chung nh\u01B0 "C\xF4ng th\u1EE9c 1".
   Gi\u1EEF \u0110\xDANG k\xFD hi\u1EC7u \u0111\u1EA1i l\u01B0\u1EE3ng chu\u1EA9n V\u1EADt l\xED, kh\xF4ng t\u1EF1 \u0111\u1ED5i sang ch\u1EEF kh\xE1c.
4. Ph\u1EA7n "d\xF9ng khi n\xE0o" vi\u1EBFt ng\u1EAFn, d\u01B0\u1EDBi 15 t\u1EEB, n\xF3i r\xF5 d\xF9ng trong t\xECnh hu\u1ED1ng n\xE0o.
5. Ch\u1EC9 tr\u1EA3 v\u1EC1 c\xE1c d\xF2ng \u0111\xF3, kh\xF4ng l\u1EDDi d\u1EABn, kh\xF4ng ti\xEAu \u0111\u1EC1.

B\xC0I GI\u1EA2NG:

${String(noiDungBai || "").slice(0, 18e3)}`;
}
export {
  coMucCongThuc,
  dungPromptRutCongThuc,
  rutCongThucCuoiBai
};
