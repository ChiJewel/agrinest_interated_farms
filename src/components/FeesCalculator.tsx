import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Plus, 
  Minus, 
  Trash2, 
  Truck, 
  ShieldCheck, 
  FileText, 
  MessageSquare, 
  ArrowRight, 
  Check, 
  AlertCircle, 
  Percent, 
  RotateCcw, 
  Package, 
  MapPin, 
  TrendingDown 
} from 'lucide-react';
import { CATALOG_ITEMS, CatalogItem } from '../data/farmData';
import { getWhatsAppLink } from '../data/farmConfig';

export interface CalculatorEntry {
  item: CatalogItem;
  quantity: number;
}

interface FeesCalculatorProps {
  entries: CalculatorEntry[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onSetQuantity: (itemId: string, qty: number) => void;
  onRemoveEntry: (itemId: string) => void;
  onAddEntry: (item: CatalogItem) => void;
  onClearAll: () => void;
  onOpenOrderModalWithSummary: (summary: string) => void;
}

export const FeesCalculator: React.FC<FeesCalculatorProps> = ({
  entries,
  onUpdateQuantity,
  onSetQuantity,
  onRemoveEntry,
  onAddEntry,
  onClearAll,
  onOpenOrderModalWithSummary,
}) => {
  // Logistics delivery location selection
  const [selectedLocation, setSelectedLocation] = useState<string>('lagos-mainland');
  // Delivery fulfillment option
  const [deliveryMethod, setDeliveryMethod] = useState<'cold-chain' | 'pickup' | 'ventilated'>('cold-chain');
  // Compliance & Add-on Services
  const [includePhytosanitary, setIncludePhytosanitary] = useState(false);
  const [includeTempLogger, setIncludeTempLogger] = useState(true);
  const [includeOffloading, setIncludeOffloading] = useState(false);
  const [includeVetCertificate, setIncludeVetCertificate] = useState(false);
  // Filter for adding more items
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [copiedQuote, setCopiedQuote] = useState(false);

  // Delivery destination definitions
  const locations: Record<string, { name: string; hub: string; baseFee: number; note: string }> = {
    'farmgate': {
      name: 'Farmgate Direct Pickup',
      hub: 'Plot 1-6 Freedom Way, Lagos-Ibadan Expressway',
      baseFee: 0,
      note: 'Zero logistics fee. Client supplies logistics truck / van.'
    },
    'lagos-mainland': {
      name: 'Lagos Mainland Distribution',
      hub: 'Berger / Ojodu / Ikeja / Maryland / Ojota',
      baseFee: 25000,
      note: '35 mins express corridor dispatch with insulated transport.'
    },
    'lagos-island': {
      name: 'Lagos Island & Free Zone Corridor',
      hub: 'Victoria Island / Ikoyi / Lekki / Ajah Depot',
      baseFee: 40000,
      note: 'Direct route via 3rd Mainland / Epe Expressway access.'
    },
    'sagamu-ogun': {
      name: 'Sagamu Interchange / Ogun Industrial',
      hub: 'Sagamu / Shagamu Expressway / Flowergate / Ogijo',
      baseFee: 15000,
      note: 'Proximity hub dispatch within 15 minutes.'
    },
    'ibadan-hub': {
      name: 'Ibadan Commercial Hub',
      hub: 'Toll Gate / Challenge / Ring Road / Iwo Road',
      baseFee: 30000,
      note: 'Direct Northbound highway haulage.'
    },
    'interstate': {
      name: 'Interstate Haulage & Regional Dispatch',
      hub: 'Edo / Delta / Ondo / Kwara / Nationwide Network',
      baseFee: 65000,
      note: 'Long-haul refrigerated / ventilated transport.'
    }
  };

  // Add-on fees
  const feePhytosanitary = includePhytosanitary ? 15000 : 0;
  const feeTempLogger = (includeTempLogger && deliveryMethod === 'cold-chain') ? 12000 : 0;
  const feeOffloading = includeOffloading ? 10000 : 0;
  const feeVetCert = includeVetCertificate ? 8000 : 0;

  // Selected delivery fee
  const deliveryFee = deliveryMethod === 'pickup' ? 0 : locations[selectedLocation].baseFee;

  // Subtotal for produce and services
  const produceSubtotal = useMemo(() => {
    return entries.reduce((acc, entry) => acc + (entry.item.priceNumber * entry.quantity), 0);
  }, [entries]);

  // Tiered Volume Discount logic
  // >= 500,000 => 3%
  // >= 1,500,000 => 5%
  // >= 3,000,000 => 7.5%
  const { discountRate, discountTierLabel, discountAmount, nextTierDiff, nextTierLabel } = useMemo(() => {
    let rate = 0;
    let label = 'No Volume Discount';
    let nextDiff = 0;
    let nextLabel = '';

    if (produceSubtotal >= 3000000) {
      rate = 0.075;
      label = '7.5% Wholesale Partner Discount';
      nextDiff = 0;
      nextLabel = 'Maximum Discount Achieved';
    } else if (produceSubtotal >= 1500000) {
      rate = 0.05;
      label = '5% Corporate Offtake Discount';
      nextDiff = 3000000 - produceSubtotal;
      nextLabel = '7.5% Wholesale Discount';
    } else if (produceSubtotal >= 500000) {
      rate = 0.03;
      label = '3% Bulk Volume Discount';
      nextDiff = 1500000 - produceSubtotal;
      nextLabel = '5% Corporate Discount';
    } else {
      rate = 0;
      label = 'Standard Farmgate Rate';
      nextDiff = 500000 - produceSubtotal;
      nextLabel = '3% Bulk Volume Discount';
    }

    const amount = Math.round(produceSubtotal * rate);
    return {
      discountRate: rate,
      discountTierLabel: label,
      discountAmount: amount,
      nextTierDiff: Math.max(0, nextDiff),
      nextTierLabel: nextLabel
    };
  }, [produceSubtotal]);

  // Grand Total Calculation
  const totalComplianceFees = feePhytosanitary + feeTempLogger + feeOffloading + feeVetCert;
  const netProduceAmount = produceSubtotal - discountAmount;
  const grandTotal = Math.max(0, netProduceAmount + deliveryFee + totalComplianceFees);

  // Quick preset scenario loaders
  const loadPreset = (presetType: 'poultry-starter' | 'supermarket' | 'outgrower') => {
    onClearAll();
    if (presetType === 'poultry-starter') {
      const doc = CATALOG_ITEMS.find((i) => i.id === 'prod-day-old-chicks');
      const brooded = CATALOG_ITEMS.find((i) => i.id === 'prod-brooded-chicks');
      const advisory = CATALOG_ITEMS.find((i) => i.id === 'prod-biosecurity-consultation');
      if (doc) onAddEntry(doc);
      if (brooded) onAddEntry(brooded);
      if (advisory) onAddEntry(advisory);
    } else if (presetType === 'supermarket') {
      const eggs = CATALOG_ITEMS.find((i) => i.id === 'prod-eggs');
      const peppers = CATALOG_ITEMS.find((i) => i.id === 'prod-peppers');
      const tomatoes = CATALOG_ITEMS.find((i) => i.id === 'prod-tomatoes');
      const broilers = CATALOG_ITEMS.find((i) => i.id === 'prod-broilers');
      if (eggs) onAddEntry(eggs);
      if (peppers) onAddEntry(peppers);
      if (tomatoes) onAddEntry(tomatoes);
      if (broilers) onAddEntry(broilers);
    } else if (presetType === 'outgrower') {
      const maizeSeeds = CATALOG_ITEMS.find((i) => i.id === 'prod-seeds-maize');
      const cassavaStems = CATALOG_ITEMS.find((i) => i.id === 'prod-cassava-stems');
      const consult = CATALOG_ITEMS.find((i) => i.id === 'prod-farm-consultation');
      if (maizeSeeds) onAddEntry(maizeSeeds);
      if (cassavaStems) onAddEntry(cassavaStems);
      if (consult) onAddEntry(consult);
    }
  };

  // WhatsApp RFQ Quotation Dispatcher
  const handleGenerateWhatsAppQuote = () => {
    let itemsText = entries.map((e, idx) => 
      `${idx + 1}. *${e.item.name}* (Qty: ${e.quantity} ${e.item.unit}) -> ₦${(e.item.priceNumber * e.quantity).toLocaleString()}`
    ).join('\n');

    if (entries.length === 0) {
      itemsText = 'No specific items selected yet.';
    }

    const text = `*AgriNest Official Price & Requisition Quotation*
----------------------------------------
*Selected Produce, Inputs & Services:*
${itemsText}

----------------------------------------
*Financial Summary:*
• Produce Subtotal: ₦${produceSubtotal.toLocaleString()}
${discountAmount > 0 ? `• Volume Discount (${(discountRate * 100)}%): -₦${discountAmount.toLocaleString()}\n` : ''}• Logistics Destination: ${locations[selectedLocation].name} (${locations[selectedLocation].hub})
• Logistics / Delivery Fee: ₦${deliveryFee.toLocaleString()}
${totalComplianceFees > 0 ? `• Value-Added Compliance Services: ₦${totalComplianceFees.toLocaleString()}\n` : ''}
*TOTAL ESTIMATED QUOTE: ₦${grandTotal.toLocaleString()}*
----------------------------------------
*Corridor Gate:* Plot 1-6 Freedom Way, Lagos-Ibadan Expressway
*Validity:* 7 Calendar Days from dispatch

Hello AgriNest Sales Desk, please review this generated quotation and confirm delivery scheduling and account details.`;

    window.open(getWhatsAppLink(text), '_blank');
  };

  const handleCopyQuoteToClipboard = () => {
    const itemsText = entries.map((e, idx) => 
      `${idx + 1}. ${e.item.name} | Qty: ${e.quantity} ${e.item.unit} | ₦${(e.item.priceNumber * e.quantity).toLocaleString()}`
    ).join('\n');

    const quoteSummary = `AgriNest Integrated Farms - Price & Fees Quotation
------------------------------------------------------
${itemsText}

Financial Ledger:
- Produce Subtotal: ₦${produceSubtotal.toLocaleString()}
${discountAmount > 0 ? `- Volume Discount (${(discountRate * 100)}%): -₦${discountAmount.toLocaleString()}\n` : ''}- Destination: ${locations[selectedLocation].name} (${locations[selectedLocation].hub})
- Haulage & Dispatch Fee: ₦${deliveryFee.toLocaleString()}
${totalComplianceFees > 0 ? `- Compliance & Handling Add-ons: ₦${totalComplianceFees.toLocaleString()}\n` : ''}
======================================================
TOTAL ESTIMATED REQUISITION: ₦${grandTotal.toLocaleString()}
======================================================
Plot 1-6 Freedom Way, Lagos-Ibadan Expressway Corridor`;

    navigator.clipboard.writeText(quoteSummary);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  const handleProceedToOfficialOrder = () => {
    const summary = entries.map((e) => `${e.item.name} (${e.quantity} ${e.item.unit})`).join(', ');
    onOpenOrderModalWithSummary(summary || 'Custom Calculated Requisition');
  };

  // Filter available items to add
  const availableToAdd = useMemo(() => {
    const entryIds = new Set(entries.map((e) => e.item.id));
    return CATALOG_ITEMS.filter((item) => {
      const notInCart = !entryIds.has(item.id);
      const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
      return notInCart && matchesCategory;
    });
  }, [entries, filterCategory]);

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-cream-200 relative overflow-hidden border-t border-forest-100">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-leaf-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 text-gold-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Calculator className="w-4 h-4 text-gold-400" />
            <span>Interactive Commercial Requisition Ledger</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 tracking-tight">
            Produce &amp; Services Fees Calculator
          </h2>
          <p className="mt-3 text-base sm:text-lg text-forest-800">
            Configure your order quantities, estimate cold-chain logistics across the Lagos-Ibadan corridor, apply bulk volume discounts, and generate instant formal pro-forma quotations.
          </p>
        </div>

        {/* Quick Scenario Preset Pills - Mobile horizontal scroll */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto pb-2 sm:pb-0 no-scrollbar px-1">
          <span className="text-xs font-bold text-forest-800 uppercase tracking-wider shrink-0 mr-1">
            Presets:
          </span>
          <button
            onClick={() => loadPreset('poultry-starter')}
            className="px-3.5 py-2 rounded-full bg-white text-forest-900 text-xs font-bold border border-forest-200 hover:border-gold-400 hover:bg-gold-50 shadow-xs transition-all whitespace-nowrap shrink-0"
          >
            🐣 Poultry Starter
          </button>
          <button
            onClick={() => loadPreset('supermarket')}
            className="px-3.5 py-2 rounded-full bg-white text-forest-900 text-xs font-bold border border-forest-200 hover:border-gold-400 hover:bg-gold-50 shadow-xs transition-all whitespace-nowrap shrink-0"
          >
            🛒 Supermarket Weekly
          </button>
          <button
            onClick={() => loadPreset('outgrower')}
            className="px-3.5 py-2 rounded-full bg-white text-forest-900 text-xs font-bold border border-forest-200 hover:border-gold-400 hover:bg-gold-50 shadow-xs transition-all whitespace-nowrap shrink-0"
          >
            🌾 Grain &amp; Crop Outgrower
          </button>
        </div>

        {/* Main 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Items in Requisition & Item Configurator) - 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Active Items Table / Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-premium border border-forest-100">
              <div className="flex items-center justify-between pb-4 border-b border-forest-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-forest-100 text-forest-900 flex items-center justify-center font-bold text-sm">
                    {entries.length}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-forest-950">
                      Requisition Items ({entries.length})
                    </h3>
                    <p className="text-xs text-forest-600">Adjust unit volumes to update calculations</p>
                  </div>
                </div>

                {entries.length > 0 && (
                  <button
                    onClick={onClearAll}
                    className="flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All</span>
                  </button>
                )}
              </div>

              {/* Items List */}
              {entries.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto text-forest-400">
                    <Package className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-forest-950 text-base">Your Requisition List is Empty</h4>
                  <p className="text-xs text-forest-700 max-w-sm mx-auto">
                    Select items from the catalog below, use one of our quick loaders above, or click &ldquo;Add to Quote&rdquo; in the produce catalog.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-forest-100">
                  {entries.map(({ item, quantity }) => {
                    const lineTotal = item.priceNumber * quantity;
                    return (
                      <div key={item.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        {/* Item Details */}
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 rounded-xl object-cover shrink-0 border border-forest-100"
                          />
                          <div className="min-w-0">
                            <h4 className="font-bold text-xs sm:text-sm text-forest-950 truncate">
                              {item.name}
                            </h4>
                            <p className="text-[11px] text-forest-600 mt-0.5">
                              <span className="font-extrabold text-forest-900">{item.estimatedPrice}</span> / {item.unit}
                            </p>
                            <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-cream-200 text-forest-800">
                              Min: {item.minimumOrder}
                            </span>
                          </div>
                        </div>

                        {/* Quantity Stepper & Line Price */}
                        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 sm:gap-4 shrink-0">
                          {/* Stepper */}
                          <div className="flex items-center border border-forest-200 rounded-xl overflow-hidden bg-cream-100">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center text-forest-700 hover:bg-forest-200 hover:text-forest-950 transition-colors"
                              title="Decrease quantity"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={quantity}
                              onChange={(e) => {
                                const val = parseInt(e.target.value, 10);
                                if (!isNaN(val) && val >= 1) {
                                  onSetQuantity(item.id, val);
                                }
                              }}
                              className="w-12 sm:w-14 text-center text-base sm:text-xs font-bold bg-transparent text-forest-950 focus:outline-none"
                            />
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center text-forest-700 hover:bg-forest-200 hover:text-forest-950 transition-colors"
                              title="Increase quantity"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Line Total */}
                          <div className="text-right min-w-[85px] sm:min-w-[90px]">
                            <div className="font-extrabold text-sm sm:text-base text-forest-950">
                              ₦{lineTotal.toLocaleString()}
                            </div>
                            <div className="text-[10px] text-forest-500">
                              ({quantity} × ₦{item.priceNumber.toLocaleString()})
                            </div>
                          </div>

                          {/* Remove button */}
                          <button
                            onClick={() => onRemoveEntry(item.id)}
                            className="p-1.5 text-forest-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Add More Items Drawer / Selector */}
              <div className="mt-6 pt-5 border-t border-forest-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-forest-800 flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5 text-leaf-600" />
                    <span>Add More Products or Services</span>
                  </h4>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-1 no-scrollbar">
                    {['all', 'vegetables', 'poultry', 'chicks', 'seeds', 'livestock', 'crops', 'services'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold capitalize whitespace-nowrap transition-all ${
                          filterCategory === cat
                            ? 'bg-forest-900 text-white'
                            : 'bg-cream-100 text-forest-700 hover:bg-cream-200'
                        }`}
                      >
                        {cat === 'all' ? 'All' : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Add Items Scrollable Strip */}
                {availableToAdd.length === 0 ? (
                  <p className="text-xs text-forest-600 italic py-2">
                    All catalog items in this category are currently added to your calculator.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
                    {availableToAdd.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onAddEntry(item)}
                        className="flex items-center justify-between p-2.5 rounded-xl border border-forest-100 hover:border-gold-400 hover:bg-gold-50/40 cursor-pointer transition-all group bg-cream-50"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-9 h-9 rounded-lg object-cover shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-forest-950 truncate group-hover:text-forest-800">
                              {item.name}
                            </p>
                            <p className="text-[10px] text-forest-600">
                              <span className="font-bold text-forest-900">{item.estimatedPrice}</span> • {item.unit}
                            </p>
                          </div>
                        </div>

                        <button className="shrink-0 w-7 h-7 rounded-lg bg-forest-900 group-hover:bg-gold-400 text-white group-hover:text-forest-950 flex items-center justify-center transition-colors">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Logistics & Corridor Haulage Selector */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-premium border border-forest-100 space-y-4">
              <div className="flex items-center gap-2 text-forest-950">
                <Truck className="w-5 h-5 text-gold-500" />
                <h3 className="font-extrabold text-base sm:text-lg">
                  Logistics &amp; Cold-Chain Delivery Corridor
                </h3>
              </div>

              {/* Delivery Fulfillment Method */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {[
                  { id: 'cold-chain', label: 'Express Cold-Chain', sub: 'Chilled (-2°C to 8°C)' },
                  { id: 'ventilated', label: 'Ventilated Truck', sub: 'For Grains & Livestock' },
                  { id: 'pickup', label: 'Farmgate Pickup', sub: 'Client Vehicle (₦0)' }
                ].map((meth) => (
                  <button
                    key={meth.id}
                    onClick={() => setDeliveryMethod(meth.id as 'cold-chain' | 'pickup' | 'ventilated')}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      deliveryMethod === meth.id
                        ? 'border-forest-900 bg-forest-900 text-white shadow-sm'
                        : 'border-forest-100 bg-cream-100 text-forest-900 hover:bg-cream-200'
                    }`}
                  >
                    <span className="block text-xs font-extrabold">{meth.label}</span>
                    <span className={`block text-[10px] mt-0.5 ${deliveryMethod === meth.id ? 'text-cream-300' : 'text-forest-600'}`}>
                      {meth.sub}
                    </span>
                  </button>
                ))}
              </div>

              {/* Destination Hub Selector (Disabled if pickup) */}
              {deliveryMethod !== 'pickup' && (
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-forest-900">
                    Select Target Destination Hub:
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl border border-forest-200 bg-cream-100 text-forest-950 text-base sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-forest-600"
                  >
                    {Object.entries(locations).filter(([key]) => key !== 'farmgate').map(([key, loc]) => (
                      <option key={key} value={key}>
                        {loc.name} — ₦{loc.baseFee.toLocaleString()} ({loc.hub})
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-forest-600 flex items-center gap-1.5 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span>{locations[selectedLocation].note}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Compliance & Handling Add-ons */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-premium border border-forest-100 space-y-3">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-forest-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-leaf-600" />
                <span>Value-Added Handling &amp; Quality Certification</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-forest-100 bg-cream-50 hover:bg-cream-100 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={includePhytosanitary}
                    onChange={(e) => setIncludePhytosanitary(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-forest-900 focus:ring-forest-600"
                  />
                  <div>
                    <span className="block text-xs font-bold text-forest-950">NAFDAC / Health Certificate</span>
                    <span className="block text-[11px] text-forest-600">+₦15,000 (Lab Batch Analysis)</span>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-forest-100 bg-cream-50 hover:bg-cream-100 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={includeTempLogger}
                    onChange={(e) => setIncludeTempLogger(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-forest-900 focus:ring-forest-600"
                  />
                  <div>
                    <span className="block text-xs font-bold text-forest-950">Cold-Chain Temp Logger</span>
                    <span className="block text-[11px] text-forest-600">+₦12,000 (Digital Trip Guarantee)</span>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-forest-100 bg-cream-50 hover:bg-cream-100 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={includeOffloading}
                    onChange={(e) => setIncludeOffloading(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-forest-900 focus:ring-forest-600"
                  />
                  <div>
                    <span className="block text-xs font-bold text-forest-950">Palletized Offloading Crew</span>
                    <span className="block text-[11px] text-forest-600">+₦10,000 (Warehouse Stacking)</span>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-forest-100 bg-cream-50 hover:bg-cream-100 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={includeVetCertificate}
                    onChange={(e) => setIncludeVetCertificate(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-forest-900 focus:ring-forest-600"
                  />
                  <div>
                    <span className="block text-xs font-bold text-forest-950">Veterinary Lineage Log</span>
                    <span className="block text-[11px] text-forest-600">+₦8,000 (Chicks / Livestock)</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column (Live Financial Ledger & Action Triggers) - 5 cols */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            
            {/* Financial Ledger Summary Card */}
            <div className="bg-forest-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-forest-800 space-y-6">
              
              <div className="flex items-center justify-between border-b border-forest-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-400 block">
                    AgriNest Commercial Ledger
                  </span>
                  <h3 className="font-extrabold text-xl text-white">
                    Estimated Requisition Total
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gold-400 text-forest-950 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

              {/* Progress to next discount tier */}
              {nextTierDiff > 0 && produceSubtotal > 0 && (
                <div className="bg-forest-900/90 rounded-2xl p-3.5 border border-forest-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-leaf-300 flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" />
                      Unlock Next Discount Tier
                    </span>
                    <span className="text-gold-300">{nextTierLabel}</span>
                  </div>
                  <div className="w-full bg-forest-950 rounded-full h-2 overflow-hidden border border-white/10">
                    <div 
                      className="bg-gradient-to-r from-leaf-400 to-gold-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (produceSubtotal / (produceSubtotal + nextTierDiff)) * 100)}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-cream-300">
                    Add <strong className="text-white">₦{nextTierDiff.toLocaleString()}</strong> more to activate {nextTierLabel}!
                  </p>
                </div>
              )}

              {/* Detailed Ledger Line Items */}
              <div className="space-y-3 text-xs sm:text-sm">
                
                <div className="flex items-center justify-between text-cream-200">
                  <span>Produce &amp; Services Subtotal ({entries.length} items):</span>
                  <span className="font-mono font-bold text-white">₦{produceSubtotal.toLocaleString()}</span>
                </div>

                {/* Bulk Volume Discount */}
                {discountAmount > 0 && (
                  <div className="flex items-center justify-between text-leaf-400 font-bold bg-leaf-950/40 px-3 py-1.5 rounded-xl border border-leaf-800/40">
                    <span className="flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5" />
                      {discountTierLabel}:
                    </span>
                    <span className="font-mono">-₦{discountAmount.toLocaleString()}</span>
                  </div>
                )}

                {/* Delivery Logistics */}
                <div className="flex items-center justify-between text-cream-200">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-gold-400" />
                    <span>Logistics ({deliveryMethod === 'pickup' ? 'Self Pickup' : locations[selectedLocation].name}):</span>
                  </span>
                  <span className="font-mono font-bold text-white">
                    {deliveryFee === 0 ? 'FREE (₦0)' : `₦${deliveryFee.toLocaleString()}`}
                  </span>
                </div>

                {/* Value added services */}
                {totalComplianceFees > 0 && (
                  <div className="flex items-center justify-between text-cream-200">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-leaf-400" />
                      <span>Handling &amp; Quality Certificates:</span>
                    </span>
                    <span className="font-mono font-bold text-white">₦{totalComplianceFees.toLocaleString()}</span>
                  </div>
                )}

                {/* Grand Total Highlight */}
                <div className="pt-4 border-t border-forest-800 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gold-400 font-bold block">
                      Net Estimated Investment
                    </span>
                    <span className="text-[11px] text-cream-300">Inclusive of packaging crates &amp; sacks</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-extrabold text-gold-300 tracking-tight font-mono">
                      ₦{grandTotal.toLocaleString()}
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleGenerateWhatsAppQuote}
                  disabled={entries.length === 0}
                  className="w-full py-3.5 px-4 rounded-xl bg-gold-400 hover:bg-gold-300 disabled:opacity-50 disabled:cursor-not-allowed text-forest-950 font-extrabold text-xs sm:text-sm shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Quotation to WhatsApp Desk</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleProceedToOfficialOrder}
                    disabled={entries.length === 0}
                    className="py-3 px-3 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs border border-white/20 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Proceed to Order</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={handleCopyQuoteToClipboard}
                    disabled={entries.length === 0}
                    className="py-3 px-3 rounded-xl bg-forest-900 hover:bg-forest-800 disabled:opacity-50 disabled:cursor-not-allowed text-cream-200 font-bold text-xs border border-forest-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    {copiedQuote ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-leaf-400" />
                        <span className="text-leaf-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FileText className="w-3.5 h-3.5 text-gold-400" />
                        <span>Copy Quote</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Pro-forma Note */}
              <div className="p-3 bg-forest-900/60 rounded-xl border border-white/5 text-[11px] text-cream-300 space-y-1">
                <div className="flex items-center gap-1 text-gold-400 font-semibold">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>Commercial Procurement Notice</span>
                </div>
                <p className="leading-relaxed">
                  Prices are pegged to the weekly Agro-Industrial Index. Final commercial invoice and payment details are verified by AgriNest procurement desk prior to loading dispatch.
                </p>
              </div>

            </div>

            {/* Plot 1-6 Freedom Way Logistics Assurance Card */}
            <div className="bg-white rounded-3xl p-5 shadow-premium border border-forest-100 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center shrink-0 border border-forest-100">
                <MapPin className="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <h5 className="font-extrabold text-xs sm:text-sm text-forest-950">
                  Lagos-Ibadan Corridor Fast-Track Dispatch
                </h5>
                <p className="text-[11px] text-forest-600 mt-0.5">
                  Direct arterial access ensures zero internal traffic delays for morning retail arrivals.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
