import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Sprout, 
  Egg, 
  Sparkles,
  PhoneCall,
  CheckCircle2,
  TrendingUp,
  Truck,
  Calculator
} from 'lucide-react';
import { getWhatsAppLink } from '../data/farmConfig';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const quickCategories = [
    { name: 'Fees Calculator', count: 'Instant Requisition', icon: Calculator, href: '#calculator' },
    { name: 'Modern Showroom', count: 'Exhibition Pavilion', icon: Sparkles, href: '#showroom' },
    { name: 'Day-Old & Brooded', count: 'Chicks & Hatchery', icon: Egg, href: '#catalog' },
    { name: 'Improved Seeds', count: 'Certified High-Yield', icon: Sprout, href: '#catalog' },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-forest-950 text-white">
      {/* Background Aerial / Landscape Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/aerial-masterplan.jpg"
          alt="AgriNest Integrated Farms Aerial Complex on Lagos-Ibadan Expressway"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Multi-layered corporate gradient for perfect legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/85 to-forest-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Location & Standard Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-full border border-white/15 text-xs sm:text-sm text-gold-300">
              <span className="flex items-center gap-1 font-semibold text-white">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400" />
                Plot 1-6 Freedom Way, Lagos-Ibadan Expressway
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="text-leaf-300 font-medium">Modern Showroom &amp; Agro-Industrial Complex</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Pioneering Sustainable, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-leaf-400 via-gold-300 to-leaf-200">
                International Standard
              </span> Integrated Agriculture.
            </h1>

            {/* Official Brand Tagline & Mission */}
            <div className="p-3.5 sm:p-5 rounded-2xl bg-forest-900/60 backdrop-blur-md border border-leaf-500/20 max-w-3xl">
              <p className="text-sm sm:text-lg lg:text-xl font-semibold text-leaf-300 italic tracking-wide">
                &ldquo;Healthy Crops. Thriving Animals. A Sustainable Tomorrow.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-cream-200 mt-2 leading-relaxed">
                AgriNest Integrated Farms unifies modern precision crops, vegetable greenhouses, biosecure poultry, day-old &amp; brooded chicks, certified improved seeds, and turnkey agribusiness consultation into an ultra-modern circular ecosystem.
              </p>
            </div>

            {/* Primary Action Buttons - Ergonomic on mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1">
              <a
                href="#showroom"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold bg-gold-400 text-forest-950 hover:bg-gold-300 active:bg-gold-500 shadow-elevated transition-all duration-200 hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-forest-950" />
                <span>Visit Modern Showroom</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition-all duration-200"
              >
                <span>Request B2B Supply &amp; Advisory</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3">
                <a
                  href="#divisions"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-4 rounded-xl text-xs sm:text-base font-bold bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition-all duration-200 text-center"
                >
                  <span>Farm Divisions</span>
                </a>

                <a
                  href={getWhatsAppLink("Hello AgriNest Farms, I am interested in scheduling a physical site inspection or discussing supply contracts.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-4 rounded-xl text-xs sm:text-base font-semibold bg-[#25D366]/90 hover:bg-[#25D366] text-white shadow-md transition-all duration-200 text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Chat Desk</span>
                </a>
              </div>
            </div>

            {/* Quick Division Shortcuts */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-left">
              {quickCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <a
                    key={cat.name}
                    href={cat.href}
                    className="p-3 rounded-xl bg-forest-900/50 hover:bg-forest-800/80 border border-white/10 hover:border-leaf-400/40 transition-all group"
                  >
                    <div className="flex items-center gap-2 text-leaf-400 mb-1">
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-bold text-white group-hover:text-gold-300">{cat.name}</span>
                    </div>
                    <span className="text-[11px] text-cream-300 block">{cat.count}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Highlights & Operational Credibility Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-forest-900/85 backdrop-blur-md border border-leaf-500/30 rounded-2xl p-6 shadow-2xl text-cream-100">
              <div className="flex items-center justify-between pb-4 border-b border-forest-700">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Agro-Hub Specifications
                </span>
                <span className="text-[10px] bg-leaf-500/20 text-leaf-300 border border-leaf-500/40 px-2 py-0.5 rounded-full font-semibold">
                  Active Facility
                </span>
              </div>

              <div className="divide-y divide-forest-800/80 text-sm">
                <div className="py-3 flex items-center justify-between">
                  <span className="text-cream-300 text-xs">Expressway Proximity</span>
                  <span className="font-bold text-white flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-gold-400" />
                    35 Mins to Lagos Gateway
                  </span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-cream-300 text-xs">Daily Layer Eggs</span>
                  <span className="font-bold text-white">120,000+ Graded Eggs</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-cream-300 text-xs">Fresh Horticulture</span>
                  <span className="font-bold text-white">4.5+ Tons Daily Capacity</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-cream-300 text-xs">Livestock Paddock</span>
                  <span className="font-bold text-white">1,200+ Cattle & Goats</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-cream-300 text-xs">Circularity Index</span>
                  <span className="font-bold text-leaf-300">100% Closed Loop Recycled</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-forest-700 bg-forest-950/60 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <div className="flex items-center gap-2 text-xs text-cream-200">
                  <CheckCircle2 className="w-4 h-4 text-leaf-400 shrink-0" />
                  <span>Heavy 30-Ton Off-Take Articulated Truck Loading Docks</span>
                </div>
              </div>
            </div>

            {/* Strategic Prompt Badge */}
            <div className="bg-leaf-900/60 border border-leaf-500/30 rounded-xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-400/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
              </div>
              <p className="text-xs text-cream-200 leading-snug">
                Certified compliance with international biosecurity standards, cold-chain integrity, and ethical veterinary livestock protocols.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom aesthetic curve */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-cream-300 to-transparent pointer-events-none" />
    </section>
  );
};
