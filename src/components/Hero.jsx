import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import logo from "../assets/logo.png";

export default function Hero() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "General Enquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully ✅");
        setFormData({
          name: "",
          email: "",
          phone: "",
          enquiryType: "General Enquiry",
          message: "",
        });
      } else {
        alert("Failed to send message ❌");
      }
    } catch (error) {
      alert("Server error ❌");
    }
  };

  return (
    <section
      className="relative min-h-[85vh] bg-cover bg-center rounded-3xl mx-6 mt-6 overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60"></div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <img src={logo} alt="Dazzling Villa" className="h-20" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 px-10 pt-32">

        {/* LEFT CONTENT */}
        <div className="text-white space-y-4">
          <h1 className="text-5xl font-semibold leading-tight">
            Luxury Stay in <br />
            <span className="text-[#E6D08A]">Munnar</span>
          </h1>
          <p className="text-gray-200 max-w-md">
            Wake up to misty hills, fresh air, and unmatched comfort.
            Dazzling Villa offers an elegant retreat surrounded by nature.
          </p>

          <button
            onClick={() => navigate("/rooms")}
            className="mt-4 px-6 py-3 bg-[#C9A24D] text-black rounded-xl font-medium hover:bg-[#E6D08A] transition"
          >
            Explore Rooms →
          </button>
        </div>

        {/* CENTER CARD */}
        <div className="bg-white/95 backdrop-blur-md border border-[#E6D08A] rounded-2xl shadow-2xl p-6 w-80 justify-self-center -translate-y-16">
          <h3 className="text-lg font-semibold text-center mb-3">
            Check Availability
          </h3>

          <input type="date" className="w-full border p-2 mb-3 rounded-lg" />
          <input type="date" className="w-full border p-2 mb-4 rounded-lg" />

          <button
            onClick={() => navigate("/rooms")}
            className="w-full bg-[#C9A24D] py-2 rounded-lg font-medium hover:bg-[#E6D08A]"
          >
            Check Rooms →
          </button>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-80 justify-self-end"
        >
          <h3 className="text-white text-center font-semibold mb-4">
            Quick Enquiry
          </h3>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full mb-3 p-2 rounded bg-white/10 text-white placeholder-gray-300"
            required
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full mb-3 p-2 rounded bg-white/10 text-white placeholder-gray-300"
            required
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full mb-3 p-2 rounded bg-white/10 text-white placeholder-gray-300"
            required
          />

          <select
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="w-full mb-3 p-2 rounded bg-white/10 text-white"
          >
            <option className="text-black">General Enquiry</option>
            <option className="text-black">Room Booking</option>
            <option className="text-black">Sight Seeing</option>
            <option className="text-black">Boat House Booking</option>
            <option className="text-black">Tourist Guide</option>
            <option className="text-black">Event / Camp Fire</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="2"
            className="w-full mb-4 p-2 rounded bg-white/10 text-white placeholder-gray-300"
          />

          <button
            type="submit"
            className="w-full bg-[#C9A24D] py-2 rounded-lg text-black font-medium hover:bg-[#E6D08A]"
          >
            Submit →
          </button>
        </form>
      </div>

      {/* ABOUT TEXT */}
      <div className="relative z-10 px-10 pb-10 mt-6">
        <p className="text-gray-300 text-sm max-w-3xl">
          Nestled in the serene hills of Munnar,
          <span className="text-white font-medium"> Dazzling Villa </span>
          blends modern luxury with natural beauty — perfect for families,
          couples, and peaceful getaways.
        </p>
      </div>
    </section>
  );
}
