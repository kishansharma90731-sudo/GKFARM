import { Star, Quote, MapPin, Phone, Instagram, ArrowUpRight, Compass } from 'lucide-react';

const GOOGLE_MAPS_URL =
  'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x396db900573f91ed:0x3dfafe63d05e867c?entry=s&sa=X&ved=2ahUKEwiHzuOskZaYAxVaRmwGHf1fPQ0Q4kB6BAgWEAA&hl=en';

const stories = [
  {
    quote:
      'The most peaceful place we\'ve stayed in Rajasthan. Swimming at night with no one else around felt like having our own private world.',
    author: 'Priya Sharma',
    location: 'Jaipur, Rajasthan',
    occasion: 'Family Birthday',
    rating: 5,
  },
  {
    quote:
      'Perfect for our family reunion. Three separate AC bedrooms, a big lawn, and a covered veranda — everyone had their own space, and we could still be together.',
    author: 'Rahul Mathur',
    location: 'Delhi NCR',
    occasion: 'Family Reunion',
    rating: 5,
  },
  {
    quote:
      'Loved the freedom here. They set up a barbecue on the lawn, the pool was spotless, and booking over WhatsApp took two minutes.',
    author: 'Ananya Kapoor',
    location: 'Jaipur, Rajasthan',
    occasion: 'Weekend Getaway',
    rating: 5,
  },
];

export default function LocationStories({ onOpenInquiry }) {
  return (
    <section id="coordinates" className="relative bg-obsidian-950 py-24 sm:py-32 lg:py-40 text-cream-100">
      <div className="section-padding max-w-content mx-auto">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">
                04 / Location & Reviews
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2.4rem,4.5vw,4.5rem)] font-light text-cream-50 tracking-tight leading-[1.02]">
              What Our Guests <span className="italic font-normal text-gold-gradient">Say About Us.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="flex text-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="currentColor" />
              ))}
            </div>
            <span className="font-mono text-xs text-cream-100 font-medium">
              4.9 / 5.0 from Verified Guests
            </span>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {stories.map((s, idx) => (
            <div
              key={s.author}
              className={`boutique-card p-8 flex flex-col justify-between ${
                idx === 1 ? 'border-gold-500/40 bg-[#16100B]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold-400">
                    {s.occasion}
                  </span>
                  <Quote size={18} className="text-sand-500" />
                </div>

                <p className="font-serif text-lg sm:text-xl italic text-cream-100 font-light leading-relaxed">
                  &ldquo;{s.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-sm font-semibold text-cream-50">{s.author}</h4>
                  <span className="font-mono text-[11px] text-sand-400">{s.location}</span>
                </div>
                <span className="font-mono text-[10px] text-olive-300 bg-olive-950/60 px-2.5 py-1 rounded-full border border-olive-500/30">
                  Verified Stay
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Cartography Map Plate */}
        <div className="rounded-3xl bg-obsidian-850/90 border border-white/15 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Map Embed (7 Cols) */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.82512683884!2d75.8!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db900573f91ed%3A0x3dfafe63d05e867c!2sGK%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              title="GK Resort Exact Location Map"
              className="absolute inset-0 w-full h-full border-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700 opacity-80"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-5 left-5 z-10">
              <span className="gold-badge bg-black/70 text-gold-300 border-gold-500/40">
                <MapPin size={11} className="text-gold-400" />
                GK Resort Location
              </span>
            </div>
          </div>

          {/* Location Touchpoints (5 Cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-obsidian-900 border-t lg:border-t-0 lg:border-l border-white/10">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-1">
                Getting Here
              </span>
              <h3 className="font-serif text-3xl text-cream-50 font-normal">
                GK Resort, Rajasthan
              </h3>
              <p className="mt-3 text-sm text-sand-300 font-light leading-relaxed">
                Located in the peaceful countryside, just a short drive from the main road. Private parking available on the property.
              </p>

              {/* Quick Contact Points */}
              <div className="mt-6 space-y-3 font-mono text-xs">
                <a
                  href="tel:+917230939853"
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/50 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-gold-400" />
                    <span className="text-cream-100 group-hover:text-gold-300 font-medium">
                      +91 7230939853
                    </span>
                  </div>
                  <span className="text-sand-400 text-[11px]">Direct Call →</span>
                </a>

                <a
                  href="https://instagram.com/gk_resort_67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/50 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Instagram size={14} className="text-gold-400" />
                    <span className="text-cream-100 group-hover:text-gold-300 font-medium">
                      @gk_resort_67
                    </span>
                  </div>
                  <span className="text-sand-400 text-[11px]">Instagram →</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>Navigate via Google Maps</span>
                <ArrowUpRight size={14} />
              </a>

              <div className="flex items-center justify-between text-[11px] font-mono text-sand-400">
                <span>GPS Coordinates</span>
                <span className="text-cream-200">26.9124° N, 75.7873° E</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
