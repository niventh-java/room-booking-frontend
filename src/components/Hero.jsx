import { useState } from "react";
import heroImg from "../assets/hero.jpg";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      console.error(error);
      alert("Server error ❌");
    }
  };

  return (
    <section
      className="relative min-h-[75vh] bg-cover bg-center rounded-2xl mx-8 mt-6"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 rounded-2xl"></div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <img src={logo} alt="Dazzling Villa Logo" className="h-20 w-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-center px-12 gap-10 pt-28">

        {/* LEFT */}
        <div className="text-white">
          <h1 className="text-4xl font-semibold mb-4">
            Luxury Stay in Munnar
          </h1>
          <p className="text-gray-200 max-w-sm">
            Experience comfort and nature at Dazzling Villa
          </p>
        </div>

        {/* CENTER */}
        <div className="bg-white/90 backdrop-blur-md border border-[#E6D8B5] rounded-2xl shadow-2xl p-6 w-80 justify-self-center -translate-y-16">
          <h3 className="text-lg font-semibold text-center">
            Check Availability
          </h3>

          <input type="date" className="w-full border p-2 my-2 rounded" />
          <input type="date" className="w-full border p-2 my-2 rounded" />

          <button
            onClick={() => navigate("/rooms")}
            className="w-full bg-[#E3C77A] py-2 rounded-lg mt-3"
          >
            Check Rooms →
          </button>
        </div>

        {/* RIGHT – CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-80 justify-self-end"
        >
          <h3 className="text-white text-center mb-4">SEND MESSAGE</h3>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full mb-3 p-2 rounded bg-white/10 text-white"
            required
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full mb-3 p-2 rounded bg-white/10 text-white"
            required
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full mb-3 p-2 rounded bg-white/10 text-white"
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
            placeholder="Your Query"
            rows="2"
            className="w-full mb-4 p-2 rounded bg-white/10 text-white"
          />

          <button
            type="submit"
            className="w-full bg-[#C9A24D] py-2 rounded text-white"
          >
            Submit Now →
          </button>
        </form>
         {/* ABOUT */}
      <div className="relative z-10 -mt-8 px-12 pb-8">
        <p className="text-gray-200 max-w-3xl text-xs leading-relaxed">
          Nestled in the serene hills of Munnar,{" "}
          <span className="text-white font-medium">Dazzling Villa</span>{" "}
          offers a perfect blend of comfort, nature, and elegance.
        </p>
      </div>
      </div>
    </section>
  );
}
