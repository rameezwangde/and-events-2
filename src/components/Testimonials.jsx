import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "The most flawless corporate gala we've ever hosted. Every detail was executed with absolute precision.",
    author: 'Sarah Jenkins',
    role: 'Marketing Director',
    company: 'Nexus Corp',
  },
  {
    quote: "AND Events didn't just plan our wedding; they orchestrated a masterpiece that our families will talk about forever.",
    author: 'Michael & Emily',
    role: 'Wedding Clients',
    company: 'Dubai',
  },
  {
    quote: "From the initial moodboard to the final curtain call, their creativity and dedication were completely unmatched.",
    author: 'David Al Fayed',
    role: 'CEO',
    company: 'Horizon Real Estate',
  },
  {
    quote: "They took our wildest ideas and turned them into a stunning visual reality. An absolute pleasure to work with.",
    author: 'Jessica Thorne',
    role: 'Brand Manager',
    company: 'Vogue',
  },
  {
    quote: "Their technical production team is simply the best in Dubai. Flawless sound, lighting, and stage management.",
    author: 'Omar Hassan',
    role: 'Event Producer',
    company: 'Dubai',
  },
  {
    quote: "We wanted a birthday party that felt like a movie set. They delivered exactly that — pure, absolute magic.",
    author: 'The Al Maktoum Family',
    role: 'Private Clients',
    company: 'Dubai',
  },
  {
    quote: "Every floral arrangement, every lighting cue, every napkin fold was perfect. True perfectionists.",
    author: 'Sophie Laurent',
    role: 'Creative Director',
    company: 'Paris',
  },
  {
    quote: "Professional, visionary, and incredibly calm under pressure. Our go-to agency for all regional activations.",
    author: 'Elena Rostova',
    role: 'Head of Comms',
    company: 'TechFlow',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#930708] overflow-hidden selection:bg-[#A6192E] selection:text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Ghost index number ── */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-bold leading-none select-none pointer-events-none"
        style={{
          fontSize: 'clamp(200px, 28vw, 380px)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(201,169,110,0.05)',
          lineHeight: 1,
          right: '-0.05em',
        }}
      >
        {String(active + 1).padStart(2, '0')}
      </div>

      {/* ── Horizontal rule top ── */}
      <div className="w-full border-t border-white/[0.06]" />

      <div className="relative z-10 px-8 lg:px-[72px] pt-20 pb-24">

        {/* ── Header ── */}
        <div className="flex items-center justify-between mb-20">
          <div className="relative inline-flex items-center">
            <div className="absolute right-full mr-3 w-7 h-[1px] bg-[#A6192E]" />
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-white">
              Client Stories
            </span>
          </div>

          {/* Progress bar */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="font-sans text-[10px] text-white/25 tabular-nums">
              {String(active + 1).padStart(2, '0')}
            </span>
            <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-[#A6192E]"
                animate={{ width: `${((active + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
            <span className="font-sans text-[10px] text-white/25 tabular-nums">
              {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* ── Main Quote Stage ── */}
        <div className="relative min-h-[260px] lg:min-h-[220px] mb-16">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-white leading-[1.2] max-w-[900px]"
              style={{ fontSize: 'clamp(26px, 3.8vw, 52px)' }}
            >
              &ldquo;{t.quote}&rdquo;
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* ── Author + Controls ── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

          {/* Author info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${active}`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex items-center gap-5"
            >
              {/* Initials avatar */}
              <div className="w-11 h-11 rounded-full border border-[#A6192E]/30 flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-[14px] text-white">
                  {t.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-white font-semibold mb-1">
                  {t.author}
                </p>
                <p className="font-sans text-[11px] text-white/40">
                  {t.role}{t.company !== 'Dubai' && t.company !== 'Paris' ? `, ${t.company}` : ''}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="group w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-[#A6192E]/40 transition-colors duration-300"
            >
              <ChevronLeft className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="group w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-[#A6192E]/40 transition-colors duration-300"
            >
              <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* ── Dot selectors ── */}
        <div className="flex items-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="relative h-[3px] rounded-full transition-all duration-400 overflow-hidden"
              style={{ width: active === i ? '32px' : '12px', background: 'rgba(255,255,255,0.12)' }}
            >
              {active === i && (
                <motion.div
                  className="absolute inset-0 bg-[#A6192E] rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: paused ? undefined : 1 }}
                  transition={{ duration: 5, ease: 'linear' }}
                  key={`progress-${active}`}
                />
              )}
            </button>
          ))}
        </div>

      </div>

      {/* ── Bottom rule ── */}
      <div className="w-full border-b border-white/[0.06]" />
    </section>
  );
}
