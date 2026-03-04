import TachCard from "../ui/TechCard";
import { technologies } from "../../data/technologies";
const TechnologiesSection = () => {
  return (
    <div className="p-8 w-full min-h-full grid grid-cols-[repeat(auto-fit,_260px)] justify-center items-center gap-9 lg:gap-16 bg-bg ">
      {technologies.map((tech) => (
        <TachCard key={tech.id} {...tech} />
      ))}
    </div>
  );
};

export default TechnologiesSection;
