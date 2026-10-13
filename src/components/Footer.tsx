import { project } from '../config/project.ts'
import { hasUnconfirmedDetails } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { navItems } from '../content/nav.ts'
import { ReefFrame } from './OceanScene.tsx'
import { CoinPile, SellProp } from './SceneArt.tsx'
import { stickerSrc } from '../data/stickers.ts'

export function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <ReefFrame />
      <div className="wrap footer-scene">
        <div className="footer-mascot">
          <img
            className="footer-logo"
            src="/assets/brand/selfish-logo-transparent.png"
            alt=""
            width={1024}
            height={1024}
            decoding="async"
          />
          <img
            className="footer-whale"
            src={stickerSrc('009-selfish-smug.png')}
            alt=""
            width={512}
            height={512}
            decoding="async"
            loading="lazy"
          />
          <CoinPile />
          <SellProp />
        </div>
        <p className="footer-identity">
          <span>{project.name}</span>
          <span>{project.ticker}</span>
        </p>
        <div className="footer-notes">
          <p>{copy.footer.disclaimer}</p>
          {hasUnconfirmedDetails() ? <p className="pending-banner">{copy.footer.pending}</p> : null}
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <ul className="footer-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a className="surface-btn" href="#home">
            <span className="surface-arrow" aria-hidden="true">
              ↑
            </span>
            {copy.footer.back}
          </a>
        </nav>
      </div>
    </footer>
  )
}
