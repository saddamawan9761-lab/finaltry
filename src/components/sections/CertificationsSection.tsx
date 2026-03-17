'use client'
// src/components/sections/CertificationsSection.tsx
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'

export function CertificationsSection() {
  const { lang } = useApp()
  const tr = t[lang].certs
  const [modal, setModal] = useState<{ title: string; subtitle: string; desc: string } | null>(null)

  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{tr.label}</p>
          <h2 className="font-heading leading-none tracking-wide" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--text-main)' }}>
            {tr.title1}<br /><span style={{ color: 'var(--red)' }}>{tr.title2}</span>
          </h2>
          <p className="text-sm font-light mt-3" style={{ color: 'var(--text-muted)' }}>{tr.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tr.items.map((cert) => (
            <button key={cert.title} onClick={() => setModal(cert)}
              className="p-5 text-center cursor-pointer border hover:-translate-y-1 transition-all duration-300 group"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="aspect-[3/4] border flex items-center justify-center mb-4" style={{ background: 'var(--bg-mid)', borderColor: 'var(--border)' }}>
                <div>
                  <div className="font-heading text-3xl tracking-widest" style={{ color: 'var(--red)' }}>3M</div>
                  <div className="text-[10px] tracking-widest mt-1" style={{ color: 'var(--text-muted)' }}>CERTIFIED</div>
                </div>
              </div>
              <div className="text-xs font-semibold tracking-wide uppercase" style={{ color: 'var(--text-main)' }}>{cert.title}</div>
              <div className="text-[10px] mt-1" style={{ color: 'var(--text-muted)' }}>{cert.subtitle}</div>
            </button>
          ))}
        </div>
        <div className="mt-12 border p-10 text-center" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <p className="text-sm italic max-w-xl mx-auto mb-6" style={{ color: 'var(--text-muted)' }}>
            {tr.trust}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="text-xs font-semibold tracking-widest uppercase px-6 py-3 transition-colors" style={{ background: 'var(--red)', color: 'white' }}>{tr.cta1}</Link>
            <Link href="/contact?type=quote" className="text-xs font-semibold tracking-widest uppercase px-6 py-3 transition-colors border" style={{ borderColor: 'var(--border)', color: 'var(--text-main)', background: 'transparent' }}>{tr.cta2}</Link>
            <Link href="/contact" className="text-xs font-semibold tracking-widest uppercase px-6 py-3 transition-colors border" style={{ borderColor: 'var(--border)', color: 'var(--text-main)', background: 'transparent' }}>{tr.cta3}</Link>
          </div>
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.9)' }} onClick={() => setModal(null)}>
          <div className="border p-8 max-w-sm w-full relative" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setModal(null)} className="absolute top-4 right-4 text-xl leading-none" style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>✕</button>
            <div className="aspect-[3/4] border flex items-center justify-center mb-6" style={{ background: 'var(--bg-mid)', borderColor: 'var(--border)' }}>
              <div className="text-center">
                <div className="font-heading text-5xl tracking-widest" style={{ color: 'var(--red)' }}>3M</div>
                <div className="text-xs tracking-widest mt-2 uppercase" style={{ color: 'var(--text-muted)' }}>{modal.title}</div>
              </div>
            </div>
            <h3 className="font-heading text-2xl tracking-wide mb-2" style={{ color: 'var(--text-main)' }}>{modal.title}</h3>
            <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{modal.desc}</p>
          </div>
        </div>
      )}
    </section>
  )
}
