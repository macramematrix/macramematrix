import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-cream-light">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-body font-bold px-3.5 py-1.5 rounded-full shadow-lg ring-2 ring-white/30">
            {product.badge}
          </span>
        )}
        {product.type === "made-to-order" && !product.badge && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-body font-bold px-3.5 py-1.5 rounded-full shadow-lg ring-2 ring-white/30">
            Made to Order
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-body text-sm font-medium text-charcoal group-hover:text-sage-dark transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="font-body text-base font-bold text-charcoal">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </Link>
  );
}
