import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Eye, Zap, Heart } from 'lucide-react';
import ourStoryImage from '../assets/our-story-image.png';

const pillars = [
  {
    number: '01',
    title: 'Vision Without Limits',
    desc: 'We start with imagination — no brief is too ambitious, no concept too bold.',
    icon: Eye,
  },
  {
    number: '02',
    title: 'Execution With Precision',
    desc: 'Every micro-detail is orchestrated. Nothing is left to chance.',
    icon: Zap,
  },
  {
    number: '03',
    title: 'Experiences That Endure',
    desc: 'When the lights fade, the memory must remain. We build events that live in people.',
    icon: Heart,
  },
];




export default function OurStory() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative w-full bg-[#2B0408] overflow-hidden"
    >

      {/* ── Subtle noise texture ── */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px',
        }}
      />

      {/* ── Marquee Divider ── */}
      <div className="w-full bg-[#F8F3EE] py-3 lg:py-4 flex overflow-hidden whitespace-nowrap z-20 relative border-b border-black/5">
        <motion.div
          className="flex items-center gap-8 lg:gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {/* We repeat the text twice so it loops seamlessly */}
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-8 lg:gap-12 shrink-0">
              <span className="font-serif text-[#2B0408] text-sm lg:text-base tracking-widest uppercase">Dubai's Premier Event Studio</span>
              <span className="w-2 h-2 rounded-full bg-[#A6192E]" />
              <span className="font-serif text-[#2B0408] text-sm lg:text-base tracking-widest uppercase">Crafting Moments</span>
              <span className="w-2 h-2 rounded-full bg-[#A6192E]" />
              <span className="font-serif text-[#2B0408] text-sm lg:text-base tracking-widest uppercase">Creating Legacies</span>
              <span className="w-2 h-2 rounded-full bg-[#A6192E]" />
              <span className="font-serif text-[#2B0408] text-sm lg:text-base tracking-widest uppercase">Since 2012</span>
              <span className="w-2 h-2 rounded-full bg-[#A6192E]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[80vh]">

        {/* ── LEFT: Image Panel ── */}
        <div className="relative overflow-hidden h-[55vw] min-h-[320px] lg:h-auto">

          {/* Image */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          >
            <img
              src={ourStoryImage}
              alt="AND Events — crafting extraordinary moments"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2B0408]/10 via-transparent to-[#2B0408]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B0408]/80 via-transparent to-transparent" />
          </motion.div>

          {/* ── Floating Stat Badge (bottom-left of image) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-8 left-8 lg:bottom-12 lg:left-10"
          >
            <div
              className="rounded-2xl px-6 py-5"
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="flex items-end gap-6">
                <div className="flex flex-col">
                  <span className="font-serif text-[44px] leading-none text-white">500<span className="text-white">+</span></span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/45 mt-1">Events Produced</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-serif text-[44px] leading-none text-white">12<span className="text-white">+</span></span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/45 mt-1">Years Active</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Rotating circular label ── */}
          <motion.div
            className="absolute top-8 right-8 lg:top-10 lg:right-10 w-[90px] h-[90px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 90 90" width="90" height="90">
              <defs>
                <path id="storyCircle" d="M 45,45 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" />
              </defs>
              <text fontSize="8" letterSpacing="3" fill="rgba(201,169,110,0.7)" fontFamily="Inter, sans-serif" fontWeight="500">
                <textPath href="#storyCircle">OUR STORY · SINCE 2012 · DUBAI ·</textPath>
              </text>
              <circle cx="45" cy="45" r="4" fill="rgba(201,169,110,0.7)" />
            </svg>
          </motion.div>
        </div>

        {/* ── RIGHT: Editorial Text Panel ── */}
        <div className="relative flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-20 lg:py-24">

          {/* Giant ghost number background */}
          <div
            className="absolute right-6 top-1/2 -translate-y-1/2 font-serif font-bold leading-none select-none pointer-events-none"
            style={{
              fontSize: 'clamp(160px, 22vw, 280px)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(201,169,110,0.06)',
            }}
          >
            AND
          </div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center mb-8 relative"
          >
            <div className="absolute right-full mr-3 flex items-center">
              <Sparkles className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
            </div>
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-white">Our Story</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-white leading-[0.9] tracking-tight mb-8"
            style={{ fontSize: 'clamp(42px, 5.5vw, 72px)' }}
          >
            Crafting Moments.<br />
            <span style={{ color: 'white' }}>Creating Legacies.</span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-[1px] bg-white/10 mb-8 origin-left"
            style={{ maxWidth: '280px' }}
          />

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="font-sans text-white/50 text-sm lg:text-[15px] leading-[1.9] mb-12 max-w-[420px]"
          >
            AND Events Management was born from a belief — that every celebration is one-of-a-kind and every detail matters. What started as a passion has grown into Dubai's most trusted full-service event studio.
          </motion.p>

          {/* ── Pillars ── */}
          <div className="flex flex-col gap-0 mb-12">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.8 + i * 0.12, ease: 'easeOut' }}
                className="group flex items-start gap-5 py-5 border-b border-white/[0.06] cursor-default hover:border-[#A6192E]/30 transition-colors duration-300"
              >
                {/* Number */}
                <span className="font-serif text-[13px] text-white/50 group-hover:text-white transition-colors duration-300 mt-[2px] flex-shrink-0 w-6">
                  {pillar.number}
                </span>

                {/* Icon circle */}
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#A6192E]/40 group-hover:bg-[#A6192E]/10 transition-all duration-300">
                  <pillar.icon className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <h4 className="font-sans text-[12px] uppercase tracking-[0.18em] text-white/80 font-semibold mb-1 group-hover:text-white transition-colors duration-300">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-[13px] text-white/35 leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#journey"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="group self-start flex items-center gap-3 h-[48px] px-7 border border-[#A6192E]/40 text-white font-sans text-[10px] uppercase tracking-widest font-semibold rounded-full hover:bg-[#A6192E] hover:text-white hover:border-[#A6192E] transition-all duration-300"
          >
            Discover Our Journey
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
