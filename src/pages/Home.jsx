import Hero from "../components/Hero";
import About from "../components/About";
import Amenities from "../components/Amenities";
import FloatingGallery from "../components/FloatingGallery";
import Services from "../components/services";
import Directions from "../components/Directions";
import RoomGallery from "../components/RoomGallery";
import Footer from "../components/Footer";




export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />   
        
      <About />
      <RoomGallery />
      <Services />
      <Directions/>
    

      <Amenities />
      <Footer/>
      
    </main>
  );
}
