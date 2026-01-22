import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Shield, MessageCircle, Info, ChevronUp, Phone, X } from "lucide-react";

// IMAGE IMPORTS
import tharImage from "../assets/thar.jpeg";
import photoedit from "../assets/photoedit.jpg";
import tukTukImage from "../assets/auto.jpeg";

const fleet = [
  {
    id: "jeep-4x4",
    type: "Off-Road Expedition",
    name: "Mahindra Thar 4x4",
    desc: "Perfect for Kolukkumalai sunrise treks and rugged mountain trails.",
    price: "₹3,000",
    tag: "Adventure",
    image: tharImage,
    logistics: {
      capacity: "4 Passengers",
      terrain: "Off-road / 4x4",
      service: "Sunrise & Trekking",
      status: "Available 24/7"
    }
  },
  {
    id: "luxury-sedan",
    type: "Premium Transit",
    name: "Taxi Services",
    desc: "Seamless airport transfers and city tours with maximum comfort.",
    price: "₹2,500",
    tag: "Comfort",
    image: photoedit,
    logistics: {
      capacity: "6 Passengers",
      terrain: "Highway / City",
      service: "Airport & Tours",
      status: "On Call"
    }
  },
  {
    id: "local-auto",
    type: "Local Experience",
    name: "Premium Tuk-Tuk",
    desc: "The authentic way to explore local tea gardens and Munnar town.",
    price: "₹1000",
    tag: "Local",
    image: tukTukImage,
    logistics: {
      capacity: "3 Passengers",
      terrain: "Town / Estate",
      service: "Local Sightseeing",
      status: "Instant"
    }
  }
];

export default function Transport() {
  const [shrunkCard, setShrunkCard] = useState(null);
  const [bookingActive, setBookingActive] = useState(null); // Track which card shows booking options

  const PHONE_NUMBER = "919360809160";

  const handleWhatsApp = (vName) => {
    const msg = encodeURIComponent(`Hi, I'm interested in booking the ${vName} at Journey Junction.`);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${msg}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:+${PHONE_NUMBER}`;
  };

  return (
    <div className="min-h-screen bg-[#0A0F0A] py-12 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#C9A24D]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10 md:mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#C9A24D] uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-bold block mb-4"
        >
          Travel in Style
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white text-3xl md:text-7xl font-serif italic mb-6 leading-tight"
        >
          Fleet & Facilities
        </motion.h1>
        <div className="w-12 md:w-24 h-[1px] bg-[#C9A24D]/40" />
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {fleet.map((item, idx) => {
          const isLogisticsActive = shrunkCard === item.id;
          const isBookingActive = bookingActive === item.id;

          return (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden flex flex-col h-full hover:border-[#C9A24D]/50 transition-all duration-700"
            >
              {/* Image Section */}
              <motion.div 
                layout
                animate={{ height: isLogisticsActive ? "140px" : "260px" }}
                className="relative overflow-hidden cursor-pointer"
                onClick={() => setShrunkCard(isLogisticsActive ? null : item.id)}
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className={`w-full h-full object-cover transition-all duration-1000 ${isLogisticsActive ? 'brightness-50' : 'grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105'}`}
                />
                
                {!isLogisticsActive && (
                  <div className="absolute inset-0 flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                    <div className="whitespace-nowrap flex animate-marquee-fast">
                      {[1, 2, 3].map((n) => (
                        <span key={n} className="text-white/40 text-3xl md:text-5xl font-black uppercase tracking-tighter italic mr-8">
                          {item.type} —
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {isLogisticsActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ChevronUp className="text-white/50 animate-bounce" />
                  </div>
                )}

                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="text-[#C9A24D] text-[8px] uppercase tracking-widest font-bold">{item.tag}</span>
                </div>
              </motion.div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-[#0A0F0A] z-10">
                <div className="flex justify-between items-start gap-2 mb-4">
                  <h3 className="text-white text-xl md:text-2xl font-serif italic">{item.name}</h3>
                  <span className="text-[#C9A24D] font-light text-lg whitespace-nowrap">{item.price}</span>
                </div>
                
                <AnimatePresence mode="wait">
                  {isLogisticsActive ? (
                    <motion.div 
                      key="logistics"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="grid grid-cols-2 gap-4 py-4 border-t border-white/10 mb-6"
                    >
                      <div className="space-y-1">
                        <p className="text-[8px] text-[#C9A24D] uppercase font-bold">Capacity</p>
                        <p className="text-white/80 text-[10px] uppercase tracking-tighter">{item.logistics.capacity}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[8px] text-[#C9A24D] uppercase font-bold">Scope</p>
                        <p className="text-white/80 text-[10px] uppercase tracking-tighter">{item.logistics.service}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[8px] text-[#C9A24D] uppercase font-bold">Terrain</p>
                        <p className="text-white/80 text-[10px] uppercase tracking-tighter">{item.logistics.terrain}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                           <Shield size={8} className="text-[#C9A24D]" />
                           <p className="text-[8px] text-[#C9A24D] uppercase font-bold">Status</p>
                        </div>
                        <p className="text-[#E6D08A] text-[10px] uppercase font-bold animate-pulse">{item.logistics.status}</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.p 
                      key="desc"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-white/50 text-sm font-light leading-relaxed mb-8 flex-grow"
                    >
                      {item.desc}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* ACTION SECTION */}
                <div className="space-y-3 mt-auto">
                  <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      {!isBookingActive ? (
                        <motion.button 
                          key="inquiry-btn"
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }}
                          onClick={() => setBookingActive(item.id)}
                          className="w-full py-4 bg-[#C9A24D] text-black text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:bg-white"
                        >
                          <MessageCircle size={14} />
                          Quick Inquiry
                        </motion.button>
                      ) : (
                        <motion.div 
                          key="booking-options"
                          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className="flex flex-col gap-2"
                        >
                          <div className="flex gap-2">
                            <button 
                              onClick={() => handleWhatsApp(item.name)}
                              className="flex-1 py-4 bg-[#25D366] text-white text-[9px] font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-2"
                            >
                              <MessageCircle size={12} /> WhatsApp
                            </button>
                            <button 
                              onClick={handleCall}
                              className="flex-1 py-4 bg-transparent border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-2"
                            >
                              <Phone size={12} /> Direct Call
                            </button>
                            <button 
                              onClick={() => setBookingActive(null)}
                              className="px-4 bg-white/5 text-white/40"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button 
                    onClick={() => {
                      setShrunkCard(isLogisticsActive ? null : item.id);
                      setBookingActive(null); // Close booking options if logistics clicked
                    }}
                    className={`w-full py-4 border text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2
                      ${isLogisticsActive ? 'bg-white/10 border-white/20 text-white font-bold' : 'border-white/10 text-white font-light hover:bg-white/5'}`}
                  >
                    <Info size={12} className={isLogisticsActive ? "text-[#C9A24D]" : ""} />
                    {isLogisticsActive ? "Hide Details" : "Logistics Details"}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-fast {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 12s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee-fast {
            animation: marquee-fast 6s linear infinite;
          }
        }
      `}} />
    </div>
  );
}