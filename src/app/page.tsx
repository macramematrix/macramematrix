import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Macrame Matrix - Buy Handmade Macrame Products Online | Pune, India",
  description:
    "Shop handcrafted macrame wall hangings, torans, earrings, bags, diya holders & gifts. Handmade with cotton cord in Pune, India. Ships globally. Order on WhatsApp.",
  alternates: {
    canonical: "https://macramematrix.com",
  },
};

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
