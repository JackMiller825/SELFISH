import { project } from '../config/project.ts'
import { isValidHttpsUrl } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { stickerSrc } from '../data/stickers.ts'
import { Coral, WaveDivider } from '../components/OceanScene.tsx'
import { PendingLink } from '../components/PendingLink.tsx'
import { ShellFrame, TelegramIcon, XIcon } from '../components/SceneArt.tsx'
import { StickerGallery } from '../components/StickerGallery.tsx'

export function Community() {
  const telegramReady = isValidHttpsUrl(project.telegramUrl)
  const xReady = isValidHttpsUrl(project.xUrl)
  const socialsReady = telegramReady && xReady
  return (
    <section className="section section-reef" id="community" aria-labelledby="community-heading">
      <Coral side="left" />
      <Coral side="right" />
      <div className="wrap">
        <div className="community-top">
          <div className="copy-panel">
            <img
              className="greeting-whale"
              src={stickerSrc('001-selfish-happy.png')}
              alt="SELLFISH whale, happy"
              width={512}
              height={512}
              decoding="async"
              loading="lazy"
            />
            <h2 id="community-heading" className="display" tabIndex={-1}>
              {copy.community.titleLead}
              <span className="gold">{copy.community.titleGold}</span>
            </h2>
            <p className="hook">{copy.community.hook}</p>
            <p>{copy.community.body}</p>
          </div>
          <div className="shells">
            <div className={telegramReady ? 'shell' : 'shell is-pending'}>
              <ShellFrame />
              <div className="shell-body">
                <TelegramIcon />
                <PendingLink
                  url={project.telegramUrl}
                  label={copy.community.telegram}
                  pendingLabel={copy.community.telegramPending}
                  className="btn btn-gold"
                  describedBy={socialsReady ? undefined : 'social-pending-note'}
                />
                <p>{copy.community.telegramNote}</p>
              </div>
            </div>
            <div className={xReady ? 'shell' : 'shell is-pending'}>
              <ShellFrame />
              <div className="shell-body">
                <XIcon />
                <PendingLink
                  url={project.xUrl}
                  label={copy.community.x}
                  pendingLabel={copy.community.xPending}
                  className="btn btn-gold"
                  describedBy={socialsReady ? undefined : 'social-pending-note'}
                />
                <p>{copy.community.xNote}</p>
              </div>
            </div>
          </div>
        </div>
        {socialsReady ? null : (
          <p id="social-pending-note" className="pending-note social-note">
            {copy.community.socialPending}
          </p>
        )}
        {isValidHttpsUrl(project.telegramStickerPackUrl) ? (
          <p className="pack-link">
            <a href={project.telegramStickerPackUrl} target="_blank" rel="noopener noreferrer">
              {copy.community.addToTelegram}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>
        ) : null}
        <StickerGallery />
        <p className="closing">{copy.community.closing}</p>
      </div>
      <WaveDivider tone="deep" />
    </section>
  )
}
