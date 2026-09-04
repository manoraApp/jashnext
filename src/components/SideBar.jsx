"use client";


import React from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import {Button} from "@mui/material";
import  FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


const SideBar = () => {
  return (
    <aside className="sticky top-[150px] w-72 shrink-0 p-4">
      <div className="box">
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-[16px] font-[600] text-gray-700">
            Shop by Category
          </h3>
          <Button className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full hover-!bg-gray-200">
            <LiaAngleDownSolid size={20} className="text-gray-800" />
          </Button>
        </div>
        <div className="scroll overflow-scroll max-h-[300] ">
<FormGroup>
  <FormControlLabel control={<Checkbox  />} label="fruits & vegitables"/>
  <FormControlLabel control={<Checkbox  />} label="Meat & Seafood"/>
  <FormControlLabel control={<Checkbox  />} label="BreakFast & Diary"/>
  <FormControlLabel control={<Checkbox  />} label="Breads & Bakery"/>
  <FormControlLabel control={<Checkbox  />} label="Bevarages"/>
  <FormControlLabel control={<Checkbox  />} label="Frozen Foods"/>
  <FormControlLabel control={<Checkbox  />} label="Biscuits & Snacks"/>
  <FormControlLabel control={<Checkbox  />} label="Grocery & Staples"/>

  
</FormGroup>





      </div>
      </div>
    </aside>
  );
};

export default SideBar;
