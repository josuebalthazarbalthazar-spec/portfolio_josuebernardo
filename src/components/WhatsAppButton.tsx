import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex flex-col p-3 rounded-xl bg-[#101621] border border-cyan-500/40 text-xs shadow-2xl text-slate-200 max-w-xs animate-in slide-in-from-left-2 duration-200">
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-800 text-[11px] font-mono text-cyan-400">
            <span>Josué Kalunga Bernardo</span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white"
              aria-label="Fechar dica"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            Disponível no WhatsApp para discutir projectos e parcerias em Luanda ou remoto.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/60 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
        aria-label="Falar directamente com Josué Bernardo no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Unobtrusive online status ring */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-[#080B12]" />
      </a>
    </div>
  );
};
