import { ImageResponse } from 'next/og';
import { personalInfo } from '@/lib/data';

// Imagen Open Graph generada por Next.js (1200x630) para compartir en redes
export const alt = `${personalInfo.name} - ${personalInfo.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #020617 0%, #0f172a 60%, #064e3b 100%)',
          color: '#e2e8f0',
        }}
      >
        <div style={{ display: 'flex', fontSize: 32, color: '#34d399', marginBottom: 24 }}>
          {`<${personalInfo.shortName} />`}
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, color: '#ffffff' }}>{personalInfo.name}</div>
        <div style={{ fontSize: 44, color: '#94a3b8', marginTop: 16 }}>{personalInfo.title}</div>
      </div>
    ),
    size
  );
}
