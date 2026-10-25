import { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  ShieldCheck, 
  CheckCheck,
  ChevronDown
} from 'lucide-react';
import { getWhatsAppLink } from '../data/farmConfig';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);
  const [showFloatingBubble, setShowFloatingBubble] = useState(false);

  // Show a gentle greeting bubble 2.5 seconds after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloatingBubble(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
    setShowNotificationBadge(false);
    setShowFloatingBubble(false);
  };

  const handleQuickPrompt = (promptText: string) => {
    setMessage(promptText);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const textToSend = message.trim() || "Hello AgriNest Integrated Farms, I am interested in your products and services.";
    window.open(getWhatsAppLink(textToSend), '_blank');
    setMessage('');
    setIsOpen(false);
  };

  const quickPrompts = [
    { label: '🥚 Table Eggs & Broilers Quote', text: 'Hello AgriNest, please provide current farmgate wholesale pricing for Grade-A Table Eggs and dressed broilers.' },
    { label: '🐣 Day-Old & Brooded Chicks', text: 'Hello, I want to enquire about booking Day-Old Chicks (DOC) and 2-Weeks Pre-Brooded chicks for our farm.' },
    { label: '🌾 Certified Improved Seeds', text: 'Hello AgriNest, I am interested in purchasing certified hybrid maize seeds and high-starch cassava stems.' },
    { label: '🚜 Agribusiness Consultation', text: 'Hello, I would like to book a farm masterplanning and biosecurity diagnostic consultation session.' },
    { label: '🏛️ Modern Showroom Tour', text: 'Hello, I would like to schedule a private VIP tour and produce inspection at your Plot 1-6 Freedom Way Showroom.' },
  ];

  return (
    <>
      {/* Floating Widget Container (Positioned above mobile bar on small screens, bottom right on desktop) */}
      <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 flex flex-col items-end">
        
        {/* Floating Greeting Pill / Notification Bubble (When chat is closed) */}
        {!isOpen && showFloatingBubble && (
          <div className="mb-3 max-w-xs bg-white text-forest-950 p-3.5 rounded-2xl rounded-br-none shadow-2xl border border-forest-100 animate-in fade-in slide-in-from-bottom-3 duration-300 relative group">
            <button
              onClick={() => setShowFloatingBubble(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-forest-900 text-white rounded-full flex items-center justify-center text-[10px] shadow hover:bg-forest-800 transition-colors"
              title="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[11px] font-extrabold text-forest-900 uppercase tracking-wider">
                AgriNest Direct Desk
              </span>
            </div>
            <p className="text-xs text-forest-800 leading-snug">
              Have questions about eggs, chicks, improved seeds or delivery? Chat with us live on WhatsApp!
            </p>
            <div className="mt-2 text-[10px] font-mono text-forest-600 font-semibold flex items-center gap-1">
              <span className="text-[#25D366] font-bold">●</span>
              <span>+234 817 422 2244</span>
            </div>
          </div>
        )}

        {/* Dynamic Expanded WhatsApp Chat Window */}
        {isOpen && (
          <div className="mb-4 w-[92vw] sm:w-96 max-w-sm bg-white rounded-3xl shadow-2xl border border-forest-100 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header: WhatsApp Green Theme with Verified Badge */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-white p-0.5 shadow-sm overflow-hidden flex items-center justify-center">
                    <img
                      src="/images/agrinest-logo.png"
                      alt="AgriNest Farms Desk"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#25D366] border-2 border-[#075E54] rounded-full" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-extrabold text-sm text-white">AgriNest Farms Desk</h4>
                    <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                    <span>Online</span> • <span>+234 817 422 2244</span>
                  </p>
                </div>
              </div>

              <button
                onClick={handleToggleOpen}
                className="p-1.5 text-emerald-100 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                title="Minimize WhatsApp Desk"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body (Simulated WhatsApp Conversation Stream) */}
            <div className="p-4 bg-[#E5DDD5] space-y-3 max-h-[380px] overflow-y-auto">
              
              {/* Date stamp */}
              <div className="text-center">
                <span className="px-3 py-1 rounded-full bg-white/70 text-[10px] font-bold text-forest-800 shadow-xs uppercase tracking-wider">
                  Official Commercial Desk
                </span>
              </div>

              {/* Bot / Representative Greeting Bubble */}
              <div className="flex items-start gap-2">
                <div className="bg-white rounded-2xl rounded-tl-none p-3.5 shadow-sm max-w-[85%] border border-black/5 text-xs text-forest-950 space-y-1.5">
                  <p className="font-semibold text-forest-900 leading-relaxed">
                    Hello! Welcome to <strong>AgriNest Integrated Farms</strong>. 🌾
                  </p>
                  <p className="text-forest-800 leading-relaxed">
                    How can our sales desk or agronomists assist you today? Select a quick topic below or type your custom requisition.
                  </p>
                  <div className="flex items-center justify-end gap-1 text-[9px] text-forest-500 pt-0.5">
                    <span>Just now</span>
                    <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
                  </div>
                </div>
              </div>

              {/* Quick Conversation Starter Chips */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-extrabold text-forest-700 uppercase tracking-wider block">
                  Tap to Start Conversation:
                </span>
                <div className="flex flex-col gap-1.5">
                  {quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickPrompt(prompt.text)}
                      className="text-left p-2 rounded-xl bg-white/90 hover:bg-white text-forest-950 text-[11px] font-semibold border border-forest-200/80 shadow-xs hover:border-[#25D366] transition-all flex items-center justify-between group"
                    >
                      <span>{prompt.label}</span>
                      <Send className="w-3 h-3 text-forest-400 group-hover:text-[#25D366] shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer Form with Textarea and Send Button */}
            <form onSubmit={handleSendMessage} className="p-3 bg-[#F0F2F5] border-t border-forest-200 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-full border border-forest-200 bg-white text-forest-950 text-base sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#25D366] placeholder:text-forest-400"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-md active:scale-95 transition-all shrink-0"
                title="Send via WhatsApp to +2348174222244"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>

            {/* Bottom Status Ribbon */}
            <div className="bg-[#E9ECEF] py-1.5 px-3 text-center border-t border-forest-100 text-[10px] text-forest-600 font-medium">
              Direct connection to <strong>+234 817 422 2244</strong> • Plot 1-6 Freedom Way Corridor
            </div>

          </div>
        )}

        {/* The Main Circular Floating Action Button */}
        <button
          onClick={handleToggleOpen}
          aria-label="Open AgriNest WhatsApp Chat"
          className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
        >
          {/* Subtle pulse ring animation */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping duration-1000 pointer-events-none" />

          {/* Icon switches between WhatsApp bubble and close X */}
          {isOpen ? (
            <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 transition-transform" />
          ) : (
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-110" />
          )}

          {/* Unread notification badge */}
          {!isOpen && showNotificationBadge && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white rounded-full text-[11px] font-extrabold flex items-center justify-center border-2 border-white shadow">
              1
            </span>
          )}
        </button>

      </div>
    </>
  );
};
