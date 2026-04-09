import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Process - How Handmade Macrame Is Made",
  description:
    "From design to delivery - see how every Macrame Matrix piece is handknotted with cotton cord in our Pune studio. No machines, no shortcuts.",
  alternates: {
    canonical: "https://macramematrix.com/our-process",
  },
};

const processSteps = [
  {
    title: "Design & Sketch",
    description:
      "Every piece begins with an idea. We sketch knot patterns, plan dimensions, and choose the color palette. Whether it's a custom order or a new collection piece, every design is intentional.",
    image: "/images/products/keychains.jpg",
  },
  {
    title: "Material Sourcing",
    description:
      "We use quality cotton cord as our primary material, sourced from trusted suppliers across India. No synthetic fibers where it matters - just real cotton that knots beautifully and lasts.",
    image: "/images/products/coasters.jpg",
  },
  {
    title: "Hand Knotting",
    description:
      "This is where the real work happens. Our hands tie every single knot - with precision, intention, and care. No machines. No shortcuts. Just the ancient art of macrame, practiced with a modern eye. Knotting is meditative. It takes focus, patience, and an understanding of how fibers move and materials flow. We spend hours on each piece, sometimes days, making sure every knot is secure, even, and exactly right.",
    image: "/images/products/toran-yellow.jpg",
  },
  {
    title: "Quality Check & Packaging",
    description:
      "Each finished piece is carefully inspected - we check every knot, every fringe, every detail. Then we pack it with minimal, plastic-free packaging - simple and considered.",
    image: "/images/products/bouquet.jpg",
  },
];

export default function OurProcessPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sage-dark text-sm uppercase tracking-[0.2em] mb-3">
            How We Make It
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our Process
          </h1>
          <p className="font-body text-charcoal-light text-lg max-w-2xl mx-auto">
            Your piece isn&apos;t just made - it&apos;s shaped by the hands and heart of Monika and her team, right here in our Pune studio. That&apos;s what &ldquo;Knotted with Precision&rdquo; means.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24">
          {processSteps.map((step, i) => (
            <div
              key={step.title}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className="font-heading text-5xl font-bold text-sage/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mt-2 mb-4">
                  {step.title}
                </h2>
                <p className="font-body text-charcoal-light text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sustainability callout */}
        <div className="mt-20 bg-cream-light rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6">
            Made Responsibly
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-sage/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c-4-4-8-7.5-8-12a8 8 0 0116 0c0 4.5-4 8-8 12z" />
                </svg>
              </div>
              <h3 className="font-body font-semibold text-charcoal text-sm mb-1">Cotton Cord</h3>
              <p className="font-body text-charcoal-light text-xs">Quality cotton, no synthetics</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-sage/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-body font-semibold text-charcoal text-sm mb-1">Handmade with Care</h3>
              <p className="font-body text-charcoal-light text-xs">Every knot tied by hand</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-sage/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-body font-semibold text-charcoal text-sm mb-1">Thoughtful Packaging</h3>
              <p className="font-body text-charcoal-light text-xs">Minimal, plastic-free</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
