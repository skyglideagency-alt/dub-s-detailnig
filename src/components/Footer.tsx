import React from "react";
import { Phone, MapPin, Mail, Clock, Trophy, ArrowUp, ArrowRight, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer id="hours" className="bg-[#0a0a0b] border-t border-slate-900/80 pt-16 pb-28 relative overflow-hidden">
      {/* Footer glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top bar with logo and back-to-top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-900">
          <div className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-950/80 shadow-lg shadow-brand-cyan/10 border border-brand-cyan/20 overflow-hidden">
              <img 
                src="https://drive.google.com/thumbnail?id=1QTWHpTHc31yapbMbOIaZFQAEr8zmOcIP&sz=w600" 
                alt="Dub's Detail Logo" 
                className="w-full h-full object-contain p-0.5" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white flex items-center gap-1.5">
                DUB'S <span className="text-brand-cyan">DETAIL</span>
              </span>
              <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-widest mt-0.5 leading-none">
                THE ART OF AUTOMOTIVE PRESERVATION
              </span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-cyan" />
          </button>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12">
          
          {/* Col 1: Brand overview */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Bespoke Passion. Absolute Perfection.
            </h4>
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">
              We specialize in therapeutic cabin steam sanitization, multi-stage paint refinement corrections, and elite-grade hydrophobic ceramic armor protection. 
            </p>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-900 max-w-sm">
              <span className="block font-mono text-[9px] text-brand-cyan uppercase tracking-widest font-bold mb-1">
                Dub's Guarantee
              </span>
              <p className="text-[11px] text-slate-400 font-light leading-normal">
                If you are not thoroughly captivated by your vehicle's pristine showroom presentation, our artisans will refine the finish until it matches your absolute standard of excellence.
              </p>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              Our Specialties
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Dub Refresh", id: "services" },
                { name: "Dub Signature", id: "services" },
                { name: "Dub Luxe", id: "services" },
                { name: "Premium Add-ons", id: "services" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="text-slate-400 hover:text-brand-cyan text-sm transition-colors flex items-center gap-1 group font-light"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-cyan" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-cyan" />
              <span>Operating Hours</span>
            </h4>
            <ul className="space-y-2 font-mono text-xs text-slate-400">
              <li className="flex justify-between pb-1.5 border-b border-slate-900/50">
                <span className="text-slate-300">Monday - Friday</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-slate-900/50">
                <span className="text-slate-300">Saturday</span>
                <span className="text-white">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-300">Sunday</span>
                <span className="text-rose-400 font-semibold uppercase">Closed</span>
              </li>
              <li className="text-[10px] text-slate-500 italic leading-snug mt-2 pt-1">
                * Weekend appointments are highly requested and should be booked at least 48 hours in advance.
              </li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="font-light leading-snug">
                  Terre Haute, IN, 47805<br />
                  <span className="text-xs text-slate-500">Serving Terre Haute & surrounding areas</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
                <a href="tel:812-281-1305" className="hover:text-white transition-colors font-mono font-medium">
                  (812) 281-1305
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
                <a href="mailto:info@dubsdetailcompany.com" className="hover:text-white transition-colors font-mono">
                  info@dubsdetailco.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
                <a href="https://instagram.com/dubs.detail.company" target="_blank" rel="noreferrer" className="hover:text-white transition-colors font-mono">
                  @dubs.detail.company
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-slate-500">
            &copy; {currentYear} DUB'S DETAIL COMPANY. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-6 font-mono text-[10px] text-slate-500">
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }} className="hover:text-slate-300 transition-colors">PRIVACY POLICY</a>
            <span>&bull;</span>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }} className="hover:text-slate-300 transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
