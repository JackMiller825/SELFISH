import { isValidHttpsUrl } from '../config/links.ts'

type PendingLinkProps = {
  url: string | null
  enabled?: boolean
  label: string
  pendingLabel: string
  className?: string
  describedBy?: string
}

export function PendingLink({
  url,
  enabled = true,
  label,
  pendingLabel,
  className = 'btn btn-primary',
  describedBy,
}: PendingLinkProps) {
  if (enabled && isValidHttpsUrl(url)) {
    return (
      <a className={className} href={url} target="_blank" rel="noopener noreferrer">
        {label}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    )
  }

  return (
    <button type="button" className={className} disabled aria-describedby={describedBy}>
      {pendingLabel}
    </button>
  )
}
