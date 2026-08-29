'use client';
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";





const Banners = () => {
  return (
    
        <section className='py-5 bg-amber-100'>
            <div className='container'>
                <swiper
      slidesPerView={6}
        spaceBetween={5}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        <SwiperSlide className="py-3 px-2">
      <div className="item group rounded-md overflow-hidden">
        <img src={"/banner1.png"} alt="banner" className="w-full transition group-hover:scale-105"/>
      </div>
        
        
        
        </SwiperSlide>
        </swiper>
             
      
   </div>
    </section>
  
          
  );
};

export default Banners;