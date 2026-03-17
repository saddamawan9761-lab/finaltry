import { NextRequest, NextResponse } from 'next/server'
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  // DB lookups are disabled for the free (no-database) deployment mode.
  // Keep endpoint to avoid 404s from old clients, but don't expose any data.
  const { id } = await params
  return NextResponse.json({ error: `Not found: ${id}` }, { status: 404 })
}
