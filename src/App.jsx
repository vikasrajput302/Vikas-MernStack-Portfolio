import { useState, useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import NoiseOverlay from './components/NoiseOverlay';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import DeveloperStats from './components/DeveloperStats';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <MinimalLoader />;
  }

  return (
    <SmoothScroll>
      <NoiseOverlay />
      <CustomCursor />
      <Navbar />
      <main className="bg-black text-white selection:bg-white selection:text-black">
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Resume />
        <DeveloperStats />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

function MinimalLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">
      <div className="font-heading text-6xl font-black tracking-tighter mb-4 animate-pulse">
        V.
      </div>
      <div className="w-24 h-[1px] bg-white/20 overflow-hidden">
        <div className="w-full h-full bg-white animate-[marquee_1s_ease-in-out_infinite]" />
      </div>
      <p className="font-mono text-[10px] text-neutral-400 mt-4 tracking-[0.3em] uppercase">
        INITIALIZING
      </p>
    </div>
  );
}
