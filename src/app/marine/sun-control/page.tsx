import type { Metadata } from 'next'
import { MarineSunControlClient } from '@/components/pages/marine-sun-control-client'

export const metadata: Metadata = {
  title: 'Marine Window Tinting UAE | 3M™ Marine Sun Control Films | 3M OUR CAR',
  description:
    'Premium 3M™ Marine Sun Control Window Films in UAE. Heat rejection up to 97% IR, 99.9% UV protection, glare reduction, and electronics-safe non-metallic tint—installed by 3M OUR CAR since 2006.',
  keywords: [
    'marine window tinting Dubai',
    'yacht tint Dubai Marina',
    '3M marine window film UAE',
    'boat window tint Abu Dhabi',
    'marine sun control film UAE',
    'non metallic marine tint',
    'yacht glare reduction film',
    'marine UV protection film',
  ],
  openGraph: {
    title: 'Marine Window Tinting UAE | 3M™ Marine Sun Control Films',
    description: 'Cooler cabins, safer navigation, 99.9% UV protection and electronics-safe marine tint—installed by 3M OUR CAR.',
  },
}

export default function MarineSunControlPage() {
  return <MarineSunControlClient />
}

