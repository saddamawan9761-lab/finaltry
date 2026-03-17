'use client'
// src/components/layout/Footer.tsx — Step 1 Upgrade
// • All hover states moved to CSS classes (works on touch)
// • Logo uses same 3M + OURCAR image treatment as Navbar
// • "3M" always bold red

import Link from 'next/link'
import Image from 'next/image'
import { COMPANY, MALL_LOCATIONS, AUTOMOTIVE_SERVICES, RESIDENTIAL_SERVICES } from '@/lib/constants'
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'

export function Footer() {
  const { lang } = useApp()
  const tr = t[lang].footer

  const allServices = [
    ...AUTOMOTIVE_SERVICES.map(s => ({
      title: t[lang].services.items.find(i => i.slug === s.slug)?.name ?? s.title,
      href: `/automotive/${s.slug}`,
    })),
    ...RESIDENTIAL_SERVICES.slice(0, 2).map(s => ({
      title: t[lang].residential.items.find(i => i.icon === s.icon)?.name ?? s.shortTitle,
      href: '/residential',
    })),
    { title: t[lang].marine.title1 + ' ' + t[lang].marine.title2, href: '/marine' },
  ]

  return (
    <>
      <style>{`
        .footer-link { color: var(--text-muted); transition: color 0.2s; }
        .footer-link:hover { color: var(--red); }
        .social-btn {
          border-color: var(--border); color: var(--text-muted);
          transition: color 0.2s, border-color 0.2s;
        }
        .social-btn:hover { color: var(--red); border-color: var(--red); }
      `}</style>

      <footer id="site-footer" style={{ background: 'var(--footer-bg)', borderColor: 'var(--border)' }} className="border-t">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* ── Brand ── */}
            <div>
              {/* Logo — same treatment as Navbar */}
              <Link href="/" className="flex items-center gap-1.5 mb-4 group w-fit">
                <span style={{
                  color: 'var(--red)',
                  fontWeight: 800,
                  fontSize: '1.4rem',
                  fontFamily: 'var(--font-bebas)',
                  letterSpacing: '0.05em',
                  lineHeight: 1,
                }}>
                  3M
                </span>
                <Image
                  src="/images/log-ourcar.png"
                  alt="OURCAR"
                  width={90}
                  height={24}
                  className="h-6 w-auto object-contain transition-opacity group-hover:opacity-80"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    img.style.display = 'none'
                    const sib = img.nextElementSibling as HTMLElement | null
                    if (sib) sib.style.display = 'inline'
                  }}
                />
                <span style={{
                  display: 'none',
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '1.4rem',
                  letterSpacing: '0.1em',
                  color: 'var(--text-main)',
                  lineHeight: 1,
                }}>
                  OURCAR
                </span>
              </Link>

              <p className="text-sm font-light leading-relaxed max-w-xs" style={{ color: 'var(--text-muted)' }}>
                {tr.desc}
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 mt-6">
                {[
                  {
                    href: COMPANY.instagram, label: 'Instagram',
                    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
                  },
                  {
                    href: COMPANY.facebook, label: 'Facebook',
                    icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
                  },
                  {
                    href: COMPANY.tiktok, label: 'TikTok',
                    icon: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />,
                  },
                ].map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn w-9 h-9 border flex items-center justify-center"
                    aria-label={label}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">{icon}</svg>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Services ── */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--text-main)' }}>
                {tr.servicesTitle}
              </h4>
              <ul className="space-y-2.5">
                {allServices.slice(0, 7).map((s) => (
                  <li key={s.href + s.title}>
                    <Link href={s.href} className="footer-link text-sm">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Locations ── */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--text-main)' }}>
                {tr.locationsTitle}
              </h4>
              <ul className="space-y-2.5">
                {MALL_LOCATIONS.map((loc) => (
                  <li key={loc.name}>
                    <Link href="/contact" className="footer-link text-sm">
                      {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Quick Links + Contact ── */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--text-main)' }}>
                {tr.quickLinksTitle}
              </h4>
              <ul className="space-y-2.5 mb-8">
                {tr.quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer-link text-sm">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--text-main)' }}>
                {tr.contactTitle}
              </h4>
              <a href={`tel:${COMPANY.phone}`} className="footer-link text-sm block">{COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`} className="footer-link text-sm mt-1 block">{COMPANY.email}</a>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div
            className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderColor: 'var(--border)' }}
          >
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} {tr.copyright}
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--red)' }}>
              Dubai · Abu Dhabi
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
