// src/app/api/quote/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'
import type { ApiResponse } from '@/types'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, service, carMake, carModel, carYear, description } = body

    if (!name || !phone || !service) {
      return NextResponse.json<ApiResponse>({ success: false, message: 'Name, phone and service are required.' }, { status: 400 })
    }

    await sendEmail({
      subject: `New Quote Request — ${name} — ${service}`,
      html: `<div style="font-family:Arial,sans-serif;padding:20px"><h2 style="color:#C8102E">New Quote Request</h2><table><tr><td style="padding:6px 12px;color:#888">Name</td><td style="padding:6px 12px;font-weight:bold">${name}</td></tr><tr><td style="padding:6px 12px;color:#888">Phone</td><td style="padding:6px 12px;color:#C8102E;font-weight:bold">${phone}</td></tr><tr><td style="padding:6px 12px;color:#888">Service</td><td style="padding:6px 12px">${service}</td></tr>${carMake ? `<tr><td style="padding:6px 12px;color:#888">Vehicle</td><td style="padding:6px 12px">${carMake} ${carModel || ''} ${carYear || ''}</td></tr>` : ''}${description ? `<tr><td style="padding:6px 12px;color:#888;vertical-align:top">Notes</td><td style="padding:6px 12px">${description}</td></tr>` : ''}</table></div>`,
    })

    return NextResponse.json<ApiResponse<{ emailAttempted: boolean }>>({
      success: true,
      message: 'Quote request received! We will contact you shortly.',
      data: { emailAttempted: true },
    })
  } catch (error) {
    console.error('Quote API error:', error)
    return NextResponse.json<ApiResponse>({ success: false, message: 'Server error. Please try again.' }, { status: 500 })
  }
}
