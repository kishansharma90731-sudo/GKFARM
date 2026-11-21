import { useState, useRef } from 'react';
import { Calendar, Users, ArrowRight, ShieldCheck, Phone, ChevronDown } from 'lucide-react';

export default function CinematicHero({ onOpenInquiry }) {
  // Dates default to today and tomorrow
  const todayStr = new Date().toISOString().split('T')[0];
  const defaultTomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [arrival, setArrival] = useState(todayStr);
  const [departure, setDeparture] = useState(defaultTomorrow);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  const arrivalRef = useRef(null);
  const departureRef = useRef(null);

  const totalGuests = adults + children;
  const guestSummaryText = `${adults} Adult${adults !== 1 ? 's' : ''}${
    children > 0 ? `, ${children} Child${children !== 1 ? 'ren' : ''}` : ''
  }`;

  const triggerArrivalPicker = () => {
    try {
      if (arrivalRef.current?.showPicker) {
        arrivalRef.current.showPicker();
      } else {
        arrivalRef.current?.focus();
      }
    } catch (e) {
      arrivalRef.current?.focus();
    }
  };

  const triggerDeparturePicker = () => {
    try {
      if (departureRef.current?.showPicker) {
        departureRef.current.showPicker();
      } else {
        departureRef.current?.focus();
      }
    } catch (e) {
      departureRef.current?.focus();
    }
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    setIsGuestsOpen(false);

    const bookingPayload = {
      arrival,
      departure,
      adults,
      children,
      totalGuests,
      package: 'overnight',
    };

    if (onOpenInquiry) {
      onOpenInquiry('overnight', bookingPayload);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between items-center bg-obsidian-950 m-0 p-0 overflow-x-clip"
    >
      {/* Immersive Full-Screen Visual Background Bleeding to Viewport Edges */}
      <img
        src="/images/hero-pool.jpg"
        alt="GK Resort luxury starlit swimming pool and farmhouse grounds"
        className="absolute inset-0 w-full h-full object-cover transform-gpu scale-[1.02] transition-transform duration-1000 ease-out pointer-events-none"
        loading="eager"
        decoding="async"
      />

      {/* Cinematic Dark Gradient Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/50 to-obsidian-950/70 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      {/* Smooth Bottom Feather into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-obsidian-950 to-transparent pointer-events-none z-10" />

      {/* Center-Aligned Massive Cinematic Headline */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-32 sm:pt-36 md:pt-40 pb-8 flex-1 flex flex-col justify-center items-center text-center">
        {/* Minimalist Eyebrow Badge with Royal Micro Crest */}
        <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-gold-500/30 shadow-gold-glow">
          <div className="w-6 h-6 rounded-full overflow-hidden border border-gold-500/50 bg-black shrink-0">
            <img
              src="/images/logo.jpg"
              alt="GK Crest"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-gold-300 font-medium">
            GK Resort · Private Farmhouse · Rajasthan
          </span>
        </div>

        {/* Monumental Headline */}
        <h1 className="font-serif text-[clamp(2.4rem,5.5vw,5.5rem)] font-light text-cream-50 tracking-tight leading-[1.02] max-w-4xl text-balance">
          Your Own Private <br />
          Farmhouse <span className="italic font-normal text-gold-gradient">Under the Stars.</span>
        </h1>

        {/* Descriptive Storyline */}
        <p className="mt-5 sm:mt-6 text-[clamp(0.9rem,1.2vw,1.15rem)] font-light text-cream-200/90 leading-relaxed max-w-2xl text-balance drop-shadow-md">
          A 5,000+ sq. ft. private farmhouse — just for you and your group. Green lawns, a private pool, open skies, and no other guests on the property.
        </p>

        {/* Direct Action Badges */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenInquiry && onOpenInquiry('overnight')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-300 text-obsidian-950 font-mono text-xs uppercase tracking-widest font-semibold hover:shadow-gold-glow transition-all duration-300 shadow-xl hover:scale-105"
          >
            <span>Book Your Stay</span>
            <ArrowRight size={14} />
          </button>

          <a
            href="tel:+917230939853"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur-md text-cream-100 border border-white/20 font-mono text-xs uppercase tracking-widest hover:bg-white/15 transition-colors"
          >
            <Phone size={13} className="text-gold-400" />
            <span>+91 7230939853</span>
          </a>
        </div>
      </div>

      {/* Interactive Booking Widget with Arrival, Departure, Guests Counter & Book Now Button */}
      <div className="relative z-30 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28 lg:pb-32">
        <form
          onSubmit={handleBookNow}
          className="relative p-2.5 sm:p-3.5 rounded-2xl sm:rounded-3xl bg-obsidian-900/95 backdrop-blur-2xl border border-gold-500/40 shadow-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 sm:gap-3"
        >
          {/* Arrival Date Field with Functional Calendar Trigger */}
          <div
            onClick={triggerArrivalPicker}
            className="relative flex-1 px-4 py-2.5 border-b md:border-b-0 md:border-r border-white/10 cursor-pointer group hover:bg-white/5 rounded-xl transition-colors"
          >
            <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-400 font-medium flex items-center justify-between gap-1.5 mb-1 cursor-pointer">
              <span className="flex items-center gap-1.5">
                <Calendar size={11} className="text-gold-400" />
                <span>Arrival Date</span>
              </span>
              <span className="text-[10px] text-sand-400 font-normal sm:hidden">Tap to pick</span>
            </label>
            <div className="flex items-center justify-between">
              <input
                ref={arrivalRef}
                type="date"
                required
                value={arrival}
                min={todayStr}
                onClick={(e) => {
                  try {
                    e.target.showPicker();
                  } catch (err) {}
                }}
                onChange={(e) => {
                  setArrival(e.target.value);
                  if (departure && e.target.value >= departure) {
                    const nextDay = new Date(new Date(e.target.value).getTime() + 86400000)
                      .toISOString()
                      .split('T')[0];
                    setDeparture(nextDay);
                  }
                }}
                className="w-full bg-transparent font-serif text-base sm:text-lg text-cream-50 focus:outline-none cursor-pointer tracking-tight"
              />
            </div>
          </div>

          {/* Departure Date Field with Functional Calendar Trigger */}
          <div
            onClick={triggerDeparturePicker}
            className="relative flex-1 px-4 py-2.5 border-b md:border-b-0 md:border-r border-white/10 cursor-pointer group hover:bg-white/5 rounded-xl transition-colors"
          >
            <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-400 font-medium flex items-center justify-between gap-1.5 mb-1 cursor-pointer">
              <span className="flex items-center gap-1.5">
                <Calendar size={11} className="text-gold-400" />
                <span>Departure Date</span>
              </span>
              <span className="text-[10px] text-sand-400 font-normal sm:hidden">Tap to pick</span>
            </label>
            <div className="flex items-center justify-between">
              <input
                ref={departureRef}
                type="date"
                required
                value={departure}
                min={arrival || todayStr}
                onClick={(e) => {
                  try {
                    e.target.showPicker();
                  } catch (err) {}
                }}
                onChange={(e) => setDeparture(e.target.value)}
                className="w-full bg-transparent font-serif text-base sm:text-lg text-cream-50 focus:outline-none cursor-pointer tracking-tight"
              />
            </div>
          </div>

          {/* Guests Dropdown / Popup Field (Re-anchored BENEATH the button) */}
          <div className="relative flex-1 px-4 py-2.5 border-b md:border-b-0 md:border-r border-white/10">
            <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-400 font-medium flex items-center gap-1.5 mb-1">
              <Users size={11} className="text-gold-400" />
              <span>Guests</span>
            </label>
            <button
              type="button"
              onClick={() => setIsGuestsOpen(!isGuestsOpen)}
              className="w-full text-left font-serif text-base sm:text-lg text-cream-50 flex items-center justify-between gap-2 focus:outline-none cursor-pointer tracking-tight truncate hover:text-gold-300 transition-colors"
            >
              <span className="truncate">{guestSummaryText}</span>
              <ChevronDown
                size={15}
                className={`text-gold-400 transition-transform duration-200 shrink-0 ${
                  isGuestsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Interactive Popover Aligned BENEATH the button with Opaque High-Contrast Background */}
            {isGuestsOpen && (
              <>
                {/* Backdrop dismiss */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsGuestsOpen(false)}
                />

                {/* Floating Popover Card Anchored Beneath the button */}
                <div className="absolute top-full mt-3 right-0 sm:left-0 md:left-auto md:right-0 w-[310px] sm:w-[330px] rounded-2xl bg-[#0D0906] border border-gold-500/60 p-5 shadow-2xl z-50 text-cream-100">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/15">
                    <div>
                      <h4 className="font-serif text-lg text-cream-50 font-normal">Select Guests</h4>
                      <span className="font-mono text-[10px] text-sand-400">
                        The whole property is yours
                      </span>
                    </div>
                    <span className="font-mono text-xs text-gold-400 font-semibold bg-gold-500/15 px-2.5 py-1 rounded-full border border-gold-500/30">
                      {totalGuests} Total
                    </span>
                  </div>

                  {/* Adults Counter */}
                  <div className="flex items-center justify-between py-2.5 border-b border-white/10">
                    <div>
                      <div className="font-serif text-base text-cream-100 font-medium">Adults</div>
                      <div className="font-mono text-[10px] text-sand-400">Ages 13+</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        disabled={adults <= 1}
                        onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                        className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gold-500 hover:text-obsidian-950 disabled:opacity-30 disabled:hover:bg-white/10 disabled:hover:text-cream-50 disabled:cursor-not-allowed text-cream-50 flex items-center justify-center font-mono font-bold transition-all text-sm border border-white/15"
                        aria-label="Decrease Adults"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="40"
                        value={adults}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          setAdults(isNaN(val) ? 1 : Math.max(1, Math.min(40, val)));
                        }}
                        className="w-12 text-center bg-black/60 border border-white/20 rounded-lg py-1 font-mono text-cream-50 text-sm font-semibold focus:outline-none focus:border-gold-500"
                      />
                      <button
                        type="button"
                        disabled={adults >= 40}
                        onClick={() => setAdults((prev) => Math.min(40, prev + 1))}
                        className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gold-500 hover:text-obsidian-950 disabled:opacity-30 disabled:hover:bg-white/10 disabled:hover:text-cream-50 disabled:cursor-not-allowed text-cream-50 flex items-center justify-center font-mono font-bold transition-all text-sm border border-white/15"
                        aria-label="Increase Adults"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children Counter */}
                  <div className="flex items-center justify-between py-2.5">
                    <div>
                      <div className="font-serif text-base text-cream-100 font-medium">Children</div>
                      <div className="font-mono text-[10px] text-sand-400">Ages 0–12</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        disabled={children <= 0}
                        onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                        className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gold-500 hover:text-obsidian-950 disabled:opacity-30 disabled:hover:bg-white/10 disabled:hover:text-cream-50 disabled:cursor-not-allowed text-cream-50 flex items-center justify-center font-mono font-bold transition-all text-sm border border-white/15"
                        aria-label="Decrease Children"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value={children}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          setChildren(isNaN(val) ? 0 : Math.max(0, Math.min(20, val)));
                        }}
                        className="w-12 text-center bg-black/60 border border-white/20 rounded-lg py-1 font-mono text-cream-50 text-sm font-semibold focus:outline-none focus:border-gold-500"
                      />
                      <button
                        type="button"
                        disabled={children >= 20}
                        onClick={() => setChildren((prev) => Math.min(20, prev + 1))}
                        className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gold-500 hover:text-obsidian-950 disabled:opacity-30 disabled:hover:bg-white/10 disabled:hover:text-cream-50 disabled:cursor-not-allowed text-cream-50 flex items-center justify-center font-mono font-bold transition-all text-sm border border-white/15"
                        aria-label="Increase Children"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Popover Footer */}
                  <div className="pt-3 mt-3 border-t border-white/15 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-sand-400">
                      {totalGuests > 10 ? 'Extra beds can be arranged' : 'All rooms are yours'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsGuestsOpen(false)}
                      className="px-4 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-mono text-xs uppercase font-semibold tracking-wider transition-colors shadow-md"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Prominent 'Book Now' Button */}
          <div className="px-1 py-1 shrink-0">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-300 hover:from-gold-400 hover:to-amber-200 text-obsidian-950 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Book Now</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        {/* Minimalist Micro Bar */}
        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-sand-400/90 px-2">
          <span className="flex items-center gap-1.5 text-olive-300">
            <ShieldCheck size={13} /> Entire Property — Just Your Group
          </span>
          <span className="hidden sm:inline">26.9124° N, 75.7873° E · Rajasthan</span>
          <span className="text-gold-400">Call Us: +91 7230939853</span>
        </div>
      </div>
    </section>
  );
}
