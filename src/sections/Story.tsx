import { copy } from '../content/copy.ts'
import { SellDemo } from '../components/SellDemo.tsx'

const beatArt = [
  '/assets/story/selfish-story-smile.png',
  '/assets/story/selfish-story-secret.png',
  '/assets/story/selfish-story-splash.png',
]

export function Story() {
  return (
    <section className="section section-story" id="story" aria-labelledby="story-heading">
      <img
        className="story-ocean"
        src="/assets/story/selfish-story-ocean.webp"
        alt=""
        width={1586}
        height={992}
        decoding="async"
        loading="lazy"
        aria-hidden="true"
      />
      <img
        className="story-reef story-reef-left"
        src="/assets/home/selfish-home-reef-left.png"
        alt=""
        width={512}
        height={896}
        decoding="async"
        loading="lazy"
        aria-hidden="true"
      />
      <img
        className="story-reef story-reef-right"
        src="/assets/home/selfish-home-reef-right.png"
        alt=""
        width={512}
        height={896}
        decoding="async"
        loading="lazy"
        aria-hidden="true"
      />
      <div className="story-wrap">
        <div className="story-open">
          <div className="story-copy">
            <h2 id="story-heading" className="story-title" tabIndex={-1}>
              <span>SMILES ABOVE.</span>
              <span className="story-gold">SELLS BELOW.</span>
            </h2>
            <p className="story-intro">{copy.story.intro}</p>
          </div>
          <picture className="story-scene">
            <source
              media="(max-width: 760px)"
              srcSet="/assets/story/selfish-story-waterline-mobile.png"
              width={800}
              height={1120}
            />
            <img
              src="/assets/story/selfish-story-waterline-desktop.png"
              alt="A whale smiles above the water while secretly pressing SELL below, turning the cartoon chart red."
              width={1400}
              height={855}
              decoding="async"
              loading="lazy"
            />
          </picture>
        </div>
        <ol className="story-beats">
          {copy.story.beats.map((beat, index) => (
            <li key={beat.title} className="story-beat">
              <span className="story-num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <img
                src={beatArt[index]}
                alt=""
                width={512}
                height={512}
                decoding="async"
                loading="lazy"
                aria-hidden="true"
              />
              <div>
                <h3>{beat.title}</h3>
                <p>{beat.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <SellDemo />
      </div>
      <img
        className="story-wave"
        src="/assets/home/selfish-home-wave-separator.png"
        alt=""
        width={1600}
        height={254}
        decoding="async"
        loading="lazy"
        aria-hidden="true"
      />
    </section>
  )
}
