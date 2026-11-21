import { ArrowUpRight, Sparkles, MapPin, Phone, Shield } from 'lucide-react';

export default function BentoHero() {
  return (
    <section
      id="sanctuary"
      className="relative w-full min-h-screen lg:h-screen overflow-hidden m-0 p-0 flex flex-col justify-between items-center bg-[#0D0906]"
    >
      {/* High-Resolution Property Background Image Bleeding to Absolute Edges */}
      <img
        src="/images/hero-pool.jpg"
        alt="GK Resort luxury farmhouse and starlit swimming pool"
        className="absolute inset-0 w-full h-full object-cover transform-gpu pointer-events-none"
        loading="eager"
        decoding="async"
      />

      {/* High-Contrast Multi-Layered Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0906] via-[#0D0906]/55 to-[#0D0906]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0D0906]/40 to-[#0D0906]/85 pointer-events-none" />

      {/* Seamless Gradient Feather into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0906] to-transparent pointer-events-none z-10" />

      {/* Perfectly Centered Hero Container via Flexbox */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 sm:px-10 md:px-12 pt-28 sm:pt-32 md:pt-36 pb-6 flex-1 flex flex-col justify-center items-center text-center">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 px-3.5 py-1.5 rounded-full bg-cream-100/10 backdrop-blur-md border border-white/15">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400" />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cream-200/95 font-medium">
            GK Resort · Rajasthan, India
          </span>
        </div>

        {/* Monumental Headline with Dynamic Clamping & Full Vertical Clearance */}
        <h1 className="font-serif text-[clamp(2.2rem,4.5vw,4.25rem)] font-light text-cream-50 tracking-tight leading-[1.04] max-w-4xl text-balance">
          Where Stillness
          <br />
          Becomes an <span className="italic font-normal text-cream-200">Artform.</span>
        </h1>

        {/* Key Descriptive Text Overlaid Directly with High Contrast */}
        <p className="mt-5 sm:mt-6 text-[clamp(0.88rem,1.15vw,1.1rem)] font-light text-cream-200/90 leading-relaxed max-w-2xl text-balance drop-shadow-sm">
          An exclusive 5,000+ sq. ft. private estate enveloped by manicured green lawns, quiet night skies, and a starlit pool courtyard. Handcrafted for bespoke family gatherings and undisturbed seclusion in Rajasthan.
        </p>

        {/* Integrated Action Row Centered */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
          <a
            href="#inquire"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cream-100 text-earth-950 font-mono text-xs uppercase tracking-widest font-semibold hover:bg-cream-200 transition-all duration-300 shadow-xl hover:scale-105 transform-gpu"
          >
            Reserve The Estate
            <ArrowUpRight size={14} className="text-terracotta-600" />
          </a>

          <a
            href="#estate"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream-100/10 backdrop-blur-md text-cream-100 border border-white/20 font-mono text-xs uppercase tracking-widest hover:bg-cream-100/20 transition-colors"
          >
            Explore Spaces ↓
          </a>

          <a
            href="tel:+917230939853"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cream-200/90 hover:text-cream-100 transition-colors px-2 py-1"
          >
            <Phone size={13} className="text-terracotta-400" />
            <span>Direct: +91 7230939853</span>
          </a>
        </div>
      </div>

      {/* Bottom Architectural Folio Bar — Compact & Centered */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 pb-6 sm:pb-8">
        <div className="pt-4 border-t border-cream-100/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-mono text-[11px] text-cream-200/80 text-center">
          <div>
            <span className="text-cream-200/50 text-[9px] uppercase block tracking-wider">Acreage</span>
            <span className="text-cream-100 font-medium">5,000+ Sq. Ft. Grounds</span>
          </div>

          <div>
            <span className="text-cream-200/50 text-[9px] uppercase block tracking-wider">Policy</span>
            <span className="text-cream-100 font-medium">100% Sole-Occupancy Only</span>
          </div>

          <div>
            <span className="text-cream-200/50 text-[9px] uppercase block tracking-wider">Aquatic</span>
            <span className="text-cream-100 font-medium">Temperature-Controlled Pool</span>
          </div>

          <div>
            <span className="text-cream-200/50 text-[9px] uppercase block tracking-wider">Acclaim</span>
            <span className="text-cream-100 font-medium">★ 4.9 Verified Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
