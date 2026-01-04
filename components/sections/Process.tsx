import React from 'react';
import { PROCESS_STEPS } from '../../constants';
import Reveal from '../ui/Reveal';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative bg-dark-900 overflow-hidden">
       {/* Background Pattern - Subtle Marble Veins */}
       <div 
         className="absolute inset-0 opacity-20 pointer-events-none"
         style={{ 
           backgroundImage: `url("https://www.transparenttextures.com/patterns/black-mamba.png")`, // Subtle texture pattern
           backgroundSize: 'auto'
         }}
       ></div>
       
       {/* Radial Gradient to highlight center */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/30 to-dark-900 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-gold-500 uppercase tracking-widest text-xs font-semibold block mb-3">Our Expertise</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white">The Fabrication Process</h2>
            <div className="w-24 h-[1px] bg-gold-500 mx-auto mt-6"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.2}>
              <div className="relative p-8 border border-white/5 hover:border-gold-500/50 transition-all duration-500 bg-white/5 backdrop-blur-sm group h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                {/* Step Number Background */}
                <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl text-white group-hover:opacity-20 transition-opacity select-none">
                  {step.id}
                </div>

                <div className="mb-6 mt-4 text-gray-400 group-hover:text-gold-500 transition-colors transform group-hover:scale-110 duration-300 origin-left">
                  <step.icon size={40} strokeWidth={1} />
                </div>
                
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-gold-400 transition-colors">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light border-t border-white/10 pt-4 mt-4">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;