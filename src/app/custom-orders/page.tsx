import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Custom Macrame Orders — Bespoke Handmade Art",
  description:
    "Commission custom macrame pieces — wall hangings, gifts, corporate orders. Handcrafted to your vision by Monika & team in Pune, India.",
};

const steps = [
  {
    number: "1",
    title: "Share Your Vision",
    description:
      "Send us a message on WhatsApp with your ideas, inspiration images, colors, and the space you're decorating. The more detail, the better!",
  },
  {
    number: "2",
    title: "We Discuss & Plan",
    description:
      "Our team will be in touch within 24 hours. We'll discuss design, dimensions, materials, timeline, and pricing to make sure we understand your vision perfectly.",
  },
  {
    number: "3",
    title: "We Create",
    description:
      "Once you approve the plan, we begin handknotting your piece. We'll share progress photos so you can see your creation coming to life.",
  },
  {
    number: "4",
    title: "Delivered to You",
    description:
      "Your bespoke piece is carefully packed in eco-friendly packaging and shipped to your door. Ready to transform your space.",
  },
];

export default function CustomOrdersPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sage-dark text-sm uppercase tracking-[0.2em] mb-3">
            Bespoke Macrame
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Custom Orders
          </h1>
          <p className="font-body text-charcoal-light text-lg max-w-2xl mx-auto">
            Have something unique in mind? We create bespoke macrame pieces tailored to your vision, space, and style.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-16">
          <Image
            src="/images/products/toran-red.png"
            alt="Custom macrame orders by Macrame Matrix"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center px-4">
              Your Vision, Our Hands
            </h2>
          </div>
        </div>

        {/* How it works */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal text-center mb-12">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-sage text-white flex items-center justify-center">
                <span className="font-heading text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="font-body text-charcoal-light text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* What we can make */}
        <div className="bg-cream-light rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-6 text-center">
            What We Can Create for You
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Custom wall hangings in any size or color",
              "Personalized name or text wall art",
              "Torans and door hangings for weddings",
              "Festive decor (Diwali, Rakhi, Christmas)",
              "Wedding return gifts (bulk orders)",
              "Corporate gifting sets",
              "Custom bags and accessories",
              "Bespoke home decor pieces",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-sage shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-body text-charcoal text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4">
            Ready to Start?
          </h2>
          <p className="font-body text-charcoal-light text-base mb-8 max-w-md mx-auto">
            Send us a message on WhatsApp with your ideas. Our team will be in touch within 24 hours.
          </p>
          <a
            href="https://wa.me/918262995455?text=Hi%20Macrame%20Matrix!%20I%27d%20like%20to%20discuss%20a%20custom%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-body font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.583l-.386-.236-2.662.893.893-2.662-.236-.386A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Start Your Custom Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
