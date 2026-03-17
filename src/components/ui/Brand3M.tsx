// src/components/ui/Brand3M.tsx
// Drop <Brand3M /> anywhere "3M" appears — always bold red, consistent sitewide

interface Brand3MProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'inherit'
  className?: string
}

const sizeMap = {
  sm:      { fontSize: '0.85em',  letterSpacing: '0.04em' },
  md:      { fontSize: '1em',     letterSpacing: '0.04em' },
  lg:      { fontSize: '1.15em',  letterSpacing: '0.04em' },
  xl:      { fontSize: '1.3em',   letterSpacing: '0.04em' },
  inherit: { fontSize: 'inherit', letterSpacing: 'inherit' },
}

export function Brand3M({ size = 'inherit', className }: Brand3MProps) {
  const s = sizeMap[size]
  return (
    <span
      className={className}
      style={{
        color: 'var(--red)',
        fontWeight: 800,
        fontSize: s.fontSize,
        letterSpacing: s.letterSpacing,
        fontFamily: 'var(--font-bebas)',
        lineHeight: 'inherit',
      }}
    >
      3M
    </span>
  )
}
