import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['inicio', 'sobre', 'projectos', 'tecnologias', 'tech-lab', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre mim' },
    { id: 'projectos', label: 'Projectos' },
    { id: 'tecnologias', label: 'Tecnologias' },
    { id: 'tech-lab', label: 'Tech Lab' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080B12]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Name */}
          <button 
            onClick={() => handleLinkClick('inicio')}
            className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-[#101621] border border-slate-800 flex items-center justify-center font-mono font-bold text-sm text-cyan-400 group-hover:border-cyan-400/50 transition-colors">
              <span className="text-blue-500">J</span>
              <span className="text-cyan-400">B</span>
            </div>
            <div>
              <div className="font-display font-semibold text-sm tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                Josué Bernardo
              </div>
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Luanda, Angola</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#101621]/60 border border-slate-800/60 rounded-full px-4 py-1.5 backdrop-blur-sm" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-1 text-xs font-medium transition-colors rounded-full ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-slate-800/80'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium text-cyan-400 bg-cyan-950/30 hover:bg-cyan-950/60 border border-cyan-800/50 rounded-lg transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => handleLinkClick('contacto')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/20 transition-all hover:translate-y-[-1px]"
            >
              <span>Falar comigo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 rounded-lg"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#101621] border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 border-b border-slate-800 bg-[#080B12]/98 backdrop-blur-xl px-4 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#101621] text-cyan-400 border border-slate-800'
                    : 'text-slate-300 hover:bg-slate-900/60'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
              <button
                onClick={() => handleLinkClick('contacto')}
                className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-medium text-white bg-blue-600 rounded-lg"
              >
                <span>Falar comigo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
