import { LiaGiftSolid, LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import {hr} from '../app/globals.css'
import Link from "next/link";


const Footer = () => {
  return (
    <footer className='bg-[#FAFAFA] py-8 ' >


     
      

<div className="container flex justify-around items-center flex-wrap gap-4">



      <div className='col flex items-center justify-center flex-col group w-[15%]'>
        <LiaShippingFastSolid className='text-[40px] transition-all duration-300 hover:scale-210' />
        <h3 className='text-[16px] font-[600] mt-3'>Free Shipping </h3>
        <p className='text-[12px] font-[500] mt-3' >For all Orders over $ 500 </p>
      </div>


     
        <div className=' flex items-center justify-center flex-col group w-[15%]'>
          <PiKeyReturnLight className='text-[40px] transition-all duration-300 hover:scale-210' />
          <h3 className='text-[16px] font-[600] mt-3'>30 Days Returns </h3>
          <p className='text-[12px] font-[500] mt-3' >For an Exchange Product </p>
        </div>







      <div className='col flex items-center justify-center flex-col group w-[15%]'>
        <BsWallet2 className='text-[40px] transition-all duration-300 hover:scale-210' />
        <h3 className='text-[16px] font-[600] mt-3'>Secured Payment </h3>
        <p className='text-[12px] font-[500] mt-3' >Payment Card Accepted </p>
      </div>



      <div className='col flex items-center justify-center flex-col group w-[15%]'>
        <LiaGiftSolid className='text-[40px] transition-all duration-300 hover:scale-210' />
        <h3 className='text-[16px] font-[600] mt-3'>30 Days Returns </h3>
        <p className='text-[12px] font-[500] mt-3' >For an Exchange Product </p>
      </div>

     


      <div className='col flex items-center justify-center flex-col group w-[15%]'>
        <BiSupport className='text-[40px] transition-all duration-300 hover:scale-210' />
        <h3 className='text-[16px] font-[600] mt-3'>Special Gifts </h3>
        <p className='text-[12px] font-[500] mt-3' >Our First Product Order</p>
      </div>




      </div>
    

   <hr/>


   <div className=" flex justify-between py-4">
      <div className='col1 flex flex-col gap-4 '>
        <h3 className='text-[20px] font-[600] text-gray-700'>Contact Us </h3>
        <p className='text-[14px] font-[400] ' > JasNext aapka jashpur market </p>

        <br/>


        507 Jashpur, Chhattisgarh, India <br/>
        Phone: +91 8770262231 <br/>
      
        <Link href='{jashpur.app@gmail.com}'className='text-gray-700 font-[600] text-[15px] hover:text-primary'>
        manora.app@gmail.com</Link>

        <span className="text-[20px] font-bold text-primary"> (+91) 8770262231</span>
      </div> 
    </div>

    </footer>
 




  );
};

export default Footer;