export type ProjectCategory = 
  | 'all'
  | 'full-stack' 
  | 'web-apps' 
  | 'enterprise' 
  | 'digital-products' 
  | 'ai';

export type ProjectStatus = 
  | 'Produção' 
  | 'Em Desenvolvimento' 
  | 'Protótipo Funcional' 
  | 'Conceito Arquitetado';

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  categorySlug: 'full-stack' | 'web-apps' | 'enterprise' | 'digital-products' | 'ai';
  description: string;
  architectureDetails: string[];
  keyFeatures: string[];
  technologies: string[];
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  externalNotice?: string;
  themeColor: string;
  badgeAccent: string;
  systemType: string;
}

export type SkillMaturity = 
  | 'Experiência prática'
  | 'Conhecimentos técnicos'
  | 'Aprendizagem em curso';

export interface SkillItem {
  name: string;
  maturity: SkillMaturity;
  context: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  items: SkillItem[];
}

export interface WorkflowStage {
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  deliverables: string[];
  technicalFocus: string;
}
