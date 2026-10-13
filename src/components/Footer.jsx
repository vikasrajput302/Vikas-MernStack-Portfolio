import { ArrowUp } from 'lucide-react';
import { PERSONAL } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-heading font-black text-xl tracking-tight">
            VIKAS.
          </span>
          <span className="font-mono text-xs text-neutral-400">
            © {year} ALL RIGHTS RESERVED
          </span>
        </div>

        <div className="font-mono text-xs text-neutral-400 text-center">
          ENGINEERED WITH REACT, JAVASCRIPT & MONOCHROME PRECISION
        </div>

        <button
          onClick={scrollToTop}
          className="btn-outline px-4 py-2 rounded-full font-mono text-xs inline-flex items-center gap-2"
          data-cursor-hover
        >
          <span>Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
