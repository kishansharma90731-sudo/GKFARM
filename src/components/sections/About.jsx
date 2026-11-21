import ImageFrame from '../ui/ImageFrame';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const stats = [
  { number: '5000+', label: 'Sq. Ft. of Luxury' },
  { number: '4.9', label: 'Guest Rating' },
  { number: '100%', label: 'Private Estate' },
];

export default function About() {
  return (
    <section id="retreat" className="section-spacing section-padding">
      {/* Main grid — asymmetric 7 / 5 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
        {/* Left — image, 7 cols */}
        <div className="lg:col-span-7">
          <ImageFrame
            src="/images/farmhouse-exterior.jpg"
            alt="GK Resort farmhouse exterior"
            aspect="aspect-[3/4] md:aspect-[4/5]"
            priority
          />
        </div>

        {/* Right — text, 5 cols */}
        <div className="lg:col-span-5">
          <SectionHeading
            subtitle="The Retreat"
            title="A Sanctuary of Calm"
          />

          <div className="divider-organic mt-6 mb-6" />

          <p className="text-base font-light leading-relaxed text-sand-600">
            Nestled in the quiet countryside of Rajasthan, GK Resort is a luxury
            farmhouse where modern comforts weave seamlessly into rustic charm.
            Expansive manicured lawns stretch beneath open skies, while a private
            pool catches the light from dawn to dusk — a place designed not just
            for staying, but for belonging.
          </p>

          <p className="mt-5 text-base font-light leading-relaxed text-sand-600">
            Every space has been thoughtfully composed: sunlit verandas for slow
            mornings, intimate lounges for evening conversations, and terraces
            that frame the landscape like a living painting. Here, luxury is not
            loud — it is felt.
          </p>

          <div className="mt-8">
            <Button variant="outline" href="#amenities">
              Discover More
            </Button>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mt-20 md:mt-28 pt-14 border-t border-sand-200/60">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-8 max-w-4xl">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-display-sm text-earth-900">
                {stat.number}
              </span>
              <span className="mt-2 text-[11px] font-medium tracking-[0.2em] uppercase text-sand-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
