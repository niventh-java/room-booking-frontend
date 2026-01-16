import Hero from "../components/Hero";
import About from "../components/About";
import Amenities from "../components/Amenities";
import Services from "../components/Services";
import Directions from "../components/Directions";
import RoomGallery from "../components/RoomGallery";
import Footer from "../components/Footer";
import Transport from "../components/Transport";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />   
      <About />
      <Transport />
      <RoomGallery />
      <Services />
      <Directions />
      <Amenities />
      <Footer />
    </main>
  );
}