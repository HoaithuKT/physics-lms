"use client";

import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from 'react-katex';
import { BlockPhysics, InlinePhysics } from "react-katex";
import { fixLatexExt } from '@/utils/latexFix';

interface PhysicsTextProps {
  math: string;
  inline?: boolean;
  className?: string;
}

export function PhysicsText({ math, inline = false, className = "" }: PhysicsTextProps) {
  const fixedMath = fixLatexExt(math);
  return (
    <span className={`text-[#f97316] ${className}`}>
      {inline ? (
        <InlinePhysics math={fixedMath} />
      ) : (
        <BlockPhysics math={fixedMath} />
      )}
    </span>
  );
}
