import type { Metadata } from 'next'
import { MarineSafetySecurityClient } from '@/components/pages/marine-safety-security-client'

export const metadata: Metadata = {
  title: 'Marine Safety & Security Window Film Dubai & Abu Dhabi | 3M OUR CAR',
  description:
    'Premium 3M marine anti-shatter and solar safety films for vessels in UAE. Impact resistance, UV protection, IMO-aligned performance, on-site installation at ports and marinas — 3M OUR CAR since 2006.',
  keywords: [
    'marine safety film Dubai',
    'marine security window film Abu Dhabi',
    'anti shatter marine film UAE',
    'ship bridge window film',
    '3M marine safety film installers',
    'yacht security film Dubai',
    'marine solar anti shatter film',
  ],
  openGraph: {
    title: 'Marine Safety & Security Window Film | 3M OUR CAR UAE',
    description:
      'Certified marine-grade safety & security films — clear and solar anti-shatter options, professional installation across Dubai & Abu Dhabi.',
  },
}

export default function MarineSafetySecurityPage() {
  return <MarineSafetySecurityClient />
}
