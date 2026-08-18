"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider">
      <div className="container">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img src="/slide1.png" alt="slide1" width={1344} height={500} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <img src="/slide2.png" alt="slide2" width={1344} height={500} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <img src="/slide3.png" alt="slide3" width={1344} height={500} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <img src="/slide4.png" alt="slide4" width={1344} height={500} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <img src="/slide5.png" alt="slide5" width={1344} height={500} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
