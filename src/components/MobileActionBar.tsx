import React from 'react';
import { Phone, MessageCircle, ShoppingBag, MapPin } from 'lucide-react';
import { farmConfig, getWhatsAppLink } from '../data/farmConfig';

interface MobileActionBarProps {
  onOpenOrderModal: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden pb-safe">
      <div className="mx-3 mb-2.5 p-2 rounded-2xl bg-forest-950/95 backdrop-blur-lg border border-forest-700/80 shadow-2xl flex items-center justify-between gap-1 text-white">
        {/* Direct Call Button */}
        <a
          href={`tel:${farmConfig.phoneRaw}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-cream-200 hover:text-white hover:bg-forest-900 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-leaf-400 mb-0.5" />
          <span className="text-[10px] font-semibold">Call Farm</span>
        </a>

        {/* WhatsApp Official Desk */}
        <a
          href={getWhatsAppLink("Hello AgriNest Integrated Farms desk, I am enquiring from your website about product availability and corporate supply.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#25D366] hover:bg-forest-900 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold text-white">WhatsApp</span>
        </a>

        {/* Route / Location Pin */}
        <a
          href="#location"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-cream-200 hover:text-white hover:bg-forest-900 active:scale-95 transition-all"
        >
          <MapPin className="w-4 h-4 text-gold-400 mb-0.5" />
          <span className="text-[10px] font-semibold">Plot 1-6</span>
        </a>

        {/* B2B Requisition Action CTA */}
        <button
          onClick={onOpenOrderModal}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-gold-400 text-forest-950 font-extrabold text-[11px] shadow-md active:scale-95 transition-all"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Supply Quote</span>
        </button>
      </div>
    </div>
  );
};
