// src/app/contact/page.tsx
import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { ContactSidebar } from '@/components/sections/ContactSidebar'

export const metadata: Metadata = {
  title: 'Contact & Book | 3M OURCAR — Dubai & Abu Dhabi',
  description: 'Book your tinting appointment or get a free quote at any of our 9 mall locations across Dubai and Abu Dhabi.',
}

export default function ContactPage() {
  return (
    <>
      <div
        className="relative flex items-end pb-16 overflow-hidden pt-24"
        style={{ minHeight: '45vh', background: 'linear-gradient(135deg,var(--bg-page) 0%,#1a0005 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 30px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>Get In Touch</p>
          <h1 className="font-heading leading-none tracking-wide" style={{ fontSize: 'clamp(3rem,8vw,6rem)', color: 'var(--text-main)' }}>
            CONTACT<br /><span style={{ color: 'var(--red)' }}>US</span>
          </h1>
        </div>
      </div>
      <section className="py-20 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-2" style={{ color: 'var(--red)' }}>Send a Message</p>
            <h2 className="font-heading text-4xl tracking-wide mb-8" style={{ color: 'var(--text-main)' }}>BOOK / QUOTE / ENQUIRY</h2>
            <ContactForm />
          </div>
          <ContactSidebar />
        </div>
      </section>
    </>
  )
}
