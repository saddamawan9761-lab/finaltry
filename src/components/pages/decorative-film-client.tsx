'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { COMPANY } from '@/lib/constants'
import { getWhatsAppUrl } from '@/lib/utils'

type Slide = { src: string; alt: string }

function AutoSlider({ slides }: { slides: Slide[] }) {
  const [idx, setIdx] = useState(0)
  const total = slides.length
  const active = slides[idx]

  useEffect(() => {
    if (total <= 1) return
    const id = window.setInterval(() => setIdx((i) => (i + 1) % total), 1200)
    return () => window.clearInterval(id)
  }, [total])

  return (
    <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <Image key={active.src} src={active.src} alt={active.alt} fill className="object-cover" sizes="100vw" priority />
      </div>
      <div className="flex items-center justify-end px-4 py-3">
        <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }} aria-label="Slide position">
          {idx + 1} / {total}
        </div>
      </div>
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm font-light leading-relaxed">
          <span aria-hidden className="mt-1.5 w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--red)' }} />
          <span style={{ color: 'var(--text-muted)' }}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
}) {
  return (
    <div className="max-w-3xl">
      {kicker && (
        <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
          {kicker}
        </p>
      )}
      <h2 className="font-heading leading-none tracking-wide mb-3" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

function WhatsAppCta({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-flex items-center justify-center"
      style={{ background: '#25D366', color: 'white', borderRadius: '4px' }}
    >
      {label}
    </a>
  )
}

export function DecorativeFilmClient() {
  const { lang } = useApp()
  const isAr = lang === 'ar'

  const waUrl = useMemo(() => {
    const msg = isAr
      ? 'مرحباً! أود الحصول على عرض سعر لفيلم 3M™ الزخرفي (Fasara) وتركيب في الإمارات.'
      : 'Hello! I would like an instant quote for 3M™ Decorative (Fasara) Window Film installation in UAE.'
    return getWhatsAppUrl(COMPANY.whatsapp, msg)
  }, [isAr])

  const sliderSlides: Slide[] = [
    { src: '/images/residential/decorative-film-1.jpg', alt: '3M decorative film UAE – design 1' },
    { src: '/images/residential/decorative-film-2.jpg', alt: '3M decorative film UAE – design 2' },
    { src: '/images/residential/decorative-film-3.jpg', alt: '3M decorative film UAE – design 3' },
    { src: '/images/residential/decorative-film-4.jpg', alt: '3M decorative film UAE – design 4' },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16" style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#0a0f1a 60%,var(--bg-page) 100%)' }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 20px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2.4rem,5.5vw,4.8rem)', color: 'var(--text-main)' }}>
                3M™ Decorative Window Film in UAE – Frosted, Patterned &amp; Custom Glass Designs
              </h1>
              <p className="text-xs font-semibold tracking-[3px] uppercase mb-8" style={{ color: 'var(--red)' }}>
                Installed by 3M OUR CAR – UAE’s Official 3M™ Partner Since 2006
              </p>

              <div className="lg:hidden mb-8">
                <AutoSlider slides={sliderSlides} />
              </div>

              <div className="border overflow-hidden mb-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="relative" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src="/images/residential/decorative-film-5.jpg"
                    alt="Modern office meeting room with frosted 3M decorative film"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                </div>
              </div>

              <p className="text-sm font-light leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                Transform any glass surface with premium 3M™ Decorative Window Films—the elegant, modern way to enhance privacy, elevate interior design, and achieve a high‑end aesthetic without replacing the glass.
              </p>
              <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                Whether you’re upgrading an office, hotel, restaurant, clinic, or villa, 3M OUR CAR delivers expert installation backed by 20 years of certified 3M experience.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact?type=booking" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block" style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}>
                  Book Decorative Film Installation
                </Link>
                <WhatsAppCta href={waUrl} label="WhatsApp Us for Instant Quote" />
              </div>
            </div>

            <div className="hidden lg:block space-y-6">
              <AutoSlider slides={sliderSlides} />
              <div className="grid grid-cols-2 gap-4">
                {[6, 7].map((n) => (
                  <div key={n} className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                    <div className="relative" style={{ aspectRatio: '4/3' }}>
                      <Image
                        src={`/images/residential/decorative-film-${n}.jpg`}
                        alt={`3M decorative film UAE – example ${n}`}
                        fill
                        className="object-cover"
                        sizes="25vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle
              title="Why Choose 3M OUR CAR for Decorative Window Films in the UAE?"
              subtitle="As the UAE’s leading 3M™ Certified Dealer & Applicator, 3M OUR CAR provides the full range of 3M™ Fasara Decorative Films—over 50+ premium designs including frosted, patterned, textured, gradient, etched, and custom‑cut options. Our specialists work closely with you to match your brand identity, interior style, and privacy requirements."
            />

            <SectionTitle kicker="What Makes Us Trusted" title="What Makes Us the UAE’s Trusted Decorative Film Experts" />
            <BulletList
              items={[
                'Official 3M™ Decorative Film Installers',
                '20+ Years of Experience',
                '50+ Fasara Designs Available',
                'Custom Branding & Design Options',
                'Fast, Clean, Professional Installation',
                'Long‑Lasting, Premium Aesthetic',
                'Ideal for Homes & Commercial Spaces',
              ]}
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?type=quote" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block" style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}>
                Get a Free Design Consultation
              </Link>
            </div>
          </div>

          <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="relative" style={{ aspectRatio: '16/10' }}>
              <Image
                src="/images/residential/decorative-film-8.jpg"
                alt="Close-up of 3M Fasara decorative film texture"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle kicker="Premium Solutions" title="Premium Decorative Film Solutions by 3M OUR CAR" />

          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <h3 className="font-heading text-2xl tracking-wide mb-4" style={{ color: 'var(--text-main)' }}>
                1. Frosted Glass Film – Elegant Privacy Without Blocking Light
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                A modern, clean solution for full privacy while maintaining natural light. Perfect for office meeting rooms, bathrooms, villas &amp; apartments, clinics, and retail stores.
              </p>

              <p className="text-sm font-light leading-relaxed mt-5" style={{ color: 'var(--text-muted)' }}>
                Benefits of 3M Frosted Film:
              </p>
              <BulletList
                items={[
                  'Provides day & night privacy',
                  'Smooth, elegant finish',
                  'Cost‑effective alternative to sandblasting',
                  'Removable without damaging glass',
                ]}
              />
            </div>

            <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="relative" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/images/residential/decorative-film-6.jpg"
                  alt="Frosted film on office meeting room glass"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <h3 className="font-heading text-xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>
                2. Patterned &amp; Textured Films – Add Style &amp; Personality
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Choose from a wide range of designs including lines, dots, waves, geometric patterns, gradient fades, and Japanese‑inspired 3M Fasara designs. These films instantly elevate the look of any interior space.
              </p>
            </div>

            <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <h3 className="font-heading text-xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>
                3. Custom‑Designed Decorative Films – Your Vision, Our Craftsmanship
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                3M OUR CAR specializes in custom glass film designs, including company logos, branding elements, privacy bands, custom patterns, full‑glass artwork, and unique interior design concepts—ideal for offices, hotels, restaurants, clinics, and luxury homes.
              </p>
            </div>

            <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <h3 className="font-heading text-xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>
                4. Office Privacy Films – Stylish, Functional, Professional
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Enhance privacy without compromising aesthetics—perfect for conference rooms, HR offices, executive cabins, co‑working spaces, and glass partitions.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-6">
            <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="relative" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/images/residential/decorative-film-7.jpg"
                  alt="Custom logo cut-out on office glass"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="relative" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/images/residential/decorative-film-9.jpg"
                  alt="Villa staircase glass with decorative film"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <h3 className="font-heading text-2xl tracking-wide mb-4" style={{ color: 'var(--text-main)' }}>
              5. Decorative Films for Homes – Elegant, Affordable, Modern
            </h3>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Add a premium touch to your home interiors—bedrooms, living rooms, bathrooms, staircase glass, and villa entrances. A smart, affordable alternative to etched or sandblasted glass.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Why Decorative Film Is Better Than Sandblasting or Etching" />

          <div className="mt-10 overflow-x-auto border" style={{ borderColor: 'var(--border)' }}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {['Feature', '3M Decorative Film', 'Sandblasting/Etching'].map((h, i) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-semibold tracking-widest uppercase border-b"
                      style={{
                        background: i === 1 ? 'var(--red)' : 'var(--bg-card)',
                        color: i === 1 ? 'white' : 'var(--text-muted)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', 'Affordable', 'Expensive'],
                  ['Installation Time', '1–2 hours', 'Full-day process'],
                  ['Removable', 'Yes', 'No'],
                  ['Maintenance', 'Easy', 'Difficult'],
                  ['Design Options', '50+', 'Limited'],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className="px-4 py-3 border-b"
                        style={{
                          background: 'var(--bg-card)',
                          color: i === 0 ? 'var(--text-main)' : 'var(--text-muted)',
                          borderColor: 'var(--border)',
                          fontWeight: i === 0 ? 600 : 400,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?type=quote" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block border" style={{ borderColor: 'var(--border)', color: 'var(--text-main)', borderRadius: '4px' }}>
              See 3M Fasara Designs
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle title="Professional Installation Across Dubai & Abu Dhabi" subtitle="3M OUR CAR provides on‑site installation across the UAE, supported by our mall‑based branches." />

            <div className="mt-8 grid gap-5">
              <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="font-condensed text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--text-main)' }}>
                  Dubai Locations
                </h3>
                <BulletList
                  items={[
                    'Mirdif City Centre',
                    'Deira City Centre',
                    'Burjuman Mall',
                    'Dubai Mall',
                    'Mall of the Emirates',
                    'Dubai Marina Mall',
                    'Ibn Battuta Mall',
                    'Circle Mall JVC',
                  ]}
                />
              </div>
              <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="font-condensed text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--text-main)' }}>
                  Abu Dhabi
                </h3>
                <BulletList items={['Al Wahda Mall']} />
              </div>
            </div>
          </div>

          <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="relative" style={{ aspectRatio: '16/10' }}>
              <Image
                src="/images/residential/decorative-film-map.jpg"
                alt="Map of Dubai showing service coverage"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (as provided) */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="⭐ Customer Testimonials" />
          <div className="mt-10 grid lg:grid-cols-3 gap-4 items-start">
            <div className="border overflow-hidden lg:col-span-1" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="relative" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/images/residential/decorative-film-5.jpg"
                  alt="Office meeting room with frosted film"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
            </div>
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-main)' }}>
                “3M OUR CAR transformed our office partitions beautifully. Fast installation and premium quality.”
              </p>
              <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
                — Corporate Client, Dubai
              </p>
            </div>
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-main)' }}>
                “The frosted film in our villa looks stunning. Much better than replacing the glass.”
              </p>
              <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
                — Homeowner, Abu Dhabi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Frequently Asked Questions" />
          <div className="grid lg:grid-cols-2 gap-4 mt-10">
            {[
              {
                q: 'What is decorative window film?',
                a: 'A stylish film applied to glass to enhance privacy, design, and aesthetics—without replacing the glass.',
              },
              { q: 'Does decorative film block light?', a: 'Most 3M designs allow natural light while adding privacy and style.' },
              { q: 'Can I customize the design?', a: 'Yes. 3M OUR CAR offers custom patterns, logos, branding, and full‑glass artwork.' },
              { q: 'Is it suitable for homes?', a: 'Absolutely. Perfect for villas, apartments, and interior glass.' },
              { q: 'How long does installation take?', a: 'Most projects take 1–2 hours, depending on design and glass size.' },
            ].map((f) => (
              <div key={f.q} className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-main)' }}>
                  {f.q}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto border p-10" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            Ready to Transform Your Glass?
          </h2>
          <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
            Upgrade your home or office with premium 3M™ Decorative Window Film installed by 3M OUR CAR, the UAE’s trusted 3M‑certified experts.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?type=booking" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block" style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}>
              Book Now – Decorative Film Installation
            </Link>
            <WhatsAppCta href={waUrl} label="WhatsApp Us for Instant Booking" />
          </div>
        </div>
      </section>
    </>
  )
}

