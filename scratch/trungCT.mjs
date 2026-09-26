function chuanHoaLatex(s) {
  return String(s || "").replace(/\$\$?/g, "").replace(/\\[dt]frac\b/g, "\\frac").replace(/\\(left|right|big{1,2}[lr]?|middle)\b\s*/g, "").replace(/\\[,;:!]|\\quad\b|\\qquad\b|\\hspace\{[^}]*\}/g, "").replace(/\\(mathrm|mathit|text|mathbf|boldsymbol)\s*\{([^{}]*)\}/g, "$2").replace(/\s+/g, "").replace(/\{(\w)\}/g, "$1").toLowerCase();
}
function chuanHoaTen(s) {
  return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[đĐ]/g, "d").toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}
function doTrung(moi, toanKho, boQuaId) {
  const latexMoi = chuanHoaLatex(moi.latex_content);
  const tenMoi = chuanHoaTen(moi.title);
  for (const c of toanKho) {
    if (boQuaId && c.id === boQuaId) continue;
    if (latexMoi && chuanHoaLatex(c.latex_content) === latexMoi) {
      return { trungVoi: c, lyDo: "latex" };
    }
  }
  for (const c of toanKho) {
    if (boQuaId && c.id === boQuaId) continue;
    if (tenMoi && chuanHoaTen(c.title) === tenMoi) {
      return { trungVoi: c, lyDo: "ten" };
    }
  }
  return { trungVoi: null, lyDo: null };
}
function gomNhomTrung(toanKho) {
  const theoLatex = /* @__PURE__ */ new Map();
  for (const c of toanKho) {
    const k = chuanHoaLatex(c.latex_content);
    if (!k) continue;
    if (!theoLatex.has(k)) theoLatex.set(k, []);
    theoLatex.get(k).push(c);
  }
  const nhom = [];
  const daVao = /* @__PURE__ */ new Set();
  for (const [khoa, ds] of theoLatex) {
    if (ds.length < 2) continue;
    nhom.push({ khoa, lyDo: "latex", cacBan: ds });
    ds.forEach((c) => c.id && daVao.add(c.id));
  }
  const theoTen = /* @__PURE__ */ new Map();
  for (const c of toanKho) {
    if (c.id && daVao.has(c.id)) continue;
    const k = chuanHoaTen(c.title);
    if (!k) continue;
    if (!theoTen.has(k)) theoTen.set(k, []);
    theoTen.get(k).push(c);
  }
  for (const [khoa, ds] of theoTen) {
    if (ds.length < 2) continue;
    nhom.push({ khoa, lyDo: "ten", cacBan: ds });
  }
  return nhom;
}
function locLoMoi(loMoi, toanKho) {
  const giuLai = [];
  const boQua = [];
  const khoTam = [...toanKho];
  for (const m of loMoi) {
    const kq = doTrung(m, khoTam);
    if (kq.trungVoi) {
      boQua.push({ cauMoi: m, trungVoi: kq.trungVoi, lyDo: kq.lyDo === "latex" ? "tr\xF9ng c\xF4ng th\u1EE9c" : "tr\xF9ng t\xEAn" });
    } else {
      giuLai.push(m);
      khoTam.push(m);
    }
  }
  return { giuLai, boQua };
}
export {
  chuanHoaLatex,
  chuanHoaTen,
  doTrung,
  gomNhomTrung,
  locLoMoi
};
