import room1 from "../assets/room1.jpeg";
import room2 from "../assets/room2.jpeg";
import room3 from "../assets/room3.jpeg";
import room4 from "../assets/room4.jpeg";
import room5 from "../assets/room5.jpeg";
import room6 from "../assets/room6.jpeg";

export default function FloatingGallery() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b0b] flex items-center justify-center">

      {/* BRAND TEXT */}
      <div className="absolute z-10 flex flex-col items-center text-center px-4">
        <h1
          className="
            text-[18vw] sm:text-[14vw] md:text-[12vw]
            font-heading font-extrabold
            tracking-[0.25em] sm:tracking-[0.35em]
            text-transparent bg-clip-text
            bg-gradient-to-r
            from-[#E6D08A] via-[#C9A24D] to-[#9F7E2E]
            opacity-70
            select-none pointer-events-none
            drop-shadow-[0_8px_30px_rgba(201,162,77,0.25)]
          "
        >
          DAZZLING
        </h1>

        <p
          className="
            mt-3 sm:mt-4
            text-[10px] sm:text-sm md:text-base
            font-semibold
            tracking-[0.25em] sm:tracking-[0.35em]
            uppercase
            text-[#E6D08A]/80
            select-none pointer-events-none
          "
        >
          Feel Home at Nature
        </p>
      </div>

      {/* FLOATING IMAGES */}
      <div className="absolute inset-0">

        {/* TOP LEFT */}
        <img
          src={room1}
          alt=""
          className="
            absolute
            w-[220px] h-[150px]
            sm:w-[280px] sm:h-[190px]
            md:w-[360px] md:h-[240px]
            object-cover rounded-3xl shadow-2xl
            animate-floatTL
          "
        />

        {/* TOP RIGHT */}
        <img
          src={room2}
          alt=""
          className="
            absolute
            w-[220px] h-[150px]
            sm:w-[280px] sm:h-[190px]
            md:w-[360px] md:h-[240px]
            object-cover rounded-3xl shadow-2xl
            animate-floatTR
          "
        />

        {/* BOTTOM LEFT */}
        <img
          src={room3}
          alt=""
          className="
            absolute
            w-[220px] h-[150px]
            sm:w-[280px] sm:h-[190px]
            md:w-[360px] md:h-[240px]
            object-cover rounded-3xl shadow-2xl
            animate-floatBL
          "
        />

        {/* BOTTOM RIGHT */}
        <img
          src={room4}
          alt=""
          className="
            absolute
            w-[220px] h-[150px]
            sm:w-[280px] sm:h-[190px]
            md:w-[360px] md:h-[240px]
            object-cover rounded-3xl shadow-2xl
            animate-floatBR
          "
        />

        {/* CENTER → UP */}
        <img
          src={room5}
          alt=""
          className="
            absolute
            w-[200px] h-[140px]
            sm:w-[260px] sm:h-[180px]
            md:w-[320px] md:h-[220px]
            object-cover rounded-3xl shadow-2xl
            animate-floatUp
          "
        />

        {/* CENTER → DOWN */}
        <img
          src={room6}
          alt=""
          className="
            absolute
            w-[200px] h-[140px]
            sm:w-[260px] sm:h-[180px]
            md:w-[320px] md:h-[220px]
            object-cover rounded-3xl shadow-2xl
            animate-floatDown
          "
        />
      </div>
    </section>
  );
}
