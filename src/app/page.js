import HomeSlider from "@/components/HomeSlider";
import CatSlider from "@/components/CatSlider";
import PopularProducts from "@/components/PopularProducts";
import Banners from "@/components/Banners";
import ProductSlider from "@/components/ProductSlider";
import Footer from "@/components/Footer";


import ProductRow from "@/components/ProductRow";

export default function Home() {
  return (
    <>
      <div className="sliderWrapper bg-[#FAFAFA] py-4">
        <HomeSlider />
        <CatSlider />
        <PopularProducts />
        <Banners />

        <ProductRow title={"Latest products"}/>
        <ProductRow title={"Feature products"}/>
        <ProductRow title={"BreakFast & Dairy"}/>



        <Footer />
       

       
       



         

      </div>
    </>
  );
}
