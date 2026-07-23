"use client";

import React from "react";
import "katex/dist/katex.min.css";
import { BlockPhysics, InlinePhysics } from "react-katex";

interface PhysicsTextProps {
  math: string;
  inline?: boolean;
  className?: string;
}

export function PhysicsText({ math, inline = false, className = "" }: PhysicsTextProps) {
  return (
    <span className={`text-[#f97316] ${className}`}>
      {inline ? <InlinePhysics math={math} /> : <BlockPhysics math={math} />}
    </span>
  );
}
