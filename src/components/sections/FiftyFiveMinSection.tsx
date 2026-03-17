'use client'
// src/components/sections/FiftyFiveMinSection.tsx
import { motion } from 'framer-motion'
import Link from 'next/link'

export function FiftyFiveMinSection() {
  return (
    <section className="bg-[#C8102E] py-24 px-6 overflow-hidden relative">
      {/* Giant background number */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span className="font-heading text-[clamp(14rem,35vw,28rem)] leading-none text-white/10 tracking-tighter">
          55
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/60 text-xs font-semibold tracking-[4px] uppercase mb-4">
            Speed Meets Precision
          </p>
          <h2 className="font-heading text-[clamp(3rem,7vw,6rem)] leading-none tracking-wide text-white mb-5">
            TINTED IN<br />55 MINUTES
          </h2>
          <p className="text-white/75 text-base font-light leading-relaxed max-w-md mx-auto mb-10">
            No long waits. Our trained 3M certified specialists complete professional window film installation on most vehicles in just 55 minutes — without compromising quality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#C8102E] text-sm font-bold tracking-widest uppercase px-8 py-4 hover:bg-[#F5F0E8] transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/automotive"
              className="bg-transparent text-white border border-white/40 text-sm font-medium tracking-widest uppercase px-8 py-4 hover:border-white transition-colors"
            >
              See Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
