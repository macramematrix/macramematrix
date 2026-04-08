const steps = [
  {
    number: "01",
    title: "Design",
    description:
      "Every piece begins with a sketch. We plan the knot patterns, dimensions, and color palette before a single cord is cut.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We use organic cotton cord and recycled materials, sourced responsibly. Quality materials make for lasting craft.",
  },
  {
    number: "03",
    title: "Hand Knot",
    description:
      "This is where the magic happens. Every knot tied by hand with precision and care — no machines, no shortcuts.",
  },
  {
    number: "04",
    title: "Quality Check",
    description:
      "Each piece is inspected for evenness, structure, and finish. We pack it with eco-friendly packaging, ready to ship.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-sage-dark text-sm uppercase tracking-[0.2em] mb-3">
            How We Make It
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">
            Our Process
          </h2>
          <p className="font-body text-charcoal-light text-base max-w-lg mx-auto">
            From concept to creation — every piece is made by hand in our Pune studio
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-sage/10 flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-sage">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="font-body text-charcoal-light text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
