"use client";

import React from "react";
export default function ShimmerButton({ children, variant }) {
  const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;
  return (
    <div className="flex items-center justify-center font-sans">
      <style>{customCss}</style>
      <a className="relative inline-flex items-center justify-center p-[1px] bg-[#efeff0d3] dark:bg-black rounded-[5px] overflow-hidden group">
        <div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from var(--angle), transparent 25%, #676e7b, transparent 70%)",
            animation: "shimmer-spin 2.5s linear infinite",
          }}
        />
        <span
          className={`"relative z-10 inline-flex items-center justify-center w-full h-full px-5 py-3 md:px-8 md:py-3 text-white dark:text-white ${variant === "primary" ? "bg-[#2a3966] font-medium " : "bg-[#1f1f1f]"}  
          border-[#8a98c3] border-[0.5px] dark:bg-gray-900 rounded-[5px] group-hover:bg-[#6c80bc] dark:group-hover:bg-gray-800 transition-colors duration-300
          font-main
          `}
        >
          {children}
        </span>
      </a>
    </div>
  );
}
