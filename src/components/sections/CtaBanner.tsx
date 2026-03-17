'use client'
import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'

export function CtaBanner() {
  const { lang } = useApp()
  const tr = t[lang].cta
  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="border p-16 text-center relative overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(200,16,46,0.05),transparent)' }} />
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{tr.label}</p>
            <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2.5rem,6vw,5.5rem)', color: 'var(--text-main)' }}>
              {tr.title1}<br /><span style={{ color: 'var(--red)' }}>{tr.title2}</span>
            </h2>
            <p className="text-sm font-light max-w-md mx-auto mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{tr.desc}</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors" style={{ background: 'var(--red)', color: 'white' }}>{tr.cta1}</Link>
              <Link href="/contact?type=quote" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors border" style={{ background: 'transparent', color: 'var(--text-main)', borderColor: 'var(--border)' }}>{tr.cta2}</Link>
              <Link href="/simulator" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors border" style={{ background: 'transparent', color: 'var(--text-main)', borderColor: 'var(--border)' }}>{tr.cta3}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
