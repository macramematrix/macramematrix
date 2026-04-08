import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import CollectionGrid from "@/components/sections/CollectionGrid";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ProcessSection from "@/components/sections/ProcessSection";
import Sustainability from "@/components/sections/Sustainability";
import Testimonials from "@/components/sections/Testimonials";
import InstagramSection from "@/components/sections/InstagramSection";
import CustomCTA from "@/components/sections/CustomCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <CollectionGrid />
      <AboutTeaser />
      <ProcessSection />
      <Sustainability />
      <Testimonials />
      <InstagramSection />
      <CustomCTA />
    </>
  );
}
