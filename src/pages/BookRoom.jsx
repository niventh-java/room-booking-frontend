import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookRoom() {
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
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
        navigate("/");
      } else {
        alert("Booking Failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Confirm Booking
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="date"
          name="checkIn"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="date"
          name="checkOut"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="guestType"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select guestType</option>
          <option>Family</option>
          <option>Couple</option>
          <option>Bachelor</option>
        </select>

        <button
          type="submit"
          className="w-full bg-[#C9A24D] py-2 rounded text-white font-medium"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
