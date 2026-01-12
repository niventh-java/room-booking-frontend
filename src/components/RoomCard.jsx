import { useState } from "react";

export default function RoomCard({ name, price, image, description }) {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guestType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.checkIn ||
      !formData.checkOut ||
      !formData.guestType
    ) {
      alert("Please fill all fields ❌");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/room-bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Booking Confirmed ✅");
        setOpen(false);
        setFormData({
          name: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guestType: "",
        });
      } else {
        alert("Booking Failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error ❌");
    }
  };

  return (
    <>
      {/* ROOM CARD */}
      <div className="rounded-2xl p-4 sm:p-5 bg-white shadow-md hover:shadow-lg transition">
        <img
          src={image}
          alt={name}
          className="h-44 sm:h-48 w-full object-cover rounded-xl mb-4"
        />

        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-[#C8A45D] font-medium">₹{price} / night</p>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          {description}
        </p>

        <button
          onClick={() => setOpen(true)}
          className="bg-[#C9A24D] px-5 py-2.5 rounded-lg text-white mt-4 w-full sm:w-auto hover:bg-[#E6D08A] transition"
        >
          Book Now
        </button>
      </div>

      {/* BOOKING MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-5 sm:p-6 rounded-xl w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Book {name}
            </h2>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border w-full p-3 mb-3 rounded-lg text-sm"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border w-full p-3 mb-3 rounded-lg text-sm"
            />

            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="border w-full p-3 mb-3 rounded-lg text-sm"
            />

            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="border w-full p-3 mb-3 rounded-lg text-sm"
            />

            <select
              name="guestType"
              value={formData.guestType}
              onChange={handleChange}
              className="border w-full p-3 mb-4 rounded-lg text-sm"
            >
              <option value="">Guest Type</option>
              <option value="Family">Family</option>
              <option value="Couple">Couple</option>
              <option value="Bachelor">Bachelor</option>
            </select>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#C9A24D] text-white py-3 rounded-lg font-semibold tracking-wide hover:bg-[#E6D08A] transition"
            >
              Confirm Booking
            </button>

            <button
              onClick={() => setOpen(false)}
              className="w-full mt-3 text-gray-500 hover:text-black transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
