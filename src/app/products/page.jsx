import React from "react";
import SideBar from "../../components/SideBar";


const ProductPage = () => {
  return (
    <section className="py-2 bg-white ">
      <div className="container flex gap-2">
       <div className="sidebarWrapper [w-18%]">
         <SideBar />
       </div>


<div className="rightContent w-[82%] bg-gray-300 h-[1000px]">

</div>

      </div>
    </section>
  );
};

export default ProductPage;