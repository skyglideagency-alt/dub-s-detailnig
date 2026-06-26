import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0b] font-sans text-slate-100 selection:bg-brand-cyan/30 selection:text-brand-cyan">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[800px] h-[800px] rounded-full bg-brand-cyan/5 blur-[200px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[180px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[700px] h-[700px] rounded-full bg-brand-cyan/5 blur-[150px]" />
      </div>

      {/* Structured Elements */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header Navigation */}
        <Header />

        {/* Scrollable Layout Content */}
        <main className="flex-grow">
          {/* Hero Section + Booking Quote Form */}
          <Hero />

          {/* Interactive Case Studies Portfolio */}
          <Portfolio />

          {/* Premium Services Grid & Special Alert Callout */}
          <Services />
        </main>

        {/* Multi-Column Info Footer & Operating Hours */}
        <Footer />

        {/* Sticky Mobile Bar */}
        <StickyMobileCTA />
      </div>
    </div>
  );
}
