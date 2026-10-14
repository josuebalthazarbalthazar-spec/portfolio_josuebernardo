import React from 'react';
import { ExternalLink, Layers, ArrowRight, ShieldCheck, Database, Calendar } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

// Procedural SVG UI previews for each project to ensure crisp zero-404 rendering
const renderProjectMockup = (projectId: string) => {
  switch (projectId) {
    case 'vitalis':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-[#0d131f] select-none" fill="none">
          {/* Top Window Bar */}
          <rect width="400" height="28" fill="#141c2b" />
          <circle cx="16" cy="14" r="4" fill="#ef4444" opacity="0.8" />
          <circle cx="28" cy="14" r="4" fill="#f59e0b" opacity="0.8" />
          <circle cx="40" cy="14" r="4" fill="#10b981" opacity="0.8" />
          <text x="60" y="17" fill="#64748b" fontSize="10" fontFamily="monospace">vitalis://hospital-management/patients</text>
          
          {/* Sidebar */}
          <rect y="28" width="80" height="192" fill="#0f172a" />
          <rect x="10" y="40" width="60" height="8" rx="2" fill="#3b82f6" opacity="0.4" />
          <rect x="10" y="55" width="50" height="6" rx="2" fill="#334155" />
          <rect x="10" y="68" width="55" height="6" rx="2" fill="#334155" />
          <rect x="10" y="81" width="45" height="6" rx="2" fill="#334155" />
          
          {/* Main Dashboard Panel */}
          <rect x="95" y="40" width="90" height="42" rx="4" fill="#1e293b" />
          <text x="105" y="55" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Pacientes Hoje</text>
          <text x="105" y="73" fill="#38bdf8" fontSize="16" fontWeight="bold" fontFamily="sans-serif">148</text>
          
          <rect x="195" y="40" width="90" height="42" rx="4" fill="#1e293b" />
          <text x="205" y="55" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Consultas Activas</text>
          <text x="205" y="73" fill="#10b981" fontSize="16" fontWeight="bold" fontFamily="sans-serif">24</text>
          
          <rect x="295" y="40" width="95" height="42" rx="4" fill="#1e293b" />
          <text x="305" y="55" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Triagem / Espera</text>
          <text x="305" y="73" fill="#f59e0b" fontSize="16" fontWeight="bold" fontFamily="sans-serif">12</text>
          
          {/* Patient Data Table Mock */}
          <rect x="95" y="92" width="295" height="116" rx="4" fill="#141d2f" stroke="#1e293b" />
          <text x="105" y="108" fill="#cbd5e1" fontSize="10" fontWeight="600" fontFamily="sans-serif">Fila de Atendimento & Especialidades</text>
          
          <line x1="95" y1="116" x2="390" y2="116" stroke="#1e293b" />
          <text x="105" y="132" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">#084 - Maria N. (Clínica Geral)</text>
          <rect x="330" y="123" width="50" height="12" rx="2" fill="#10b981" opacity="0.2" />
          <text x="336" y="132" fill="#34d399" fontSize="8" fontFamily="sans-serif">Chamada</text>

          <line x1="95" y1="142" x2="390" y2="142" stroke="#1e293b" />
          <text x="105" y="158" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">#085 - António M. (Pediatria)</text>
          <rect x="330" y="149" width="50" height="12" rx="2" fill="#3b82f6" opacity="0.2" />
          <text x="339" y="158" fill="#60a5fa" fontSize="8" fontFamily="sans-serif">Em Exame</text>

          <line x1="95" y1="168" x2="390" y2="168" stroke="#1e293b" />
          <text x="105" y="184" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">#086 - João K. (Ortopedia)</text>
          <rect x="330" y="175" width="50" height="12" rx="2" fill="#f59e0b" opacity="0.2" />
          <text x="340" y="184" fill="#fbbf24" fontSize="8" fontFamily="sans-serif">Aguardando</text>
        </svg>
      );

    case 'kandongueiro-plus':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-[#09111e] select-none" fill="none">
          {/* Map Grid Pattern */}
          <path d="M0 30 H400 M0 70 H400 M0 110 H400 M0 150 H400 M0 190 H400" stroke="#1e293b" strokeWidth="0.8" opacity="0.5" />
          <path d="M40 0 V220 M100 0 V220 M160 0 V220 M220 0 V220 M280 0 V220 M340 0 V220" stroke="#1e293b" strokeWidth="0.8" opacity="0.5" />
          
          {/* Luanda Road Network Vectors */}
          <path d="M30 180 Q140 160 210 110 T380 40" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
          <path d="M60 40 Q150 90 260 120 T360 190" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 4" strokeLinecap="round" />
          
          {/* Taxi Stops / Hotspots */}
          <circle cx="90" cy="168" r="8" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="210" cy="110" r="10" fill="#22d3ee" fillOpacity="0.4" stroke="#22d3ee" strokeWidth="2" />
          <circle cx="310" cy="68" r="8" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />

          {/* Floating Mobile Card Overlay */}
          <rect x="25" y="25" width="180" height="75" rx="8" fill="#101827" stroke="#1e293b" />
          <text x="38" y="44" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">ROTA: MUTAMBA → VIANA</text>
          <text x="38" y="60" fill="#cbd5e1" fontSize="12" fontWeight="600" fontFamily="sans-serif">Praça 1º de Maio</text>
          <text x="38" y="78" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Tempo estimado: 35 min · 2 Paragens</text>
          <rect x="38" y="86" width="70" height="6" rx="3" fill="#22d3ee" />
        </svg>
      );

    case 'agriconeta':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-[#0a1515] select-none" fill="none">
          <rect width="400" height="28" fill="#122320" />
          <text x="20" y="18" fill="#34d399" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Agriconeta · Mercado do Produtor</text>
          <text x="300" y="18" fill="#6ee7b7" fontSize="9" fontFamily="monospace">Huíla · Uíge · Benguela</text>

          {/* Commodity Cards */}
          <rect x="20" y="42" width="110" height="80" rx="6" fill="#132a24" stroke="#1a3b33" />
          <text x="30" y="60" fill="#a7f3d0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Milho Branco</text>
          <text x="30" y="76" fill="#6ee7b7" fontSize="9" fontFamily="sans-serif">Produtor: Coop. Huambo</text>
          <text x="30" y="98" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="monospace">KZ 8.500 / Saco</text>
          <rect x="30" y="106" width="60" height="8" rx="2" fill="#10b981" opacity="0.3" />

          <rect x="145" y="42" width="110" height="80" rx="6" fill="#132a24" stroke="#1a3b33" />
          <text x="155" y="60" fill="#a7f3d0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Batata Rena</text>
          <text x="155" y="76" fill="#6ee7b7" fontSize="9" fontFamily="sans-serif">Província da Huíla</text>
          <text x="155" y="98" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="monospace">KZ 12.000 / Saco</text>
          <rect x="155" y="106" width="60" height="8" rx="2" fill="#10b981" opacity="0.3" />

          <rect x="270" y="42" width="110" height="80" rx="6" fill="#132a24" stroke="#1a3b33" />
          <text x="280" y="60" fill="#a7f3d0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Mandioca Doce</text>
          <text x="280" y="76" fill="#6ee7b7" fontSize="9" fontFamily="sans-serif">Região do Uíge</text>
          <text x="280" y="98" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="monospace">KZ 6.200 / Lote</text>
          <rect x="280" y="106" width="60" height="8" rx="2" fill="#10b981" opacity="0.3" />

          {/* Logistics Stream */}
          <rect x="20" y="134" width="360" height="72" rx="6" fill="#0f221d" stroke="#1a3b33" />
          <text x="32" y="152" fill="#6ee7b7" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Canal Directo de Escoamento Agrícola</text>
          <text x="32" y="170" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Contacto sem intermediários especulativos entre agricultores e retalhistas urbanos.</text>
          <line x1="32" y1="185" x2="368" y2="185" stroke="#1a3b33" />
        </svg>
      );

    case 'malanje-tour':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-[#17130c] select-none" fill="none">
          <rect width="400" height="30" fill="#241e15" />
          <text x="20" y="20" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Malanje Tour · Destinos & Património</text>

          {/* Destination Highlights */}
          <g transform="translate(20, 45)">
            <rect width="110" height="155" rx="6" fill="#231b12" stroke="#3d2e1c" />
            <rect x="10" y="12" width="90" height="60" rx="4" fill="#3d2e1c" />
            <text x="18" y="47" fill="#fcd34d" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Kalandula</text>
            <text x="10" y="90" fill="#fef3c7" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Quedas d'Água</text>
            <text x="10" y="105" fill="#a8a29e" fontSize="8" fontFamily="sans-serif">Segunda maior de África</text>
            <rect x="10" y="130" width="70" height="14" rx="3" fill="#d97706" opacity="0.3" />
            <text x="16" y="141" fill="#f59e0b" fontSize="8" fontFamily="sans-serif">Explorar Rota</text>
          </g>

          <g transform="translate(145, 45)">
            <rect width="110" height="155" rx="6" fill="#231b12" stroke="#3d2e1c" />
            <rect x="10" y="12" width="90" height="60" rx="4" fill="#3d2e1c" />
            <text x="14" y="47" fill="#fcd34d" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Pungo Andongo</text>
            <text x="10" y="90" fill="#fef3c7" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Pedras Negras</text>
            <text x="10" y="105" fill="#a8a29e" fontSize="8" fontFamily="sans-serif">Geologia & Tradição</text>
            <rect x="10" y="130" width="70" height="14" rx="3" fill="#d97706" opacity="0.3" />
            <text x="16" y="141" fill="#f59e0b" fontSize="8" fontFamily="sans-serif">Ver Detalhes</text>
          </g>

          <g transform="translate(270, 45)">
            <rect width="110" height="155" rx="6" fill="#231b12" stroke="#3d2e1c" />
            <rect x="10" y="12" width="90" height="60" rx="4" fill="#3d2e1c" />
            <text x="14" y="47" fill="#fcd34d" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Cangandala</text>
            <text x="10" y="90" fill="#fef3c7" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Parque Nacional</text>
            <text x="10" y="105" fill="#a8a29e" fontSize="8" fontFamily="sans-serif">Palanca Negra Gigante</text>
            <rect x="10" y="130" width="70" height="14" rx="3" fill="#d97706" opacity="0.3" />
            <text x="16" y="141" fill="#f59e0b" fontSize="8" fontFamily="sans-serif">Informações</text>
          </g>
        </svg>
      );

    case 'mixeiro':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-[#120f1e] select-none" fill="none">
          <rect width="400" height="30" fill="#1d1633" />
          <text x="20" y="20" fill="#c084fc" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Mixeiro · Marketplace de Artigos Usados</text>
          
          <rect x="20" y="45" width="170" height="75" rx="6" fill="#1b1430" stroke="#2c224d" />
          <rect x="30" y="55" width="45" height="55" rx="4" fill="#2d2252" />
          <text x="85" y="70" fill="#f3e8ff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Smartphone 128GB</text>
          <text x="85" y="85" fill="#a855f7" fontSize="8" fontFamily="sans-serif">Estado: Excelente (9/10)</text>
          <text x="85" y="102" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">KZ 95.000</text>

          <rect x="210" y="45" width="170" height="75" rx="6" fill="#1b1430" stroke="#2c224d" />
          <rect x="220" y="55" width="45" height="55" rx="4" fill="#2d2252" />
          <text x="275" y="70" fill="#f3e8ff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Portátil i5 16GB</text>
          <text x="275" y="85" fill="#a855f7" fontSize="8" fontFamily="sans-serif">Estado: Bom estado</text>
          <text x="275" y="102" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">KZ 180.000</text>

          {/* Local Security & Trust Banner */}
          <rect x="20" y="132" width="360" height="72" rx="6" fill="#171128" stroke="#2c224d" />
          <text x="32" y="152" fill="#c084fc" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Negociação Local com Prevenção de Fraudes</text>
          <text x="32" y="170" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Filtragem de vendedores verificados e recomendações para entrega segura em Luanda.</text>
        </svg>
      );

    case 'bilhete-ja':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-[#180d19] select-none" fill="none">
          <rect width="400" height="30" fill="#281329" />
          <text x="20" y="20" fill="#f472b6" fontSize="11" fontWeight="bold" fontFamily="sans-serif">BilheteJá · Emissão & Validação QR</text>

          {/* Ticket Pass Simulation */}
          <rect x="30" y="48" width="220" height="150" rx="8" fill="#240f26" stroke="#48184d" />
          <text x="45" y="72" fill="#fdf2f8" fontSize="12" fontWeight="bold" fontFamily="sans-serif">CONFERÊNCIA TECH ANGOLA</text>
          <text x="45" y="88" fill="#f472b6" fontSize="9" fontFamily="monospace">BILHETE #BJ-2026-9041</text>
          <text x="45" y="112" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Titular: Josué K. Bernardo</text>
          <text x="45" y="128" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Local: Centro de Convenções, Luanda</text>
          <rect x="45" y="145" width="80" height="18" rx="4" fill="#ec4899" opacity="0.2" />
          <text x="53" y="157" fill="#f472b6" fontSize="8" fontWeight="bold" fontFamily="sans-serif">ACESSO VIP VALIDO</text>

          {/* Simulated QR Code Box */}
          <rect x="270" y="48" width="100" height="150" rx="8" fill="#240f26" stroke="#48184d" />
          <rect x="282" y="65" width="76" height="76" rx="4" fill="#ffffff" />
          {/* QR visual markers */}
          <rect x="290" y="73" width="20" height="20" fill="#000000" />
          <rect x="294" y="77" width="12" height="12" fill="#ffffff" />
          <rect x="297" y="80" width="6" height="6" fill="#000000" />

          <rect x="328" y="73" width="20" height="20" fill="#000000" />
          <rect x="332" y="77" width="12" height="12" fill="#ffffff" />
          <rect x="335" y="80" width="6" height="6" fill="#000000" />

          <rect x="290" y="111" width="20" height="20" fill="#000000" />
          <rect x="294" y="115" width="12" height="12" fill="#ffffff" />
          <rect x="297" y="118" width="6" height="6" fill="#000000" />

          <text x="285" y="162" fill="#f472b6" fontSize="8" fontFamily="monospace">QR Criptografado</text>
        </svg>
      );

    case 'kweza-edu':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-[#0a171a] select-none" fill="none">
          <rect width="400" height="30" fill="#0f2429" />
          <text x="20" y="20" fill="#22d3ee" fontSize="11" fontWeight="bold" fontFamily="sans-serif">KwezaEdu / Educonnect · Painel Escolar</text>

          {/* Gradebook and attendance */}
          <rect x="20" y="45" width="170" height="75" rx="6" fill="#112930" stroke="#1d424d" />
          <text x="30" y="65" fill="#e0f2fe" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Turma 11ª B · Informática</text>
          <text x="30" y="80" fill="#38bdf8" fontSize="8" fontFamily="sans-serif">Disciplina: Algoritmos e Programação</text>
          <text x="30" y="100" fill="#34d399" fontSize="9" fontFamily="monospace">Média Geral: 15.8 / 20</text>

          <rect x="210" y="45" width="170" height="75" rx="6" fill="#112930" stroke="#1d424d" />
          <text x="220" y="65" fill="#e0f2fe" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Comunicação Encarregados</text>
          <text x="220" y="80" fill="#38bdf8" fontSize="8" fontFamily="sans-serif">Avisos Lectivos & Provas</text>
          <text x="220" y="100" fill="#fbbf24" fontSize="9" fontFamily="monospace">Assiduidade: 94.2%</text>

          <rect x="20" y="132" width="360" height="72" rx="6" fill="#0d2127" stroke="#1d424d" />
          <text x="32" y="152" fill="#22d3ee" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Organização Pedagógica e Redução de Burocracia</text>
          <text x="32" y="170" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Pautas digitais, faltas em tempo real e ligação entre a escola e a família.</text>
        </svg>
      );

    case 'kiesa-angola':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-[#0b1323] select-none" fill="none">
          <rect width="400" height="30" fill="#14213d" />
          <text x="20" y="20" fill="#60a5fa" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Kiesa Angola Technology · Website Corporativo</text>

          <rect x="20" y="45" width="360" height="155" rx="8" fill="#101d36" stroke="#1e345f" />
          <text x="40" y="75" fill="#93c5fd" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Soluções Tecnológicas para Empresas</text>
          <text x="40" y="95" fill="#cbd5e1" fontSize="10" fontFamily="sans-serif">Modernização de infraestruturas, desenvolvimento web e suporte técnico em Angola.</text>

          <rect x="40" y="115" width="100" height="40" rx="4" fill="#1e345f" />
          <text x="48" y="132" fill="#60a5fa" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Serviços Web</text>
          <text x="48" y="145" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Desenvolvimento ágil</text>

          <rect x="150" y="115" width="100" height="40" rx="4" fill="#1e345f" />
          <text x="158" y="132" fill="#60a5fa" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Consultoria</text>
          <text x="158" y="145" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Estratégia digital</text>

          <rect x="260" y="115" width="100" height="40" rx="4" fill="#1e345f" />
          <text x="268" y="132" fill="#60a5fa" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Suporte</text>
          <text x="268" y="145" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Assistência contínua</text>
          
          <rect x="40" y="168" width="130" height="18" rx="4" fill="#3b82f6" />
          <text x="48" y="180" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">kiesaangolatechnology</text>
        </svg>
      );

    case 'tech-lab':
    default:
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-[#0a1220] select-none" fill="none">
          <rect width="400" height="30" fill="#131e33" />
          <text x="20" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Tech Lab · Software House & Hub Digital</text>
          
          <rect x="20" y="45" width="360" height="155" rx="8" fill="#0f1b2e" stroke="#1d2f4d" />
          <text x="40" y="75" fill="#38bdf8" fontSize="15" fontWeight="bold" fontFamily="sans-serif">TECH LAB — INOVAÇÃO & SOFTWARE</text>
          <text x="40" y="96" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Construção de produtos digitais, software empresarial e formação de programadores.</text>
          
          <g transform="translate(40, 115)">
            <rect width="95" height="42" rx="4" fill="#17263e" />
            <text x="10" y="20" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Software</text>
            <text x="10" y="32" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Sistemas sob medida</text>
          </g>

          <g transform="translate(145, 115)">
            <rect width="95" height="42" rx="4" fill="#17263e" />
            <text x="10" y="20" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Formação</text>
            <text x="10" y="32" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Capacitação técnica</text>
          </g>

          <g transform="translate(250, 115)">
            <rect width="95" height="42" rx="4" fill="#17263e" />
            <text x="10" y="20" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Produtos</text>
            <text x="10" y="32" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Iniciativas digitais</text>
          </g>

          <text x="40" y="180" fill="#38bdf8" fontSize="9" fontFamily="monospace">techlabsa.vercel.app</text>
        </svg>
      );
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <article className="group flex flex-col h-full rounded-2xl bg-[#101621] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-950/20">
      
      {/* Visual Header / Mockup Preview */}
      <div 
        onClick={() => onOpenDetails(project)}
        className="relative w-full aspect-[16/9] border-b border-slate-800 bg-[#080B12] overflow-hidden cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={`Ver detalhes do projecto ${project.name}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenDetails(project);
          }
        }}
      >
        {renderProjectMockup(project.id)}
        
        {/* Subtle Hover Overlay */}
        <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-lg bg-[#080B12]/90 border border-cyan-500/50 text-cyan-300 text-xs font-mono backdrop-blur-sm">
            Ver arquitectura & detalhes
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        
        <div className="space-y-3">
          {/* Metadata Header: Unboxed, Clean Typography */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">{project.category}</span>
            <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${project.badgeAccent}`}>
              {project.status}
            </span>
          </div>

          {/* Project Title & Tagline */}
          <div>
            <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack List */}
        <div className="pt-3 border-t border-slate-800/80 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions & Links */}
          <div className="flex items-center justify-between pt-1 text-xs">
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer"
            >
              <span>Detalhes de engenharia</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 hover:underline"
                title={project.externalNotice || 'Abrir website original numa nova aba'}
              >
                <span>Visitar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </article>
  );
};
