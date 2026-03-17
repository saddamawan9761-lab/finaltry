'use client'
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'

export function GallerySection() {
  const { lang } = useApp()
  const tr = t[lang].gallery
  const items = ['Before / After — Window Tint','Before / After — PPF','Before / After — Ceramic','Before / After — Detailing','Installation Process','Mall Location Shots']
  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{tr.label}</p>
        <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--text-main)' }}>
          {tr.title1}<br /><span style={{ color: 'var(--red)' }}>{tr.title2}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item} className="aspect-video border flex items-center justify-center cursor-pointer hover:border-red-600 transition-colors" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
