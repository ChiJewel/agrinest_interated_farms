import React from 'react';
import { farmConfig, getWhatsAppLink } from '../data/farmConfig';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  ArrowRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-cream-200 border-t border-forest-800 relative pb-28 md:pb-12">
      {/* Upper Newsletter / Off-take registration ribbon */}
      <div className="border-b border-forest-800/80 bg-forest-900/60 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Stay Informed on AgriNest Harvest Schedules & Offtake Quotas
            </h3>
            <p className="text-xs sm:text-sm text-cream-300">
              Receive weekly farmgate commodity pricing, crop maturity bulletins, and advance layer egg allocations.
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-2">
            <a
              href={getWhatsAppLink("Hello AgriNest commercial desk, please add our procurement office to your weekly harvest and price index bulletin.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gold-400 text-forest-950 font-bold text-xs sm:text-sm hover:bg-gold-500 transition-colors shadow-sm text-center"
            >
              Subscribe to Weekly Farmgate Bulletin
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Identity & Mission */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-2xl p-1.5 shadow-sm border border-forest-700 flex items-center justify-center shrink-0">
                <img 
                  src="/images/agrinest-logo.png" 
                  alt="AgriNest Integrated Farms Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-2xl text-white tracking-tight">
                  Agri<span className="text-leaf-400">Nest</span>
                </span>
                <span className="block text-xs font-bold tracking-wider uppercase text-gold-400">
                  Integrated Farms
                </span>
              </div>
            </div>

            <p className="text-sm text-leaf-300 font-semibold italic">
              &ldquo;{farmConfig.tagline}&rdquo;
            </p>

            <p className="text-xs text-cream-300 leading-relaxed max-w-md">
              A premier Nigerian integrated agro-industrial enterprise combining precision field crops, high-tech climate-controlled vegetable horticulture, biosecure commercial poultry, and free-range livestock along the Lagos-Ibadan expressway corridor.
            </p>

            <div className="flex items-center gap-2 text-xs text-cream-400 font-mono">
              <span className="bg-forest-900 px-2.5 py-1 rounded border border-forest-800">
                {farmConfig.corporateRegistration}
              </span>
              <span>•</span>
              <span className="text-leaf-400 font-medium">Export & Domestic Standard</span>
            </div>
          </div>

          {/* Products, Showroom & Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Showroom, Inputs &amp; Services
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-300">
              <li>
                <a href="#showroom" className="hover:text-white transition-colors flex items-center gap-1.5 text-gold-300 font-semibold">
                  <ArrowRight className="w-3 h-3 text-gold-400" />
                  <span>Modern Agricultural Showroom Pavilion</span>
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors flex items-center gap-1.5 text-gold-300 font-semibold">
                  <ArrowRight className="w-3 h-3 text-gold-400" />
                  <span>Produce &amp; Services Fees Calculator</span>
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-leaf-400" />
                  <span>Day-Old &amp; 2-Weeks Brooded Chicks</span>
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-leaf-400" />
                  <span>Certified Improved Seeds (Maize, Cassava, Veg)</span>
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-leaf-400" />
                  <span>Agribusiness Setup &amp; Advisory Consultation</span>
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-leaf-400" />
                  <span>Biosecure Poultry (Eggs &amp; Broilers)</span>
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-leaf-400" />
                  <span>Greenhouse &amp; Field Crop Cultivation</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Farm Complex Address & Quick Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Corridor Headquarters
            </h4>

            <div className="space-y-3 text-xs text-cream-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-leaf-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Facility:</strong> {farmConfig.address}, {farmConfig.corridor}, {farmConfig.state}, {farmConfig.country}.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-leaf-400 shrink-0" />
                <span>
                  <strong className="text-white">Hotline:</strong> {farmConfig.phoneDisplay}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-leaf-400 shrink-0" />
                <span>
                  <strong className="text-white">Email:</strong> {farmConfig.email}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-leaf-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Operating:</strong> {farmConfig.workingHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-12 mt-12 border-t border-forest-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} AgriNest Integrated Farms Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-[11px] text-cream-500">
              Plot 1-6 Freedom Way • Lagos-Ibadan Expressway Corridor
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-forest-900 hover:bg-forest-800 text-cream-200 hover:text-white border border-forest-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
