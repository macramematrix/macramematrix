import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/products/toran-set.jpg"
        alt="Handcrafted macrame torans by Macrame Matrix"
        fill
        priority
        loading="eager"
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-white/80 mb-4">
          Handcrafted in Pune, India
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Knotted with Precision
        </h1>
        <p className="font-body text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Thoughtfully designed macrame pieces to add a little beauty to your everyday space.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="bg-sage hover:bg-sage-dark text-white font-body font-semibold px-8 py-3.5 rounded-full text-base transition-colors w-full sm:w-auto"
          >
            Shop Now
          </Link>
          <Link
            href="/custom-orders"
            className="border-2 border-white/40 hover:border-white text-white font-body font-medium px-8 py-3.5 rounded-full text-base transition-colors w-full sm:w-auto"
          >
            Custom Orders
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50">
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
