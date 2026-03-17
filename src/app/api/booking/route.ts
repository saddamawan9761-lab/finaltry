// src/app/api/booking/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, bookingEmailHtml } from '@/lib/email'
import type { ApiResponse } from '@/types'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, service, location, preferredDate, preferredTime, carMake, carModel } = body

    if (!name || !phone || !service || !location) {
      return NextResponse.json<ApiResponse>({ success: false, message: 'Name, phone, service and location are required.' }, { status: 400 })
    }

    await sendEmail({
      subject: `New Booking — ${name} — ${service} @ ${location}`,
      html: bookingEmailHtml({ name, phone, service, location, preferredDate, preferredTime, carMake, carModel }),
    })

    return NextResponse.json<ApiResponse<{ emailAttempted: boolean }>>({
      success: true,
      message: 'Booking request received! We will confirm your appointment shortly.',
      data: { emailAttempted: true },
    })
  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json<ApiResponse>({ success: false, message: 'Server error. Please try again.' }, { status: 500 })
  }
}
