import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Header from './Header';

const stats = [
  { value: '500+', label: 'Events Produced' },
  { value: '12+', label: 'Years of Excellence' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* ── Background Image ── */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
      >
        <img
          src="/src/assets/and2.png"
          alt="Luxury event setup"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* ── Multi-layer Overlay ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* ── Decorative grain texture ── */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* ── Header ── */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-col items-center h-full px-8" style={{ paddingTop: '100px', paddingBottom: '40px' }}>

        {/* Upper: headline + buttons — vertically centered */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <div className="max-w-[720px] w-full">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-flex items-center justify-center gap-3 mb-8"
            >
              <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#C9A96E] font-medium">
                Dubai's Premier Event Studio
              </span>
              <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="font-serif text-[60px] sm:text-[76px] lg:text-[92px] xl:text-[106px] leading-[0.9] tracking-tight text-white mb-7"
            >
              <span className="block">We Don't</span>
              <span className="block">Do <em className="not-italic" style={{ color: '#C9A96E' }}>Ordinary.</em></span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: 'easeOut' }}
              className="font-sans text-white/70 text-sm lg:text-base leading-relaxed max-w-[500px] mx-auto mb-10"
            >
              End-to-end event management in Dubai — seamless planning, creative production and unforgettable moments crafted for the world's most discerning clients.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#services"
                className="group inline-flex items-center gap-3 h-[52px] px-8 bg-[#C9A96E] text-black font-sans text-[11px] uppercase tracking-widest font-semibold rounded-sm hover:bg-[#b8924f] transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2} />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 h-[52px] px-8 border border-white/30 text-white font-sans text-[11px] uppercase tracking-widest font-medium rounded-sm hover:border-white/70 hover:bg-white/5 transition-all duration-300"
              >
                Let's Create Magic
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom: Stats Bar — sits below content, not overlapping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="flex items-end justify-center gap-10 sm:gap-16 pt-8 border-t border-white/10 w-full"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="font-serif text-[34px] lg:text-[40px] leading-none text-white tracking-tight">
                {stat.value}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/50 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 right-8 lg:right-12 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/40 rotate-90 origin-center mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* ── Right-side vertical text ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-1/2 translate-y-1/2 right-6 lg:right-10 z-10 hidden lg:flex flex-col items-center gap-5"
      >
        <div className="h-12 w-[1px] bg-white/20" />
        <span
          className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/30"
          style={{ writingMode: 'vertical-rl' }}
        >
          AND Events Management
        </span>
        <div className="h-12 w-[1px] bg-white/20" />
      </motion.div>
    </section>
  );
}
