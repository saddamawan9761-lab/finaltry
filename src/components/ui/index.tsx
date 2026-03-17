// src/components/ui/index.tsx
import { cn } from '@/lib/utils'
import Link from 'next/link'

// ─── BUTTONS ─────────────────────────────────────────────────────────────────
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

export function Button({ variant = 'primary', size = 'md', href, className, children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold tracking-widest uppercase transition-colors duration-200 cursor-pointer'
  const variants = {
    primary: 'text-white border-0 hover:brightness-95',
    outline: 'bg-transparent hover:bg-[#C8102E]/10 border hover:border-[#C8102E]',
    ghost: 'bg-transparent hover:text-[#C8102E] border-0',
  }
  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-xs px-6 py-3',
    lg: 'text-sm px-8 py-4',
  }
  const classes = cn(base, sizes[size], className)

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          classes,
          variants[variant],
          variant === 'primary' && 'rounded-[4px]',
          variant === 'outline' && 'rounded-[4px] border',
          variant === 'ghost' && 'rounded-[4px]'
        )}
        style={
          variant === 'primary'
            ? { background: 'var(--red)' }
            : variant === 'outline'
              ? { borderColor: 'var(--border)', color: 'var(--text-main)' }
              : { color: 'var(--text-muted)' }
        }
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={cn(
        classes,
        variants[variant],
        variant === 'primary' && 'rounded-[4px]',
        variant === 'outline' && 'rounded-[4px] border',
        variant === 'ghost' && 'rounded-[4px]'
      )}
      style={
        variant === 'primary'
          ? { background: 'var(--red)' }
          : variant === 'outline'
            ? { borderColor: 'var(--border)', color: 'var(--text-main)' }
            : { color: 'var(--text-muted)' }
      }
      {...props}
    >
      {children}
    </button>
  )
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────
interface SectionHeaderProps {
  label?: string
  title: React.ReactNode
  subtitle?: string
  center?: boolean
  className?: string
}

export function SectionHeader({ label, title, subtitle, center, className }: SectionHeaderProps) {
  return (
    <div className={cn(center && 'text-center', className)}>
      {label && (
        <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{label}</p>
      )}
      <h2 className="font-heading text-5xl md:text-6xl leading-none tracking-wide" style={{ color: 'var(--text-main)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-sm font-light mt-3 leading-relaxed', center && 'max-w-lg mx-auto')} style={{ color: 'var(--text-muted)' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────
interface ServiceCardProps {
  icon: string
  title: string
  description: string
  href: string
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block border p-7 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <div className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" style={{ background: 'var(--red)' }} />
      <div className="w-12 h-12 border flex items-center justify-center mb-5 text-xl" style={{ background: 'rgba(200,16,46,0.10)', borderColor: 'rgba(200,16,46,0.25)' }}>
        {icon}
      </div>
      <div className="absolute top-5 right-5 text-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--red)' }}>→</div>
      <h3 className="font-condensed text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--text-main)' }}>{title}</h3>
      <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{description}</p>
    </Link>
  )
}

// ─── LOCATION CARD ────────────────────────────────────────────────────────────
interface LocationCardProps {
  name: string
  area: string
  city: string
  href?: string
}

export function LocationCard({ name, area, city, href = '/contact' }: LocationCardProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 border px-5 py-4 transition-all duration-200 group"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <div className="w-2.5 h-2.5 flex-shrink-0 group-hover:scale-125 transition-transform" style={{ background: 'var(--red)' }} />
      <div>
        <div className="text-sm font-semibold tracking-wide uppercase" style={{ color: 'var(--text-main)' }}>{name}</div>
        <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{area}, {city}</div>
      </div>
    </Link>
  )
}

// ─── BENEFIT CARD ────────────────────────────────────────────────────────────
interface BenefitCardProps {
  icon: string
  title: string
  description: string
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="text-2xl mb-4">{icon}</div>
      <h4 className="font-condensed text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--text-main)' }}>{title}</h4>
      <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{description}</p>
    </div>
  )
}

// ─── TESTIMONIAL CARD ────────────────────────────────────────────────────────
interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  text: string
  service?: string
}

export function TestimonialCard({ name, location, rating, text, service }: TestimonialCardProps) {
  return (
    <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="text-sm mb-3" style={{ color: 'var(--red)' }}>{'★'.repeat(rating)}</div>
      <div className="text-5xl font-serif leading-none mb-1" style={{ color: 'var(--red)' }}>“</div>
      <p className="text-sm font-light italic leading-relaxed mb-5" style={{ color: 'var(--text-main)', opacity: 0.85 }}>{text}</p>
      <div>
        <strong className="text-sm font-semibold block" style={{ color: 'var(--text-main)' }}>{name}</strong>
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{location}{service && ` · ${service}`}</span>
      </div>
    </div>
  )
}

// ─── CONTENT PLACEHOLDER ─────────────────────────────────────────────────────
interface ContentPlaceholderProps {
  label?: string
}

export function ContentPlaceholder({ label = 'Content' }: ContentPlaceholderProps) {
  return (
    <div className="border border-l-4 p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderLeftColor: 'var(--red)' }}>
      <p className="text-sm italic leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        📝 <strong className="not-italic" style={{ color: 'var(--text-main)' }}>{label} placeholder</strong> — Paste your 3M product content here. Include product specifications, technical details, warranty information and key selling points.
      </p>
    </div>
  )
}

// ─── IMAGE PLACEHOLDER ───────────────────────────────────────────────────────
interface ImagePlaceholderProps {
  label?: string
  aspectRatio?: string
  className?: string
}

export function ImagePlaceholder({ label = 'Image', aspectRatio = 'aspect-video', className }: ImagePlaceholderProps) {
  return (
    <div className={cn('border flex items-center justify-center', aspectRatio, className)} style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>[ {label} ]</span>
    </div>
  )
}
