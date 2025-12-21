import heroImg from "../assets/hero.jpg";

export default function About() {
  return (
    <div className="bg-white">

      {/* HERO BANNER */}
      <section
        className="relative h-[45vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-semibold mb-2">
            About Dazzling Villa
          </h1>
          <p className="max-w-xl text-gray-200">
            A peaceful retreat in the heart of Munnar
          </p>
        </div>
      </section>

      {/* REST OF YOUR CONTENT (NO CHANGE NEEDED) */}


      {/* WELCOME SECTION */}
      <section className="px-12 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Welcome to Dazzling Villa
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Nestled amidst the misty hills and lush greenery of Munnar,
          <span className="font-medium"> Dazzling Villa </span>
          offers a peaceful escape from city life. Our villa combines
          modern comfort with natural beauty, ensuring every guest
          experiences a relaxing and unforgettable stay.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#FAF7F2] px-12 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Choose Dazzling Villa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            🌄
            <h3 className="font-semibold mt-3 mb-2">
              Scenic Location
            </h3>
            <p className="text-gray-600 text-sm">
              Surrounded by misty mountains and serene valleys.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            🛏
            <h3 className="font-semibold mt-3 mb-2">
              Comfortable Rooms
            </h3>
            <p className="text-gray-600 text-sm">
              Well-furnished rooms with modern amenities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            🤝
            <h3 className="font-semibold mt-3 mb-2">
              Warm Hospitality
            </h3>
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
            📍 Dazzling Villa, Silent Valley Road,
            Devikulam Post, Munnar,
            Idukki-Dt, Kerala
          </p>
        </div>
      </section>

    </div>
  );
}
