import React from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import heroImg from "../assets/home.jpeg";
import { motion } from "framer-motion";
export default function Hero() {
  const navigate = useNavigate();
  const managerPhone = "919940984731";

  return (
    <section
      className="relative min-h-screen bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* 1. Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-[1]" />

      {/* 2. Brand Identity */}
      <div className="absolute inset-x-0 top-24 md:top-28 z-[2] text-center pointer-events-none mt-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-[0.3em] text-white font-light">
          JOURNEY JUNCTION
        </h2>
        <p className="mt-2 text-[10px] sm:text-xs tracking-[0.45em] text-[#C9A24D] uppercase font-bold">
          Premium Munnar Stay
        </p>
      </div>

    



{/* 3. Main Hero Content */}
<div className="relative z-[5] min-h-screen px-6 sm:px-10 lg:px-12 flex flex-col justify-center items-center text-center">
  <div className="max-w-2xl text-white mt-24 md:mt-36">
    
    {/* Animated Headline */}
    <motion.h1 
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], // Custom "Expo" ease for premium feel
        delay: 0.2 
      }}
      className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6 tracking-tight"
    >
      <span className="block overflow-hidden">
        <motion.span
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block"
        >
          Luxury Stay in
        </motion.span>
      </span>
      <span className="text-[#E6D08A] block md:inline-block italic font-serif mt-2 md:mt-0">
        Munnar
      </span>
    </motion.h1>

    {/* Animated Paragraph */}
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="text-gray-200 text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed font-light"
    >
      Wake up to misty hills, fresh air, and timeless comfort.
      Experience a refined stay where nature meets elegance.
    </motion.p>
    
    {/* Animated Buttons Container */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.4 }}
      className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
    >
       {/* Your buttons go here... */}
       
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <button
              onClick={() => navigate("/rooms")}
              className="group relative px-10 py-4 overflow-hidden border border-[#C9A24D] bg-[#C9A24D] text-black text-[11px] uppercase tracking-[0.4em] font-bold transition-all duration-500 hover:text-white"
            >
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 flex items-center gap-2">
                Explore Suites 
                <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
              </span>
            </button>
      
            <button
              onClick={() => navigate("/enquiry")}
              className="group relative px-10 py-4 overflow-hidden border border-white/40 text-white text-[11px] uppercase tracking-[0.4em] font-light transition-all duration-700 hover:border-white"
            >
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Private Enquiry
              </span>
            </button>
          </div>
    </motion.div>

  
        </div>
      </div>

      {/* 4. WhatsApp Floating Button - Home Page Only */}
      <div className="fixed bottom-8 right-8 z-[999]">
        {/* Subtle Pulse Ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 scale-150"></span>
        
        <a
          href={`https://wa.me/${managerPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-500 hover:scale-110 group"
          aria-label="Contact Concierge on WhatsApp"
        >
          {/* WhatsApp Icon */}
          <MessageCircle size={28} fill="white" className="transition-transform group-hover:rotate-12" />
          
          {/* Floating Label (Visible on Hover) */}
          <div className="absolute right-20 bg-black/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-[0.2em] py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 whitespace-nowrap border border-white/10 pointer-events-none shadow-2xl">
            Chat with Concierge
          </div>
        </a>
      </div>
    </section>
  );
}