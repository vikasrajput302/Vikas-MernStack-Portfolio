import { GraduationCap, Briefcase, Award, CheckCircle2, BookOpen } from 'lucide-react';

export default function Experience() {
  return (
    <section
      id="education"
      className="relative py-36 md:py-48 bg-black border-t border-white/10"
    >
      {/* Anchor for experience link */}
      <div id="experience" className="absolute -top-20" />

      <div className="watermark top-1/2 -translate-y-1/2 right-4">PATH</div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-20">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
              04 // EDUCATION & EXPERIENCE
            </span>
            <div className="h-px w-24 bg-white/20" />
          </div>

          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
            ACADEMIC CREDENTIALS & HANDS-ON TRAINING
          </span>
        </div>

        {/* Two Grand Cards: Education First, then Industrial Training */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Card 1: Education (BCA) */}
          <div className="glass-card rounded-2xl border border-white/20 bg-neutral-950 p-8 sm:p-12 flex flex-col justify-between transition-all hover:border-white/40">
            <div className="space-y-8">
              <div className="flex items-start justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl border border-white/15 bg-neutral-900 flex items-center justify-center text-white shrink-0">
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">
                      Undergraduate Degree
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                      Bachelor of Computer Applications
                    </h3>
                  </div>
                </div>

                <span className="font-mono text-xs text-black bg-white font-bold px-3.5 py-1.5 rounded-full shrink-0">
                  2027
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed sm:leading-loose font-body">
                  Completed Bachelor of Computer Applications (BCA) with rigorous foundational
                  training in Computer Science, Data Structures & Algorithms, Object-Oriented
                  Architecture, and Modern Web Systems.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 font-mono text-xs text-neutral-300">
                  {[
                    'Core Data Structures & Algorithms',
                    'Object-Oriented Programming (Java/C++)',
                    'Database Management Systems (DBMS)',
                    'Full Stack Web Architecture',
                  ].map((subject, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-900 border border-white/5"
                    >
                      <CheckCircle2 size={14} className="text-white shrink-0" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <BookOpen size={13} className="text-white" />
                STATUS: COMPLETED IN 2027
              </span>
              <span className="text-white font-semibold">VERIFIED GRADUATION</span>
            </div>
          </div>

          {/* Card 2: Industrial Training (Novem Controls) */}
          <div className="glass-card rounded-2xl border border-white/20 bg-neutral-950 p-8 sm:p-12 flex flex-col justify-between transition-all hover:border-white/40">
            <div className="space-y-8">
              <div className="flex items-start justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl border border-white/15 bg-neutral-900 flex items-center justify-center text-white shrink-0">
                    <Briefcase size={26} />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">
                      Industrial Experience
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                      MERN Stack Developer Training
                    </h3>
                  </div>
                </div>

                <span className="font-mono text-xs text-neutral-300 border border-white/20 px-3.5 py-1.5 rounded-full shrink-0">
                  1 Month
                </span>
              </div>

              <div className="space-y-4">
                <p className="font-mono text-xs text-neutral-400">
                  ORGANIZATION: <span className="text-white font-medium">Novem Controls Pvt. Ltd.</span>
                </p>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed sm:leading-loose font-body">
                  Engineered production-grade responsive UI components and collaborated
                  on real-world client web applications. Focused on component lifecycle,
                  state synchronization, API integration, and performance optimization.
                </p>

                <div className="flex flex-wrap gap-2.5 pt-3">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git Flow'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-neutral-400">
              <span className="flex items-center gap-2">
                <Award size={14} className="text-white" />
                INDUSTRY VALIDATION
              </span>
              <span className="text-white font-semibold">CERTIFIED TRAINING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
