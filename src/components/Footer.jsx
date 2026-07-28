import { motion } from 'framer-motion';
import { Camera, Briefcase, MessageCircle, Globe, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Work', href: '#' },
    { name: 'Testimonials', href: '#' },
  ],
  services: [
    { name: 'Event Strategy', href: '#' },
    { name: 'Creative Design', href: '#' },
    { name: 'Production', href: '#' },
    { name: 'Venue Sourcing', href: '#' },
  ],
};

const socialLinks = [
  { icon: Camera, href: '#' },
  { icon: Briefcase, href: '#' },
  { icon: MessageCircle, href: '#' },
  { icon: Globe, href: '#' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#930708] to-[#1A0204] text-white pt-20 lg:pt-32 pb-10 px-6 lg:px-[70px] relative overflow-hidden">
      

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Newsletter (Col span 4) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col pr-0 lg:pr-12">
            <a href="#" className="flex items-center w-[150px] mb-8">
              <img src={logo} alt="AND Events Management Logo" className="w-full h-auto object-contain rounded-md" />
            </a>
            
            <p className="font-sans text-white/60 text-[14px] leading-relaxed max-w-[350px] mb-8">
              Transforming visions into unforgettable experiences. We are Dubai's premier luxury event management agency, crafting moments that leave a lasting legacy.
            </p>

            {/* Newsletter */}
            <div className="flex flex-col gap-3 max-w-[400px]">
              <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-white font-bold">
                Subscribe to our newsletter
              </span>
              <div className="flex w-full bg-white/5 rounded-full border border-white/10 overflow-hidden focus-within:border-[#A6192E] transition-colors">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent text-white text-[14px] px-6 py-3.5 w-full outline-none placeholder:text-white/30"
                />
                <button className="bg-[#6E0F18] text-white px-6 font-sans text-[11px] uppercase tracking-[0.1em] font-bold hover:bg-[#A6192E] hover:text-[#930708] transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links (Col span 2) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <h6 className="font-sans text-[12px] uppercase tracking-[0.2em] text-white font-bold mb-6 lg:mb-8">
              Company
            </h6>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-sans text-[14px] text-white/70 hover:text-white hover:pl-2 transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Col span 2) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <h6 className="font-sans text-[12px] uppercase tracking-[0.2em] text-white font-bold mb-6 lg:mb-8">
              Expertise
            </h6>
            <ul className="flex flex-col gap-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-sans text-[14px] text-white/70 hover:text-white hover:pl-2 transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Col span 3) */}
          <div className="col-span-1 lg:col-span-3 flex flex-col">
            <h6 className="font-sans text-[12px] uppercase tracking-[0.2em] text-white font-bold mb-6 lg:mb-8">
              Get in Touch
            </h6>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 group cursor-pointer">
                <MapPin className="w-5 h-5 text-white mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-sans text-[14px] text-white/70 leading-relaxed group-hover:text-white transition-colors">
                  Boulevard Plaza Tower 1,<br />Downtown Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Phone className="w-5 h-5 text-white shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-sans text-[14px] text-white/70 group-hover:text-white transition-colors">
                  +971 4 123 4567
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Mail className="w-5 h-5 text-white shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-sans text-[14px] text-white/70 group-hover:text-white transition-colors">
                  hello@andevents.ae
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="font-sans text-[13px] text-white/50">
            &copy; {new Date().getFullYear()} AND Events Management. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="font-sans text-[13px] text-white/50 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="font-sans text-[13px] text-white/50 hover:text-white transition-colors">Terms of Service</a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#A6192E] hover:border-[#A6192E] hover:text-[#930708] transition-colors duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
