"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";




const CatSlider = () => {
    return (
        <div className="py-4">
            <div className="container">
                <Swiper

                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={10}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="bg-white p-3 w-full rounded-md shadow-md item-center justify-center">
                            <img src={'/cat1.png'} alt="category" />

                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>

        </div >
    );
};

export default CatSlider;