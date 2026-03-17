// src/app/automotive/window-tinting/page.tsx
import type { Metadata } from 'next'
import { WindowTintingClient } from '@/components/pages/window-tinting-client'

export const metadata: Metadata = {
  title: '3M™ Car Window Tinting Dubai & Abu Dhabi | 3M OUR CAR | Tint in 55 Minutes',
  description:
    'Premium 3M™ car window tinting in Dubai & Abu Dhabi by 3M OUR CAR. Official 3M™ dealers since 2006. Heat rejection, UV protection, mobile tinting & 9 mall locations. Book in 55 minutes.',
  keywords: [
    'car window tinting Dubai',
    'car tinting Abu Dhabi',
    '3M tinting UAE',
    'car tinting near me Dubai',
    'mobile car tinting Dubai',
    '3M Crystalline tinting UAE',
    'window tint Dubai price',
    'best car tinting Dubai',
  ],
  openGraph: {
    title: '3M™ Car Window Tinting Dubai & Abu Dhabi | 3M OUR CAR',
    description: 'Official 3M™ dealers since 2006. Tinting completed in 55 minutes at 9 mall locations across Dubai & Abu Dhabi.',
  },
}

export default function WindowTintingPage() {
  return <WindowTintingClient />
}
