import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Video Side */}
          <div className="w-full lg:w-1/2 relative">
            <Reveal width="100%">
              <div className="relative aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] overflow-hidden group rounded-sm shadow-2xl">
                <div className="absolute inset-0 border border-gold-500/30 transform translate-x-4 translate-y-4 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative z-10 w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700"
                >
                  <source src="https://i.imgur.com/xoOXIh8.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay gradient for better text integration if needed, currently subtle */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
              </div>
            </Reveal>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <h4 className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4">The Luxury Experience</h4>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight">
                Crafting Timeless Elegance <br/> In Danbury
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-400 leading-relaxed mb-6 font-light text-lg">
                At <span className="text-white font-medium">Danbury Countertops</span>, we believe your home deserves the finest materials earth has to offer. Located at <span className="text-white italic">208 White St</span>, we are Danbury's premier destination for custom stone fabrication.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-gray-400 leading-relaxed mb-8 font-light">
                Our approach combines old-world artistry with modern laser precision. Whether it is the dramatic veins of imported marble or the resilient beauty of quartz, we treat every slab as a canvas and every installation as a masterpiece.
              </p>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 gap-8 py-6 border-t border-white/10 border-b mb-8">
                <div>
                  <span className="block text-3xl font-serif text-gold-500 mb-1">15+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Years Experience</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-gold-500 mb-1">100%</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Satisfaction</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <a href="#contact" className="inline-block text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors uppercase tracking-widest text-xs">
                Visit Our Showroom
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;