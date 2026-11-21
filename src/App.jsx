import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CinematicHero from './components/sections/CinematicHero';
import TheVibe from './components/sections/TheVibe';
import PrivateHabitats from './components/sections/PrivateHabitats';
import InteractiveAmenities from './components/sections/InteractiveAmenities';
import CuratedPackages from './components/sections/CuratedPackages';
import LocationStories from './components/sections/LocationStories';
import WhatsAppDrawer from './components/ui/WhatsAppDrawer';
import { MessageCircle } from 'lucide-react';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('overnight');
  const [bookingData, setBookingData] = useState(null);

  const handleOpenInquiry = (pkgId = 'overnight', data = null) => {
    setSelectedPackage(pkgId);
    if (data) {
      setBookingData(data);
    }
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-cream-100 selection:bg-gold-500/30 selection:text-gold-200">
      {/* Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content */}
      <main className="bg-obsidian-950">
        {/* Hero Section */}
        <CinematicHero onOpenInquiry={handleOpenInquiry} />

        {/* About Section */}
        <TheVibe onOpenInquiry={handleOpenInquiry} />

        {/* Rooms Section */}
        <PrivateHabitats onOpenInquiry={handleOpenInquiry} />

        {/* Amenities Section */}
        <InteractiveAmenities onOpenInquiry={handleOpenInquiry} />

        {/* Pricing Section */}
        <CuratedPackages onSelectPackage={handleOpenInquiry} />

        {/* Location & Reviews */}
        <LocationStories onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* WhatsApp Booking */}
      <WhatsAppDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        selectedPackage={selectedPackage}
        onSelectPackage={(id) => setSelectedPackage(id)}
        bookingData={bookingData}
      />

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenInquiry(selectedPackage)}
          className="group relative flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white font-mono text-xs uppercase tracking-widest font-semibold shadow-2xl hover:shadow-gold-glow transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/40"
          aria-label="Book via WhatsApp"
        >
          {/* Pulse animation */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-50" />

          <MessageCircle size={17} className="relative z-10" />
          <span className="relative z-10 hidden sm:inline">Book via WhatsApp</span>
          <span className="relative z-10 sm:hidden">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

export default App;
