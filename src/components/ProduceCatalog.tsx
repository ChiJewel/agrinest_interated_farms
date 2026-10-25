import React, { useState, useMemo } from 'react';
import { CATALOG_ITEMS, CatalogItem } from '../data/farmData';
import { 
  Search, 
  ShoppingBag, 
  Plus, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Info,
  Calculator
} from 'lucide-react';
import { getWhatsAppLink } from '../data/farmConfig';

interface ProduceCatalogProps {
  onOpenOrderModal: (productName?: string) => void;
  selectedItems: string[];
  onToggleSelectItem: (itemName: string) => void;
  onAddToCalculator?: (item: CatalogItem) => void;
}

export const ProduceCatalog: React.FC<ProduceCatalogProps> = ({ 
  onOpenOrderModal,
  selectedItems,
  onToggleSelectItem,
  onAddToCalculator
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'vegetables', label: 'Fresh Vegetables & Greens' },
    { id: 'poultry', label: 'Poultry & Table Eggs' },
    { id: 'chicks', label: 'Day-Old & Brooded Chicks' },
    { id: 'seeds', label: 'Certified Improved Seeds' },
    { id: 'livestock', label: 'Pasture Cattle & Goats' },
    { id: 'crops', label: 'Grains & Field Crops' },
    { id: 'services', label: 'Farm Consultation & Advisory' },
  ];

  const filteredItems = useMemo(() => {
    return CATALOG_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.specification.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="catalog" className="py-20 sm:py-28 bg-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3 border border-forest-200">
            <ShoppingBag className="w-3.5 h-3.5 text-forest-700" />
            <span>Farmgate Wholesale, Inputs & Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 tracking-tight">
            Farm Produce, Inputs & Services Catalog
          </h2>
          <p className="mt-3 text-base sm:text-lg text-forest-800">
            From fresh harvest vegetables and table eggs to certified improved seeds, day-old chicks, 2-weeks brooded chicks, and expert agribusiness advisory.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-premium border border-forest-100 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills (Mobile friendly horizontal scroll) */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-forest-900 text-white shadow-sm'
                      : 'bg-cream-200 text-forest-800 hover:bg-cream-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-forest-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search eggs, peppers, cattle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-base sm:text-sm border border-forest-200 bg-cream-100 text-forest-950 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-forest-500 hover:text-forest-800 absolute right-3 top-1/2 -translate-y-1/2 font-bold"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Selected Items Procurement Floating Tray (If any items selected) */}
        {selectedItems.length > 0 && (
          <div className="mb-8 p-4 rounded-2xl bg-forest-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-gold-400/40 animate-in fade-in duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-400 text-forest-950 flex items-center justify-center font-bold">
                {selectedItems.length}
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base">
                  {selectedItems.length} Agricultural {selectedItems.length === 1 ? 'Commodity' : 'Commodities'} Selected
                </p>
                <p className="text-xs text-cream-300 truncate max-w-md">
                  {selectedItems.join(', ')}
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenOrderModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gold-400 text-forest-950 font-bold text-xs sm:text-sm hover:bg-gold-500 transition-colors shadow-md"
            >
              <span>Submit B2B Requisition ({selectedItems.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isSelected = selectedItems.includes(item.name);
            return (
              <div
                key={item.id}
                className={`flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                  isSelected 
                    ? 'border-forest-700 ring-2 ring-forest-700 shadow-md' 
                    : 'border-forest-100/90 shadow-subtle'
                }`}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-forest-900/90 backdrop-blur-sm text-gold-300 border border-white/10 shadow-sm">
                      {item.availability}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-bold text-forest-900 border border-forest-100">
                    {item.unit}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-forest-950 text-base leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-forest-700 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Prominent Price Tag */}
                    <div className="pt-2 pb-1 flex items-baseline justify-between border-t border-forest-50">
                      <div>
                        <span className="text-lg font-extrabold text-forest-950 font-mono tracking-tight">
                          {item.estimatedPrice}
                        </span>
                        <span className="text-[11px] text-forest-600 font-medium ml-1">
                          / {item.unit}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-forest-800 bg-cream-200 px-2 py-0.5 rounded">
                        Min: {item.minimumOrder}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs text-forest-800">
                      <div className="flex items-start gap-1.5">
                        <span className="font-semibold text-forest-950 shrink-0">Specs:</span>
                        <span className="text-[11px] text-forest-700 line-clamp-1">{item.specification}</span>
                      </div>
                    </div>

                    <div className="bg-cream-200/80 p-2 rounded-lg text-[11px] text-forest-800 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-leaf-600 shrink-0" />
                      <span className="truncate">{item.nutritionalHighlight}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 mt-3 border-t border-forest-100 space-y-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onToggleSelectItem(item.name)}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
                          isSelected
                            ? 'bg-forest-900 text-white'
                            : 'bg-cream-200 text-forest-900 hover:bg-forest-100 border border-forest-200'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-gold-400" />
                            <span>Selected</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Select Item</span>
                          </>
                        )}
                      </button>

                      {onAddToCalculator && (
                        <button
                          onClick={() => onAddToCalculator(item)}
                          title="Calculate Total in Fees Calculator"
                          className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl bg-forest-100 hover:bg-forest-200 text-forest-950 text-xs font-bold border border-forest-200 transition-colors"
                        >
                          <Calculator className="w-3.5 h-3.5 text-forest-800" />
                          <span>Calculate</span>
                        </button>
                      )}

                      <button
                        onClick={() => onOpenOrderModal(item.name)}
                        title="Direct order enquiry"
                        className="p-2 rounded-xl bg-gold-400 text-forest-950 hover:bg-gold-500 font-bold transition-colors shrink-0"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bulk Wholesale Procurement Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-forest-900 text-white border border-forest-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400 flex items-center justify-center md:justify-start gap-1.5">
              <Info className="w-4 h-4" />
              Corporate Supply Framework
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Custom Recurring Offtake Agreements for FMCGs & Supermarkets
            </h3>
            <p className="text-cream-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              We provide index-linked contract pricing, guaranteed weekly quotas, and cold-chain truck delivery directly to your distribution centers across Nigeria.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Hello AgriNest B2B desk, we would like to negotiate an institutional recurring supply agreement for farm produce.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gold-400 text-forest-950 font-bold text-sm hover:bg-gold-500 transition-all shadow-md"
          >
            Speak to B2B Commercial Desk
          </a>
        </div>
      </div>
    </section>
  );
};
