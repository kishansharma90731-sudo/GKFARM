import { Phone, MapPin, Instagram, ArrowUpRight, MessageCircle } from 'lucide-react';

const GOOGLE_MAPS_URL =
  'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x396db900573f91ed:0x3dfafe63d05e867c?entry=s&sa=X&ved=2ahUKEwiHzuOskZaYAxVaRmwGHf1fPQ0Q4kB6BAgWEAA&hl=en';

export default function Footer({ onOpenInquiry }) {
  return (
    <footer className="bg-obsidian-950 text-cream-200 pt-20 pb-12 border-t border-white/10 m-0">
      <div className="section-padding max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-gold-500/30 shadow-gold-glow bg-black shrink-0">
                <img
                  src="/images/logo.jpg"
                  alt="GK Resort Insignia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl text-cream-50 font-normal tracking-tight">
                  GK Resort
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-400 mt-0.5">
                  Boutique Farmhouse · Rajasthan
                </span>
              </div>
            </div>

            <p className="text-sm text-sand-300 font-light max-w-sm leading-relaxed">
              A private luxury farmhouse in Rajasthan — perfect for family getaways, celebrations, and quiet weekends away from the city.
            </p>

            <div className="pt-2 font-mono text-xs text-sand-400 space-y-1">
              <div>Coordinates: 26.9124° N, 75.7873° E · Rajasthan</div>
              <div className="text-gold-400">Entire Property — Just Your Group</div>
            </div>
          </div>

          {/* Quick Nav Col (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-sans font-light text-sand-300">
              <li>
                <a href="#hero" className="hover:text-gold-300 transition-colors">
                  01. Home
                </a>
              </li>
              <li>
                <a href="#the-vibe" className="hover:text-gold-300 transition-colors">
                  02. The Vibe
                </a>
              </li>
              <li>
                <a href="#habitats" className="hover:text-gold-300 transition-colors">
                  03. Private Habitats
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-gold-300 transition-colors">
                  04. Amenities
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-gold-300 transition-colors">
                  05. Pricing
                </a>
              </li>
              <li>
                <a href="#coordinates" className="hover:text-gold-300 transition-colors">
                  06. Location & Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Atelier Col (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold-400">
              Book Your Stay
            </h4>

            <div className="space-y-3 text-sm">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('overnight')}
                className="w-full p-3.5 rounded-xl bg-gold-500/15 border border-gold-500/40 hover:bg-gold-500 hover:text-obsidian-950 text-gold-300 font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle size={15} />
                <span>Book on WhatsApp</span>
              </button>

              <a
                href="tel:+917230939853"
                className="flex items-center gap-2.5 text-cream-100 hover:text-gold-400 transition-colors pt-2"
              >
                <Phone size={14} className="text-gold-400" />
                <span>+91 7230939853 (Direct Call)</span>
              </a>

              <a
                href="https://instagram.com/gk_resort_67"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sand-300 hover:text-gold-400 transition-colors"
              >
                <Instagram size={14} className="text-gold-400" />
                <span>Instagram: @gk_resort_67</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sand-300 hover:text-gold-400 transition-colors"
              >
                <MapPin size={14} className="text-gold-400" />
                <span>View on Google Maps</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-sand-500">
          <div>
            © {new Date().getFullYear()} GK Resort. Private Luxury Farmhouse.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sand-400">Rajasthan, India</span>
            <span>•</span>
            <a href="#hero" className="text-cream-200 hover:text-gold-400 transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
