"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "./ProductSlider";
import { SwiperSlide } from "swiper/react";

const PopularProducts = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="bg-white py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="coll w-[30%]">
            <h2 className="text-[20px] text-gray-800 font-[600]">
              Popular Products
            </h2>
            <p className="text-[16px] text-gray-800 font-[600]">
              Do not miss the current offers
            </p>
          </div>

          <div className="col2 w-[70%] flex item-center justify-end">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              

              <Tab label="Item One" />
        
              <Tab label="Item Two" />
              <Tab label="Item Three" />
              <Tab label="Item Four" />
              <Tab label="Item Five" />
              <Tab label="Item Six" />
              <Tab label="Item Seven" />
              <Tab label="Item Eight" />
              <Tab label="Item Nine" />
              <Tab label="Item Ten" />
              <Tab label="Item Eleven" />
             
            </Tabs>
          </div>
        </div>

        <ProductSlider />
      </div>
    </section>
  );
};

export default PopularProducts;
