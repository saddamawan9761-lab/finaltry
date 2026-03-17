import type { Metadata } from 'next'
import { DecorativeFilmClient } from '@/components/pages/decorative-film-client'

export const metadata: Metadata = {
  title: '3M™ Decorative Window Film UAE | Frosted, Patterned & Custom Designs | 3M OUR CAR',
  description:
    'Transform glass with 3M™ Decorative (Fasara) Window Films in UAE. Frosted, patterned, textured, gradient, and custom branding—installed by 3M OUR CAR (official 3M partner since 2006).',
  keywords: [
    '3M decorative film UAE',
    '3M Fasara UAE',
    'frosted window film Dubai',
    'decorative glass film Dubai',
    'office privacy film UAE',
    'patterned window film UAE',
    'custom logo frosted film Dubai',
    'decorative film Abu Dhabi',
  ],
  openGraph: {
    title: '3M™ Decorative Window Film UAE | 3M OUR CAR',
    description: 'Frosted, patterned & custom decorative films for offices and homes—installed by UAE’s trusted 3M partner since 2006.',
  },
}

export default function DecorativeFilmPage() {
  return <DecorativeFilmClient />
}

