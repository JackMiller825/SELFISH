import { project } from '../config/project.ts'
import { hasUnconfirmedDetails } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { navItems } from '../content/nav.ts'
import { BrandMark } from './BrandMark.tsx'

export function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <BrandMark heading />
          <p className="footer-identity">
            {project.name} / {project.ticker}
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <ul className="footer-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn-gold footer-surface" href="#home">
            {copy.footer.back}
          </a>
        </nav>
      </div>
      <div className="wrap footer-notes">
        <p>{copy.footer.disclaimer}</p>
        {hasUnconfirmedDetails() ? <p className="pending-banner">{copy.footer.pending}</p> : null}
      </div>
    </footer>
  )
}
