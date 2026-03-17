'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { COMPANY, TESTIMONIALS } from '@/lib/constants'
import { getWhatsAppUrl } from '@/lib/utils'
import { TestimonialCard } from '@/components/ui'

type Slide = { src: string; alt: string }

function ImageSlider({ slides }: { slides: Slide[] }) {
  const [idx, setIdx] = useState(0)

  const total = slides.length
  const active = slides[idx]

  useEffect(() => {
    if (total <= 1) return
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % total)
    }, 1200)
    return () => window.clearInterval(id)
  }, [total])

  return (
    <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
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

export function SafetySecurityClient() {
  const { lang } = useApp()
  const isAr = lang === 'ar'

  const waUrl = useMemo(() => {
    const msg = isAr
      ? 'مرحباً! أود حجز تركيب فيلم 3M™ للسلامة والحماية.'
      : 'Hello! I would like to book 3M™ Safety & Security Window Film installation.'
    return getWhatsAppUrl(COMPANY.whatsapp, msg)
  }, [isAr])

  const sliderSlides: Slide[] = [
    { src: '/images/residential/safety-security-1.jpg', alt: '3M safety and security window film UAE – installation 1' },
    { src: '/images/residential/safety-security-2.jpg', alt: '3M safety and security window film UAE – installation 2' },
    { src: '/images/residential/safety-security-3.jpg', alt: '3M safety and security window film UAE – installation 3' },
    { src: '/images/residential/safety-security-4.jpg', alt: '3M safety and security window film UAE – installation 4' },
  ]

  const safetyTestimonials = useMemo(() => {
    const filtered = TESTIMONIALS.filter((t) => (t.service || '').toLowerCase().includes('safety'))
    return (filtered.length ? filtered : TESTIMONIALS).slice(0, 6)
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16" style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#0a0f1a 60%,var(--bg-page) 100%)' }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 20px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[3px] uppercase mb-4" style={{ color: 'var(--red)' }}>
                Residential & Commercial — UAE
              </p>
              <h1 className="font-heading leading-none tracking-wide mb-5" style={{ fontSize: 'clamp(2.4rem,5.5vw,4.8rem)', color: 'var(--text-main)' }}>
                3M™ Safety &amp; Security Window Film in UAE – Installed by 3M OUR CAR
              </h1>

              <div className="lg:hidden mb-8">
                <ImageSlider slides={sliderSlides} />
              </div>

              <p className="text-sm font-light leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                Protect your home, villa, office, or commercial space with 3M™ Safety &amp; Security Window Films installed by 3M OUR CAR, the UAE’s trusted 3M‑certified dealer &amp; applicator since 2006. Whether you searched for safety window film Dubai, security window film UAE, 3M safety film Dubai, anti‑shatter film UAE, or glass protection film Abu Dhabi — you’re in the right place.
              </p>
              <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                3M OUR CAR reinforces your glass with advanced, tear‑resistant, shatter‑proof protection engineered to keep your family, staff, and property safe.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact?type=booking" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block" style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}>
                  Book Safety Film Installation
                </Link>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block border" style={{ borderColor: 'var(--border)', color: 'var(--text-main)', borderRadius: '4px' }}>
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <ImageSlider slides={sliderSlides} />
            </div>
          </div>
        </div>
      </section>

      {/* Why UAE needs */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle
              title="Why UAE Properties Need 3M™ Safety & Security Films"
              subtitle="The UAE’s architecture relies heavily on glass — beautiful, modern, but vulnerable. Break‑ins, accidental impacts, storms, and flying debris can turn ordinary glass into a major safety risk."
            />
            <p className="text-sm font-light leading-relaxed mt-6" style={{ color: 'var(--text-muted)' }}>
              3M OUR CAR installs genuine 3M™ Safety &amp; Security Films that help:
            </p>
            <BulletList
              items={[
                'Prevent smash‑and‑grab break‑ins',
                'Hold shattered glass together',
                'Reduce injury from accidental impacts',
                'Protect interiors from harmful UV rays',
                'Strengthen weak entry points in villas, apartments, offices, and retail stores',
              ]}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?type=quote" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block" style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}>
                Get a Free On‑Site Assessment
              </Link>
            </div>
          </div>

          <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="relative" style={{ aspectRatio: '16/9' }}>
              <Image
                src="/images/residential/safety-security-break.jpg"
                alt="Glass breaking but held together by 3M safety film"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="relative" style={{ aspectRatio: '16/10' }}>
              <Image
                src="/images/residential/safety-security-team.jpg"
                alt="3M OUR CAR technicians installing 3M safety and security film"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <div>
            <SectionTitle title="Why Choose 3M OUR CAR – UAE’s Official 3M™ Dealer Since 2006" />
            <p className="text-sm font-light leading-relaxed mt-6" style={{ color: 'var(--text-muted)' }}>
              For nearly 20 years, 3M OUR CAR has been the UAE’s leading provider of genuine 3M™ Safety &amp; Security Films. As official 3M™ partners, we guarantee:
            </p>
            <BulletList
              items={[
                'Authentic 3M™ Ultra Safety & Security Films',
                'Micro‑layered tear‑resistant technology',
                'Superior impact resistance',
                'Break‑in delay performance',
                'UV protection up to 98%',
                'Blast mitigation capabilities',
                'Professional installation by trained 3M OUR CAR technicians',
                'Long‑term warranty and after‑sales support',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle kicker="Premium Solutions" title="Premium 3M™ Safety & Security Film Solutions" />

          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <h3 className="font-heading text-2xl tracking-wide mb-4" style={{ color: 'var(--text-main)' }}>
                1. Break‑In Protection – Deter Intruders &amp; Smash‑and‑Grab Attempts
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                3M™ Safety &amp; Security Film is engineered to delay forced entry, giving you more time to react, for alarms to trigger, and for intruders to give up. The film holds shattered glass in place, preventing quick access.
              </p>
              <p className="text-sm font-light leading-relaxed mt-4" style={{ color: 'var(--text-muted)' }}>
                Ideal for: villas, apartments, retail stores, offices, warehouses, and shopfronts.
              </p>
            </div>

            <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="relative" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/images/residential/safety-security-intruder.jpg"
                  alt="Intruder attempting to break glass but safety film holds it together"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              {
                title: '2. Protection From Severe Weather & Storm Damage',
                desc: 'The film helps hold glass fragments together during storms, high winds, and flying debris — reducing the risk of injury and property damage.',
              },
              {
                title: '3. Safety Against Accidental Injury',
                desc: 'Perfect for homes with children, pets, or high‑traffic areas. The film reduces injury risk from slamming doors, accidental impacts, and broken glass.',
              },
              {
                title: '4. UV Protection & Fade Reduction',
                desc: '3M™ Safety Film blocks up to 98% of harmful UV rays, helping protect furniture, curtains, flooring, artwork, and retail displays.',
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
        </div>
      </section>

      {/* Film options */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="3M™ Safety & Security Film Options" />

          <div className="border overflow-hidden mt-10" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="relative" style={{ aspectRatio: '16/6' }}>
              <Image
                src="/images/residential/safety-security-comparison.jpg"
                alt="Comparison graphic of Safety, Ultra, and Ultra Prestige films"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              {
                title: 'Safety Series – Essential Protection',
                items: ['7–8 mil polyester construction', 'Strong adhesive to hold broken glass', 'Clear or tinted options'],
              },
              {
                title: 'Ultra Series – Advanced Tear‑Resistant Protection',
                items: ['Micro‑layered tear‑resistant technology', 'Superior impact and blast performance', 'Clear or sun‑control tinted options'],
              },
              {
                title: 'Ultra Prestige Series – Ultimate Safety + Heat Rejection',
                items: ['Combines Ultra Safety Film + Prestige Sun Control Film', 'Allows up to 70% visible light', 'Rejects up to 60% heat and 97% infrared rays'],
              },
            ].map((card) => (
              <div key={card.title} className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="font-condensed text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--text-main)' }}>
                  {card.title}
                </h3>
                <BulletList items={card.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle title="Installation Coverage Across UAE" subtitle="3M OUR CAR provides professional on‑site installation across Dubai, Abu Dhabi, and the UAE." />
            <div className="mt-8 grid gap-5">
              <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="font-condensed text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--text-main)' }}>
                  Dubai Locations
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Mirdif City Centre, Deira City Centre, Burjuman Mall, Dubai Mall, Mall of the Emirates, Dubai Marina Mall, Ibn Battuta Mall, Circle Mall JVC
                </p>
              </div>
              <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="font-condensed text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--text-main)' }}>
                  Abu Dhabi
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Al Wahda Mall
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?type=booking" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block" style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}>
                Book Safety Film Installation
              </Link>
            </div>
          </div>

          <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="relative" style={{ aspectRatio: '16/10' }}>
              <Image src="/images/residential/safety-security-map.jpg" alt="Map of UAE with service coverage" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Why Customers Choose 3M OUR CAR" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              'Official 3M™ Safety Film Installers',
              '20 Years of Experience',
              'Professional On‑Site Installation',
              'Break‑In & Impact Protection',
              'UV Protection Up to 98%',
              'Heat Rejection Up to 60%',
              'Long‑Term Warranty',
              'Fast, Clean & Hassle‑Free Service',
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
              Book Safety Film Installation
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Customer Testimonials" subtitle="Real customer reviews will be placed here." />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyTestimonials.map((tm) => (
              <TestimonialCard
                key={`${tm.name}-${tm.location}-${tm.text.slice(0, 24)}`}
                name={tm.name}
                location={tm.location}
                rating={tm.rating}
                text={tm.text}
                service={tm.service}
              />
            ))}
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
                q: 'Does safety film prevent break‑ins?',
                a: 'It significantly delays forced entry. The glass may crack, but the film holds it together, making it much harder and slower for intruders to get inside.',
              },
              { q: 'Is the film visible?', a: 'Most 3M™ safety films are clear and almost invisible once installed.' },
              { q: 'Does it protect against storms?', a: 'Yes. It helps hold the glass together during storms, high winds, and flying debris.' },
              { q: 'Does it block UV rays?', a: 'Yes — up to 98% UV protection.' },
              { q: 'How long does installation take?', a: 'Typically 1 to 3 hours, depending on window size and quantity.' },
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
            Ready to Protect Your Home or Business?
          </h2>
          <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
            Choose the UAE’s trusted 3M‑certified experts — 3M OUR CAR.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?type=booking" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block" style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}>
              Book Now – Safety Film Installation
            </Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block border" style={{ borderColor: 'var(--border)', color: 'var(--text-main)', borderRadius: '4px' }}>
              WhatsApp Us for Instant Booking
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

