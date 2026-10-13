import { trackCta } from '../analytics/tracker.ts'
import { project } from '../config/project.ts'
import { isValidHttpsUrl } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { PendingLink } from '../components/PendingLink.tsx'
import { TelegramIcon, XIcon } from '../components/SceneArt.tsx'
import { StickerGallery } from '../components/StickerGallery.tsx'

export function Community() {
  const telegramReady = isValidHttpsUrl(project.telegramUrl)
  const xReady = isValidHttpsUrl(project.xUrl)
  return (
    <section className="section section-reef" id="community" aria-labelledby="community-heading">
      <picture>
        <source media="(max-width: 760px)" srcSet="/assets/community/selfish-community-ocean-mobile.webp" />
        <img
          className="reef-ocean"
          src="/assets/community/selfish-community-ocean-desktop.webp"
          alt=""
          width={1672}
          height={941}
          decoding="async"
          loading="lazy"
          aria-hidden="true"
        />
      </picture>
      <div className="reef-shade" aria-hidden="true" />
      <div className="reef-wrap">
        <div className="reef-top">
          <div className="reef-copy">
            <h2 id="community-heading" className="reef-title" tabIndex={-1}>
              <span>SMALL FISH.</span>
              <span className="reef-gold">BIG ENERGY.</span>
            </h2>
            <p className="reef-hook">{copy.community.hook}</p>
            <p className="reef-intro">{copy.community.body}</p>
          </div>
          <div className="reef-socials">
            <div className={telegramReady ? 'reef-social' : 'reef-social is-pending'}>
              <div className="reef-shell">
                <img
                  src="/assets/community/selfish-community-social-shell.png"
                  alt=""
                  width={512}
                  height={512}
                  decoding="async"
                  loading="lazy"
                  aria-hidden="true"
                />
                <span className="reef-mark">
                  <TelegramIcon />
                </span>
              </div>
              <PendingLink
                url={project.telegramUrl}
                label={copy.community.telegram}
                pendingLabel={copy.community.telegram}
                className="btn btn-gold"
                onActivate={() => trackCta('telegram')}
              />
              <p>{copy.community.telegramNote}</p>
            </div>
            <div className={xReady ? 'reef-social' : 'reef-social is-pending'}>
              <div className="reef-shell">
                <img
                  src="/assets/community/selfish-community-social-shell.png"
                  alt=""
                  width={512}
                  height={512}
                  decoding="async"
                  loading="lazy"
                  aria-hidden="true"
                />
                <span className="reef-mark">
                  <XIcon />
                </span>
              </div>
              <PendingLink
                url={project.xUrl}
                label={copy.community.x}
                pendingLabel={copy.community.x}
                className="btn btn-gold"
                onActivate={() => trackCta('x')}
              />
              <p>{copy.community.xNote}</p>
            </div>
          </div>
        </div>
        {isValidHttpsUrl(project.telegramStickerPackUrl) ? (
          <p className="pack-link">
            <a href={project.telegramStickerPackUrl} target="_blank" rel="noopener noreferrer">
              {copy.community.addToTelegram}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>
        ) : null}
        <StickerGallery />
      </div>
    </section>
  )
}
