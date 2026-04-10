import Image from "next/image";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="py-16 md:py-24 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/products/sling-bag.jpg"
              alt="Handcrafted macrame by Monika A. Fernandes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-sage-dark text-sm uppercase tracking-[0.2em] mb-3">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-snug">
              From a quiet hobby to a craft with purpose
            </h2>
            <p className="font-body text-charcoal-light text-base leading-relaxed mb-4">
              Monika has always loved creating. After spending more than 15 years in the corporate world, she took a step back - and found herself drawn to macrame, simply to rediscover the joy of making something with her hands.
            </p>
            <p className="font-body text-charcoal-light text-base leading-relaxed mb-8">
              What started as curiosity slowly became something much deeper. Today, each piece is created with care, patience, and a deep respect for the craft - shaped with intention to bring warmth and character to your space.
            </p>
            <Link
              href="/about"
              className="inline-block border-2 border-charcoal text-charcoal font-body font-medium px-8 py-3 rounded-full hover:bg-charcoal hover:text-white transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
