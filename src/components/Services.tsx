import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Shield, CarFront, Sparkles, Check, Flame, Clock, Award, CheckCircle2, Percent, HelpCircle, Car, ShieldCheck, HelpCircle as HelpIcon } from "lucide-react";
import { ServicePackage } from "../types";

export default function Services() {
  const [selectedPackage, setSelectedPackage] = useState<string>("signature");
  const [activeAddons, setActiveAddons] = useState<string[]>([]);
  const [isVehicleSUV, setIsVehicleSUV] = useState<boolean>(false);

  const packages: ServicePackage[] = [
    {
      id: "refresh",
      name: "Dub Essential Refresh",
      price: "$80",
      duration: "1 - 1.5 Hours",
      description: "Meticulous hand wash and deep interior vacuuming.",
      iconName: "CarFront",
      badge: "Essential",
      features: [
        "Foam Bath & Hand Dry",
        "Wheel Decontamination",
        "Deep Cabin Vacuum",
        "Surface Dusting & Wipe",
        "Streak-Free Glass"
      ]
    },
    {
      id: "signature",
      name: "Dub Signature Restorative",
      price: "$140",
      duration: "2 - 3.5 Hours",
      description: "Full cabin steam-shampoo and protective hand wax.",
      iconName: "Sparkles",
      badge: "Signature Choice",
      features: [
        "Includes Essential Refresh",
        "Carpet & Mat Shampoo",
        "Enzyme Stain Treatment",
        "Interior UV Protection",
        "Premium Carnauba Wax"
      ]
    },
    {
      id: "luxe",
      name: "Dub Sovereign Luxe",
      price: "$220",
      duration: "4 - 6 Hours",
      description: "Ultimate clay treatment, engine detailing, and leather protection.",
      iconName: "Shield",
      badge: "Zenith Treatment",
      features: [
        "Includes Signature",
        "Clay Bar Paint Treatment",
        "Engine Bay Detailed",
        "3-Month Ceramic Shield",
        "Matte Leather Feeding"
      ]
    }
  ];

  const addonsList = [
    { id: "pet-hair", name: "Pet Hair Removal", priceRange: "$20 - $60", baseCost: 20, icon: "🐕" },
    { id: "headlight", name: "Headlight Restoration", priceRange: "$40 - $80", baseCost: 40, icon: "💡" },
    { id: "ceramic-upgrade", name: "Ceramic Spray Upgrade", priceRange: "$30 - $75", baseCost: 30, icon: "🛡️" },
    { id: "stain-extraction", name: "Deep Stain Extraction", priceRange: "$30 - $100", baseCost: 30, icon: "🧼" },
    { id: "engine-detail", name: "Engine Detail", priceRange: "$25 - $60", baseCost: 25, icon: "⚙️" },
    { id: "ozone-odor", name: "Ozone Odor Removal", priceRange: "$50 - $100", baseCost: 50, icon: "🌬️" },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "CarFront":
        return <CarFront className="w-5 h-5 text-brand-cyan" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-brand-blue" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-cyan" />;
    }
  };

  const toggleAddon = (id: string) => {
    if (activeAddons.includes(id)) {
      setActiveAddons(activeAddons.filter(a => a !== id));
    } else {
      setActiveAddons([...activeAddons, id]);
    }
  };

  // Helper to calculate total
  const getSelectedPackageObj = () => packages.find(p => p.id === selectedPackage) || packages[1];
  
  const calculateEstimate = () => {
    const pkg = getSelectedPackageObj();
    let base = parseInt(pkg.price.replace("$", ""));
    
    // SUV / Truck surcharge logic from flyer
    if (isVehicleSUV) {
      if (pkg.id === "luxe") {
        base += 45; // SUV/Truck +$30-$60
      } else {
        base += 30; // SUV/Truck +$20-$40
      }
    }

    const addonsCost = activeAddons.reduce((sum, addonId) => {
      const addon = addonsList.find(a => a.id === addonId);
      return sum + (addon ? addon.baseCost : 0);
    }, 0);

    const total = base + addonsCost;
    const discountedTotal = Math.round(total * 0.85); // 15% Off discount
    
    return {
      subtotal: total,
      discount: Math.round(total * 0.15),
      total: discountedTotal
    };
  };

  const { subtotal, discount, total: finalEstimate } = calculateEstimate();

  const scrollToBooking = () => {
    // Fill values or just scroll
    const element = document.getElementById("booking-form-section");
    if (element) {
      // Find package/notes inputs to auto populate
      const serviceSelect = document.getElementsByName("serviceType")[0] as HTMLSelectElement;
      if (serviceSelect) {
        serviceSelect.value = selectedPackage === "refresh" ? "wash-seal" : (selectedPackage === "signature" ? "full-detail" : "interior-deep");
        // Dispatch event
        serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }

      const vehicleTypeSelect = document.getElementsByName("vehicleType")[0] as HTMLSelectElement;
      if (vehicleTypeSelect && isVehicleSUV) {
        vehicleTypeSelect.value = "suv";
        vehicleTypeSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }

      const notesArea = document.getElementsByName("additionalNotes")[0] as HTMLTextAreaElement;
      if (notesArea) {
        const selectedAddonNames = activeAddons.map(id => addonsList.find(a => a.id === id)?.name).join(", ");
        notesArea.value = `Selected Package: ${getSelectedPackageObj().name}${isVehicleSUV ? ' (SUV/Truck size)' : ''}.${selectedAddonNames ? ` Add-ons requested: ${selectedAddonNames}.` : ''} Applied 15% OFF Special! Estimated cost: $${finalEstimate}+`;
        notesArea.dispatchEvent(new Event('change', { bubbles: true }));
      }

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
    <section id="services" className="py-24 px-4 md:px-8 relative bg-[#0a0a0b] overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="font-mono text-[10px] md:text-xs text-slate-300 uppercase tracking-widest font-semibold">
              Bespoke Detailing Collections
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
            Elite Detailing <span className="text-gradient-cyan">Commission Menu</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            A triumph in automotive refinement. We deploy elite-grade, state-of-the-art formulas and master-level craftsmanship to return your vehicle to a state of pristine, lasting beauty.
          </p>
        </motion.div>

        {/* 3-Column Bento Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-16">
          {packages.map((pkg, index) => {
            const isSelected = selectedPackage === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-120px" }}
                transition={{ duration: 1.3, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`relative rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 group ${
                  isSelected 
                    ? "bg-slate-900/80 border-2 border-brand-cyan shadow-xl shadow-brand-cyan/10" 
                    : "glass-panel border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/30"
                }`}
              >
                {/* Active Indicator Pin */}
                {isSelected && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-cyan text-slate-950 font-mono text-[8px] font-bold uppercase tracking-widest shadow-lg">
                    Selected Package
                  </div>
                )}

                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/85 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {getIcon(pkg.iconName)}
                    </div>
                    {pkg.badge && (
                      <span className="px-2 py-0.5 rounded-md font-mono text-[8px] uppercase tracking-widest font-bold bg-slate-800 text-brand-cyan border border-slate-700">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Package Name & Price */}
                  <h3 className="font-display font-bold text-lg text-white mb-1 tracking-tight">
                    {pkg.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-1.5 mb-2.5">
                    <span className="font-display font-extrabold text-2xl text-gradient-cyan">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {pkg.duration}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs mb-3.5 leading-relaxed font-light">
                    {pkg.description}
                  </p>

                  <div className="text-[9px] font-mono text-slate-400 mb-3 bg-slate-950/40 p-2 rounded-lg border border-white/5">
                    🚗 SUV/Truck size: <span className="text-brand-cyan font-semibold">{pkg.id === "luxe" ? "+$30-$60" : "+$20-$40"}</span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-slate-800/60 my-3" />

                  {/* Features Checklist */}
                  <ul className="space-y-2 mb-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs">
                        <div className="w-4 h-4 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-brand-cyan" />
                        </div>
                        <span className="leading-tight font-light text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Selection toggle style */}
                <div className={`mt-2 w-full py-2 rounded-lg text-center text-[10px] font-display font-bold uppercase tracking-wider transition-colors ${
                  isSelected 
                    ? "bg-brand-cyan text-slate-950" 
                    : "bg-slate-800 text-slate-300 group-hover:bg-slate-750"
                }`}>
                  {isSelected ? "Active Choice" : "Configure This Package"}
                </div>
              </motion.div>
            );
          })}
        </div>



        {/* 15% OFF Special Alert Banner (Replaces the $30 callout to exactly match flyer's giant promotion) */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden glass-panel-heavy p-6 md:p-8 border-brand-cyan/30 border-glow bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900"
        >
          {/* Animated red pulse indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="font-mono text-[9px] text-brand-cyan uppercase tracking-widest font-semibold">LIMITED TIME ONLY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Promo text */}
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-5 h-5 text-brand-cyan" />
                <span className="font-mono text-xs text-brand-cyan uppercase tracking-wider font-bold">
                  Dub's Grand Opening Promotion Alert
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl md:text-4xl text-white tracking-tight mb-2">
                Get <span className="text-gradient-cyan">15% OFF</span> All Packages This Week!
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed font-light">
                Give your vehicle the professional care it deserves at a fraction of the cost. We are celebrating our local launch with an absolute <strong className="text-white">15% discount</strong> on all deep cleaning, machine corrections, and sealant plans. We bring our mobile setup directly to you!
              </p>
            </div>

            {/* CTA action */}
            <div className="md:col-span-4 flex flex-col md:items-end justify-center">
              <div className="text-left md:text-right mb-4">
                <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest">Promotion Code</span>
                <span className="font-mono font-extrabold text-2xl text-brand-cyan">DUB15W</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToBooking}
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-display font-bold text-xs tracking-widest uppercase rounded-xl hover:shadow-lg hover:shadow-brand-cyan/20 transition-all cursor-pointer"
              >
                Claim 15% OFF Discount
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
