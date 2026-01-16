import React, { useState } from "react";
import {
  Hotel,
  Compass,
  Flame,
  Ship,
  Mountain,
  Music,
  Tent,
  Navigation,
  MessageCircle,
  Phone,
  ArrowUpRight
} from "lucide-react";

const row1 = [
  { title: "Bespoke Room Booking", icon: Hotel, id: "room" },
  { title: "Off-Road Jeep Safari", icon: Navigation, id: "jeep" },
  { title: "Wilderness Safari", icon: Compass, id: "wild" },
  { title: "Private Boat Charter", icon: Ship, id: "boat" },
];

const row2 = [
  { title: "Starlit Camp Fire", icon: Flame, id: "fire" },
  { title: "Exclusive DJ Soirée", icon: Music, id: "dj" },
  { title: "Sunrise Trek", icon: Mountain, id: "trek" },
  { title: "Luxury Tent Camping", icon: Tent, id: "camp" },
];

export default function Services() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // WhatsApp logic using the primary concierge number
  const handleInterest = (serviceTitle) => {
    const msg = encodeURIComponent(`Hello Nishanth, I am interested in the ${serviceTitle} service at Journey Junction.`);
    window.open(`https://wa.me/917904796306?text=${msg}`, "_blank");
  };

  return (
    <section className="bg-[#0A0F0A] py-32 overflow-hidden relative">
      {/* LUXURY BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
      
      {/* DYNAMIC AMBIENT GLOW */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[140px] rounded-full transition-colors duration-1000 pointer-events-none 
        ${activeItem ? 'bg-[#C9A24D]/10' : 'bg-[#C9A24D]/05'}`}></div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-24 px-6 relative z-10">
        <span className="text-[#C9A24D] uppercase tracking-[0.6em] text-[10px] mb-4 block font-medium">
          The Art of Living
        </span>
        <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-6 tracking-tight">
          Signature Experiences
        </h2>
        <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24D]/40"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A24D]/50"></div>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24D]/40"></div>
        </div>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="flex flex-col gap-10 relative z-10">
        {/* ROW 1: Moves Left */}
        <div className="flex animate-marquee gap-6 whitespace-nowrap group">
          {[...row1, ...row1].map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
              className="group/card flex items-center gap-8 px-12 py-8 bg-white/[0.01] border border-white/5 backdrop-blur-md 
                         hover:bg-white/[0.04] hover:border-[#C9A24D]/40 transition-all duration-700 rounded-sm"
            >
              <item.icon strokeWidth={1} size={28} className="text-[#C9A24D] group-hover/card:scale-110 transition-transform duration-700" />
              <div className="flex flex-col">
                <span className="text-white/80 font-light tracking-[0.2em] uppercase text-xs">
                    {item.title}
                </span>
                <button 
                  onClick={() => handleInterest(item.title)}
                  className="text-[9px] text-[#C9A24D] uppercase tracking-[0.3em] mt-2 opacity-0 -translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 flex items-center gap-1"
                >
                    Book Interest <ArrowUpRight size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2: Moves Right */}
        <div className="flex animate-marquee-reverse gap-6 whitespace-nowrap group">
          {[...row2, ...row2].map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
              className="group/card flex items-center gap-8 px-12 py-8 bg-white/[0.01] border border-white/5 backdrop-blur-md 
                         hover:bg-white/[0.04] hover:border-[#C9A24D]/40 transition-all duration-700 rounded-sm"
            >
              <item.icon strokeWidth={1} size={28} className="text-[#C9A24D] group-hover/card:scale-110 transition-transform duration-700" />
              <div className="flex flex-col">
                <span className="text-white/80 font-light tracking-[0.2em] uppercase text-xs">
                    {item.title}
                </span>
                <button 
                  onClick={() => handleInterest(item.title)}
                  className="text-[9px] text-[#C9A24D] uppercase tracking-[0.3em] mt-2 opacity-0 -translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 flex items-center gap-1"
                >
                    Book Interest <ArrowUpRight size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONCIERGE REVEAL */}
      <div className="mt-32 flex flex-col items-center justify-center px-6 relative z-10">
        {!isRevealed ? (
          <div className="text-center group cursor-pointer" onClick={() => setIsRevealed(true)}>
              <div className="w-[1px] h-16 bg-gradient-to-b from-[#C9A24D]/50 to-transparent mx-auto mb-8 animate-bounce"></div>
            <button className="px-12 py-5 border border-white/10 text-white text-[10px] tracking-[0.5em] uppercase hover:border-[#C9A24D] transition-all duration-700">
              Inquire for Custom Experience
            </button>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in duration-700 w-full max-w-md">
            <div className="relative p-10 bg-[#0F150F] border border-[#C9A24D]/30 backdrop-blur-3xl text-center shadow-2xl">
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#C9A24D]/40"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#C9A24D]/40"></div>
              
              <span className="text-[#C9A24D] text-[10px] uppercase tracking-[0.5em] block mb-8 font-light italic">Your Concierge</span>
              <h3 className="text-white font-serif italic text-4xl mb-2">Nishanth</h3>
              <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-10">Chief Guest Liaison</p>
              
              <div className="flex flex-col gap-5">
                <a href="tel:+917904796306" className="group flex items-center justify-between px-6 py-4 border border-white/5 hover:border-[#C9A24D]/20 text-white/70 transition-all">
                  <span className="text-[10px] tracking-widest uppercase">Voice</span>
                  <span className="text-sm">+91 79047 96306</span>
                </a>
                <a href="https://wa.me/917904796306" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 py-4 bg-[#C9A24D] text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white transition-all">
                  <MessageCircle size={16} /> Instant Booking
                </a>
              </div>

              <button 
                onClick={() => setIsRevealed(false)}
                className="mt-10 text-white/30 text-[9px] uppercase tracking-[0.4em] hover:text-white transition-colors"
              >
                — Close —
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}