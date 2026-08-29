'use client';

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const ProductSlider = () => {
  return (
    <div className="productSlider y-8">
      <Swiper
      slidesPerView={6}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        <SwiperSlide className="py-3 px-2">
          <ProductItem />
        </SwiperSlide>


        <SwiperSlide className="py-3 px-2">
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide className="py-3 px-2">
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide className="py-3 px-2">
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide className="py-3 px-2">
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide className="py-3 px-2">
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide className="py-3 px-2">
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide className="py-3 px-2">
          <ProductItem />
        </SwiperSlide>
      </Swiper>
      <div />
    </div>
  );
};

export default ProductSlider;
