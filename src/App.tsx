import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FarmingDivisions } from './components/FarmingDivisions';
import { ModernShowroom } from './components/ModernShowroom';
import { ProduceCatalog } from './components/ProduceCatalog';
import { FeesCalculator, CalculatorEntry } from './components/FeesCalculator';
import { ClosedLoopTech } from './components/ClosedLoopTech';
import { LocationCorridor } from './components/LocationCorridor';
import { StandardsTrust } from './components/StandardsTrust';
import { ContactInquiry } from './components/ContactInquiry';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { OrderModal } from './components/OrderModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { CATALOG_ITEMS, CatalogItem } from './data/farmData';

export function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState<string | undefined>(undefined);
  const [selectedCatalogItems, setSelectedCatalogItems] = useState<string[]>([]);

  // Default entries in the Fees Calculator
  const [calculatorEntries, setCalculatorEntries] = useState<CalculatorEntry[]>([
    { item: CATALOG_ITEMS[0], quantity: 50 },  // Grade-A Brown Eggs (50 Crates)
    { item: CATALOG_ITEMS[1], quantity: 10 },  // Greenhouse Sweet Bell Peppers (10 Crates)
    { item: CATALOG_ITEMS[11], quantity: 2 },  // Commercial Day-Old Chicks (2 Cartons)
  ]);

  const handleOpenOrderModal = (productName?: string) => {
    setPreselectedProduct(productName);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setPreselectedProduct(undefined);
  };

  const handleToggleSelectItem = (itemName: string) => {
    setSelectedCatalogItems((prev) => 
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    );
  };

  // Fees Calculator Handlers
  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCalculatorEntries((prev) => 
      prev.map((entry) => {
        if (entry.item.id === itemId) {
          const newQty = Math.max(1, entry.quantity + delta);
          return { ...entry, quantity: newQty };
        }
        return entry;
      })
    );
  };

  const handleSetQuantity = (itemId: string, qty: number) => {
    setCalculatorEntries((prev) => 
      prev.map((entry) => {
        if (entry.item.id === itemId) {
          return { ...entry, quantity: Math.max(1, qty) };
        }
        return entry;
      })
    );
  };

  const handleRemoveEntry = (itemId: string) => {
    setCalculatorEntries((prev) => prev.filter((entry) => entry.item.id !== itemId));
  };

  const handleAddEntry = (item: CatalogItem) => {
    setCalculatorEntries((prev) => {
      const exists = prev.find((entry) => entry.item.id === item.id);
      if (exists) {
        return prev.map((entry) => 
          entry.item.id === item.id 
            ? { ...entry, quantity: entry.quantity + 1 } 
            : entry
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleClearAll = () => {
    setCalculatorEntries([]);
  };

  const handleAddToCalculatorAndScroll = (item: CatalogItem) => {
    handleAddEntry(item);
    const element = document.querySelector('#calculator');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-cream-300 text-forest-950 font-sans selection:bg-leaf-500 selection:text-white">
      {/* Primary Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Page Flow */}
      <main>
        <Hero onOpenOrderModal={() => handleOpenOrderModal()} />
        <AboutSection />
        <FarmingDivisions onOpenOrderModal={handleOpenOrderModal} />
        <ModernShowroom onOpenOrderModal={handleOpenOrderModal} />
        <ProduceCatalog 
          onOpenOrderModal={handleOpenOrderModal}
          selectedItems={selectedCatalogItems}
          onToggleSelectItem={handleToggleSelectItem}
          onAddToCalculator={handleAddToCalculatorAndScroll}
        />
        {/* Interactive Produce & Services Fees Calculator */}
        <FeesCalculator
          entries={calculatorEntries}
          onUpdateQuantity={handleUpdateQuantity}
          onSetQuantity={handleSetQuantity}
          onRemoveEntry={handleRemoveEntry}
          onAddEntry={handleAddEntry}
          onClearAll={handleClearAll}
          onOpenOrderModalWithSummary={handleOpenOrderModal}
        />
        <ClosedLoopTech />
        <LocationCorridor />
        <StandardsTrust />
        <ContactInquiry />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Mobile-Optimized Floating Action Bar */}
      <MobileActionBar onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Dynamic Floating WhatsApp Chat Widget */}
      <WhatsAppWidget />

      {/* Interactive Quotation & Order Requisition Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        preselectedProduct={preselectedProduct}
        selectedItems={selectedCatalogItems}
      />
    </div>
  );
}

export default App;
