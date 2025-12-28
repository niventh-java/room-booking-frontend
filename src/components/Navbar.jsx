import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white/90 backdrop-blur border-b px-4 md:px-12 py-3 flex justify-between items-center sticky top-0 z-50">
      
       <h1
  className="
    font-[Playfair Display]
    text-sm md:text-base
    font-medium
    tracking-[0.22em]
    uppercase
    text-[#C9A24D]
    drop-shadow-sm
  "
>
  Feel at Home in Munnar
</h1>
<ul className="hidden md:flex gap-8 text-gray-800 font-medium tracking-wide">
  <li className="hover:text-[#C9A24D] transition-colors">
    <Link to="/rooms">Rooms</Link>
  </li>

  <li className="hover:text-[#C9A24D] transition-colors">
    <Link to="/amenities">Amenities</Link>
  </li>

  <li className="hover:text-[#C9A24D] transition-colors">
    <Link to="/about">About</Link>
  </li>

  <li
    className="cursor-pointer hover:text-[#C9A24D] transition-colors"
    onClick={() => setOpen(true)}
  >
    Contact
  </li>

  <li
    className="cursor-pointer hover:text-[#C9A24D] transition-colors"
    onClick={() => setMapOpen(true)}
  >
    Location
  </li>
</ul>

<button
  className="
    border border-[#C9A24D]/60
    px-5 py-1.5
    rounded-full
    text-sm font-semibold
    text-gray-900
    hover:bg-[#C9A24D]/10
    hover:text-[#C9A24D]
    transition
  "
>
  Login
</button>
      </nav>

      {/* CONTACT POPUP */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 relative">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>

            <p className="text-gray-600 mb-2">
              📍 Devikulam Munnar, Kerala, India
            </p>
            <p className="text-gray-600 mb-2">
              📞 +91 99409 84731
            </p>
            <p className="text-gray-600 mb-4">
              ✉ dazzlingvillamunnar@gmail.com
            </p>

            <button
              onClick={() => setOpen(false)}
              className="w-full bg-gray-900 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* LOCATION MAP POPUP */}
      {mapOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl overflow-hidden w-[90%] max-w-2xl relative">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-semibold text-lg">
                Dazzling Villa – Location
              </h2>

              <button
                onClick={() => setMapOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            <iframe
              title="Dazzling Villa Location"
              src="https://www.google.com/maps?q=Devikulam%20Munnar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
            />

            <div className="p-4 text-center">
              <a
                href="https://www.google.com/maps?q=Devikulam%20Munnar"
                target="_blank"
                rel="noreferrer"
                className="text-[#C9A24D] font-medium hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
