import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS } from '../data/portfolioData';
import { Code2, Server, Terminal as TermIcon, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.skills-grid-item');
    if (!items || items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { y: 35, opacity: 0.1 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, sectionRef);

    // Bulletproof safeguard: ensures cards are 100% visible even if ScrollTrigger is delayed
    const timer = setTimeout(() => {
      if (items) {
        gsap.set(items, { clearProps: 'all' });
      }
    }, 600);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const categoryIcons = [Code2, Server, TermIcon, Wrench];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-36 md:py-48 bg-black border-t border-white/10"
    >
      <div className="watermark top-1/2 -translate-y-1/2 left-4">STACK</div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-20">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
              03 // TECHNICAL ARSENAL
            </span>
            <div className="h-px w-24 bg-white/20" />
          </div>

          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
            CORE STACK & PRODUCTION TOOLING
          </span>
        </div>

        {/* Skills Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {SKILLS.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length] || Code2;
            return (
              <div
                key={cat.category}
                className="skills-grid-item glass-card rounded-2xl p-8 sm:p-10 lg:p-12 border border-white/10 bg-neutral-950 flex flex-col justify-between transition-all hover:border-white/30"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl border border-white/15 bg-neutral-900 flex items-center justify-center text-white shrink-0">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                        {cat.category}
                      </h3>
                    </div>

                    <span className="font-mono text-xs text-neutral-400 px-2.5 py-1 rounded bg-neutral-900 border border-white/5">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-4 py-2.5 rounded-full border border-white/10 bg-neutral-900 text-neutral-300 hover:border-white hover:text-black hover:bg-white transition-all duration-200 cursor-default"
                        data-cursor-hover
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                  <span>INDEXED ITEMS</span>
                  <span className="text-white font-medium">{cat.skills.length} TECHNOLOGIES</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
