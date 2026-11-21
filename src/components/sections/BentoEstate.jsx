import { Sparkles, ArrowUpRight, BedDouble, Wind, VolumeX, Maximize2, ShieldCheck, DoorOpen, CheckCircle2, Moon, Sun } from 'lucide-react';

const groundSpaces = [
  {
    id: 'residence',
    plate: 'Spatial Plate A-01',
    category: 'Central Grounds',
    capacity: 'Up to 50+ Guests',
    title: 'The Main Residence & Manicured Lawn',
    description:
      'Expansive, meticulously tended Bermuda grass framed by perimeter floodlights and an open-air colonnade veranda. Perfect for twilight cocktails, wedding receptions, or open-sky dinners in the heart of Rajasthan.',
    image: '/images/farmhouse-exterior.jpg',
    tag: 'Half-Acre Greenery',
    specs: ['Natural Bermuda Turf', 'Shaded Colonnade Veranda', 'Perimeter Floodlights'],
    imageFirst: true,
  },
  {
    id: 'lounge',
    plate: 'Spatial Plate A-02',
    category: 'Interior Comfort',
    capacity: 'Private VIP Suite',
    title: 'The VIP Salon Lounge',
    description:
      'Air-conditioned indoor suite furnished with plush teal velveteen sofas, crafted wooden low-tables, and ambient cove lighting. Designed for chilled midday retreats and intimate family conversations away from the afternoon heat.',
    image: '/images/lounge-interior.jpg',
    tag: 'Climate Controlled',
    specs: ['Plush Velvet Seating', 'Cove Ambient Lighting', 'Air Conditioned Privacy'],
    imageFirst: false,
  },
];

const bedroomSuites = [
  {
    id: 'master-suite',
    number: '01',
    badge: 'Suite 01 · Principal Chamber',
    title: 'The Royal Master Suite',
    tagline: 'Solid Timber Craft & Private Diwan Lounge',
    description:
      'The primary master sanctuary featuring a solid teak king bed with integrated headboard consoles, accompanied by an artisanal orange velvet diwan reading nook and embroidered bolster cushions. Serene sky-blue walls and cool thermal ceramic flooring maintain refreshing indoor comfort throughout high-noon desert heat.',
    image: '/images/bedroom-master.jpg',
    capacity: 'Sleeps 2 – 4 Guests',
    size: '320 Sq. Ft.',
    specs: [
      'Solid Teak King Bed & Headboard Storage',
      'Artisanal Velvet Diwan Lounge & Cushions',
      'Independent Split-Inverter Air Conditioning',
      'En-Suite Thermal Ceramic Tile Bath',
    ],
    features: ['Sky-Blue Palette', 'Thermal Floor Comfort', 'Acoustic Privacy'],
    accent: 'Real Property Suite',
  },
  {
    id: 'garden-suite',
    number: '02',
    badge: 'Suite 02 · Garden Wing',
    title: 'The Oasis Garden Suite',
    tagline: 'Lawn Sightlines & Warm Earthen Tones',
    description:
      'A warm, sun-softened sanctuary overlooking the emerald private lawns. Dressed in handcrafted timber accents, high-thread-count cotton linens, and dimmable bedside lighting, with heavy acoustic glazing ensuring quiet morning repose.',
    image: '/images/bedroom-suite-2.jpg',
    capacity: 'Sleeps 2 Guests',
    size: '260 Sq. Ft.',
    specs: [
      'Plush Pocket-Spring King Bed',
      'Wide Lawn & Courtyard Sightlines',
      'Silent Inverter Climate Control',
      'Handcrafted Timber Wardrobe & Bench',
    ],
    features: ['Garden Outlook', 'Dimmable Reading Lights', 'Sound-Dampened Walls'],
    accent: 'Garden View',
  },
  {
    id: 'family-suite',
    number: '03',
    badge: 'Suite 03 · Family Sanctuary',
    title: 'The Veranda Family Chamber',
    tagline: 'Direct Colonnade Access & Flexible Living',
    description:
      'An expansive, versatile retreat engineered for multi-generational families or children. Highlights include immediate step-out access to the shaded veranda colonnade, ambient recessed amber cove illumination, generous luggage alcoves, and private en-suite bathroom facilities.',
    image: '/images/bedroom-suite-3.jpg',
    capacity: 'Sleeps 2 – 4 Guests',
    size: '380 Sq. Ft.',
    specs: [
      'Flexible King or Twin Configuration',
      'Direct Step-Out to Shaded Veranda Colonnade',
      'Ambient Low-Glare Amber Cove Lights',
      'Dedicated Dressing Alcove & En-Suite Bath',
    ],
    features: ['Direct Veranda Access', 'Multi-Guest Versatility', 'Private Entryway'],
    accent: 'Veranda Access',
  },
];

const poolSpace = {
  id: 'pool-deck',
  plate: 'Spatial Plate A-04',
  category: 'Aquatic Lounge',
  capacity: 'All-Day & Night Swims',
  title: 'The Midnight Pool Deck & Bar',
  description:
    'Deep mosaic reflective pool tiles, stainless steel entry rails, and poolside tables engineered for afternoon sunbathing and evening cocktail hours under an infinite canopy of stars.',
  image: '/images/pool-bar.jpg',
  tag: 'Deep Blue Mosaic',
  specs: ['Underwater Illumination', 'Stainless Steel Ladder', 'Poolside Cocktail Setup'],
  imageFirst: false,
};

export default function BentoEstate() {
  return (
    <section id="estate" className="relative bg-gradient-to-b from-[#0D0906] via-[#130E09] to-[#0D0906] pt-16 sm:pt-24 pb-24 sm:pb-32 text-cream-100">
      <div className="section-padding max-w-content mx-auto">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-olive-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-sand-400 font-medium">
              Architectural Portfolio · Spatial Layout
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-serif text-display-xl font-light text-cream-50 tracking-tight leading-[0.96]">
                Spaces Designed for <br className="hidden sm:inline" />
                <span className="italic font-normal text-cream-200">Uninterrupted</span> Flow.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <p className="font-sans text-sm font-light text-sand-300 leading-relaxed max-w-md ml-auto">
                Every square foot of GK Resort balances open-air Rajasthan expanse with climate-controlled indoor sanctuaries.
              </p>
            </div>
          </div>
        </div>

        {/* Estate Flow Container */}
        <div className="space-y-16 sm:space-y-24">
          {/* Spatial Plate A-01: Main Residence */}
          {(() => {
            const space = groundSpaces[0];
            return (
              <div key={space.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                <div className="w-full">
                  <div className="w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] h-full editorial-card relative group overflow-hidden">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-luxury group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bento-badge bg-black/60 text-cream-100 border-white/20">
                        {space.plate}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 z-10 text-cream-200 font-mono text-xs tracking-wider">
                      <span>{space.tag}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full flex">
                  <div className="w-full floating-plate p-8 sm:p-10 lg:p-12 shadow-luxury flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-olive-400 font-semibold">
                          {space.category}
                        </span>
                        <span className="font-mono text-[10px] text-sand-400 uppercase tracking-widest">
                          {space.capacity}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cream-50 font-normal tracking-tight leading-snug">
                        {space.title}
                      </h3>
                      <p className="mt-4 sm:mt-5 text-sm sm:text-base text-sand-300 font-light leading-relaxed">
                        {space.description}
                      </p>
                      <div className="mt-6 sm:mt-8 space-y-2">
                        {space.specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-2.5 text-xs font-mono text-cream-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between font-mono text-xs text-sand-400">
                      <span className="text-olive-300">● Verified Grounds</span>
                      <a
                        href="#inquire"
                        className="inline-flex items-center gap-1.5 text-cream-100 hover:text-terracotta-400 transition-colors uppercase tracking-wider text-[11px]"
                      >
                        Inquire For Dates <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Spatial Plate A-02: VIP Salon Lounge */}
          {(() => {
            const space = groundSpaces[1];
            return (
              <div key={space.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                <div className="w-full flex order-2 lg:order-1">
                  <div className="w-full floating-plate p-8 sm:p-10 lg:p-12 shadow-luxury flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-olive-400 font-semibold">
                          {space.category}
                        </span>
                        <span className="font-mono text-[10px] text-sand-400 uppercase tracking-widest">
                          {space.capacity}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cream-50 font-normal tracking-tight leading-snug">
                        {space.title}
                      </h3>
                      <p className="mt-4 sm:mt-5 text-sm sm:text-base text-sand-300 font-light leading-relaxed">
                        {space.description}
                      </p>
                      <div className="mt-6 sm:mt-8 space-y-2">
                        {space.specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-2.5 text-xs font-mono text-cream-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between font-mono text-xs text-sand-400">
                      <span className="text-olive-300">● Air Conditioned VIP</span>
                      <a
                        href="#inquire"
                        className="inline-flex items-center gap-1.5 text-cream-100 hover:text-terracotta-400 transition-colors uppercase tracking-wider text-[11px]"
                      >
                        Inquire For Dates <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-full order-1 lg:order-2">
                  <div className="w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] h-full editorial-card relative group overflow-hidden">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-luxury group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bento-badge bg-black/60 text-cream-100 border-white/20">
                        {space.plate}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 z-10 text-cream-200 font-mono text-xs tracking-wider">
                      <span>{space.tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ========================================================================= */}
          {/* SPATIAL PLATE A-03: DEDICATED LUXURY BEDROOM SHOWCASE (ASYMMETRICAL GRID) */}
          {/* ========================================================================= */}
          <div id="bedrooms" className="pt-4 sm:pt-8">
            {/* Bedroom Showcase Header Banner */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#17100B] via-[#1A120D] to-[#140E0A] border border-white/15 shadow-2xl mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bento-badge bg-black/50 text-cream-100 border-white/20">
                      <BedDouble size={12} className="text-terracotta-400" />
                      Spatial Plate A-03 · Private Chambers Showcase
                    </span>
                    <span className="font-mono text-[10px] text-sand-400 uppercase tracking-widest hidden sm:inline">
                      Triple Suite Enclave
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream-50 font-normal tracking-tight">
                    The Private Chambers:{' '}
                    <span className="italic font-normal text-cream-200">Three Bespoke</span> Suites.
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-sand-300 font-light max-w-2xl leading-relaxed">
                    Designed for undisturbed slumber after sun-drenched afternoons. Each suite offers whisper-quiet split air conditioning, private en-suite amenities, and handcrafted wooden furnishings in an exclusive sole-occupancy wing.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-cream-200/90 pt-2 lg:pt-0">
                  <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <Wind size={13} className="text-terracotta-400" />
                    <span>Split Inverter AC</span>
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <VolumeX size={13} className="text-olive-400" />
                    <span>Acoustic Buffering</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Asymmetrical Bento Grid Highlighting the 3 Bedrooms */}
            <div className="grid grid-cols-12 gap-8 items-stretch">
              {/* SUITE 01: Dominant Featured Master Suite (7 Cols) */}
              <div className="col-span-12 lg:col-span-7 editorial-card bg-[#150F0A]/95 border border-white/15 flex flex-col justify-between overflow-hidden group shadow-luxury hover:border-terracotta-400/40 transition-all duration-500">
                {/* Visual Image Container with Real Photo */}
                <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden">
                  <img
                    src={bedroomSuites[0].image}
                    alt={bedroomSuites[0].title}
                    className="w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-luxury group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150F0A] via-transparent to-black/30 pointer-events-none" />

                  {/* Top Suite Badges */}
                  <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                    <span className="bento-badge bg-black/75 text-cream-100 border-white/25">
                      {bedroomSuites[0].badge}
                    </span>
                    <span className="font-mono text-[10px] text-olive-300 bg-olive-900/60 px-2.5 py-1 rounded-full border border-olive-500/30 backdrop-blur-sm">
                      {bedroomSuites[0].accent}
                    </span>
                  </div>

                  <div className="absolute top-5 right-5 z-10 font-mono text-[11px] text-cream-200 bg-black/60 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                    {bedroomSuites[0].size}
                  </div>

                  {/* Bottom Metric Chip */}
                  <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2 text-cream-200 font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-earth-950/80 backdrop-blur-md border border-white/20">
                      {bedroomSuites[0].capacity}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-terracotta-400 font-semibold block mb-1">
                      {bedroomSuites[0].tagline}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-cream-50 font-normal tracking-tight">
                      {bedroomSuites[0].title}
                    </h4>
                    <p className="mt-3 text-sm text-sand-300 font-light leading-relaxed">
                      {bedroomSuites[0].description}
                    </p>

                    {/* Detailed Specifications Checklist */}
                    <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {bedroomSuites[0].specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2 text-xs font-mono text-cream-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Feature Pills */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-sand-400">
                    <div className="flex gap-2">
                      {bedroomSuites[0].features.map((f) => (
                        <span key={f} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] text-cream-300/80">
                          {f}
                        </span>
                      ))}
                    </div>
                    <span className="text-olive-400 text-[11px]">● Attached Private Bath</span>
                  </div>
                </div>
              </div>

              {/* SUITE 02: Oasis Garden Suite (5 Cols) */}
              <div className="col-span-12 lg:col-span-5 editorial-card bg-[#150F0A]/95 border border-white/15 flex flex-col justify-between overflow-hidden group shadow-luxury hover:border-terracotta-400/40 transition-all duration-500">
                {/* Visual Image Container with High-Res Placeholder */}
                <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden">
                  <img
                    src={bedroomSuites[1].image}
                    alt={bedroomSuites[1].title}
                    className="w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-luxury group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150F0A] via-transparent to-black/30 pointer-events-none" />

                  {/* Top Suite Badges */}
                  <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                    <span className="bento-badge bg-black/75 text-cream-100 border-white/25">
                      {bedroomSuites[1].badge}
                    </span>
                  </div>

                  <div className="absolute top-5 right-5 z-10 font-mono text-[11px] text-cream-200 bg-black/60 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                    {bedroomSuites[1].size}
                  </div>

                  <div className="absolute bottom-5 left-5 z-10 text-cream-200 font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-earth-950/80 backdrop-blur-md border border-white/20">
                      {bedroomSuites[1].capacity}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-olive-400 font-semibold block mb-1">
                      {bedroomSuites[1].tagline}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-cream-50 font-normal tracking-tight">
                      {bedroomSuites[1].title}
                    </h4>
                    <p className="mt-3 text-sm text-sand-300 font-light leading-relaxed">
                      {bedroomSuites[1].description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                      {bedroomSuites[1].specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2 text-xs font-mono text-cream-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-olive-400 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-sand-400">
                    <span className="text-sand-300 text-[11px]">Courtyard Facing</span>
                    <span className="text-olive-400 text-[11px]">● Inverter AC</span>
                  </div>
                </div>
              </div>

              {/* SUITE 03: The Veranda Family Sanctuary (12 Cols Horizontal Split) */}
              <div className="col-span-12 editorial-card bg-[#150F0A]/95 border border-white/15 overflow-hidden group shadow-luxury hover:border-terracotta-400/40 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left Visual Plate (5 Cols) */}
                  <div className="col-span-12 lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] overflow-hidden">
                    <img
                      src={bedroomSuites[2].image}
                      alt={bedroomSuites[2].title}
                      className="w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-luxury group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-[#150F0A]/90 pointer-events-none" />

                    <div className="absolute top-5 left-5 z-10">
                      <span className="bento-badge bg-black/75 text-cream-100 border-white/25">
                        {bedroomSuites[2].badge}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2 font-mono text-xs text-cream-200">
                      <span className="px-3 py-1 rounded-full bg-earth-950/80 backdrop-blur-md border border-white/20">
                        {bedroomSuites[2].capacity}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-earth-950/80 backdrop-blur-md border border-white/20">
                        {bedroomSuites[2].size}
                      </span>
                    </div>
                  </div>

                  {/* Right Content Plate (7 Cols) */}
                  <div className="col-span-12 lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sand-400 font-semibold">
                          {bedroomSuites[2].tagline}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-terracotta-400 uppercase tracking-wider">
                          <DoorOpen size={13} /> Direct Exterior Walkout
                        </span>
                      </div>

                      <h4 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cream-50 font-normal tracking-tight">
                        {bedroomSuites[2].title}
                      </h4>

                      <p className="mt-3 text-sm sm:text-base text-sand-300 font-light leading-relaxed max-w-2xl">
                        {bedroomSuites[2].description}
                      </p>

                      <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {bedroomSuites[2].specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-2 text-xs font-mono text-cream-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-sand-400 shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-sand-400">
                      <div className="flex items-center gap-2">
                        {bedroomSuites[2].features.map((feat) => (
                          <span key={feat} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] text-cream-300">
                            {feat}
                          </span>
                        ))}
                      </div>
                      <a
                        href="#inquire"
                        className="inline-flex items-center gap-1.5 text-cream-100 hover:text-terracotta-400 transition-colors uppercase tracking-wider text-[11px]"
                      >
                        Reserve Triple Enclave <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bedroom Sanctuary Guarantee Bar */}
            <div className="mt-8 p-6 rounded-2xl bg-earth-950/60 border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-center text-sand-300">
              <div>
                <span className="text-sand-500 text-[10px] uppercase block tracking-wider">Total Sleeping</span>
                <span className="font-medium text-cream-100">Up to 10+ Guests</span>
              </div>
              <div>
                <span className="text-sand-500 text-[10px] uppercase block tracking-wider">Temperature</span>
                <span className="font-medium text-cream-100">100% Inverter AC</span>
              </div>
              <div>
                <span className="text-sand-500 text-[10px] uppercase block tracking-wider">Privacy</span>
                <span className="font-medium text-cream-100">Sole Occupancy Only</span>
              </div>
              <div>
                <span className="text-sand-500 text-[10px] uppercase block tracking-wider">Turn-Down</span>
                <span className="font-medium text-cream-100">Fresh Pressed Linens</span>
              </div>
            </div>
          </div>

          {/* Spatial Plate A-04: Midnight Pool Deck & Bar */}
          {(() => {
            const space = poolSpace;
            return (
              <div key={space.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                <div className="w-full flex order-2 lg:order-1">
                  <div className="w-full floating-plate p-8 sm:p-10 lg:p-12 shadow-luxury flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-olive-400 font-semibold">
                          {space.category}
                        </span>
                        <span className="font-mono text-[10px] text-sand-400 uppercase tracking-widest">
                          {space.capacity}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cream-50 font-normal tracking-tight leading-snug">
                        {space.title}
                      </h3>
                      <p className="mt-4 sm:mt-5 text-sm sm:text-base text-sand-300 font-light leading-relaxed">
                        {space.description}
                      </p>
                      <div className="mt-6 sm:mt-8 space-y-2">
                        {space.specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-2.5 text-xs font-mono text-cream-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between font-mono text-xs text-sand-400">
                      <span className="text-olive-300">● Star-Lit Swimming</span>
                      <a
                        href="#inquire"
                        className="inline-flex items-center gap-1.5 text-cream-100 hover:text-terracotta-400 transition-colors uppercase tracking-wider text-[11px]"
                      >
                        Inquire For Dates <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-full order-1 lg:order-2">
                  <div className="w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] h-full editorial-card relative group overflow-hidden">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-luxury group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bento-badge bg-black/60 text-cream-100 border-white/20">
                        {space.plate}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 z-10 text-cream-200 font-mono text-xs tracking-wider">
                      <span>{space.tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
