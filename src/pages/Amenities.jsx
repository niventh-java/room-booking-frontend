import {
  Wifi,
  Car,
  Coffee,
  Mountain,
  Utensils,
  FireExtinguisher,
} from "lucide-react";

const amenities = [
  { icon: Wifi, name: "Free Wi-Fi" },
  { icon: Car, name: "Free Parking" },
  { icon: Coffee, name: "Complimentary Breakfast" },
  { icon: Mountain, name: "Valley View Rooms" },
  { icon: Utensils, name: "In-house Restaurant" },
  { icon: FireExtinguisher, name: "24×7 Security" },
];

export default function Amenities() {
  return (
    <section className="px-12 py-20 min-h-screen bg-[#F8F9FA]">
      <h2 className="text-3xl font-semibold mb-12 text-gray-800">
        Our Amenities
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <item.icon className="w-10 h-10 text-[#C9A24D] mb-4" />
            <p className="font-medium text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
