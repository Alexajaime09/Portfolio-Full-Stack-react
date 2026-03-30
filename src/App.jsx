import { useEffect } from "react";

import HeroSection from "./components/sections/HeroSection";
import About from "./components/sections/About";
import TechnologiesSection from "./components/sections/TechnologiesSection";
import Navbar from "./components/Navbar";
import Contact from "./components/sections/Contact";

function App() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -25% 0px",
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="flex w-full min-h-[100dvh] pb-20 flex-col gap-b-9 bg-[#0b0b0b] 
  bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.04),transparent_50%)] "
    >
      <section>
        <Navbar />
      </section>
      <main id="home">
        <HeroSection />
      </main>
      <div
        className="flex w-full min-h-full flex-col mt-20 lg:mt-30 gap-20 md:gap-30 lg:gap-40 
      bg-[#0f0f0f]/80 backdrop-blur-xl
     "
      >
        <section id="about" className=" timeline-item ">
          <About />
        </section>
        <section id="technologies" className=" timeline-item ">
          <TechnologiesSection />
        </section>
        <footer id="contact" className=" timeline-item ">
          <Contact />
        </footer>
      </div>
    </div>
  );
}

export default App;
