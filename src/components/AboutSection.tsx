import React from 'react';
import { 
  Terminal, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Layout, 
  Server, 
  GitBranch, 
  Box, 
  BrainCircuit, 
  CheckCircle2,
  GraduationCap,
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO, CORE_AREAS } from '../data/portfolioData';

const AREA_ICONS: Record<number, React.ReactNode> = {
  0: <Server className="w-4 h-4 text-blue-400" />,
  1: <Layout className="w-4 h-4 text-cyan-400" />,
  2: <Terminal className="w-4 h-4 text-blue-400" />,
  3: <GitBranch className="w-4 h-4 text-indigo-400" />,
  4: <Database className="w-4 h-4 text-emerald-400" />,
  5: <Cpu className="w-4 h-4 text-amber-400" />,
  6: <ShieldCheck className="w-4 h-4 text-red-400" />,
  7: <Box className="w-4 h-4 text-blue-400" />,
  8: <BrainCircuit className="w-4 h-4 text-purple-400" />,
  9: <Layout className="w-4 h-4 text-cyan-400" />
};

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-[#080B12] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              01 / Visão & Engenharia
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Código com propósito.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-slate-400 flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Luanda, Angola
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" /> {PERSONAL_INFO.education}
            </span>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Prose (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal border-l-2 border-blue-500 pl-6 py-1">
              {PERSONAL_INFO.aboutParagraphs[0]}
            </div>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed pl-6">
              {PERSONAL_INFO.aboutParagraphs[1]}
            </p>

            {/* Engineering Principles Manifesto */}
            <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#101621] border border-slate-800 space-y-6">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Princípios de Construção Técnica</span>
                <span className="text-cyan-400">[ ENGENHARIA ]</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Resolução de problemas reais</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Prioridade a softwares que geram utilidade imediata e valor sustentável para os utilizadores.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Arquitectura limpa e modular</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Separação rigorosa de domínios, manutenibilidade a longo prazo e facilidade de evolução.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Segurança desde a concepção</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Validação em camadas, princípios de menor privilégio e protecção contra ameaças comuns.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Desempenho no ambiente local</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Aplicações pensadas para funcionar com eficiência em ligações de rede variáveis e terminais móveis.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Status Callout */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center gap-4 text-xs font-mono text-slate-300">
              <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <span className="text-white font-medium">Formação Académica:</span>{' '}
                <span className="text-slate-300">{PERSONAL_INFO.education}</span>
                <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                  Focado em ciências da computação, estruturas de dados, algoritmos e engenharia de software aplicada.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Áreas de Actuação Matrix (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#101621] border border-slate-800">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <h3 className="text-base font-display font-semibold text-white">
                  Áreas de Actuação Técnica
                </h3>
                <span className="text-xs font-mono text-cyan-400">{CORE_AREAS.length} Domínios</span>
              </div>

              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Competências aplicadas diariamente na concepção de sistemas escaláveis e interfaces intuitivas:
              </p>

              <div className="space-y-2.5">
                {CORE_AREAS.map((area, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-[#080B12]/80 border border-slate-800/60 hover:border-slate-700 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-md bg-[#101621] border border-slate-800 flex items-center justify-center shrink-0">
                      {AREA_ICONS[idx] || <Terminal className="w-3.5 h-3.5 text-cyan-400" />}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
