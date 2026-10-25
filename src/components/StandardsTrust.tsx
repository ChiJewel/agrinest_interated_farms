import React, { useState } from 'react';
import { FAQS } from '../data/farmData';
import { 
  ShieldCheck, 
  Award, 
  FileCheck, 
  ThermometerSnowflake, 
  ChevronDown, 
  HelpCircle,
  Building,
  CheckCircle2
} from 'lucide-react';

export const StandardsTrust: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const standardsList = [
    {
      title: 'Global G.A.P. Aligned',
      desc: 'Traceable agricultural production prioritizing safe crop cultivation, minimal synthetic chemical inputs, and environmental preservation.',
      icon: Award
    },
    {
      title: 'Biosecure Veterinary Level 3',
      desc: 'Sanitation airlocks, automated vehicle washes, and regular pathogen screenings ensure disease-free poultry and livestock herds.',
      icon: ShieldCheck
    },
    {
      title: 'Unbroken Cold Chain Standard',
      desc: 'From harvest and grading directly into refrigerated holding rooms (-20°C / 4°C) ensuring peak post-harvest nutrient preservation.',
      icon: ThermometerSnowflake
    },
    {
      title: 'Traceability & Batch Auditing',
      desc: 'Each carton, crate, and grain sack bears a verifiable lot number detailing the exact harvest sector and packing date.',
      icon: FileCheck
    }
  ];

  const clientSegments = [
    'Supermarket & Hypermarket Retail Chains',
    'Industrial Food & Beverage Manufacturers',
    'Commercial Animal Feed Millers',
    'Hospitality & Corporate Catering Groups',
    'Commodity Aggregators & Agro-Exporters'
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-4 border border-forest-200">
            <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
            <span>Corporate Governance & Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 tracking-tight">
            International Standards You Can Count On
          </h2>
          <p className="mt-4 text-base sm:text-lg text-forest-800">
            Engineered from ground up to fulfill the stringent supplier compliance requirements of corporate food enterprises and institutional offtakers.
          </p>
        </div>

        {/* 4 Pillars of Trust */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {standardsList.map((std, i) => {
            const Icon = std.icon;
            return (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-cream-200 border border-forest-100 hover:border-forest-300 shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-forest-950 mb-2">
                    {std.title}
                  </h3>
                  <p className="text-xs text-forest-700 leading-relaxed">
                    {std.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-forest-200/60 flex items-center gap-1.5 text-[11px] font-bold text-leaf-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Audited Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Off-Take Partners Ribbon */}
        <div className="p-8 rounded-3xl bg-cream-300 border border-forest-200 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-700 block mb-1">
              Who We Serve
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-forest-950">
              Trusted Supplier to Major Food Sectors
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3">
            {clientSegments.map((segment, i) => (
              <div 
                key={i}
                className="px-4 py-2.5 rounded-xl bg-white border border-forest-200/80 shadow-sm text-xs sm:text-sm font-semibold text-forest-900 flex items-center gap-2"
              >
                <Building className="w-4 h-4 text-leaf-600" />
                <span>{segment}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-600 mb-2">
              <HelpCircle className="w-4 h-4 text-gold-500" />
              <span>Commercial Questions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-950">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-forest-200/90 overflow-hidden bg-cream-100 transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-forest-950 hover:bg-cream-200 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-forest-700 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-forest-800 leading-relaxed border-t border-forest-200/50 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
