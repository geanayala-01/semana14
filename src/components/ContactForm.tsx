'use client';

import { useState } from 'react';
import { personalInfo } from '@/lib/data';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputClass =
    'w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400';
  const labelClass = 'mb-1 block font-mono text-sm text-slate-300';

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-slate-800 bg-slate-900/60 p-6"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Nombre</label>
          <input id="name" name="name" required placeholder="Tu nombre" value={form.name} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" required placeholder="tu@correo.com" value={form.email} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className={labelClass}>Asunto</label>
        <input id="subject" name="subject" required placeholder="¿De qué quieres hablar?" value={form.subject} onChange={handleChange} className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Mensaje</label>
        <textarea id="message" name="message" rows={5} required placeholder="Cuéntame sobre tu proyecto o propuesta" value={form.message} onChange={handleChange} className={inputClass} />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
      >
        Enviar Mensaje
      </button>
      {sent && (
        <p className="text-center text-emerald-400" role="status">
          ¡Gracias! Se abrió tu cliente de correo para enviar el mensaje.
        </p>
      )}
    </form>
  );
}
