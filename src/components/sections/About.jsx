import React from "react";
import alexaImage from "../../assets/alexa.jpg";
import { about } from "../../data/index";

const About = () => {
  const { title, greeting, content, photoAlt } = about;

  return (
    <div className=" w-full min-h-full flex flex-col  items-center justify-center bg-[rgb(12,12,12)] relative px-8 gap-8 scroll-mt-35">
      <h3 className=" text-white text-[35px] md:text-[48px] lg:text-[63px]  font-normal font-main  ">
        {title}
      </h3>
      <div className=" w-full min-h-full flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-7 border border-white rounded-3xl py-4 ">
        <div className="flex items-center justify-between size-[300px] md:size-[270px] shrink-0 aspect-square overflow-hidden p-7 ">
          <img
            className=" w-full h-full object-cover rounded-full  "
            src={alexaImage}
            alt={photoAlt}
          />
        </div>
        <div className=" text-white flex items-center justify-center p-7   ">
          <p className="text-xl font-light font-main leading-relaxed max-w-prose ">{`${greeting}, ${content}`}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
