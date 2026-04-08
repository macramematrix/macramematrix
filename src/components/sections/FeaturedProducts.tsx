import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-16 md:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">
            Our Favorites
          </h2>
          <p className="font-body text-charcoal-light text-base max-w-md mx-auto">
            Handpicked pieces that our customers love most
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-block border-2 border-charcoal text-charcoal font-body font-medium px-8 py-3 rounded-full hover:bg-charcoal hover:text-white transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
