import { Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    quote:
      "The most serene and beautiful property. The pool under the starlit sky was absolutely magical. We didn't want to leave.",
    name: 'Priya S.',
  },
  {
    quote:
      'Perfect for our family gathering. The lawns, the lounge, the terrace — every space felt like it was designed for us.',
    name: 'Rahul M.',
  },
  {
    quote:
      'An oasis of calm. The attention to detail and warmth of the hosts made it unforgettable.',
    name: 'Ananya K.',
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className="fill-terracotta-500 text-terracotta-500"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-spacing section-padding bg-cream-100"
    >
      <SectionHeading
        subtitle="Guest Voices"
        title="What They Say"
        align="left"
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="border border-sand-200/60 p-8 md:p-10 bg-cream-50/50"
          >
            <Stars />

            <p className="font-display text-lg italic text-earth-800 leading-relaxed mt-4">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="mt-6">
              <p className="font-body text-sm font-medium text-earth-900">
                {t.name}
              </p>
              <p className="text-xs text-sand-500 mt-0.5">Guest</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
