import React from "react";

import Link from "next/link";

const ProductItem = () => {
  return (
    <div className="productItem shadow-md w-full bg-white rounded-md ">
      <Link href={"/"} className='img overflow-hidden group flex p-3'>
        <img src={'/R1.png'} alt='product image' className='transition group-hover:scale-105' />
      </Link>
      <div className='info p-3'>

        <Link href={"/"} className="text-[15px] text-grey-800 font-[500]">100 percent apple juice-64 f1 oz Bottle</Link>

      </div>
    </div>
  )

};



export default ProductItem;