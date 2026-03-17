// src/app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: 'var(--bg-page)' }}>
      <div className="text-center">
        <div className="font-heading select-none leading-none mb-0" style={{ fontSize: 'clamp(8rem,20vw,16rem)', color: 'rgba(200,16,46,0.15)' }}>
          404
        </div>
        <h1 className="font-heading text-4xl tracking-wide -mt-8 mb-4" style={{ color: 'var(--text-main)' }}>
          PAGE NOT FOUND
        </h1>
        <p className="text-sm font-light mb-8" style={{ color: 'var(--text-muted)' }}>
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors"
          style={{ background: 'var(--red)', color: 'white' }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
