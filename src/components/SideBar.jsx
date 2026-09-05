"use client";

import React, { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Button } from "@mui/material"; // Removed duplicate Collapse import
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Collapse } from 'react-collapse';
import {TfiAngleUp} from "react-icons/tfi";
import RangeSlider from 'react-range-slider-input';
const SideBar = () => {
  // Corrected useState destructuring & matching state name
  const [isOpenCatFilter, setIsOpenCatFilter] = useState(true);
  const [Price, setPrice] = useState([0, 3000]);

  return (
    <aside className="sticky top-[150px] flex flex-col gap-5">
      <div className="box">
        <div className="flex item-center justify-between">
          <h3 className="text-[16px] font-[600] text-gray-700">
            Shop by Category
          </h3>
          {/* Fixed onClick prop */}
          <Button 
            className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full text-gray-700 hover:!bg-gray-200"
            onClick={() => setIsOpenCatFilter(!isOpenCatFilter)}
          >  
            {isOpenCatFilter ? (
              <TfiAngleUp size={20} className="text-gray-800" />
            ) : (
              <LiaAngleDownSolid size={20} className="text-gray-800" />
            )}
          </Button>
        </div>
        
        <Collapse isOpened={isOpenCatFilter}>
          <div className="scroll overflow-scroll max-h-[250px]">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="fruits & vegitables" />
              <FormControlLabel control={<Checkbox />} label="Meat & Seafood" />
              <FormControlLabel control={<Checkbox />} label="BreakFast & Diary" />
              <FormControlLabel control={<Checkbox />} label="Breads & Bakery" />
              <FormControlLabel control={<Checkbox />} label="Bevarages" />
              <FormControlLabel control={<Checkbox />} label="Frozen Foods" />
              <FormControlLabel control={<Checkbox />} label="Biscuits & Snacks" />
              <FormControlLabel control={<Checkbox />} label="Grocery & Staples" />
            </FormGroup>
          </div>
        </Collapse> 
      </div>
      <div className="box">
        <h3 className="text-[16px] font-[600] text-gray-700">Price</h3>
        <RangeSlider
          
          value={Price}
          onInput={setPrice}
         min={100}
         max={6000}
         step={5}
        />
      </div>
    </aside>
  );
};

export default SideBar;