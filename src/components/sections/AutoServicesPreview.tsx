'use client'
// src/components/sections/AutoServicesPreview.tsx
import { motion } from 'framer-motion'
import { SectionHeader, ServiceCard } from '@/components/ui'
import { AUTOMOTIVE_SERVICES } from '@/lib/constants'
import { Button } from '@/components/ui'

export function AutoServicesPreview() {
  return (
    <section className="py-24 px-6 bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            label="What We Do"
            title={<>AUTOMOTIVE<br /><span className="text-[#C8102E]">SERVICES</span></>}
          />
          <Button href="/automotive" variant="outline">View All Services →</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {AUTOMOTIVE_SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <ServiceCard
                icon={s.icon}
                title={s.shortTitle}
                description={s.description}
                href={`/automotive/${s.slug}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
