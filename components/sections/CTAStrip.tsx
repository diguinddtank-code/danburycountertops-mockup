import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';
import Reveal from '../ui/Reveal';

const CTAStrip: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop")' }}
      ></div>
      
      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-20">
        <Reveal width="100%">
          <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-sm text-center relative overflow-hidden group">
            
            {/* Gold Accents - Corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-500/50 transition-all duration-700 group-hover:w-full group-hover:h-full"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-500/50 transition-all duration-700 group-hover:w-full group-hover:h-full"></div>

            <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Exclusive Offer
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Transform Your Home <br/>
              <span className="italic text-gray-300 font-light text-3xl md:text-5xl">Into a Masterpiece</span>
            </h2>

            <p className="text-gray-300 font-light max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Elevate your living space with the timeless beauty of natural stone. 
              Schedule your <span className="text-white font-medium">Free Design Consultation</span> today and receive a complimentary edge profile upgrade with any kitchen installation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <a 
                 href={`tel:${BUSINESS_INFO.phone}`}
                 className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gold-500 text-black px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
               >
                 <Phone size={18} />
                 Start Your Project
               </a>
               <a 
                 href={`https://wa.me/${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                 target="_blank"
                 rel="noreferrer"
                 className="w-full sm:w-auto flex items-center justify-center gap-3 border border-white/30 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-500 group/btn"
               >
                 <MessageCircle size={18} />
                 Chat on WhatsApp
                 <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
               </a>
            </div>

            <p className="mt-6 text-gray-500 text-xs tracking-widest uppercase">
              Limited Availability for {new Date().toLocaleString('default', { month: 'long' })} Installations
            </p>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTAStrip;