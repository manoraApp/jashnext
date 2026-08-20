import HomeSlider from '@/components/HomeSlider';
import CatSlider from '@/components/CatSlider';
import PopularProducts from '@/components/PopularProducts';

export default function Home() {
  return (
  <>
   <div className="sliderWrapper bg-[#FAFAFA] py-4">
    
    
    <HomeSlider/>
    <CatSlider/>
    <PopularProducts/>
  

    </div>


    </>
  );
}
