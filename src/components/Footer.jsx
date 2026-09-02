import { LiaGiftSolid, LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { hr } from "../app/globals.css";
import Link from "next/link";
import { IoChatbubbleOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] py-8  ">
      <div className="container flex justify-around items-center flex-wrap gap-4 ">
        <div className="col flex items-center justify-center flex-col group w-[15%]">
          <LiaShippingFastSolid className="text-[40px] transition-all duration-300 hover:scale-210" />
          <h3 className="text-[16px] font-[600] mt-3">Free Shipping </h3>
          <p className="text-[12px] font-[500] mt-3">
            For all Orders over $ 500{" "}
          </p>
        </div>

        <div className=" flex items-center justify-center flex-col group w-[15%]">
          <PiKeyReturnLight className="text-[40px] transition-all duration-300 hover:scale-210" />
          <h3 className="text-[16px] font-[600] mt-3">30 Days Returns </h3>
          <p className="text-[12px] font-[500] mt-3">
            For an Exchange Product{" "}
          </p>
        </div>

        <div className="col flex items-center justify-center flex-col group w-[15%]">
          <BsWallet2 className="text-[40px] transition-all duration-300 hover:scale-210" />
          <h3 className="text-[16px] font-[600] mt-3">Secured Payment </h3>
          <p className="text-[12px] font-[500] mt-3">Payment Card Accepted </p>
        </div>

        <div className="col flex items-center justify-center flex-col group w-[15%]">
          <LiaGiftSolid className="text-[40px] transition-all duration-300 hover:scale-210" />
          <h3 className="text-[16px] font-[600] mt-3">30 Days Returns </h3>
          <p className="text-[12px] font-[500] mt-3">
            For an Exchange Product{" "}
          </p>
        </div>

        <div className="col flex items-center justify-center flex-col group w-[15%]">
          <BiSupport className="text-[40px] transition-all duration-300 hover:scale-210" />
          <h3 className="text-[16px] font-[600] mt-3">Special Gifts </h3>
          <p className="text-[12px] font-[500] mt-3">Our First Product Order</p>
        </div>
      </div>
      <br />

      <hr />

      <div className=" flex justify-between py-4 ml-10">
        <div className="col1 flex w-[20%] flex-col gap-4  border-r-1 border-gray-300 pr-4">
          <h3 className="text-[20px] font-[600] text-gray-700">Contact Us </h3>
          <p className="text-[14px] font-[400] ">
            {" "}
            JasNext aapka jashpur market{" "}
          </p>
          <br />
          507 Jashpur, Chhattisgarh, India <br />
          Phone: +91 8770262231 <br />
          <Link
            href="{jashpur.app@gmail.com}"
            className="text-gray-700 font-[600] text-[15px] hover:text-primary"
          >
            manora.app@gmail.com
          </Link>
          <span className="text-[20px] font-bold text-primary">
            {" "}
            (+91) 8770262231
          </span>
          <div className="flex flex-center gap-4 ">
            <IoChatbubbleOutline className="text-[30px] text-primary" />
            <span className="text-[14px] font-[500] text-gray-700">
              Online Chat
              <br />
              Get Expert Help
            </span>
          </div>
        </div>

        <div className="col2 flex w-[25%] flex-col gap-4  border-r-1 border-gray-300 pr-4">
          <div className="box">
            <h3 className="text-[20px] font-[600] text-gray-700"> Products</h3>

            <ul className="flex flex-col gap-2 text-[14px] font-[400] text-gray-700">
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Fashion
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Medicine
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Furniture
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Mobile
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Electronics
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Construction
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Messages
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col2 flex w-[25%] flex-col gap-4  border-r-1 border-gray-300 pr-4">
          <div className="box">
            <h3 className="text-[20px] font-[600] text-gray-700">
              {" "}
              Our Company
            </h3>

            <ul className="flex flex-col gap-2 text-[14px] font-[400] text-gray-700">
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Delivery
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Legal Notice
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Terms and Conditions
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  About Us
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Secure Payment
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Construction
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-primary">
                  {" "}
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        
        
        
        <div className="col2 flex w-[25%] flex-col gap-4  border-r-1 border-gray-300 pr-4">
          <div className="box">
            <h3 className="text-[20px] font-[600] text-gray-700">
              {" "}
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="text-[14px] mt-3">
              Subscribe to Our Latest newsletter and Promotions to stay updated. We promise not to spam you.
              </p>

              <form className="flex flex-col gap-2 mt-3">
                <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300">Subscribe</button>
              </form>
          </div>
        </div>

            
          </div>
  
    
    </footer>
  );
};

export default Footer;
