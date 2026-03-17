// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, '').replace(/^\+/, '')
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const cleaned = formatPhone(phone)
  const text = message ? encodeURIComponent(message) : encodeURIComponent('Hello! I\'d like to book a tinting service.')
  return `https://wa.me/${cleaned}?text=${text}`
}

export function getCallUrl(phone: string): string {
  return `tel:${phone}`
}

export function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}
