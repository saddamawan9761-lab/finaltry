'use client'
// src/components/sections/TestimonialsSection.tsx — Step 1 Upgrade
// Premium Google-review card design with G badge, star rating, avatar initials
// Replace TESTIMONIALS data in constants.ts with your real GMB reviews

import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'
import { TESTIMONIALS } from '@/lib/constants'

// Google "G" logo SVG — authentic brand mark for trust
function GoogleGBadge() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

// Avatar with initials — professional fallback before we add photos
function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
      style={{ background: color }}
    >
      {initials}
    </div>
  )
}

// Deterministic avatar color from name
const AVATAR_COLORS = ['#C8102E', '#1a1a2e', '#2d6a4f', '#1d3557', '#6b2737', '#2c3e50', '#7b2d8b']
function avatarColor(name: string) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} viewBox="0 0 20 20" width="14" height="14" fill={i <= rating ? '#FBBC05' : '#D1D5DB'}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const { lang } = useApp()
  const tr = t[lang].testimonials

  // Aggregate rating — update these with your real GMB numbers
  const aggregateRating = 4.9
  const totalReviews = 847

  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
              {tr.label}
            </p>
            <h2 className="font-heading leading-none tracking-wide" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--text-main)' }}>
              {tr.title1}<br /><span style={{ color: 'var(--red)' }}>{tr.title2}</span>
            </h2>
          </div>

          {/* Aggregate rating badge */}
          <a
            href="https://g.page/r/3mourcar/review"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 border self-start md:self-end transition-all duration-200 hover:border-red-600"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderRadius: '6px' }}
          >
            <GoogleGBadge />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold leading-none" style={{ color: 'var(--text-main)' }}>
                  {aggregateRating}
                </span>
                <StarRating rating={5} />
              </div>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {totalReviews.toLocaleString()} Google reviews
              </p>
            </div>
          </a>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((tm) => (
            <div
              key={tm.name}
              className="border p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderRadius: '6px' }}
            >
              {/* Card header: avatar + name + Google badge */}
              <div className="flex items-center gap-3">
                <Avatar name={tm.name} color={avatarColor(tm.name)} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold truncate" style={{ color: 'var(--text-main)' }}>
                    {tm.name}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {tm.location}
                  </div>
                </div>
                {/* Google G — signals this is a real Google review */}
                <div className="flex-shrink-0" title="Google Review">
                  <GoogleGBadge />
                </div>
              </div>

              {/* Star rating */}
              <StarRating rating={tm.rating} />

              {/* Review text */}
              <p className="text-sm font-light leading-relaxed flex-1" style={{ color: 'var(--text-main)', opacity: 0.85 }}>
                “{tm.text}”
              </p>

              {/* Service tag */}
              {tm.service && (
                <div className="pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase px-2 py-1"
                    style={{ background: 'rgba(200,16,46,0.1)', color: 'var(--red)', borderRadius: '3px' }}
                  >
                    {tm.service}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA to leave a review */}
        <div className="mt-10 text-center">
          <a
            href="https://g.page/r/3mourcar/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-6 py-3 border transition-all duration-200 hover:border-red-600"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', borderRadius: '4px', background: 'transparent' }}
          >
            <GoogleGBadge />
            View All Reviews on Google
          </a>
        </div>
      </div>

      {/* Schema.org AggregateRating — tells Google your star rating for search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutoRepair',
            name: '3M OURCAR',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: aggregateRating,
              reviewCount: totalReviews,
              bestRating: 5,
              worstRating: 1,
            },
          }),
        }}
      />
    </section>
  )
}
