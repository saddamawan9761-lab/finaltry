// src/lib/email.ts
// Note: transporter is created per send so Vercel/serverless always reads current env vars.
import nodemailer from 'nodemailer'

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

interface EmailData {
  to?: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: EmailData): Promise<boolean> {
  // NOTIFY_EMAIL = inbox for leads; if omitted, fall back to SMTP_USER (same Gmail for send + receive)
  const recipient = to || process.env.NOTIFY_EMAIL || process.env.SMTP_USER || ''
  if (!recipient) {
    console.warn('[3mourcar email] Set NOTIFY_EMAIL or SMTP_USER on Vercel — skipping send')
    return false
  }

  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn(
      '[3mourcar email] Missing SMTP_HOST, SMTP_USER, or SMTP_PASS — add them in Vercel → Settings → Environment Variables (then Redeploy)'
    )
    return false
  }

  try {
    await getTransporter().sendMail({
      from: `"3M OURCAR Website" <${SMTP_USER}>`,
      to: recipient,
      subject,
      html,
    })
    return true
  } catch (err) {
    console.error('[3mourcar email] sendMail failed:', err)
    // Don't throw — email failure should not break form submission
    return false
  }
}

export function leadEmailHtml(data: {
  name: string
  phone: string
  email?: string
  service?: string
  location?: string
  message?: string
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px;">
      <div style="background: #C8102E; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px; letter-spacing: 3px;">3M OURCAR</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0; font-size: 12px; letter-spacing: 2px;">NEW LEAD NOTIFICATION</p>
      </div>
      <div style="background: white; padding: 30px; border-left: 4px solid #C8102E;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; color: #888; font-size: 13px; width: 120px;">Name</td><td style="padding: 10px 0; font-weight: bold;">${data.name}</td></tr>
          <tr><td style="padding: 10px 0; color: #888; font-size: 13px;">Phone</td><td style="padding: 10px 0; font-weight: bold; color: #C8102E;">${data.phone}</td></tr>
          ${data.email ? `<tr><td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td><td style="padding: 10px 0;">${data.email}</td></tr>` : ''}
          ${data.service ? `<tr><td style="padding: 10px 0; color: #888; font-size: 13px;">Service</td><td style="padding: 10px 0;">${data.service}</td></tr>` : ''}
          ${data.location ? `<tr><td style="padding: 10px 0; color: #888; font-size: 13px;">Location</td><td style="padding: 10px 0;">${data.location}</td></tr>` : ''}
          ${data.message ? `<tr><td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Message</td><td style="padding: 10px 0;">${data.message}</td></tr>` : ''}
        </table>
      </div>
      <div style="text-align: center; padding: 20px; color: #888; font-size: 12px;">
        <p>Received from 3mourcar.com — respond within 1 hour for best conversion.</p>
      </div>
    </div>
  `
}

export function bookingEmailHtml(data: {
  name: string
  phone: string
  service: string
  location: string
  preferredDate?: string
  preferredTime?: string
  carMake?: string
  carModel?: string
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px;">
      <div style="background: #C8102E; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px; letter-spacing: 3px;">3M OURCAR</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0; font-size: 12px; letter-spacing: 2px;">NEW BOOKING REQUEST</p>
      </div>
      <div style="background: white; padding: 30px; border-left: 4px solid #C8102E;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; color: #888; font-size: 13px; width: 140px;">Customer</td><td style="padding: 10px 0; font-weight: bold;">${data.name}</td></tr>
          <tr><td style="padding: 10px 0; color: #888; font-size: 13px;">Phone</td><td style="padding: 10px 0; font-weight: bold; color: #C8102E;">${data.phone}</td></tr>
          <tr><td style="padding: 10px 0; color: #888; font-size: 13px;">Service</td><td style="padding: 10px 0;">${data.service}</td></tr>
          <tr><td style="padding: 10px 0; color: #888; font-size: 13px;">Location</td><td style="padding: 10px 0;">${data.location}</td></tr>
          ${data.preferredDate ? `<tr><td style="padding: 10px 0; color: #888; font-size: 13px;">Date</td><td style="padding: 10px 0;">${data.preferredDate}</td></tr>` : ''}
          ${data.preferredTime ? `<tr><td style="padding: 10px 0; color: #888; font-size: 13px;">Time</td><td style="padding: 10px 0;">${data.preferredTime}</td></tr>` : ''}
          ${data.carMake ? `<tr><td style="padding: 10px 0; color: #888; font-size: 13px;">Vehicle</td><td style="padding: 10px 0;">${data.carMake} ${data.carModel || ''}</td></tr>` : ''}
        </table>
      </div>
      <div style="text-align: center; padding: 20px; color: #888; font-size: 12px;">
        <p>Booking received from 3mourcar.com — confirm ASAP to secure the slot.</p>
      </div>
    </div>
  `
}
