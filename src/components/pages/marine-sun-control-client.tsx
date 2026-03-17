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

export function MarineSunControlClient() {
  const { lang } = useApp()
  const isAr = lang === 'ar'

  const waUrl = useMemo(() => {
    const msg = isAr
      ? 'مرحباً! أود حجز خدمة تظليل نوافذ اليخوت/القوارب بأفلام 3M™ البحرية للتحكم بالشمس.'
      : 'Hello! I would like to book 3M™ Marine Sun Control Window Film tinting for my yacht/boat in UAE.'
    return getWhatsAppUrl(COMPANY.whatsapp, msg)
  }, [isAr])

  const sliderSlides: Slide[] = [
    { src: '/images/marine/marine-sun-control-1.jpg', alt: '3M marine window tinting UAE – yacht cabin 1' },
    { src: '/images/marine/marine-sun-control-2.jpg', alt: '3M marine sun control film UAE – yacht cabin 2' },
    { src: '/images/marine/marine-sun-control-3.jpg', alt: '3M marine tint UAE – glare reduction 3' },
    { src: '/images/marine/marine-sun-control-4.jpg', alt: '3M marine tint UAE – exterior view 4' },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16" style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#001a2a 60%,var(--bg-page) 100%)' }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 20px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="font-heading leading-none tracking-wide mb-6" style={{ fontSize: 'clamp(2.4rem,5.5vw,4.8rem)', color: 'var(--text-main)' }}>
                Marine Window Tinting in UAE – Premium 3M™ Marine Sun Control Films by 3M OUR CAR
              </h1>

              <div className="lg:hidden mb-8">
                <AutoSlider slides={sliderSlides} />
              </div>

              <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Experience cooler cabins, safer navigation, and long‑lasting protection with 3M OUR CAR, the UAE’s trusted 3M™‑certified marine tinting specialists since 2006.
              </p>

              <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h2 className="font-heading text-2xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>
                  Protect Your Yacht or Boat With Professional Marine Window Tinting
                </h2>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Dubai and Abu Dhabi waters are beautiful — but the sun is intense. Heat, glare, UV rays, and interior fading can quickly damage your vessel and reduce comfort on board. 3M OUR CAR installs genuine 3M™ Marine Sun Control Films engineered specifically for harsh marine environments.
                </p>
                <p className="text-sm font-light leading-relaxed mt-4" style={{ color: 'var(--text-muted)' }}>
                  What you get:
                </p>
                <BulletList
                  items={[
                    'Maximum heat rejection',
                    'Up to 99.9% UV protection (SPF 1000 equivalent)',
                    'Glare reduction for safer navigation',
                    'Electronics‑safe, non‑metallic tint',
                    'Enhanced privacy and premium aesthetics',
                  ]}
                />
                <p className="text-sm font-light leading-relaxed mt-4" style={{ color: 'var(--text-muted)' }}>
                  Whether you own a yacht, superyacht, speedboat, fishing boat, or commercial vessel, our marine tinting solutions keep your interiors cool, protected, and stylish.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact?type=booking" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block" style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}>
                  Book Marine Tinting Service
                </Link>
                <WhatsAppCta href={waUrl} label="WhatsApp Us for Instant Booking" />
              </div>
            </div>

            <div className="hidden lg:block">
              <AutoSlider slides={sliderSlides} />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="relative" style={{ aspectRatio: '16/10' }}>
              <Image
                src="/images/marine/marine-sun-control-5.jpg"
                alt="3M-certified technicians tinting a yacht window"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <div>
            <SectionTitle title="Why Yacht Owners Choose 3M OUR CAR" />
            <p className="text-sm font-light leading-relaxed mt-6" style={{ color: 'var(--text-muted)' }}>
              As official 3M™ dealers and marine tinting experts since 2006, we use only premium, marine‑grade 3M films designed for:
            </p>
            <BulletList
              items={[
                'Extreme UV exposure',
                'Saltwater environments',
                'High temperatures',
                'Marine electronics compatibility',
                'Insulated & impact‑resistant glass',
              ]}
            />

            <p className="text-sm font-light leading-relaxed mt-6" style={{ color: 'var(--text-muted)' }}>
              Our marine tinting team works on:
            </p>
            <BulletList items={['Yachts & superyachts', 'Speedboats', 'Fishing boats', 'Commercial vessels']} />

            <p className="text-sm font-light leading-relaxed mt-6" style={{ color: 'var(--text-muted)' }}>
              We tint at all major marinas:
            </p>
            <BulletList items={['Dubai Marina', 'Jumeirah', 'Palm Jumeirah', 'Yas Marina', 'Abu Dhabi Corniche', 'Private docks & berths']} />

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?type=quote" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block" style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}>
                Get a Free Marine Tinting Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle kicker="Premium Solutions" title="Premium Marine Tinting Solutions by 3M OUR CAR" />

          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <h3 className="font-heading text-2xl tracking-wide mb-4" style={{ color: 'var(--text-main)' }}>
                1. Heat Rejection – Stay Cool on the Water
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Marine cabins heat up fast under the UAE sun. Our 3M™ marine films block up to 97% infrared heat, reduce cabin temperature, improve comfort in wheelhouses & sky lounges, and reduce AC load and fuel consumption.
              </p>
              <BulletList items={['Block up to 97% infrared heat', 'Reduce cabin temperature', 'Improve comfort in wheelhouses & sky lounges', 'Reduce AC load and fuel consumption']} />
            </div>
            <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="relative" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/images/marine/marine-sun-control-6.jpg"
                  alt="Heat rejection comparison graphic"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {[
              {
                title: '2. UV Protection – SPF 1000 for You & Your Interiors',
                desc: '3M™ marine films block up to 99.9% UV rays, protecting leather seating, wood finishes, electronics, upholstery, and navigation equipment.',
              },
              {
                title: '3. Glare Reduction – Safer Navigation',
                desc: 'Reduce glare on navigation screens, LED displays, windshields, and side windows for safer boating and comfort.',
              },
              {
                title: '4. Electronics‑Safe, Non‑Metallic Tint',
                desc: 'Marine vessels rely on GPS, radar, VHF radios, Wi‑Fi, and navigation systems. Our non‑metallic films block the sun — not your signal.',
              },
              {
                title: '5. Privacy & Aesthetic Enhancement',
                desc: 'Choose from light tints, medium tints, dark privacy tints, reflective marine films, and dual‑reflective films.',
              },
              {
                title: '6. Impact & Breakage Protection',
                desc: 'Our films help protect against accidental glass breakage, flying debris, harsh weather impact, and forced entry delays (piracy protection).',
              },
            ].map((c) => (
              <div key={c.title} className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="font-condensed text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--text-main)' }}>
                  {c.title}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-6">
            <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="relative" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/images/marine/marine-sun-control-7.jpg"
                  alt="Navigation screen before and after glare reduction"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="relative" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/images/marine/marine-sun-control-8.jpg"
                  alt="Premium marine tint privacy and aesthetic finish"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle title="Marine Tinting Across Dubai & Abu Dhabi" />
            <div className="mt-8 grid gap-5">
              <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="font-condensed text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--text-main)' }}>
                  Dubai Marine Tinting Locations
                </h3>
                <BulletList items={['Dubai Marina', 'Jumeirah Beach', 'Palm Jumeirah', 'JBR', 'Dubai Harbour', 'Umm Suqeim Fishing Harbour', 'Jumeirah 1 Marina']} />
              </div>
              <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="font-condensed text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--text-main)' }}>
                  Abu Dhabi Marine Tinting Locations
                </h3>
                <BulletList items={['Yas Marina', 'Al Bateen Marina', 'Abu Dhabi Corniche', 'Saadiyat Island', 'Al Raha Beach']} />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?type=booking" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block" style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}>
                Book Marine Tinting Service
              </Link>
            </div>
          </div>

          <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="relative" style={{ aspectRatio: '16/10' }}>
              <Image
                src="/images/marine/marine-sun-control-map.jpg"
                alt="Map of Dubai & Abu Dhabi showing marine service coverage"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Why Yacht Owners Trust 3M OUR CAR" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              'Official 3M™ Marine Tint Installers',
              '20 Years of Experience',
              'Electronics‑Safe, Non‑Metallic Films',
              'SPF 1000 UV Protection',
              'Heat Rejection Up to 97%',
              'Premium Aesthetic Finish',
              'Fast, Clean, Professional Installation',
              'Long‑Term Warranty',
            ].map((v) => (
              <div key={v} className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>
                  {v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact?type=booking" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block" style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}>
              Book Marine Tinting Service
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials (provided) */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="⭐ Customer Testimonials" />
          <div className="mt-10 grid lg:grid-cols-3 gap-4 items-start">
            <div className="border overflow-hidden lg:col-span-1" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="relative" style={{ aspectRatio: '16/10' }}>
                <Image src="/images/marine/marine-sun-control-9.jpg" alt="Yacht owners giving reviews" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
            </div>
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-main)' }}>
                “3M OUR CAR tinted our 72ft yacht at Dubai Marina — the cabin temperature difference is unbelievable.”
              </p>
            </div>
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-main)' }}>
                “Professional, fast, and the tint looks stunning. Highly recommended for yacht owners.”
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
              { q: 'Does marine tint affect GPS or radar?', a: 'No. Our 3M™ marine films are non‑metallic and electronics‑safe.' },
              { q: 'How much heat does marine tint block?', a: 'Up to 97% infrared heat and 99.9% UV rays.' },
              { q: 'Is marine tint safe for insulated or impact‑resistant glass?', a: 'Yes. We use films designed specifically for marine‑grade glass.' },
              { q: 'How long does installation take?', a: 'Most vessels take 1–3 hours.' },
              { q: 'Do you tint yachts at marinas?', a: 'Yes — we offer on‑site marine tinting across the UAE.' },
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
            Ready to Protect Your Yacht or Boat?
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?type=booking" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block" style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}>
              Book Now – Marine Tinting Service
            </Link>
            <WhatsAppCta href={waUrl} label="WhatsApp Us for Instant Booking" />
          </div>
        </div>
      </section>
    </>
  )
}

