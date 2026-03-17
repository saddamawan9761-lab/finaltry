// src/app/automotive/ceramic-coating/page.tsx
import type { Metadata } from 'next'
import { CeramicCoatingClient } from '@/components/pages/ceramic-coating-client'

export const metadata: Metadata = {
  title: 'Premium Ceramic Coating Dubai & Abu Dhabi | UltraShield Pro | 3M OUR CAR',
  description:
    '3M OUR CAR – UltraShield Pro Nano Ceramic Coating in Dubai & Abu Dhabi. Up to 3 years protection, deep gloss, hydrophobic shield. Mall-based & doorstep service available. Book now!',
  keywords: [
    'ceramic coating Dubai',
    'ceramic coating Abu Dhabi',
    'nano ceramic coating UAE',
    'car ceramic coating Dubai',
    'ceramic coating near me Dubai',
    'doorstep ceramic coating Dubai',
    'UltraShield Pro ceramic coating',
    'best ceramic coating UAE',
  ],
  openGraph: {
    title: 'UltraShield Pro Nano Ceramic Coating Dubai & Abu Dhabi | 3M OUR CAR',
    description: 'Up to 3 years protection. Deep gloss. Hydrophobic. Mall-based & doorstep service. Official 3M partners since 2006.',
  },
}

export default function CeramicCoatingPage() {
  return <CeramicCoatingClient />
}
