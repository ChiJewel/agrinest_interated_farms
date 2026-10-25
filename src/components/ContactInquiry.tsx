import React, { useState } from 'react';
import { farmConfig, getWhatsAppLink } from '../data/farmConfig';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Building2, 
  CheckCircle2, 
  Calendar
} from 'lucide-react';

export const ContactInquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    interest: 'Fresh Vegetables & Table Eggs',
    frequency: 'Recurring Weekly Contract',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `AGR-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  const handlePushToWhatsApp = () => {
    const text = `*New B2B Procurement Requisition [${referenceId}]*
*Name:* ${formData.fullName}
*Company:* ${formData.companyName || 'Private Offtaker'}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Interest:* ${formData.interest}
*Order Frequency:* ${formData.frequency}
*Notes:* ${formData.message || 'No additional note'}`;
    
    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-forest-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-leaf-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-leaf-500/20 text-leaf-300 text-xs font-bold uppercase tracking-wider mb-4 border border-leaf-500/30">
            <Building2 className="w-3.5 h-3.5 text-gold-400" />
            <span>Commercial Relations & Procurement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-leaf-400 to-gold-300">AgriNest Integrated Farms</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream-300">
            Submit a bulk supply requisition, negotiate structured offtake quotas, or schedule an executive site inspection at Plot 1-6 Freedom Way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact & Corridor Headquarters */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-forest-900 border border-forest-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 block mb-1">
                  Agri-Industrial Complex
                </span>
                <h3 className="text-2xl font-bold text-white">AgriNest Headquarters</h3>
                <p className="text-xs text-cream-300 mt-1">
                  {farmConfig.subTagline}
                </p>
              </div>

              <div className="space-y-4 text-sm text-cream-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-forest-950 flex items-center justify-center shrink-0 text-gold-400 border border-forest-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Physical Location:</span>
                    <p className="text-xs text-cream-300 mt-0.5 leading-relaxed">
                      {farmConfig.address}, {farmConfig.corridor}, {farmConfig.state}, {farmConfig.country}.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-forest-950 flex items-center justify-center shrink-0 text-leaf-400 border border-forest-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Commercial Inquiries:</span>
                    <a href={`tel:${farmConfig.phoneRaw}`} className="text-xs text-cream-300 hover:text-gold-400 block mt-0.5">
                      {farmConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-forest-950 flex items-center justify-center shrink-0 text-gold-400 border border-forest-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Corporate Correspondence:</span>
                    <a href={`mailto:${farmConfig.email}`} className="text-xs text-cream-300 hover:text-gold-400 block mt-0.5">
                      {farmConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-forest-950 flex items-center justify-center shrink-0 text-cream-400 border border-forest-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Gate & Dispatch Hours:</span>
                    <p className="text-xs text-cream-300 mt-0.5">
                      {farmConfig.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-forest-800">
                <a
                  href={getWhatsAppLink("Hello AgriNest commercial team, I would like to enquire about bulk supply pricing and availability.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect with WhatsApp Commercial Officer</span>
                </a>
              </div>
            </div>

            {/* Farm Visit Guidelines */}
            <div className="p-5 rounded-2xl bg-forest-900/60 border border-forest-800 text-xs text-cream-300 space-y-2">
              <span className="font-bold text-gold-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <Calendar className="w-4 h-4" />
                Physical Site Inspection Protocol
              </span>
              <p className="leading-relaxed">
                Institutional buyers, culinary executives, and offtakers may book a guided tour of our greenhouse complexes, layer batteries, and feedlot facilities. Booking requires 48 hours advance notice for biosecurity clearance.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Requisition Form */}
          <div className="lg:col-span-7">
            <div className="bg-forest-900/90 rounded-3xl p-6 sm:p-10 border border-forest-800 shadow-2xl backdrop-blur-md">
              {submitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-leaf-500/20 text-leaf-400 mx-auto flex items-center justify-center border border-leaf-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400 block">
                    Requisition Ref: {referenceId}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    Requisition Logged Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. An AgriNest Commercial Account Executive will review your procurement specifications and send the official farmgate rate card shortly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handlePushToWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#1EBE5D] shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward to WhatsApp for Immediate Priority</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl border border-forest-700 text-cream-200 text-xs sm:text-sm font-semibold hover:bg-forest-800"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-forest-800">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      B2B Procurement & Offtake Form
                    </h3>
                    <span className="text-[11px] text-leaf-400 font-semibold bg-leaf-500/10 px-2 py-0.5 rounded border border-leaf-500/20">
                      Standard Contract Dispatch
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-cream-300 mb-1">
                        Representative Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Babatunde Adeyemi"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-forest-950 border border-forest-700 text-white placeholder-forest-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-cream-300 mb-1">
                        Company / Supermarket / Offtaker
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. WestEnd Supermarkets Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-forest-950 border border-forest-700 text-white placeholder-forest-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-cream-300 mb-1">
                        Official Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 803 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-forest-950 border border-forest-700 text-white placeholder-forest-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-cream-300 mb-1">
                        Corporate Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="procurement@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-forest-950 border border-forest-700 text-white placeholder-forest-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-cream-300 mb-1">
                        Agricultural Division / Produce
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-forest-950 border border-forest-700 text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                      >
                        <option value="Commercial Table Eggs (Crates of 30)">Commercial Table Eggs (Crates of 30)</option>
                        <option value="Greenhouse Sweet Bell Peppers & Tomatoes">Greenhouse Sweet Bell Peppers & Tomatoes</option>
                        <option value="Whole Dressed Broiler Chickens">Whole Dressed Broiler Chickens</option>
                        <option value="Feedlot Cattle & Steers (Scaled Live Weight)">Feedlot Cattle & Steers (Scaled Live Weight)</option>
                        <option value="Goats & Sheep (Boer/WAD)">Goats & Sheep (Boer/WAD)</option>
                        <option value="Bulk Clean Yellow / White Maize (50kg Bags)">Bulk Clean Yellow / White Maize (50kg Bags)</option>
                        <option value="Industrial Starch Cassava Tubers">Industrial Starch Cassava Tubers</option>
                        <option value="Scheduled Farm Facility Inspection Tour">Scheduled Farm Facility Inspection Tour</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-cream-300 mb-1">
                        Delivery / Procurement Frequency
                      </label>
                      <select
                        value={formData.frequency}
                        onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-forest-950 border border-forest-700 text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                      >
                        <option value="Recurring Weekly Contract">Recurring Weekly Contract</option>
                        <option value="Recurring Bi-Weekly Supply">Recurring Bi-Weekly Supply</option>
                        <option value="Monthly Bulk Truckload">Monthly Bulk Truckload</option>
                        <option value="One-Time Spot Purchase">One-Time Spot Purchase</option>
                        <option value="Seasonal Contract Offtake">Seasonal Contract Offtake</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-cream-300 mb-1">
                      Required Quantity & Specific Destination Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify estimated quantities (e.g. 500 crates/week, 20 MT of maize, 50 head of cattle) or requested visit dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-forest-950 border border-forest-700 text-white placeholder-forest-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gold-400 text-forest-950 font-bold text-sm hover:bg-gold-500 transition-all shadow-elevated"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Official Procurement Requisition</span>
                  </button>
                  
                  <p className="text-[11px] text-cream-400 text-center">
                    All inquiries are processed in compliance with NDA commercial confidentiality.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
