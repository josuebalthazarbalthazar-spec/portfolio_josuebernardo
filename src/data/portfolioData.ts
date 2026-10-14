import { ProjectItem, SkillCategory, WorkflowStage } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Josué Kalunga Bernardo',
  title: 'Full-Stack Developer | Software Engineer | Digital Product Builder',
  location: 'Luanda, Angola',
  email: 'josuebalthazarbalthazar@gmail.com',
  phone: '+244 937 656 106',
  whatsappUrl: 'https://wa.me/244937656106?text=Ol%C3%A1%2C%20Josu%C3%A9!%20Visitei%20o%20teu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projecto%20ou%20oportunidade%20de%20colabora%C3%A7%C3%A3o.',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  education: 'Estudante de Engenharia Informática',
  summary: 'Desenvolvo aplicações web, APIs e soluções digitais orientadas para resolver problemas reais. Trabalho com tecnologias modernas para transformar ideias em produtos funcionais, combinando desenvolvimento front-end, back-end, bases de dados e boas práticas de segurança.',
  aboutParagraphs: [
    'Sou Josué Kalunga Bernardo, programador interessado em desenvolver produtos digitais úteis, sistemas robustos e experiências web modernas. Gosto de compreender os problemas, desenhar soluções bem estruturadas e transformar ideias em aplicações funcionais.',
    'Tenho interesse em desenvolvimento Full-Stack, arquitectura de software, APIs, bases de dados, cibersegurança e novas tecnologias que permitam criar produtos escaláveis.'
  ]
};

export const CORE_AREAS = [
  'Desenvolvimento Full-Stack',
  'Desenvolvimento de aplicações web',
  'Desenvolvimento de APIs REST',
  'Arquitectura de software',
  'Bases de dados e modelação de dados',
  'Desenvolvimento de sistemas empresariais',
  'Cibersegurança e testes autorizados',
  'Docker e ambientes de desenvolvimento',
  'Inteligência Artificial aplicada a produtos',
  'UX/UI e interfaces responsivas'
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'vitalis',
    name: 'Vitalis',
    tagline: 'Sistema de Gestão Hospitalar & Fluxos Clínicos',
    category: 'Software empresarial',
    categorySlug: 'enterprise',
    systemType: 'Sistema Empresarial & Gestão de Dados',
    description: 'Projecto orientado para a gestão hospitalar e centralização de fluxos de saúde, com módulos dedicados a pacientes, agendamento de consultas, registos médicos e apoio às operações administrativas.',
    architectureDetails: [
      'Modelagem relacional de entidades médicas: pacientes, médicos, especialidades e prontuários',
      'Camada de autenticação com separação de perfis (médico, recepcionista, administrador)',
      'API RESTful para agendamento concorrente e consulta de histórico clínico'
    ],
    keyFeatures: [
      'Triagem e cadastro centralizado de pacientes',
      'Gestão de consultas e horários de especialistas',
      'Emissão de fichas clínicas e relatórios diários de atendimento',
      'Painel administrativo com métricas operacionais'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Docker'],
    status: 'Protótipo Funcional',
    themeColor: '#3B82F6',
    badgeAccent: 'text-blue-400 border-blue-500/20 bg-blue-500/10'
  },
  {
    id: 'kandongueiro-plus',
    name: 'Kandongueiro+',
    tagline: 'Mobilidade Urbana & Apoio aos Transportes em Luanda',
    category: 'Aplicação digital',
    categorySlug: 'digital-products',
    systemType: 'Aplicação de Mobilidade Urbana',
    description: 'Solução digital voltada à realidade da mobilidade e dos transportes colectivos em Luanda, permitindo a consulta de rotas frequentes, paragens estratégicas e estimativa de percursos.',
    architectureDetails: [
      'Estrutura de dados geoespaciais leves para optimização em ligações móveis com largura de banda reduzida',
      'Design mobile-first focado no acesso rápido no terminal móvel do utilizador',
      'Caching offline de trajectos frequentes para redução de consumo de dados'
    ],
    keyFeatures: [
      'Mapeamento de eixos viários e principais praças de táxi de Luanda',
      'Cálculo visual de trajectos e estimativas de pontos de transbordo',
      'Interface de consulta simples concebida para uso dinâmico na rua'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GeoJSON', 'PWA Principles'],
    status: 'Em Desenvolvimento',
    themeColor: '#22D3EE',
    badgeAccent: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10'
  },
  {
    id: 'agriconeta',
    name: 'Agriconeta',
    tagline: 'Agrotecnologia & Canal Directo de Comercialização Agrícola',
    category: 'Agrotecnologia e comércio digital',
    categorySlug: 'digital-products',
    systemType: 'Plataforma B2B & B2C Agrícola',
    description: 'Plataforma para aproximar produtores agrícolas locais, grossistas, comerciantes e consumidores finais, facilitando a divulgação de colheitas, transparência de preços e negociação sem intermediários excessivos.',
    architectureDetails: [
      'Catálogo categorizado por província produtora e sazonalidade de colheitas',
      'Mecanismos de cotação e propostas de fornecimento a granel',
      'Arquitectura modular expansível para logística de distribuição regional'
    ],
    keyFeatures: [
      'Vitrine digital de produtos agrícolas frescos e sazonais',
      'Contacto directo entre camponeses, cooperativas e revendedores urbanos',
      'Painel de preços médios de referência para equilíbrio de mercado'
    ],
    technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'REST API'],
    status: 'Conceito Arquitetado',
    themeColor: '#10B981',
    badgeAccent: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10'
  },
  {
    id: 'malanje-tour',
    name: 'Malanje Tour',
    tagline: 'Guia Digital & Valorização do Turismo Provincial',
    category: 'Turismo digital',
    categorySlug: 'web-apps',
    systemType: 'Plataforma Turística e Cultural',
    description: 'Aplicação web orientada para a descoberta e promoção das maravilhas turísticas da província de Malanje, reunindo informações essenciais sobre as Quedas de Kalandula, Pedras Negras de Pungo Andongo e o Parque Nacional da Cangandala.',
    architectureDetails: [
      'Interface com suporte a visualização rica de itinerários e património cultural',
      'Optimização de carregamento de conteúdos multimédia e mapas estáticos',
      'Estrutura modular para integração com operadoras turísticas e alojamentos locais'
    ],
    keyFeatures: [
      'Guias interactivos dos pontos turísticos icónicos de Malanje',
      'Dicas práticas de deslocação, hospedagem e guias autorizados',
      'Roteiros sugeridos por dias de visitação e perfil de viajante'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'Protótipo Funcional',
    themeColor: '#F59E0B',
    badgeAccent: 'text-amber-400 border-amber-500/20 bg-amber-500/10'
  },
  {
    id: 'mixeiro',
    name: 'Mixeiro',
    tagline: 'Marketplace Local de Artigos em Segunda Mão',
    category: 'Marketplace',
    categorySlug: 'digital-products',
    systemType: 'Plataforma de Compra & Venda C2C',
    description: 'Plataforma conceptual de marketplace para compra e venda segura de artigos usados em Angola, incluindo telemóveis, computadores, peças de vestuário, electrodomésticos e mobiliário.',
    architectureDetails: [
      'Filtros contextuais por categoria de produto, estado de conservação e localização',
      'Fluxo de contacto orientado à segurança para validação antes da transacção física',
      'Modelagem relacional pensada para publicação rápida de anúncios com fotos'
    ],
    keyFeatures: [
      'Publicação simplificada de produtos com classificação de estado físico',
      'Mecanismos de busca por bairro e província para entrega em mão',
      'Dicas de segurança incorporadas para prevenção de fraudes comerciais'
    ],
    technologies: ['React', 'Node.js', 'Express', 'SQL', 'REST API'],
    status: 'Conceito Arquitetado',
    themeColor: '#8B5CF6',
    badgeAccent: 'text-purple-400 border-purple-500/20 bg-purple-500/10'
  },
  {
    id: 'bilhete-ja',
    name: 'BilheteJá',
    tagline: 'Bilhética Digital & Validação Segura com QR Code',
    category: 'Bilhética digital e pagamentos',
    categorySlug: 'full-stack',
    systemType: 'Sistema de Emissão & Validação de Bilhetes',
    description: 'Conceito de sistema para emissão, controlo de acessos e bilhética digital para espectáculos, conferências e transportes, explorando códigos QR assinados digitalmente para validação à entrada.',
    architectureDetails: [
      'Geração de tokens criptográficos temporizados em formato QR Code',
      'Módulo de verificação em tempo real para prevenção de duplicação de ingressos',
      'Estrutura preparada para encaixe de gateways de pagamento locais autorizados'
    ],
    keyFeatures: [
      'Emissão instantânea do bilhete com dados do titular e código verificador',
      'Painel de controlo de portaria com leitor de validação rápida',
      'Gestão de lotação máxima e categorias de acesso'
    ],
    technologies: ['React', 'Node.js', 'Crypto', 'PostgreSQL', 'Docker'],
    status: 'Conceito Arquitetado',
    themeColor: '#EC4899',
    badgeAccent: 'text-pink-400 border-pink-500/20 bg-pink-500/10'
  },
  {
    id: 'kweza-edu',
    name: 'KwezaEdu / Educonnect',
    tagline: 'Edtech & Apoio à Gestão e Comunicação Escolar',
    category: 'Edtech',
    categorySlug: 'enterprise',
    systemType: 'Ambiente de Apoio Educativo',
    description: 'Solução digital voltada para instituições de ensino e comunidade escolar, promovendo a organização pedagógica, registo de faltas, notas e canal directo de acompanhamento entre pais e corpo docente.',
    architectureDetails: [
      'Separação rigorosa de domínios: secretaria, directoria pedagógica, professores e encarregados',
      'Exportação estruturada de pautas avaliativas em formato normalizado',
      'Mecanismo de notificações para ocorrências e avisos lectivos'
    ],
    keyFeatures: [
      'Lançamento e consolidação de notas por trimestre e disciplina',
      'Registo de assiduidade e acompanhamento disciplinar',
      'Avisos e comunicados institucionais com confirmação de leitura'
    ],
    technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'REST API'],
    status: 'Em Desenvolvimento',
    themeColor: '#06B6D4',
    badgeAccent: 'text-cyan-300 border-cyan-400/20 bg-cyan-400/10'
  },
  {
    id: 'kiesa-angola',
    name: 'Kiesa Angola Technology',
    tagline: 'Desenvolvimento Web & Soluções Tecnológicas',
    category: 'Desenvolvimento web',
    categorySlug: 'web-apps',
    systemType: 'Presença Digital & Serviços Web',
    description: 'Website desenvolvido para a Kiesa Angola Technology, com apresentação estruturada de serviços de tecnologia, layout moderno e navegação orientada a clientes corporativos.',
    architectureDetails: [
      'Construção de interface visual com atenção aos padrões de responsividade',
      'Organização de secções para apresentação clara da proposta de valor empresarial',
      'Implementação com foco em desempenho e carregamento rápido'
    ],
    keyFeatures: [
      'Página institucional moderna com comunicação técnica de serviços',
      'Secção de catálogo de soluções e canais de contacto comercial',
      'Optimização para visualização em todos os tipos de ecrã'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'Produção',
    liveUrl: 'https://kiesaangolatechnology.lovable.app/',
    externalNotice: 'Abre o website original numa nova aba.',
    themeColor: '#3B82F6',
    badgeAccent: 'text-blue-300 border-blue-400/20 bg-blue-400/10'
  },
  {
    id: 'tech-lab',
    name: 'Tech Lab',
    tagline: 'Marca Tecnológica, Desenvolvimento de Software & Formação',
    category: 'Marca tecnológica e desenvolvimento de software',
    categorySlug: 'full-stack',
    systemType: 'Ecossistema Tecnológico & Engenharia',
    description: 'Iniciativa tecnológica associada ao desenvolvimento de software, concepção de produtos digitais, consultoria de serviços tecnológicos e capacitação técnica especializada.',
    architectureDetails: [
      'Ambiente concebido para desenvolvimento contínuo de projectos digitais sob medida',
      'Metodologia centrada em código limpo, arquitectura sustentável e segurança desde a concepção',
      'Espaço de formação e fomento de novas competências para o ecossistema tecnológico angolano'
    ],
    keyFeatures: [
      'Desenvolvimento de software personalizado para empresas e startups',
      'Incubação e testes de produtos digitais experimentais',
      'Formação prática e mentoria técnica em engenharia de software',
      'Consultoria em modernização de processos e sistemas'
    ],
    technologies: ['React', 'Node.js', 'Python', 'Docker', 'Cloud Infrastructure'],
    status: 'Produção',
    liveUrl: 'https://techlabsa.vercel.app/',
    externalNotice: 'Website oficial da iniciativa Tech Lab. Abre numa nova aba.',
    themeColor: '#22D3EE',
    badgeAccent: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Linguagens de Programação',
    description: 'Linguagens utilizadas na criação de lógicas de negócio, servidores e manipulação de dados.',
    items: [
      { name: 'JavaScript', maturity: 'Experiência prática', context: 'ES6+, DOM, ecossistema Node.js e React no dia a dia', highlight: true },
      { name: 'Python', maturity: 'Experiência prática', context: 'Scripts de automação, APIs com Django e processamento de dados', highlight: true },
      { name: 'Java', maturity: 'Conhecimentos técnicos', context: 'Conceitos de POO, estruturas de dados e desenvolvimento de aplicações' },
      { name: 'PHP', maturity: 'Conhecimentos técnicos', context: 'Desenvolvimento web, integração com bases relacionais e back-end clássico' },
      { name: 'Ruby', maturity: 'Aprendizagem em curso', context: 'Estudo de convenções de código limpo e padrões de desenvolvimento rápido' }
    ]
  },
  {
    id: 'frontend',
    title: 'Front-end & Interfaces',
    description: 'Construção de interfaces modernas, reactivas, acessíveis e optimizadas para todos os dispositivos.',
    items: [
      { name: 'HTML5', maturity: 'Experiência prática', context: 'Semântica estrita, acessibilidade (a11y) e boas práticas de SEO', highlight: true },
      { name: 'CSS3', maturity: 'Experiência prática', context: 'Flexbox, Grid, animações fluidas e design responsivo avançado', highlight: true },
      { name: 'React', maturity: 'Experiência prática', context: 'Hooks, gestão de estado, componentização modular e ciclo de vida', highlight: true },
      { name: 'Interfaces Responsivas', maturity: 'Experiência prática', context: 'Adaptação total para smartphones, tablets e ecrãs widescreen', highlight: true }
    ]
  },
  {
    id: 'backend',
    title: 'Back-end & Arquitectura de APIs',
    description: 'Construção de serviços seguros, eficientes e escaláveis para suportar produtos digitais.',
    items: [
      { name: 'Python', maturity: 'Experiência prática', context: 'Lógica servidora, validações e tratamento de excepções', highlight: true },
      { name: 'Django', maturity: 'Experiência prática', context: 'ORM, Django REST framework, autenticação e painéis administrativos', highlight: true },
      { name: 'Node.js', maturity: 'Experiência prática', context: 'Servidores assíncronos, Express.js e middlewares estruturados', highlight: true },
      { name: 'Desenvolvimento de APIs REST', maturity: 'Experiência prática', context: 'Padrões RESTful, paginação, códigos HTTP correctos e documentação', highlight: true }
    ]
  },
  {
    id: 'databases',
    title: 'Bases de Dados & Modelação',
    description: 'Estruturação de dados relacionais com integridade referencial e eficiência em consultas.',
    items: [
      { name: 'SQL', maturity: 'Experiência prática', context: 'Consultas complexas, JOINs, transacções ACID e índices', highlight: true },
      { name: 'Modelação de Dados', maturity: 'Experiência prática', context: 'Diagramas de entidade-relacionamento (DER) e normalização', highlight: true },
      { name: 'PostgreSQL / MySQL', maturity: 'Experiência prática', context: 'Bases relacionais para sistemas empresariais e persistência robusta' }
    ]
  },
  {
    id: 'tools',
    title: 'Ferramentas & Ambientes',
    description: 'Ferramentas que garantem controle de versões, consistência de execução e produtividade técnica.',
    items: [
      { name: 'Git', maturity: 'Experiência prática', context: 'Versionamento com commits semânticos, branches e resolução de conflitos', highlight: true },
      { name: 'GitHub', maturity: 'Experiência prática', context: 'Gestão de repositórios, code reviews e partilha de código', highlight: true },
      { name: 'VS Code', maturity: 'Experiência prática', context: 'Ambiente de desenvolvimento principal configurado com linters e depuração', highlight: true },
      { name: 'Docker', maturity: 'Conhecimentos técnicos', context: 'Criação de Dockerfiles, containers e orquestração básica com docker-compose' }
    ]
  },
  {
    id: 'security',
    title: 'Cibersegurança & Desenvolvimento Seguro',
    description: 'Práticas preventivas e de segurança aplicadas ao desenvolvimento de software.',
    items: [
      { name: 'Fundamentos de Cibersegurança', maturity: 'Conhecimentos técnicos', context: 'Princípios de confidencialidade, integridade e disponibilidade (CIA)', highlight: true },
      { name: 'Testes de Segurança Autorizados', maturity: 'Conhecimentos técnicos', context: 'Identificação metódica de vulnerabilidades em ambientes de teste controlados', highlight: true },
      { name: 'Desenvolvimento Seguro', maturity: 'Conhecimentos técnicos', context: 'Prevenção de OWASP Top 10: sanitização de inputs, proteção contra SQLi e XSS' }
    ]
  }
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    number: '01',
    title: 'Análise',
    subtitle: 'Compreender o problema e os requisitos',
    summary: 'Antes de escrever qualquer linha de código, o foco está em compreender a fundo a necessidade do utilizador ou negócio, mapear casos de uso reais e estabelecer o escopo técnico exacto.',
    deliverables: [
      'Levantamento detalhado de requisitos funcionais e não-funcionais',
      'Mapeamento dos fluxos do utilizador e personas',
      'Definição de restrições de infraestrutura e viabilidade técnica'
    ],
    technicalFocus: 'Clareza de objectivos, especificação de dados de entrada e alinhamento do valor do produto.'
  },
  {
    number: '02',
    title: 'Arquitectura',
    subtitle: 'Definir a estrutura técnica e os dados',
    summary: 'Concepção do desenho de engenharia: modelagem da base de dados, contratos de endpoints de APIs, escolha criteriosa de tecnologias e decisões de segurança antecipadas.',
    deliverables: [
      'Modelação de entidades e diagramas relacionais (DER)',
      'Especificação da camada de API REST e segurança de acessos',
      'Planeamento de escalabilidade e conteinerização com Docker'
    ],
    technicalFocus: 'Padrões de software sustentáveis, integridade referencial e separação limpa de responsabilidades.'
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    subtitle: 'Implementar, testar e corrigir',
    summary: 'Execução do código com rigor e disciplina: front-end reactivo e acessível integrado a back-ends seguros. Testes e correcções contínuas durante o ciclo de desenvolvimento.',
    deliverables: [
      'Código limpo em TypeScript, React, Python/Django ou Node.js',
      'Testes de integração de endpoints e validações de input',
      'Refinamento da experiência do utilizador e performance em dispositivos móveis'
    ],
    technicalFocus: 'Código legível, tratamento de erros resiliente e prevenção de falhas de segurança conhecidas.'
  },
  {
    number: '04',
    title: 'Evolução',
    subtitle: 'Publicar, recolher feedback e melhorar',
    summary: 'Colocação do sistema em funcionamento, monitorização de comportamento no ambiente real e análise de feedback para iterar em melhorias contínuas.',
    deliverables: [
      'Publicação e configuração de variáveis de ambiente seguras',
      'Recolha de métricas de utilização e feedback de utilizadores reais',
      'Planeamento e implementação de ciclos de actualização progressiva'
    ],
    technicalFocus: 'Estabilidade operacional, optimização contínua de tempos de resposta e adaptação a novas necessidades.'
  }
];
