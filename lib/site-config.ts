export type Project = {
  id: string;
  name: string;
  repo: string;
  demo: string | null;
  accent: string;
  monogram: string;
  stack: string[];
  fact: string;
  img: string;
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  featured?: boolean;
};

export const siteConfig = {
  name: "Leiver",
  handle: "Leiverl",
  github: "https://github.com/Leiverl",
  linkedin: "https://www.linkedin.com/in/leiver-lazo-989493412",
  email: "hola@leiver.dev",
  location: "El Oro · Ecuador",
  timezone: "UTC-5",
  publicRepos: 10,
};

export const projects: Project[] = [
  {
    id: "pristino",
    name: "Pristino",
    repo: "https://github.com/Leiverl/pristino",
    demo: null,
    accent: "#34d399",
    monogram: "P",
    stack: ["NestJS 11", "Next.js 16", "Prisma", "PostgreSQL", "Expo", "TFLite", "Turborepo"],
    fact: "Monorepo Turborepo · 10 migraciones",
    img: "https://picsum.photos/seed/pristino-farm/1200/800",
    featured: true,
    tagline: {
      es: "Trazabilidad sanitaria del camarón",
      en: "Shrimp traceability reimagined",
    },
    description: {
      es: "Plataforma de trazabilidad para exportación de camarón con cumplimiento EUDR: ML on-device, reportes inmutables y visor público multiidioma.",
      en: "Traceability platform for shrimp exports with EUDR compliance: on-device ML, immutable reports and a multilingual public viewer.",
    },
  },
  {
    id: "unifix",
    name: "UniFix TI",
    repo: "https://github.com/Leiverl/unifix",
    demo: "https://unifix.vercel.app",
    accent: "#fbbf24",
    monogram: "U",
    stack: ["NestJS", "Prisma", "Next.js 14", "Expo", "PostgreSQL"],
    fact: "26 tests E2E (Playwright)",
    img: "https://picsum.photos/seed/unifix-campus/1200/800",
    tagline: {
      es: "Gestión de incidentes universitarios",
      en: "University IT incident management",
    },
    description: {
      es: "Sistema de tickets tecnológicos con roles admin, técnico y estudiante, QR, gamificación y analítica para una universidad ecuatoriana.",
      en: "Tech ticket system with admin, technician and student roles, QR, gamification and analytics for an Ecuadorian university.",
    },
  },
  {
    id: "gourmetsync",
    name: "GourmetSync",
    repo: "https://github.com/Leiverl/restaurante",
    demo: null,
    accent: "#fb7185",
    monogram: "G",
    stack: ["Next.js 14", "NestJS 10", "TypeORM", "PostgreSQL"],
    fact: "Menú, reservas y pedidos en tiempo real",
    img: "https://picsum.photos/seed/gourmetsync-table/1200/800",
    tagline: {
      es: "Plataforma integral de restaurantes",
      en: "All-in-one restaurant platform",
    },
    description: {
      es: "Menú digital con carrito, reservas, pedidos en tiempo real y panel de administración para el frente y la cocina.",
      en: "Digital menu with cart, reservations, real-time orders and an admin dashboard for front-of-house and kitchen.",
    },
  },
  {
    id: "petcare",
    name: "PetCare",
    repo: "https://github.com/Leiverl/adopcion_mascotas",
    demo: null,
    accent: "#38bdf8",
    monogram: "P",
    stack: ["NestJS 11", "Angular 20", "Flutter", "MongoDB", "Socket.IO"],
    fact: "3 clientes: API, panel y app",
    img: "https://picsum.photos/seed/petcare-home/1200/800",
    tagline: {
      es: "Adopción de mascotas, 3 clientes",
      en: "Pet adoption, 3 clients",
    },
    description: {
      es: "Ecosistema de adopción con API, panel de administración en Angular y app móvil en Flutter, con chat en tiempo real entre adoptante y refugio.",
      en: "Adoption ecosystem with API, Angular admin panel and Flutter mobile app, with real-time chat between adopter and shelter.",
    },
  },
];

export const extraProjects = [
  { name: "Facturación & Co.", repo: "https://github.com/Leiverl/facturacion-", note: { es: "SRI + punto de venta web", en: "SRI + web POS" } },
  { name: "Clínica Dental", repo: "https://github.com/Leiverl/clinica_dental", note: { es: "Multi-tenant con NestJS", en: "Multi-tenant with NestJS" } },
  { name: "VelmacSafe", repo: "https://github.com/Leiverl/aseguropro", note: { es: "Seguros: web + móvil", en: "Insurance: web + mobile" } },
];

export const skillGroups = [
  {
    id: "frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Angular", "Vite", "React Native / Expo"],
  },
  {
    id: "backend",
    skills: ["NestJS", "Node.js", "Express", "Prisma", "TypeORM", "REST", "WebSockets"],
  },
  {
    id: "databases",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "MySQL"],
  },
  {
    id: "devops",
    skills: ["Railway", "Vercel", "Netlify", "Docker", "GitHub Actions"],
  },
  {
    id: "qa",
    skills: ["Jest", "Playwright", "Vitest"],
  },
] as const;