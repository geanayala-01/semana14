import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo, skills } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="mb-24 grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-4 font-mono text-emerald-400">Hola, soy</p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mb-6 text-xl text-slate-300 md:text-2xl">{personalInfo.title}</p>
          <p className="mb-8 max-w-xl text-lg text-slate-400">{personalInfo.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-400"
            >
              Contáctame
            </Link>
          </div>
        </div>
        <div className="relative mx-auto h-48 w-48 md:h-64 md:w-64 animate-[float_6s_ease-in-out_infinite]">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-60 blur-xl" />
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            fill
            className="relative rounded-full border-4 border-slate-900 bg-emerald-500 object-cover"
            priority
            sizes="(max-width: 768px) 192px, 256px"
          />
        </div>
      </section>

      {/* Stack */}
      <section className="mb-24">
        <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-slate-500">
          Tecnologías con las que trabajo
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="mb-8 text-3xl font-bold text-white">
          <span className="font-mono text-emerald-400">01.</span> Proyectos Destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
