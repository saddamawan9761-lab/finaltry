'use client'

import Image from 'next/image'
import { MediaCarousel } from '@/components/ui/MediaCarousel'

type MediaItem = { src: string; alt: string }

export function SplitMediaSection({
  label,
  title,
  description,
  bullets,
  mediaItems,
  singleImage,
  reverse = false,
  autoPlayMs = 2200,
}: {
  label?: string
  title: string
  description?: string
  bullets?: string[]
  mediaItems?: MediaItem[]
  singleImage?: MediaItem
  reverse?: boolean
  autoPlayMs?: number
}) {
  return (
    <section className="py-16 px-6" style={{ background: 'var(--bg-page)' }}>
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <div>
          {label && (
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
              {label}
            </p>
          )}
          <h3 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: 'var(--text-main)' }}>
            {title}
          </h3>
          {description && (
            <p className="text-sm font-light leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
              {description}
            </p>
          )}
          {bullets && bullets.length > 0 && (
            <div className="space-y-2">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-main)' }}>
                  <span style={{ color: 'var(--red)' }}>•</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {mediaItems && mediaItems.length > 1 ? (
            <MediaCarousel items={mediaItems} aspectRatio="16/9" autoPlay intervalMs={autoPlayMs} />
          ) : singleImage ? (
            <div className="relative border overflow-hidden" style={{ aspectRatio: '16/9', borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
              <Image src={singleImage.src} alt={singleImage.alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

