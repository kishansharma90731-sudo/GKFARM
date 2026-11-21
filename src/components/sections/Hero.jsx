export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background image — optimized static GPU layer */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-pool.jpg"
          alt="GK Resort luxury pool"
          className="w-full h-full object-cover transform-gpu"
          loading="eager"
          decoding="async"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-earth-950/40" />

        {/* Bottom gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/60 via-transparent to-transparent" />
      </div>

      {/* Content — bottom-left, asymmetric */}
      <div className="relative z-10 section-padding pb-24 md:pb-28 lg:pb-32 max-w-3xl">
        <span className="inline-block font-body text-[11px] font-medium tracking-[0.3em] uppercase text-cream-200/80 mb-4">
          Luxury Farmhouse Retreat
        </span>

        <h1 className="font-display text-display-xl text-cream-100 font-light leading-[0.95]">
          Where Luxury
          <br />
          Meets Nature
        </h1>

        <p className="mt-5 text-base md:text-lg font-light text-cream-200/80 max-w-md">
          An exclusive escape nestled in the serene landscape of Rajasthan
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#retreat"
            className="inline-flex items-center justify-center gap-2 font-body font-medium uppercase px-7 py-3.5 text-xs tracking-widest bg-cream-100 text-earth-900 border border-cream-100 transition-colors duration-300 hover:bg-cream-200"
          >
            Explore the Retreat
          </a>

          <a
            href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x396db900573f91ed:0x3dfafe63d05e867c?entry=s&sa=X&ved=2ahUKEwiHzuOskZaYAxVaRmwGHf1fPQ0Q4kB6BAgWEAA&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-body font-medium uppercase px-7 py-3.5 text-xs tracking-widest bg-transparent text-cream-200 border border-cream-200/40 transition-colors duration-300 hover:border-cream-200 hover:text-cream-100"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* Minimal scroll prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center opacity-60">
        <div className="w-px h-10 bg-cream-200/40" />
      </div>
    </section>
  );
}
