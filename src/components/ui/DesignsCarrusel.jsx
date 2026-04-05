import React from "react";
import images from "../../data/designs";
import DesignCard from "../ui/DesignCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectCoverflow,
  Autoplay,
  EffectCards,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";

const DesignsCarrusel = () => {
  return (
    <Swiper
      className="text-[#EAE9E5] w-full h-full"
      modules={[Pagination, EffectCards, Autoplay]}
      effect="cards"
      slidesPerView={1}
      cardsEffect={{
        perSlideOffset: 4,
        perSlideRotate: 10,
        rotate: true,
        slideShadows: false,
      }}
      pagination={{
        type: "fraction",
        renderFraction: (currentClass, totalClass) => {
          return `<span class='${currentClass}'></span> - <span class="${totalClass}"></span>`;
        },
      }}
      loop={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <DesignCard image={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DesignsCarrusel;
