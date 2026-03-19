'use client'

import Link from 'next/link'
import { useApp } from '@/context/AppContext'

const items = [
  {
    slug: 'window-tinting',
    title: '3M™ Window Tinting',
    desc: 'Installed in 55 minutes at 9 mall locations — or on your doorstep.',
    videoSrc: '/videos/home-tinting-portrait.mp4',
    tag: '55 MINUTES',
  },
  {
    slug: 'ppf',
    title: '3M™ Paint Protection Film (PPF)',
    desc: 'Protect your paint from stone chips, sand abrasion, and scratches.',
    videoSrc: '/videos/home-ppf-portrait.mp4',
    tag: 'PRO SERIES',
  },
  {
    slug: 'ceramic-coating',
    title: 'UltraShield Pro Ceramic Coating',
    desc: 'Deep gloss, hydrophobic protection, and easier maintenance.',
    videoSrc: '/videos/home-ceramic-portrait.mp4',
    tag: 'UP TO 3 YEARS',
  },
] as const

export function HomeServiceShowcase() {
  const { lang } = useApp()
  const isAr = lang === 'ar'

  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
              {isAr ? 'خدماتنا' : 'Services'}
            </p>
            <h2 className="font-heading leading-none tracking-wide" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--text-main)' }}>
              {isAr ? 'اختر حماية' : 'CHOOSE YOUR'}<br />
              <span style={{ color: 'var(--red)' }}>{isAr ? '3M™' : '3M™'}</span> {isAr ? 'التي تناسبك' : 'PROTECTION'}
            </h2>
          </div>
          <Link href="/automotive" className="text-xs tracking-widest uppercase border-b pb-1 transition-colors self-end" style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}>
            {isAr ? 'عرض كل الخدمات' : 'View all services'} →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((it) => (
            <Link
              key={it.slug}
              href={`/automotive/${it.slug}`}
              className="group block border overflow-hidden"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <div className="relative" style={{ aspectRatio: '9/16' }}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  src={it.videoSrc}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.70))' }} />

                <div className="absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase px-3 py-2 border"
                  style={{ borderColor: 'rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.92)', background: 'rgba(0,0,0,0.35)' }}
                >
                  {it.tag}
                </div>
              </div>

              <div className="p-7">
                <div className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--text-main)' }}>
                  {it.title}
                </div>
                <p className="text-xs font-light leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                  {it.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase"
                  style={{ color: 'var(--red)' }}
                >
                  {isAr ? 'اعرف المزيد' : 'Learn more'} <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

