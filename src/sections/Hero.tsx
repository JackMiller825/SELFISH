import { project } from '../config/project.ts'
import { canBuy } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { PendingLink } from '../components/PendingLink.tsx'

export function Hero() {
  const buyingReady = canBuy()
  return (
    <section className="section section-hero" id="home" aria-labelledby="home-heading">
      <picture className="home-ocean" aria-hidden="true">
        <source
          media="(max-width: 760px)"
          srcSet="/assets/home/selfish-home-ocean-mobile.webp"
          width={841}
          height={1870}
        />
        <img
          src="/assets/home/selfish-home-ocean-desktop.webp"
          alt=""
          width={1642}
          height={958}
          decoding="async"
        />
      </picture>
      <img
        className="home-reef home-reef-left"
        aria-hidden="true"
        src="/assets/home/selfish-home-reef-left.png"
        alt=""
        width={512}
        height={896}
        decoding="async"
        loading="lazy"
      />
      <img
        className="home-reef home-reef-right"
        aria-hidden="true"
        src="/assets/home/selfish-home-reef-right.png"
        alt=""
        width={512}
        height={896}
        decoding="async"
        loading="lazy"
      />
      <div className="home-wrap">
        <div className="home-copy">
          <p className="home-eyebrow">{copy.hero.eyebrow}</p>
          <h1 id="home-heading" className="home-title" tabIndex={-1}>
            <span>BENEATH</span>
            <span>THE SMILE.</span>
          </h1>
          <p className="home-brandline">
            <span>{project.name}</span>
            <span className="home-slash"> / </span>
            <span className="home-ticker">{project.ticker}</span>
          </p>
          <p className="home-hook">{copy.hero.hook}</p>
          <p className="home-body">{copy.hero.body}</p>
          <div className="home-actions">
            <a className="btn btn-gold home-dive" href="#story">
              {copy.hero.dive}
              <span aria-hidden="true"> ↓</span>
            </a>
            <PendingLink
              url={project.buyUrl}
              enabled={buyingReady}
              label={copy.hero.buy}
              pendingLabel={copy.hero.buyPending}
              className={buyingReady ? 'btn btn-gold' : 'btn btn-muted'}
              describedBy={buyingReady ? undefined : 'hero-buy-note'}
            />
            <a className="btn btn-ghost home-details" href="#tokenomics">
              {copy.hero.details}
            </a>
          </div>
          {buyingReady ? null : (
            <p id="hero-buy-note" className="home-note">
              {copy.buying.pending}
            </p>
          )}
        </div>
        <div className="home-scene">
          <img
            className="home-whale"
            src="/assets/home/selfish-home-whale-scene.png"
            alt="SELLFISH whale waves while secretly pressing SELL, sending the cartoon chart downward."
            width={1200}
            height={1120}
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
      <a className="home-scroll" href="#story">
        {copy.hero.scroll}
      </a>
      <img
        className="home-wave"
        aria-hidden="true"
        src="/assets/home/selfish-home-wave-separator.png"
        alt=""
        width={1600}
        height={254}
        decoding="async"
        loading="lazy"
      />
    </section>
  )
}
