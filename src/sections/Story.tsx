import { copy } from '../content/copy.ts'
import { stickerSrc } from '../data/stickers.ts'
import { SellDemo } from '../components/SellDemo.tsx'
import { ReefFrame, WaveDivider } from '../components/OceanScene.tsx'
import { CandleDecor, CoinPile, SellProp } from '../components/SceneArt.tsx'

export function Story() {
  return (
    <section className="section section-story" id="story" aria-labelledby="story-heading">
      <ReefFrame />
      <div className="wrap">
        <div className="story-layout">
          <div className="story-copy">
            <h2 id="story-heading" className="display" tabIndex={-1}>
              {copy.story.titleLead}
              <span className="gold">{copy.story.titleGold}</span>
            </h2>
            <p className="lede">{copy.story.intro}</p>
          </div>
          <div className="waterline-scene">
            <div className="sky" aria-hidden="true" />
            <img
              className="waterline-whale whale-float"
              src={stickerSrc('009-selfish-smug.png')}
              alt="SELLFISH whale smiling at the surface"
              width={512}
              height={512}
              decoding="async"
              loading="lazy"
            />
            <svg className="water-cut" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 34c90 26 180 26 270 0s180-26 270 0 180 26 270 0 180-26 270 0 180 26 270 0 90-14 90-14v70H0Z" fill="#7ad8f2" />
              <path d="M0 52c90 20 180 20 270 0s180-20 270 0 180 20 270 0 180-20 270 0 180 20 270 0 90-10 90-10v48H0Z" fill="#0a6cae" />
            </svg>
            <div className="below-water">
              <CoinPile />
              <SellProp />
              <CandleDecor falling />
              <img
                className="story-reaction"
                src={stickerSrc('007-selfish-shocked.png')}
                alt=""
                width={512}
                height={512}
                decoding="async"
                loading="lazy"
              />
            </div>
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
