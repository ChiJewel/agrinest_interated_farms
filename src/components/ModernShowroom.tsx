import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  Thermometer, 
  Package, 
  X,
  PhoneCall
} from 'lucide-react';
import { SHOWROOM_EXHIBITS, ShowroomExhibit } from '../data/farmData';
import { getWhatsAppLink } from '../data/farmConfig';

interface ModernShowroomProps {
  onOpenOrderModal: (productName?: string) => void;
}

export const ModernShowroom: React.FC<ModernShowroomProps> = ({ onOpenOrderModal }) => {
  const [activeHall, setActiveHall] = useState<string>('all');
  const [activeExhibit, setActiveExhibit] = useState<ShowroomExhibit | null>(null);

  const halls = [
    { id: 'all', label: 'All Showroom Wings' },
    { id: 'Fresh Harvest Hall', label: 'Fresh Harvest Hall' },
    { id: 'Genetics & Seed Bank', label: 'Genetics & Seed Bank' },
    { id: 'Poultry & Hatchery Wing', label: 'Poultry & Hatchery Wing' },
    { id: 'Consultation & Advisory Suite', label: 'Advisory & Services Suite' },
  ];

  const filteredExhibits = activeHall === 'all'
    ? SHOWROOM_EXHIBITS
    : SHOWROOM_EXHIBITS.filter((item) => item.hall === activeHall);

  const handleBookShowroomTour = () => {
    const text = `*AgriNest Showroom VIP Visit Booking*
Hello AgriNest Team, I would like to schedule a guided tour and produce inspection at your Modern Showroom Pavilion (Plot 1-6 Freedom Way, Lagos-Ibadan Expressway).
Please confirm available visiting slots and corporate reception details.`;
    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <section id="showroom" className="py-20 sm:py-28 bg-forest-950 text-white relative overflow-hidden">
      {/* Decorative background glow & mesh */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-leaf-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Showroom Hero Banner Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-forest-900/80 backdrop-blur-md shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Image Showcase */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[440px] overflow-hidden group">
              <img
                src="/images/showroom-display.jpg"
                alt="AgriNest Modern Agricultural Showroom & Produce Exhibition Pavilion"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-forest-900/95" />
              
              {/* Floating Quality Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-forest-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-400/30 text-gold-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>On-Site Experience Pavilion</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:hidden bg-forest-950/90 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs">
                <span className="font-bold text-white block">Plot 1-6 Freedom Way Showroom</span>
                <span className="text-leaf-300">Open Mon-Sat for Buyer Tastings & Inspections</span>
              </div>
            </div>

            {/* Banner Content Column */}
            <div className="lg:col-span-5 p-6 sm:p-10 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/15 text-gold-300 text-xs font-bold tracking-wider uppercase border border-gold-400/30">
                <Eye className="w-3.5 h-3.5 text-gold-400" />
                <span>Modern Agricultural Showroom</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Where Premium Harvest Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-leaf-400 via-gold-300 to-leaf-200">Modern Exhibition</span>
              </h2>

              <p className="text-cream-200 text-sm sm:text-base leading-relaxed">
                Step into our state-of-the-art agricultural showroom along the Lagos-Ibadan Expressway corridor. Inspect fresh harvest batches, certified improved seeds, healthy day-old &amp; brooded chicks, and consult directly with our agricultural engineers.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-leaf-300">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>Corridor Hub</span>
                  </div>
                  <p className="text-[11px] text-cream-300 mt-1">Plot 1-6 Freedom Way Express Gate</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-leaf-300">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>Inspection Hours</span>
                  </div>
                  <p className="text-[11px] text-cream-300 mt-1">Mon – Sat: 8:00 AM – 5:00 PM</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={handleBookShowroomTour}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-400 hover:bg-gold-300 text-forest-950 font-bold text-xs sm:text-sm shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book VIP Showroom Tour</span>
                </button>

                <button
                  onClick={() => onOpenOrderModal('Showroom Produce & Services')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
                >
                  <span>Request Requisition</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Curated Showroom Display Wings
          </h3>
          <p className="mt-2 text-cream-200 text-sm sm:text-base">
            Click on any exhibit to inspect certified laboratory parameters, storage temperatures, packaging formats, and taste/sensory indicators.
          </p>
        </div>

        {/* Hall Selection Tabs - Smooth mobile scroll */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar px-2 sm:px-0">
          {halls.map((hall) => (
            <button
              key={hall.id}
              onClick={() => setActiveHall(hall.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeHall === hall.id
                  ? 'bg-gold-400 text-forest-950 shadow-md font-extrabold'
                  : 'bg-white/10 text-cream-200 hover:bg-white/15 hover:text-white border border-white/10'
              }`}
            >
              {hall.label}
            </button>
          ))}
        </div>

        {/* Showroom Exhibits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredExhibits.map((item) => (
            <div
              key={item.id}
              className="bg-forest-900/90 rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:border-gold-400/50 transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Exhibit Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                
                {/* Category & Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-forest-950/80 backdrop-blur-md text-[11px] font-bold text-gold-300 border border-white/10">
                    {item.hall}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-leaf-500/90 backdrop-blur-md text-[10px] font-extrabold text-white tracking-wide uppercase shadow">
                    {item.badge}
                  </span>
                </div>

                {/* Packaging preview tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-cream-200">
                  <span className="flex items-center gap-1 font-medium bg-forest-950/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 text-[11px]">
                    <Thermometer className="w-3.5 h-3.5 text-gold-400" />
                    {item.temperature}
                  </span>
                </div>
              </div>

              {/* Exhibit Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-lg font-extrabold text-white group-hover:text-gold-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-leaf-300 font-semibold mt-0.5">
                    {item.headline}
                  </p>
                  <p className="text-xs text-cream-300 line-clamp-2 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Packaging and Sensory Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                  <div className="flex items-start gap-2 text-cream-200">
                    <Package className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span className="text-[11px]"><strong className="text-white">Format:</strong> {item.packagingDisplay}</span>
                  </div>
                  
                  <div className="flex items-start gap-2 text-cream-200">
                    <ShieldCheck className="w-4 h-4 text-leaf-400 shrink-0 mt-0.5" />
                    <span className="text-[11px]"><strong className="text-white">Longevity:</strong> {item.shelfLife}</span>
                  </div>

                  <div className="pt-2 flex items-baseline justify-between border-t border-white/10">
                    <span className="text-gold-300 font-extrabold text-sm sm:text-base font-mono">
                      {item.priceDisplay}
                    </span>
                    <span className="text-[10px] text-cream-300 font-bold bg-white/10 px-2 py-0.5 rounded">
                      Showroom Index
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => setActiveExhibit(item)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-gold-300" />
                    <span>Inspect Specs</span>
                  </button>

                  <button
                    onClick={() => onOpenOrderModal(item.name)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gold-400 hover:bg-gold-300 text-forest-950 font-extrabold text-xs shadow-md transition-all"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Corporate VIP Showroom Inspection Invitation Box */}
        <div className="mt-16 bg-gradient-to-r from-forest-900 via-forest-800 to-forest-900 rounded-3xl p-6 sm:p-10 border border-gold-400/20 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-gold-300 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Express Highway Showroom & Tasting Lounge</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                Are you a Supermarket Buyer, Food Processor, or Commercial Farmer?
              </h4>
              <p className="text-cream-200 text-xs sm:text-sm max-w-2xl">
                We host private corporate tastings, seed germination demonstrations, and poultry flock inspections. Schedule a direct consultation with our Lead Agronomist &amp; Livestock Director at Plot 1-6 Freedom Way.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={handleBookShowroomTour}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-forest-950 font-extrabold text-xs sm:text-sm shadow-xl transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Schedule VIP Inspection</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Showroom Exhibit Detailed Inspection Modal */}
      {activeExhibit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-forest-100 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header Bar */}
            <div className="bg-forest-950 text-white p-4 sm:p-5 flex items-center justify-between border-b border-forest-800">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gold-400 text-forest-950 flex items-center justify-center font-bold shrink-0">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-lg text-white leading-tight">{activeExhibit.name}</h3>
                  <p className="text-[11px] sm:text-xs text-gold-300">{activeExhibit.hall} • {activeExhibit.badge}</p>
                </div>
              </div>

              <button
                onClick={() => setActiveExhibit(null)}
                className="p-1.5 rounded-lg text-cream-300 hover:text-white hover:bg-forest-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 text-forest-950">
              
              {/* Image banner */}
              <div className="relative h-44 sm:h-60 rounded-2xl overflow-hidden border border-forest-100">
                <img
                  src={activeExhibit.image}
                  alt={activeExhibit.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-forest-950/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-bold text-white border border-white/10">
                  {activeExhibit.headline}
                </div>
              </div>

              {/* Description */}
              <div>
                <h5 className="text-xs font-bold uppercase text-forest-700 tracking-wider mb-1">
                  Exhibit Profile & Overview
                </h5>
                <p className="text-sm text-forest-900 leading-relaxed">
                  {activeExhibit.description}
                </p>
              </div>

              {/* Technical & Storage Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-cream-200/70 p-4 rounded-2xl border border-forest-100">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-forest-700 uppercase block">Packaging Standard</span>
                  <p className="text-xs font-bold text-forest-950 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-forest-700" />
                    {activeExhibit.packagingDisplay}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-forest-700 uppercase block">Shelf Stability / Delivery</span>
                  <p className="text-xs font-bold text-forest-950 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
                    {activeExhibit.shelfLife}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-forest-700 uppercase block">Temperature Benchmark</span>
                  <p className="text-xs font-bold text-forest-950 flex items-center gap-1.5">
                    <Thermometer className="w-3.5 h-3.5 text-forest-700" />
                    {activeExhibit.temperature}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-forest-700 uppercase block">Corridor Origin</span>
                  <p className="text-xs font-bold text-forest-950 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-forest-700" />
                    Plot 1-6 Freedom Way Farmgate
                  </p>
                </div>

                <div className="space-y-1 sm:col-span-2 bg-white p-2.5 rounded-xl border border-forest-200">
                  <span className="text-[11px] font-bold text-forest-700 uppercase block">Showroom Direct Commodity Price</span>
                  <p className="text-base font-extrabold text-forest-950 font-mono text-leaf-700">
                    {activeExhibit.priceDisplay}
                  </p>
                </div>
              </div>

              {/* Sensory & Tasting Analysis */}
              <div>
                <h5 className="text-xs font-bold uppercase text-forest-700 tracking-wider mb-1">
                  Sensory & Quality Parameters
                </h5>
                <div className="p-3 bg-forest-50 rounded-xl border border-forest-100 text-xs text-forest-900 italic">
                  "{activeExhibit.sensoryNotes}"
                </div>
              </div>

              {/* Quality & Laboratory Accreditations */}
              <div>
                <h5 className="text-xs font-bold uppercase text-forest-700 tracking-wider mb-2">
                  Certified Batch Highlights
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeExhibit.specifications.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-forest-900 bg-white p-2.5 rounded-xl border border-forest-100 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-leaf-600 shrink-0" />
                      <span className="font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-3 sm:pt-4 border-t border-forest-100 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
                <button
                  onClick={() => setActiveExhibit(null)}
                  className="px-4 py-3 sm:py-2.5 rounded-xl border border-forest-200 text-forest-800 text-xs font-bold hover:bg-forest-50 transition-colors text-center"
                >
                  Close Inspection
                </button>

                <button
                  onClick={() => {
                    const itemName = activeExhibit.name;
                    setActiveExhibit(null);
                    onOpenOrderModal(itemName);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-forest-950 font-extrabold text-xs sm:text-sm shadow-md transition-all text-center"
                >
                  <span>Request Requisition for this Item</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
