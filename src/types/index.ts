// src/types/index.ts

export interface Service {
  slug: string
  title: string
  shortTitle: string
  category: 'automotive' | 'residential' | 'marine'
  description: string
  icon: string
  heroImage: string
  benefits: Benefit[]
  features: string[]
}

export interface Benefit {
  icon: string
  title: string
  description: string
}

export interface Location {
  name: string
  nameAr: string
  city: string
  cityAr: string
  area: string
  areaAr: string
  parking: string
  parkingAr: string
  hours: string
  hoursAr: string
  phone?: string
  phone2?: string
  fax?: string
  mobile?: string
  mobile2?: string
  whatsapp: string        // digits only, no + or spaces — for wa.me link
  whatsappDisplay: string // formatted for display e.g. +971 52 889 0119
  mapUrl: string
  isHeadOffice?: boolean
}

export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  service?: string
}

export interface ContactFormData {
  name: string
  phone: string
  email?: string
  service?: string
  location?: string
  message?: string
}

export interface BookingFormData {
  name: string
  phone: string
  email?: string
  service: string
  location: string
  preferredDate?: string
  preferredTime?: string
  carMake?: string
  carModel?: string
  carYear?: string
  notes?: string
}

export interface QuoteFormData {
  name: string
  phone: string
  email?: string
  service: string
  location?: string
  carMake?: string
  carModel?: string
  carYear?: string
  description?: string
}

export type ApiResponse<T = null> = {
  success: boolean
  message: string
  data?: T
  error?: string
}
