"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const Banners = () => {
  return (
    <section className="py-5 bg-gray-500 pt-0">
      {/* max-w-4xl se overall banner section ka size chhota ho jayega */}
      <div className="container mx-auto max-w-full pt-4 ">
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide >
            <Link href="/" className="item group rounded-md overflow-hidden w-full">
              <img
                src={"/banner1.png"}
                alt="banner"
                className="w-full h-36 object-cover transition group-hover:scale-105 rounded-md"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide >
            <Link href="/" className="item group rounded-md overflow-hidden w-full">
              <img
                src={"/banner2.png"}
                alt="banner"
                className="w-full h-36 object-cover transition group-hover:scale-105 rounded-md"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide >
            <Link href="/" className="item group rounded-md overflow-hidden w-full">
              <img
                src={"/banner3.png"}
                alt="banner"
                className="w-full h-36 object-cover transition group-hover:scale-105 rounded-md"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banners;