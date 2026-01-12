import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Send, User, Calendar, MessageSquare, Phone as PhoneIcon } from "lucide-react";
import heroImg from "../assets/home.jpeg";

export default function Hero() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "General Enquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enquiry Sent:", formData);
    setShowForm(false);
  };

  const phoneNumber = "919940984731";
  const defaultMessage = encodeURIComponent("Hello! I am interested in booking a stay at Dazzling Villa.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

      {/* BRAND TITLE */}
      <div className="absolute inset-x-0 top-24 md:top-28 z-10 text-center pointer-events-none mt-12">
        <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-[0.3em] text-white font-light">
          DAZZLING
        </h2>
        <p className="mt-2 text-[10px] sm:text-xs tracking-[0.45em] text-gray-300 uppercase">
          Home Stay
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="relative z-10 min-h-screen px-6 sm:px-10 lg:px-12 flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl text-white mt-24 md:mt-36">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Luxury Stay in{" "}
            <span className="text-[#E6D08A]">Munnar</span>
          </h1>

          <p className="text-gray-200 text-base sm:text-lg mb-10">
            Wake up to misty hills, fresh air, and timeless comfort.
            Experience a refined stay where nature meets elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <button
              onClick={() => navigate("/rooms")}
              className="group relative px-10 py-4 overflow-hidden border border-[#C9A24D] bg-[#C9A24D] text-black text-[11px] uppercase tracking-[0.4em] font-semibold transition-all duration-500 hover:text-white"
            >
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 flex items-center gap-2">
                Explore Suites 
                <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
              </span>
            </button>

            <button
              onClick={() => setShowForm(true)}
              className="group relative px-10 py-4 overflow-hidden border border-white/40 text-white text-[11px] uppercase tracking-[0.4em] font-light transition-all duration-700"
            >
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Private Enquiry
              </span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]"></span>
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL SECTION --- */}
      {showForm && (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#0A0F0A]/95 backdrop-blur-2xl transition-opacity duration-700"
            onClick={() => setShowForm(false)}
          ></div>

          <div className="relative w-full max-w-2xl bg-[#0D130D] border border-white/10 p-8 md:p-12 overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C9A24D]/10 blur-[80px] rounded-full"></div>

            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-6 right-6 text-white/40 hover:text-[#C9A24D] transition-colors"
            >
              <X size={20} strokeWidth={1} />
            </button>

            <div className="text-center mb-10">
              <span className="text-[#C9A24D] uppercase tracking-[0.4em] text-[10px] mb-2 block">Reservation</span>
              <h2 className="text-3xl font-serif italic text-white font-light tracking-tight">Enquiry Form</h2>
              <div className="w-12 h-[1px] bg-[#C9A24D]/30 mx-auto mt-4"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-0 top-3 text-[#C9A24D]" size={16} />
                  <input 
                    name="name"
                    onChange={handleChange}
                    type="text" 
                    placeholder="FULL NAME" 
                    className="w-full bg-transparent border-b border-white/30 py-3 pl-8 text-[12px] text-white tracking-[0.2em] focus:outline-none focus:border-[#C9A24D] transition-colors placeholder:text-white/60 uppercase font-medium"
                    required
                  />
                </div>
                <div className="relative">
                  <PhoneIcon className="absolute left-0 top-3 text-[#C9A24D]" size={16} />
                  <input 
                    name="phone"
                    onChange={handleChange}
                    type="tel" 
                    placeholder="PHONE NUMBER" 
                    className="w-full bg-transparent border-b border-white/30 py-3 pl-8 text-[12px] text-white tracking-[0.2em] focus:outline-none focus:border-[#C9A24D] transition-colors placeholder:text-white/60 font-medium"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <Calendar className="absolute left-0 top-3 text-[#C9A24D]" size={16} />
                <input 
                  type="text" 
                  placeholder="PREFERRED DATES" 
                  className="w-full bg-transparent border-b border-white/30 py-3 pl-8 text-[12px] text-white tracking-[0.2em] focus:outline-none focus:border-[#C9A24D] transition-colors placeholder:text-white/60 uppercase font-medium"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-0 top-3 text-[#C9A24D]" size={16} />
                <textarea 
                  name="message"
                  onChange={handleChange}
                  rows="3"
                  placeholder="SPECIAL REQUESTS" 
                  className="w-full bg-transparent border-b border-white/30 py-3 pl-8 text-[12px] text-white tracking-[0.2em] focus:outline-none focus:border-[#C9A24D] transition-colors placeholder:text-white/60 resize-none uppercase font-medium"
                ></textarea>
              </div>

              <button type="submit" className="w-full mt-8 group relative py-5 bg-[#C9A24D] text-black text-[11px] uppercase tracking-[0.5em] font-bold overflow-hidden transition-all duration-500 hover:tracking-[0.7em]">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Enquiry <Send size={14} />
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* WHATSAPP CONCIERGE BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[999] group flex items-center"
      >
        <div className="mr-4 overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-out shadow-2xl">
          <div className="px-6 py-4 flex flex-col items-end">
            <span className="text-[#C9A24D] text-[10px] uppercase tracking-[0.3em] mb-1 font-medium">Guest Experience Manager</span>
            <span className="text-white text-base font-serif italic tracking-wide">Nishanth</span>
            <span className="text-white/40 text-[9px] tracking-widest mt-1">+91 99409 84731</span>
          </div>
        </div>

        <div className="relative group-hover:scale-110 transition-all duration-500">
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
          <div className="relative z-10 bg-[#25D366] p-4 rounded-full shadow-[0_15px_30px_rgba(37,211,102,0.4)]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
        </div>
      </a>
    </section>
  );
}