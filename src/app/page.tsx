import Image from "next/image";
import HeroSlider from '@/src/components/Home/HeroSlider'
import FeaturedCatagories  from '@/src/components/Home/FeaturedCatagoreis'
import TopProducts  from '@/src/components/Home/TopProducts'
import Products  from '@/src/components/Home/Products'

export default function Home() {
  return (
 <>
 <HeroSlider/>
 <FeaturedCatagories/>
 <TopProducts/>
 <Products/>
 </>
  );
}
