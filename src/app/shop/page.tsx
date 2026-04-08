import type { Metadata } from "next";
import ShopContent from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop Handmade Macrame Products Online",
  description:
    "Browse handcrafted macrame wall hangings, earrings, bags, torans, keychains & gifts. Made with organic cotton in Pune, India. Order on WhatsApp.",
};

export default function ShopPage() {
  return <ShopContent />;
}
