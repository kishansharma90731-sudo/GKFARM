import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Calendar, Users, Sparkles, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const WHATSAPP_PHONE = '917230939853';

export default function WhatsAppDrawer({ isOpen, onClose, selectedPackage, onSelectPackage, bookingData }) {
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  // Sync incoming bookingData from the Hero interactive widget
  useEffect(() => {
    if (bookingData) {
      if (bookingData.arrival) setArrivalDate(bookingData.arrival);
      if (bookingData.departure) setDepartureDate(bookingData.departure);
      if (bookingData.adults !== undefined) setAdultsCount(bookingData.adults);
      if (bookingData.children !== undefined) setChildrenCount(bookingData.children);
    }
  }, [bookingData]);

  const packageNames = {
    'entire-farmhouse': 'Entire Farmhouse Stay (₹4,000 / Night)',
    'overnight': 'Entire Farmhouse Stay (₹4,000 / Night)',
  };

  const totalGuests = adultsCount + childrenCount;

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const pkgText = packageNames[selectedPackage] || 'Stay Inquiry';
    
    let message = `Hi GK Resort! ✨\n\nI'd like to book:\n• Package: ${pkgText}\n• Name: ${name || 'Guest'}`;
    
    if (arrivalDate) {
      message += `\n• Arrival Date: ${arrivalDate}`;
    }
    if (departureDate) {
      message += `\n• Departure Date: ${departureDate}`;
    }
    
    message += `\n• Total Guests: ${totalGuests} (${adultsCount} Adults, ${childrenCount} Children)`;
    
    if (notes) {
      message += `\n• Notes: ${notes}`;
    }
    
    message += `\n\nPlease confirm availability. Thanks!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Sliding Drawer Container */}
      <div className="relative z-10 w-full max-w-lg h-full bg-obsidian-900 border-l border-white/15 text-cream-100 flex flex-col justify-between overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between bg-obsidian-950/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold-500/40 shadow-gold-glow bg-black shrink-0">
              <img
                src="/images/logo.jpg"
                alt="GK Resort Crest"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-cream-50 font-normal">
                Book on WhatsApp
              </h3>
              <span className="font-mono text-[10px] text-gold-400/90 tracking-widest uppercase block">
                We reply within minutes
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-cream-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Body Form */}
        <form onSubmit={handleSendWhatsApp} className="p-6 sm:p-8 space-y-6 flex-1">
          {/* Single Experience Card: Entire Farmhouse Stay */}
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-sand-400 block mb-2.5">
              Your Stay
            </label>
            <div className="p-4 rounded-xl bg-gold-500/15 border border-gold-400 text-cream-50 shadow-gold-glow flex items-center justify-between">
              <div>
                <div className="font-serif text-lg font-medium text-cream-50">
                  Entire Farmhouse Stay
                </div>
                <div className="font-mono text-[10px] text-sand-300 mt-0.5">
                  Overnight Stay · 3 Bedrooms · Private Property
                </div>
              </div>
              <div className="text-right">
                <span className="font-serif text-xl font-medium text-gold-300 block">
                  ₹4,000
                </span>
                <span className="font-mono text-[9px] text-sand-400">/ Night</span>
              </div>
            </div>
          </div>

          {/* Dates Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-sand-400 block mb-1.5 flex items-center gap-1.5">
                <Calendar size={12} className="text-gold-400" /> Arrival Date
              </label>
              <input
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/15 text-sm font-sans text-cream-100 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-sand-400 block mb-1.5 flex items-center gap-1.5">
                <Calendar size={12} className="text-gold-400" /> Departure Date
              </label>
              <input
                type="date"
                value={departureDate}
                min={arrivalDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/15 text-sm font-sans text-cream-100 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>
          </div>

          {/* Guest Counters Summary */}
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-sand-400 block mb-1.5 flex items-center gap-1.5">
              <Users size={12} className="text-gold-400" /> Guests: {totalGuests} Total ({adultsCount} Adults, {childrenCount} Children)
            </label>
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-obsidian-950/90 border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs text-sand-300">Adults (13+)</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={adultsCount <= 1}
                    onClick={() => setAdultsCount((p) => Math.max(1, p - 1))}
                    className="w-7 h-7 rounded bg-white/10 text-cream-50 flex items-center justify-center font-bold disabled:opacity-30"
                  >
                    −
                  </button>
                  <span className="font-mono font-semibold text-sm w-5 text-center">{adultsCount}</span>
                  <button
                    type="button"
                    disabled={adultsCount >= 40}
                    onClick={() => setAdultsCount((p) => Math.min(40, p + 1))}
                    className="w-7 h-7 rounded bg-white/10 text-cream-50 flex items-center justify-center font-bold disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between border-l border-white/10 pl-3">
                <span className="text-xs text-sand-300">Children</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={childrenCount <= 0}
                    onClick={() => setChildrenCount((p) => Math.max(0, p - 1))}
                    className="w-7 h-7 rounded bg-white/10 text-cream-50 flex items-center justify-center font-bold disabled:opacity-30"
                  >
                    −
                  </button>
                  <span className="font-mono font-semibold text-sm w-5 text-center">{childrenCount}</span>
                  <button
                    type="button"
                    disabled={childrenCount >= 20}
                    onClick={() => setChildrenCount((p) => Math.min(20, p + 1))}
                    className="w-7 h-7 rounded bg-white/10 text-cream-50 flex items-center justify-center font-bold disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Guest Name */}
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-sand-400 block mb-1.5">
              Guest Name
            </label>
            <input
              type="text"
              placeholder="e.g. Vikramaditya Rathore"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/15 text-sm font-sans text-cream-100 placeholder:text-sand-600 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-sand-400 block mb-1.5">
              Special Requests
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Birthday celebration, early check-in, barbecue setup..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/15 text-sm font-sans text-cream-100 placeholder:text-sand-600 focus:outline-none focus:border-gold-500 transition-colors resize-none"
            />
          </div>

          {/* Instant WhatsApp Action CTA */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white font-mono text-xs uppercase tracking-widest font-semibold hover:opacity-95 transition-all shadow-lg flex items-center justify-center gap-2.5 transform active:scale-[0.99]"
          >
            <MessageCircle size={17} />
            <span>Send Booking on WhatsApp →</span>
          </button>

          <p className="font-mono text-[10px] text-center text-sand-400 leading-normal">
            We reply within minutes. You can also call us directly at +91 7230939853.
          </p>
        </form>

        {/* Drawer Footer Contact Bar */}
        <div className="p-6 border-t border-white/10 bg-obsidian-950/80 flex items-center justify-between text-xs font-mono text-sand-300">
          <a
            href="tel:+917230939853"
            className="flex items-center gap-2 hover:text-gold-400 transition-colors"
          >
            <Phone size={13} className="text-gold-400" />
            <span>Call: +91 7230939853</span>
          </a>
          <span className="text-olive-400">● Private Property</span>
        </div>
      </div>
    </div>
  );
}
