import { ArrowUpRight, Compass, Shield, Sparkles, Moon } from 'lucide-react';

export default function TheVibe({ onOpenInquiry }) {
  return (
    <section id="the-vibe" className="relative bg-obsidian-900 py-24 sm:py-32 lg:py-40 text-cream-100 overflow-hidden">
      {/* Subtle Ambient Gold Glow in Background */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding max-w-content mx-auto">
        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Moody Overlapping Imagery (6 Cols) */}
          <div className="lg:col-span-6 relative">
            {/* Primary Dominant Visual Plate */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src="/images/farmhouse-exterior.jpg"
                alt="GK Resort tranquil night landscape and illuminated veranda"
                className="w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-luxury group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="gold-badge bg-black/60 text-gold-300 border-gold-500/30">
                  <Compass size={11} className="text-gold-400" />
                  26.9124° N, 75.7873° E
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-5 z-10 font-mono text-xs text-cream-200">
                <span>Lawn & Gardens · Natural Bermuda Grass</span>
              </div>
            </div>

            {/* Secondary Overlapping Moody Card (VIP Lounge) */}
            <div className="relative lg:absolute -mt-10 sm:-mt-16 lg:mt-0 lg:-bottom-10 lg:-right-6 w-4/5 sm:w-3/5 aspect-[4/3] ml-auto rounded-2xl overflow-hidden border border-gold-500/35 shadow-luxury-dark backdrop-blur-md group z-20">
              <img
                src="/images/lounge-interior.jpg"
                alt="VIP air conditioned salon lounge"
                className="w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-luxury group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3.5 left-4 z-10 font-mono text-[11px] text-gold-300">
                <span>The Lounge</span>
              </div>
            </div>
          </div>

          {/* Right Column: Poetic Editorial Text (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            {/* Editorial Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">
                01 / The Feel of This Place
              </span>
            </div>

            {/* Poetic Serif Heading */}
            <h2 className="font-serif text-[clamp(2.4rem,4.5vw,4.25rem)] font-light text-cream-50 tracking-tight leading-[1.05]">
              Silence isn’t empty.{' '}
              <br />
              Here, it’s <span className="italic font-normal text-gold-gradient">full of everything you need.</span>
            </h2>

            {/* Narrative Storytelling */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-sand-300 font-light leading-relaxed">
              <p>
                Away from the noise of the city, <strong className="text-cream-100 font-normal">GK Resort</strong> is a place where time slows down. Wake up to birdsong across half an acre of green lawn, spend your afternoons by the pool, and let your evenings unfold under the wide Rajasthan sky.
              </p>
              <p>
                No strangers in the hallway. No shared pool. When you book GK Resort, the entire property is yours. Just you, your people, and nothing but peace and quiet.
              </p>
            </div>

            {/* Refined Architectural Metric Accents */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-obsidian-850/80 border border-white/10">
                <span className="text-gold-400 text-lg sm:text-xl font-serif block">5,000+ Sq. Ft.</span>
                <span className="text-sand-400 text-[11px] uppercase tracking-wider block mt-0.5">
                  Private Grounds & Lawn
                </span>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-850/80 border border-white/10">
                <span className="text-gold-400 text-lg sm:text-xl font-serif block">100% Sole Use</span>
                <span className="text-sand-400 text-[11px] uppercase tracking-wider block mt-0.5">
                  No Other Guests
                </span>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-850/80 border border-white/10">
                <span className="text-gold-400 text-lg sm:text-xl font-serif block">3 Master Suites</span>
                <span className="text-sand-400 text-[11px] uppercase tracking-wider block mt-0.5">
                  Each with Split AC
                </span>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-850/80 border border-white/10">
                <span className="text-gold-400 text-lg sm:text-xl font-serif block">Filtered Pool</span>
                <span className="text-sand-400 text-[11px] uppercase tracking-wider block mt-0.5">
                  Swim Day or Night
                </span>
              </div>
            </div>

            {/* Editorial Action */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('overnight')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-gold-500 hover:text-obsidian-950 text-cream-100 font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 border border-white/15"
              >
                <span>Book the Farmhouse</span>
                <ArrowUpRight size={14} />
              </button>
              <a
                href="#amenities"
                className="font-mono text-xs uppercase tracking-widest text-sand-400 hover:text-gold-300 transition-colors"
              >
                See What's Included ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
