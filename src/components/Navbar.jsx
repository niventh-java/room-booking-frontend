import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X, Phone, Mail, MapPin, MessageCircle, Navigation } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Replace this URL with your actual Google Maps Embed link from "Share > Embed a map"
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.324317926131!2d77.0597!3d10.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799794d09383d%3A0x9597148003f4f6e1!2sDevikulam%2C%20Munnar!5e0!3m2!1sen!2sin!4v1700000000000";

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex items-center bg-transparent">
        <Link to="/" className="z-[60]">
          <img src={logo} alt="Dazzling Villa" className="h-8 md:h-10 object-contain" />
        </Link>
{/* DESKTOP MENU - HIGH BRIGHTNESS */}
<div className="ml-auto hidden md:flex items-center gap-10">
  <ul className="flex gap-10 text-white text-[11px] uppercase tracking-[0.25em] font-medium drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
    <li className="hover:text-[#F3E5AB] transition-colors duration-300">
      <Link to="/rooms">Suites</Link>
    </li>
    <li className="hover:text-[#F3E5AB] transition-colors duration-300">
      <Link to="/amenities">Amenities</Link>
    </li>
    <li className="hover:text-[#F3E5AB] transition-colors duration-300">
      <Link to="/about">Our Story</Link>
    </li>
    <li
      className="cursor-pointer hover:text-[#F3E5AB] transition-colors duration-300"
      onClick={() => setOpen(true)}
    >
      Contact
    </li>
    <li
      className="cursor-pointer hover:text-[#F3E5AB] transition-colors duration-300"
      onClick={() => setMapOpen(true)}
    >
      Location
    </li>
  </ul>

  <button className="border border-[#E6D08A] px-8 py-2 text-[10px] uppercase tracking-[0.3em] text-white font-bold hover:bg-[#E6D08A] hover:text-black transition-all duration-500 shadow-[0_0_10px_rgba(230,208,138,0.3)]">
    Login
  </button>
</div>

        {/* MOBILE MENU BUTTON */}
        <button className="ml-auto md:hidden text-white z-[60]" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* MOBILE MENU PANEL */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-[#0A0F0A] flex flex-col items-center justify-center gap-10 text-white transition-all animate-[reveal_0.4s_ease-out]">
          <div className="flex flex-col items-center gap-8 text-[12px] uppercase tracking-[0.6em] font-light">
            <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
            <Link to="/rooms" onClick={() => setMobileMenu(false)}>Suites</Link>
            <Link to="/amenities" onClick={() => setMobileMenu(false)}>Amenities</Link>
            <button onClick={() => { setOpen(true); setMobileMenu(false); }}>Contact</button>
            <button onClick={() => { setMapOpen(true); setMobileMenu(false); }}>Location</button>
          </div>
        </div>
      )}

      {/* PREMIUM CONCIERGE POPUP */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] px-6">
          <div className="absolute inset-0 bg-[#0A0F0A]/90 backdrop-blur-md" onClick={() => setOpen(false)} />
          <div className="relative bg-[#0D120D] border border-[#C9A24D]/20 w-full max-w-md shadow-2xl animate-[reveal_0.4s_ease-out]">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
            <div className="p-8 md:p-12 text-center">
              <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors">
                <X size={20} strokeWidth={1} />
              </button>
              <span className="text-[#C9A24D] text-[10px] uppercase tracking-[0.5em] block mb-4">Guest Experience</span>
              <h2 className="text-white font-serif italic text-4xl mb-10">Nishanth</h2>
              
              <div className="space-y-6 text-left mb-10">
                <div className="flex gap-4">
                  <MapPin size={18} className="text-[#C9A24D] shrink-0" />
                  <p className="text-white/60 text-xs font-light tracking-wide leading-relaxed">Devikulam, Munnar, Kerala, India</p>
                </div>
                <a href="tel:+919360809160" className="flex gap-4 group">
                  <Phone size={18} className="text-[#C9A24D] shrink-0" />
                  <p className="text-white/60 text-xs font-light group-hover:text-white transition-colors">+91 93608 09160</p>
                  <p className="text-white/60 text-xs font-light group-hover:text-white transition-colors">+91 99409 84731</p>
                </a>
                <a href="mailto:dazzlingvillamunnar@gmail.com" className="flex gap-4 group">
                  <Mail size={18} className="text-[#C9A24D] shrink-0" />
                  <p className="text-white/60 text-xs font-light group-hover:text-white transition-colors break-all">dazzlingvillamunnar@gmail.com</p>
                </a>
              </div>

              <a href="https://wa.me/919360809160" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#C9A24D] text-black py-4 text-[10px] uppercase tracking-[0.4em] font-medium hover:bg-white transition-all">
                <MessageCircle size={16} /> WhatsApp Concierge
              </a>
            </div>
          </div>
        </div>
      )}

      {/* PREMIUM MAP POPUP */}
      {mapOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] px-4 md:px-10 py-10">
          <div className="absolute inset-0 bg-[#0A0F0A]/95 backdrop-blur-md" onClick={() => setMapOpen(false)} />
          <div className="relative bg-[#0D120D] border border-white/10 w-full max-w-5xl h-full flex flex-col animate-[reveal_0.4s_ease-out]">
            
            <div className="flex justify-between items-center px-8 py-6 border-b border-white/5">
              <div>
                <span className="text-[#C9A24D] text-[9px] uppercase tracking-[0.4em] block mb-1">Navigation</span>
                <h2 className="text-white font-serif italic text-2xl">Find Dazzling Villa</h2>
              </div>
              <button onClick={() => setMapOpen(false)} className="text-white/20 hover:text-white transition-colors">
                <X size={28} strokeWidth={1} />
              </button>
            </div>

            <div className="flex-grow relative bg-[#1a1a1a]">
              <iframe
                title="Dazzling Villa Location"
                src={mapEmbedUrl}
                className="w-full h-full grayscale invert-[0.9] contrast-[1.2] opacity-80"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
              {/* Luxury Map Overlay Button */}
              <div className="absolute bottom-8 right-8">
                <a 
                  href="https://www.google.com/maps/dir//Devikulam,+Munnar,+Kerala"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-white text-black px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold shadow-2xl hover:bg-[#C9A24D] transition-colors"
                >
                  <Navigation size={14} /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}