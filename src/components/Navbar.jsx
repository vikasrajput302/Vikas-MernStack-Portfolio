import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, PERSONAL } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      e.preventDefault();
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -70, duration: 1.1 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      try {
        window.history.pushState(null, '', href);
      } catch {
        // ignore
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass py-4 sm:py-5 shadow-2xl shadow-black/80'
            : 'bg-transparent py-6 sm:py-8 md:py-10'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3.5 group"
            data-cursor-hover
          >
            <span className="font-heading text-xl md:text-2xl font-black tracking-tight text-white group-hover:opacity-80 transition-opacity">
              VIKAS
            </span>
            <span className="font-mono text-[10px] tracking-widest text-neutral-400 border border-white/10 px-2.5 py-1 rounded uppercase hidden sm:inline-block">
              DEV // 2027
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-400 hover:text-white transition-colors duration-200"
                data-cursor-hover
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Top Right "Hire Me" Button + Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-monochrome inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-mono tracking-wider uppercase font-semibold"
              data-cursor-hover
            >
              <span>Hire Me</span>
              <ArrowUpRight size={13} className="shrink-0" />
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-neutral-300 hover:text-white p-2 border border-white/10 rounded-lg transition-colors"
              aria-label="Toggle Navigation"
              data-cursor-hover
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-heading text-3xl font-bold tracking-tight text-neutral-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-monochrome w-full py-4 rounded-xl text-center font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2 font-bold"
            >
              Hire Me
              <ArrowUpRight size={16} />
            </a>
            <p className="font-mono text-xs text-neutral-400 text-center">
              {PERSONAL.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
