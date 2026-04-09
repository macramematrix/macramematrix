import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Macrame Matrix - Our Story",
  description:
    "Meet Monika A. Fernandes, the macrame artist behind Macrame Matrix. From 15 years in corporate to handcrafting macrame in Pune, India.",
  alternates: {
    canonical: "https://macramematrix.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-sage-dark text-sm uppercase tracking-[0.2em] mb-3">
            Our Story
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
            The Heart Behind the Knots
          </h1>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/products/toran-set.jpg"
            alt="Macrame Matrix studio - handcrafted macrame from Pune"
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>

        {/* Story */}
        <div className="prose-custom max-w-2xl mx-auto">
          <p className="font-body text-charcoal text-lg leading-relaxed mb-6">
            Hi, I&apos;m Monika - the hands and heart behind Macrame Matrix.
          </p>
          <p className="font-body text-charcoal-light text-base leading-relaxed mb-6">
            After more than 15 years in the corporate world, I stepped away to take a breath. During that pause, I picked up macrame - just to try something new, something with my hands.
          </p>
          <p className="font-body text-charcoal-light text-base leading-relaxed mb-6">
            What started as curiosity quickly became something deeper. As I learned to tie knots and shape patterns, I found a kind of peace I hadn&apos;t felt in years. Macrame became my way of slowing down, of creating something real in a world that moves too fast.
          </p>
          <p className="font-body text-charcoal-light text-base leading-relaxed mb-6">
            For me, macrame is more than just art - it feels like therapy. It has helped me heal and reconnect with myself in many ways.
          </p>
          <p className="font-body text-charcoal-light text-base leading-relaxed mb-12">
            Today, my team and I work from our studio in Pune, turning cotton cord into pieces that bring warmth and character to everyday spaces. Every knot is tied by hand. Every piece is made with intention. And every order is a small reminder that beautiful things take time.
          </p>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-cream-light rounded-xl p-6 md:p-8">
              <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
                Our Mission
              </h2>
              <p className="font-body text-charcoal-light text-sm leading-relaxed">
                We make high-quality macrame by hand - wall hangings, home accessories, wearables, and gifts - all crafted in our Pune studio using cotton cord sourced from across India. Our aim is simple: bring the beauty of handmade craft into more homes at honest prices. Every piece we create blends traditional knotwork with a modern eye, designed to add warmth and meaning to the spaces you live in.
              </p>
            </div>
            <div className="bg-cream-light rounded-xl p-6 md:p-8">
              <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
                Our Vision
              </h2>
              <p className="font-body text-charcoal-light text-sm leading-relaxed">
                We want to take macrame from niche to everyday - making this beautiful, ancient craft accessible and affordable for homes everywhere. As we grow, we&apos;re committed to creating meaningful work opportunities for the people who craft alongside us. Our goal is to build a brand that&apos;s known not just for what it makes, but for the lives it touches along the way.
              </p>
            </div>
          </div>

          <p className="font-body text-charcoal text-lg leading-relaxed text-center italic">
            Macrame Matrix is more than a business - it&apos;s what happens when you follow a quiet calling and let it grow, one knot at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
