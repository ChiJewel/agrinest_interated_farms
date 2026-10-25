import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle, 
  Award, 
  MapPin, 
  Microscope,
  ArrowRight
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'standard' | 'biosecurity' | 'corridor'>('standard');

  return (
    <section id="about" className="py-20 sm:py-28 bg-cream-200 relative overflow-hidden">
      {/* Decorative accent background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-100/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-100/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-4 border border-forest-200">
            <Building2 className="w-3.5 h-3.5 text-forest-700" />
            <span>Corporate Agricultural Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 tracking-tight leading-tight">
            Setting the Benchmark for <br />
            <span className="text-forest-700 underline decoration-leaf-500 decoration-wavy decoration-2">
              Integrated Agro-Excellence
            </span> in Nigeria
          </h2>
          <p className="mt-4 text-base sm:text-lg text-forest-800 leading-relaxed">
            AgriNest Integrated Farms was established to pioneer an international standard for commercial agriculture in West Africa—bridging the gap between ecological responsibility and massive, dependable food production.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-cream-300 border border-forest-200/80 shadow-inner max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('standard')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'standard'
                  ? 'bg-forest-900 text-white shadow-md'
                  : 'text-forest-800 hover:text-forest-950 hover:bg-cream-100'
              }`}
            >
              <Award className="w-4 h-4 text-gold-400" />
              <span>The AgriNest Standard</span>
            </button>

            <button
              onClick={() => setActiveTab('biosecurity')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'biosecurity'
                  ? 'bg-forest-900 text-white shadow-md'
                  : 'text-forest-800 hover:text-forest-950 hover:bg-cream-100'
              }`}
            >
              <Microscope className="w-4 h-4 text-leaf-400" />
              <span>Biosecurity & Precision Lab</span>
            </button>

            <button
              onClick={() => setActiveTab('corridor')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'corridor'
                  ? 'bg-forest-900 text-white shadow-md'
                  : 'text-forest-800 hover:text-forest-950 hover:bg-cream-100'
              }`}
            >
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>Lagos-Ibadan Strategic Corridor</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Media Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src={
                  activeTab === 'standard' 
                    ? '/images/vegetables-greenhouse.jpg' 
                    : activeTab === 'biosecurity' 
                    ? '/images/biotech-facility.jpg' 
                    : '/images/hero-farm.jpg'
                }
                alt="AgriNest Integrated Farms Facilities"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-forest-900/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Facility Verification</span>
                </div>
                <p className="text-sm font-medium mt-1 text-cream-100">
                  {activeTab === 'standard' && 'Climate-managed Dutch greenhouses producing export-grade tomatoes and bell peppers.'}
                  {activeTab === 'biosecurity' && 'Laboratory quality telemetry monitoring soil biology, water purity, and livestock health.'}
                  {activeTab === 'corridor' && 'Plot 1-6 Freedom Way: Expansive integrated complex with automated logistics docks.'}
                </p>
              </div>
            </div>

            {/* Small stats strip under image */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-forest-100 shadow-sm text-center">
                <span className="block text-xl font-extrabold text-forest-900">100%</span>
                <span className="text-[11px] font-semibold text-forest-600">Non-GMO Strains</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-forest-100 shadow-sm text-center">
                <span className="block text-xl font-extrabold text-forest-900">Zero</span>
                <span className="text-[11px] font-semibold text-forest-600">Synthetic Runoff</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-forest-100 shadow-sm text-center">
                <span className="block text-xl font-extrabold text-forest-900">GAP</span>
                <span className="text-[11px] font-semibold text-forest-600">Aligned Protocols</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Tab Text */}
          <div className="lg:col-span-6 space-y-6">
            {activeTab === 'standard' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <span className="text-xs font-bold tracking-widest uppercase text-leaf-600">
                  Precision & Productivity
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-950 leading-tight">
                  Commercial Scale Meets Rigorous International Agricultural Integrity
                </h3>
                <p className="text-forest-800 text-sm sm:text-base leading-relaxed">
                  At AgriNest, we believe farming must transcend outdated subsistence methods. By combining precision mechanized row-crop agriculture with soil testing sensors, advanced drip systems, and biosecure animal houses, we produce top-tier food at volume.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Controlled environments protecting crops from pests without heavy pesticides',
                    'Traceable batch harvesting providing total transparency from plot to plate',
                    'Consistent weight, grading, and moisture standards demanded by multinational buyers',
                    'Empowering local Nigerian agricultural specialists with modern agronomy engineering'
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-leaf-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-forest-900 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'biosecurity' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <span className="text-xs font-bold tracking-widest uppercase text-leaf-600">
                  Animal Welfare & Health Standards
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-950 leading-tight">
                  Hospital-Grade Biosecurity & Preventive Veterinary Oversight
                </h3>
                <p className="text-forest-800 text-sm sm:text-base leading-relaxed">
                  Our poultry complexes and livestock paddocks implement airlock sanitation barriers, computerized climate monitoring, and automated drinker lines. Every bird and animal is monitored daily under resident veterinary supervision.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Level 3 biosecurity protocols preventing avian and livestock infectious diseases',
                    'Zero routine prophylactic antibiotics; healthy natural immunity boosted via balanced nutrition',
                    'Humane handling, ample pasture rotation, and stress-free animal husbandry',
                    'On-site laboratory for rapid feed testing, egg candling, and water purity analysis'
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-leaf-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-forest-900 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'corridor' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <span className="text-xs font-bold tracking-widest uppercase text-leaf-600">
                  Unbeatable Geographic Advantage
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-950 leading-tight">
                  Plot 1-6 Freedom Way: The Arterial Nexus of Nigeria’s Southwest
                </h3>
                <p className="text-forest-800 text-sm sm:text-base leading-relaxed">
                  Our location along the newly expanded Lagos-Ibadan Expressway is deliberate. It provides rapid, uninterrupted transit directly into Lagos (Africa’s largest consumer metropolis) while seamlessly connecting to the food basket belts of Ogun and Oyo States.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Just 35 minutes to Lagos Berger gateway with refrigerated transport fleets',
                    'Direct highway link to Sagamu Interchange for nationwide distribution',
                    'Heavy truck weighbridges and dual-lane access roads designed for 30-ton trailers',
                    '24/7 dedicated industrial power backups and deep subterranean water boreholes'
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-leaf-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-forest-900 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#divisions"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-forest-900 text-white font-bold text-sm hover:bg-forest-950 transition-colors shadow-sm"
              >
                <span>View All 5 Operational Divisions</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-forest-300 text-forest-900 font-semibold text-sm hover:bg-forest-50 transition-colors"
              >
                <span>Download Corporate Brochure</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
