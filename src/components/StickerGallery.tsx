import { useEffect, useRef, useState } from 'react'
import { STICKER_PREVIEW_SHEET_PATH } from '../config/project.ts'
import { stickerPackHref, usingChatStickerPack } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { communityStickerSrc, stickers, type Sticker } from '../data/stickers.ts'

export function StickerGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)
  const [broken, setBroken] = useState<Record<string, boolean>>({})
  const [selected, setSelected] = useState<Sticker | null>(null)
  const [dialogBroken, setDialogBroken] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onClose = () => {
      setSelected(null)
      setDialogBroken(false)
      openerRef.current?.focus()
    }
    dialog.addEventListener('close', onClose)
    return () => dialog.removeEventListener('close', onClose)
  }, [])

  const openSticker = (sticker: Sticker, button: HTMLButtonElement) => {
    openerRef.current = button
    setDialogBroken(false)
    setSelected(sticker)
    requestAnimationFrame(() => {
      const dialog = dialogRef.current
      if (dialog && !dialog.open) dialog.showModal()
    })
  }

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  return (
    <div className="reef-gallery">
      <h3 id="gallery-heading" className="reef-gallery-title" tabIndex={-1}>
        <span>REACTIONS FROM THE</span>
        <span className="reef-gold">REEF.</span>
      </h3>
      <p className="reef-gallery-copy">{copy.community.galleryCopy}</p>
      {stickers.length === 0 ? (
        <p>{copy.community.empty}</p>
      ) : (
        <ul id="sticker-grid" className={expanded ? 'reef-grid is-open' : 'reef-grid'}>
          {stickers.map((sticker) => {
            const failed = Boolean(broken[sticker.filename])
            if (failed) {
              return (
                <li key={sticker.filename}>
                  <article className="sticker-card is-unavailable">
                    <p className="sticker-label">
                      <span>{sticker.number}</span>
                      {sticker.emotion}
                    </p>
                    <p>{copy.community.unavailable}</p>
                    <p className="sticker-file">{sticker.filename}</p>
                  </article>
                </li>
              )
            }
            return (
              <li key={sticker.filename}>
                <button
                  type="button"
                  className="reef-card"
                  onClick={(event) => openSticker(sticker, event.currentTarget)}
                >
                  <img
                    src={communityStickerSrc(sticker.filename)}
                    alt={sticker.alt}
                    width={512}
                    height={512}
                    loading="lazy"
                    decoding="async"
                    onError={() => {
                      setBroken((current) => ({ ...current, [sticker.filename]: true }))
                      console.error(`Image unavailable: ${sticker.filename}`)
                    }}
                  />
                  <span className="sticker-label">
                    <span>{sticker.number}</span>
                    {sticker.emotion}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
      <div className="reef-gallery-actions">
        {stickers.length > 6 ? (
          <button
            type="button"
            className="btn btn-ghost"
            aria-expanded={expanded}
            aria-controls="sticker-grid"
            onClick={() => setExpanded((current) => !current)}
          >
            {expanded ? copy.community.viewFewer : copy.community.viewAll}
          </button>
        ) : null}
        <a className="btn btn-gold" href={usingChatStickerPack() ? '/downloads/selfish-20-stickers.zip' : stickerPackHref()} download>
          {copy.community.downloadPack}
        </a>
        <p>{usingChatStickerPack() ? copy.community.packNote : copy.community.fullArchiveNote}</p>
        <a className="text-link" href={STICKER_PREVIEW_SHEET_PATH} download>
          {copy.community.preview}
        </a>
      </div>
      <dialog
        ref={dialogRef}
        className="sticker-dialog"
        aria-labelledby="sticker-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog()
        }}
        onKeyDown={(event) => {
          if (event.key !== 'Escape') return
          event.preventDefault()
          closeDialog()
        }}
      >
        {selected ? (
          <div className="dialog-body">
            <h3 id="sticker-dialog-title">{selected.emotion}</h3>
            {dialogBroken ? (
              <p>
                {copy.community.unavailable}
                <span className="sticker-file"> {selected.filename}</span>
              </p>
            ) : (
              <img
                src={communityStickerSrc(selected.filename)}
                alt={selected.alt}
                width={512}
                height={512}
                decoding="async"
                onError={() => setDialogBroken(true)}
              />
            )}
            <div className="dialog-actions">
              {dialogBroken ? null : (
                <a href={communityStickerSrc(selected.filename)} download={selected.filename}>
                  {copy.community.downloadPng}
                </a>
              )}
              <button type="button" onClick={closeDialog}>
                {copy.community.close}
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  )
}
