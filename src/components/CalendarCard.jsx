import { useState } from "react";

export default function CalendarCard() {
  const [selectedDay, setSelectedDay] = useState(15);

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="
  bg-black/50 
  backdrop-blur-md 
  border border-white/20 
  rounded-2xl 
  shadow-2xl 
  p-6 
  w-80 
  justify-self-center 
  -translate-y-12
">


      
      {/* Month Header */}
      <div className="flex items-center justify-between mb-4">
        <button className="text-xl text-gray-600">‹</button>
        <h3 className="font-semibold text-lg">May 2024</h3>
        <button className="text-xl text-gray-600">›</button>
      </div>

      {/* Days */}
      <div className="grid grid-cols-2 text-center text-sm text-gray-600 mb-2">
        {days.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 text-center text-sm gap-y-2">
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`h-8 w-8 mx-auto rounded-full transition
              ${
                selectedDay === day
                  ? "bg-[#C9A24D] text-white"
                  : "hover:bg-gray-200"
              }`}
          >
            {day}
          </button>
        ))}
      </div>

      <button className="mt-6 w-full bg-[#C9A24D] text-white py-2 rounded-lg font-medium hover:opacity-90">
        Check Availability
      </button>
    </div>
  );
}