export type Lang = "es" | "en";

const es = {
  nav: {
    about: "Sobre mí",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  },
  hero: {
    eyebrow: "Desarrollador full-stack · Ecuador",
    titleStart: "Software completo,",
    titleEnd: "del backend al móvil.",
    sub: "Construyo plataformas completas para negocios e instituciones — de la trazabilidad del camarón a la adopción de mascotas.",
    primary: "Ver proyectos",
    secondary: "GitHub",
    tiles: "Proyectos",
  },
  plot: {
    heading: "Plano de parcelas",
    legend: "Parcelas",
    origin: "Origen",
    provenance: "El Oro · Ecuador",
    coord: "03°15′ S · 079°57′ W",
    note: "4 sistemas reales",
  },
  about: {
    heading: "Sobre mí",
    tag: "01 · about",
    body1: "Soy Leiver Lazo, desarrollador full-stack de El Oro, Ecuador. Me gusta construir productos completos, desde la base de datos hasta la app móvil, con código limpio, buenas decisiones de arquitectura y repositorios que cualquiera pueda abrir.",
    body2: "Trabajo con JavaScript y TypeScript de punta a punta: NestJS y Node en el backend, Next.js y Angular en la web, React Native y Flutter en el móvil, PostgreSQL y MongoDB en datos, y hago análisis de datos cuando el negocio lo necesita. Además me acoplo fácil a cualquier equipo o stack: si el proyecto requiere otra tecnología, proceso o herramienta, la aprendo y la asumo sin fricción.",
    highlights: [
      "Trazabilidad EUDR de exportación de camarón",
      "Sistemas de gestión para universidades y restaurantes",
      "Aplicaciones móviles con React Native y Flutter",
      "Me acoplo rápido a nuevos teams, stacks y procesos",
      "Curioso por aprender tecnologías nuevas",
    ],
    location: "El Oro, Ecuador",
  },
  projects: {
    heading: "Proyectos destacados",
    intro: "Cuatro sistemas reales que construí de punta a punta.",
    flagship: "Destacado",
    demo: "Demo en vivo",
    source: "Código",
    index: "proyecto",
  },
  skills: {
    heading: "Habilidades",
    intro: "El stack con el que trabajo todos los días.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de datos",
      devops: "DevOps y cloud",
      qa: "Calidad",
    },
  },
  extra: {
    heading: "También en GitHub",
    intro: "Proyectos adicionales y versiones de escritorio.",
    source: "Ver código",
  },
  contact: {
    heading: "¿Hablamos?",
    intro: "Un proyecto entre manos, una vacante abierta o solo curiosidad por algún repo. Respondo rápido.",
    email: "Escríbeme",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    madeIn: "Hecho en El Oro, Ecuador",
    backToTop: "Subir",
  },
  common: {
    themeLight: "Modo claro",
    themeDark: "Modo oscuro",
    langLabel: "Idioma",
    openInNew: "Abrir en pestaña nueva",
  },
};

const en: typeof es = {
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Full-stack developer · Ecuador",
    titleStart: "Full-stack software,",
    titleEnd: "from backend to mobile.",
    sub: "I build complete platforms for businesses and institutions — from shrimp traceability to pet adoption.",
    primary: "View projects",
    secondary: "GitHub",
    tiles: "Projects",
  },
  plot: {
    heading: "Plot plan",
    legend: "Parcels",
    origin: "Origin",
    provenance: "El Oro · Ecuador",
    coord: "03°15′ S · 079°57′ W",
    note: "4 real systems",
  },
  about: {
    heading: "About",
    tag: "01 · about",
    body1: "I'm Leiver Lazo, a full-stack developer from El Oro, Ecuador. I enjoy building complete products, from the database to the mobile app, with clean code, sound architecture decisions and repositories anyone can open.",
    body2: "I work end-to-end with JavaScript and TypeScript: NestJS and Node on the backend, Next.js and Angular on the web, React Native and Flutter on mobile, PostgreSQL and MongoDB for data, plus data analysis when the business needs it. I also adapt easily to any team or stack: if the project needs another technology, process or tool, I learn it and take it on without friction.",
    highlights: [
      "EUDR traceability for shrimp exports",
      "Management systems for universities and restaurants",
      "Mobile apps with React Native and Flutter",
      "Quick to adapt to new teams, stacks and workflows",
      "Eager to keep learning new technologies",
    ],
    location: "El Oro, Ecuador",
  },
  projects: {
    heading: "Featured projects",
    intro: "Four real systems I built end-to-end.",
    flagship: "Flagship",
    demo: "Live demo",
    source: "Source",
    index: "project",
  },
  skills: {
    heading: "Skills",
    intro: "The stack I work with every day.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      devops: "DevOps & cloud",
      qa: "QA",
    },
  },
  extra: {
    heading: "Also on GitHub",
    intro: "Additional projects and desktop versions.",
    source: "View code",
  },
  contact: {
    heading: "Let's talk?",
    intro: "A project in the works, an open role, or just curious about a repo. I reply fast.",
    email: "Write to me",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    madeIn: "Made in El Oro, Ecuador",
    backToTop: "Back to top",
  },
  common: {
    themeLight: "Light mode",
    themeDark: "Dark mode",
    langLabel: "Language",
    openInNew: "Open in new tab",
  },
};

export const translations = { es, en };

export type Translation = typeof es;