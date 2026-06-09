export const NAV_LINKS = [
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projetos" },
  { href: "#experience", label: "experiência" },
  { href: "#pricing", label: "preços" },
  { href: "#contact", label: "contato" },
] as const;

export const STATS = [
  { num: 5, suffix: "+", label: "anos de experiência" },
  { num: 4, suffix: "", label: "projetos publicados" },
  { num: 200, suffix: "+", label: "usuários ativos (prod)" },
  { num: 3, suffix: "", label: "cidades impactadas" },
] as const;

export type SkillItem = { name: string; hot: boolean };
export type SkillCategory = { category: string; items: SkillItem[] };

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", hot: true },
      { name: "TypeScript", hot: true },
      { name: "JavaScript", hot: false },
      { name: "HTML5", hot: false },
      { name: "CSS3", hot: false },
      { name: "Figma", hot: false },
      { name: "Design Systems", hot: false },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", hot: true },
      { name: "REST APIs", hot: true },
      { name: "NestJS", hot: false },
      { name: "SOLID", hot: false },
      { name: "Clean Arch", hot: false },
      { name: "JWT", hot: false },
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      { name: "MongoDB", hot: true },
      { name: "MySQL", hot: false },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", hot: true },
      { name: "GCP", hot: false },
      { name: "Docker", hot: false },
      { name: "CI/CD", hot: false },
      { name: "GitFlow", hot: false },
      { name: "Git", hot: false },
    ],
  },
  {
    category: "Testes",
    items: [
      { name: "Jest", hot: false },
      { name: "React Testing Lib", hot: false },
      { name: "Cypress", hot: false },
    ],
  },
  {
    category: "Outras Linguagens",
    items: [
      { name: "Python", hot: false },
      { name: "PHP", hot: false },
    ],
  },
  {
    category: "Game Development",
    items: [
      { name: "Unity", hot: true },
      { name: "C#", hot: false },
      { name: "Publicação iOS", hot: false },
      { name: "Publicação Android", hot: false },
      { name: "Game Design", hot: false },
      { name: "2D / 3D Gameplay", hot: false },
      { name: "Sound Design", hot: false },
    ],
  },
];

export type ExpItem = {
  period: string;
  title: string;
  company: string;
  bullets: string[];
};

export const EXPERIENCE: ExpItem[] = [
  {
    period: "2026 · atual",
    title: "Desenvolvedor Full Stack",
    company: "Lufe Mídias · Remoto",
    bullets: [
      "Aplicações web modernas com React e Node.js, APIs REST e componentes reutilizáveis.",
      "Atuação ponta a ponta: interface, lógica de negócio e integração com serviços externos.",
    ],
  },
  {
    period: "2025 – 2026",
    title: "Desenvolvedor Full Stack",
    company: "Hive Media (Alias Media) · Canadá · Híbrido",
    bullets: [
      "Plataforma de rede social proprietária ponta a ponta com React + TypeScript e Node.js (~200 usuários ativos).",
      "Dashboards analíticos com métricas de engajamento e filtros dinâmicos integrados via APIs REST com MongoDB na AWS.",
      "Bots de automação de engajamento e navegação via Node.js.",
      "Colaboração diária em inglês com designers (Figma) em squads ágeis internacionais.",
    ],
  },
  {
    period: "2020 – 2022",
    title: "Programador, Game Designer & CEO",
    company: "4 Bit Studios / Incine",
    bullets: [
      "4 projetos publicados com liderança técnica de equipe multidisciplinar.",
      "Jogos educativos entregues a órgãos públicos em 3 cidades brasileiras.",
      "Mentoria de desenvolvedores e estratégia de produto com investidores-anjo.",
    ],
  },
  {
    period: "Freelance / Consultoria",
    title: "Projetos de Impacto",
    company: "ENEM Game · Campus Party 2023 · Sinop/MT · Salvador/BA · Paracatu/MG",
    bullets: [
      "Plataforma gamificada para estudos do ENEM — demanda do Senador Wellington Fagundes.",
      "Jogo de robótica apresentado na Campus Party Brasília 2023.",
      "Simuladores de gestão urbana e jogos de inclusão social implantados em 2 municípios.",
    ],
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  category: "web" | "game";
  tech: string[];
  image: string;
  year: string;
  github?: string;
  demo?: string;
  highlight?: string;
};

export const PROJECTS: ProjectItem[] = [
  {
    title: "Salão Tininha",
    description:
      "Site institucional para salão de beleza com agendamento online, portfólio de serviços e integração com WhatsApp. Design elegante e responsivo, com CMS para gestão de conteúdo.",
    category: "web",
    tech: ["Next.js", "TypeScript", "Tailwind", "Sanity", "Cal.com", "Resend"],
    image: "/projects/salao-tininha.jpg",
    year: "2026",
    demo: "https://salaotininha.com.br/",
  },
  {
    title: "Lufe Mídias",
    description:
      "Plataforma web full stack com aplicações escaláveis, APIs REST e componentes reutilizáveis. Atuação ponta a ponta com React e Node.js integrando serviços externos e focando em performance.",
    category: "web",
    tech: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    image: "/projects/lufe-midias.jpg",
    year: "2026",
  },
  {
    title: "Hive Social Platform",
    description:
      "Rede social proprietária com dashboards analíticos para tomada de decisão estratégica e bots de automação de engajamento. ~200 usuários ativos em produção.",
    category: "web",
    tech: ["React", "TypeScript", "Node.js", "WebSockets", "MongoDB", "AWS"],
    image: "/projects/hive-social.jpg",
    year: "2025–2026",
  },
  {
    title: "Robótica Terrestre",
    description:
      "Jogo educativo 3D para ensinar robótica e programação no ensino fundamental. Apresentado na Campus Party Brasília 2023 e implantado em escolas públicas.",
    category: "game",
    tech: ["Unity", "C#", "JavaScript", "3D", "Game Design"],
    image: "/projects/robotica-terrestre.png",
    year: "2022–2023",
    highlight: "Campus Party Brasília 2023",
  },
  {
    title: "ENEM Game",
    description:
      "App mobile gamificado para preparação ao ENEM, desenvolvido sob demanda do Senador Wellington Fagundes. Foco em engajamento, retenção de conteúdo e acompanhamento de desempenho.",
    category: "game",
    tech: ["Unity", "C#", "Mobile", "Game Design"],
    image: "/projects/enem-game.png",
    year: "2022",
  },
  {
    title: "Projeto Arquimedes",
    description:
      "Simulador de gestão urbana para campanha política em Sinop/MT: o jogador gerencia infraestrutura, educação e lazer, aproximando o público de temas de políticas públicas.",
    category: "game",
    tech: ["Unity", "C#", "2D", "Game Design"],
    image: "/projects/arquimedes.png",
    year: "2022",
  },
  {
    title: "Super Rosana & Bacelar",
    description:
      "Jogos mobile com foco em inclusão social e combate a fake news, usando mecânicas de RPG e quiz para sensibilizar sobre cidadania e pensamento crítico. Implantados em Salvador/BA e Paracatu/MG.",
    category: "game",
    tech: ["Unity", "C#", "Mobile", "Game Design"],
    image: "/projects/bacelar-rosana.png",
    year: "2021–2022",
  },
];

export type PricingPlan = {
  name: string;
  currency: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  ctaStyle: "outline" | "fill";
};

export const PRICING: PricingPlan[] = [
  {
    name: "Freela Pontual",
    currency: "R$",
    price: "150",
    period: "/hora",
    description: "Ideal para tarefas isoladas, correções de bugs ou pequenas features.",
    features: [
      "Mínimo de 2 horas contratadas",
      "Orçamento gratuito antes de começar",
      "Entrega por demanda",
      "Frontend ou Backend",
    ],
    cta: "Solicitar orçamento",
    ctaStyle: "outline",
  },
  {
    name: "Projeto Completo",
    currency: "R$",
    price: "6.500",
    period: "/projeto",
    description: "MVP ou módulo full stack com design, API e deploy incluídos. Prazo médio: 3–6 semanas.",
    features: [
      "Levantamento de requisitos",
      "Design responsivo (React + Figma)",
      "API REST com Node.js + TypeScript",
      "Banco de dados (MongoDB ou MySQL)",
      "Deploy em AWS ou similar",
      "30 dias de suporte pós-entrega",
    ],
    cta: "Quero este plano",
    featured: true,
    ctaStyle: "fill",
  },
  {
    name: "Retainer Mensal",
    currency: "R$",
    price: "5.500",
    period: "/mês",
    description: "Desenvolvedor dedicado part-time à sua empresa. Ideal para startups e times pequenos.",
    features: [
      "Até 80h mensais dedicadas",
      "Daily assíncrono ou síncrono",
      "Liderança técnica inclusa",
      "Code review & mentoria do time",
      "Relatório mensal de progresso",
      "Contrato mínimo de 3 meses",
    ],
    cta: "Falar sobre retainer",
    ctaStyle: "outline",
  },
];
