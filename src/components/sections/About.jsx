import React from "react";
import alexaImage from "../../assets/alexa.jpg";
import { about } from "../../data/index";

const About = () => {
  const { title, greeting, content, photoAlt } = about;

  return (
    <div
      className=" w-full min-h-full flex flex-col  items-center justify-center 
    relative px-8 gap-8 scroll-mt-35  bg-[#0f0f0f]/80 backdrop-blur-xl
    border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]  "
    >
      <h3 className=" text-[#EAE9E5]  text-[35px] md:text-[48px] lg:text-[63px]  font-normal font-main mb-15">
        {title}
      </h3>
      <div
        className=" w-full min-h-full flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-7  rounded-[40px] py-4
      

     "
      >
        <div
          className="flex items-center justify-between size-[300px] md:size-[270px] shrink-0 aspect-square overflow-hidden 
         rounded-full p-1 relative "
        >
          <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-[40px] scale-110"></div>
          <div className="absolute inset-0 rounded-full border border-white/20 "></div>
          <img
            className=" w-full h-full object-cover rounded-full  shadow-[0_10px_40px_rgba(0,0,0,0.6)]  "
            src={alexaImage}
            alt={photoAlt}
          />
        </div>
        <div className=" flex items-center justify-center p-7   ">
          <p className="text-xl font-light font-main leading-relaxed max-w-prose text-[#acacac] ">
            <span className="text-3xl font-[Outfit] text-[#e5e5e5] ">
              {greeting}
            </span>{" "}
            , {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
