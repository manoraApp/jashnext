import React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";





const Header = () => {
  return (
    <header className="py-3">
    <div className="container flex items-center justify-between px-0">
      <div className="logo flex justify-left items-center pl-0">
        <Link href={"/"}>
        <Image src={"/logo.png"} alt="Logo" width={230} height={61} />
        </Link>
      </div>
      <Search/>

      <div className="flex items-center gap-4">
        <Link href={"/login"} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
          Login
        </Link>
        <Link href={"/signup"} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
          Sign Up
        </Link>
      </div>
    </div>


    </header>
  );
};

export default Header;