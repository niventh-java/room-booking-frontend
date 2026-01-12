import React from "react";
import {
  Compass,
  Mountain,
  Trees,
  Droplets,
  MapPin,
  Waves,
  Sun,
  Leaf, // New icon for forest/museum
} from "lucide-react";

const directions = [
  // YOUR EXISTING CONTENT
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
  // NEW CONTENT FROM YOUR IMAGE
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
    <section className="bg-[#0A0F0A] py-32 overflow-hidden">
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-24 px-6">
        <span className="text-[#C9A24D] uppercase tracking-[0.3em] text-xs mb-4 block">
          Curated Experiences
        </span>
        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6">
          Explore Munnar
        </h2>
        <div className="w-24 h-[1px] bg-[#C9A24D]/40 mx-auto"></div>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full">
        {/* Gradient Fades for edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0F0A] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0F0A] to-transparent z-10"></div>

        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {[...directions, ...directions].map((dir, index) => (
            <div
              key={index}
              className="group min-w-[350px] bg-white/[0.03] border border-white/10 backdrop-blur-sm p-10 
                         transition-all duration-500 hover:border-[#C9A24D]/50 hover:bg-white/[0.05]"
            >
              <div className="flex flex-col gap-1 mb-8">
                <div className="flex items-center gap-3">
                   <Compass className="text-[#C9A24D] animate-pulse" size={18} />
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
                    className="flex items-center gap-4 text-white/80 group-hover:text-white transition-colors duration-300"
                  >
                    <span className="text-[#C9A24D]/60">{place.icon}</span>
                    <span className="text-sm font-light tracking-wide">{place.name}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="text-[10px] uppercase tracking-[0.2em] text-[#C9A24D] hover:underline">
                  View Route Map
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}