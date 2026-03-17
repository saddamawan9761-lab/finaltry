'use client'
// src/components/sections/ContactSidebar.tsx
import { useState } from 'react'
import { MALL_LOCATIONS, COMPANY } from '@/lib/constants'
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'

export function ContactSidebar() {
  const { lang } = useApp()
  const tr = t[lang].contact
  const isAr = lang === 'ar'
  const [expanded, setExpanded] = useState<string | null>('Mirdif City Centre')

  const whatsappMsg = encodeURIComponent(
    isAr ? 'مرحباً! أود حجز خدمة تظليل.' : 'Hello! I would like to book a tinting service.'
  )

  return (
    <div>
      <p className="text-xs font-semibold tracking-[3px] uppercase mb-2" style={{ color: 'var(--red)' }}>
        {tr.instantLabel}
      </p>
      <h2 className="font-heading text-4xl tracking-wide mb-8" style={{ color: 'var(--text-main)' }}>
        {tr.instantTitle}
      </h2>

      {/* Quick contact buttons */}
      <div className="flex flex-col gap-3 mb-10">
        <a
          href={`https://wa.me/${COMPANY.whatsapp}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-xs font-semibold tracking-widest uppercase px-6 py-4 transition-colors"
          style={{ background: '#25D366', color: 'white' }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {tr.whatsapp} — {COMPANY.whatsappDisplay}
        </a>
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
          className="flex items-center justify-center gap-3 text-xs font-semibold tracking-widest uppercase px-6 py-4 transition-colors"
          style={{ background: 'var(--red)', color: 'white' }}
        >
          📞 {tr.call} — {COMPANY.phone}
        </a>
      </div>

      {/* All locations accordion */}
      <p className="text-xs font-semibold tracking-[3px] uppercase mb-4" style={{ color: 'var(--red)' }}>
        {tr.locationsLabel}
      </p>

      <div className="space-y-2">
        {MALL_LOCATIONS.map((loc) => {
          const isOpen = expanded === loc.name
          return (
            <div key={loc.name} className="border overflow-hidden" style={{ borderColor: isOpen ? 'var(--red)' : 'var(--border)', background: 'var(--bg-card)' }}>
              {/* Accordion header */}
              <button
                onClick={() => setExpanded(isOpen ? null : loc.name)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 flex-shrink-0" style={{ background: isOpen ? 'var(--red)' : 'var(--text-muted)' }} />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
                      {isAr ? loc.nameAr : loc.name}
                      {loc.isHeadOffice && (
                        <span className="text-[9px] font-bold tracking-widest px-1.5 py-0.5" style={{ background: 'var(--red)', color: 'white' }}>
                          {isAr ? 'المقر الرئيسي' : 'HQ'}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                      {isAr ? loc.cityAr : loc.city} · {isAr ? loc.hoursAr : loc.hours}
                    </div>
                  </div>
                </div>
                <span className="text-xs transition-transform duration-200" style={{ color: 'var(--text-muted)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
              </button>

              {/* Accordion body */}
              {isOpen && (
                <div className="px-4 pb-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  {/* Parking */}
                  <div className="flex gap-2 mt-3 mb-3">
                    <span className="text-xs flex-shrink-0" style={{ color: 'var(--red)' }}>📍</span>
                    <span className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {isAr ? loc.parkingAr : loc.parking}
                    </span>
                  </div>

                  {/* Numbers */}
                  <div className="space-y-1.5 mb-3">
                    {loc.phone && (
                      <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs transition-colors" style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                        📞 {loc.phone}
                      </a>
                    )}
                    {loc.phone2 && (
                      <a href={`tel:${loc.phone2.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs transition-colors" style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                        📞 {loc.phone2}
                      </a>
                    )}
                    {loc.fax && (
                      <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        🖷 {isAr ? 'فاكس:' : 'Fax:'} {loc.fax}
                      </div>
                    )}
                    {loc.mobile && (
                      <a href={`tel:${loc.mobile.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs transition-colors" style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                        📱 {loc.mobile}
                      </a>
                    )}
                    {loc.mobile2 && (
                      <a href={`tel:${loc.mobile2.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs transition-colors" style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                        📱 {loc.mobile2}
                      </a>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/${loc.whatsapp}?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-[10px] font-bold tracking-widest uppercase py-2 transition-colors"
                      style={{ background: '#25D366', color: 'white' }}
                    >
                      WhatsApp {loc.whatsappDisplay}
                    </a>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold tracking-widest uppercase px-4 py-2 border transition-colors"
                      style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'transparent' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--red)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--red)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
                    >
                      📍 {isAr ? 'الخريطة' : 'Map'}
                    </a>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
