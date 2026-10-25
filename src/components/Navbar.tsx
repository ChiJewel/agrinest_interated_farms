import React, { useState, useEffect } from 'react';
import { farmConfig, getWhatsAppLink } from '../data/farmConfig';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  MessageCircle, 
  ArrowUpRight, 
  ShoppingBag
} from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About AgriNest', href: '#about' },
    { name: 'Divisions', href: '#divisions' },
    { name: 'Modern Showroom', href: '#showroom' },
    { name: 'Produce & Inputs', href: '#catalog' },
    { name: 'Fees Calculator', href: '#calculator' },
    { name: 'Expressway Hub', href: '#location' },
    { name: 'B2B Procurement', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Corporate Status Bar */}
      <div className="bg-forest-950 text-cream-200 border-b border-forest-800 text-xs py-1.5 px-3 sm:px-4 select-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span className="text-[10px] sm:text-xs text-gold-300 font-medium truncate max-w-[210px] sm:max-w-none">
              Plot 1-6 Freedom Way, Lagos-Ibadan Expressway
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 text-xs font-medium">
            <a 
              href={`tel:${farmConfig.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1 text-cream-100 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-leaf-400" />
              <span>{farmConfig.phoneDisplay}</span>
            </a>
            <a 
              href={getWhatsAppLink("Hello AgriNest Integrated Farms desk, I would like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-2 py-0.5 rounded-full transition-all text-[10px] sm:text-[11px] font-bold"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cream-100/95 backdrop-blur-md shadow-premium border-b border-forest-100 py-2.5' 
            : 'bg-cream-200 border-b border-cream-400/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-forest-600 rounded-lg p-1">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl p-1 shadow-sm border border-forest-100 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-200">
                <img 
                  src="/images/agrinest-logo.png" 
                  alt="AgriNest Integrated Farms Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl sm:text-2xl text-forest-900 tracking-tight leading-none group-hover:text-forest-700 transition-colors">
                    Agri<span className="text-leaf-600">Nest</span>
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider bg-forest-100 text-forest-800 px-1.5 py-0.5 rounded border border-forest-200">
                    NG
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-forest-700">
                  Integrated Farms
                </span>
                <span className="hidden md:block text-[9px] text-earth-600 font-medium tracking-tight">
                  Plot 1-6 Freedom Way • Lagos-Ibadan Corridor
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-forest-800 hover:text-forest-950 hover:bg-forest-50 transition-colors duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={() => onOpenOrderModal()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-forest-900 bg-gold-400 hover:bg-gold-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Bulk Supply</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-forest-800 hover:bg-forest-900 shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Book Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onOpenOrderModal()}
                className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-gold-400 text-forest-950 shadow-sm"
              >
                Supply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-forest-900 hover:bg-forest-100 focus:outline-none focus:ring-2 focus:ring-forest-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Out / Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream-100 border-b border-forest-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-forest-900 hover:bg-forest-100/80 active:bg-forest-200"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-leaf-600" />
                </a>
              ))}
            </div>

            {/* Mobile Action Hub */}
            <div className="pt-4 border-t border-forest-200 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-gold-400 text-forest-950 shadow-sm hover:bg-gold-500"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Request B2B Quotation / Catalog</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${farmConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold border border-forest-300 bg-white text-forest-900 hover:bg-forest-50"
                >
                  <Phone className="w-3.5 h-3.5 text-forest-700" />
                  <span>Call Office</span>
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-[#25D366] text-white hover:bg-[#1EBE5D]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="p-3 rounded-xl bg-forest-900 text-cream-200 text-xs flex items-start gap-2.5 mt-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">AgriNest Farm Complex</p>
                  <p className="text-cream-300 text-[11px]">Plot 1-6 Freedom Way, Lagos-Ibadan Expressway, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
