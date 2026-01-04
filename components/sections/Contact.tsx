import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';
import Reveal from '../ui/Reveal';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-dark-900 pt-24 border-t border-white/5">
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div>
            <Reveal>
              <h2 className="font-serif text-4xl text-white mb-8">Visit Our Showroom</h2>
              <p className="text-gray-400 font-light mb-12">
                Come touch and feel the stone yourself. Our experts are ready to guide you through the selection process.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-full text-gold-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-serif mb-1">Address</h5>
                    <p className="text-gray-400 font-light">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-full text-gold-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-serif mb-1">Phone</h5>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-400 font-light hover:text-gold-500 transition-colors">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                 <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-full text-gold-500">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-serif mb-1">Hours</h5>
                    <p className="text-gray-400 font-light">Mon - Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-400 font-light">Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Map Placeholder */}
            <Reveal delay={0.3}>
              <div className="w-full h-64 bg-gray-800 rounded-sm overflow-hidden relative">
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.348612345678!2d-73.454238!3d41.396556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d9b9b9b9b9b9%3A0x1234567890abcdef!2s208%20White%20St%20Unit%20D%2C%20Danbury%2C%20CT%2006810!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0, filter: 'grayscale(100%) invert(92%) contrast(83%)'}} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="AGS Stone Location"
                ></iframe>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 md:p-12 border border-white/5">
            <Reveal delay={0.2}>
              <h3 className="font-serif text-2xl text-white mb-6">Get Your Free Estimate</h3>
              
              {formStatus === 'success' ? (
                <div className="bg-green-500/10 border border-green-500/50 p-6 text-center">
                  <h4 className="text-green-400 font-serif text-xl mb-2">Thank You!</h4>
                  <p className="text-gray-300">We have received your inquiry and will call you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                      <input type="text" id="name" required className="w-full bg-black/20 border border-white/10 p-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                      <input type="tel" id="phone" required className="w-full bg-black/20 border border-white/10 p-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                    <input type="email" id="email" required className="w-full bg-black/20 border border-white/10 p-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="material" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Interested In</label>
                    <select id="material" className="w-full bg-black/20 border border-white/10 p-3 text-gray-300 focus:outline-none focus:border-gold-500 transition-colors">
                      <option>Granite Countertops</option>
                      <option>Quartz Countertops</option>
                      <option>Marble Fabrication</option>
                      <option>Other / Unsure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full bg-black/20 border border-white/10 p-3 text-white focus:outline-none focus:border-gold-500 transition-colors"></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-gold-500 text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors duration-300 disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Request Estimate'}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Danbury Countertops. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-gold-500 transition-colors"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;