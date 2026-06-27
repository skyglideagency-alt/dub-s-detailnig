import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Sparkles, Menu, X, Crown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        id="app-header"
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
          isScrolled 
            ? "glass-panel-heavy shadow-2xl py-3 border-brand-cyan/20" 
            : "glass-panel shadow-lg py-4 border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-950/80 shadow-lg shadow-brand-cyan/10 border border-brand-cyan/20 overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img 
                src="https://drive.google.com/thumbnail?id=1QTWHpTHc31yapbMbOIaZFQAEr8zmOcIP&sz=w600" 
                alt="Dub's Detail Logo" 
                className="w-full h-full object-contain p-0.5" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display font-black text-lg md:text-xl tracking-tight text-white flex items-center gap-1.5 leading-none">
                DUB'S <span className="text-gradient-cyan">DETAIL CO.</span>
              </span>
              <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-widest mt-0.5 leading-none">
                THE ART OF AUTOMOTIVE PRESERVATION
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {["services", "portfolio", "hours"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className="font-display font-medium text-sm text-slate-300 hover:text-brand-cyan transition-colors relative group py-2 capitalize"
              >
                {section}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Call and Book CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:812-281-1305"
              className="flex items-center gap-2 font-mono text-xs text-slate-300 hover:text-brand-cyan transition-colors px-3 py-2 rounded-lg hover:bg-slate-800/40 border border-transparent hover:border-slate-700"
            >
              <Phone className="w-4 h-4 text-brand-cyan" />
              <span>(812) 281-1305</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("booking-form-section")}
              className="px-5 py-2.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-display font-semibold text-xs tracking-wider rounded-xl hover:shadow-lg hover:shadow-brand-cyan/20 uppercase transition-all duration-300 cursor-pointer"
            >
              Reserve Detailing
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden glass-panel-heavy rounded-2xl shadow-2xl p-6 border-brand-cyan/20"
          >
            <div className="flex flex-col gap-5">
              {["services", "portfolio", "hours"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className="font-display font-medium text-lg text-slate-200 hover:text-brand-cyan transition-colors capitalize py-1"
                >
                  {section}
                </a>
              ))}
              <div className="h-px bg-slate-800 my-1" />
              <a
                href="tel:812-281-1305"
                className="flex items-center gap-3 font-mono text-sm text-slate-300 hover:text-brand-cyan py-2"
              >
                <Phone className="w-4 h-4 text-brand-cyan" />
                <span>(812) 281-1305</span>
              </a>
              <button
                onClick={() => scrollToSection("booking-form-section")}
                className="w-full py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-display font-bold text-sm tracking-wider rounded-xl uppercase cursor-pointer"
              >
                Reserve Detailing
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
