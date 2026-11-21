import { Star, Quote, Award } from 'lucide-react';

const stories = [
  {
    quote:
      'The most serene and beautiful property. The pool under the starlit sky was absolutely magical. We celebrated my husband’s 40th birthday here and didn’t want the weekend to end.',
    author: 'Priya S.',
    location: 'Jaipur, Rajasthan',
    occasion: 'Private Birthday Gathering',
    highlight: 'Magic Under the Stars',
  },
  {
    quote:
      'Perfect for our multi-generation family reunion. The expansive lawn, the air-conditioned salon, and the three private bedroom suites gave everyone their own space to unwind and connect in total privacy.',
    author: 'Rahul M.',
    location: 'Delhi NCR',
    occasion: 'Annual Family Reunion',
    highlight: 'Sole-Occupancy Perfection',
  },
  {
    quote:
      'An oasis of calm just outside the city rush. The attention to detail, crystal clear pool waters, and warmth of the on-site team made it unforgettable. We have already rebooked for winter.',
    author: 'Ananya K.',
    location: 'Jaipur, Rajasthan',
    occasion: 'Weekend Relaxation Escape',
    highlight: 'Impeccable Care',
  },
];

export default function BentoStories() {
  return (
    <section id="stories" className="relative bg-[#0D0906] py-24 sm:py-32 text-cream-100">
      <div className="section-padding max-w-content mx-auto">
        {/* Editorial Header */}
        <div className="mb-14 sm:mb-20 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-olive-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-sand-400 font-medium">
              Guest Chronicles · Verified Impressions
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-serif text-display-xl font-light text-cream-50 tracking-tight leading-[0.96]">
                Whispers from the <span className="italic font-normal text-cream-200">Grounds.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/15 shadow-sm">
                <div className="flex gap-0.5 text-terracotta-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
                <span className="font-mono text-xs text-cream-100 font-medium">
                  4.9 / 5.0 Verified Rating
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetric Magazine Review Bento */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {stories.map((story, i) => (
            <div
              key={story.author}
              className={`col-span-12 md:col-span-4 editorial-card p-8 sm:p-9 flex flex-col justify-between ${
                i === 1 ? 'bg-[#1D150E] border-white/20 md:-translate-y-3' : 'bg-[#16100B]/90'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-terracotta-400 font-semibold">
                    {story.highlight}
                  </span>
                  <Quote size={18} className="text-sand-500" />
                </div>

                <p className="font-serif text-xl sm:text-2xl italic text-cream-100 font-light leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-cream-50">
                      {story.author}
                    </h3>
                    <span className="font-mono text-[11px] text-sand-400 block">
                      {story.location}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-olive-300 bg-olive-500/15 px-2.5 py-1 rounded-full border border-olive-500/25">
                    {story.occasion}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
