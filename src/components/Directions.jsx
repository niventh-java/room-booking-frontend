import React from "react";
import {
  Compass,
  Mountain,
  Trees,
  Droplets,
  MapPin,
  Waves,
  Sun,
  Leaf,
} from "lucide-react";

const directions = [
  {
    title: "The Mattupetty Trail",
    subtitle: "Mist & Valleys",
    places: [
      { name: "Rose Garden", icon: <Trees size={14} /> },
      { name: "Tea Garden View", icon: <Mountain size={14} /> },
      { name: "Elephant Arrival", icon: <MapPin size={14} /> },
      { name: "Mattupetty Dam", icon: <Waves size={14} /> },
      { name: "Echo Point", icon: <Compass size={14} /> },
      { name: "Kundala Lake", icon: <Droplets size={14} /> },
    ],
  },
  {
    title: "Cochin Gateway",
    subtitle: "Waterfalls & Spice",
    places: [
      { name: "Blossom Park", icon: <Trees size={14} /> },
      { name: "Pothamedu View", icon: <Mountain size={14} /> },
      { name: "Attukad Falls", icon: <Waves size={14} /> },
      { name: "Chengulam Dam", icon: <Droplets size={14} /> },
      { name: "Spice Plantation", icon: <Trees size={14} /> },
    ],
  },
  {
    title: "Thekkady Passage",
    subtitle: "High Peaks & Sunsets",
    places: [
      { name: "Devikulam Garden", icon: <Trees size={14} /> },
      { name: "Gap Road View", icon: <Mountain size={14} /> },
      { name: "Chinnakanal Falls", icon: <Waves size={14} /> },
      { name: "Anayirangal Dam", icon: <Droplets size={14} /> },
      { name: "Kolukkumalai Sunrise", icon: <Sun size={14} /> },
    ],
  },
  {
    title: "Coimbatore Direction",
    subtitle: "Sanctuaries & Falls",
    places: [
      { name: "Tata Tea Museum", icon: <Leaf size={14} /> },
      { name: "Eravikulam National Park", icon: <Mountain size={14} /> },
      { name: "Green Valley View Point", icon: <Mountain size={14} /> },
      { name: "Lakhom Water Falls", icon: <Waves size={14} /> },
      { name: "Marayoor Sandalwood Forest", icon: <Trees size={14} /> },
      { name: "Thoovanam Water Falls", icon: <Waves size={14} /> },
      { name: "Chinnar Wildlife Sanctuary", icon: <MapPin size={14} /> },
    ],
  },
];

export default function Directions() {
  return (
    <section className="bg-[#0A0F0A] py-24 md:py-32 overflow-hidden">
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 px-6">
        <span className="text-[#C9A24D] uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">
          Curated Experiences
        </span>
        <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-6">
          Explore Munnar
        </h2>
        <div className="w-24 h-[1px] bg-[#C9A24D]/40 mx-auto"></div>
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div className="relative w-full group">
        {/* Visual Fades (Hidden on small mobile to give more space) */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0F0A] to-transparent z-10 pointer-events-none"></div>
        <div className="hidden md:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0F0A] to-transparent z-10 pointer-events-none"></div>

        {/* SCROLLABLE AREA 
            - overflow-x-auto: enables horizontal scroll
            - snap-x snap-mandatory: enables card "snapping"
            - scrollbar-hide: custom utility or CSS to hide scrollbar
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-6 md:px-[10%] pb-10 custom-scrollbar-css">
          {directions.map((dir, index) => (
            <div
              key={index}
              className="flex-none snap-center w-[85vw] md:w-[400px] bg-white/[0.03] border border-white/10 backdrop-blur-sm p-8 md:p-10 
                         transition-all duration-500 hover:border-[#C9A24D]/50 hover:bg-white/[0.05]"
            >
              <div className="flex flex-col gap-1 mb-8">
                <div className="flex items-center gap-3">
                   <Compass className="text-[#C9A24D]" size={18} />
                   <h3 className="text-[#E6D08A] tracking-[0.15em] uppercase text-sm font-medium">
                     {dir.title}
                   </h3>
                </div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest ml-7">
                    {dir.subtitle}
                </p>
              </div>

              <ul className="space-y-4">
                {dir.places.map((place, i) => (
                  <li 
                    key={i} 
                    className="flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <span className="text-[#C9A24D]/60">{place.icon}</span>
                    <span className="text-sm font-light tracking-wide">{place.name}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A24D] hover:underline flex items-center gap-2">
                  View Route Map <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* MOBILE HINT */}
        <p className="md:hidden text-center text-white/20 text-[9px] uppercase tracking-[0.3em] mt-4">
           Swipe to explore routes
        </p>
      </div>

      {/* Add this CSS to your global style file (e.g., index.css) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}