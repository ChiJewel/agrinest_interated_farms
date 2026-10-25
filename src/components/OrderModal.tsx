import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, MessageSquare, CheckCircle2, MapPin } from 'lucide-react';
import { getWhatsAppLink } from '../data/farmConfig';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
  selectedItems: string[];
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
  selectedItems
}) => {
  const [productName, setProductName] = useState(preselectedProduct || '');
  const [quantity, setQuantity] = useState('100');
  const [unitType, setUnitType] = useState('Crates / Units');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('Lagos Metropolis');
  const [deliveryType, setDeliveryType] = useState<'Express Cold-Chain' | 'Farmgate Pickup'>('Express Cold-Chain');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setProductName(preselectedProduct);
    } else if (selectedItems.length > 0) {
      setProductName(selectedItems.join(', '));
    }
  }, [preselectedProduct, selectedItems]);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = () => {
    const text = `*AgriNest Commercial Supply Order Request*
*Product(s):* ${productName || 'General Bulk Supply'}
*Estimated Quantity:* ${quantity} ${unitType}
*Delivery Method:* ${deliveryType}
*Target Location:* ${deliveryLocation}
*Contact Person:* ${customerName || 'Procurement Officer'}
*Phone Number:* ${customerPhone || 'Not provided'}
*Corridor Hub:* Plot 1-6 Freedom Way, Lagos-Ibadan Expressway`;

    window.open(getWhatsAppLink(text), '_blank');
    onClose();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleWhatsAppSubmit();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-forest-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-forest-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-forest-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gold-400 text-forest-950 flex items-center justify-center shrink-0 font-bold">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-lg text-white">B2B Commercial Requisition</h3>
              <p className="text-[10px] sm:text-[11px] text-cream-300">AgriNest Farmgate Direct Supply</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-cream-300 hover:text-white hover:bg-forest-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-leaf-100 text-leaf-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl text-forest-950">Generating Official Quote...</h4>
              <p className="text-xs text-forest-700">Connecting you directly to the AgriNest Commercial Desk on WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-xs font-bold text-forest-900 mb-1">
                  Selected Produce / Division
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Table Eggs, Sweet Bell Peppers, Cattle, Maize..."
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-forest-200 bg-cream-100 text-forest-950 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-forest-900 mb-1">
                    Estimated Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-forest-200 bg-cream-100 text-forest-950 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest-900 mb-1">
                    Unit Specification
                  </label>
                  <select
                    value={unitType}
                    onChange={(e) => setUnitType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-forest-200 bg-cream-100 text-forest-950 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest-600"
                  >
                    <option value="Cartons of Day-Old Chicks (51 birds/box)">Cartons of Day-Old Chicks (51/box)</option>
                    <option value="Birds (2-Weeks Brooded Chicks)">Birds (2-Weeks Brooded Chicks)</option>
                    <option value="25kg / 50kg Improved Seed Bags">25kg / 50kg Improved Seed Bags</option>
                    <option value="Bundles of Cassava Stems (50 stems)">Bundles of Cassava Stems (50 stems)</option>
                    <option value="Agribusiness Consultation / Audit">Agribusiness Consultation / Audit</option>
                    <option value="Crates of 30 Eggs">Crates of 30 Eggs</option>
                    <option value="10kg Produce Crates">10kg Produce Crates</option>
                    <option value="50kg Woven Sacks (Grain)">50kg Woven Sacks (Grain)</option>
                    <option value="Cartons of Dressed Broilers">Cartons of Dressed Broilers</option>
                    <option value="Live Animals (Head)">Live Animals (Head)</option>
                    <option value="Metric Tons (Bulk)">Metric Tons (Bulk)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-forest-900 mb-1">
                    Your Name / Offtaker
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name or company"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-forest-200 bg-cream-100 text-forest-950 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest-900 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234..."
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-forest-200 bg-cream-100 text-forest-950 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-forest-900 mb-1">
                    Fulfillment Method
                  </label>
                  <select
                    value={deliveryType}
                    onChange={(e) => setDeliveryType(e.target.value as 'Express Cold-Chain' | 'Farmgate Pickup')}
                    className="w-full px-3 py-2.5 rounded-xl border border-forest-200 bg-cream-100 text-forest-950 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest-600"
                  >
                    <option value="Express Cold-Chain">Refrigerated Truck Delivery</option>
                    <option value="Farmgate Pickup">Direct Farmgate Weighbridge Pickup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest-900 mb-1">
                    Destination Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ikeja, Lekki, Sagamu, Ibadan"
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-forest-200 bg-cream-100 text-forest-950 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest-600"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gold-400 text-forest-950 font-extrabold text-sm hover:bg-gold-500 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Requisition via Official WhatsApp</span>
                </button>
              </div>

              <p className="text-[10px] text-forest-600 text-center flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-gold-500" />
                Dispatch origin: Plot 1-6 Freedom Way, Lagos-Ibadan Expressway Corridor
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
