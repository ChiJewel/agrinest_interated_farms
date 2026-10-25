import React, { useState } from 'react';
import { FARM_DIVISIONS } from '../data/farmData';
import { 
  Sprout, 
  Salad, 
  Egg, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  Layers
} from 'lucide-react';
import { getWhatsAppLink } from '../data/farmConfig';

interface FarmingDivisionsProps {
  onOpenOrderModal: (divisionName?: string) => void;
}

export const FarmingDivisions: React.FC<FarmingDivisionsProps> = ({ onOpenOrderModal }) => {
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>('crops');

  const selectedDivision = FARM_DIVISIONS.find(d => d.id === selectedDivisionId) || FARM_DIVISIONS[0];

  const getDivisionIcon = (category: string) => {
    switch (category) {
      case 'crops': return Sprout;
      case 'vegetables': return Salad;
      case 'poultry': return Egg;
      case 'livestock': return ShieldCheck;
      case 'logistics': return Truck;
      default: return Layers;
    }
  };

  return (
    <section id="divisions" className="py-20 sm:py-28 bg-forest-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-leaf-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-leaf-500/20 text-leaf-300 text-xs font-bold uppercase tracking-wider mb-4 border border-leaf-500/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Integrated Multi-Enterprise Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Our Core Agricultural <span className="text-transparent bg-clip-text bg-gradient-to-r from-leaf-400 to-gold-300">Divisions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream-300">
            Crops, Vegetables, Poultry, and Livestock working together in a unified, scientifically monitored ecosystem.
          </p>
        </div>

        {/* Division Selection Pills (Optimized for Mobile Touch Scroll) */}
        <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 no-scrollbar mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {FARM_DIVISIONS.map((div) => {
            const Icon = getDivisionIcon(div.category);
            const isSelected = div.id === selectedDivisionId;
            return (
              <button
                key={div.id}
                onClick={() => setSelectedDivisionId(div.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 border ${
                  isSelected
                    ? 'bg-gold-400 text-forest-950 border-gold-400 shadow-lg shadow-gold-400/20 scale-[1.02]'
                    : 'bg-forest-900/80 text-cream-200 border-forest-800 hover:border-forest-600 hover:bg-forest-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-forest-950' : 'text-leaf-400'}`} />
                <span>{div.name}</span>
              </button>
            );
          })}
        </div>

        {/* Division Showcase Card */}
        <div className="bg-forest-900/90 border border-forest-800 rounded-3xl p-4 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Division Image & Quick Visual Metrics */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 shadow-xl group">
                <img
                  src={selectedDivision.image}
                  alt={selectedDivision.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-forest-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-gold-400">
                  {selectedDivision.headline}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-cream-200">
                  <span className="font-semibold text-white">Facility Standard:</span>
                  <div className="flex gap-2">
                    {selectedDivision.standards.map((st, i) => (
                      <span key={i} className="bg-forest-900/90 px-2 py-0.5 rounded text-[10px] text-leaf-300 border border-leaf-500/30">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Division Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {selectedDivision.metrics.map((m, i) => (
                  <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-forest-950/70 border border-forest-800 text-center">
                    <span className="block text-sm sm:text-lg font-extrabold text-gold-400">{m.value}</span>
                    <span className="text-[10px] sm:text-xs text-cream-300 font-medium leading-tight block mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Division Information & Specifications */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-leaf-400">
                  Operations & Output Overview
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {selectedDivision.name}
                </h3>
                <p className="text-sm sm:text-base text-cream-200 mt-3 leading-relaxed">
                  {selectedDivision.description}
                </p>
              </div>

              {/* Key Features Bullet Points */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 block">
                  Division Highlights & Technology
                </span>
                {selectedDivision.keyFeatures.map((kf, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-leaf-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-cream-100">{kf}</span>
                  </div>
                ))}
              </div>

              {/* Primary Products Produced */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cream-400 block mb-2">
                  Market-Ready Produce & Commodities:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedDivision.products.map((prod, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-forest-800/80 text-white border border-forest-700"
                    >
                      {prod}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons for this specific division */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onOpenOrderModal(selectedDivision.name)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-gold-400 text-forest-950 hover:bg-gold-500 shadow-md transition-all"
                >
                  <span>Inquire for {selectedDivision.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppLink(`Hello AgriNest Integrated Farms, I am inquiring specifically about corporate supply and pricing for your ${selectedDivision.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border border-leaf-500/50 text-leaf-300 hover:bg-leaf-500/10 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Division Lead</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
