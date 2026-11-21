import { MetadataRoute } from 'next';
import { personalInfo } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/contact'],
        disallow: ['/api/', '/admin/', '/_next/', '/contact/gracias'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/contact'],
        disallow: ['/api/', '/admin/', '/contact/gracias'],
      },
    ],
    sitemap: `${personalInfo.siteUrl}/sitemap.xml`,
    host: personalInfo.siteUrl,
  };
}
