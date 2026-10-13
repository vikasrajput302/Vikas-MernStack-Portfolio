import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { PERSONAL } from '../data/portfolioData';
import { Github, Linkedin, Twitter } from './Icons';
import ThreeCanvas from './ThreeCanvas';

export default function Hero() {
  const heroRef = useRef(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    // Current IST Time formatter
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-meta-badge', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
      })
        .from(
          '.hero-headline-line',
          {
            y: 70,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
          },
          '-=0.5'
        )
        .from(
          '.hero-subtext',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.6'
        )
        .from(
          '.hero-cta-btn',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          '-=0.5'
        )
        .from(
          '.hero-profile-box',
          {
            scale: 0.92,
            opacity: 0,
            duration: 1.1,
            ease: 'power2.out',
          },
          '-=0.8'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-40 md:pt-48 pb-28 md:pb-36 overflow-hidden bg-black"
    >
      {/* Background Watermark */}
      <div className="watermark top-1/3 -left-10 md:left-4">VIKAS</div>

      <div className="container-custom relative z-10">
        {/* Top Info Bar */}
        <div className="hero-meta-badge flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-8 mb-16">
          <div className="flex items-center gap-3.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">
              {PERSONAL.status}
            </span>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 font-mono text-xs text-neutral-400">
            <span>{PERSONAL.location}</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="hidden sm:inline-block">
              IST {time || '12:00:00'}
            </span>
            <span className="hidden lg:inline-block">•</span>
            <span className="hidden lg:inline-block">{PERSONAL.coordinates}</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-14 items-center">
          {/* Left Column: Big Typography & Actions */}
          <div className="lg:col-span-7 space-y-10">
            <div className="overflow-hidden space-y-3">
              <h1 className="hero-headline-line font-heading text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.98] text-white">
                CREATIVE
              </h1>
              <h1 className="hero-headline-line font-heading text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.98] text-neutral-400">
                DEVELOPER
              </h1>
              <h1 className="hero-headline-line font-heading text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.98] text-white flex items-center gap-4">
                & BUILDER
                <span className="font-mono text-xs md:text-sm font-normal text-neutral-400 px-3.5 py-1.5 border border-white/20 rounded-full tracking-widest align-middle">
                  BCA 2027
                </span>
              </h1>
            </div>

            <p className="hero-subtext text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed sm:leading-loose font-body">
              Hi, I'm <strong className="text-white font-medium">Vikas</strong>.
              I craft clean, uncompromising web interfaces and full stack
              architectures using React, JavaScript, Node.js, and modern animation
              engines.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 pt-3">
              <a
                href="#projects"
                className="hero-cta-btn btn-monochrome inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase font-bold"
                data-cursor-hover
              >
                Selected Work
                <ArrowDownRight size={16} />
              </a>
              <a
                href="#contact"
                className="hero-cta-btn btn-outline inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase"
                data-cursor-hover
              >
                Get In Touch
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Socials & Tech Tags */}
            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                Connect:
              </span>
              <div className="flex items-center gap-6">
                <a
                  href={PERSONAL.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                  data-cursor-hover
                >
                  <Github size={18} />
                </a>
                <a
                  href={PERSONAL.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                  data-cursor-hover
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={PERSONAL.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                  data-cursor-hover
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Canvas & Profile Image Container */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="hero-profile-box relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Interactive 3D Wireframe Canvas in Background */}
              <div className="absolute -top-16 -right-16 w-56 h-56 sm:w-64 sm:h-64 pointer-events-auto opacity-70 z-0">
                <ThreeCanvas />
              </div>

              {/* Framed B&W Image Card */}
              <div className="relative z-10 glass-card rounded-2xl p-3 border border-white/15 bg-neutral-950/80 backdrop-blur-xl">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                  <img
                    src={PERSONAL.photo}
                    alt={PERSONAL.name}
                    className="w-full h-full object-cover photo-monochrome"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Floating Caption inside frame */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-neutral-300">
                    <span className="tracking-widest uppercase">VIKAS // DEV</span>
                    <span className="text-neutral-400">PANIPAT, IN</span>
                  </div>
                </div>

                <div className="mt-3 px-2 py-1 flex items-center justify-between font-mono text-xs text-neutral-400">
                  <span>MERN STACK</span>
                  <span className="text-white">● LIVE ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
