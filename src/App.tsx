import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { SkillsSection } from './components/SkillsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { TechLabSection } from './components/TechLabSection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F4F7FB] selection:bg-[#3B82F6]/30 selection:text-[#22D3EE] font-sans">
      {/* Fixed Navigation Header */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Layout */}
      <main id="main-content">
        {/* 1. Hero Section with 3D Core */}
        <HeroSection 
          onExploreProjects={() => scrollToSection('projectos')}
          onContact={() => scrollToSection('contacto')}
        />

        {/* 2. Sobre mim */}
        <AboutSection />

        {/* 3. Projectos Desenvolvidos & Produtos Digitais */}
        <ProjectShowcase />

        {/* 4. Tecnologias & Competências Reais */}
        <SkillsSection />

        {/* 5. Processo de Desenvolvimento & Engenharia */}
        <WorkflowSection />

        {/* 6. Iniciativa Tech Lab */}
        <TechLabSection />

        {/* 7. Contacto & Canais Directos */}
        <ContactSection />
      </main>

      {/* Floating Functional WhatsApp Button */}
      <WhatsAppButton />

      {/* Clean Editorial Footer */}
      <Footer />
    </div>
  );
}
