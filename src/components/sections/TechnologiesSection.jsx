import React from "react";
import TechCard from "../ui/TechCard";
import { technologies } from "../../data/index";
import Carrusel from "../ui/Carrusel";

const TechnologiesSection = () => {
  return (
    <div
      id="technologies"
      className="flex flex-col w-full min-h-full items-center justify-center py-15 md:py-0 gap-15  "
    >
      <h3 className=" text-[#EAE9E5]  text-[35px] md:text-[48px] lg:text-[63px]  font-normal font-main   ">
        Technologies
      </h3>
      <div className="flex w-full h-[500px]  px-8 ">
        <Carrusel />
      </div>
    </div>
  );
};

export default TechnologiesSection;
