import React from "react";
import Image from "next/image";
import Link from "next/link";




const Header = () => {
  return (
    <header>
    <div className="container flex items-center justify-between" >
      <div className="logo" justify-content="left" align-items="left">
        <Link href={"/"}>
        <Image src={"/logo.png"} alt="Logo" width={230} height={61} padding={0} />
     </Link>
      </div>
      
    </div>

    </header>
  );
};

export default Header;