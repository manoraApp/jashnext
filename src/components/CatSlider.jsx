"use client";
import Link from "next/link";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



// import required modules
import { Navigation } from "swiper/modules";

const CatSlider = () => {
  return (
    <div className="py-4">
      <div className="container">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={5}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full h-[110px] flex rounded-md shadow-md item-center  justify-center transition group-hover:bg-gray-200">
                <img
                  src={"/cat1.png"}
                  alt="category"
                  className="transition-group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700">
                category1
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full h-[110px] flex rounded-md shadow-md item-center  justify-center transition group-hover:bg-gray-200">
                <img
                  src={"/cat2.png"}
                  alt="category"
                  className="transition-group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700">
                category2
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full h-[110px] flex rounded-md shadow-md item-center  justify-center transition group-hover:bg-gray-200">
                <img
                  src={"/cat3.png"}
                  alt="category"
                  className="transition-group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700">
                category3
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full h-[110px] flex rounded-md shadow-md item-center  justify-center transition group-hover:bg-gray-200">
                <img
                  src={"/cat4.png"}
                  alt="category"
                  className="transition-group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700">
                category4
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full h-[110px] flex rounded-md shadow-md item-center  justify-center transition group-hover:bg-gray-200">
                <img
                  src={"/cat5.png"}
                  alt="category"
                  className="transition-group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700">
                category5
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full h-[110px] flex rounded-md shadow-md item-center  justify-center transition group-hover:bg-gray-200">
                <img
                  src={"/cat6.png"}
                  alt="category"
                  className="transition-group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700">
                category6
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full h-[110px] flex rounded-md shadow-md item-center  justify-center transition group-hover:bg-gray-200">
                <img
                  src={"/cat7.png"}
                  alt="category"
                  className="transition-group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700">
                category7
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <div className="bg-white p-3 w-full h-[110px] flex rounded-md shadow-md item-center  justify-center transition group-hover:bg-gray-200">
                <img
                  src={"/cat8.png"}
                  alt="category"
                  className="transition-group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700">
                category8
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full h-[110px] flex rounded-md shadow-md item-center  justify-center transition group-hover:bg-gray-200">
                <img
                  src={"/cat9.png"}
                  alt="category"
                  className="transition-group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700">
                category9
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <div className="bg-white p-3 w-full h-[110px] flex rounded-md shadow-md item-center  justify-center transition group-hover:bg-gray-200">
                <img
                  src={"/cat1.png"}
                  alt="category"
                  className="transition-group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700">
                category10
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <div className="bg-white p-3 w-full h-[110px] flex rounded-md shadow-md item-center  justify-center transition group-hover:bg-gray-200">
                <img
                  src={"/cat1.png"}
                  alt="category"
                  className="transition-group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700">
                category10
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full h-[110px] flex rounded-md shadow-md item-center  justify-center transition group-hover:bg-gray-600">
                <img
                  src={"/cat1.png"}
                  alt="category"
                  className="transition-group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700">
                category10
              </h4>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CatSlider;
