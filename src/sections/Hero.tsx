import { project } from '../config/project.ts'
import { canBuy } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { stickerSrc } from '../data/stickers.ts'
import { ReefFrame, WaveDivider } from '../components/OceanScene.tsx'
import { PendingLink } from '../components/PendingLink.tsx'
import { CandleDecor, CoinPile, SellProp } from '../components/SceneArt.tsx'

export function Hero() {
  const buyingReady = canBuy()
  return (
    <section className="section section-hero" id="home" aria-labelledby="home-heading">
      <ReefFrame />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1 id="home-heading" className="display" tabIndex={-1}>
            {copy.hero.titleLead}
            <span className="gold">{copy.hero.titleGold}</span>
          </h1>
          <p className="hero-mark">
            {project.name} / {project.ticker}
          </p>
          <p className="hook">{copy.hero.hook}</p>
          <p className="hero-body">{copy.hero.body}</p>
          <div className="actions">
            <a className="btn btn-gold" href="#story">
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
            <a className="btn btn-ghost" href="#tokenomics">
              {copy.hero.details}
            </a>
          </div>
          {buyingReady ? null : (
            <p id="hero-buy-note" className="pending-note">
              {copy.buying.pending}
            </p>
          )}
        </div>
        <div className="mascot-scene">
          <div className="stage-glow" aria-hidden="true" />
          <CandleDecor />
          <img
            className="hero-whale whale-float"
            src={stickerSrc('009-selfish-smug.png')}
            alt="SELLFISH whale with a smug grin"
            width={512}
            height={512}
            decoding="async"
            fetchPriority="high"
          />
          <CoinPile />
          <SellProp />
        </div>
      </div>
      <p className="scroll-cue">{copy.hero.scroll}</p>
      <WaveDivider tone="surface" />
    </section>
  )
}
