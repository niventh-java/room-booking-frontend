import React from "react";
import { motion } from "framer-motion";
import { Users, Maximize, Star, Phone, ArrowRight } from "lucide-react";

import deluxe from "../assets/deluxe.jpeg";
import queen from "../assets/queen.jpeg";
import single from "../assets/single.jpeg";
import luxury from "../assets/luxury.jpeg";

// 1. DATA RESTRUCTURED INTO CATEGORIES
const roomCategories = [
  {
    categoryTitle: "The Villa Collection",
    categorySubtitle: "Premier Heritage Suites",
    description: "Our signature high-elevation sanctuaries featuring expansive views and curated luxury.",
    rooms: [
      {
        name: "Premium Valley View",
        image: deluxe,
        tag: "Most Popular",
        type: "SUITE",
        description: "Spacious room with a private balcony and stunning valley views.",
        specs: ["2 Guests", "450 sq ft"]
      },
      {
        name: "Luxury Queen Room",
        image: queen,
        tag: "Honeymoon",
        type: "DELUXE",
        description: "Elegant interiors with forest-facing windows and modern comfort.",
        specs: ["4 Guests", "380 sq ft"]
      },
      {
        name: "Deluxe Room",
        image: single,
        tag: "Solo Traveler",
        type: "CLASSIC",
        description: "Perfect for solo travelers seeking peace and simplicity.",
        specs: ["1 Guest", "250 sq ft"]
      }
    ]
  },
  {
    categoryTitle: "Standard & Budget",
    categorySubtitle: "Essential Comforts",
    description: "Refined simplicity for the modern traveler, focusing on peace and functionality.",
    rooms: [
      {
        name: "Deluxe Room",
        image: single,
        tag: "Solo Traveler",
        type: "CLASSIC",
        description: "Perfect for solo travelers seeking peace and simplicity.",
        specs: ["1 Guest", "250 sq ft"]
      },
      {
        name: "Standard Room",
        image: luxury,
        tag: "Economy",
        type: "BUDGET",
        description: "Comfortable and affordable stay with essential amenities.",
        specs: ["2 Guests", "200 sq ft"]
      }
     
    ]
  }
];

export default function Rooms() {
  return (
    <section className="min-h-screen bg-[#0A0F0A] py-12 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#C9A24D]/5 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />

      {/* GLOBAL HEADER */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#C9A24D] uppercase tracking-[0.5em] text-[10px] font-bold block mb-3"
        >
          Accommodation
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white text-4xl md:text-7xl font-serif italic mb-6 leading-tight"
        >
          Suites & Sanctuaries
        </motion.h1>
        <div className="w-16 md:w-24 h-[1px] bg-[#C9A24D]/40" />
      </div>

      {/* CATEGORY MAPPING */}
      {roomCategories.map((category, catIdx) => (
        <div key={catIdx} className="max-w-7xl mx-auto mb-20 md:mb-32">
          
          {/* CATEGORY SUB-HEADER */}
          <div className="mb-10 md:mb-16 border-l border-[#C9A24D]/30 pl-6 md:pl-10">
            <h2 className="text-[#E6D08A] text-2xl md:text-4xl font-serif italic mb-2">
              {category.categoryTitle}
            </h2>
            <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium mb-4">
              {category.categorySubtitle}
            </p>
            <p className="text-white/50 text-sm md:text-base font-light max-w-2xl leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* ROOMS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {category.rooms.map((room, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden flex flex-col h-full hover:border-[#C9A24D]/50 transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Marquee Effect */}
                  <div className="absolute inset-0 flex items-center pointer-events-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                    <div className="whitespace-nowrap flex animate-marquee-rooms">
                      {[1, 2, 3].map((n) => (
                        <span key={n} className="text-white/20 text-4xl md:text-6xl font-black uppercase tracking-tighter italic mr-8">
                          {room.type} —
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <span className="text-[#C9A24D] text-[8px] md:text-[9px] uppercase tracking-widest font-bold">{room.tag}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h3 className="text-white text-xl md:text-2xl font-serif italic leading-tight">{room.name}</h3>
                    <div className="flex flex-col items-end shrink-0">
                      <span className="text-[#C9A24D] font-light tracking-widest text-[9px] uppercase">Bespoke</span>
                      <span className="text-[8px] text-white/40 uppercase tracking-widest">Pricing</span>
                    </div>
                  </div>
                  
                  <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed mb-6 flex-grow">
                    {room.description}
                  </p>

                  <div className="flex items-center gap-4 md:gap-6 mb-6 border-y border-white/5 py-3 md:py-4">
                     <div className="flex items-center gap-2 text-white/40">
                        <Users size={12} className="md:w-4 md:h-4" /> 
                        <span className="text-[9px] md:text-[10px] uppercase tracking-widest">{room.specs[0]}</span>
                     </div>
                     <div className="flex items-center gap-2 text-white/40">
                        <Maximize size={12} className="md:w-4 md:h-4" /> 
                        <span className="text-[9px] md:text-[10px] uppercase tracking-widest">{room.specs[1]}</span>
                     </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <button 
                       onClick={() => window.open(`https://wa.me/919360809160?text=Inquiry%20for%20${room.name}`, '_blank')}
                       className="w-full py-4 bg-[#C9A24D] text-black text-[10px] font-black uppercase tracking-[0.2em] active:scale-95 md:hover:bg-white transition-all duration-300"
                    >
                      Reserve Now
                    </button>
                    
                    <button 
                       onClick={() => window.location.href = "tel:+919360809160"}
                       className="w-full py-4 bg-transparent border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 active:scale-95 hover:bg-white/5 transition-all duration-300"
                    >
                      <Phone size={12} className="text-[#C9A24D]" />
                      Direct Call
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Responsive Footer Notice */}
      <div className="max-w-4xl mx-auto mt-16 md:mt-24 text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full mb-4 md:mb-6">
           <Star size={10} className="text-[#C9A24D]" fill="#C9A24D" />
           <span className="text-white/60 text-[8px] md:text-[10px] uppercase tracking-[0.2em]">Exclusivity Guaranteed</span>
        </div>
        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-500 font-light leading-relaxed">
          * Rates available upon inquiry. 
          <span className="block md:inline text-[#C9A24D]/60 mt-1 md:mt-0 md:ml-2">Personalized itineraries included.</span>
        </p>
      </div>

      {/* Global CSS for Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-rooms {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3%); }
        }
        .animate-marquee-rooms {
          animation: marquee-rooms 15s linear infinite;
        }
      `}} />
    </section>
  );
}