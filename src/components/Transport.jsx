import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, MapPin, Clock, Shield, ChevronRight, MessageCircle, X } from "lucide-react";

const fleet = [
  {
    id: "jeep-4x4",
    type: "Off-Road Expedition",
    name: "Mahindra Thar 4x4",
    desc: "Perfect for Kolukkumalai sunrise treks and rugged mountain trails.",
    price: "₹3,500",
    tag: "Adventure",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop", 
    features: ["4 Passengers", "Off-road capability", "Open Top available"]
  },
  {
    id: "luxury-sedan",
    type: "Premium Transit",
    name: "Luxury SUV / Innova Crysta",
    desc: "Seamless airport transfers and city tours with maximum comfort.",
    price: "₹2,500",
    tag: "Comfort",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    features: ["6 Passengers", "Fully Air Conditioned", "Professional Chauffeur"]
  },
  {
    id: "local-auto",
    type: "Local Experience",
    name: "Premium Tuk-Tuk",
    desc: "The authentic way to explore local tea gardens and Munnar town.",
    price: "₹800",
    tag: "Local",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
    features: ["3 Passengers", "Short Distances", "Expert Local Guide"]
  }
];

export default function Transport() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleQuickInquiry = (vName) => {
    const msg = encodeURIComponent(`Hi, I'm interested in booking the ${vName} at Dazzling Villa.`);
    window.open(`https://wa.me/919940984731?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0A0F0A] py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#C9A24D]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#C9A24D] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-bold block mb-4"
        >
          Travel in Style
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-4xl md:text-7xl font-serif italic mb-6 leading-tight"
        >
          Fleet & Facilities
        </motion.h1>
        <div className="w-16 md:w-24 h-[1px] bg-[#C9A24D]/40" />
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {fleet.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden flex flex-col h-full hover:border-[#C9A24D]/50 transition-all duration-700"
          >
            {/* Image Section */}
            <div className="relative h-56 md:h-64 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              
              {/* Marquee Effect - Visible on Hover (Desktop) and simplified for mobile */}
              <div className="absolute inset-0 flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                <div className="whitespace-nowrap flex animate-marquee-fast">
                  {[1, 2, 3, 4].map((n) => (
                    <span key={n} className="text-white/30 text-4xl md:text-6xl font-black uppercase tracking-tighter italic mr-8">
                      {item.type} —
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-[#C9A24D] text-[8px] md:text-[9px] uppercase tracking-widest font-bold">{item.tag}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                <h3 className="text-white text-xl md:text-2xl font-serif italic">{item.name}</h3>
                <span className="text-[#C9A24D] font-light tracking-tighter text-lg md:text-xl whitespace-nowrap">
                  {item.price} <span className="text-[10px] text-white/40 uppercase">/ trip</span>
                </span>
              </div>
              
              <p className="text-white/50 text-sm font-light leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => handleQuickInquiry(item.name)}
                  className="w-full py-4 bg-[#C9A24D] text-black text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2 active:scale-95 transition-all duration-300"
                >
                  <MessageCircle size={14} />
                  Quick Inquiry
                </button>

                <button 
                  onClick={() => setSelectedVehicle(item)}
                  className="w-full py-4 border border-white/10 text-white text-[10px] uppercase tracking-[0.3em] font-light hover:border-[#C9A24D] active:bg-white/5 transition-all"
                >
                  View Logistics Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Logistics Detail Modal */}
      <AnimatePresence>
        {selectedVehicle && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVehicle(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl" 
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#0D130D] border border-white/10 rounded-sm overflow-y-auto max-h-[90vh] md:max-h-none flex flex-col md:flex-row shadow-2xl"
            >
              <button 
                onClick={() => setSelectedVehicle(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white/40 hover:text-white z-20 bg-black/50 md:bg-transparent p-2 rounded-full"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 h-56 sm:h-72 md:h-auto shrink-0">
                <img src={selectedVehicle.image} className="w-full h-full object-cover" alt="" />
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 md:p-12 w-full md:w-1/2 flex flex-col">
                <span className="text-[#C9A24D] text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 block font-bold">Facility Protocol</span>
                <h2 className="text-white text-3xl md:text-4xl font-serif italic mb-6 leading-tight">{selectedVehicle.name}</h2>
                
                <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                  {selectedVehicle.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 md:gap-4 text-white/70">
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#C9A24D]" />
                      <span className="text-[11px] md:text-xs uppercase tracking-widest">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
                   <div className="p-3 md:p-4 border border-white/5 bg-white/[0.02]">
                      <Clock className="text-[#C9A24D] mb-2" size={16} />
                      <p className="text-[9px] text-white/40 uppercase tracking-tighter">Available</p>
                      <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">24 / 7</p>
                   </div>
                   <div className="p-3 md:p-4 border border-white/5 bg-white/[0.02]">
                      <Shield className="text-[#C9A24D] mb-2" size={16} />
                      <p className="text-[9px] text-white/40 uppercase tracking-tighter">Security</p>
                      <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">Verified</p>
                   </div>
                </div>

                <button 
                  onClick={() => handleQuickInquiry(selectedVehicle.name)}
                  className="w-full py-4 md:py-5 bg-[#C9A24D] text-black font-black text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] active:bg-white transition-all mt-auto"
                >
                  Book this Vehicle
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-fast {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3%, 0, 0); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 15s linear infinite;
          will-change: transform;
        }
        @media (max-width: 768px) {
          .animate-marquee-fast {
            animation: marquee-fast 8s linear infinite;
          }
        }
      `}} />
    </div>
  );
}