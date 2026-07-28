import { motion } from 'framer-motion';
import heroImage from '../assets/and2.png';

export default function HeroVisual() {
  return (
    <div className="absolute bottom-0 lg:top-0 right-0 w-full lg:w-[55%] h-[45vh] lg:h-full z-0 overflow-hidden">
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full h-full lg:clip-diagonal"
      >
        <img
          src={heroImage}
          alt="Luxury event setup with lighting and circular stage"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
      </motion.div>
    </div>
  );
}
