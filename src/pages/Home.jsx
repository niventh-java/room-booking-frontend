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
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
     {/* BRAND TITLE */}
<div className="absolute inset-x-0 top-28 z-10 text-center pointer-events-none">
  <h2 className="text-5xl md:text-6xl tracking-[0.35em] text-white font-light">
    DAZZLING
  </h2>
  <p className="mt-2 text-sm tracking-[0.5em] text-gray-300 uppercase">
    Home Stay
  </p>
</div>



      {/* Logo */}
      <div className="absolute top-6 left-6 z-40">
        <img src={logo} alt="Dazzling Villa" className="h-20" />
      </div>

      {/* Main Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen px-12">
        
        {/* CENTERED HERO CONTENT */}
      <div className="flex flex-col justify-center items-center text-center text-white max-w-2xl mx-auto mt-22">

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Luxury Stay in{" "}
            <span className="text-[#E6D08A]">Munnar</span>
          </h1>

          <p className="text-gray-200 text-lg mb-10">
            Wake up to misty hills, fresh air, and timeless comfort.
            Experience a refined stay where nature meets elegance.
          </p>

          <div className="flex gap-5">
            <button
              onClick={() => navigate("/rooms")}
              className="px-7 py-3 rounded-lg bg-[#C9A24D] text-black font-medium hover:bg-[#E6D08A] transition"
            >
              Explore Rooms →
            </button>

            <button
              onClick={() => navigate("/book-room")}
              className="px-7 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition"
            >
              Book Now
            </button>
          </div>
        </div>
        {/* CENTER – Check Availability */}
<div
  className="
    hidden lg:block
    absolute
    top-1/2
    left-1/2
    -translate-x-[-10%]
    -translate-y-1/2
    w-[300px]
    rounded-2xl
    border border-[#C9A24D]/30
    bg-black/40
    backdrop-blur-xl
    shadow-2xl
    p-6
    z-20
  "
>
  {/* Header */}
  <div className="text-center mb-5">
    <h3 className="text-white text-xs font-semibold tracking-[0.25em] uppercase">
      Check Availability
    </h3>
    <div className="mt-2 h-px w-10 mx-auto bg-[#C9A24D]" />
  </div>

  {/* Inputs */}
  <input
    type="date"
    className="
      w-full rounded-lg bg-white/10 px-3 py-2
      text-sm text-white
      focus:outline-none focus:ring-2 focus:ring-[#C9A24D]/60
      mb-3
    "
  />

  <input
    type="date"
    className="
      w-full rounded-lg bg-white/10 px-3 py-2
      text-sm text-white
      focus:outline-none focus:ring-2 focus:ring-[#C9A24D]/60
      mb-4
    "
  />

  {/* Button */}
  <button
    onClick={() => navigate('/rooms')}
    className="
      w-full rounded-xl
      bg-gradient-to-r from-[#C9A24D] to-[#E6D08A]
      py-2.5 text-sm font-semibold text-black
      shadow-lg hover:scale-[1.03] transition
    "
  >
    Check Rooms →
  </button>
</div>

        
        
        {/* RIGHT – CONTACT FORM (UNCHANGED SIZE) */}
        <div className="flex items-center justify-end">
  <form
    onSubmit={handleSubmit}
    className="
      w-80
      rounded-3xl
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      shadow-2xl
      p-6
      space-y-3
    "
  >
    {/* Header */}
    <div className="text-center mb-4">
      <h3 className="text-white text-sm font-semibold tracking-[0.2em] uppercase">
        Quick Enquiry
      </h3>
      <div className="mt-2 h-px w-12 mx-auto bg-[#C9A24D]" />
    </div>

    {/* Inputs */}
    <input
      name="name"
      placeholder="Your Name"
      onChange={handleChange}
      className="
        w-full
        rounded-lg
        bg-white/10
        px-3 py-2
        text-sm text-white
        placeholder:text-gray-300
        focus:outline-none
        focus:ring-2 focus:ring-[#C9A24D]/60
      "
      required
    />

    <input
      name="email"
      placeholder="Email Address"
      onChange={handleChange}
      className="
        w-full
        rounded-lg
        bg-white/10
        px-3 py-2
        text-sm text-white
        placeholder:text-gray-300
        focus:outline-none
        focus:ring-2 focus:ring-[#C9A24D]/60
      "
      required
    />

    <input
      name="phone"
      placeholder="Phone Number"
      onChange={handleChange}
      className="
        w-full
        rounded-lg
        bg-white/10
        px-3 py-2
        text-sm text-white
        placeholder:text-gray-300
        focus:outline-none
        focus:ring-2 focus:ring-[#C9A24D]/60
      "
      required
    />

    <select
      name="enquiryType"
      onChange={handleChange}
      className="
        w-full
        rounded-lg
        bg-white/10
        px-3 py-2
        text-sm text-white
        focus:outline-none
        focus:ring-2 focus:ring-[#C9A24D]/60
      "
    >
      <option className="text-black">General Enquiry</option>
      <option className="text-black">Room Booking</option>
      <option className="text-black">Sight Seeing</option>
      <option className="text-black">Events</option>
    </select>

    <textarea
      name="message"
      placeholder="Your Message"
      rows="2"
      onChange={handleChange}
      className="
        w-full
        rounded-lg
        bg-white/10
        px-3 py-2
        text-sm text-white
        placeholder:text-gray-300
        focus:outline-none
        focus:ring-2 focus:ring-[#C9A24D]/60
      "
    />

    {/* Button */}
    <button
      type="submit"
      className="
        w-full
        mt-2
        rounded-xl
        bg-gradient-to-r from-[#C9A24D] to-[#E6D08A]
        py-2.5
        text-sm font-semibold text-black
        shadow-lg
        hover:scale-[1.02]
        transition
      "
    >
      Send Enquiry →
    </button>
  </form>
</div>

      </div>

  <div className="hidden lg:flex flex-col items-center text-white w-full max-w-4xl mx-auto gap-10 -mt-60">

  {/* Section Title with Lines */}
  <div className="flex items-center gap-6 w-full justify-center mt-5">
    <div className="h-px bg-white/20 w-24" />
    <h4 className="text-sm tracking-widest uppercase text-[#E6D08A]">
      Why Choose Us
    </h4>
    <div className="h-px bg-white/20 w-24" />
  </div>

  {/* Features Grid */}
  <ul className="grid grid-cols-2 gap-y-6 gap-x-16 text-sm text-gray-200">
    <li className="flex items-start gap-3">
      <span className="text-[#C9A24D]">◆</span>
      Scenic hill views & peaceful surroundings
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C9A24D]">◆</span>
      Premium rooms with modern comfort
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C9A24D]">◆</span>
      Easy booking & personalized service
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C9A24D]">◆</span>
      Perfect for couples, families & retreats
    </li>
  </ul>

</div>

    </section>
  );
}
