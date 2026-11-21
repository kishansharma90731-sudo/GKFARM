import ImageFrame from '../ui/ImageFrame';
import SectionHeading from '../ui/SectionHeading';

const images = [
  {
    src: '/images/hero-pool.jpg',
    alt: 'Pool at GK Resort',
    label: 'The Pool',
    className: 'col-span-12 md:col-span-7 row-span-2',
    aspect: 'aspect-auto',
  },
  {
    src: '/images/farmhouse-exterior.jpg',
    alt: 'Farmhouse exterior',
    label: 'The Farmhouse',
    className: 'col-span-12 md:col-span-5 row-span-1',
    aspect: 'aspect-auto',
  },
  {
    src: '/images/lounge-interior.jpg',
    alt: 'Lounge interior',
    label: 'The Lounge',
    className: 'col-span-12 md:col-span-5 row-span-1',
    aspect: 'aspect-auto',
  },
  {
    src: '/images/rooftop-terrace.jpg',
    alt: 'Rooftop terrace',
    label: 'The Terrace',
    className: 'col-span-12 md:col-span-4 row-span-1',
    aspect: 'aspect-auto',
  },
  {
    src: '/images/pool-bar.jpg',
    alt: 'Pool bar area',
    label: 'The Bar',
    className: 'col-span-12 md:col-span-8 row-span-1',
    aspect: 'aspect-auto',
  },
];

function GalleryItem({ src, alt, label, className, aspect }) {
  return (
    <div className={`overflow-hidden relative group ${className}`}>
      <ImageFrame
        src={src}
        alt={alt}
        aspect={aspect}
        className="w-full h-full"
      />

      {/* Pure CSS label overlay — 0 JS re-renders */}
      <span className="absolute bottom-4 left-4 bg-earth-900/85 text-cream-100 text-xs px-3 py-1.5 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="section-spacing section-padding">
      <SectionHeading
        subtitle="Visual Journey"
        title="Spaces That Speak"
        align="left"
      />

      <div className="mt-14 grid grid-cols-12 auto-rows-[260px] md:auto-rows-[300px] gap-4">
        {images.map((img) => (
          <GalleryItem key={img.src} {...img} />
        ))}
      </div>

      <p className="font-display text-display-sm text-earth-700/50 italic mt-14 text-center">
        Every corner tells a story
      </p>
    </section>
  );
}
