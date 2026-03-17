// src/app/residential/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { RESIDENTIAL_SERVICES } from '@/lib/constants'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return RESIDENTIAL_SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = RESIDENTIAL_SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  return { title: `${service.title} Dubai | 3M OURCAR`, description: service.description }
}

export default async function ResidentialServicePage({ params }: Props) {
  const { slug } = await params
  const service = RESIDENTIAL_SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  return (
    <>
      <div
        className="relative min-h-[50vh] flex items-end pb-16 pt-24 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,var(--bg-page),#0a0f1a)' }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 30px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <Link href="/residential" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-6 transition-colors" style={{ color: 'var(--text-muted)' }}>
            ← Back
          </Link>
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-4" style={{ color: 'var(--red)' }}>Residential & Commercial</p>
          <h1 className="font-heading leading-none tracking-wide" style={{ fontSize: 'clamp(2.5rem,6vw,5.5rem)', color: 'var(--text-main)' }}>
            {service.title.toUpperCase()}
          </h1>
        </div>
      </div>

      <section className="py-20 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderLeft: '3px solid var(--red)' }}>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Content placeholder — paste your {service.title} product content here.
            </p>
          </div>

          <div className="border flex items-center justify-center" style={{ aspectRatio: '16/9', background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>[ Project Photo / Video ]</span>
          </div>

          <div>
            <h2 className="font-heading text-3xl tracking-wide mb-6" style={{ color: 'var(--text-main)' }}>
              KEY <span style={{ color: 'var(--red)' }}>BENEFITS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.benefits.map((b) => (
                <div key={b.title} className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <div className="text-2xl mb-4">{b.icon}</div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-main)' }}>{b.title}</h4>
                  <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{b.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-4">
            <Link href="/contact" className="inline-block text-sm font-semibold tracking-widest uppercase px-10 py-4 transition-colors"
              style={{ background: 'var(--red)', color: 'white' }}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
