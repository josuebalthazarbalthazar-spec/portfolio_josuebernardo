import React from 'react';
import { ArrowUp, MapPin, ExternalLink, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05070c] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Identity & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#101621] border border-slate-800 flex items-center justify-center font-bold text-sm text-cyan-400">
                <span className="text-blue-500">J</span>
                <span className="text-cyan-400">B</span>
              </div>
              <span className="font-display font-bold text-base text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed font-sans max-w-sm">
              {PERSONAL_INFO.title}. Desenvolvimento de aplicações web, APIs REST, modelação de dados e soluções orientadas a resolver problemas reais em Angola e globalmente.
            </p>

            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Luanda, Angola · Fuso Horário WAT (UTC+1)</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold block">
              Navegação
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-cyan-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre mim</a>
              </li>
              <li>
                <a href="#projectos" className="hover:text-cyan-400 transition-colors">Projectos & Sistemas</a>
              </li>
              <li>
                <a href="#tecnologias" className="hover:text-cyan-400 transition-colors">Tecnologias & Stack</a>
              </li>
              <li>
                <a href="#tech-lab" className="hover:text-cyan-400 transition-colors">Iniciativa Tech Lab</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto Directo</a>
              </li>
            </ul>
          </div>

          {/* Official Projects & Ecosystem (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold block">
              Iniciativas & Links Reais
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://techlabsa.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-cyan-400 group transition-colors p-2 rounded-lg bg-[#0c121e] border border-slate-800"
                >
                  <span>Tech Lab (Iniciativa Oficial)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://kiesaangolatechnology.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-cyan-400 group transition-colors p-2 rounded-lg bg-[#0c121e] border border-slate-800"
                >
                  <span>Kiesa Angola Technology</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-emerald-400 group transition-colors p-2 rounded-lg bg-[#0c121e] border border-slate-800"
                >
                  <span>WhatsApp: {PERSONAL_INFO.phone}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-400">
            © {currentYear} {PERSONAL_INFO.name}. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#101621] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
