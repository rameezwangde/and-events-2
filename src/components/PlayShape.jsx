import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function PlayShape() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      className="hidden lg:flex absolute left-[45%] top-[50%] -translate-y-1/2 z-30 items-center justify-center"
    >
      {/* Outer decorative outline */}
      <div className="absolute w-[200px] h-[350px] border-[1px] border-soft-beige/40 rounded-[50px] -rotate-12 translate-x-3 translate-y-3" />
      
      {/* Main geometric shape */}
      <div 
        className="relative w-[190px] h-[340px] bg-gradient-to-br from-deep-maroon to-dark-maroon rounded-[45px] shadow-2xl flex items-center justify-center overflow-hidden"
        style={{
          boxShadow: '0 25px 50px -12px rgba(75, 8, 14, 0.5)'
        }}
      >
        {/* Inner subtle outline */}
        <div className="absolute inset-2 border border-white/10 rounded-[38px]" />
        
        {/* Play Icon */}
        <div className="relative w-16 h-16 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 cursor-pointer hover:bg-white/10 transition-colors group">
          <Play className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
        </div>
      </div>
    </motion.div>
  );
}
