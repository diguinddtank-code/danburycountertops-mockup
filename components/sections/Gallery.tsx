import React from 'react';
import Reveal from '../ui/Reveal';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const INSTAGRAM_POSTS = [
  { id: 1, img: '', likes: 124 },
  { id: 2, img: '', likes: 89 },
  { id: 3, img: '', likes: 215 },
  { id: 4, img: '', likes: 156 },
  { id: 5, img: '', likes: 342 },
  { id: 6, img: '', likes: 178 },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-dark-800 relative">
      {/* Background Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Instagram Header */}
        <Reveal width="100%">
          <div className="flex flex-col items-center mb-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-[2px] mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-full h-full bg-dark-900 rounded-full p-1">
                <div className="w-full h-full bg-white rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1595515106967-1b035a9bd050?q=80&w=200" alt="Logo" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
            <h2 className="text-white font-serif text-2xl md:text-3xl mb-2">@danburycountertops</h2>
            <p className="text-gray-400 text-sm mb-6 text-center max-w-md">
              Follow us for daily inspiration, behind-the-scenes fabrication, and finished luxury kitchens in Danbury, CT.
            </p>
            <a 
              href="https://www.instagram.com/danburycountertops" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              <Instagram size={16} />
              Follow on Instagram
            </a>
          </div>
        </Reveal>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 max-w-5xl mx-auto">
          {INSTAGRAM_POSTS.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.1} width="100%">
              <div className="relative group aspect-square bg-gray-900 overflow-hidden cursor-pointer border border-white/5">
                <img 
                  src={post.img} 
                  alt="Instagram Post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2 backdrop-blur-sm">
                  <Instagram size={32} />
                  <div className="flex items-center gap-4 text-sm font-bold">
                    <span className="flex items-center gap-1"><Heart size={16} fill="white" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle size={16} fill="white" /> {Math.floor(post.likes / 10)}</span>
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

export default Gallery;