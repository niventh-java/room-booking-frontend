import React from "react";
import {
  Wifi,
  Car,
  Utensils,
  Mountain,
  Trees,
  Wind,
  BedDouble,
  ShieldCheck,
} from "lucide-react";

const amenities = [
  { icon: BedDouble, name: "Premium Bedding", sub: "King-sized comfort" },
  { icon: Mountain, name: "Valley Vistas", sub: "Panoramic views" },
  { icon: Utensils, name: "Gourmet Kitchen", sub: "Chef-ready space" },
  { icon: Trees, name: "Private Gardens", sub: "Lush outdoor seating" },
  { icon: Wifi, name: "Seamless Connectivity", sub: "High-speed fiber" },
  { icon: Car, name: "Private Valet Parking", sub: "Secure & on-site" },
  { icon: Wind, name: "Alpine Climate", sub: "Natural air purification" },
  { icon: ShieldCheck, name: "Discreet Security", sub: "24/7 peace of mind" },
];

export default function Amenities() {
  return (
    <section className="bg-[#0A0F0A] py-20 md:py-32 relative overflow-hidden">
      {/* STYLES FOR THE ELEGANCE REVEAL */}
      <style>{`
        @keyframes luxuryReveal {
          0% { 
            opacity: 0; 
            clip-path: inset(0 100% 0 0); 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            clip-path: inset(0 0 0 0); 
            transform: translateY(0); 
          }
        }
        .animate-luxury-reveal {
          animation: luxuryReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      {/* TEXTURE BACKGROUND */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 px-6 relative z-10 animate-luxury-reveal">
        <span className="text-[#C9A24D] uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-4 block font-light">
          World-Class Comfort
        </span>
        <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-6">
          The Amenities
        </h2>
        <div className="w-16 md:w-20 h-[1px] bg-[#C9A24D]/30 mx-auto"></div>
      </div>

      {/* STAGGERED GRID - Optimized for all screens */}
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 md:gap-y-16 relative z-10">
        {amenities.map((item, index) => (
          <div 
            key={index} 
            className="group flex flex-col items-center sm:items-start text-center sm:text-left border-b border-white/5 pb-8 transition-all duration-500 hover:border-[#C9A24D]/50 animate-luxury-reveal"
            style={{ animationDelay: `${index * 0.1}s` }} 
          >
            <div className="mb-5 md:mb-6 relative">
              <div className="absolute inset-0 bg-[#C9A24D]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <item.icon 
                strokeWidth={0.75} 
                className="relative text-[#C9A24D] w-8 h-8 md:w-10 md:h-10 group-hover:-translate-y-2 transition-transform duration-700 ease-out" 
              />
            </div>
            
            <h3 className="text-white text-[11px] md:text-[13px] tracking-[0.25em] md:tracking-[0.3em] font-light mb-2 md:mb-3 uppercase group-hover:text-[#E6D08A] transition-colors duration-500">
              {item.name}
            </h3>
            <p className="text-white/30 text-[9px] md:text-[10px] tracking-[0.1em] md:tracking-[0.15em] font-light italic leading-relaxed">
              {item.sub}
            </p>
          </div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div className="mt-20 md:mt-24 text-center relative z-10 animate-luxury-reveal" style={{ animationDelay: '1s' }}>
        <div className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-[#C9A24D]/40 to-transparent mx-auto mb-8"></div>
        <p className="text-white/20 text-[8px] md:text-[9px] font-light uppercase tracking-[0.4em] px-4">
          Designed for the discerning traveler
        </p>
      </div>
    </section>
  );
}