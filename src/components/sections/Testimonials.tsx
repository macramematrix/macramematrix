const testimonials = [
  {
    quote:
      "Absolutely loved the products! The tea light holders look beautiful and elegant, and the red toran adds a perfect festive touch to our entrance. Great quality and stunning design - highly recommended!",
    name: "Sneha R.",
    location: "Australia",
    product: "Tea Light Holders & Toran",
  },
  {
    quote:
      "My mother opened the package and she loved them! They blend so well with our home and really liven up the space. The ordering process was smooth and the quality is really good. I'd recommend Macrame Matrix to all my friends.",
    name: "Pooja M.",
    location: "Tirupur",
    product: "Macrame Toran",
  },
  {
    quote:
      "The handmade diya holder is truly meaningful and inspiring. The beautiful red base adds so much charm and warmth to the whole setup. Such a thoughtful and creative piece - I'll definitely be ordering again!",
    name: "Ritika S.",
    location: "Pune",
    product: "Diya Holder",
  },
  {
    quote:
      "This is exactly what I was looking for! The Rakhis turned out lovely - perfect for my twin boys. Beautiful work, keep going and keep creating. Will definitely order again next year!",
    name: "Anjali D.",
    location: "Pune",
    product: "Macrame Rakhi",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-sage-dark text-sm uppercase tracking-[0.2em] mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
            Kind Words
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-beige-warm">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-charcoal text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-body font-semibold text-charcoal text-sm">
                  {t.name}
                </p>
                <p className="font-body text-charcoal-light text-xs">
                  {t.location} &middot; {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
