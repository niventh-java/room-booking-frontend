import RoomCard from "../components/RoomCard";

import deluxe from "../assets/deluxe.jpeg";
import queen from "../assets/queen.jpeg";
import single from "../assets/single.jpeg";
import luxury from "../assets/luxury.jpeg";

export default function Rooms() {
  return (
    <section
      className="
        min-h-screen
        py-20
        px-6 sm:px-10 lg:px-16
        bg-black
      "
    >
      {/* SECTION HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide text-white">
          Our Rooms
        </h2>

        {/* GOLD DIVIDER */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="h-px w-16 bg-[#C9A24D]/40" />
          <span className="text-[#C9A24D] text-xs tracking-widest uppercase">
            Luxury & Comfort
          </span>
          <div className="h-px w-16 bg-[#C9A24D]/40" />
        </div>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Thoughtfully designed spaces where elegance meets nature —
          tailored for comfort, calm, and unforgettable stays.
        </p>
      </div>

      {/* ROOMS GRID */}
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8 lg:gap-10
        "
      >
        <RoomCard
          name="Premium Valley View"
          price="3500"
          image={deluxe}
          description="Spacious room with a private balcony and stunning valley views."
        />

        <RoomCard
          name="Luxury Queen Room"
          price="2800"
          image={queen}
          description="Elegant interiors with forest-facing windows and modern comfort."
        />

        <RoomCard
          name="Budget Single Room"
          price="1500"
          image={single}
          description="Perfect for solo travelers seeking peace and simplicity."
        />

        <RoomCard
          name="Denim Rooms"
          price="700"
          image={luxury}
          description="Comfortable and affordable stay with essential amenities."
        />

        <RoomCard
          name=" Inn Room"
          price="1500"
          image={single}
          description="Cozy and well-maintained rooms ideal for short stays."
        />
      </div>
      {/* LUXURY PRICING NOTICE - The "Negotiable" Standard */}
      <div className="max-w-4xl mx-auto mt-20 text-center border-t border-white/5 pt-10">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-light">
          * Rates are subject to seasonal variations and length of stay. 
          <br className="hidden md:block" /> 
          <span className="text-[#C9A24D]/60"> Connect with our concierge for bespoke group pricing and special corporate offers.</span>
        </p>
      </div>
    </section>
  );
}
