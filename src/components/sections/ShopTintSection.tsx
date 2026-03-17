'use client'
// src/components/sections/ShopTintSection.tsx
import { motion } from 'framer-motion'
import { SectionHeader, Button, ImagePlaceholder } from '@/components/ui'

const steps = [
  { num: '01', title: 'Drop & Go', desc: 'Leave your car with our certified technicians while you enjoy the mall' },
  { num: '02', title: 'Professional Install', desc: '3M certified team handles your vehicle with precision and care' },
  { num: '03', title: 'Drive Away Happy', desc: 'Return to a perfectly tinted car — no waiting around' },
]

export function ShopTintSection() {
  return (
    <section className="bg-[#141414] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="Ultimate Convenience"
            title={<>TINT YOUR CAR<br />WHILE YOU<br /><span className="text-[#C8102E]">SHOP</span></>}
            subtitle="Drop off your car, shop your favorite stores, and return to a professionally tinted vehicle. All our locations are inside premium malls across Dubai and Abu Dhabi."
          />
          <div className="mt-10 space-y-7">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-5 items-start">
                <div className="font-heading text-4xl text-[#C8102E] leading-none min-w-[3rem]">{num}</div>
                <div>
                  <strong className="block text-sm font-semibold text-[#F5F0E8] mb-1">{title}</strong>
                  <span className="text-xs text-[#888] font-light leading-relaxed">{desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact" size="lg">Book Your Slot</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <ImagePlaceholder label="Mall Location / Installation Video" aspectRatio="aspect-video" className="w-full" />
          <div className="grid grid-cols-2 gap-3 mt-3">
            <ImagePlaceholder label="Technician at Work" aspectRatio="aspect-square" />
            <ImagePlaceholder label="Finished Result" aspectRatio="aspect-square" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
