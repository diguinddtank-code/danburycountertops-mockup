import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, BUSINESS_INFO } from '../../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Cursive Style */}
        <div className="flex flex-col relative">
          <a href="#" className="font-cursive text-4xl md:text-5xl text-white tracking-wide hover:text-gold-500 transition-colors duration-300">
            Danbury Countertops
            <span className="text-gold-500 text-4xl absolute -right-3 top-2 font-serif">.</span>
          </a>
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-gray-300 uppercase font-sans mt-1 ml-2">
            Luxury Stone Surfaces
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-gold-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2 border border-gold-500 text-gold-500 px-6 py-2 rounded-sm text-sm uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-all duration-300"
          >
            <Phone size={14} />
            <span>Get Quote</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-gold-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', height: '100vh' }}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white hover:text-gold-500"
        >
          <X size={32} />
        </button>

        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={toggleMenu}
            className="font-serif text-3xl text-white hover:text-gold-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
        
        <div className="pt-8 flex flex-col items-center gap-4">
            <span className="text-gray-400 font-sans text-sm tracking-widest">CALL US TODAY</span>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-serif text-gold-500">
                {BUSINESS_INFO.phoneDisplay}
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;