import { useState } from 'react';
import { Waves, Sparkles, Moon, Utensils, Bed, ShieldCheck, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    id: 'poolside',
    title: 'The Swimming Pool',
    category: 'Pool',
    tagline: 'Private Pool · Open Day & Night',
    description:
      'A clean, filtered swimming pool with evening lights and poolside seating. Take a dip any time — no closing hours, no other guests.',
    image: '/images/pool-bar.jpg',
    specs: ['Evening Pool Lights', 'Clean Filtered Water', 'Poolside Seating'],
    accent: 'Highlight',
  },
  {
    id: 'starlit-lawn',
    title: 'The Green Lawn',
    category: 'Outdoors',
    tagline: 'Half-Acre Lawn with Covered Veranda',
    description:
      'Half an acre of soft Bermuda grass with a shaded veranda along one side. Great for family dinners outdoors, birthday parties, or just walking around barefoot in the evening.',
    image: '/images/farmhouse-exterior.jpg',
    specs: ['Bermuda Grass Lawn', 'Covered Veranda', 'No Curfew'],
    accent: 'Outdoor Space',
  },
  {
    id: 'vip-lounge',
    title: 'The Indoor Lounge',
    category: 'Indoors',
    tagline: 'Air-Conditioned Lounge with Comfy Sofas',
    description:
      'A cool, air-conditioned room with comfortable sofas and low wooden tables. The perfect spot to relax during the afternoon or sit together as a family after dinner.',
    image: '/images/lounge-interior.jpg',
    specs: ['Comfortable Sofas', 'Soft Lighting', 'Split AC'],
    accent: 'Air Conditioned',
  },
  {
    id: 'master-chambers',
    title: 'The Bedrooms',
    category: 'Bedroom',
    tagline: 'King Bed · Attached Bathroom',
    description:
      'The main bedroom has a solid teak king-size bed, a small daybed for reading, and its own attached bathroom. All three bedrooms come with AC and ceiling fans.',
    image: '/images/bedroom-master.jpg',
    specs: ['King-Size Teak Bed', 'Reading Daybed', 'Attached Bathroom'],
    accent: '3 Bedrooms',
  },
  {
    id: 'bonfire-terrace',
    title: 'Bonfire & BBQ Night',
    category: 'Evening',
    tagline: 'Warm Lights · Open-Air BBQ Area',
    description:
      'Warm wall lights around the courtyard and space to set up a bonfire and barbecue. Perfect for grilling, playing music, and stargazing on clear nights.',
    image: '/images/rooftop-terrace.jpg',
    specs: ['Courtyard Lights', 'BBQ & Music Space', 'Open-Air Setting'],
    accent: 'Evening Activity',
  },
];

export default function InteractiveAmenities({ onOpenInquiry }) {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="amenities" className="relative bg-obsidian-950 py-24 sm:py-32 lg:py-40 text-cream-100">
      <div className="section-padding max-w-content mx-auto">
        {/* Section Editorial Header */}
        <div className="mb-14 sm:mb-20 pb-8 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">
                02 / What You Get
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2.4rem,4.5vw,4.5rem)] font-light text-cream-50 tracking-tight leading-[1.02]">
              Everything Included, <span className="italic font-normal text-gold-gradient">Nothing Extra.</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-sand-300 font-light max-w-md leading-relaxed lg:text-right">
            No hotel rules, no restrictions. The whole property is yours to enjoy however you like. Tap any card for details.
          </p>
        </div>

        {/* Interactive Large Expandable Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp, index) => {
            const isFeatured = index === 0 || index === 3;
            return (
              <div
                key={exp.id}
                onMouseEnter={() => setActiveExp(index)}
                className={`boutique-card group cursor-pointer flex flex-col justify-between ${
                  index === 0 ? 'lg:col-span-2 min-h-[460px] sm:min-h-[500px]' : 'min-h-[420px]'
                }`}
              >
                {/* Background High-Resolution Photography with Hover Zoom */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-luxury group-hover:scale-105 pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />

                {/* Dark Luxury Scrim Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-black/30 pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />

                {/* Top Badge Overlay */}
                <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                  <span className="gold-badge bg-black/60 text-gold-300 border-gold-500/30">
                    {exp.category}
                  </span>
                  <span className="font-mono text-[10px] text-cream-200/80 bg-black/60 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md">
                    {exp.accent}
                  </span>
                </div>

                {/* Bottom Content Card Expanding on Hover */}
                <div className="relative z-10 p-6 sm:p-8 bg-gradient-to-t from-obsidian-950 via-obsidian-950/90 to-transparent">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-1">
                    {exp.tagline}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl text-cream-50 font-normal tracking-tight">
                    {exp.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-sand-300 font-light leading-relaxed max-w-xl transition-all duration-300">
                    {exp.description}
                  </p>

                  {/* Specification Chips */}
                  <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 font-mono text-xs text-cream-200">
                    {exp.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-sand-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Micro CTA */}
                  <div className="mt-4 flex items-center justify-between font-mono text-xs text-sand-400">
                    <span className="text-olive-300 text-[11px]">● Included With Your Stay</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenInquiry) onOpenInquiry('overnight');
                      }}
                      className="inline-flex items-center gap-1 text-gold-300 hover:text-gold-200 transition-colors uppercase tracking-wider text-[11px]"
                    >
                      Book Now <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
