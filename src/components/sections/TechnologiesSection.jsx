import React from "react";
import TachCard from "../ui/TechCard";
import { technologies } from "../../data/index";

const TechnologiesSection = () => {
  return (
    <div
      id="technologies"
      className="flex flex-col w-full min-h-full items-center justify-center scroll-mt-24  "
    >
      <h3 className=" text-white text-[35px] md:text-[48px] lg:text-[63px]  font-normal font-main  ">
        Technologies
      </h3>
      <div className="p-8 w-full min-h-full grid grid-cols-[repeat(auto-fit,_260px)]  justify-center items-center gap-9 lg:gap-16 bg-bg ">
        {technologies.map((tech) => (
          <TachCard key={tech.id} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default TechnologiesSection;
