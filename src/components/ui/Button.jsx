"use client";

import React from "react";
export default function ShimmerButton({ children, variant }) {
  return (
    <div className="flex items-center justify-center font-sans">
      <a className="relative inline-flex items-center justify-center p-[1px]  rounded-[5px] ">
        <span
          className={`relative z-10 inline-flex items-center justify-center w-full h-full px-2 py-3 md:px-8 md:py-3 
            text-white ${variant === "primary" ? "bg-[linear-gradient(60deg,#F5CB86,#7E5936)] font-medium hover:brightness-110 " : "bg-[#1f1f1f] hover:bg-[#a9977b]"}  
          border-[0.5px] rounded-[5px]
          font-main cursor-pointer 
          `}
        >
          {children}
        </span>
      </a>
    </div>
  );
}
