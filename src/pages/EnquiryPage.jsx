import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Send, User, MessageSquare, Phone as PhoneIcon, ChevronDown, X, Sparkles } from "lucide-react";
import heroImg from "../assets/home.jpeg"; 

export default function EnquiryPage() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Couple's Getaway",
    message: "",
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const managerPhone = "919940984731";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*LUXURY ENQUIRY*%0A%0A` +
                 `*Guest:* ${formData.name}%0A` +
                 `*Contact:* ${formData.phone}%0A` +
                 `*Experience:* ${formData.service}%0A` +
                 `*Note:* ${formData.message}`;
    
    window.open(`https://wa.me/${managerPhone}?text=${text}`, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#050505] flex items-center justify-center p-4 font-serif overflow-hidden">
      
      {/* Cinematic Background */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out ${isLoaded ? 'scale-110' : 'scale-100'}`}
        style={{ backgroundImage: `url(${heroImg})`, opacity: 0.35 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />

      {/* Main Card - Reduced width from max-w-lg to max-w-sm/md */}
      <div className={`relative z-10 w-full max-w-[380px] transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 text-[#C9A24D]/20 animate-pulse hidden sm:block">
          <Sparkles size={32} />
        </div>

        <div className="bg-black/70 backdrop-blur-3xl border border-white/10 rounded-[32px] p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          
          {/* Header - More compact */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[1px] w-4 bg-[#C9A24D]" />
                <p className="text-[#C9A24D] text-[9px] font-bold uppercase tracking-[0.3em]">Concierge</p>
              </div>
              <h1 className="text-2xl font-light text-white tracking-tight italic">Enquiry</h1>
            </div>
            <button 
              onClick={() => navigate("/")} 
              className="group p-2 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-[#C9A24D] transition-all duration-500"
            >
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-3">
              <div className="group relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A24D]/50 group-focus-within:text-[#C9A24D]" size={14} />
                <input 
                  name="name" 
                  onChange={handleChange} 
                  type="text" 
                  placeholder="Guest Name" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white font-sans placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#C9A24D]/30 transition-all" 
                  required 
                />
              </div>

              <div className="group relative">
                <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A24D]/50 group-focus-within:text-[#C9A24D]" size={14} />
                <input 
                  name="phone" 
                  onChange={handleChange} 
                  type="tel" 
                  placeholder="Contact Number" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white font-sans placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#C9A24D]/30 transition-all" 
                  required 
                />
              </div>

              <div className="group relative">
                <div className="w-full bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-[#C9A24D]/30">
                  <select 
                    name="service"
                    onChange={handleChange}
                    className="w-full bg-transparent px-4 py-3.5 text-sm text-white/70 font-sans appearance-none focus:outline-none cursor-pointer"
                  >
                    <option className="bg-[#111]">Royal Suite</option>
                    <option className="bg-[#111]">Private Retreat</option>
                    <option className="bg-[#111]">Family Gathering</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C9A24D]/50 pointer-events-none" size={14} />
                </div>
              </div>

              <div className="group relative">
                <MessageSquare className="absolute left-4 top-4 text-[#C9A24D]/50 group-focus-within:text-[#C9A24D]" size={14} />
                <textarea 
                  name="message" 
                  onChange={handleChange} 
                  rows="2" 
                  placeholder="Requirements" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white font-sans placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#C9A24D]/30 transition-all resize-none"
                ></textarea>
              </div>
            </div>

            {/* CTA Button - Scaled down for the smaller card */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="group relative w-full h-[56px] bg-white rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 active:scale-[0.97]"
              >
                <span className="text-black font-bold tracking-[0.1em] text-[10px] uppercase z-10 mr-10">Send Inquiry</span>
                
                <div className="absolute right-2 top-2 bottom-2 aspect-square bg-[#075E54] rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-all">
                  <Send size={16} className="text-white fill-white -rotate-45" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Navigation */}
      <button 
        onClick={() => navigate("/")} 
        className="absolute bottom-8 group flex flex-col items-center gap-1"
      >
        <span className="text-[#C9A24D] text-[9px] font-bold uppercase tracking-[0.5em] opacity-40 group-hover:opacity-100 transition-opacity">Return</span>
        <div className="w-0 h-[1px] bg-[#C9A24D] group-hover:w-12 transition-all duration-500" />
      </button>
    </div>
  );
}