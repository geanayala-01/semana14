import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo, skills } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-mono text-emerald-400">~/sobre-mi</p>
        <h1 className="mb-10 text-4xl font-extrabold text-white">Sobre Mí</h1>

        <div className="mb-16 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-slate-800">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-white">
              ¡Hola! Soy {personalInfo.name}
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Soy desarrollador de software y me apasiona aprender las
                tecnologías más nuevas y ponerlas en práctica en proyectos reales.
              </p>
              <p>
                He trabajado en aplicaciones web con React y Next.js, APIs con
                Spring Boot, Node.js y Django, y apps móviles en Android con
                Kotlin, siempre buscando escribir código limpio y fácil de mantener.
              </p>
              <p>
                Me gusta probar herramientas nuevas, entender cómo funcionan por
                dentro y seguir mejorando con cada proyecto.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section>
          <h2 className="mb-6 text-3xl font-bold text-white">
            <span className="font-mono text-emerald-400">02.</span> Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center transition hover:border-emerald-500/60"
              >
                <p className="font-semibold text-slate-200">{skill}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
