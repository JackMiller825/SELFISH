import { useEffect, useState } from 'react'
import { isValidHttpsUrl } from '../config/links.ts'
import { project } from '../config/project.ts'
import { navItems, type SectionId } from '../content/nav.ts'
import { activeNavId } from '../lib/scroll.ts'

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
        <span className="visually-hidden"> (opens in a new tab)</span>
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
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    let frame = 0
    const update = () => {
      const next = activeNavId()
      setActive((current) => (current === next ? current : next))
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <footer className="site-footer" id="site-footer">
      <img
        className="footer-logo"
        src="/assets/brand/selfish-logo-transparent.png"
        alt="SELLFISH"
        width={256}
        height={256}
        decoding="async"
      />
      <nav className="footer-nav" aria-label="Footer">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.href} aria-current={active === item.id ? 'location' : undefined}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer-socials">
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
