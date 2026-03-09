import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TechCard from "../ui/TechCard";
import { technologies } from "../../data/index";

import React from "react";

const Carrusel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: true,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
        720: {
          slidesPerView: 3,
          spaceBetween: 300,
        },
      }}
      navigation
      onSlideChange={() => console.log("silde change")}
      allowSlideNext={true}
      allowSlidePrev={true}
    >
      {technologies.map((tech) => (
        <SwiperSlide key={tech.id}>
          <TechCard {...tech} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrusel;
