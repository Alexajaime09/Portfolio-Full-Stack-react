import React from "react";

import { contact } from "../../data";

const Contact = () => {
  const { headline, email, linkedin } = contact;
  return (
    <div
      className=" w-full min-h-[250px] grid place-items-center bg-[#EAE9E5]  text-[#242423]
    relative px-8 pb-6  scroll-mt-35 "
    >
      <h3 className="  text-[35px] md:text-[48px] lg:text-[63px]  font-normal font-main  py-7">
        Contact
      </h3>

      <div className="w-full grid grid-cols-2 place-items-center  items-center pb-5 ">
        <div>
          <p className="text-[28px] md:text-[35px] md:tracking-[15px] lg:tracking-[20px] font-['Lexend'] ">
            {headline}
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center  gap-5">
          <button className="py-2 text-[13px] px-4  md:px-6 rounded-[5px] bg-[rgb(30,30,30)] flex justify-center items-center gap-4 ">
            <i class="fa-solid fa-envelope text-[#EAE9E5]"></i>
            <a className="text-[#EAE9E5] font-main   " href="">
              send email
            </a>
          </button>
          <div className="flex gap-2 w-full  ">
            <i class="fa-brands fa-linkedin text-[25px]"></i>
            <a href="">{linkedin}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
