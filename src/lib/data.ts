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
  avatar: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export const skills = [
  'TypeScript / JavaScript',
  'React & Next.js',
  'Node.js & Express',
  'Spring Boot',
  'Django',
  'PostgreSQL & MongoDB',
  'Kotlin (Android)',
  'Tailwind CSS',
  'Docker',
  'Git & GitHub',
];
