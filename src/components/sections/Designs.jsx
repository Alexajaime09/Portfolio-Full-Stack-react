import React from "react";

import DesignCarrusel from "../ui/DesignsCarrusel";

const Designs = () => {
  return (
    <div
      id="designs"
      className=" w-full min-h-full flex flex-col  items-center justify-center bg-[linear-gradient(180deg,#1e1e1f_0%,#121212_60%,#0b0b0b_100%)]
    relative px-8 gap-8 scroll-mt-35 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] py-10  "
    >
      <h3 className=" text-[#EAE9E5]  text-[35px] md:text-[48px] lg:text-[63px]  font-normal font-main mb-15  ">
        Designs
      </h3>

      <div className="w-full  h-[500px]  px-8  flex items-center justify-center ">
        <DesignCarrusel />
      </div>
    </div>
  );
};

export default Designs;
