import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}, ${personalInfo.title}. Disponible para proyectos y oportunidades laborales.`,
  keywords: ['contacto', 'contratar desarrollador', 'desarrollador de software', 'gean pierre ayala'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contacto - ${personalInfo.name}`,
    description: `¿Tienes un proyecto en mente? Escríbele a ${personalInfo.name}.`,
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contacto - ${personalInfo.name}`,
    description: `¿Tienes un proyecto en mente? Escríbele a ${personalInfo.name}.`,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-mono text-emerald-400">~/contacto</p>
        <h1 className="mb-4 text-4xl font-extrabold text-white">Hablemos</h1>
        <p className="mb-12 text-lg text-slate-400">
          ¿Tienes un proyecto en mente o una oportunidad laboral? ¡Escríbeme!
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <aside className="space-y-6 md:col-span-1">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-slate-500">Email</h2>
              <a href={`mailto:${personalInfo.email}`} className="break-all text-emerald-400 hover:underline">
                {personalInfo.email}
              </a>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-slate-500">GitHub</h2>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                @{personalInfo.githubUser}
              </a>
            </div>
          </aside>
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
