"use client";

import React from 'react';
import 'katex/dist/katex.min.css';
// Tên nhập phải đúng tên thư viện react-katex xuất ra là InlineMath/BlockMath.
// Trước đây file này ghi InlinePhysics/BlockPhysics - hệ quả của một lần tìm-thay
// "Math" -> "Physics" đè luôn tên hàm của thư viện ngoài, khiến component thành
// undefined và mọi trang dùng PhysicsRenderer đều hỏng.
import { InlineMath, BlockMath } from 'react-katex';

import { fixLatexExt } from '@/utils/latexFix';

export const PhysicsRenderer = ({ htmlContent }: { htmlContent: string }) => {
  if (!htmlContent) return null;

  const renderMixedContent = (text: string) => {
    // Sửa lỗi JSON parse tạo ra các ký tự lạ cho LaTeX
    text = fixLatexExt(text);

    // Chẻ chuỗi theo khối LaTeX $$...$$ hoặc $...$
    const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        // Công thức dạng khối
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      }
      if (part.startsWith('$') && part.endsWith('$')) {
        // Công thức nằm trong dòng
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      }
      // Văn bản bình thường hoặc các thẻ HTML (như <img> do copy/paste ảnh)
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
    });
  };

  return <div className="leading-relaxed whitespace-pre-wrap">{renderMixedContent(htmlContent)}</div>;
};
