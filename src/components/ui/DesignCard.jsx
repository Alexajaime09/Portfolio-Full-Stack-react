import React from "react";

const DesignCard = ({ image }) => {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center mb-20">
      <div
        className="flex flex-col w-[260px] h-[395px] my-0 mx-auto relative 
        bg-[#0f0f0f]/80 backdrop-blur-xl  border border-white/10 
        overflow-hidden group 
       rounded-[30px] items-center justify-center "
      >
        <img
          className=" object-cover w-[85%] h-auto    
    }}"
          src={image}
        />
      </div>
    </div>
  );
};

export default DesignCard;
