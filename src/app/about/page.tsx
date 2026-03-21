import type { Metadata } from 'next'
import { AboutClient } from '@/components/pages/about-client'

export const metadata: Metadata = {
  title: '3M OUR CAR | Official 3M Window Tinting & PPF in UAE',
  description:
    'Official 3M Dealer since 2006. Get RTA-approved 50% car tinting in 55 mins at 9 mall locations in Dubai & Abu Dhabi. Professional PPF & Ceramic Coating.',
}

export default function AboutPage() {
  return <AboutClient />
}

