'use client'
// src/components/sections/FiftyFiveMinutes.tsx
import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'

export function FiftyFiveMinutes() {
  const { lang } = useApp()
  const tr = t[lang].min55
  return (
    <section className="py-24 px-6 text-center overflow-hidden" style={{ background: 'var(--red)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="font-heading leading-none select-none" style={{ fontSize: 'clamp(8rem,20vw,16rem)', color: 'rgba(255,255,255,0.1)' }}>55</div>
        <div className="-mt-16 relative">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>{tr.label}</p>
          <h2 className="font-heading tracking-wide text-white mb-4" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>{tr.title}</h2>
          <p className="text-sm font-light max-w-md mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{tr.desc}</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="text-xs font-bold tracking-widest uppercase px-8 py-4 transition-colors" style={{ background: 'white', color: 'var(--red)' }}>{tr.cta1}</Link>
            <Link href="/automotive" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors border" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>{tr.cta2}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
