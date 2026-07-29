import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const navLinks = [
  { name: 'Home', active: true },
  { name: 'About Us', active: false },
  { name: 'Services', active: false },
  { name: 'Our Work', active: false },
  { name: 'Contact Us', active: false },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-[90px] lg:h-[100px] z-50 flex items-center justify-between px-6 lg:px-[60px]"
        style={{ 
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: '#930708',
        }}
      >


        {/* Logo */}
        <a href="#" className="relative z-10 flex items-center w-[130px] lg:w-[150px]">
          <img src={logo} alt="AND Events Management Logo" className="w-full h-auto object-contain rounded-md" />
        </a>

        {/* Main Navigation (Perfectly Centered Desktop) */}
        <nav className="absolute left-1/2 -translate-x-1/2 h-full hidden lg:flex items-center gap-[40px] xl:gap-[50px] z-10 w-max">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              className={`relative font-sans text-[13px] font-medium tracking-[0.12em] uppercase py-2 group transition-colors ${
                link.active ? 'text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
              <span 
                className={`absolute left-0 bottom-0 h-[1px] bg-[#A6192E] transition-all duration-300 ease-out ${
                  link.active ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Right CTA / Menu */}
        <div className="relative z-10 flex items-center gap-6">
          {/* CTA Button only on Desktop */}
          <a 
            href="#contact" 
            className="hidden lg:flex items-center justify-center bg-white text-[#930708] px-8 py-3.5 rounded-full font-sans text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-white/90 hover:scale-105 transition-all duration-300"
          >
            Let's Create Magic
          </a>
          
          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden flex items-center justify-center w-[44px] h-[44px] rounded-full transition-all duration-300 group hover:scale-105 hover:bg-white/20"
            style={{ border: '1px solid rgba(255,255,255,0.25)' }}
            aria-label="Menu"
          >
            <Menu className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-ivory flex flex-col justify-center px-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 w-12 h-12 flex items-center justify-center rounded-full border border-deep-maroon/20 text-deep-maroon hover:bg-deep-maroon hover:text-white transition-colors"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
            
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className={`font-serif text-4xl font-medium tracking-wide ${
                    link.active ? 'text-deep-maroon' : 'text-black/70'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                className="mt-4 font-sans text-xs tracking-[0.2em] uppercase font-bold text-deep-maroon"
              >
                Let's Create Magic &rarr;
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
