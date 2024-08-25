import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

export default function Carousal() {
  const carouselImage = [
    {
      src: "/carousal/01.jpg",
      alt: "Ravindra Gurukul",
    },
    {
      src: "/carousal/02.jpg",
      alt: "Ravindra Gurukul",
    },
    {
      src: "/carousal/03.jpg",
      alt: "Ravindra Gurukul",
    },
    {
      src: "/carousal/04.jpg",
      alt: "Ravindra Gurukul",
    },
    {
      src: "/carousal/05.jpg",
      alt: "Ravindra Gurukul",
    },
    {
      src: "/carousal/06.jpg",
      alt: "Ravindra Gurukul",
    },
    {
      src: "/carousal/07.jpg",
      alt: "Ravindra Gurukul",
    },
    {
      src: "/carousal/08.jpg",
      alt: "Ravindra Gurukul",
    },
  ];
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation, Keyboard]}
      className="w-full mb-10 sm:mb-20 p-2"
    >
      {carouselImage?.map((item, index) => {
        return (
          <SwiperSlide
            className="flex justify-center items-center overflow-visible"
            key={index}
          >
            <Image
              src={item?.src}
              alt={item?.alt}
              className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
