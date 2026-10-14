import React, { useState, useMemo } from 'react';
import { PlusCircle, Search, Filter, Layers, ExternalLink, Sparkles } from 'lucide-react';
import { ProjectItem, ProjectCategory, ProjectStatus } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Custom user projects in state to support future projects addition
  const [customProjects, setCustomProjects] = useState<ProjectItem[]>([]);

  // Form state for adding new future project
  const [newProjectForm, setNewProjectForm] = useState({
    name: '',
    tagline: '',
    category: 'Software empresarial',
    categorySlug: 'enterprise' as ProjectItem['categorySlug'],
    description: '',
    architectureDetails: '',
    keyFeatures: '',
    technologies: '',
    status: 'Em Desenvolvimento' as ProjectStatus,
    liveUrl: '',
    githubUrl: ''
  });

  const categories = [
    { id: 'all' as ProjectCategory, label: 'Todos' },
    { id: 'full-stack' as ProjectCategory, label: 'Full-Stack' },
    { id: 'web-apps' as ProjectCategory, label: 'Aplicações Web' },
    { id: 'enterprise' as ProjectCategory, label: 'Software Empresarial' },
    { id: 'digital-products' as ProjectCategory, label: 'Produtos Digitais' },
    { id: 'ai' as ProjectCategory, label: 'Inteligência Artificial' },
  ];

  const allProjects = useMemo(() => {
    return [...PROJECTS, ...customProjects];
  }, [customProjects]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Category filter
      const matchesCategory = 
        selectedCategory === 'all' || 
        project.categorySlug === selectedCategory ||
        (selectedCategory === 'ai' && (project.technologies.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('inteligência')) || project.categorySlug === 'ai'));

      // Search filter
      const matchesSearch = 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [allProjects, selectedCategory, searchQuery]);

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectForm.name.trim() || !newProjectForm.description.trim()) return;

    const newProject: ProjectItem = {
      id: `custom-${Date.now()}`,
      name: newProjectForm.name,
      tagline: newProjectForm.tagline || 'Projecto em Arquitectura e Desenvolvimento',
      category: newProjectForm.category,
      categorySlug: newProjectForm.categorySlug,
      systemType: 'Sistema Registado no Portfólio',
      description: newProjectForm.description,
      architectureDetails: newProjectForm.architectureDetails
        ? newProjectForm.architectureDetails.split('\n').filter(Boolean)
        : ['Modelagem estruturada de dados', 'Desenho de API RESTful'],
      keyFeatures: newProjectForm.keyFeatures
        ? newProjectForm.keyFeatures.split('\n').filter(Boolean)
        : ['Módulo principal de gestão', 'Autenticação e controlo de acessos'],
      technologies: newProjectForm.technologies
        ? newProjectForm.technologies.split(',').map(s => s.trim()).filter(Boolean)
        : ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      status: newProjectForm.status,
      liveUrl: newProjectForm.liveUrl || undefined,
      githubUrl: newProjectForm.githubUrl || undefined,
      themeColor: '#3B82F6',
      badgeAccent: 'text-blue-400 border-blue-500/20 bg-blue-500/10'
    };

    setCustomProjects(prev => [newProject, ...prev]);
    setIsAddModalOpen(false);
    setNewProjectForm({
      name: '',
      tagline: '',
      category: 'Software empresarial',
      categorySlug: 'enterprise',
      description: '',
      architectureDetails: '',
      keyFeatures: '',
      technologies: '',
      status: 'Em Desenvolvimento',
      liveUrl: '',
      githubUrl: ''
    });
  };

  return (
    <section id="projectos" className="relative py-24 sm:py-32 bg-[#080B12] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              02 / Portfólio & Engenharia
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Projectos desenvolvidos e produtos digitais
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl font-normal">
              Aplicações web, sistemas empresariais e soluções digitais estruturadas com foco em utilidade prática, integridade de dados e boas práticas.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono text-cyan-300 bg-[#101621] hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-colors cursor-pointer"
              title="Adicionar novo projecto à estrutura do portfólio"
            >
              <PlusCircle className="w-4 h-4 text-cyan-400" />
              <span>Registar Novo Projecto</span>
            </button>
          </div>
        </div>

        {/* Filter Bar & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
          {/* Functional Category Filters */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#101621] rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar por nome ou tecnologia..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-[#101621] border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onOpenDetails={(p) => setActiveModalProject(p)} 
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-[#101621] border border-slate-800 space-y-3">
            <Layers className="w-8 h-8 text-slate-600 mx-auto" />
            <h3 className="text-base font-display font-semibold text-white">
              Nenhum projecto encontrado nesta categoria
            </h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Tenta ajustar o filtro ou o termo de pesquisa, ou adiciona um novo projecto com o botão acima.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-lg text-xs font-mono text-cyan-400 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors mt-2"
            >
              Limpar Filtros
            </button>
          </div>
        )}

      </div>

      {/* Deep Inspection Modal */}
      <ProjectDetailModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />

      {/* Modal to Register a New Future Project (Extensibility Requirement) */}
      {isAddModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div 
            className="w-full max-w-xl max-h-[90vh] bg-[#0c121e] border border-slate-700 rounded-2xl p-6 overflow-y-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-display font-bold text-white">Registar Novo Projecto</h3>
              </div>
              <button 
                onClick={() => setIsAddModalOpen(false)} 
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Estrutura extensível para novos sistemas empresariais, ferramentas SaaS, APIs ou produtos de IA:
            </p>

            <form onSubmit={handleCreateProject} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 font-mono mb-1">Nome do Projecto *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: OmniData SaaS, AutoAPI, etc."
                  value={newProjectForm.name}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, name: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-[#101621] border border-slate-800 text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-mono mb-1">Subtítulo / Tagline</label>
                <input
                  type="text"
                  placeholder="Ex: Motor de indexação e relatórios inteligentes"
                  value={newProjectForm.tagline}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, tagline: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-[#101621] border border-slate-800 text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-mono mb-1">Categoria *</label>
                  <select
                    value={newProjectForm.categorySlug}
                    onChange={(e) => {
                      const slug = e.target.value as ProjectItem['categorySlug'];
                      const labels: Record<string, string> = {
                        'full-stack': 'Full-Stack',
                        'web-apps': 'Aplicações Web',
                        'enterprise': 'Software Empresarial',
                        'digital-products': 'Produtos Digitais',
                        'ai': 'Inteligência Artificial'
                      };
                      setNewProjectForm({
                        ...newProjectForm,
                        categorySlug: slug,
                        category: labels[slug] || 'Software empresarial'
                      });
                    }}
                    className="w-full p-2.5 rounded-lg bg-[#101621] border border-slate-800 text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="enterprise">Software Empresarial</option>
                    <option value="full-stack">Full-Stack</option>
                    <option value="web-apps">Aplicações Web</option>
                    <option value="digital-products">Produtos Digitais</option>
                    <option value="ai">Inteligência Artificial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-mono mb-1">Estado *</label>
                  <select
                    value={newProjectForm.status}
                    onChange={(e) => setNewProjectForm({ ...newProjectForm, status: e.target.value as ProjectStatus })}
                    className="w-full p-2.5 rounded-lg bg-[#101621] border border-slate-800 text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="Produção">Produção</option>
                    <option value="Em Desenvolvimento">Em Desenvolvimento</option>
                    <option value="Protótipo Funcional">Protótipo Funcional</option>
                    <option value="Conceito Arquitetado">Conceito Arquitetado</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-mono mb-1">Descrição do Projecto *</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Descreva o propósito prático e a utilidade da solução..."
                  value={newProjectForm.description}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, description: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-[#101621] border border-slate-800 text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-mono mb-1">Tecnologias (separadas por vírgula)</label>
                <input
                  type="text"
                  placeholder="Ex: React, Python, Django, PostgreSQL, Docker"
                  value={newProjectForm.technologies}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, technologies: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-[#101621] border border-slate-800 text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-mono mb-1">URL de Demonstração (opcional)</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={newProjectForm.liveUrl}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, liveUrl: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-[#101621] border border-slate-800 text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium"
                >
                  Salvar Projecto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
