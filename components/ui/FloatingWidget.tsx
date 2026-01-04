import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';

const FloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    // 1. Show typing indicator after 2 seconds
    const typingTimer = setTimeout(() => {
      setShowTyping(true);
    }, 2000);

    // 2. Open the widget (Show CTA) after 4.5 seconds
    const messageTimer = setTimeout(() => {
      setShowTyping(false);
      setIsOpen(true); 
    }, 4500);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(messageTimer);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none max-w-[calc(100vw-2rem)]">
      
      {/* Typing Indicator (Visible only when typing and closed) */}
      {showTyping && !isOpen && (
        <div className="bg-white p-4 rounded-2xl rounded-br-none shadow-xl border border-gray-100 animate-pulse mb-2 w-fit max-w-[200px]">
           <div className="flex gap-1.5">
             <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
             <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
             <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
           </div>
        </div>
      )}

      {/* Message Bubble (The CTA) */}
      <div 
        className={`pointer-events-auto bg-white text-dark-900 p-4 rounded-lg rounded-br-none shadow-2xl w-72 md:w-80 transform transition-all duration-500 border-l-4 border-gold-500 mb-2 ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 origin-bottom-right pointer-events-none hidden'
        }`}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100 shrink-0">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Support" className="w-full h-full object-cover" />
             </div>
             <div>
                <span className="text-sm font-bold block text-brandBlue">Emily from Sales</span>
                <span className="text-[10px] text-gray-500 flex items-center gap-1 uppercase tracking-wider font-semibold">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                   Online now
                </span>
             </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black p-1">
            <X size={16} />
          </button>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Hi! 👋 Ready to transform your kitchen? I can get you a <span className="font-bold text-black">free estimate</span> on Granite or Quartz today.
        </p>
        
        <div className="flex gap-2">
           <a 
             href={`https://wa.me/${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} 
             target="_blank" 
             rel="noreferrer"
             className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold py-3 px-3 rounded shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all"
           >
             <MessageCircle size={16} fill="white" />
             WhatsApp
           </a>
           <a 
             href={`tel:${BUSINESS_INFO.phone}`} 
             className="flex-1 bg-gold-500 hover:bg-gold-600 text-black text-xs font-bold py-3 px-3 rounded shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all"
           >
             <Phone size={16} fill="black" />
             Call Now
           </a>
        </div>
      </div>

      {/* Main Trigger Button (Person Face + Online Status) */}
      <button 
        onClick={handleToggle}
        className="pointer-events-auto relative group hover:scale-105 transition-transform duration-300"
      >
         {/* Profile Container */}
         <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-2 shadow-[0_4px_20px_rgba(0,0,0,0.4)] overflow-hidden transition-colors ${isOpen ? 'border-gold-500' : 'border-white'}`}>
            <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
               alt="Chat Agent" 
               className="w-full h-full object-cover"
            />
         </div>
         
         {/* Online Dot */}
         <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-dark-900 rounded-full z-10 animate-pulse"></div>

         {/* Notification Badge (Only if closed and not typing) */}
         {!isOpen && !showTyping && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white animate-bounce shadow-sm">
               1
            </div>
         )}
      </button>

    </div>
  );
};

export default FloatingWidget;