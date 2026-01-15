import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Start hidden and slightly down
      animate={{ opacity: 1, y: 0 }}   // Fade in and move up
      exit={{ opacity: 0, y: -10 }}    // Fade out and move up slightly
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // Luxury "Cubic Bezier" easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;