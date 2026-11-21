import { ArrowRight, Bed, Wind, Maximize, Wifi } from 'lucide-react';

export default function PrivateHabitats({ onOpenInquiry }) {
  return (
    <section id="habitats" className="relative bg-obsidian-950 py-20 sm:py-28 lg:py-36 text-cream-100 overflow-hidden">
      <div className="section-padding max-w-content mx-auto">
        {/* Asymmetrical 2-Part Layout: Left Editorial Specs & Right 2 Tall Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: EDITORIAL CONTENT & 2x2 AMENITY SPECIFICATIONS (5 COLS) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Chapter Tag */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-gold-400 font-medium">
                THE ROOMS
              </span>
            </div>

            {/* Monumental Headline Matching Reference */}
            <h2 className="font-serif text-[clamp(2.4rem,4.5vw,4.25rem)] font-light text-cream-50 tracking-tight leading-[1.06]">
              The Living Spaces. <br />
              <span className="italic text-gold-300 font-normal">
                Warm tones, plush beds &amp; <br />
                garden archways.
              </span>
            </h2>

            {/* Descriptive Body Text */}
            <p className="font-sans text-sm sm:text-base text-sand-300 font-light leading-relaxed max-w-lg">
              Three air-conditioned bedrooms, a dressing room with full-length mirrors, and a cosy daybed lounge — everything you need to feel at home.
            </p>

            {/* 2x2 Amenity Specification Lists */}
            <div className="pt-6 pb-6 border-y border-white/10 grid grid-cols-2 gap-x-6 gap-y-5">
              {/* Item 1 */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-sand-400 block mb-1">
                  Stay Type
                </span>
                <span className="font-serif text-base sm:text-lg text-gold-300 font-medium block">
                  Entire Home
                </span>
              </div>

              {/* Item 2 */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-sand-400 block mb-1">
                  Cooling
                </span>
                <span className="font-serif text-base sm:text-lg text-gold-300 font-medium block">
                  AC & Ceiling Fans
                </span>
              </div>

              {/* Item 3 */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-sand-400 block mb-1">
                  Dressing Room
                </span>
                <span className="font-serif text-base sm:text-lg text-gold-300 font-medium block">
                  Floor-to-Ceiling Mirrors
                </span>
              </div>

              {/* Item 4 */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-sand-400 block mb-1">
                  Extras
                </span>
                <span className="font-serif text-base sm:text-lg text-gold-300 font-medium block">
                  Fast Wi-Fi & Books
                </span>
              </div>
            </div>

            {/* Explore Capsule CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('entire-farmhouse')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/5 hover:bg-gold-500 hover:text-obsidian-950 text-cream-100 font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 border border-white/20 hover:border-gold-400 shadow-md group"
              >
                <span>See Full Details</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: STAGGERED PHOTO CARDS WITH DISTINCT GAP (7 COLS) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 relative py-4 sm:py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-start">
              
              {/* Card 1: Positioned Higher (Left) */}
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] border border-white/15 shadow-2xl group bg-[#0D0906] transform sm:-translate-y-3 lg:-translate-y-6 transition-transform duration-500">
                <img
                  src="/images/bedroom-master.jpg"
                  alt="The Master Bedroom Suite"
                  className="w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-luxury group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-1">
                    MASTER BEDROOM
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-cream-50 font-normal tracking-tight">
                    The Master Bedroom Suite
                  </h3>
                </div>
              </div>

              {/* Card 2: Positioned Slightly Below with Distinct Gap (Right) */}
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] border border-white/15 shadow-2xl group bg-[#0D0906] transform sm:translate-y-4 lg:translate-y-7 transition-transform duration-500">
                <img
                  src="/images/lounge-interior.jpg"
                  alt="Cosy Daybed & Sitting Area"
                  className="w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-luxury group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-1">
                    THE LOUNGE
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-cream-50 font-normal tracking-tight">
                    Cosy Daybed & Sitting Area
                  </h3>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
