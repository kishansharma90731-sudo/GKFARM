import { Waves, TreePine, Sofa, Sun, PartyPopper, UtensilsCrossed } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const amenities = [
  {
    icon: Waves,
    title: 'Private Pool',
    description:
      'Temperature-controlled pool with ambient lighting for day and evening swims.',
  },
  {
    icon: TreePine,
    title: 'Manicured Lawns',
    description:
      'Expansive green spaces perfect for leisure, yoga, or intimate gatherings.',
  },
  {
    icon: Sofa,
    title: 'Luxury Lounge',
    description:
      'Elegantly appointed indoor spaces with plush seating and modern comforts.',
  },
  {
    icon: Sun,
    title: 'Rooftop Terrace',
    description:
      'Open-air terrace with panoramic views and warm ambient lighting.',
  },
  {
    icon: PartyPopper,
    title: 'Event Hosting',
    description:
      'A bespoke venue for celebrations, from intimate dinners to grand festivities.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Outdoor Dining',
    description:
      'Al fresco dining spaces designed for memorable meals under the stars.',
  },
];

const colSpans = [
  'col-span-12 md:col-span-5',
  'col-span-12 md:col-span-4',
  'col-span-12 md:col-span-3',
  'col-span-12 md:col-span-3',
  'col-span-12 md:col-span-5',
  'col-span-12 md:col-span-4',
];

function AmenityCard({ icon: Icon, title, description, index }) {
  return (
    <div className={colSpans[index]}>
      <div className="bg-cream-100 p-8 border border-sand-200/60 h-full transition-transform duration-300 ease-out hover:-translate-y-1 transform-gpu shadow-none hover:shadow-sm">
        <Icon strokeWidth={1} size={28} className="text-terracotta-500" />
        <h3 className="font-display text-xl text-earth-900 mt-4">{title}</h3>
        <p className="text-sm text-sand-600 font-light leading-relaxed mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Amenities() {
  return (
    <section id="amenities" className="bg-cream-50 section-spacing section-padding">
      <SectionHeading
        subtitle="What Awaits"
        title="Curated Experiences"
        align="left"
      />

      <div className="mt-14 grid grid-cols-12 gap-6">
        {amenities.map((amenity, i) => (
          <AmenityCard key={amenity.title} {...amenity} index={i} />
        ))}
      </div>
    </section>
  );
}
