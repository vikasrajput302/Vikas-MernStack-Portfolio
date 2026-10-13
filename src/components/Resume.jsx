import { ExternalLink, Download, FileText, CheckCircle2, Eye, Award } from 'lucide-react';
import { PERSONAL } from '../data/portfolioData';

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-36 md:py-48 bg-black border-t border-white/10 overflow-hidden"
    >
      <div className="watermark top-1/2 -translate-y-1/2 left-4">RESUME</div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-20">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
              05 // OFFICIAL RESUME
            </span>
            <div className="h-px w-24 bg-white/20" />
          </div>

          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
            VERIFIED CREDENTIALS & CURRICULUM VITAE
          </span>
        </div>

        {/* Grand Resume Card with Spacious Padding */}
        <div className="glass-card rounded-2xl border border-white/20 bg-neutral-950 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Visual Resume Preview Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <a
                href={PERSONAL.resumeImage}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full max-w-sm rounded-xl overflow-hidden border border-white/25 bg-neutral-900 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white"
                data-cursor-hover
                title="Click to view full-size resume in new tab"
              >
                {/* Resume Image Sheet */}
                <div className="relative aspect-[1/1.414] overflow-hidden bg-white">
                  <img
                    src={PERSONAL.resumeImage}
                    alt="Vikas Resume Document"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 font-mono text-xs text-white p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                      <Eye size={20} />
                    </div>
                    <span className="tracking-wider uppercase font-bold text-sm">
                      Open Full Size
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      Click to inspect full document
                    </span>
                  </div>
                </div>

                {/* Card Sub-bar */}
                <div className="p-4 bg-neutral-950 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <FileText size={13} className="text-white" />
                    A4 RESUME SHEET
                  </span>
                  <span className="text-white font-medium">BCA 2027</span>
                </div>
              </a>
            </div>

            {/* Right Column: Title, Information, Summary & Two Action Buttons */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-neutral-900 font-mono text-xs text-neutral-300 uppercase tracking-widest">
                <Award size={14} className="text-white" />
                <span>Curriculum Vitae Document</span>
              </div>

              <div>
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Vikas
                </h3>
                <p className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest mt-2">
                  Creative Frontend & Full Stack MERN Developer
                </p>
              </div>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-body">
                Official resume outlining technical competencies in the MERN stack (React.js, Node.js, Express.js, MongoDB),
                academic completion of Bachelor of Computer Applications (BCA, 2027), hands-on industrial training
                at Novem Controls Pvt. Ltd., and verified production projects.
              </p>

              {/* Core Resume Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'BCA (Completed in 2027)',
                  'MERN Industrial Training (Novem Controls)',
                  'Frontend: React, Tailwind CSS, GSAP',
                  'Backend: Node.js, Express, REST APIs',
                  'Languages: JavaScript, C++, C, Java',
                  'Location: Panipat, Haryana, India',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 font-mono text-xs text-neutral-300 bg-neutral-900 p-2.5 rounded-lg border border-white/5"
                  >
                    <CheckCircle2 size={14} className="text-white shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Two Buttons: Left = Open in New Tab, Right = Download */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-white/10">
                {/* Left Button: Open in New Tab */}
                <a
                  href={PERSONAL.resumeImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-monochrome inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-xs font-mono tracking-wider uppercase font-bold w-full sm:w-auto text-center"
                  data-cursor-hover
                >
                  <ExternalLink size={16} />
                  <span>Open in New Tab</span>
                </a>

                {/* Right Button: Download Resume */}
                <a
                  href={PERSONAL.resumeImage}
                  download="Vikas_Resume.png"
                  className="btn-outline inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-xs font-mono tracking-wider uppercase font-semibold w-full sm:w-auto text-center"
                  data-cursor-hover
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
