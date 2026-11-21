import Button from '../ui/Button';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-[65vh] flex items-center overflow-hidden"
    >
      {/* Background image — optimized GPU layer */}
      <img
        src="/images/pool-bar.jpg"
        alt="GK Resort pool lounge"
        className="absolute inset-0 w-full h-full object-cover transform-gpu"
        loading="lazy"
        decoding="async"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-earth-950/65" />

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-6 md:px-12 lg:px-20 w-full py-24">
        <div className="max-w-xl">
          <span className="inline-block font-body text-[11px] tracking-[0.3em] uppercase text-cream-200/70">
            The Experience
          </span>

          <h2 className="font-display text-display-lg text-cream-100 font-light mt-4">
            Crafted for Unforgettable Moments
          </h2>

          <p className="text-cream-200/80 text-base leading-relaxed mt-5">
            Every detail at GK Resort is thoughtfully designed to create lasting
            memories. From sunrise yoga on the terrace to midnight swims under
            the stars — this is your private escape.
          </p>

          <div className="mt-8">
            <Button
              variant="outline"
              href="#contact"
              className="!text-cream-200 !border-cream-200/40 hover:!border-cream-200 hover:!bg-cream-200/10"
            >
              Plan Your Stay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
