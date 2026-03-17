'use client'
// src/components/sections/ShopWhileTint.tsx
import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'

export function ShopWhileTint() {
  const { lang } = useApp()
  const tr = t[lang].shop
  const steps = [
    { num: '01', title: tr.step1Title, desc: tr.step1Desc },
    { num: '02', title: tr.step2Title, desc: tr.step2Desc },
    { num: '03', title: tr.step3Title, desc: tr.step3Desc },
  ]
  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{tr.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--text-main)' }}>
            {tr.title1}<br />{tr.title2}<br /><span style={{ color: 'var(--red)' }}>{tr.title3}</span>
          </h2>
          <p className="text-sm font-light leading-relaxed mb-8 max-w-sm" style={{ color: 'var(--text-muted)' }}>{tr.desc}</p>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5 items-start">
                <div className="font-heading text-4xl leading-none min-w-[2.5rem]" style={{ color: 'var(--red)' }}>{s.num}</div>
                <div>
                  <strong className="text-sm font-semibold block mb-1" style={{ color: 'var(--text-main)' }}>{s.title}</strong>
                  <span className="text-xs font-light" style={{ color: 'var(--text-muted)' }}>{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-block mt-10 text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors" style={{ background: 'var(--red)', color: 'white' }}>{tr.cta}</Link>
        </div>
        <div className="aspect-video flex items-center justify-center border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>[ Video / Image Placeholder ]</span>
        </div>
      </div>
    </section>
  )
}
