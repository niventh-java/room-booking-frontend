import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// src/App.jsx (Top Section)
import Navbar from "./components/Navbar";
import Rooms from "./pages/Rooms";
import AdminDashboard from "./pages/AdminDashboard";
import BookRoom from "./pages/BookRoom";
import Home from "./pages/Home";
import EnquiryPage from "./pages/EnquiryPage";

// Ensure these match your physical filenames (Capital Letters)
import Amenities from "./components/Amenities";
import About from "./components/About";
import Transport from "./components/Transport";

// 2. Optimized PageWrapper component
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0A0F0A]">
      <Navbar />

      <main className="relative w-full">
        <AnimatePresence mode="wait">
          {/* Using the location key ensures the animation triggers on every route change */}
          <Routes location={location} key={location.pathname}>
            
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />            
            <Route path="/rooms" element={<PageWrapper><Rooms /></PageWrapper>} />           
            <Route path="/amenities" element={<PageWrapper><Amenities /></PageWrapper>} />           
            <Route path="/transport" element={<PageWrapper><Transport /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />            
            <Route path="/book-room" element={<PageWrapper><BookRoom /></PageWrapper>} />           
            <Route path="/admin" element={<PageWrapper><AdminDashboard /></PageWrapper>} />
            <Route path="/enquiry" element={<PageWrapper><EnquiryPage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}