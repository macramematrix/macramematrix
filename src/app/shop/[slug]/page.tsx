import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} - Handmade Macrame`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Macrame Matrix`,
      description: product.description,
      images: product.images,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hi Macrame Matrix! I'm interested in the ${product.name} (₹${product.price.toLocaleString("en-IN")}). Is it available?`
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images[0],
    brand: { "@type": "Brand", name: "Macrame Matrix" },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: "Macrame Matrix" },
    },
    material: product.materials,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 font-body text-sm text-charcoal-light">
            <Link href="/" className="hover:text-charcoal">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-charcoal">Shop</Link>
            <span className="mx-2">/</span>
            <Link
              href={`/shop?category=${product.categorySlug}`}
              className="hover:text-charcoal"
            >
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Image */}
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-cream-light">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-sage text-white text-sm font-body font-medium px-4 py-1.5 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-2">
                <span className="font-body text-xs uppercase tracking-wider text-sage-dark">
                  {product.type === "ready-to-ship" ? "Ready to Ship" : "Made to Order"}
                </span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">
                {product.name}
              </h1>
              <p className="font-body text-3xl font-bold text-charcoal mb-6">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              <p className="font-body text-charcoal-light text-base leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Details */}
              <div className="space-y-3 mb-8 border-t border-cream pt-6">
                <div className="flex gap-3">
                  <span className="font-body text-sm font-medium text-charcoal min-w-[100px]">Materials</span>
                  <span className="font-body text-sm text-charcoal-light">{product.materials}</span>
                </div>
                {product.dimensions && (
                  <div className="flex gap-3">
                    <span className="font-body text-sm font-medium text-charcoal min-w-[100px]">Dimensions</span>
                    <span className="font-body text-sm text-charcoal-light">{product.dimensions}</span>
                  </div>
                )}
                {product.careInstructions && (
                  <div className="flex gap-3">
                    <span className="font-body text-sm font-medium text-charcoal min-w-[100px]">Care</span>
                    <span className="font-body text-sm text-charcoal-light">{product.careInstructions}</span>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/918262995455?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-body font-semibold py-4 rounded-full text-base transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.583l-.386-.236-2.662.893.893-2.662-.236-.386A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Order on WhatsApp
                </a>
                <a
                  href={`https://wa.me/918262995455?text=${encodeURIComponent(`Hi! I have a question about the ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full border-2 border-charcoal text-charcoal font-body font-medium py-3.5 rounded-full text-base hover:bg-charcoal hover:text-white transition-colors"
                >
                  Ask a Question
                </a>
              </div>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
