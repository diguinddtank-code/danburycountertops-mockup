import React from 'react';
import { Layers, Hammer, Calculator, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';

const MobileBottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[60] md:hidden font-sans">
      {/* Local Business Style: White background, clean shadow, professional Blue accents */}
      <div className="bg-white border-t border-gray-200 pb-safe pt-1 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="grid grid-cols-4 h-16 items-center">
          
          {/* Catalog */}
          <a href="#materials" className="flex flex-col items-center justify-center h-full gap-1.5 text-gray-500 hover:text-blue-700 active:text-blue-700 transition-colors group">
            <Layers size={22} strokeWidth={2} className="group-active:scale-95 transition-transform" />
            <span className="text-[10px] font-bold tracking-tight">Catalog</span>
          </a>

          {/* Services */}
          <a href="#process" className="flex flex-col items-center justify-center h-full gap-1.5 text-gray-500 hover:text-blue-700 active:text-blue-700 transition-colors group">
            <Hammer size={22} strokeWidth={2} className="group-active:scale-95 transition-transform" />
            <span className="text-[10px] font-bold tracking-tight">Process</span>
          </a>

          {/* Estimate - Highlighted in Blue */}
          <a href="#contact" className="flex flex-col items-center justify-center h-full gap-1.5 text-blue-700 hover:text-blue-800 transition-colors group relative">
            {/* Notification Dot */}
            <div className="absolute top-2 right-5 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
            <Calculator size={22} strokeWidth={2} className="group-active:scale-95 transition-transform" />
            <span className="text-[10px] font-extrabold tracking-tight">Quote</span>
          </a>

          {/* WhatsApp - Brand Green */}
          <a 
            href={`https://wa.me/${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center h-full gap-1.5 text-gray-500 hover:text-[#25D366] active:text-[#25D366] transition-colors group"
          >
            <MessageCircle size={22} strokeWidth={2} className="group-active:scale-95 transition-transform" />
            <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
          </a>

        </div>
      </div>
      
      {/* Safety spacer for iPhone Home Indicator - White background to match */}
      <div className="h-[env(safe-area-inset-bottom)] bg-white"></div>
    </div>
  );
};

export default MobileBottomNav;