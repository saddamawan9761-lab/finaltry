// src/app/automotive/car-detailing/page.tsx
import type { Metadata } from 'next'
import { CarDetailingClient } from '@/components/pages/car-detailing-client'

export const metadata: Metadata = {
  title: 'Car Detailing Dubai & Abu Dhabi | Interior Deep Cleaning, Steam Sanitization & Polishing | 3M OUR CAR',
  description:
    'Premium car detailing in Dubai & Abu Dhabi. Interior deep cleaning, steam sanitization, odor removal, polishing & full detailing packages. Book mobile or mall-based detailing today.',
  keywords: [
    'car detailing Dubai',
    'car detailing Abu Dhabi',
    'interior car cleaning Dubai',
    'steam car wash Dubai',
    'car detailing near me Dubai',
    'mobile car detailing Dubai',
    'car sanitization Dubai',
    'odor removal car Dubai',
    'leather seat cleaning Dubai',
    'interior detailing Abu Dhabi',
  ],
  openGraph: {
    title: 'Car Detailing Dubai & Abu Dhabi | 3M OUR CAR',
    description: 'Deep interior cleaning, steam sanitization, odor removal & exterior polishing. 20+ years experience. Mall-based & mobile service.',
  },
}

export default function CarDetailingPage() {
  return <CarDetailingClient />
}
