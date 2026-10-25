import React from 'react';
import { 
  MapPin, 
  Truck, 
  Clock, 
  Navigation, 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle,
  Building,
  Phone
} from 'lucide-react';
import { getWhatsAppLink } from '../data/farmConfig';

export const LocationCorridor: React.FC = () => {
  const travelTimes = [
    { destination: 'Lagos Gateway (Berger / Ojodu)', time: '35 - 45 Mins', route: 'Lagos-Ibadan Expressway Direct' },
    { destination: 'Ikeja / Alausa Commercial Center', time: '50 - 60 Mins', route: 'Via Lagos Outward Corridor' },
    { destination: 'Sagamu Interchange & Industrial Park', time: '18 - 25 Mins', route: 'Eastbound Arterial Highway' },
    { destination: 'Ibadan Tollgate / Agro-Hub', time: '45 - 55 Mins', route: 'Northbound Dual Carriage' },
  ];

  return (
    <section id="location" className="py-20 sm:py-28 bg-cream-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-4 border border-forest-200">
            <MapPin className="w-3.5 h-3.5 text-forest-700" />
            <span>Strategic Agro-Logistics Gateway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 tracking-tight">
            Plot 1-6 Freedom Way, <br className="hidden sm:inline" />
            <span className="text-forest-700 underline decoration-gold-400 decoration-wavy decoration-2">
              Lagos-Ibadan Expressway
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-forest-800 leading-relaxed">
            Ideally positioned along Nigeria’s busiest economic arterial corridor, enabling same-day farmgate harvest delivery to supermarkets, cold hubs, and manufacturing plants across Southwestern Nigeria.
          </p>
        </div>

        {/* Map & Corridor Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left: Interactive Logistics Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-premium border border-forest-100">
              <h3 className="text-xl sm:text-2xl font-extrabold text-forest-950 mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-forest-700" />
                <span>Heavy Haulage & Off-take Infrastructure</span>
              </h3>
              
              <p className="text-forest-800 text-sm leading-relaxed mb-6">
                Designed to handle commercial freight without causing traffic chokepoints. Our access on Freedom Way accommodates multiple 30-ton and 40ft container articulated trucks simultaneously.
              </p>

              <div className="space-y-3">
                {[
                  'Automated 60-Ton digital weighbridge for transparent gross & tare cargo auditing',
                  'Dedicated biosecurity vehicle disinfection trench and tire-spray arches at gate',
                  'Refrigerated van loading docks equipped with dock levelers for cold-chain continuity',
                  '24/7 armed perimeter security, perimeter CCTV telemetry, and driver rest lounges'
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-leaf-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-forest-900 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-forest-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Plot 1-6 Freedom Way Lagos-Ibadan Expressway Nigeria")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-forest-900 text-white font-bold text-xs sm:text-sm hover:bg-forest-950 transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-gold-400" />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getWhatsAppLink("Hello AgriNest Logistics, please share the GPS location pin and driver gate directions for Plot 1-6 Freedom Way.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-forest-300 text-forest-900 font-semibold text-xs sm:text-sm hover:bg-forest-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-forest-700" />
                  <span>Request Driver GPS Pin</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Transit Times & Geographic Radar */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-forest-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-forest-800">
              <div className="flex items-center justify-between pb-4 border-b border-forest-800">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Fleet Dispatch Transit Times
                </span>
                <span className="text-[10px] bg-leaf-500/20 text-leaf-300 border border-leaf-500/30 px-2.5 py-0.5 rounded-full font-bold">
                  Expressway Advantage
                </span>
              </div>

              <div className="divide-y divide-forest-900 my-4">
                {travelTimes.map((tt, i) => (
                  <div key={i} className="py-3.5 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">{tt.destination}</h4>
                      <span className="text-[11px] text-cream-400">{tt.route}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="inline-block px-3 py-1 rounded-lg bg-forest-900 text-gold-300 font-mono font-bold text-xs border border-forest-700">
                        {tt.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-forest-900 border border-leaf-500/30 text-xs text-cream-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-leaf-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Biosecurity & Gate Clearance Policy:</span>
                  <p className="mt-0.5 leading-relaxed text-[11px] text-cream-300">
                    All visiting off-take vehicles must pass through the automated undercarriage wash and wheel disinfection basin prior to weighbridge positioning.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Farm Address Snapshot Card */}
            <div className="bg-white rounded-2xl p-4 border border-forest-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center text-forest-800 shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-forest-950 text-xs sm:text-sm">AgriNest Complex Reception</h5>
                  <p className="text-[11px] text-forest-600">Plot 1-6 Freedom Way, Lagos-Ibadan Expressway</p>
                </div>
              </div>
              <span className="text-[10px] bg-forest-100 text-forest-800 font-bold px-2 py-1 rounded-lg">
                Plot 1-6
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
