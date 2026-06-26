import React from "react";
import { Phone, Calendar } from "lucide-react";

export default function StickyMobileCTA() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking-form-section");
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
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <div className="glass-panel-heavy rounded-2xl shadow-2xl p-3 border-brand-cyan/20 flex items-center gap-3">
        {/* Quick Dial Button */}
        <a
          href="tel:812-281-1305"
          className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl flex items-center justify-center gap-2 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors"
        >
          <Phone className="w-4 h-4 text-brand-cyan" />
          <span>Call Now</span>
        </a>

        {/* Book Now Scroll Trigger */}
        <button
          onClick={scrollToBooking}
          className="flex-1 py-3 px-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-white rounded-xl flex items-center justify-center gap-2 font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-cyan/15 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Slot</span>
        </button>
      </div>
    </div>
  );
}
