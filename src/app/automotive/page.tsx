// src/app/automotive/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { AUTOMOTIVE_SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Automotive Services — 3M Window Tinting, PPF, Ceramic Coating Dubai',
  description: 'Professional automotive services using genuine 3M products. Window tinting, PPF, ceramic coating, polishing and detailing at 9 mall locations in Dubai & Abu Dhabi.',
}

export default function AutomotivePage() {
  return (
    <>
      <div
        className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden pt-24"
        style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#1a0005 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 30px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>Our Services</p>
          <h1
            className="font-heading leading-none tracking-wide"
            style={{ fontSize: 'clamp(3rem,8vw,7rem)', color: 'white', textShadow: '0 2px 18px rgba(0,0,0,0.55)' }}
          >
            AUTOMOTIVE<br /><span style={{ color: 'var(--red)' }}>SERVICES</span>
          </h1>
        </div>
      </div>

      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-light leading-relaxed mb-12 max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Professional automotive services using only genuine 3M products. Our certified technicians deliver precision results at all 9 mall locations across Dubai and Abu Dhabi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUTOMOTIVE_SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/automotive/${s.slug}`}
                className="group block border p-7 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" style={{ background: 'var(--red)' }} />
                <div className="w-12 h-12 border flex items-center justify-center mb-5 text-xl" style={{ background: 'rgba(200,16,46,0.1)', borderColor: 'rgba(200,16,46,0.2)' }}>
                  {s.icon}
                </div>
                <div className="absolute top-5 right-5 text-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--red)' }}>→</div>
                <h3 className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--text-main)' }}>{s.title}</h3>
                <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block text-xs font-semibold tracking-widest uppercase px-10 py-4 transition-colors"
              style={{ background: 'var(--red)', color: 'white' }}
            >
              Book Any Service
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
