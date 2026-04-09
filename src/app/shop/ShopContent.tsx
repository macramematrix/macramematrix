"use client";

import { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ShopGrid() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.categorySlug === activeCategory);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        <button
          onClick={() => setActiveCategory("all")}
          className={`font-body text-sm px-5 py-2 rounded-full transition-colors ${
            activeCategory === "all"
              ? "bg-charcoal text-white"
              : "bg-cream text-charcoal hover:bg-cream-light"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`font-body text-sm px-5 py-2 rounded-full transition-colors ${
              activeCategory === cat.slug
                ? "bg-charcoal text-white"
                : "bg-cream text-charcoal hover:bg-cream-light"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-charcoal-light font-body py-20">
          No products found in this category.
        </p>
      )}
    </>
  );
}

export default function ShopContent() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-3">
            Shop
          </h1>
          <p className="font-body text-charcoal-light text-base max-w-lg mx-auto">
            Every piece is handknotted in our Pune studio - no machines, no shortcuts.
          </p>
        </div>
        <Suspense fallback={<div className="text-center py-20 text-charcoal-light font-body">Loading products...</div>}>
          <ShopGrid />
        </Suspense>
      </div>
    </div>
  );
}
