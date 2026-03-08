import { heroData } from "../../data/index";
import movil from "../../assets/movil.png";
import Button from "../ui/Button";

const HeroSection = () => {
  const { headline, subheadline, tagline, ctas } = heroData;

  return (
    <div className="w-full min-h-screen md:min-h-full bg-bg flex flex-col relative ">
      <div className="bg-[linear-gradient(180deg,#1e1e1f_0%,#121212_60%,#0b0b0b_100%)] w-full h-full grid  grid-cols-1 p-8  md:grid-cols-[1.35fr_0.65fr] gap-y-[80px]">
        <div className="  flex flex-col justify-center items-start  order-2 md:order-1 gap-6 md:gap-2 lg:gap-6 ">
          <h1 className=" text-[70px] lg:text-[120px] text-white font-secondary font-bold  ">
            {headline}
          </h1>
          <h2 className="text-[42px] md:text-[68] lg-[90px] font-secondary font-light text-[#cecece] ">
            {subheadline}
          </h2>
          <p className=" text-[21px] md:text-[26px] lg:text-[30px] font-secondary font-thin text-[#929292]  ">
            {tagline}
          </p>
          <div className="flex gap-x-5 pt-5">
            {ctas.map((element) => (
              <Button variant={element.variant}>{element.label}</Button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center order-1 md:order-2 ">
          <img
            className=" w-[90%] h-auto 
             [filter:drop-shadow(0_25px_60px_rgba(0,0,0,0.8))_
             drop-shadow(0_0px_40px_rgba(255,255,255,0.18))] 
             animate-levitate "
            src={movil}
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
