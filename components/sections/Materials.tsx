import React from 'react';
import { MATERIALS } from '../../constants';
import Reveal from '../ui/Reveal';
import { ChevronRight, Layers } from 'lucide-react';

const Materials: React.FC = () => {
  return (
    <section id="materials" className="py-24 bg-dark-900 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal width="100%">
            <span className="text-gold-500 uppercase tracking-widest text-xs font-bold block mb-4">Material Selection</span>
            <h2 className="font-serif text-4xl text-white mb-6">Our Premium Catalogue</h2>
            <p className="text-gray-400 font-light">
              Explore our curated selection of the world's finest stones, fabricated with precision for your home.
            </p>
          </Reveal>
        </div>

        {/* 
          Responsive Layout Strategy:
          Mobile/Tablet (< lg): Horizontal Scroll Snap (Carousel style) for better UX.
          Desktop (>= lg): Standard Grid.
        */}
        
        <div className="lg:hidden relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 scrollbar-hide">
            {MATERIALS.map((material) => (
              <div key={material.id} className="snap-center shrink-0 w-[80vw] sm:w-[350px]">
                <div className="group relative h-full min-h-[220px] w-full overflow-hidden rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-center hover:border-gold-500/50 transition-all duration-300">
                   <div className="mb-4 text-gold-500 opacity-50">
                      <Layers size={24} strokeWidth={1} />
                   </div>
                   <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-gold-500 transition-colors">{material.title}</h3>
                   <p className="text-gray-400 text-sm font-light leading-relaxed">{material.description}</p>
                   
                   {/* Decorative Corner */}
                   <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-transparent border-r-white/5 group-hover:border-r-gold-500/20 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll Hint */}
          <div className="flex justify-center items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-widest mt-2 animate-pulse">
            Swipe to view <ChevronRight size={14} />
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MATERIALS.map((material, index) => (
            <Reveal key={material.id} delay={index * 0.05} width="100%">
              <div className="group relative h-[250px] w-full overflow-hidden cursor-pointer border border-white/10 bg-white/5 hover:bg-dark-800 transition-all duration-300 rounded-sm hover:-translate-y-1 hover:shadow-xl hover:border-gold-500/30">
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="flex justify-between items-start">
                     <h3 className="font-serif text-xl text-white group-hover:text-gold-500 transition-colors duration-300 pr-4">
                      {material.title}
                     </h3>
                     <Layers size={20} className="text-gray-600 group-hover:text-gold-500 transition-colors" strokeWidth={1.5} />
                  </div>
                  
                  <div>
                    <div className="w-10 h-[1px] bg-white/10 mb-4 group-hover:bg-gold-500/50 transition-colors"></div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                      {material.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;