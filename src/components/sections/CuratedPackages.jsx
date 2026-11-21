import { useState } from 'react';
import { 
  Waves, Trees, Armchair, UtensilsCrossed, Flame, Wifi, 
  Clock, ShieldCheck, Volume2, ArrowRight, MessageCircle, 
  Check, Sparkles, FileText, Moon
} from 'lucide-react';

export default function CuratedPackages({ onSelectPackage }) {
  const handleBooking = () => {
    if (onSelectPackage) {
      onSelectPackage('entire-farmhouse');
    } else {
      const message = encodeURIComponent(
        'Hello GK Resort! ✨\n\nI would like to book the Entire Farmhouse Stay (₹4,000 / night).\nPlease let me know availability.'
      );
      window.open(`https://wa.me/917230939853?text=${message}`, '_blank');
    }
  };

  return (
    <section id="packages" className="relative bg-obsidian-950 py-20 sm:py-28 lg:py-36 text-cream-100">
      <div className="section-padding max-w-content mx-auto">
        {/* Editorial Top Headline */}
        <div className="mb-10 sm:mb-14 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">
                03 / Pricing & Booking
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-light text-cream-50 tracking-tight leading-[1.05]">
              The Whole Farmhouse,{' '}
              <span className="italic font-normal text-gold-gradient">All Yours.</span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-sand-300 font-light max-w-md leading-relaxed md:text-right">
            3 bedrooms, a private pool, green lawns, and total privacy — all included in one simple nightly rate.
          </p>
        </div>

        {/* 2-Column Exact Layout from Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ========================================================================= */}
          {/* LEFT CARD: ENTIRE PROPERTY EXCLUSIVE (7 COLS) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#0E0B08] border border-gold-500/35 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Top Header Row with Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-300 font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold shadow-gold-glow">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                  Entire Property Exclusive
                </span>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] sm:text-[11px] text-cream-200">
                    3 Bedrooms
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] sm:text-[11px] text-cream-200">
                    3 Double Beds
                  </span>
                </div>
              </div>

              {/* Tariff Block */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-sand-400 block mb-1">
                    Nightly Rate
                  </span>
                  <div className="flex items-baseline">
                    <span className="font-serif text-4xl sm:text-5xl font-light text-cream-50 text-gold-gradient">
                      ₹4,000
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-sand-400 ml-2.5">
                      / night
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-400 block mb-0.5">
                    Check-in → Check-out
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-cream-100 font-medium">
                    10:00 AM → 11:00 AM
                  </span>
                </div>
              </div>

              {/* What's Included Grid (No Caretaker) */}
              <div className="mt-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold flex items-center gap-1.5 mb-4">
                  <Check size={13} className="text-gold-400" />
                  All Included Amenities
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Amenity 1: Pool */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-gold-400 shrink-0 mt-0.5">
                      <Waves size={16} />
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-cream-50 font-normal">Private Swimming Pool</h4>
                      <p className="font-mono text-[10px] text-sand-400 leading-tight mt-0.5">
                        Clean filtered pool with evening lights
                      </p>
                    </div>
                  </div>

                  {/* Amenity 2: Bermuda Lawn */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-olive-400 shrink-0 mt-0.5">
                      <Trees size={16} />
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-cream-50 font-normal">Green Bermuda Lawn</h4>
                      <p className="font-mono text-[10px] text-sand-400 leading-tight mt-0.5">
                        Half-acre green lawn
                      </p>
                    </div>
                  </div>

                  {/* Amenity 3: Indoor Lounge */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-gold-400 shrink-0 mt-0.5">
                      <Armchair size={16} />
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-cream-50 font-normal">VIP Salon Lounge</h4>
                      <p className="font-mono text-[10px] text-sand-400 leading-tight mt-0.5">
                        Comfortable sofas with split AC
                      </p>
                    </div>
                  </div>

                  {/* Amenity 4: Barbecue */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-terracotta-400 shrink-0 mt-0.5">
                      <UtensilsCrossed size={16} />
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-cream-50 font-normal">Barbecue & Outdoor Dining</h4>
                      <p className="font-mono text-[10px] text-sand-400 leading-tight mt-0.5">
                        BBQ grill and outdoor tables
                      </p>
                    </div>
                  </div>

                  {/* Amenity 5: Bonfire */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-amber-400 shrink-0 mt-0.5">
                      <Flame size={16} />
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-cream-50 font-normal">Bonfire Setup</h4>
                      <p className="font-mono text-[10px] text-sand-400 leading-tight mt-0.5">
                        Evening bonfire on the terrace
                      </p>
                    </div>
                  </div>

                  {/* Amenity 6: High-Speed Wi-Fi */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-sky-400 shrink-0 mt-0.5">
                      <Wifi size={16} />
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-cream-50 font-normal">High-Speed Wi-Fi</h4>
                      <p className="font-mono text-[10px] text-sand-400 leading-tight mt-0.5">
                        Wi-Fi across the property
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 3 Photo Thumbnail Cards Matching Reference */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="grid grid-cols-3 gap-3">
                {/* Thumbnail 1: Master Bed */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group border border-white/15">
                  <img
                    src="/images/bedroom-master.jpg"
                    alt="Master Suite"
                    className="w-full h-full object-cover transform-gpu transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 z-10">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-cream-100 bg-black/70 px-2 py-0.5 rounded border border-white/20">
                      Bedrooms
                    </span>
                  </div>
                </div>

                {/* Thumbnail 2: Garden & Lawn */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group border border-white/15">
                  <img
                    src="/images/farmhouse-exterior.jpg"
                    alt="Manicured Lawn & Patio"
                    className="w-full h-full object-cover transform-gpu transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 z-10">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-cream-100 bg-black/70 px-2 py-0.5 rounded border border-white/20">
                      Garden Patio & Lawn
                    </span>
                  </div>
                </div>

                {/* Thumbnail 3: Private Pool */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group border border-white/15">
                  <img
                    src="/images/pool-bar.jpg"
                    alt="Night Pool"
                    className="w-full h-full object-cover transform-gpu transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 z-10">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-cream-100 bg-black/70 px-2 py-0.5 rounded border border-white/20">
                      Pool
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* ========================================================================= */}
          {/* RIGHT CARD: ESTATE PROTOCOL / SPECIFIC PROPERTY RULES (5 COLS) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[#0E0B08] border border-white/15 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-1">
                  House Rules
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-cream-50 font-normal tracking-tight">
                  Things to Know
                </h3>
              </div>

              {/* Stacked Rule Cards */}
              <div className="space-y-3">
                {/* Rule 1: Check-in / Check-out */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-gold-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={15} />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-cream-50">
                      Check-in: 10:00 AM • Check-out: 11:00 AM
                    </h4>
                    <p className="text-xs text-sand-300 font-light mt-1 leading-relaxed">
                      Early check-in or late checkout can usually be arranged — just let us know.
                    </p>
                  </div>
                </div>

                {/* Rule 2: Couples & IDs */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-olive-500/20 text-olive-300 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck size={15} />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-cream-50">
                      All Guests Welcome
                    </h4>
                    <p className="text-xs text-sand-300 font-light mt-1 leading-relaxed">
                      Couples, families, and groups are all welcome. Just bring a valid government ID. The property is completely private.
                    </p>
                  </div>
                </div>

                {/* Rule 3: Quiet Hours */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Moon size={15} />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-cream-50">
                      Quiet Hours: 10:00 PM – 8:00 AM
                    </h4>
                    <p className="text-xs text-sand-300 font-light mt-1 leading-relaxed">
                      Please keep outdoor music low after 10 PM out of respect for the neighbourhood.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guest Guidelines & Policy Highlighted Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gold-500/[0.07] border border-gold-500/30">
                <span className="font-mono text-[10px] uppercase tracking-wider text-gold-300 font-semibold flex items-center gap-1.5 mb-2.5">
                  <FileText size={12} className="text-gold-400" />
                  Good to Know
                </span>
                <ul className="space-y-1.5 font-sans text-xs text-sand-300 font-light leading-relaxed">
                  <li>• <strong className="text-cream-100 font-normal">Sole Occupancy:</strong> The entire property is private — no other guests or outside visitors.</li>
                  <li>• <strong className="text-cream-100 font-normal">Kitchen & Dining:</strong> Self-service kitchen with cookware, utensils, and a fridge.</li>
                  <li>• <strong className="text-cream-100 font-normal">Pet Policy:</strong> Pets are welcome on the lawn (fenced property).</li>
                </ul>
              </div>
            </div>

            {/* Prominent Gold CTA Button & Bottom Status Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={handleBooking}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-300 hover:from-gold-400 hover:to-amber-200 text-obsidian-950 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl hover:shadow-gold-glow hover:scale-[1.01] active:scale-[0.99] group"
              >
                <span>Book Entire Farmhouse on WhatsApp</span>
                <MessageCircle size={16} className="text-obsidian-950" />
              </button>

              <div className="text-center">
                <span className="font-mono text-[11px] text-sand-400">
                  Book directly with the owner • ₹4,000/night • Instant confirmation on WhatsApp
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
