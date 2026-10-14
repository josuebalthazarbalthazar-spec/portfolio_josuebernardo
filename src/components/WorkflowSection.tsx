import React, { useState } from 'react';
import { 
  Search, 
  Layers, 
  Code2, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  GitCommit,
  Cpu
} from 'lucide-react';
import { WORKFLOW_STAGES } from '../data/portfolioData';

const STAGE_ICONS: Record<string, React.ReactNode> = {
  '01': <Search className="w-5 h-5 text-cyan-400" />,
  '02': <Layers className="w-5 h-5 text-blue-400" />,
  '03': <Code2 className="w-5 h-5 text-emerald-400" />,
  '04': <TrendingUp className="w-5 h-5 text-purple-400" />
};

export const WorkflowSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const activeStage = WORKFLOW_STAGES[activeStageIndex];

  return (
    <section className="relative py-24 sm:py-32 bg-[#080B12] border-t border-slate-800/60 overflow-hidden">
      
      {/* Background Pipeline Tracer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              04 / Metodologia de Engenharia
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Processo de desenvolvimento
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl font-normal">
              Metodologia estruturada em quatro etapas rigorosas para transformar necessidades complexas em produtos digitais robustos e sustentáveis.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-slate-400">
            Passo <span className="text-cyan-400 font-bold">{activeStage.number}</span> de 04
          </div>
        </div>

        {/* Interactive Step Navigator / Data Flow Ribbon */}
        <div className="relative mb-12">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-slate-800 pointer-events-none">
            {/* Animated Data Pulse Indicator */}
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all duration-500 ease-out"
              style={{
                width: `${((activeStageIndex) / (WORKFLOW_STAGES.length - 1)) * 100}%`
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {WORKFLOW_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.number}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#101621] border-cyan-400/80 shadow-lg shadow-cyan-950/30 -translate-y-1'
                      : 'bg-[#0c111a] border-slate-800/80 hover:border-slate-700 hover:bg-[#101621]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      isActive 
                        ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300' 
                        : 'bg-[#080B12] border-slate-800 text-slate-400'
                    }`}>
                      {STAGE_ICONS[stage.number]}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      ETAPA {stage.number}
                    </span>
                  </div>

                  <h3 className={`text-base font-display font-semibold transition-colors ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}>
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1 font-sans">
                    {stage.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Blueprint Card */}
        <div className="rounded-2xl bg-[#101621] border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage Summary (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span>FASE DE PROJECTO #{activeStage.number}</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-300">{activeStage.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {activeStage.number}. {activeStage.title} — {activeStage.subtitle}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {activeStage.summary}
              </p>

              {/* Technical Focus Badge */}
              <div className="p-4 rounded-xl bg-[#080B12] border border-slate-800/80 space-y-1">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wide flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" /> Foco Técnico Central
                </span>
                <p className="text-xs sm:text-sm text-slate-300 font-sans">
                  {activeStage.technicalFocus}
                </p>
              </div>

              {/* Navigation CTA within stages */}
              <div className="flex items-center gap-3 pt-2">
                {activeStageIndex > 0 && (
                  <button
                    onClick={() => setActiveStageIndex(activeStageIndex - 1)}
                    className="px-4 py-2 rounded-lg text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer"
                  >
                    ← Etapa Anterior
                  </button>
                )}
                {activeStageIndex < WORKFLOW_STAGES.length - 1 && (
                  <button
                    onClick={() => setActiveStageIndex(activeStageIndex + 1)}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-mono font-medium text-white bg-blue-600 hover:bg-blue-500 cursor-pointer transition-colors"
                  >
                    <span>Próxima: {WORKFLOW_STAGES[activeStageIndex + 1].title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Key Deliverables (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-[#080B12] border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <span className="text-slate-300 font-medium">Entregáveis de Engenharia</span>
                <span className="text-cyan-400">{activeStage.deliverables.length} itens</span>
              </div>

              <div className="space-y-3">
                {activeStage.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-lg bg-[#101621]/60 border border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">
                      {item}
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
