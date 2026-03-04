import HeroSection from "./components/sections/HeroSection";
import About from "./components/sections/About";

function App() {
  return (
    <div className="flex w-full min-h-full flex-col gap-y-9 bg-[rgb(12,12,12)] ">
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
