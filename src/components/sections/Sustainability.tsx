const practices = [
  {
    title: "Cotton Cord",
    description:
      "Our primary material is quality cotton cord sourced from across India. No synthetic fibers where it matters.",
    icon: "leaf",
  },
  {
    title: "Handmade with Care",
    description:
      "Every knot is tied by hand - no machines, no shortcuts. Just skilled hands and honest craft.",
    icon: "recycle",
  },
  {
    title: "Thoughtful Packaging",
    description:
      "Your order arrives in minimal, plastic-free packaging - simple and considered.",
    icon: "package",
  },
  {
    title: "Made in Pune",
    description:
      "Every piece is handcrafted in our Pune studio by Monika and her team.",
    icon: "home",
  },
];

function PracticeIcon({ icon }: { icon: string }) {
  const cls = "w-7 h-7 text-sage";
  switch (icon) {
    case "leaf":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c-4-4-8-7.5-8-12a8 8 0 0116 0c0 4.5-4 8-8 12z" />
        </svg>
      );
    case "recycle":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    case "package":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case "home":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Sustainability() {
  return (
    <section className="py-16 md:py-24 bg-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-sage-dark text-sm uppercase tracking-[0.2em] mb-3">
            Our Commitment
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">
            Made Responsibly
          </h2>
          <p className="font-body text-charcoal-light text-base max-w-lg mx-auto">
            Here&apos;s what goes into every piece we make.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-sage/10 flex items-center justify-center">
                <PracticeIcon icon={p.icon} />
              </div>
              <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                {p.title}
              </h3>
              <p className="font-body text-charcoal-light text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
