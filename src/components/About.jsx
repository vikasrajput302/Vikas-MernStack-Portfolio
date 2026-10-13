import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL } from '../data/portfolioData';
import Terminal from './Terminal';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.about-reveal-block');
    if (!items || items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { y: 35, opacity: 0.1 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-36 md:py-48 bg-black border-t border-white/10"
    >
      <div className="watermark top-10 right-4">ABOUT</div>

      <div className="container-custom relative z-10">
        {/* Section Tag */}
        <div className="about-reveal-block flex items-center gap-5 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
            02 // BACKGROUND & PHILOSOPHY
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Main Statement */}
          <div className="about-reveal-block lg:col-span-6 space-y-8">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Engineering with precision, designing with restraint.
            </h2>

            <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed sm:leading-loose font-body">
              {PERSONAL.about}
            </p>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed sm:leading-loose font-body">
              I believe in building software that doesn't just work, but feels
              intentional. From architecting scalable backend REST endpoints to
              fine-tuning millisecond animations with GSAP and React, every
              layer gets the same obsessively high standard.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pt-6">
              {[
                { label: 'Primary Focus', val: 'MERN' },
                { label: 'Degree', val: 'BCA 2027' },
                { label: 'Experience', val: 'Training' },
                { label: 'Location', val: 'Panipat' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-neutral-950 flex flex-col justify-center"
                >
                  <p className="font-heading text-2xl font-bold text-white mb-1.5">
                    {item.val}
                  </p>
                  <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Interactive Terminal */}
          <div className="about-reveal-block lg:col-span-6">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
