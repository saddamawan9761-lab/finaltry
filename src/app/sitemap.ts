// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { AUTOMOTIVE_SERVICES, RESIDENTIAL_SERVICES, MARINE_SERVICES } from '@/lib/constants'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.3mourcar.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticPages = ['', '/about', '/automotive', '/residential', '/marine', '/simulator', '/contact'].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
  const automotivePages = AUTOMOTIVE_SERVICES.map((s) => ({
    url: `${BASE}/automotive/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const residentialPages = RESIDENTIAL_SERVICES.map((s) => ({
    url: `${BASE}/residential/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const marinePages = MARINE_SERVICES.map((s) => ({
    url: `${BASE}/marine/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...automotivePages, ...residentialPages, ...marinePages]
}
