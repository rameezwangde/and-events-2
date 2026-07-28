import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Corporate Events',
    tag: 'Business & Enterprise',
    desc: 'Gala dinners, product launches, conferences and team-building — designed to inspire your people and impress your clients.',
    img: 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/11/01/1154/SELRS-P1200-Grand-Ballroom-Business-Conference.jpg/SELRS-P1200-Grand-Ballroom-Business-Conference.4x3.jpg',
  },
  {
    number: '02',
    title: 'Wedding Celebrations',
    tag: 'Romance & Ceremony',
    desc: 'End-to-end wedding planning with flawless execution — from intimate nikkahs to grand ballroom receptions in Dubai.',
    img: 'https://i.pinimg.com/originals/c3/3b/80/c33b8076fdce4f23372ae540744341c5.gif',
  },
  {
    number: '03',
    title: 'Birthday & Theme Parties',
    tag: 'Celebrations',
    desc: "From children's magical parties to lavish milestone events — we design memories that are felt long after the music ends.",
    img: 'https://img.freepik.com/premium-photo/birthday-party-with-balloons-banner-that-says-bday_1015384-65431.jpg',
  },
  {
    number: '04',
    title: 'In-House Production',
    tag: 'Technical & AV',
    desc: 'State-of-the-art AV production, stage design, lighting rigs and technical direction — seamlessly run by our own crew.',
    img: 'https://picsum.photos/seed/production/800/600',
  },
  {
    number: '05',
    title: 'Entertainment & Performers',
    tag: 'Live Experience',
    desc: 'Bollywood artists, Samba dancers, percussionists and world-class performers — curated for your audience.',
    img: 'https://tse4.mm.bing.net/th/id/OIP.yq8FRnkRTxObxDck6TTalgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    number: '06',
    title: 'Events & Activations',
    tag: 'Brand & Marketing',
    desc: 'Mall activations, road shows, exhibitions and brand launches — turning footfall into engagement and engagement into memory.',
    img: 'https://www.canvasidea.in/images/Exhibitions.webp',
  },
];

const ROW_COLLAPSED = 80;
const ROW_EXPANDED = 200;

export default function OurServices() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="services"
      className="relative w-full bg-[#F8F3EE] selection:bg-[#6B0F1A] selection:text-white"
    >
      {/* ── Header ── */}
      <div className="px-8 lg:px-[72px] pt-24 pb-16 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
        <div>
          <div className="relative inline-flex items-center mb-7">
            <div className="absolute right-full mr-3 w-5 lg:w-7 h-[1px] bg-[#6B0F1A]" />
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#6B0F1A]">
              Our Services
            </span>
          </div>
          <h2
            className="font-serif text-black leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
          >
            What We<br />
            <span className="text-[#6B0F1A]">Create.</span>
          </h2>
        </div>

        <p className="font-sans text-black/65 text-[13px] leading-[1.8] max-w-[300px] lg:text-right">
          Six disciplines. One standard — obsessive precision from the first brief to the final bow.
        </p>
      </div>

      {/* ── Accordion List ── */}
      <div className="border-t border-black/[0.08]">
        {services.map((service, i) => {
          const isOpen = hovered === i;

          return (
            <motion.div
              key={i}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="relative border-b border-black/[0.08] cursor-pointer overflow-hidden"
              animate={{ height: isOpen ? ROW_EXPANDED : ROW_COLLAPSED }}
              initial={false}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* ── Always-visible top row ── */}
              <div
                className="flex items-center gap-5 lg:gap-8 px-8 lg:px-[72px]"
                style={{ height: ROW_COLLAPSED }}
              >
                {/* Number */}
                <motion.span
                  animate={{ color: isOpen ? '#A6192E' : 'rgba(0,0,0,0.45)' }}
                  transition={{ duration: 0.3 }}
                  className="font-serif text-[13px] leading-none flex-shrink-0 w-6 hidden sm:block"
                >
                  {service.number}
                </motion.span>

                {/* Title */}
                <motion.h3
                  animate={{
                    color: isOpen ? '#111111' : 'rgba(0,0,0,0.88)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-serif flex-1 leading-none"
                  style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
                >
                  {service.title}
                </motion.h3>

                {/* Tag — hidden on small screens */}
                <motion.span
                  animate={{ opacity: isOpen ? 1 : 0.65 }}
                  transition={{ duration: 0.3 }}
                  className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#6B0F1A] hidden lg:block flex-shrink-0 mr-8"
                >
                  {service.tag}
                </motion.span>

                {/* Arrow circle */}
                <motion.div
                  animate={{
                    backgroundColor: isOpen ? '#6B0F1A' : 'transparent',
                    borderColor: isOpen ? '#6B0F1A' : 'rgba(0,0,0,0.15)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ArrowUpRight
                      className="w-4 h-4 transition-colors duration-300"
                      style={{ color: isOpen ? 'white' : 'rgba(0,0,0,0.35)' }}
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* ── Expandable: description ── */}
              <motion.div
                className="px-8 lg:px-[72px] pb-0"
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 8 }}
                transition={{ duration: 0.35, delay: isOpen ? 0.15 : 0 }}
              >
                <p className="font-sans text-[13px] text-black/70 leading-[1.85] max-w-[520px]">
                  {service.desc}
                </p>
              </motion.div>

              {/* ── Image panel (slides in from right) ── */}
              <motion.div
                className="absolute right-0 top-0 h-full pointer-events-none"
                animate={{
                  width: isOpen ? '38%' : '0%',
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{ minWidth: 0 }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Fade edge so image blends into the row */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to right, #F8F3EE 0%, transparent 30%)',
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Footer link ── */}
      <div className="px-8 lg:px-[72px] py-14">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-[#6B0F1A] font-semibold"
        >
          Explore All Services
          <ArrowUpRight
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            strokeWidth={2}
          />
        </a>
      </div>
    </section>
  );
}
