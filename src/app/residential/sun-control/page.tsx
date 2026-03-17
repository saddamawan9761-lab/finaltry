// src/app/residential/sun-control/page.tsx
import type { Metadata } from 'next'
import { SunControlClient } from '@/components/pages/sun-control-client'

export const metadata: Metadata = {
  title: '3M™ Sun Control Window Film Dubai & Abu Dhabi | Residential & Commercial | 3M OUR CAR',
  description:
    'Premium 3M™ Sun Control Window Film for homes, villas, offices & commercial buildings in UAE. Up to 78% heat rejection, 99.9% UV protection. Official 3M dealer since 2006. Book now!',
  keywords: [
    '3M sun control film Dubai',
    'residential window tinting Dubai',
    'commercial window tinting Abu Dhabi',
    'heat control window film UAE',
    'UV protection window film Dubai',
    'window tinting villa Dubai',
    'office window film UAE',
    'energy saving window film Dubai',
    'sun control film Abu Dhabi',
    'window tinting near me Dubai',
  ],
  openGraph: {
    title: '3M™ Sun Control Window Film Dubai & Abu Dhabi | 3M OUR CAR',
    description: 'Up to 78% heat rejection & 99.9% UV protection for homes and offices. Official 3M dealer since 2006.',
  },
}

export default function SunControlPage() {
  return <SunControlClient />
}
