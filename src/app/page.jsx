import Image from "next/image";
import HeroSlider from '@/src/components/Home/HeroSlider'
import FeaturedCatagories  from '@/src/components/Home/FeaturedCatagoreis'
import TopProducts  from '@/src/components/Home/TopProducts'

export default function Home () {
 
  return (
 <>
 <HeroSlider/>
 <FeaturedCatagories/>
 <TopProducts/>
 </>
  );
}
