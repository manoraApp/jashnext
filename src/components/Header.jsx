import React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagBold } from "react-icons/pi";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <div className="headerwrapper sticky top-0 z-50 bg-white">
        <header className="py-0 border-b-[1px] border-[rgba (0,0,0,0.1)]">
          <div className="container flex items-center justify-between px-0">
            <div className="logo flex justify-left items-center pl-0">
              <Link href={"/"}>
                <Image src={"/logo1.png"} alt="Logo" width={230} height={61} />
              </Link>
            </div>

            <Search />

            <div className="flex items-center gap-4">
              <Link
                href={"/login"}
                className="hover:text-primary  text-gray-800 font-[600]"
              >
                Login
              </Link>
              <span>|</span>
              <Link
                href={"/register"}
                className="hover:text-primary  text-gray-800 font-[600]"
              >
                Register
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href={"/wishlist"} className="relative flex group">
                <span
                  className="bg-[#ff0000] w-6 h-6 text-white rounded-full flex item-center justify-center
            absolute -top-[10px] left-[17px] z-50"
                >
                  3
                </span>
                <FaRegHeart
                  size={25}
                  className="text-gray-700  group-hover:text-primary"
                />
              </Link>

              <Link href={"/cart"} className="relative flex group">
                <span
                  className="bg-[#ff1100] w-6 h-6 text-white rounded-full flex item-center justify-center
            absolute -top-[10px] left-[17px] z-50"
                >
                  3
                </span>
                <PiHandbagBold
                  size={30}
                  className="text-gray-700  group-hover:text-primary"
                />
              </Link>
            </div>
          </div>
        </header>

        <Nav />
      </div>
    </>
  );
};

export default Header;
