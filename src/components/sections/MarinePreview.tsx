'use client'
import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'

export function MarinePreview() {
  const { lang } = useApp()
  const tr = t[lang].marine
  return (
    <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg,#040d1a,var(--bg-page))' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{tr.label}</p>
        <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--text-main)' }}>
          {tr.title1}<br /><span style={{ color: 'var(--red)' }}>{tr.title2}</span>
        </h2>
        <p className="text-sm font-light max-w-md leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>{tr.desc}</p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/marine" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors" style={{ background: 'var(--red)', color: 'white' }}>{tr.cta1}</Link>
          <Link href="/contact?type=quote" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors border" style={{ background: 'transparent', color: 'var(--text-main)', borderColor: 'var(--border)' }}>{tr.cta2}</Link>
        </div>
      </div>
    </section>
  )
}
