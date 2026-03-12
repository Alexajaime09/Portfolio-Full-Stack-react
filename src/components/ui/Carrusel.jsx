import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import TechCard from "../ui/TechCard";
import { technologies } from "../../data/index";

import React from "react";

const copy = [...technologies, ...technologies];

const Carrusel = () => {
  return (
    <Swiper
      className="text-[#EAE9E5]  "
      modules={[Navigation, Pagination, EffectCoverflow]}
      spaceBetween={10}
      slidesPerView={1}
      centeredSlides={true}
      breakpoints={{
        720: {
          slidesPerView: 3,
          spaceBetween: 300,
          centeredSlides: true,
        },
      }}
      navigation
      pagination={{
        type: "fraction",
        renderFraction: (currentClass, totalClass) => {
          return `<span class="${currentClass}"></span> — <span class="${totalClass}"></span>`;
        },
      }}
      onSlideChange={() => console.log("slide change")}
      allowSlideNext={true}
      allowSlidePrev={true}
      style={{
        "--swiper-navigation-color": "#EAE9E5",
      }}
      effect="coverflow"
      loop={true}
      coverflowEffect={{
        rotate: 30,
        depth: 100,
        modifier: 1,
        scale: 1,
        slideShadows: false,
        stretch: 0,
      }}
    >
      {copy.map((tech) => (
        <SwiperSlide key={tech.id}>
          <TechCard {...tech} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrusel;
