// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Barlow, Barlow_Condensed, Cairo } from 'next/font/google'
import '@/styles/globals.css'
import { AppProvider } from '@/context/AppContext'
import { Navbar } from '@/components/layout/Navbar'
import { FloatingButtons } from '@/components/layout/FloatingButtons'
import { Footer } from '@/components/layout/Footer'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.3mourcar.com'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '3M OURCAR — Official 3M Authorized Dealer in Dubai & Abu Dhabi',
    template: '%s | 3M OURCAR',
  },
  description:
    'Official 3M authorized dealer since 2006. Professional window tinting, PPF, ceramic coating and automotive protection at 9 mall locations across Dubai & Abu Dhabi. Tint in 55 minutes while you shop!',
  keywords: [
    '3M window tinting Dubai',
    'car tinting Dubai mall',
    'PPF Dubai',
    'ceramic coating Dubai',
    'window film Abu Dhabi',
    '3M authorized dealer UAE',
    'car detailing Dubai',
    'paint protection film UAE',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: SITE_URL,
    siteName: '3M OURCAR',
    images: [{ url: '/images/og-image.svg', width: 1200, height: 630, alt: '3M OURCAR — Premium Automotive Services Dubai' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
  colorScheme: 'dark light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 'dark' class set by default — JS in AppContext will hydrate the saved preference
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <body className={`${bebas.variable} ${barlow.variable} ${barlowCondensed.variable} ${cairo.variable}`}>
        <AppProvider>
          <Navbar />
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:bg-[var(--bg-card)] focus:text-[var(--text-main)] focus:border focus:border-[var(--border)]"
          >
            Skip to content
          </a>
          <main id="content">{children}</main>
          <Footer />
          <FloatingButtons />
        </AppProvider>
      </body>
    </html>
  )
}
