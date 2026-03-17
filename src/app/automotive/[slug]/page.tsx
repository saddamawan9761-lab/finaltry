// src/app/automotive/[slug]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { AUTOMOTIVE_SERVICES } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return AUTOMOTIVE_SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = AUTOMOTIVE_SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  return { title: `${service.title} Dubai | 3M OURCAR`, description: service.description }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = AUTOMOTIVE_SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()
  const related = AUTOMOTIVE_SERVICES.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <div
        className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden pt-24"
        style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#1a0005 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 30px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>Automotive Services</p>
          <h1 className="font-heading leading-none tracking-wide" style={{ fontSize: 'clamp(3rem,8vw,6rem)', color: 'var(--text-main)' }}>
            {service.title}
          </h1>
        </div>
      </div>

      <section className="py-20 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <Link
            href="/automotive"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-10 transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            ← Back to Services
          </Link>

          <div className="border p-8 mb-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderLeft: '3px solid var(--red)' }}>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Content placeholder — paste your {service.title} product content here.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>Key Benefits</p>
            <h2 className="font-heading text-4xl tracking-wide mb-8" style={{ color: 'var(--text-main)' }}>
              WHY CHOOSE <span style={{ color: 'var(--red)' }}>{service.shortTitle.toUpperCase()}</span>
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

          <div className="mt-10 border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--text-main)' }}>What&apos;s Included</h3>
            <div className="flex flex-wrap gap-3">
              {service.features.map((f) => (
                <span key={f} className="text-xs font-medium tracking-wide px-4 py-2 border" style={{ background: 'rgba(200,16,46,0.08)', borderColor: 'rgba(200,16,46,0.2)', color: 'var(--red)' }}>{f}</span>
              ))}
            </div>
          </div>

          <div className="mt-12 border p-12 text-center relative overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(200,16,46,0.05),transparent)' }} />
            <div className="relative z-10">
              <h3 className="font-heading text-4xl tracking-wide mb-6" style={{ color: 'var(--text-main)' }}>READY TO BOOK?</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link href="/contact" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors"
                  style={{ background: 'var(--red)', color: 'white' }}>Book This Service</Link>
                <Link href="/contact?type=quote" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 border transition-colors"
                  style={{ background: 'transparent', color: 'var(--text-main)', borderColor: 'var(--border)' }}>Get a Quote</Link>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="font-heading text-3xl tracking-wide mb-6" style={{ color: 'var(--text-main)' }}>
              OTHER <span style={{ color: 'var(--red)' }}>SERVICES</span>
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((s) => (
                <Link key={s.slug} href={`/automotive/${s.slug}`}
                  className="block border p-5 hover:-translate-y-1 transition-all duration-200"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <div className="text-xl mb-3">{s.icon}</div>
                  <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--text-main)' }}>{s.shortTitle}</div>
                  <div className="text-xs mt-1 font-light" style={{ color: 'var(--text-muted)' }}>{s.description.slice(0, 60)}...</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
