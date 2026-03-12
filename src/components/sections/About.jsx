import React from "react";
import alexaImage from "../../assets/alexa.jpg";
import { about } from "../../data/index";

const About = () => {
  const { title, greeting, content, photoAlt } = about;

  return (
    <div
      className=" w-full min-h-full flex flex-col  items-center justify-center 
    relative px-8 gap-8 scroll-mt-35"
    >
      <h3 className=" text-[#EAE9E5]  text-[35px] md:text-[48px] lg:text-[63px]  font-normal font-main mb-15">
        {title}
      </h3>
      <div
        className=" w-full min-h-full flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-7  rounded-[40px] py-4
      bg-[#EAE9E5] 

     "
      >
        <div
          className="flex items-center justify-between size-[300px] md:size-[270px] shrink-0 aspect-square overflow-hidden p-
         rounded-full  shadow-[0_0_40px_rgba(0,0,0,0.25),0_0_25px_rgba(255,255,255,0.4)] p-1 "
        >
          <img
            className=" w-full h-full object-cover rounded-full   "
            src={alexaImage}
            alt={photoAlt}
          />
        </div>
        <div className=" text-[#191919;] flex items-center justify-center p-7   ">
          <p className="text-xl font-light font-main leading-relaxed max-w-prose ">
            <span className="text-3xl font-[Outfit]">{greeting}</span> ,{" "}
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
