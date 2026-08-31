import React from "react";
import ProductSlider from "./ProductSlider";
import Link from "next/link";
import { MdOutline10K, MdOutlineArrowRightAlt } from "react-icons/md";



const ProductRow = (props) => {
  return (
    <section className="bg-blue-50 py-5">
      <div className="container">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[20px] text-gray-800 font-[600]">

           {props?.title}
          </h2>
          <Link
            href={"/"}
            className=" flex items-center gap-1 text-gray-700 font-[600]"
          >
            View All <MdOutlineArrowRightAlt size={25} />
          </Link>
        </div>
        <ProductSlider />
      </div>
    </section>
  );
};

export default ProductRow;
