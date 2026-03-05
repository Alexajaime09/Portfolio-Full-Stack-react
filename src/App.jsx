import HeroSection from "./components/sections/HeroSection";
import About from "./components/sections/About";
import TechnologiesSection from "./components/sections/TechnologiesSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex w-full min-h-full flex-col gap-9 bg-[rgb(12,12,12)] ">
      <section>
        <Navbar />
      </section>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="technologies">
        <TechnologiesSection />
      </section>
    </div>
  );
}

export default App;
