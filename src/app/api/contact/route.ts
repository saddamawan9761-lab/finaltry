// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, leadEmailHtml } from '@/lib/email'
import type { ApiResponse } from '@/types'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, service, location, message } = body

    if (!name || !phone) {
      return NextResponse.json<ApiResponse>({ success: false, message: 'Name and phone are required.' }, { status: 400 })
    }

    // Send email notification
    await sendEmail({
      subject: `New Lead — ${name} (${service || 'General'})`,
      html: leadEmailHtml({ name, phone, email, service, location, message }),
    })

    return NextResponse.json<ApiResponse<{ emailAttempted: boolean }>>({
      success: true,
      message: 'Thank you! We will contact you shortly.',
      data: { emailAttempted: true },
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json<ApiResponse>({ success: false, message: 'Server error. Please try again or call us directly.' }, { status: 500 })
  }
}
