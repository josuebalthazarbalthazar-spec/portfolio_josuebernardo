import React from 'react';
import { ArrowDown, MessageCircle, Terminal, Layers, ShieldCheck, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Scene3D } from './Scene3D';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProjects, onContact }) => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-tech-grid"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Statement & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-4 lg:pt-0">
            
            {/* Context Header with Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Luanda, Angola</span>
              </span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300">Software Engineer</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">Estudante de Engenharia Informática</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display font-bold text-white tracking-tight leading-[1.12]">
              Transformo ideias em software.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                Construo soluções para o mundo real.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Sou <span className="text-white font-medium">Josué Bernardo</span>, programador Full-Stack focado no desenvolvimento de aplicações web, sistemas empresariais e produtos digitais.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              >
                <span>Explorar projectos</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-slate-200 bg-[#101621] hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
              >
                <span>Falar comigo</span>
                <MessageCircle className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Engineering Pillars Micro-Bar */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs font-mono">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span className="font-medium text-slate-300">Front & Back-end</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-tight">React, Python, Django, Node.js & APIs</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-medium text-slate-300">Dados & Sistemas</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-tight">Modelação relacional e PostgreSQL</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-medium text-slate-300">Segurança</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-tight">Boas práticas e testes autorizados</p>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Experience (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative">
              {/* Backing Ambient Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-cyan-500/5 to-transparent rounded-3xl blur-2xl pointer-events-none" />
              
              {/* 3D Canvas */}
              <Scene3D className="w-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
