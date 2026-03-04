import { heroData } from "../../data/index";
import movil from "../../assets/movil.png";

const HeroSection = () => {
  const { headline, subheadline, tagline, ctas } = heroData;

  return (
    <div className="w-full min-h-screen md:min-h-full bg-bg flex flex-col relative ">
      <div className="bg-[linear-gradient(180deg,#1e1e1f_0%,#121212_60%,#0b0b0b_100%)] w-full h-full grid  grid-cols-1 p-8  md:grid-cols-[1.35fr_0.65fr] gap-y-[80px]   ">
        <div className="  flex flex-col justify-center items-start  order-2 md:order-1 ">
          <h1 className="text-[60px] md:text-[70px] lg:text-[120px] text-white font-secondary font-bold ">
            {headline}
          </h1>
          <h2 className="text-[50px] md:text-[68] lg-[90px] font-secondary font-light text-[#cecece] ">
            {subheadline}
          </h2>
          <p className=" text-[21px] md:text-[26px] lg:text-[30px] font-secondary font-thin text-[#929292]  ">
            {tagline}
          </p>
          <div className="flex gap-x-5">
            {ctas.map((button) => (
              <button
                key={button.label}
                href={button.href}
                className=" px-5 py-3 bg-[#213162] text-white cursor-pointer rounded-md "
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center order-1 md:order-2 ">
          <img className=" w-[90%] h-auto md:w-[90%] " src={movil} alt="" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
