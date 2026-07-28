import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section 
      id="contact"
      ref={containerRef} 
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0D0B0A] selection:bg-[#C9A96E] selection:text-black"
    >
      
      {/* ── Parallax Background ── */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
          alt="Cinematic Event Background" 
          className="w-full h-[120%] object-cover object-center"
        />
        {/* Gradient overlays to blend it into the dark background smoothly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/70 to-[#0D0B0A]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0B0A] via-transparent to-transparent"></div>
      </motion.div>

      {/* ── Film Grain Noise ── */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px',
        }}
      />
      
      {/* ── Content ── */}
      <div className="relative z-10 text-center px-8 lg:px-[72px] max-w-[1200px] mx-auto w-full py-24">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-8 h-[1px] bg-[#C9A96E]" />
          <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#C9A96E]">
            Ready to Collaborate
          </span>
          <div className="w-8 h-[1px] bg-[#C9A96E]" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-white leading-[0.95] tracking-tight mb-14">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block mb-2" 
            style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}
          >
            Let's Create
          </motion.span>
          
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block italic font-light text-[#C9A96E] mb-2 pr-4 lg:pr-12" 
            style={{ fontSize: 'clamp(52px, 8vw, 120px)' }}
          >
            Something
          </motion.span>
          
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block" 
            style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}
          >
            Extraordinary.
          </motion.span>
        </h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-white/50 text-[13px] md:text-[15px] leading-[1.8] max-w-[460px] mx-auto mb-16"
        >
          From concept to execution, our team of experts is ready to bring your vision to life. Partner with us for your next iconic event.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center gap-6 h-[68px] px-10 bg-[#C9A96E] text-black overflow-hidden"
          >
            {/* Hover reveal background */}
            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
            
            <span className="relative z-10 font-sans text-[11px] uppercase tracking-[0.25em] font-semibold mt-[2px]">
              Start a Project
            </span>
            
            <div className="relative z-10 w-9 h-9 rounded-full border border-black/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 ease-[0.16,1,0.3,1]">
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
