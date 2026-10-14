import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  ShieldCheck, 
  Filter,
  CheckCircle,
  BookOpen,
  Wrench
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillMaturity } from '../types/portfolio';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  languages: <Code2 className="w-4 h-4 text-cyan-400" />,
  frontend: <Layout className="w-4 h-4 text-blue-400" />,
  backend: <Server className="w-4 h-4 text-indigo-400" />,
  databases: <Database className="w-4 h-4 text-emerald-400" />,
  tools: <Terminal className="w-4 h-4 text-amber-400" />,
  security: <ShieldCheck className="w-4 h-4 text-red-400" />
};

export const SkillsSection: React.FC = () => {
  const [selectedMaturity, setSelectedMaturity] = useState<string>('all');
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const maturityBadges: Record<SkillMaturity, { label: string; style: string; icon: React.ReactNode }> = {
    'Experiência prática': {
      label: 'Experiência prática',
      style: 'text-cyan-400 bg-cyan-950/40 border-cyan-800/60',
      icon: <CheckCircle className="w-3 h-3 text-cyan-400" />
    },
    'Conhecimentos técnicos': {
      label: 'Conhecimentos técnicos',
      style: 'text-blue-300 bg-blue-950/40 border-blue-800/60',
      icon: <Wrench className="w-3 h-3 text-blue-400" />
    },
    'Aprendizagem em curso': {
      label: 'Aprendizagem em curso',
      style: 'text-amber-300 bg-amber-950/40 border-amber-800/60',
      icon: <BookOpen className="w-3 h-3 text-amber-400" />
    }
  };

  const displayedCategories = activeCategoryId === 'all' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.id === activeCategoryId);

  return (
    <section id="tecnologias" className="relative py-24 sm:py-32 bg-[#080B12] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              03 / Stack & Competências
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Tecnologias & Ferramentas
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl font-normal">
              Classificação transparente baseada no nível de aplicação real em projectos, arquitectura de software e estudos em curso — sem métricas fictícias.
            </p>
          </div>

          {/* Maturity Legend */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Classificação:</span>
            <span className="px-2.5 py-1 rounded border text-[11px] text-cyan-400 bg-cyan-950/30 border-cyan-800/50 flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Prática em projectos
            </span>
            <span className="px-2.5 py-1 rounded border text-[11px] text-blue-300 bg-blue-950/30 border-blue-800/50 flex items-center gap-1">
              <Wrench className="w-3 h-3" /> Conhecimentos técnicos
            </span>
            <span className="px-2.5 py-1 rounded border text-[11px] text-amber-300 bg-amber-950/30 border-amber-800/50 flex items-center gap-1">
              <BookOpen className="w-3 h-3" /> Em evolução
            </span>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors whitespace-nowrap cursor-pointer ${
              activeCategoryId === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-[#101621] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Todas as Categorias ({SKILL_CATEGORIES.length})
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-colors whitespace-nowrap cursor-pointer ${
                activeCategoryId === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#101621] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {CATEGORY_ICONS[cat.id]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const filteredItems = selectedMaturity === 'all'
              ? category.items
              : category.items.filter(i => i.maturity === selectedMaturity);

            return (
              <div 
                key={category.id}
                className="rounded-2xl bg-[#101621] border border-slate-800 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#080B12] border border-slate-800 flex items-center justify-center shrink-0">
                      {CATEGORY_ICONS[category.id]}
                    </div>
                    <div>
                      <h3 className="text-base font-display font-semibold text-white">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {filteredItems.map((item, idx) => {
                      const badge = maturityBadges[item.maturity];
                      return (
                        <div 
                          key={idx}
                          className="p-3 rounded-xl bg-[#080B12]/80 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-slate-100 font-mono">
                              {item.name}
                            </span>
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono border ${badge.style}`}>
                              {badge.icon}
                              <span>{badge.label}</span>
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            {item.context}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center justify-between border-t border-slate-800/60">
                  <span>Total de itens</span>
                  <span className="text-cyan-400">{filteredItems.length}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
