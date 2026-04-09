import type { Metadata } from "next";
import ShopContent from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop Handmade Macrame Products Online",
  description:
    "Browse handcrafted macrame wall hangings, earrings, bags, torans, keychains & gifts. Handmade with cotton cord in Pune, India. Order on WhatsApp.",
  alternates: {
    canonical: "https://macramematrix.com/shop",
  },
};

export default function ShopPage() {
  return <ShopContent />;
}
