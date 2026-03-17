'use client'
// src/components/sections/ServiceHero.tsx
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ServiceHeroProps {
  category: string
  title: React.ReactNode
  backHref?: string
  backLabel?: string
  bgStyle?: 'default' | 'blue' | 'marine'
}

export function ServiceHero({
  category,
  title,
  backHref,
  backLabel = 'Back',
  bgStyle = 'default',
}: ServiceHeroProps) {
  const bgMap = {
    default: 'bg-[#0A0A0A]',
    blue: 'bg-[#0a0f1a]',
    marine: '',
  }

  return (
    <section
      className={`relative min-h-[52vh] flex items-end pb-16 pt-32 px-6 overflow-hidden ${bgMap[bgStyle]}`}
      style={bgStyle === 'marine' ? { background: 'linear-gradient(135deg, #040d1a 0%, #0a0a0a 100%)' } : undefined}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C8102E 0, #C8102E 1px, transparent 0, transparent 30px)',
          backgroundSize: '30px 30px',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {backHref && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-xs text-[#888] hover:text-[#C8102E] tracking-widest uppercase mb-6 transition-colors"
            >
              ← {backLabel}
            </Link>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-[#C8102E] text-xs font-semibold tracking-[3px] uppercase mb-4">{category}</p>
          <h1 className="font-heading text-[clamp(3rem,7vw,6.5rem)] leading-none tracking-wide text-[#F5F0E8]">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
