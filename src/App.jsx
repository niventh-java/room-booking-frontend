import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Rooms from "./pages/Rooms";
import Amenities from "./components/Amenities";
import About from "./components/About";
import AdminDashboard from "./pages/AdminDashboard";
import BookRoom from "./pages/BookRoom";
import Home from "./pages/Home";
import Transport from "./components/Transport"; // 1. IMPORT ADDED HERE

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
            
            {/* 3. Transport route now works perfectly */}
            <Route path="/transport" element={<PageWrapper><Transport /></PageWrapper>} />

            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            
            <Route path="/book-room" element={<PageWrapper><BookRoom /></PageWrapper>} />
            
            <Route path="/admin" element={<PageWrapper><AdminDashboard /></PageWrapper>} />
            
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}