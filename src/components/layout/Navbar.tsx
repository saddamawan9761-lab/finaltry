'use client'
// src/components/layout/Navbar.tsx — Step 1 Upgrade
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useApp } from '@/context/AppContext'
import { t } from '@/lib/translations'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const { lang, setLang, theme, toggleTheme, isRTL } = useApp()
  const tr = t[lang].nav

  const navLinks = [
    { label: tr.home,        href: '/' },
    { label: tr.automotive,  href: '/automotive' },
    { label: tr.residential, href: '/residential' },
    { label: tr.marine,      href: '/marine' },
    { label: tr.simulator,   href: '/simulator' },
    { label: tr.contact,     href: '/contact' },
  ]

  // ✅ FIX: Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close on Escape (mobile + desktop)
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <>
      <style>{`
        .nav-link { color: var(--text-muted); transition: color 0.2s; }
        .nav-link:hover { color: var(--text-main); }
        .nav-link.active { color: var(--red) !important; }
        .nav-cta {
          background: var(--red); color: white;
          border-radius: 4px;
          transition: background 0.2s, transform 0.15s;
        }
        .nav-cta:hover { background: var(--red-dark); transform: translateY(-1px); }
        .nav-icon-btn {
          color: var(--text-muted); border-color: var(--border); background: transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .nav-icon-btn:hover { color: var(--text-main); border-color: var(--red); }
        .mobile-link {
          color: var(--text-muted); border-color: var(--border);
          transition: color 0.2s, padding-left 0.2s;
          display: block;
        }
        .mobile-link:hover { color: var(--red); }
        .mobile-link.active { color: var(--red); }
      `}</style>

      <nav
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          borderColor: 'var(--border)',
        }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled && 'backdrop-blur-md border-b'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

          {/* ── Logo: bold red 3M + OURCAR image ── */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group" aria-label="3M OURCAR — Home">
            <span style={{
              color: 'var(--red)',
              fontWeight: 800,
              fontSize: '1.9rem',
              fontFamily: 'var(--font-bebas)',
              letterSpacing: '0.05em',
              lineHeight: 1,
            }}>
              3M
            </span>
            {/* OURCAR logo image — place file at /public/images/log-ourcar.png */}
            <Image
              src="/images/log-ourcar.png"
              alt="OURCAR"
              width={140}
              height={40}
              className="h-9 w-auto object-contain transition-opacity group-hover:opacity-80"
              priority
              onError={(e) => {
                // Graceful fallback if logo image not yet uploaded
                const img = e.currentTarget as HTMLImageElement
                img.style.display = 'none'
                const sib = img.nextElementSibling as HTMLElement | null
                if (sib) sib.style.display = 'inline'
              }}
            />
            {/* Text fallback — hidden until image errors */}
            <span style={{
              display: 'none',
              fontFamily: 'var(--font-bebas)',
              fontSize: '1.65rem',
              letterSpacing: '0.1em',
              color: 'var(--text-main)',
              lineHeight: 1,
            }}>
              OURCAR
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className={cn('hidden lg:flex items-center gap-6 flex-1 justify-center', isRTL && 'flex-row-reverse')}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'nav-link text-xs font-medium tracking-widest uppercase',
                    isRTL && 'tracking-normal font-semibold text-sm',
                    pathname === link.href && 'active'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Desktop Controls ── */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="nav-icon-btn w-9 h-9 flex items-center justify-center border rounded-sm"
            >
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"/>
                </svg>
              )}
            </button>

            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="nav-icon-btn h-9 px-3 border text-xs font-bold tracking-widest rounded-sm"
            >
              {t[lang].lang.switchTo}
            </button>

            <Link href="/contact" className="nav-cta text-xs font-semibold tracking-widest uppercase px-5 py-2.5 inline-block">
              {tr.bookNow}
            </Link>
          </div>

          {/* ── Mobile Controls ── */}
          <div className="lg:hidden flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="nav-icon-btn w-8 h-8 flex items-center justify-center">
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"/></svg>
              )}
            </button>

            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="nav-icon-btn text-xs font-bold px-2 py-1 border rounded-sm"
            >
              {t[lang].lang.switchTo}
            </button>

            {/* Animated hamburger */}
            <button
              className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 p-1"
              style={{ color: 'var(--text-main)', background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="block w-6 h-0.5 bg-current transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none' }} />
              <span className="block w-6 h-0.5 bg-current transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-6 h-0.5 bg-current transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* ── Mobile Menu — smooth slide down ── */}
        <div
          id="mobile-menu"
          className="lg:hidden border-t overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            background: 'var(--bg-page)',
            borderColor: 'var(--border)',
            maxHeight: menuOpen ? '480px' : '0px',
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <div className="px-6 py-5 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'mobile-link text-sm font-medium py-3.5 border-b',
                  isRTL && 'text-right',
                  pathname === link.href && 'active'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="nav-cta text-xs font-semibold tracking-widest uppercase px-5 py-3.5 text-center mt-4 block"
            >
              {tr.bookNow}
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
