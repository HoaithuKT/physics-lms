const demThe = (s) => (s.match(/<\/?(?:span|div)\b/gi) || []).length;
function capTuCoChu(px) {
  if (px >= 46) return 1;
  if (px >= 38) return 2;
  if (px >= 30) return 3;
  return 4;
}
function donTheThua(noiDung) {
  const gocDay = String(noiDung || "");
  const truoc = demThe(gocDay);
  const daLam = [];
  const khoiRao = [];
  let s = gocDay.replace(/```[\s\S]*?```/g, (khoi) => {
    khoiRao.push(khoi);
    return `\0RAO${khoiRao.length - 1}\0`;
  });
  let demTieuDe = 0, demDivRac = 0, demSpanRong = 0, demManhVo = 0;
  s = s.split("\n").map((dong) => {
    const t = dong.trim();
    if (!/^\*{0,2}<span[\s>]/i.test(t) || !/<\/span>\*{0,2}$/i.test(t)) return dong;
    const coChu = [...t.matchAll(/font-size:\s*(\d+)\s*px/gi)].map((m) => parseInt(m[1]));
    const chu = t.replace(/<[^>]*>/g, "").replace(/^\*+|\*+$/g, "").trim();
    if (!chu) return dong;
    demTieuDe++;
    const cap = coChu.length ? capTuCoChu(Math.max(...coChu)) : 2;
    return "#".repeat(cap) + " " + chu;
  }).join("\n");
  if (demTieuDe) daLam.push(`${demTieuDe} ti\xEAu \u0111\u1EC1 b\u1ECDc th\u1EBB span \u2192 ti\xEAu \u0111\u1EC1 Markdown (#)`);
  s = s.split("\n").filter((dong) => {
    const t = dong.trim();
    const vo = t.length > 0 && t.length < 60 && /^[\w:[\]-]*\]?:?[\w-]*"?>?$/.test(t) && /[\]">]/.test(t);
    if (vo) demManhVo++;
    return !vo;
  }).join("\n");
  if (demManhVo) daLam.push(`${demManhVo} d\xF2ng m\u1EA3nh th\u1EBB v\u1EE1 (VD \`p:last-child]:mb-0">\`)`);
  const truocDiv = (s.match(/<div\b/gi) || []).length;
  s = s.replace(/<div[^>]*>\s*/gi, "").replace(/\s*<\/div>/gi, "");
  demDivRac = truocDiv;
  if (demDivRac) daLam.push(`${demDivRac} th\u1EBB <div> t\xF4 khung \u2192 b\u1ECF (d\xF9ng d\u1EA5u > c\u1EE7a Markdown)`);
  s = s.replace(/<span(?![^>]*(?:color|font-size|background))[^>]*>([\s\S]*?)<\/span>/gi, (_, trong) => {
    demSpanRong++;
    return trong;
  });
  if (demSpanRong) daLam.push(`${demSpanRong} th\u1EBB <span> kh\xF4ng \u0111\u1EB7t m\xE0u/c\u1EE1 \u2192 b\u1ECF`);
  s = s.replace(/\n{4,}/g, "\n\n\n").replace(/[ \t]+$/gm, "");
  s = s.replace(/ ?RAO(\d+) ?/g, (_, i) => khoiRao[Number(i)] ?? "");
  return { noiDungMoi: s, daLam, soTheTruoc: truoc, soTheSau: demThe(s) };
}
export {
  donTheThua
};
