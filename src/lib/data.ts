import { Project } from '@/types';

// URL pública del sitio: se configura en Vercel con NEXT_PUBLIC_SITE_URL
// (por ejemplo https://geanayala.vercel.app o tu dominio personalizado).
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://geanayala.vercel.app').replace(/\/$/, '');

export const projects: Project[] = [
  {
    slug: 'intifix',
    title: 'IntiFix',
    description:
      'Plataforma que conecta clientes con técnicos verificados para reparar laptops, celulares y otros equipos. Incluye app web, app Android, API y panel de administración.',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1600&auto=format&fit=crop',
    technologies: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Kotlin', 'Django', 'Docker'],
    githubUrl: 'https://github.com/rivera-anderson/intifix',
    featured: true,
  },
  {
    slug: 'portafolio-seo',
    title: 'Portafolio con SEO',
    description:
      'Este mismo portafolio: Next.js con meta tags dinámicos, Open Graph, sitemap, robots.txt e imágenes optimizadas con carga diferida.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    demoUrl: siteUrl,
    githubUrl: 'https://github.com/geanayala-01/semana14',
    featured: true,
  },
];

export const personalInfo = {
  name: 'Gean Pierre Ayala',
  shortName: 'GeanAyala',
  title: 'Desarrollador de Software',
  description:
    'Desarrollador apasionado por aprender y aplicar las tecnologías más nuevas para construir aplicaciones web y móviles.',
  email: 'gean.ayala.dev@gmail.com',
  github: 'https://github.com/geanayala-01',
  githubUser: 'geanayala-01',
  siteUrl,
  // Avatar animado generado con DiceBear (estilo avataaars)
  avatar:
    'https://api.dicebear.com/9.x/avataaars/png?seed=Gean&size=512&top=shortCurly&hairColor=2c1b18&skinColor=d08b5b&facialHairProbability=0&clothing=hoodie&clothesColor=25557c&eyes=default&mouth=smile&eyebrows=defaultNatural&accessories=prescription02&accessoriesColor=262e33&accessoriesProbability=100&backgroundColor=10b981',
};

export const skills = [
  'TypeScript / JavaScript',
  'Java',
  'React & Next.js',
  'Node.js & Express',
  'Spring Boot',
  'Django',
  'PostgreSQL & MongoDB',
  'Kotlin (Android)',
  'Flutter',
  'Tailwind CSS',
  'Docker',
  'QA & Testing',
  'Pruebas unitarias y E2E',
  'Git & GitHub',
];
