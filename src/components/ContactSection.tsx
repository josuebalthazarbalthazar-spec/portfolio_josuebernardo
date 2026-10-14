import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  Github, 
  Linkedin,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form input state
  const [senderName, setSenderName] = useState('');
  const [senderSubject, setSenderSubject] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      // Fallback
    }
  };

  const generateWhatsAppMessage = () => {
    if (senderMessage.trim()) {
      const customText = `Olá, Josué! Sou ${senderName ? senderName + ': ' : ''}${senderMessage}`;
      return `https://wa.me/244937656106?text=${encodeURIComponent(customText)}`;
    }
    return PERSONAL_INFO.whatsappUrl;
  };

  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(senderSubject || 'Contacto de Projecto / Portfólio');
    const body = encodeURIComponent(
      `Nome: ${senderName || 'Não especificado'}\n\nMensagem:\n${senderMessage || 'Olá, Josué! Gostaria de conversar sobre um projecto.'}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-[#080B12] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              05 / Conexão Directa
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Vamos construir algo útil?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl font-normal">
              {PERSONAL_INFO.summary.split('.')[0]}. Estou disponível para conversar sobre projectos de software, desenvolvimento web, colaboração tecnológica e oportunidades profissionais.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-emerald-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Canais de resposta rápida activos</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels & Verified Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#101b2a] to-[#0c1320] border border-cyan-500/30 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Directo</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">Canal Principal</span>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  Conversa em tempo real
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Para discussões ágeis sobre novos sistemas, propostas ou parcerias técnicas.
                </p>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#080B12] border border-slate-800">
                <span className="font-mono text-sm text-cyan-300 font-medium">
                  {PERSONAL_INFO.phone}
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Copiar número de telefone"
                  type="button"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir WhatsApp com Mensagem</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#101621] border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Correio Electrónico</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">Profissional</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#080B12] border border-slate-800">
                <span className="font-mono text-xs sm:text-sm text-slate-200 truncate pr-2">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copiar endereço de email"
                  type="button"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Contacto%20de%20Projecto%20-%20Josu%C3%A9%20Bernardo`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Enviar Email Directo</span>
              </a>
            </div>

            {/* Configurable Profiles Bar */}
            <div className="p-5 rounded-2xl bg-[#101621] border border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Presença técnica:</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">·</span>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dispatch Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#101621] border border-slate-800 space-y-6">
            
            <div className="space-y-1">
              <h3 className="text-xl font-display font-bold text-white">
                Compor mensagem de projecto
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Escreva abaixo os detalhes do projecto ou proposta. Pode enviar a mensagem directamente via WhatsApp ou gerar o rascunho oficial de email com 1 clique (sem dados perdidos ou envios simulados).
              </p>
            </div>

            <form onSubmit={handleSendViaEmail} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  O seu Nome ou Empresa
                </label>
                <input
                  type="text"
                  placeholder="Ex: Manuel Silva, Tech Angola, etc."
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B12] border border-slate-800 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Assunto / Natureza do Projecto
                </label>
                <input
                  type="text"
                  placeholder="Ex: Desenvolvimento de API REST, Aplicação Web ou Consultoria"
                  value={senderSubject}
                  onChange={(e) => setSenderSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B12] border border-slate-800 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Mensagem ou Descrição da Necessidade
                </label>
                <textarea
                  rows={4}
                  placeholder="Olá, Josué! Gostaria de falar sobre o desenvolvimento de uma aplicação web..."
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B12] border border-slate-800 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              {/* Action Buttons for Real Transmission */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar por WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar por Email (Client)</span>
                </button>
              </div>

              <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Transmissão garantida: abre directamente na sua aplicação nativa de WhatsApp ou Email.</span>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
