// src/app/simulator/page.tsx
import type { Metadata } from 'next'
import { SimulatorClient } from '@/components/sections/simulator-client'

export const metadata: Metadata = {
  title: 'Tint Simulator — Visualize Your Tint Before You Buy | 3M OURCAR',
  description: 'Use the official 3M UAE window tint simulator to preview Crystalline, Ceramic IR, Color Stable and FX ST film shades on your vehicle before booking.',
}

export default function SimulatorPage() {
  return <SimulatorClient />
}
