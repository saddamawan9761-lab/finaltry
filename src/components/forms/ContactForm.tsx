'use client'
// src/components/forms/ContactForm.tsx
import { useState } from 'react'
import { COMPANY, MALL_LOCATIONS, AUTOMOTIVE_SERVICES, RESIDENTIAL_SERVICES, MARINE_SERVICES } from '@/lib/constants'
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'
import { getWhatsAppUrl } from '@/lib/utils'

type FormType = 'contact' | 'quote' | 'booking'

export function ContactForm() {
  const { lang } = useApp()
  const tr = t[lang].contact
  const [formType, setFormType] = useState<FormType>('contact')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const allServiceNames = [
    ...AUTOMOTIVE_SERVICES.map(s => t[lang].services.items.find(i => i.slug === s.slug)?.name ?? s.title),
    ...RESIDENTIAL_SERVICES.map(s => t[lang].residential.items.find(i => i.icon === s.icon)?.name ?? s.shortTitle),
    ...MARINE_SERVICES.map(s => s.shortTitle),
  ]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    try {
      const endpoint = formType === 'booking' ? '/api/booking' : formType === 'quote' ? '/api/quote' : '/api/contact'
      const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, formType }) })
      const json = await res.json()
      if (json.success) { setSuccess(true) } else { setError(json.message || tr.errorNetwork) }
    } catch { setError(tr.errorNetwork) } finally { setLoading(false) }
  }

  const inputStyle = { background: 'var(--bg-input)', borderColor: 'var(--border)', color: 'var(--text-main)' }
  const labelStyle = { color: 'var(--text-muted)' }
  const whatsappUrl = getWhatsAppUrl(
    COMPANY.whatsapp,
    lang === 'ar'
      ? 'مرحباً! أود الحجز / الحصول على عرض سعر.'
      : 'Hello! I would like to book / get a quote.'
  )

  if (success) {
    return (
      <div className="border p-10 text-center" style={{ background: 'var(--bg-card)', borderColor: 'var(--red)' }}>
        <div className="text-4xl mb-4" style={{ color: 'var(--red)' }}>✓</div>
        <h3 className="font-heading text-3xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>{tr.successTitle}</h3>
        <p className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>{tr.successMsg}</p>
        <button onClick={() => setSuccess(false)} className="mt-6 text-xs tracking-widest uppercase hover:underline" style={{ color: 'var(--red)', background: 'none', border: 'none', cursor: 'pointer' }}>{tr.submitAnother}</button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex gap-1 mb-8">
        {(['contact', 'quote', 'booking'] as FormType[]).map((tab) => (
          <button key={tab} onClick={() => setFormType(tab)}
            className="text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-colors border"
            style={formType === tab
              ? { background: 'var(--red)', color: 'white', borderColor: 'var(--red)' }
              : { background: 'transparent', color: 'var(--text-muted)', borderColor: 'var(--border)' }}>
            {tr.tabs[tab]}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium tracking-widest uppercase mb-2" style={labelStyle}>{tr.fields.name} *</label>
            <input name="name" required placeholder={tr.fields.namePlaceholder} className="w-full border px-4 py-3 text-sm font-light outline-none transition-colors" style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--red)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
          </div>
          <div>
            <label className="block text-xs font-medium tracking-widest uppercase mb-2" style={labelStyle}>{tr.fields.phone} *</label>
            <input name="phone" type="tel" required placeholder={tr.fields.phonePlaceholder} className="w-full border px-4 py-3 text-sm font-light outline-none transition-colors" style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--red)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium tracking-widest uppercase mb-2" style={labelStyle}>{tr.fields.email}</label>
          <input name="email" type="email" placeholder={tr.fields.emailPlaceholder} className="w-full border px-4 py-3 text-sm font-light outline-none transition-colors" style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--red)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium tracking-widest uppercase mb-2" style={labelStyle}>{tr.fields.service}</label>
            <select name="service" className="w-full border px-4 py-3 text-sm font-light outline-none transition-colors appearance-none" style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--red)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')}>
              <option value="">{tr.fields.selectService}</option>
              {allServiceNames.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium tracking-widest uppercase mb-2" style={labelStyle}>{tr.fields.location}</label>
            <select name="location" className="w-full border px-4 py-3 text-sm font-light outline-none transition-colors appearance-none" style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--red)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')}>
              <option value="">{tr.fields.anyLocation}</option>
              {MALL_LOCATIONS.map(l => <option key={l.name} value={l.name}>{l.name}</option>)}
            </select>
          </div>
        </div>
        {formType === 'booking' && (
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium tracking-widest uppercase mb-2" style={labelStyle}>{tr.fields.carMake}</label>
              <input name="carMake" placeholder={tr.fields.carMakePlaceholder} className="w-full border px-4 py-3 text-sm font-light outline-none" style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--red)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
            </div>
            <div>
              <label className="block text-xs font-medium tracking-widest uppercase mb-2" style={labelStyle}>{tr.fields.carModel}</label>
              <input name="carModel" placeholder={tr.fields.carModelPlaceholder} className="w-full border px-4 py-3 text-sm font-light outline-none" style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--red)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
            </div>
            <div>
              <label className="block text-xs font-medium tracking-widest uppercase mb-2" style={labelStyle}>{tr.fields.carYear}</label>
              <input name="carYear" placeholder={tr.fields.carYearPlaceholder} className="w-full border px-4 py-3 text-sm font-light outline-none" style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--red)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
            </div>
          </div>
        )}
        <div>
          <label className="block text-xs font-medium tracking-widest uppercase mb-2" style={labelStyle}>{tr.fields.message}</label>
          <textarea name="message" rows={4} placeholder={tr.fields.messagePlaceholder} className="w-full border px-4 py-3 text-sm font-light outline-none resize-none" style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--red)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
        </div>
        {error && <p className="text-xs font-medium" style={{ color: 'var(--red)' }}>{error}</p>}
        <button type="submit" disabled={loading} className="w-full text-xs font-semibold tracking-widest uppercase py-4 transition-colors" style={{ background: loading ? 'var(--text-muted)' : 'var(--red)', color: 'white', cursor: loading ? 'not-allowed' : 'pointer', border: 'none' }}>
          {loading ? tr.sending : tr.submit[formType]}
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-xs font-semibold tracking-widest uppercase py-4 inline-flex items-center justify-center"
          style={{ background: '#25D366', color: 'white', borderRadius: '4px' }}
        >
          {lang === 'ar' ? 'واتساب للحجز الفوري' : 'WhatsApp for instant booking'}
        </a>
      </form>
    </div>
  )
}
