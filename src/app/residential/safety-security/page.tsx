import type { Metadata } from 'next'
import { SafetySecurityClient } from '@/components/pages/safety-security-client'

export const metadata: Metadata = {
  title: '3M™ Safety & Security Window Film UAE | Anti‑Shatter Glass Protection | 3M OUR CAR',
  description:
    'Protect your home, villa, office, or commercial space with 3M™ Safety & Security Window Film in UAE. Break‑in delay, anti‑shatter protection, and up to 98% UV protection — installed by 3M OUR CAR (official 3M dealer since 2006).',
  keywords: [
    'safety window film Dubai',
    'security window film UAE',
    '3M safety film Dubai',
    'anti shatter film UAE',
    'glass protection film Abu Dhabi',
    '3M security film Dubai',
    'window safety film for villas',
    'smash and grab protection film',
    '3M safety and security window film',
  ],
  openGraph: {
    title: '3M™ Safety & Security Window Film UAE | 3M OUR CAR',
    description: 'Break‑in delay and anti‑shatter protection for villas, offices and retail. Official 3M dealer since 2006.',
  },
}

export default function SafetySecurityPage() {
  return <SafetySecurityClient />
}

