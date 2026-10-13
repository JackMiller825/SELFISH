import { copy } from '../content/copy.ts'
import { stickerSrc } from '../data/stickers.ts'
import { SellDemo } from '../components/SellDemo.tsx'
import { WaveDivider } from '../components/OceanScene.tsx'
import { CandleDecor, CoinPile, SellProp } from '../components/SceneArt.tsx'

export function Story() {
  return (
    <section className="section section-story" id="story" aria-labelledby="story-heading">
      <div className="wrap">
        <div className="section-intro">
          <h2 id="story-heading" className="display" tabIndex={-1}>
            {copy.story.titleLead}
            <span className="gold">{copy.story.titleGold}</span>
          </h2>
          <p className="lede">{copy.story.intro}</p>
        </div>
        <div className="waterline-scene">
          <div className="above-water">
            <img
              className="story-whale whale-float"
              src={stickerSrc('009-selfish-smug.png')}
              alt="SELLFISH whale smiling at the surface"
              width={512}
              height={512}
              decoding="async"
              loading="lazy"
            />
          </div>
          <svg className="water-cut" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 36c120 28 240 28 360 0s240-28 360 0 240 28 360 0 240-28 360 0v44H0Z" fill="#7ad8f2" />
            <path d="M0 48c120 22 240 22 360 0s240-22 360 0 240 22 360 0 240-22 360 0v32H0Z" fill="#0c6eae" />
          </svg>
          <div className="below-water">
            <img
              className="story-whale"
              src={stickerSrc('017-selfish-greedy.png')}
              alt="SELLFISH whale, greedy"
              width={512}
              height={512}
              decoding="async"
              loading="lazy"
            />
            <CoinPile />
            <SellProp />
            <img
              className="story-reaction"
              src={stickerSrc('007-selfish-shocked.png')}
              alt="SELLFISH whale, shocked"
              width={512}
              height={512}
              decoding="async"
              loading="lazy"
            />
            <CandleDecor falling />
          </div>
        </div>
        <ol className="beats">
          {copy.story.beats.map((beat, index) => (
            <li key={beat.title}>
              <span className="beat-num" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{beat.title}</h3>
              <p>{beat.body}</p>
            </li>
          ))}
        </ol>
        <figure className="brand-panel">
          <picture>
            <source media="(max-width: 760px)" srcSet="/assets/brand/selfish-banner-1100x520.png" />
            <img
              src="/assets/brand/selfish-banner-3to1.png"
              alt={copy.story.bannerAlt}
              width={1500}
              height={500}
              decoding="async"
              loading="lazy"
            />
          </picture>
        </figure>
        <SellDemo />
      </div>
      <WaveDivider tone="mid" />
    </section>
  )
}
