import { MARQUEE_ITEMS } from '../data/portfolioData';

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-black py-4 select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-neutral-400 uppercase font-medium">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
