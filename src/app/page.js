import HomeSlider from '@/components/HomeSlider';
import CatSlider from '@/components/CatSlider';
import PopularProducts from '@/components/PopularProducts';
import Banners from '@/components/Banners';

export default function Home() {
  return (
  <>
   <div className="sliderWrapper bg-[#FAFAFA] py-4">
    
    
    <HomeSlider/>
    <CatSlider/>
    <PopularProducts/>
    <Banners/>
  

    </div>


    </>
  );
}
