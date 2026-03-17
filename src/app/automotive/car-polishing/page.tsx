// src/app/automotive/car-polishing/page.tsx
import type { Metadata } from 'next'
import { CarPolishingClient } from '@/components/pages/car-polishing-client'

export const metadata: Metadata = {
  title: '3M™ Car Polishing Dubai & Abu Dhabi | 3M OUR CAR | Professional Paint Restoration UAE',
  description:
    '3M OUR CAR – Premium 3M™ car polishing in Dubai & Abu Dhabi. Remove scratches, oxidation & dullness for a showroom shine. 20+ years expertise. Book your shine now!',
  keywords: [
    'car polishing Dubai',
    'car polishing Abu Dhabi',
    '3M polishing Dubai',
    'car detailing Dubai',
    'car polishing near me UAE',
    'paint restoration Dubai',
    'scratch removal Dubai',
    'car polishing service UAE',
  ],
  openGraph: {
    title: '3M™ Car Polishing Dubai & Abu Dhabi | 3M OUR CAR',
    description: 'Professional 3M™ car polishing — remove scratches, swirl marks & oxidation. 20+ years expertise across Dubai & Abu Dhabi.',
  },
}

export default function CarPolishingPage() {
  return <CarPolishingClient />
}
