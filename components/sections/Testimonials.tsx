import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-dark-800 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-gold-500 uppercase tracking-widest text-xs font-semibold block mb-2">Verified Reviews</span>
        <h2 className="font-serif text-3xl md:text-4xl text-white">What Our Clients Say</h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-dark-800 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-dark-800 to-transparent z-10"></div>

        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
          {/* Loop items multiple times to ensure smooth infinite scroll on wide screens */}
          {[1, 2, 3, 4].map((set) => (
             <div key={set} className="flex gap-4 md:gap-8 px-2 md:px-4">
               {TESTIMONIALS.map((t) => (
                 <div key={`${set}-${t.id}`} className="w-[85vw] md:w-[350px] flex-shrink-0 bg-white/5 border border-white/5 p-6 rounded-sm hover:border-gold-500/30 transition-colors">
                   <div className="flex gap-1 text-gold-500 mb-4">
                     {[...Array(t.rating)].map((_, i) => (
                       <Star key={i} size={14} fill="currentColor" />
                     ))}
                   </div>
                   <p className="text-gray-300 italic font-light mb-6 text-sm leading-relaxed line-clamp-4">"{t.text}"</p>
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-serif font-bold">
                       {t.name.charAt(0)}
                     </div>
                     <div>
                       <span className="block text-white text-sm font-medium">{t.name}</span>
                       <span className="block text-gray-500 text-xs uppercase tracking-wider">{t.location}</span>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;