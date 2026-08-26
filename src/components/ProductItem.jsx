
import React from "react";
import Link from "next/link";
import Rating from '@mui/material/Rating'





const ProductItem = () => {
  return (
    <div>
        <Link href={"/"} className='img overflow-hidden group flex p-3'>
           <img src={'/R1.png'} alt='product image' className='transition group-hover:scale-105' />
      </Link>
      <div className='info p-3'>

        <Link href={"/"} className="text-[15px] text-grey-800 font-[500]">100 percent apple juice-64 f1 oz Bottle</Link>
        <Rating name="read-only" value={4} readOnly size='small'/>

        <div className='flex items-center justify-between'>
          <span className='text-[#CB00000] text-[18px] font-[600]'>$ 25.99</span>
          <span className='text-[#A4A4A4A] text-[18px] font-[600]'>$ 25.99</span>
</div>
        <button className="btn-border-g flex items-center justify-between"> Add to cart</button>

      </div>
    </div>  
  )

};



export default ProductItem;