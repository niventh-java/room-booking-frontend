import React from "react";
import { Phone, Mail, MapPin, Mountain, Bed, Heart } from "lucide-react";
import about1 from "../assets/about1.png";

export default function About() {
  return (
    <div className="relative bg-[#0A0F0A] text-white overflow-hidden">
      
      {/* HEADER SECTION */}
      <section className="pt-24 pb-12 px-6 text-center">
        <span className="text-[#C9A24D] uppercase tracking-[0.4em] text-[10px] mb-4 block">
          Since 2024
        </span>
        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6">
          About Dazzling Villa
        </h2>
        <div className="w-20 h-[1px] bg-[#C9A24D]/30 mx-auto"></div>
      </section>

      {/* WELCOME SECTION */}
      <section className="relative py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[#C9A24D] uppercase tracking-widest text-xs mb-4">The Dazzling Experience</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-snug">
              A sanctuary carved into the <br /> 
              <span className="italic text-[#E6D08A]">mist-covered hills.</span>
            </h3>
            <div className="space-y-4 text-white/60 font-light leading-relaxed text-base md:text-lg">
              <p>
                Nestled amidst the emerald tea plantations of Munnar, 
                <span className="text-white font-medium"> Dazzling Villa</span> is a 
                curated escape designed for those who seek the extraordinary.
              </p>
              <p>
                Our architecture harmonizes with the Silent Valley landscape, 
                offering floor-to-ceiling views where nature is the only art you’ll need. 
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[400px] h-[250px] md:h-[300px]">
                <div className="absolute inset-0 border border-[#C9A24D]/20 translate-x-3 translate-y-3"></div>
                <img 
                  src={about1} 
                  alt="Villa View" 
                  className="relative z-10 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000" 
                />
             </div>
          </div>
        </div>
      </section>

 {/* WHY CHOOSE US - LUXURY EVOLUTION */}
<section className="py-24 md:py-32 bg-[#0A0F0A] relative overflow-hidden">
  {/* Cinematic Keyframes */}
  <style>{`
    @keyframes luxuryReveal {
      0% { opacity: 0; transform: translateY(40px); filter: blur(8px); }
      100% { opacity: 1; transform: translateY(0); filter: blur(0); }
    }
    .reveal-card {
      opacity: 0;
      animation: luxuryReveal 1.6s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    }
    @media (max-width: 768px) {
      .mobile-border-bottom {
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }
    }
  `}</style>

  {/* Ambient Background Elements */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A24D]/5 blur-[150px] rounded-full pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C9A24D]/3 blur-[120px] rounded-full pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    {/* HEADER: Minimized and Elegant */}
    <div className="text-center mb-20 md:mb-28 reveal-card" style={{ animationDelay: '0.2s' }}>
      <span className="text-[#C9A24D] uppercase tracking-[0.6em] text-[9px] md:text-[11px] mb-4 block font-medium opacity-90">
        Essence of Dazzling
      </span>
      <h2 className="text-4xl md:text-6xl font-serif italic text-white tracking-tight leading-tight">
        Why Guests <br className="md:hidden" /> Choose Us
      </h2>
      <div className="mt-8 flex items-center justify-center gap-6">
        <div className="w-16 h-[0.5px] bg-gradient-to-r from-transparent to-[#C9A24D]/40"></div>
        <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A24D]/60 scale-75 md:scale-100"></div>
        <div className="w-16 h-[0.5px] bg-gradient-to-l from-transparent to-[#C9A24D]/40"></div>
      </div>
    </div>

    {/* GRID: Adaptive for Mobile & Desktop */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
      {[
        { 
          icon: <Mountain size={32} strokeWidth={0.75} />, 
          title: "Scenic Location", 
          desc: "Where the mist of Silent Valley meets emerald peaks, offering a sanctuary beyond the reach of the world." 
        },
        { 
          icon: <Bed size={32} strokeWidth={0.75} />, 
          title: "Refined Suites", 
          desc: "Artfully curated spaces featuring organic textures, hand-selected linens, and timeless architectural elegance." 
        },
        { 
          icon: <Heart size={32} strokeWidth={0.75} />, 
          title: "Bespoke Service", 
          desc: "A dedicated concierge experience where every desire is anticipated with quiet, intuitive grace." 
        }
      ].map((item, i) => (
        <div 
          key={i} 
          className={`reveal-card group p-10 md:p-16 transition-all duration-1000 relative 
            ${i !== 2 ? 'md:border-r border-white/5' : ''} 
            mobile-border-bottom last:border-none`}
          style={{ animationDelay: `${0.4 + (i * 0.2)}s` }}
        >
          {/* Hover Backdrop Overlay */}
          <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          {/* Subtle Corner Accent */}
          <div className="absolute top-0 right-0 w-0 h-0 border-t border-r border-[#C9A24D]/30 opacity-0 group-hover:w-6 group-hover:h-6 group-hover:opacity-100 transition-all duration-700 ease-out"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-[#C9A24D] mb-10 transform group-hover:scale-110 transition-transform duration-700 ease-out flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-[#C9A24D]/30 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-1000"></div>
                {item.icon}
              </div>
            </div>

            <h4 className="text-white text-2xl font-serif italic tracking-wide mb-5 text-center md:text-left group-hover:text-[#E6D08A] transition-colors duration-500">
              {item.title}
            </h4>
            
            <p className="text-white/40 text-sm md:text-base font-light leading-relaxed text-center md:text-left group-hover:text-white/70 transition-colors duration-700 max-w-xs mx-auto md:mx-0">
              {item.desc}
            </p>

            {/* Cinematic Animated Line */}
            <div className="mt-10 h-[1px] w-8 md:w-0 group-hover:w-full bg-gradient-to-r from-[#C9A24D]/60 via-[#C9A24D]/20 to-transparent transition-all duration-1000 ease-in-out mx-auto md:mx-0"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT & SIGNATURE - Adjusted py to match others */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white/80">
          <div className="flex flex-col items-center gap-3">
             <Phone size={18} className="text-[#C9A24D]/70" />
             <div className="text-s tracking-widest font-light">
               <p>+91 93608 09160</p>
               <p>+91 99409 84731</p>
             </div>
          </div>
          <div className="flex flex-col items-center gap-3">
             <Mail size={18} className="text-[#C9A24D]/70" />
             <p className="text-s tracking-widest lowercse border-b border-[#C9A24D]/20 pb-1">dazzlingvillamunnar@gmail.com</p>
          </div>
          <div className="flex flex-col items-center gap-3">
             <MapPin size={18} className="text-[#C9A24D]/70" />
             <p className="text-s leading-relaxed tracking-wide font-light">
               Silent Valley Road, Devikulam,<br /> Munnar, Kerala
             </p>
          </div>
        </div>

        <div className="mt-20 opacity-20">
           <p className="font-serif italic text-2xl tracking-tighter">— Dazzling Villa —</p>
        </div>
      </section>
    </div>
  );
}