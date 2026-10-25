import React, { useState } from 'react';
import { CIRCULAR_STEPS } from '../data/farmData';
import { 
  RefreshCw, 
  Sun, 
  Sprout, 
  Egg, 
  Sparkles, 
  Leaf,
  Droplets,
  Recycle
} from 'lucide-react';

export const ClosedLoopTech: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [Sprout, Droplets, Egg, Recycle, Leaf];

  return (
    <section id="circular-model" className="py-20 sm:py-28 bg-forest-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1b5b44_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-leaf-500/20 text-leaf-300 text-xs font-bold uppercase tracking-wider mb-4 border border-leaf-500/30">
            <RefreshCw className="w-3.5 h-3.5 text-gold-400 animate-spin duration-3000" />
            <span>Circular Ecological Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The AgriNest <span className="text-transparent bg-clip-text bg-gradient-to-r from-leaf-300 to-gold-300">Closed-Loop Model</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream-300 leading-relaxed">
            Nothing is wasted. Our integrated design connects crops, horticulture, poultry, and livestock into a continuous self-sustaining biological cycle.
          </p>
        </div>

        {/* Circular Flow Interactive Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left interactive steps selector */}
          <div className="lg:col-span-5 space-y-3">
            {CIRCULAR_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || Sparkles;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                    isActive
                      ? 'bg-forest-800 border-gold-400 shadow-lg translate-x-2'
                      : 'bg-forest-950/60 border-forest-800 hover:bg-forest-800/60 text-cream-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                    isActive ? 'bg-gold-400 text-forest-950' : 'bg-forest-800 text-cream-300'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-leaf-400">
                        Phase {step.step}
                      </span>
                      {isActive && (
                        <span className="text-[10px] bg-gold-400/20 text-gold-300 px-2 py-0.5 rounded-full font-bold">
                          Active Focus
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-white text-base mt-0.5">{step.title}</h4>
                    <p className="text-xs text-cream-300 mt-1 line-clamp-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right visual focus showcase */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-forest-950 border border-leaf-500/30 p-6 sm:p-10 shadow-2xl">
              <div className="flex items-center justify-between border-b border-forest-800 pb-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  Solar-Assisted Zero Waste Lifecycle
                </span>
                <span className="text-xs text-leaf-400 font-mono">
                  Cycle Step {CIRCULAR_STEPS[activeStep].step} of 05
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {CIRCULAR_STEPS[activeStep].title}
                </h3>
                <p className="text-cream-200 text-sm sm:text-base leading-relaxed">
                  {CIRCULAR_STEPS[activeStep].desc}
                </p>

                {/* Impact Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  <div className="p-3.5 rounded-xl bg-forest-900/90 border border-forest-700/80">
                    <span className="text-[11px] font-bold text-leaf-300 uppercase tracking-wide block">
                      Resource Efficiency
                    </span>
                    <p className="text-xs text-cream-200 mt-1">
                      Reduces synthetic chemical fertilizer purchase by 85% through on-site biological manure enrichment.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-forest-900/90 border border-forest-700/80">
                    <span className="text-[11px] font-bold text-gold-300 uppercase tracking-wide block">
                      Environmental Safeguard
                    </span>
                    <p className="text-xs text-cream-200 mt-1">
                      Protects groundwater tables along the Lagos-Ibadan basin with zero chemical leaching or toxic runoff.
                    </p>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="pt-6 border-t border-forest-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : CIRCULAR_STEPS.length - 1))}
                    className="text-xs font-bold text-cream-300 hover:text-white px-3 py-1.5 rounded-lg bg-forest-900 border border-forest-700"
                  >
                    Previous Step
                  </button>
                  <div className="flex gap-1.5">
                    {CIRCULAR_STEPS.map((_, i) => (
                      <span
                        key={i}
                        className={`h-2 rounded-full transition-all ${
                          i === activeStep ? 'w-6 bg-gold-400' : 'w-2 bg-forest-700'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveStep((prev) => (prev < CIRCULAR_STEPS.length - 1 ? prev + 1 : 0))}
                    className="text-xs font-bold text-forest-950 hover:bg-gold-500 px-4 py-1.5 rounded-lg bg-gold-400 shadow-sm"
                  >
                    Next Phase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global ESG Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-forest-950/80 border border-forest-800">
            <h4 className="font-bold text-base text-gold-400">Solar Irrigation</h4>
            <p className="text-xs text-cream-300 mt-2 leading-relaxed">
              Clean solar photovoltaic arrays drive borehole pumps and precision drip lines, eliminating fossil fuel emissions.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-forest-950/80 border border-forest-800">
            <h4 className="font-bold text-base text-leaf-300">Feed Autonomy</h4>
            <p className="text-xs text-cream-300 mt-2 leading-relaxed">
              Internal maize and soybean harvests provide guaranteed quality feed for poultry and cattle without market price volatility.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-forest-950/80 border border-forest-800">
            <h4 className="font-bold text-base text-cream-100">Living Soil Health</h4>
            <p className="text-xs text-cream-300 mt-2 leading-relaxed">
              Aerobic composting restores microbial diversity to Nigerian topsoils for sustained generational fertility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
