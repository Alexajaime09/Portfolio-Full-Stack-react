import React from "react";
import { useState } from "react";
import alexaImage from "../../assets/alexa.jpg";
import { about } from "../../data/index";
import { about2 } from "../../data/about";
import car from "../../assets/car.svg";

const About = () => {
  const { title, greeting, content, photoAlt } = about;
  const [move, setMove] = useState(0);

  const nextMove = () => {
    setMove((prev) => prev + 200);
  };

  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep((prev) => {
      console.log(step);
      return prev + 1;
    });
  };

  return (
    <div
      className=" w-full min-h-full flex flex-col  items-center justify-center 
    relative px-8 gap-8 scroll-mt-35 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] py-10 "
    >
      <h3 className=" text-[#EAE9E5]  text-[35px] md:text-[48px] lg:text-[63px]  font-normal font-main mb-10">
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
          <div className="absolute inset-0 rounded-full bg-yellow-400/10 blur-[40px] scale-110"></div>
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
      <div>
        <p
          className="text-3xl font-medium font-main leading-relaxed max-w-prose text-center
        text-[#e5e5e5] pb-6"
        >
          Areas Keys
        </p>
        <p
          className="text-xl font-medium font-main leading-relaxed max-w-prose
        animate-size text-[#efddc0]"
        >
          Click on the circules of the traffic light. Start with the red
        </p>
      </div>

      {/* main container trafficlights */}

      <div className="font-semibold flex py-12 text-[10px] md:text-[14px] z-10 ">
        <div
          className="relative p-3 rounded-[40px] bg-[#201f1f] backdrop-blur-md text-white
      "
        >
          <div
            className="relative w-[clamp(280px,80vw,420px)] h-[clamp(80px,20vw,120px)] rounded-[36px] bg-[linear-gradient(to_right,#171717_0%,#2b292c_25%,#1e1e1f_50%,#121212_75%,#000000_100%)]
             bg-[length:120%_100%] flex items-center justify-center 
             shadow-[0_4px_0px_rgba(0,0,0,0.5)] gap-[clamp(30px,4vw,48px)] "
          >
            <button
              onClick={nextStep}
              className="w-[clamp(50px,15vw,85px)] h-[clamp(50px,15vw,85px)] 85px] bg-[#AE3846] rounded-full 
            hover flex justify-center items-center shadow-[0_5px_5px_rgba(0,0,0,0.5)]   "
            >
              <p className="font-main ">Marketing</p>
            </button>
            <button
              onClick={nextStep}
              className="w-[clamp(50px,15vw,85px)] h-[clamp(50px,15vw,85px)] bg-[#089494] rounded-full 
            hover flex justify-center items-center shadow-[0_5px_5px_rgba(0,0,0,0.5)]   "
            >
              <p className="font-main ">Design</p>
            </button>
            <button
              onClick={nextStep}
              className="w-[clamp(50px,15vw,85px)] h-[clamp(50px,15vw,85px)] bg-[#6c9031] rounded-full 
             hover flex justify-center items-center shadow-[0_5px_5px_rgba(0,0,0,0.5)]   "
            >
              <p className="font-main ">Software</p>
            </button>
          </div>
        </div>
      </div>
      {/* car and text container */}
      <div className="flex  w-full min-h-[100dvh] pb-20 ">
        <div className="basis-1/4 md:basis-1/2 pr-8 ">
          <div className="w-auto h-[180px] flex justify-end  ">
            <img
              className={`rotate-180 transition-all ease-out delay-1000 duration-2000
                 ${step === 0 ? "-translate-y-[300px] opacity-0 " : step === 1 ? " translate-y-[0]  opacity-100" : step === 2 ? " translate-y-[300px]  lg:translate-y-[200px] opacity-100 " : step === 3 ? "translate-y-[520px]   lg:translate-y-[400px] opacity-100" : ""}`}
              src={car}
              alt="car"
            />
          </div>
        </div>
        <div
          className="basis-3/4 md:basis-1/2 pl-8  border-l-amber-50 border-l-2 flex 
        flex-col gap-35 text-[20px] "
        >
          {about2.map((area, index) => {
            return (
              <div className={`flex flex-col overflow-hidden `}>
                <p
                  className={`text-[#e5e5e5] font-main inline-block 
                transition-all duration-1000  ${step >= index + 1 ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} `}
                >
                  {area.title}
                </p>
                <p
                  className={`text-[#acacac]  font-main inline-block  transition-all duration-1000  ${step >= index + 1 ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} `}
                >
                  {area.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
