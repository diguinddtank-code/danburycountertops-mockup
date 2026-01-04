import React from 'react';
import Navbar from './components/layout/Navbar';
import MobileBottomNav from './components/layout/MobileBottomNav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Materials from './components/sections/Materials';
import Process from './components/sections/Process';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Testimonials from './components/sections/Testimonials';
import CTAStrip from './components/sections/CTAStrip';
import FloatingWidget from './components/ui/FloatingWidget';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-dark-900 text-white selection:bg-gold-500 selection:text-black pb-20 md:pb-0">
      {/* Cinematic Grain Overlay - Gives a 'texture' to the whole site */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Materials />
        <CTAStrip />
        <Process />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <FloatingWidget />
      <MobileBottomNav />
    </div>
  );
};

export default App;