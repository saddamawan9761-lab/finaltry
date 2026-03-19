// src/app/residential/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Residential & Commercial Window Tinting Dubai | 3M OURCAR',
  description: '3M window films for homes, offices and commercial buildings. Sun control, safety, security and decorative films. Professional installation in Dubai & Abu Dhabi.',
}

const services = [
  {
    slug: 'sun-control',
    icon: '☀️',
    title: '3M™ Sun Control Window Films',
    desc: 'Reduce heat and glare while maintaining natural light. Up to 78% heat rejection and 99.9% UV protection for homes, villas and offices.',
    benefits: ['Up to 78% heat rejection', '99.9% UV protection', 'Lowers electricity bills', 'Prevents furniture fading'],
  },
  {
    slug: 'safety-security',
    icon: '🔒',
    title: '3M™ Safety & Security Films',
    desc: 'Hold shattered glass together — protecting against break-ins, accidents and storm damage.',
    benefits: ['Anti-shatter protection', 'Break-in deterrent', 'Child safety', 'Storm protection'],
  },
  {
    slug: 'decorative',
    icon: '🎨',
    title: '3M™ Decorative Window Films',
    desc: 'Frosted, patterned and branded films for privacy, aesthetics and custom office branding.',
    benefits: ['Frosted & patterned options', 'Custom branding', 'Privacy without blocking light', 'Cost-effective vs etched glass'],
  },
]

export default function ResidentialPage() {
  return (
    <>
      <div
        className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden pt-24"
        style={{ background: 'linear-gradient(135deg,var(--bg-page),#0a0f1a)' }}
      >
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 30px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>Window Film Solutions</p>
          <h1
            className="font-heading leading-none tracking-wide"
            style={{ fontSize: 'clamp(3rem,8vw,6rem)', color: 'white', textShadow: '0 2px 18px rgba(0,0,0,0.55)' }}
          >
            RESIDENTIAL &<br /><span style={{ color: 'var(--red)' }}>COMMERCIAL</span>
          </h1>
        </div>
      </div>

      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-light max-w-xl mb-12 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            3M window films for homes, offices, retail spaces and commercial buildings — reducing heat, enhancing privacy and protecting interiors from UV damage.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.slug}
                className="border p-8 hover:-translate-y-1 transition-all duration-200"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="text-3xl mb-5">{s.icon}</div>
                <h2 className="font-heading text-2xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>
                  {s.title}
                </h2>
                <p className="text-xs font-light leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                <div className="space-y-2 mb-8">
                  {s.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--red)' }} className="mt-0.5 flex-shrink-0">✓</span> {b}
                    </div>
                  ))}
                </div>
                <Link
                  href={`/residential/${s.slug}`}
                  className="inline-block border text-xs font-semibold tracking-widest uppercase px-6 py-3 transition-all hover:opacity-80"
                  style={{ borderColor: 'var(--red)', color: 'var(--red)' }}
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
