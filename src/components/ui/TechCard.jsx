import React from "react";

const TachCard = ({ name, features, tags }) => {
  const icons = {
    HTML: "fa-brands fa-html5",
    CSS: "fa-brands fa-css3",
    REACT: "fa-brands fa-react",
    JS: "fa-brands fa-node-js",
  };

  return (
    <div
      className="flex flex-col w-[260px] h-[395px] my-0 mx-auto relative 
        bg-[#0f0f0f]/80 backdrop-blur-xl  border border-white/10 
        overflow-hidden group
       rounded-[30px]
        before:content-[''] before:absolute before:top-0 
      before:left-1/2 before:-translate-x-1/2 before:w-[55px] before:h-[40px]
      before:bg-gradient-to-br before:from-[#c6a55c] before:to-[#dbb959]  before:rounded-bl-[5px] before:rounded-br-[5px] "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,216,138,0.25),transparent_40%)]"></div>
      <div className="flex flex-col items-center relative top-[17%] gap-5 ">
        <div className="text-[25px] font-medium text-white ">
          <h4 className=" text-[28px] font-main ">{name}</h4>
        </div>
        <div
          className="w-[90px] h-[90px] rounded-full bg-gradient-to-br from-[#c6a55c] to-[#d4b254] 
        flex items-center justify-center "
        >
          <i
            className={`text-[45px] tech-icon text-white font-medium   ${icons[name]}`}
          ></i>
        </div>
        <div className=" items-center flex flex-col font-light font-main gap-3 ">
          <div className=" flex gap-4 ">
            {features.top.map((item, index) => (
              <p className="text-white " key={index}>
                {item}
              </p>
            ))}
          </div>
          <div className=" flex text-white gap-4 font-light ">
            {features.bottom.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-center-safe text-[13px] w-[90%] gap-3 ">
          {tags.map((tag, index) => (
            <div className="w-ful text-white font-light ">
              <p key={index} className="bg-[#353642] px-3 rounded-[5px]">
                {tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TachCard;
