import HeroSection from "./components/sections/HeroSection";
import About from "./components/sections/About";
import TechnologiesSection from "./components/sections/TechnologiesSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex w-full min-h-full flex-col gap-y-9 bg-[rgb(12,12,12)] ">
      <HeroSection />
      <Navbar />
      <About />
      <TechnologiesSection />
    </div>
  );
}

export default App;
