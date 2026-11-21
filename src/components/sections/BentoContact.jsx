import { useState } from 'react';
import { Phone, MapPin, Instagram, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const GOOGLE_MAPS_URL =
  'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x396db900573f91ed:0x3dfafe63d05e867c?entry=s&sa=X&ved=2ahUKEwiHzuOskZaYAxVaRmwGHf1fPQ0Q4kB6BAgWEAA&hl=en';

export default function BentoContact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '10-25',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="inquire" className="relative bg-gradient-to-b from-[#0D0906] via-[#140E0A] to-[#0A0705] py-24 sm:py-32 text-cream-100">
      <div className="section-padding max-w-content mx-auto">
        {/* Editorial Header */}
        <div className="mb-14 sm:mb-20 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-olive-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-sand-400 font-medium">
              Concierge Atelier · Private Reservations
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-serif text-display-xl font-light text-cream-50 tracking-tight leading-[0.96]">
                Secure the <span className="italic font-normal text-cream-200">Grounds</span> for Your Circle.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <p className="font-sans text-sm font-light text-sand-300 leading-relaxed max-w-md ml-auto">
                Due to sole-occupancy private rental policy, dates are reserved on a strictly first-confirmed basis.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Overlapping Atelier Grid */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-8 items-start">
          {/* Left: Architectural Map Plate (7 cols) */}
          <div className="col-span-12 lg:col-span-7 editorial-card min-h-[500px] sm:min-h-[600px] relative overflow-hidden flex flex-col justify-between p-6 sm:p-10">
            {/* Map iframe with subtle luxury grayscale */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.82512683884!2d75.8!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db900573f91ed%3A0x3dfafe63d05e867c!2sGK%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              title="GK Resort Exact Location Map"
              className="absolute inset-0 w-full h-full border-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700 opacity-80"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Top Plate Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="bento-badge shadow-sm bg-black/60 text-cream-100 border-white/20">
                <MapPin size={11} className="text-terracotta-400" />
                Cartography Plate 05
              </span>
              <span className="font-mono text-[10px] text-cream-200 bg-black/60 px-3 py-1 rounded-full border border-white/15 backdrop-blur-sm hidden sm:inline">
                26.9124° N, 75.7873° E
              </span>
            </div>

            {/* Overlapping Floating Destination Card at Map Bottom */}
            <div className="relative z-10 max-w-md rounded-2xl bg-[#19120C]/95 backdrop-blur-md p-6 sm:p-7 border border-white/15 shadow-luxury mt-auto text-cream-100">
              <span className="font-mono text-[10px] text-terracotta-400 uppercase tracking-widest block font-semibold">
                Exact Farmhouse Location
              </span>
              <h3 className="font-serif text-2xl text-cream-50 font-normal mt-1">
                GK Resort, Rajasthan
              </h3>
              <p className="text-xs text-sand-300 mt-1.5 leading-relaxed">
                Quiet countryside acreage just minutes away from major transport arteries. Easy drive from central hubs.
              </p>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cream-100 text-earth-950 font-mono text-xs uppercase tracking-widest font-semibold hover:bg-cream-200 transition-colors w-full shadow-sm"
              >
                Open in Google Maps Application
                <ArrowUpRight size={14} className="text-terracotta-600" />
              </a>
            </div>
          </div>

          {/* Right: Concierge Booking Slate (5 cols) */}
          <div className="col-span-12 lg:col-span-5 floating-plate p-7 sm:p-10 shadow-luxury flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-olive-400 font-semibold">
                  Direct Atelier
                </span>
                <span className="font-mono text-[10px] text-sand-400 uppercase tracking-widest">
                  Host Line
                </span>
              </div>

              <h3 className="font-serif text-3xl text-cream-50 font-normal tracking-tight">
                Direct Host Connect
              </h3>

              {/* Quick Touchpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                <a
                  href="tel:+917230939853"
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-terracotta-400 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-black/40 text-cream-100 flex items-center justify-center border border-white/10">
                    <Phone size={14} className="text-terracotta-400" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-sand-400 uppercase block">Phone</span>
                    <span className="font-mono text-xs font-semibold text-cream-100 group-hover:text-terracotta-400">
                      7230939853
                    </span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/gk_resort_67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-terracotta-400 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-black/40 text-cream-100 flex items-center justify-center border border-white/10">
                    <Instagram size={14} className="text-terracotta-400" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-sand-400 uppercase block">Social</span>
                    <span className="font-mono text-xs font-semibold text-cream-100 group-hover:text-terracotta-400">
                      @gk_resort_67
                    </span>
                  </div>
                </a>
              </div>

              <div className="divider-organic my-6" />

              {/* Reservation Form */}
              {submitted ? (
                <div className="p-8 rounded-2xl bg-olive-500/10 border border-olive-500/30 text-center">
                  <CheckCircle2 size={36} className="text-olive-400 mx-auto mb-3" />
                  <h4 className="font-serif text-2xl text-cream-50 font-normal">
                    Inquiry Dispatched
                  </h4>
                  <p className="text-xs text-sand-300 mt-2 font-light leading-relaxed">
                    Thank you, <span className="font-medium text-cream-100">{form.name}</span>. The estate property host will reach you directly at{' '}
                    <span className="font-semibold text-cream-100">{form.phone}</span> to confirm date availability and arrange your private visit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 font-mono text-xs text-cream-200 underline hover:text-terracotta-400"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-wider text-sand-400 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Rathore"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-sm font-sans text-cream-100 placeholder:text-sand-500 focus:outline-none focus:border-terracotta-400 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-wider text-sand-400 block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-sm font-sans text-cream-100 placeholder:text-sand-500 focus:outline-none focus:border-terracotta-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-wider text-sand-400 block mb-1">
                        Group Size
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#140E0A] border border-white/15 text-sm font-sans text-cream-100 focus:outline-none focus:border-terracotta-400 transition-colors"
                      >
                        <option value="1-10">1 – 10 Guests</option>
                        <option value="10-25">10 – 25 Guests</option>
                        <option value="25-50">25 – 50 Guests</option>
                        <option value="50+">50+ Large Gathering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-wider text-sand-400 block mb-1">
                      Occasion / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention event dates, swimming pool access, barbecue, or party details..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-sm font-sans text-cream-100 placeholder:text-sand-500 focus:outline-none focus:border-terracotta-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-cream-100 text-earth-950 font-mono text-xs uppercase tracking-widest font-semibold hover:bg-cream-200 transition-colors shadow-sm"
                  >
                    Send Reservation Request →
                  </button>
                </form>
              )}
            </div>

            <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-sand-400">
              <span className="flex items-center gap-1.5 text-olive-400 font-medium">
                <ShieldCheck size={14} /> 100% Sole Occupancy
              </span>
              <span>+91 7230939853</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
