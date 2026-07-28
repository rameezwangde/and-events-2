import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const partners = [
  { name: 'Four Seasons', category: 'Hospitality' },
  { name: 'Vogue', category: 'Media' },
  { name: 'Emirates', category: 'Aviation' },
  { name: 'Cartier', category: 'Luxury' },
  { name: 'Ritz-Carlton', category: 'Hospitality' },
  { name: 'Moët & Chandon', category: 'Beverage' },
  { name: 'Bvlgari', category: 'Jewellery' },
];

// Separator dot component
function Dot() {
  return (
    <span
      className="inline-block w-[5px] h-[5px] rounded-full bg-[#A6192E] flex-shrink-0 mx-10 lg:mx-16 self-center"
      aria-hidden="true"
    />
  );
}

// Build the full repeated list for seamless looping
const track = [...partners, ...partners, ...partners];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="partners"
      ref={ref}
      className="relative w-full bg-[#F8F3EE] overflow-hidden selection:bg-[#6B0F1A] selection:text-white"
    >
      {/* ── Top rule ── */}
      <div className="w-full border-t border-black/[0.08]" />

      {/* ── Header ── */}
      <div className="px-8 lg:px-[72px] pt-20 pb-16 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
        <div>
          <div className="relative inline-flex items-center mb-7">
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#6B0F1A]">
              Trusted By
            </span>
          </div>
          <h2
            className="font-serif text-black leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
          >
            The Names<br />
            <span className="text-[#6B0F1A]">That Trust Us.</span>
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-sans text-black/50 text-[13px] leading-[1.8] max-w-[280px] lg:text-right"
        >
          From global luxury houses to Dubai's most celebrated hospitality brands — they choose AND Events.
        </motion.p>
      </div>

      {/* ── Scrolling Marquee ── */}
      <div className="relative w-full overflow-hidden border-t border-b border-black/[0.06] py-10 lg:py-14">

        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F8F3EE, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F8F3EE, transparent)' }}
        />

        <div className="flex items-center partners-marquee whitespace-nowrap w-max">
          {track.map((partner, i) => (
            <span key={i} className="inline-flex items-center flex-shrink-0">
              <span
                className="font-serif inline-block text-black/75 hover:text-[#6B0F1A] transition-colors duration-300 cursor-default leading-none"
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
              >
                {partner.name}
              </span>
              <Dot />
            </span>
          ))}
        </div>
      </div>

      {/* ── Footer stat strip ── */}
      <div className="px-8 lg:px-[72px] py-10 flex flex-wrap items-center gap-10 lg:gap-16">
        {[
          { value: '7+', label: 'Global Partners' },
          { value: '12+', label: 'Years of Trust' },
          { value: '500+', label: 'Events Together' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            className="flex items-baseline gap-3"
          >
            <span className="font-serif text-black" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
              {stat.value}
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-black/40">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ── Bottom rule ── */}
      <div className="w-full border-t border-black/[0.08]" />
    </section>
  );
}
