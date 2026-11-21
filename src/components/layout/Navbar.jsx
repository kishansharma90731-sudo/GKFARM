import { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles } from 'lucide-react';

const navItems = [
  { label: '01. About', href: '#the-vibe' },
  { label: '02. Rooms', href: '#habitats' },
  { label: '03. Amenities', href: '#amenities' },
  { label: '04. Pricing', href: '#packages' },
  { label: '05. Location', href: '#coordinates' },
];

export default function Navbar({ onOpenInquiry }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 py-3.5 sm:py-4 bg-obsidian-950/75 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo / Brand signature */}
          <a href="#" className="flex items-center gap-3 sm:gap-3.5 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-gold-500/40 shadow-gold-glow bg-black shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/logo.jpg"
                alt="GK Resort Official Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-cream-50 group-hover:text-gold-300 transition-colors">
                GK Resort
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-400/90 mt-1">
                Boutique Farmhouse · Rajasthan
              </span>
            </div>
          </a>

          {/* Center Minimalist Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 rounded-full font-mono text-[11px] font-medium uppercase tracking-wider text-sand-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Trigger Buttons */}
          <div className="flex items-center gap-3">
            {/* Private Property Badge */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-gold-300 font-medium">
                Sole Occupancy
              </span>
            </div>

            {/* Direct WhatsApp Concierge CTA */}
            <button
              onClick={() => onOpenInquiry && onOpenInquiry('overnight')}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-gold-glow"
            >
              <MessageCircle size={13} />
              <span>Book Now</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 border border-white/15 text-cream-100"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian-950/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden text-cream-100">
          <div className="space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-sand-400 block">
              Menu
            </span>
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-3xl text-cream-100 hover:text-gold-400 transition-colors"
                >
                  {item.label.replace(/^\d+\.\s*/, '')}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileOpen(false);
                if (onOpenInquiry) onOpenInquiry('overnight');
              }}
              className="w-full py-4 rounded-xl bg-gold-500 text-obsidian-950 font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              Book on WhatsApp
            </button>

            <a
              href="tel:+917230939853"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/10 text-cream-100 font-mono text-xs uppercase tracking-widest font-semibold border border-white/15"
            >
              <Phone size={13} className="text-gold-400" />
              Direct Call: +91 7230939853
            </a>
          </div>
        </div>
      )}
    </>
  );
}
