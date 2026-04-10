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
            Hi, I&apos;m Monika - the hands behind Macrame Matrix.
          </p>
          <p className="font-body text-charcoal-light text-base leading-relaxed mb-6">
            I&apos;ve always loved creating. Years ago, I spent time exploring DIY crafts, quilling, and paper art. But as life moved forward - work, responsibilities, and routine - I slowly stopped making space for it.
          </p>
          <p className="font-body text-charcoal-light text-base leading-relaxed mb-6">
            After spending more than 15 years in the corporate world, I finally took a step back to pause and breathe. During that time, I found myself drawn to macrame - simply to try something new and rediscover the joy of creating.
          </p>
          <p className="font-body text-charcoal-light text-base leading-relaxed mb-6">
            What started as curiosity slowly became something much deeper.
          </p>
          <p className="font-body text-charcoal-light text-base leading-relaxed mb-6">
            As I began learning knots and shaping patterns, I found a sense of calm I hadn&apos;t felt in years. Macrame became my way of slowing down - of creating something real in a world that moves too fast.
          </p>
          <p className="font-body text-charcoal-light text-base leading-relaxed mb-6">
            For me, it&apos;s more than just art - it&apos;s something that helped me reconnect with myself.
          </p>
          <p className="font-body text-charcoal-light text-base leading-relaxed mb-6">
            Macrame Matrix grew from that space - a quiet beginning, shaped by curiosity, consistency, and a love for creating.
          </p>
          <p className="font-body text-charcoal-light text-base leading-relaxed mb-12">
            Today, each piece is created with care, patience, and a deep respect for the craft. Every knot is thoughtfully tied, every detail considered - not rushed, but shaped with intention. The aim is simple: to bring warmth, character, and something truly meaningful into your space.
          </p>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-cream-light rounded-xl p-6 md:p-8">
              <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
                Our Mission
              </h2>
              <p className="font-body text-charcoal-light text-sm leading-relaxed">
                To create thoughtfully designed macrame pieces that bring a sense of calm, warmth, and balance into everyday spaces. Each piece is made with close attention to detail, using quality materials and a mindful approach to the craft. Every knot, every pattern, and every finish is carefully considered - not just as decor, but as something that quietly transforms the space it becomes a part of.
              </p>
            </div>
            <div className="bg-cream-light rounded-xl p-6 md:p-8">
              <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
                Our Vision
              </h2>
              <p className="font-body text-charcoal-light text-sm leading-relaxed">
                To make macrame a meaningful part of how spaces feel. We envision living and working spaces where simple, organic art adds warmth, character, and a sense of grounding. As the journey grows, the aim is to build something that values craftsmanship, mindful creation, and the impact thoughtful design can have on everyday living.
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
