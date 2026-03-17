'use client'
// src/components/sections/ServicesPreview.tsx
import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'

export function ServicesPreview() {
  const { lang } = useApp()
  const tr = t[lang].services
  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{tr.label}</p>
            <h2 className="font-heading leading-none tracking-wide" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--text-main)' }}>
              {tr.title1}<br /><span style={{ color: 'var(--red)' }}>{tr.title2}</span>
            </h2>
          </div>
          <Link href="/automotive" className="text-xs tracking-widest uppercase border-b pb-1 transition-colors self-end" style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}>{tr.viewAll} →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {tr.items.map((s) => (
            <Link key={s.slug} href={`/automotive/${s.slug}`}
              className="group block border p-7 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" style={{ background: 'var(--red)' }} />
              <div className="w-12 h-12 border flex items-center justify-center mb-5 text-xl" style={{ background: 'rgba(200,16,46,0.1)', borderColor: 'rgba(200,16,46,0.2)' }}>{s.icon}</div>
              <div className="absolute top-5 right-5 text-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--red)' }}>→</div>
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--text-main)' }}>{s.name}</h3>
              <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
