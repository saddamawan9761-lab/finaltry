// src/app/page.tsx
import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ShopWhileTint } from '@/components/sections/ShopWhileTint'
import { FiftyFiveMinutes } from '@/components/sections/FiftyFiveMinutes'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { ResidentialPreview } from '@/components/sections/ResidentialPreview'
import { MarinePreview } from '@/components/sections/MarinePreview'
import { LocationsSection } from '@/components/sections/LocationsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaBanner } from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: '3M OURCAR — Official 3M Authorized Dealer Dubai & Abu Dhabi',
  description: 'Tint your car while you shop! Professional window tinting in 55 minutes at 9 mall locations in Dubai & Abu Dhabi.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ShopWhileTint />
      <FiftyFiveMinutes />
      <CertificationsSection />
      <ServicesPreview />
      <ResidentialPreview />
      <MarinePreview />
      <LocationsSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  )
}
