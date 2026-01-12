import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Rooms from "./pages/Rooms";
import Amenities from "./components/Amenities";
import About from "./components/About";
import AdminDashboard from "./pages/AdminDashboard";
import BookRoom from "./pages/BookRoom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F8F9FA]">
      
      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="relative w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-room" element={<BookRoom />} />

          {/* ADMIN */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        
      </main>

    </div>
  );
}
