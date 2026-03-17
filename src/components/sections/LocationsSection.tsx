'use client'
// src/components/sections/LocationsSection.tsx
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'
import { MALL_LOCATIONS } from '@/lib/constants'

export function LocationsSection() {
  const { lang } = useApp()
  const tr = t[lang].locations
  const isAr = lang === 'ar'

  return (
    <section id="locations" className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{tr.label}</p>
        <h2 className="font-heading leading-none tracking-wide mb-3" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--text-main)' }}>
          {tr.title1}<br /><span style={{ color: 'var(--red)' }}>{tr.title2}</span>
        </h2>
        <p className="text-sm font-light max-w-md leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>{tr.desc}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MALL_LOCATIONS.map((loc) => (
            <div
              key={loc.name}
              className="border p-5 transition-all duration-200 group"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 mt-1.5 flex-shrink-0" style={{ background: 'var(--red)' }} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--text-main)' }}>
                      {isAr ? loc.nameAr : loc.name}
                    </div>
                    {loc.isHeadOffice && (
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5" style={{ background: 'var(--red)', color: 'white' }}>
                        {isAr ? 'المقر الرئيسي' : 'HQ'}
                      </span>
                    )}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {isAr ? loc.cityAr : loc.city}
                  </div>
                </div>
              </div>

              {/* Parking */}
              <div className="flex items-start gap-2 mb-3 pb-3 border-b" style={{ borderColor: 'var(--border)' }}>
                <span className="text-xs mt-0.5 flex-shrink-0" style={{ color: 'var(--red)' }}>📍</span>
                <span className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {isAr ? loc.parkingAr : loc.parking}
                </span>
              </div>

              {/* Contact numbers */}
              <div className="space-y-1.5 mb-4">
                {loc.phone && (
                  <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs transition-colors" style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    <span>📞</span> {loc.phone}
                  </a>
                )}
                {loc.phone2 && (
                  <a href={`tel:${loc.phone2.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs transition-colors" style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    <span>📞</span> {loc.phone2}
                  </a>
                )}
                {loc.mobile && (
                  <a href={`tel:${loc.mobile.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs transition-colors" style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    <span>📱</span> {loc.mobile}
                  </a>
                )}
                {loc.mobile2 && (
                  <a href={`tel:${loc.mobile2.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs transition-colors" style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    <span>📱</span> {loc.mobile2}
                  </a>
                )}
              </div>

              {/* Hours + actions */}
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  🕐 {isAr ? loc.hoursAr : loc.hours}
                </span>
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${loc.whatsapp}?text=${encodeURIComponent(isAr ? 'مرحباً! أود حجز خدمة تظليل.' : 'Hello! I would like to book a tinting service.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 transition-colors"
                    style={{ background: '#25D366', color: 'white' }}
                  >
                    WA
                  </a>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 border transition-colors"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'transparent' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--red)'; (e.currentTarget as HTMLElement).style.color = 'var(--red)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
                  >
                    MAP
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
