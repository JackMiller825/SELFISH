import { isValidHttpsUrl } from '../config/links.ts'
import { project } from '../config/project.ts'

function SocialMark({
  url,
  label,
  pendingLabel,
  icon,
}: {
  url: string | null
  label: string
  pendingLabel: string
  icon: string
}) {
  const glyph = (
    <span
      className="footer-glyph"
      style={{
        WebkitMaskImage: `url(${icon})`,
        maskImage: `url(${icon})`,
      }}
      aria-hidden="true"
    />
  )
  if (isValidHttpsUrl(url)) {
    return (
      <a className="footer-icon" href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {glyph}
      </a>
    )
  }
  return (
    <span className="footer-icon is-pending" role="img" aria-label={pendingLabel}>
      {glyph}
    </span>
  )
}

export function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-brand">
        <img
          className="footer-logo"
          src="/assets/brand/selfish-logo-transparent.png"
          alt="SELLFISH"
          width={256}
          height={256}
          decoding="async"
        />
        <SocialMark
          url={project.xUrl}
          label="X"
          pendingLabel="X link pending"
          icon="/assets/icons/x.svg"
        />
        <SocialMark
          url={project.telegramUrl}
          label="Telegram"
          pendingLabel="Telegram link pending"
          icon="/assets/icons/telegram.svg"
        />
      </div>
    </footer>
  )
}
