'use client'
// src/components/sections/HeroSection.tsx — Step 1 Upgrade
// Authoritative, sale-driven hero with bold taglines and 3M brand enforcement

import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'

export function HeroSection() {
  const { lang } = useApp()
  const tr = t[lang].hero

  const stats = [
    { num: '18+', label: tr.stat1 },
    { num: '9',   label: tr.stat2 },
    { num: '55',  label: tr.stat3 },
    { num: '3M',  label: tr.stat4 },
  ]

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#1a0005 55%,var(--bg-page) 100%)' }}
    >
      {/* Diagonal grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 50%)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Red accent panel — right side */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          background: 'linear-gradient(90deg,transparent,rgba(200,16,46,0.07))',
          clipPath: 'polygon(20% 0,100% 0,100% 100%,0% 100%)',
        }}
      />

      {/* Subtle red glow bottom left */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(200,16,46,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">

        {/* ── Official Dealer Badge ── */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 border"
          style={{ background: 'rgba(200,16,46,0.12)', borderColor: 'rgba(200,16,46,0.35)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: 'var(--red)' }} />
          <span className="text-xs font-semibold tracking-[2px] uppercase" style={{ color: 'var(--red)' }}>
            {tr.badge}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy + CTAs */}
          <div>
            {/* ── Main Headline ── */}
            <h1
              className="font-heading leading-none tracking-wide mb-3"
              style={{
                fontSize: 'clamp(3.5rem,10vw,8rem)',
                color: 'white',
                textShadow: '0 2px 18px rgba(0,0,0,0.55)',
              }}
            >
              {tr.line1}<br />
              <span style={{ color: 'var(--red)' }}>{tr.line2}</span><br />
              {tr.line3}
            </h1>

            {/* ── PRIMARY TAGLINE — billboard treatment ── */}
            <div className="mt-8 mb-3">
              <p
                className="font-heading tracking-widest uppercase"
                style={{
                  fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
                  color: 'rgba(255,255,255,0.95)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  textShadow: '0 2px 16px rgba(0,0,0,0.5)',
                }}
              >
                {tr.tagline1}
              </p>
            </div>

            {/* ── 55 MINUTES callout ── */}
            <div className="flex items-baseline gap-3 mb-6 flex-wrap">
              <span
                className="font-heading"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--red)', lineHeight: 1 }}
              >
                55
              </span>
              <span
                className="font-heading tracking-widest uppercase"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
                  color: 'rgba(255,255,255,0.95)',
                  lineHeight: 1,
                  textShadow: '0 2px 16px rgba(0,0,0,0.5)',
                }}
              >
                Minute Install
              </span>
              <span
                className="text-sm font-light"
                style={{ color: 'rgba(255,255,255,0.86)', alignSelf: 'center', textShadow: '0 2px 14px rgba(0,0,0,0.45)' }}
              >
                — {tr.tagline2c}
              </span>
            </div>

            {/* ── Social proof micro-line ── */}
            <p className="text-sm font-medium tracking-wide mb-10" style={{ color: 'rgba(255,255,255,0.86)', textShadow: '0 2px 14px rgba(0,0,0,0.45)' }}>
              100,000+ cars protected &nbsp;·&nbsp; Dubai &amp; Abu Dhabi &nbsp;·&nbsp;{' '}
              <span style={{ color: 'var(--red)', fontWeight: 600 }}>3M</span> Authorized Since 2006
            </p>

            {/* ── CTA Buttons ── */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}
              >
                {tr.cta1}
              </Link>
              <Link
                href="/contact?type=quote"
                className="text-xs font-semibold tracking-widest uppercase px-8 py-4 border transition-colors duration-200 inline-block"
                style={{
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.95)',
                  borderColor: 'rgba(200,16,46,0.45)',
                  borderRadius: '4px',
                }}
              >
                {tr.cta2}
              </Link>
              <Link
                href="/#locations"
                className="text-xs font-medium tracking-widest uppercase px-8 py-4 border transition-colors duration-200 inline-block"
                style={{
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.86)',
                  borderColor: 'rgba(255,255,255,0.22)',
                  borderRadius: '4px',
                }}
              >
                {tr.cta3} ↓
              </Link>
            </div>
          </div>

          {/* Right: Portrait video (premium frame) */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative border overflow-hidden"
              style={{
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '9/16',
                borderColor: 'rgba(255,255,255,0.16)',
                background: 'rgba(0,0,0,0.35)',
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/home-services-portrait.mp4"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.45))' }} />
              <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: 'var(--red)' }} />
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div
          className="flex flex-wrap gap-10 mt-16 pt-12 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.14)' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="group">
              <div
                className="font-heading leading-none transition-colors duration-200"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--red)' }}
              >
                {s.num}
              </div>
              <div
                className="text-xs tracking-widest uppercase mt-1.5"
                style={{ color: 'rgba(255,255,255,0.78)', textShadow: '0 2px 14px rgba(0,0,0,0.45)' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
