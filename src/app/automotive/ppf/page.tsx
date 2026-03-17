// src/app/automotive/ppf/page.tsx
import type { Metadata } from 'next'
import { PPFClient } from '@/components/pages/ppf-client'

export const metadata: Metadata = {
  title: '3M™ Scotchgard™ Paint Protection Film (PPF) Dubai & Abu Dhabi | 3M OUR CAR',
  description:
    'Premium 3M™ Scotchgard™ PPF Pro Series in Glossy & Matte for luxury cars in UAE. Official 3M installers since 2006. Dust-free studios across Dubai & Abu Dhabi. BMW, Range Rover, Tesla, Lamborghini & more.',
  keywords: [
    'PPF Dubai',
    'paint protection film UAE',
    '3M Scotchgard PPF Dubai',
    'PPF for BMW Dubai',
    'PPF for Range Rover UAE',
    'PPF for Tesla Dubai',
    'matte PPF Dubai',
    'glossy PPF Abu Dhabi',
    'PPF for Nissan Patrol UAE',
    'PPF for Land Cruiser Dubai',
  ],
  openGraph: {
    title: '3M™ Scotchgard™ PPF Dubai & Abu Dhabi | 3M OUR CAR',
    description: 'Glossy & Matte PPF for luxury cars. Official 3M installers since 2006. Dust-free studios in Dubai & Abu Dhabi.',
  },
}

export default function PPFPage() {
  return <PPFClient />
}
