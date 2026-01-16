import React from "react";
import { 
  Phone, Mail, MapPin, Instagram, Facebook, 
  Linkedin, ArrowUp, Send 
} from "lucide-react";
import logo from "../assets/logo1.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0F0A] text-white pt-16 pb-8 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-16">
          
          {/* COLUMN 1: BRANDING - Centered on mobile */}
          <div className="flex flex-col items-center sm:items-start space-y-6 text-center sm:text-left">
            <img src={logo} alt="Dazzling Villa" className="h-10 md:h-12 w-auto mb-2" />
            <div className="flex gap-4 max-w-[280px]">
              <MapPin size={18} className="text-[#C9A24D] shrink-0 mt-1" />
              <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light">
                Silent Valley Road, Devikulam Post,<br />
                Munnar, Kerala - 685613
              </p>
            </div>
            {/* Newsletter: Hidden on very small screens to save space, or kept minimal */}
            <div className="pt-4 w-full max-w-[240px]">
              <p className="text-[#C9A24D] text-[9px] uppercase tracking-[0.3em] mb-4">Newsletter</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-transparent border-b border-white/10 py-2 text-xs focus:border-[#C9A24D] outline-none transition-colors"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#C9A24D] p-2">
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 2: NAVIGATION - 2 columns on mobile for compactness */}
          <div className="sm:pl-10">
            <h4 className="text-[#E6D08A] font-serif italic text-lg mb-6 text-center sm:text-left">Navigation</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-4 gap-x-2 text-[11px] md:text-sm text-white/50 font-light text-center sm:text-left">
              {['Home', 'About Us', 'Suites', 'Experience', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#C9A24D] transition-all duration-300 block py-1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: INFO */}
          <div className="hidden sm:block">
            <h4 className="text-[#E6D08A] font-serif italic text-lg mb-6">Information</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              {['Reviews', 'Location', 'Terms', 'Privacy', 'Booking'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#C9A24D] transition-colors block py-1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT & SOCIAL - High priority on mobile */}
          <div className="flex flex-col items-center sm:items-start space-y-8">
            <div className="text-center sm:text-left w-full">
              <h4 className="text-[#E6D08A] font-serif italic text-lg mb-6">Get In Touch</h4>
              <div className="space-y-5">
                <a href="mailto:dazzlingvillamunnar@gmail.com" className="flex items-center justify-center sm:justify-start gap-3 text-xs md:text-sm text-white/60 hover:text-[#C9A24D] transition-colors break-all">
                  <Mail size={16} className="shrink-0" />
                  <span>journeyjunctionmunnar@gmail.com</span>
                </a>
                <div className="flex flex-col gap-3 text-xs md:text-sm text-white/60">
                  <a href="tel:+919940984731" className="flex items-center justify-center sm:justify-start gap-3 py-1">
                    <Phone size={16} className="shrink-0" />
                    <span>+91 93608 09160</span>
                  </a>
                  <a href="tel:+917904796306" className="flex items-center justify-center sm:justify-start gap-3 py-1 sm:pl-7">
                    <span>+91 99409 84731</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-[#C9A24D] text-[9px] uppercase tracking-[0.3em] mb-4">Follow Our Story</p>
              <div className="flex justify-center sm:justify-start gap-6">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/60 active:scale-95 transition-all">
                    <Icon size={18} strokeWidth={1.2} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: Stacked on mobile */}
        <div className="pt-8 border-t border-white/5 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] text-center">
            © 2024 Journey Junction Munnar. <br className="md:hidden" /> All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex flex-col md:flex-row items-center gap-3 text-[9px] text-[#C9A24D] uppercase tracking-[0.3em]"
          >
            <span>Back to top</span>
            <div className="w-10 h-10 rounded-full border border-[#C9A24D]/30 flex items-center justify-center group-hover:bg-[#C9A24D] group-hover:text-black transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}