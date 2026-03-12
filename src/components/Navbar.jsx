import React from "react";
import { navbar } from "../data/index";
import logo from "../assets/logo-alexa.jpg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const oneRize = () => {
      if (window.innerHeight >= 768) setOpen(false);
    };

    window.addEventListener("resize", oneRize);
    return () => window.removeEventListener("resize", oneRize);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-around rounded-2xl px-4   py-3
      bg-[rgba(15,15,15,0.5)] backdrop-blur-md border-[rgba(255,255,255,0.18)] border-[1px] "
      >
        <a href="#home" className="flex items-center gap-2">
          <div className=" flex items-center justify-center w-[60px]  w-[55px] h-max-[61px] h-min-[56px] p-2 bg-[rgb(0,0,0)] rounded-[15px] ">
            <img
              className="w-full object-cover block "
              src={logo}
              alt="logo-alexa"
            />
          </div>
        </a>
        <ul className="hidden items-center gap-10 text-sm text-[#929292] md:flex">
          {navbar.map(({ id, href, label }) => (
            <li
              className="transition-all duration-300 hover:-translate-y-1 "
              key={id}
            >
              <a
                href={href}
                className=" hover:bg-white/10 hover:text-white 
                inline-block  rounded-[5px]  px-3 py-2 text-[20px] font-main
                hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]
                transition-all duration-300 ease-out"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/30 text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((swiitch) => !swiitch)}
        >
          <i
            className={`text-white text-[15px]  ${open === true ? "fa-solid fa-xmark" : "fa-solid fa-ellipsis"}`}
          ></i>
        </button>

        {open && (
          <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/15 bg-white/5 px-4 py-4 backdrop-blur-md md:hidden">
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              {navbar.map(({ id, href, label }) => (
                <li key={id}>
                  <a
                    href={href}
                    className="block rounded-[5px] px-3 py-2 transition hover:bg-white/10 hover:text-white font-main"
                    onClick={handleLinkClick}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
