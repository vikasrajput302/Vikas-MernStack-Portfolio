import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { PERSONAL } from '../data/portfolioData';
import { Github, Linkedin, Twitter, Instagram, Discord } from './Icons';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending & trigger celebratory confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#ffffff', '#a1a1aa', '#52525b'],
      });

      // Construct mailto link as direct action
      const mailtoUrl = `mailto:${PERSONAL.email}?subject=Portfolio Inquiry from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, '_blank');

      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }, 700);
  };

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.contact-reveal-block');
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

  const socials = [
    { label: 'GitHub', href: PERSONAL.socials.github, icon: Github },
    { label: 'LinkedIn', href: PERSONAL.socials.linkedin, icon: Linkedin },
    { label: 'Twitter / X', href: PERSONAL.socials.twitter, icon: Twitter },
    { label: 'Instagram', href: PERSONAL.socials.instagram, icon: Instagram },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-36 md:py-48 bg-black border-t border-white/10"
    >
      <div className="watermark bottom-4 left-1/2 -translate-x-1/2">CONNECT</div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="contact-reveal-block flex items-center gap-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
            06 // INITIATE DIALOGUE
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column: Direct Info & Socials */}
          <div className="contact-reveal-block lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Let's build something enduring.
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mt-4 font-body">
                Available for engineering full stack applications, custom frontend
                development, freelance contracts, or technical collaboration.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Email Button */}
              <button
                onClick={() => copyToClipboard(PERSONAL.email, 'email')}
                className="w-full text-left p-5 rounded-xl border border-white/15 bg-neutral-950 hover:bg-neutral-900 transition-colors group flex items-center justify-between"
                data-cursor-hover
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg border border-white/10 bg-neutral-900 flex items-center justify-center text-white">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                      Email Address
                    </p>
                    <p className="font-mono text-xs sm:text-sm text-white group-hover:underline">
                      {PERSONAL.email}
                    </p>
                  </div>
                </div>

                <div className="font-mono text-xs text-neutral-400 flex items-center gap-1.5">
                  {copied === 'email' ? (
                    <>
                      <Check size={14} className="text-white" />
                      <span className="text-white">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </div>
              </button>

              {/* Phone Button */}
              <button
                onClick={() => copyToClipboard(PERSONAL.phone, 'phone')}
                className="w-full text-left p-5 rounded-xl border border-white/15 bg-neutral-950 hover:bg-neutral-900 transition-colors group flex items-center justify-between"
                data-cursor-hover
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg border border-white/10 bg-neutral-900 flex items-center justify-center text-white">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                      Direct Phone
                    </p>
                    <p className="font-mono text-xs sm:text-sm text-white group-hover:underline">
                      {PERSONAL.phone}
                    </p>
                  </div>
                </div>

                <div className="font-mono text-xs text-neutral-400 flex items-center gap-1.5">
                  {copied === 'phone' ? (
                    <>
                      <Check size={14} className="text-white" />
                      <span className="text-white">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </div>
              </button>

              {/* Location Card */}
              <div className="p-5 rounded-xl border border-white/15 bg-neutral-950 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg border border-white/10 bg-neutral-900 flex items-center justify-center text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="font-mono text-xs sm:text-sm text-white">
                    {PERSONAL.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-4 border-t border-white/10">
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-4">
                Digital Presence:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline px-4 py-2 rounded-full font-mono text-xs inline-flex items-center gap-2"
                    data-cursor-hover
                  >
                    <Icon size={14} />
                    <span>{label}</span>
                    <ArrowUpRight size={12} className="opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="contact-reveal-block lg:col-span-7">
            <div className="glass-card rounded-2xl border border-white/15 bg-neutral-950 p-8 sm:p-12 lg:p-14">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="font-mono text-xs text-neutral-400 mb-8">
                DIRECT INBOX TRANSMISSION // RESPONDS WITHIN 24 HOURS
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-neutral-900 text-white font-mono text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white focus:bg-neutral-800 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-neutral-900 text-white font-mono text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white focus:bg-neutral-800 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-400">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project, timeline, or scope..."
                    className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-neutral-900 text-white font-mono text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white focus:bg-neutral-800 transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-monochrome py-4 rounded-xl font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 font-bold cursor-pointer"
                  data-cursor-hover
                >
                  {isSubmitting ? (
                    <span>Dispatching...</span>
                  ) : isSent ? (
                    <span className="flex items-center gap-2">
                      <Check size={16} /> Message Prepared & Sent
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
