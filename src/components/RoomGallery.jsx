import React from "react";
// Import your assets as usual
import room1 from "../assets/room1.jpeg";
import room2 from "../assets/room2.jpeg";
import room3 from "../assets/room3.jpeg";
import room4 from "../assets/room4.jpeg";
import room5 from "../assets/room5.jpeg";
import room6 from "../assets/room6.jpeg";

export default function RoomGallery() {
  const images = [room1, room2, room3, room4, room5, room6];

  return (
    <section className="bg-[#0A0F0A] py-16 md:py-24 overflow-hidden">
      {/* SECTION HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-12 md:mb-20 px-6">
        <span className="text-[#C9A24D] uppercase tracking-[0.4em] text-[10px] mb-4 block">
          Private Sanctuaries
        </span>
        <h2 className="text-3xl md:text-5xl font-serif italic text-white tracking-tight">
          The Gallery
        </h2>
        <div className="mt-6 w-12 h-[1px] bg-[#C9A24D]/40 mx-auto"></div>
      </div>

      {/* MOBILE UI: Horizontal Snap Slider (Visible only on Mobile) */}
      <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 px-6">
        {images.map((img, idx) => (
          <div key={idx} className="snap-center shrink-0 w-[85vw] h-[400px] relative">
            <div className="absolute inset-0 border border-[#C9A24D]/20 translate-x-2 translate-y-2 pointer-events-none"></div>
            <img 
              src={img} 
              alt={`Room ${idx}`} 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
      </div>

      {/* DESKTOP UI: Asymmetric Masonry (Visible only on MD and Up) */}
      <div className="hidden md:block max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Feature */}
          <div className="col-span-7 group relative h-[600px] overflow-hidden">
            <div className="absolute inset-0 border border-[#C9A24D]/20 z-20 pointer-events-none translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
            <img src={room1} alt="Room" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute bottom-8 left-8 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-[#E6D08A] font-serif italic text-2xl tracking-wide">The Royal Suite</p>
            </div>
          </div>

          {/* Secondary Vertical Stack */}
          <div className="col-span-5 flex flex-col gap-6 lg:gap-8">
            <div className="relative h-[284px] group overflow-hidden">
              <img src={room2} alt="Room" className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700" />
              <div className="absolute inset-4 border border-white/10 group-hover:border-[#C9A24D]/30 transition-colors"></div>
            </div>
            <div className="relative h-[284px] group overflow-hidden">
              <img src={room3} alt="Room" className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700" />
              <div className="absolute inset-4 border border-white/10 group-hover:border-[#C9A24D]/30 transition-colors"></div>
            </div>
          </div>

          {/* Triple Bottom Row */}
          {[room4, room5, room6].map((img, i) => (
            <div key={i} className="col-span-4 h-[350px] group relative overflow-hidden">
              <img src={img} alt="Room" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
              {/* Thin gold line that appears on hover at the bottom */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#C9A24D] transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      {/* LUXURY FOOTNOTE */}
      <div className="mt-12 md:mt-20 text-center px-6">
        <p className="text-white/20 text-[10px] md:text-xs tracking-[0.4em] uppercase italic">
          Designed for absolute stillness.
        </p>
      </div>
    </section>
  );
}