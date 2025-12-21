import heroImg from "../assets/hero.jpg";

export default function About() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section
        className="relative h-[45vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">
            About Dazzling Villa
          </h1>
          <p className="max-w-2xl text-gray-200">
            A peaceful retreat surrounded by the misty hills of Munnar
          </p>
        </div>
      </section>

      {/* WELCOME */}
      <section className="px-12 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to Dazzling Villa
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Nestled amidst the lush greenery of Munnar,{" "}
          <span className="font-medium">Dazzling Villa</span> offers a perfect
          blend of comfort, tranquility, and nature. Whether you’re seeking a
          romantic getaway or a peaceful escape, our villa promises an
          unforgettable stay.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#FAF7F2] py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-12">
          <div className="bg-white p-6 rounded-xl shadow">
            🌄
            <h3 className="font-semibold mt-3 mb-2">Scenic Location</h3>
            <p className="text-gray-600 text-sm">
              Breathtaking valley and mountain views.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            🛏
            <h3 className="font-semibold mt-3 mb-2">Comfortable Rooms</h3>
            <p className="text-gray-600 text-sm">
              Spacious rooms with modern amenities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            🤝
            <h3 className="font-semibold mt-3 mb-2">Warm Hospitality</h3>
            <p className="text-gray-600 text-sm">
              Friendly service that makes you feel at home.
            </p>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="px-12 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-600 mb-6 max-w-2xl">
          We promise you a peaceful and unforgettable stay surrounded by
          the misty hills and natural beauty of Munnar.
        </p>

        <div className="space-y-4 text-gray-700">
          <p>📞 +91 99409 84731</p>
          <p>📞 +91 79047 96306</p>
          <p>✉ dazzlingvillamunnar@gmail.com</p>
          <p>
            📍 Dazzling Villa, Silent Valley Road,<br />
            Devikulam Post, Munnar,<br />
            Idukki-Dt, Kerala
          </p>
        </div>
      </section>

    </div>
  );
}
