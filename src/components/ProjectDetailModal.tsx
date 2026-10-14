import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Server, Shield, Info } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c121e] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 bg-[#101726] flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-cyan-400">{project.category}</span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-mono border ${project.badgeAccent}`}>
                {project.status}
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-display font-bold text-white">
              {project.name}
            </h2>
            <p className="text-sm font-mono text-slate-300">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            aria-label="Fechar janela de detalhes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-blue-400" />
              <span>Visão Geral do Projecto</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture & Engineering Decisions */}
          <div className="space-y-3 p-5 rounded-xl bg-[#101621] border border-slate-800">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Arquitectura & Decisões Técnicas</span>
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {project.architectureDetails.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-cyan-400 mt-1">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features Implemented */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Funcionalidades Reais / Em Concepção</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Stack Tecnológica</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* External Notice if applicable */}
          {project.externalNotice && (
            <div className="p-3.5 rounded-lg bg-blue-950/20 border border-blue-800/40 text-xs text-blue-300 flex items-center gap-2 font-mono">
              <Info className="w-4 h-4 shrink-0 text-blue-400" />
              <span>{project.externalNotice}</span>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#0e1422] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Josué Kalunga Bernardo · Engenharia de Software
          </span>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md"
              >
                <span>Aceder ao Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
