'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export type CarouselItem = {
  src: string
  alt: string
}

export function MediaCarousel({
  items,
  aspectRatio = '16/9',
  autoPlay = false,
  intervalMs = 3500,
  showThumbnails = false,
  className,
}: {
  items: CarouselItem[]
  aspectRatio?: string
  autoPlay?: boolean
  intervalMs?: number
  showThumbnails?: boolean
  className?: string
}) {
  const safeItems = useMemo(() => items.filter(Boolean), [items])
  const total = safeItems.length
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!autoPlay || total <= 1) return
    const id = window.setInterval(() => setIdx((i) => (i + 1) % total), intervalMs)
    return () => window.clearInterval(id)
  }, [autoPlay, intervalMs, total])

  const active = safeItems[idx]
  if (!active) return null

  function prev() {
    setIdx((i) => (i - 1 + total) % total)
  }

  function next() {
    setIdx((i) => (i + 1) % total)
  }

  return (
    <div className={cn('border overflow-hidden', className)} style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="relative w-full" style={{ aspectRatio }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Image src={active.src} alt={active.alt} fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0.35))' }} />
          </motion.div>
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 border backdrop-blur-sm"
              style={{ borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(0,0,0,0.35)', color: 'white' }}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 border backdrop-blur-sm"
              style={{ borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(0,0,0,0.35)', color: 'white' }}
              aria-label="Next"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {safeItems.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  className="w-2.5 h-2.5 rounded-full border"
                  style={{
                    borderColor: 'rgba(255,255,255,0.55)',
                    background: i === idx ? 'white' : 'rgba(255,255,255,0.15)',
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {(showThumbnails && total > 1) && (
        <div className="p-3 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {safeItems.slice(0, 12).map((it, i) => (
              <button
                key={it.src}
                type="button"
                onClick={() => setIdx(i)}
                className="relative border overflow-hidden"
                style={{ aspectRatio: '4/3', borderColor: i === idx ? 'var(--red)' : 'var(--border)' }}
                aria-label={`Select ${it.alt}`}
              >
                <Image src={it.src} alt={it.alt} fill className="object-cover" sizes="(min-width: 768px) 12vw, 20vw" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

