 import Image from "next/image";
import HeroSlider from "./Homepage/HeroSlider";
import CategorySection from "./Homepage/CategorySection";
import TrendingSection from "./Homepage/TrendingSection";
import PromoSection from "./Homepage/PromoSection";
import BESTSELLER from "./Homepage/BESTSELLER";
import BlogSection from "./Homepage/BlogSection";
import InstagramGallery from "./Homepage/InstagramGallery";
import BenefitsSection from "./Homepage/BenefitsSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CategorySection />
      <TrendingSection />
      <PromoSection />
      <BESTSELLER />
      <BlogSection />
      <InstagramGallery />
      <BenefitsSection />
    </>
  );
}
