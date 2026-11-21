import { Waves, Trees, UtensilsCrossed, PartyPopper, Sparkles, Shield, Moon, Clock } from 'lucide-react';

export default function BentoAmenities() {
  return (
    <section id="amenities" className="relative bg-gradient-to-b from-[#0D0906] via-[#120D09] to-[#0D0906] py-24 sm:py-32 text-cream-100">
      <div className="section-padding max-w-content mx-auto">
        {/* Editorial Header */}
        <div className="mb-14 sm:mb-20 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-terracotta-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-sand-400 font-medium">
              Curated Provisions · Estate Amenities
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-serif text-display-xl font-light text-cream-50 tracking-tight leading-[0.96]">
                Designed for <span className="italic font-normal text-cream-200">Complete</span> Freedom.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <div className="font-mono text-xs text-sand-400 inline-flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <Moon size={13} className="text-terracotta-400" /> No Strict Curfew
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} className="text-olive-400" /> 24/7 Concierge
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Dominant Feature Plate: Oasis Pool & Turf (8 cols) */}
          <div className="col-span-12 lg:col-span-8 editorial-card p-8 sm:p-12 bg-[#18120C]/90 border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            {/* Real Property Photo Atmospheric Underlay */}
            <img
              src="/images/pool-wide.jpg"
              alt="GK Resort illuminated pool and lawn"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#18120C] via-[#18120C]/85 to-transparent pointer-events-none" />

            {/* Subtle watermark numeral in background */}
            <span className="absolute -right-4 -bottom-8 font-serif text-[180px] font-light text-white/[0.03] leading-none select-none pointer-events-none">
              01
            </span>

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="bento-badge bg-black/40 text-cream-100 border-white/20">
                  <Waves size={12} className="text-terracotta-400" />
                  Featured Amenity · Aquatic
                </span>
                <span className="font-mono text-[10px] text-sand-400 uppercase tracking-widest">
                  Depth: 4.5 Ft · Filtered
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-cream-50 font-normal tracking-tight max-w-xl">
                Temperature-tempered swimming pool flanked by lush natural turf.
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-sand-300 font-light leading-relaxed max-w-lg">
                Engineered with continuous multi-stage filtration, stainless steel safety ladders, and warm perimeter uplighting that transforms the water into a shimmering blue mirror as dusk falls.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-cream-200">
              <div>
                <span className="text-sand-500 text-[10px] uppercase block">Perimeter</span>
                <span className="font-medium text-cream-100">Star Sconce Illumination</span>
              </div>
              <div>
                <span className="text-sand-500 text-[10px] uppercase block">Access</span>
                <span className="font-medium text-cream-100">All-Day & Midnight Swims</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-sand-500 text-[10px] uppercase block">Surround</span>
                <span className="font-medium text-cream-100">Bermuda Grass Turf</span>
              </div>
            </div>
          </div>

          {/* Dramatic Dark Slate: 100% Sole Occupancy (4 cols) */}
          <div className="col-span-12 lg:col-span-4 rounded-3xl bg-[#110B07] border border-white/15 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/10 text-cream-100 border border-white/20 backdrop-blur-sm">
                  <Shield size={11} className="text-terracotta-400" />
                  Sole Occupancy
                </span>
                <span className="font-mono text-[10px] text-sand-400 uppercase tracking-widest">
                  No Strangers
                </span>
              </div>

              <h3 className="font-serif text-3xl text-cream-50 font-light leading-snug tracking-tight">
                An entire private estate reserved solely for your inner circle.
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-sand-300 font-light leading-relaxed">
                Never share a corridor, pool lounger, or dining area. The entire property gates close behind you for the duration of your stay.
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-white/10 font-mono text-xs text-sand-300 flex items-center justify-between">
              <span className="text-terracotta-400 font-medium">● Complete Seclusion</span>
              <span>Rajasthan, IN</span>
            </div>
          </div>

          {/* Plate 3: Al Fresco Starlit Dining (4 cols) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 editorial-card p-8 bg-[#16100B]/80 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center mb-6 text-terracotta-400 shadow-sm">
                <UtensilsCrossed size={18} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] text-sand-400 uppercase tracking-widest block mb-1">
                Culinary Ambiance
              </span>
              <h4 className="font-serif text-2xl text-cream-50 font-normal">
                Starlit Al Fresco Dining
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-sand-300 font-light leading-relaxed">
                Open-air dining setups on the lawn or poolside veranda for memorable evening meals under the canopy of night stars.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 font-mono text-[11px] text-sand-400">
              <span>Barbecue & Dining Provisions</span>
            </div>
          </div>

          {/* Plate 4: Celebrations & Gathering Freedom (4 cols) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 editorial-card p-8 bg-[#16100B]/80 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center mb-6 text-olive-400 shadow-sm">
                <PartyPopper size={18} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] text-sand-400 uppercase tracking-widest block mb-1">
                Private Occasions
              </span>
              <h4 className="font-serif text-2xl text-cream-50 font-normal">
                Milestone Celebrations
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-sand-300 font-light leading-relaxed">
                Whether celebrating intimate birthdays, anniversaries, or corporate strategic retreats, you have total celebratory autonomy.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 font-mono text-[11px] text-sand-400">
              <span>Music & Banquet Ready</span>
            </div>
          </div>

          {/* Plate 5: Architectural Star Sconces (4 cols) */}
          <div className="col-span-12 lg:col-span-4 editorial-card p-8 bg-[#16100B]/80 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center mb-6 text-sand-300 shadow-sm">
                <Sparkles size={18} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] text-sand-400 uppercase tracking-widest block mb-1">
                Atmospheric Design
              </span>
              <h4 className="font-serif text-2xl text-cream-50 font-normal">
                Geometric Twilight Sconces
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-sand-300 font-light leading-relaxed">
                Custom-angled sconces cast ambient star shadows across the compound boundary walls as twilight settles across Rajasthan.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 font-mono text-[11px] text-sand-400">
              <span>Designer Uplighting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
