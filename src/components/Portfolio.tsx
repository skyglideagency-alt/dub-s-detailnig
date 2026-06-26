import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { PortfolioItem } from "../types";

export default function Portfolio() {
  const galleryItems: PortfolioItem[] = [
    {
      id: "coating-drive-1",
      title: "Bespoke Ceramic Shielding",
      category: "Ceramic Coating",
      imageUrl: "https://lh3.googleusercontent.com/d/18QY4KQ1XqOIxFMKvSpy8FY4abuSKpNub",
      description: "A professional grade hydrophobic nano-ceramic protective seal. Yields a highly repellent crystalline surface with supreme light refraction.",
      beforeAfter: {
        before: "Flat gloss index, severe water spots, and paint oxidation.",
        after: "Instant self-cleaning water runoff, rich gold and charcoal deep luster reflection."
      }
    },
    {
      id: "interior-drive-1",
      title: "Elite Cabin Sanctuary",
      category: "Interior Restoration",
      imageUrl: "https://lh3.googleusercontent.com/d/1YPjlFSwoPPZ7Ob6mD5P7L5xydxxqwRGq",
      description: "Therapeutic cabin decontamination, fiber extraction, and custom leather feeding. Restores touchpoints to pristine non-greasy matte tactile perfection.",
      beforeAfter: {
        before: "Ground-in floorboard dirt, glossy steering wheel film, and fabric stiffness.",
        after: "Perfectly sanitized leather, organic refreshing scent, completely uniform cabin touch."
      }
    },
    {
      id: "correction-drive-2",
      title: "Precision Surface Refinement",
      category: "Paint Correction",
      imageUrl: "https://lh3.googleusercontent.com/d/1z9_k9srzIHvyLuV8gti96hwo_apFYvXz",
      description: "Surgical multi-stage compounding and pad leveling. Eliminates clear coat defects, returning the finish back to factory reflection clarity.",
      beforeAfter: {
        before: "Heavy car wash brush scratches and micro-marring under artificial light.",
        after: "Zero light distortion, perfectly straight light reflections, deep mirror shine."
      }
    }
  ];

  // Elite liquid-smooth cubic bezier easing
  const liquidEase = [0.16, 1, 0.3, 1];

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8 relative bg-[#0a0a0b] overflow-hidden">
      {/* Grid background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: liquidEase }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="font-mono text-[10px] md:text-xs text-slate-300 uppercase tracking-widest font-semibold">
              The Gallery of Refinement
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight mb-4">
            Our Hall of <span className="text-gradient-cyan">Showroom Triumphs</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            Witness the immaculate results of our master-level detailing commissions.
          </p>
        </motion.div>

        {/* Grid Container of Pictures */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{ 
                duration: 1.4, 
                delay: index * 0.1, 
                ease: liquidEase 
              }}
              className="group flex flex-col gap-3"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-800/80 hover:border-brand-cyan/25 shadow-2xl aspect-[4/3] bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-display font-bold text-lg text-white tracking-tight px-1 group-hover:text-brand-cyan transition-colors duration-300">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
