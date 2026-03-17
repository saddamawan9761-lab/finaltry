// src/app/marine/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { MARINE_SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Marine Window Tinting Dubai | 3M OURCAR Yacht & Boat Films',
  description: 'Professional 3M marine window film for yachts, speedboats and vessels in Dubai & Abu Dhabi.',
}

export default function MarinePage() {
  return (
    <>
      <div
        className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden pt-24"
        style={{ background: 'linear-gradient(135deg,#040d1a,#0a1520)' }}
      >
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 30px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>On The Water</p>
          <h1 className="font-heading leading-none tracking-wide" style={{ fontSize: 'clamp(3rem,8vw,6rem)', color: 'var(--text-main)' }}>
            MARINE<br /><span style={{ color: 'var(--red)' }}>TINTING</span>
          </h1>
        </div>
      </div>

      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg,#040d1a,var(--bg-page))' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-light max-w-xl mb-16 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Protect your yacht, speedboat or vessel from harsh UV rays, heat and glare with 3M marine-grade window films — designed for the demanding UAE marine environment.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {MARINE_SERVICES.map((s) => (
              <div key={s.slug} className="border p-10" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-4xl mb-6">{s.icon}</div>
                <h2 className="font-heading text-3xl tracking-wide mb-4" style={{ color: 'var(--text-main)' }}>{s.title}</h2>
                <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>{s.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {s.benefits.slice(0, 4).map((b) => (
                    <div key={b.title} className="border p-4" style={{ background: 'var(--bg-mid)', borderColor: 'var(--border)' }}>
                      <div className="text-lg mb-2">{b.icon}</div>
                      <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-main)' }}>{b.title}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/marine/${s.slug}`}
                  className="inline-block text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors"
                  style={{ background: 'var(--red)', color: 'white' }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
