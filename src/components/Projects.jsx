import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ArrowUpRight, X, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Github } from './Icons';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.project-card-wrapper');
    if (!items || items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { y: 40, opacity: 0.1 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
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
      id="projects"
      className="relative py-36 md:py-48 bg-black border-t border-white/10"
    >
      <div className="watermark top-1/2 -translate-y-1/2 right-4">WORK</div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-20">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
              01 // SELECTED PRODUCTIONS
            </span>
            <div className="h-px w-24 bg-white/20" />
          </div>

          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
            CLICK CARD TO OPEN LIVE VERCEL DEMO
          </span>
        </div>

        {/* Projects Grid: 2 Large High-Impact Cards with Generous Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={() => setActiveModalProject(project)}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-heading text-lg font-bold text-white">
              More open-source repositories on GitHub
            </h4>
            <p className="font-mono text-xs text-neutral-400 mt-1">
              Check out experiments, utilities, and daily code commits.
            </p>
          </div>

          <a
            href="https://github.com/vikasrajput302"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-6 py-3 rounded-full font-mono text-xs uppercase tracking-wider inline-flex items-center gap-2 shrink-0"
            data-cursor-hover
          >
            <Github size={16} />
            github.com/vikasrajput302
          </a>
        </div>
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="glass-card rounded-2xl border border-white/20 bg-neutral-950 max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white transition-all"
              data-cursor-hover
            >
              <X size={18} />
            </button>

            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                  DEEP SPECIFICATION // {activeModalProject.year}
                </span>
                <h3 className="font-heading text-3xl font-black text-white mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="font-mono text-xs text-neutral-400 mt-1 uppercase tracking-wider">
                  {activeModalProject.subtitle}
                </p>
              </div>

              <p className="text-neutral-300 text-base leading-relaxed font-body">
                {activeModalProject.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers size={14} className="text-white" />
                  Key Architecture Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Full CRUD Functionality',
                    'Zero Runtime Memory Leaks',
                    'Mobile & Desktop Responsive',
                    'Asynchronous Data Handling',
                  ].map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 font-mono text-xs text-neutral-300 bg-neutral-900 p-2.5 rounded-lg border border-white/5"
                    >
                      <CheckCircle2 size={14} className="text-white shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Technology Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
                <a
                  href={activeModalProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-monochrome py-3.5 rounded-xl text-center font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  data-cursor-hover
                >
                  <ExternalLink size={15} />
                  <span>Launch Live App</span>
                </a>

                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline py-3.5 rounded-xl text-center font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  data-cursor-hover
                >
                  <Github size={15} />
                  <span>Browse Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, index, onOpenModal }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleCardClick = (e) => {
    // If click was on button, modal trigger, or link, let that element handle it
    if (e.target.closest('button') || e.target.closest('a')) {
      return;
    }
    window.open(project.live, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      className="project-card-wrapper tilt-card-container group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="tilt-card-inner glass-card rounded-2xl border border-white/15 bg-neutral-950 p-8 sm:p-12 flex flex-col justify-between h-full relative overflow-hidden"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* Top Meta Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3.5">
              <span className="font-mono text-xs text-neutral-400">
                0{index + 1} //
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-white">
                {project.role}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal();
              }}
              className="font-mono text-[11px] text-neutral-400 hover:text-white px-3 py-1.5 border border-white/10 hover:border-white/30 rounded transition-colors"
              title="Inspect specifications"
              data-cursor-hover
            >
              Specs
            </button>
          </div>

          {/* Interactive Project Title & Direct Live Link */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="block group/link"
            data-cursor-hover
            title="Click to view live Vercel project"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white group-hover/link:underline decoration-white/40 underline-offset-4 transition-all">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mt-1.5">
                  {project.subtitle}
                </p>
              </div>
              <div className="w-11 h-11 rounded-full border border-white/20 bg-neutral-900 flex items-center justify-center shrink-0 group-hover/link:bg-white group-hover/link:text-black transition-colors duration-300">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </a>

          {/* Description */}
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed sm:leading-loose font-body">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions: Two Explicit Buttons for Live and GitHub */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-white/10">
          {/* Live Vercel Button */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-monochrome py-3.5 px-5 rounded-xl text-center font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 font-bold w-full"
            data-cursor-hover
          >
            <ExternalLink size={15} />
            <span>Live Demo</span>
          </a>

          {/* GitHub Repo Button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-outline py-3.5 px-5 rounded-xl text-center font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 font-medium w-full"
            data-cursor-hover
          >
            <Github size={15} />
            <span>GitHub Repo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
