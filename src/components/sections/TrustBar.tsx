'use client'
// src/components/sections/TrustBar.tsx
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'

export function TrustBar() {
  const { lang } = useApp()
  const items = t[lang].trust
  return (
    <div className="py-4 px-6" style={{ background: 'var(--red)' }}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.9)' }}>
            <span className="text-white">✓</span> {item}
          </div>
        ))}
      </div>
    </div>
  )
}
