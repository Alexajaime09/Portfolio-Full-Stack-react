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
        className=" w-full min-h-full flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-7 border rounded-3xl py-4
    shadow-[inset_0_15px_25px_rgba(255,255,255,0.6),inset_0_-25px_40px_rgba(0,0,0,0.08)]
      bg-[#EAE9E5]  "
      >
        <div
          className="flex items-center justify-between size-[300px] md:size-[270px] shrink-0 aspect-square overflow-hidden p-7
          "
        >
          <img
            className=" w-full h-full object-cover rounded-full  "
            src={alexaImage}
            alt={photoAlt}
          />
        </div>
        <div className=" text-[#191919;] flex items-center justify-center p-7   ">
          <p className="text-xl font-light font-main leading-relaxed max-w-prose ">{`${greeting}, ${content}`}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
