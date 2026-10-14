import React from 'react';
import { ExternalLink, Terminal, Code2, Users, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';

export const TechLabSection: React.FC = () => {
  const officialUrl = 'https://techlabsa.vercel.app/';

  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: 'Desenvolvimento de Software',
      description: 'Concepção e implementação de aplicações web, arquitecturas de back-end e sistemas empresariais com foco em código limpo e padrões sustentáveis.'
    },
    {
      icon: <Rocket className="w-5 h-5 text-blue-400" />,
      title: 'Produtos Digitais',
      description: 'Criação de soluções orientadas para resolver problemas concretos no mercado, desde a prototipagem de ideias até produtos funcionais prontos para utilização.'
    },
    {
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      title: 'Serviços Tecnológicos',
      description: 'Consultoria técnica, modernização de plataformas, estruturação de bases de dados e integração de APIs para optimizar processos operacionais.'
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      title: 'Formação & Capacitação',
      description: 'Iniciativas de capacitação técnica prática em desenvolvimento de software e boas práticas de engenharia para o ecossistema tecnológico.'
    }
  ];

  return (
    <section id="tech-lab" className="relative py-24 sm:py-32 bg-[#090e17] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Special Brand Showcase Container */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#101726] to-[#0c121e] border border-cyan-500/20 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Backing Grid */}
          <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Brand Intro & Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>INICIATIVA TECNOLÓGICA & DESENVOLVIMENTO</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                  Tech Lab
                </h2>
                <p className="text-lg text-cyan-300 font-mono mt-1">
                  Inovação em software, produtos digitais e capacitação técnica
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                A <strong className="text-white font-semibold">Tech Lab</strong> é uma iniciativa tecnológica associada ao desenvolvimento de software, concepção de produtos digitais, prestação de serviços tecnológicos e formação. Fundamenta-se na convicção de que a engenharia de software aplicada tem o poder de transformar realidades e gerar impacto económico palpável.
              </p>

              {/* Verified Official Domain Display */}
              <div className="p-4 rounded-xl bg-[#080B12]/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[11px]">Website Oficial Verificado:</span>
                  <a 
                    href={officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 hover:underline break-all"
                  >
                    {officialUrl}
                  </a>
                </div>
                <span className="text-emerald-400 text-[11px] flex items-center gap-1.5 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Activo & Online
                </span>
              </div>

              {/* Exact CTA Button */}
              <div className="pt-2">
                <a
                  href={officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-cyan-900/25 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <span>Visitar Tech Lab</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Visual Brand Pillars Grid (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#080B12]/90 border border-slate-800/80 hover:border-cyan-500/40 transition-colors space-y-2.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#101621] border border-slate-800 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="text-sm font-display font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
