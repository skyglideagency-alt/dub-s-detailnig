import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Calendar, Car, Sparkles, PhoneCall, Crown, ShieldCheck, Mail, User } from "lucide-react";
import { BookingSubmission } from "../types";

export default function Hero() {
  const [formData, setFormData] = useState<Partial<BookingSubmission>>({
    fullName: "",
    phone: "",
    email: "",
    vehicleType: "sedan",
    serviceType: "full-detail",
    preferredDate: "",
    additionalNotes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.preferredDate) {
      alert("Please fill in your name, phone number, and preferred date.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      // Save to localStorage to persist user's bookings
      const existingBookings = JSON.parse(localStorage.getItem("dubs_detail_bookings") || "[]");
      const newBooking = {
        ...formData,
        id: Math.random().toString(36).substr(2, 9),
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem("dubs_detail_bookings", JSON.stringify([...existingBookings, newBooking]));

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      vehicleType: "sedan",
      serviceType: "full-detail",
      preferredDate: "",
      additionalNotes: "",
    });
    setIsSubmitted(false);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden bg-[#0f172a]"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero_detailing_1782496737594.jpg" 
          alt="Premium Detailing Workshop" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/95 via-neutral-950/85 to-neutral-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-transparent to-neutral-950/90" />
      </div>

      {/* Decorative Cyan/Blue Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-brand-blue/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Business Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-brand-cyan/20 w-fit mb-6"
          >
            <Crown className="w-4 h-4 text-brand-cyan" />
            <span className="font-mono text-[10px] md:text-xs text-brand-cyan uppercase tracking-wider font-semibold">
              Serving Terre Haute & Surrounding Areas
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-4xl sm:text-5xl xl:text-7xl text-white tracking-tight leading-[1.05] mb-5"
          >
            Unrivaled Precision.<br />
            <span className="text-gradient-cyan">Flawless Finish.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-light"
          >
            Elite mobile detailing and professional grade ceramic coatings. We deliver immaculate showroom results directly to your location.
          </motion.p>

          {/* Key Value Props */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-x-6 gap-y-3 max-w-lg mb-8"
          >
            {[
              "Luxury Mobile Care 🚐",
              "Premium Ceramic Coatings 🛡️",
              "Showroom Finish Guaranteed ✨"
            ].map((prop, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span className="text-slate-200 text-sm font-medium tracking-wide">{prop}</span>
              </div>
            ))}
          </motion.div>

          {/* Quick Contact Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 border-t border-slate-800/80 pt-6"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-brand-cyan">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-mono text-xs text-slate-400 uppercase tracking-wider">Direct Call Assistance</span>
              <a href="tel:812-281-1305" className="font-display font-bold text-xl text-white hover:text-brand-cyan transition-colors">
                (812) 281-1305
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Quote/Booking Form (Glass Card) */}
        <div id="booking-form-section" className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl glass-panel-heavy p-6 md:p-8 shadow-2xl border-white/10"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-4">
                  <span className="font-mono text-[10px] text-brand-cyan tracking-wider uppercase font-semibold block mb-1">
                    Commission Detailing
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                    Reserve Bespoke Service
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Indulge your vehicle in precision restoration. Reserve an ideal appointment date.
                  </p>
                </div>

                {/* Name */}
                <div className="relative">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-900/60 border border-slate-800 focus:border-brand-cyan rounded-xl py-2.5 pl-11 pr-4 text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Contact: Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <PhoneCall className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(812) 555-0199"
                        className="w-full bg-slate-900/60 border border-slate-800 focus:border-brand-cyan rounded-xl py-2.5 pl-11 pr-4 text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-900/60 border border-slate-800 focus:border-brand-cyan rounded-xl py-2.5 pl-11 pr-4 text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Dropdowns: Vehicle Type & Service Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Vehicle Type
                    </label>
                    <div className="relative">
                      <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500 pointer-events-none" />
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-800 focus:border-brand-cyan rounded-xl py-2.5 pl-11 pr-4 text-white text-sm outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="sedan">Coupe / Sedan</option>
                        <option value="suv">SUV / Crossover</option>
                        <option value="truck">Pickup Truck</option>
                        <option value="van">Van / Minivan</option>
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">▼</div>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Desired Service
                    </label>
                    <div className="relative">
                      <Sparkles className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500 pointer-events-none" />
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-800 focus:border-brand-cyan rounded-xl py-2.5 pl-11 pr-4 text-white text-sm outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="full-detail">Dub Signature Restorative ($140+)</option>
                        <option value="wash-seal">Dub Essential Refresh ($80+)</option>
                        <option value="interior-deep">Dub Sovereign Luxe ($220+)</option>
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">▼</div>
                    </div>
                  </div>
                </div>

                {/* Preferred Booking Date */}
                <div className="relative">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500 pointer-events-none" />
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full bg-slate-900/60 border border-slate-800 focus:border-brand-cyan rounded-xl py-2.5 pl-11 pr-4 text-white text-sm outline-none transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Special Notes or Vehicle Model Details
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={2}
                    placeholder="e.g. 2023 Tesla Model Y, heavy pet hair removal required..."
                    className="w-full bg-slate-900/60 border border-slate-800 focus:border-brand-cyan rounded-xl p-3 text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-display font-semibold text-xs tracking-widest rounded-xl hover:shadow-lg hover:shadow-brand-cyan/20 uppercase cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Reserving Commission...</span>
                    </>
                  ) : (
                    <span>Submit Commission Request</span>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Commission Reserved
                </h3>
                <p className="font-mono text-xs text-brand-cyan uppercase tracking-wider mb-4">
                  The Art of Automotive Preservation
                </p>
                <p className="text-slate-300 text-sm max-w-xs mx-auto mb-8 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. We have registered your reservation request for the <strong className="text-white">{(formData.serviceType === "full-detail" && "Dub Signature Restorative") || (formData.serviceType === "wash-seal" && "Dub Essential Refresh") || "Dub Sovereign Luxe"}</strong> collection on <strong className="text-white">{formData.preferredDate}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs mb-8 max-w-xs mx-auto">
                  ⚡ Our concierge lead will contact you directly at <strong className="text-white">{formData.phone}</strong> within two business hours to finalize details.
                </div>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-display font-medium text-xs tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
                >
                  Request Additional Service
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
