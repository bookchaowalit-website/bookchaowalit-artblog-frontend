interface ArtworkProps {
  variant: string
  label: string
  compact?: boolean
}

export default function Artwork({ variant, label, compact = false }: ArtworkProps) {
  const safeVariant = variant.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <div className={`art-artwork art-artwork-${safeVariant}${compact ? ' art-artwork-compact' : ''}`} aria-hidden="true">
      <div className="art-artwork-grid" />
      <span className="art-artwork-label">{label}</span>
      <span className="art-artwork-mark">{compact ? 'NOTE' : 'FIELD / 01'}</span>
    </div>
  )
}
