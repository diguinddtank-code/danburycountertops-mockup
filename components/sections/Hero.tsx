import React from 'react';
import { ChevronRight, Star, ArrowDown } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';
import Reveal from '../ui/Reveal';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black pb-24 md:pb-32">
      {/* Video Background - Direct Video Tag */}
      <div className="absolute inset-0 z-0">
        {/* Darker Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        
        {/* Trusted By - Visual Update with Avatars */}
        <Reveal width="100%">
           <div className="flex flex-col items-center justify-center mb-8 gap-3">
              <div className="flex items-center -space-x-3">
                 {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden relative">
                       <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-black bg-gold-500 flex items-center justify-center text-[10px] font-bold text-black">
                    1k+
                 </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5">
                 <div className="flex text-gold-500">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                 </div>
                 <span className="text-gray-200 text-xs font-medium">Trusted by Families in CT</span>
              </div>
           </div>
        </Reveal>
        
        <Reveal width="100%" delay={0.2}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 drop-shadow-2xl tracking-tight">
            The Art of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Natural Stone</span>
          </h1>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-xl mb-10 leading-relaxed font-light drop-shadow-md">
            Redefining luxury living in Danbury with precision-fabricated <span className="text-white font-medium">Granite, Quartz, and Marble</span> countertops.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#materials"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 backdrop-blur-sm text-white uppercase tracking-widest text-xs font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              View Collections
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto relative px-10 py-5 bg-gold-500 text-black uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              Get Free Estimate
              <ChevronRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll Gradient - Blends Hero into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-900 to-transparent z-10 pointer-events-none"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-subtle text-white/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;