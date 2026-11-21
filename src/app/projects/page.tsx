import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Proyectos de Gean Pierre Ayala: IntiFix y este portafolio con SEO hecho en Next.js',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Proyectos - Gean Pierre Ayala',
    description: 'Proyectos de desarrollo web y móvil de Gean Pierre Ayala',
    url: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <p className="mb-2 font-mono text-emerald-400">~/proyectos</p>
      <h1 className="mb-4 text-4xl font-extrabold text-white">Mis Proyectos</h1>
      <p className="mb-12 text-lg text-slate-400">
        Proyectos en los que he trabajado, de la idea al despliegue.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
