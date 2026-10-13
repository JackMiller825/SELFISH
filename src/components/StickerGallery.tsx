import { useEffect, useRef, useState } from 'react'
import { STICKER_PREVIEW_SHEET_PATH } from '../config/project.ts'
import { stickerPackHref, usingChatStickerPack } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { stickerSrc, stickers, type Sticker } from '../data/stickers.ts'

export function StickerGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)
  const [broken, setBroken] = useState<Record<string, boolean>>({})
  const [selected, setSelected] = useState<Sticker | null>(null)
  const [dialogBroken, setDialogBroken] = useState(false)

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
    <div className="gallery">
      <h3 id="gallery-heading" className="display gallery-title" tabIndex={-1}>
        {copy.community.galleryTitleLead}
        <span className="gold">{copy.community.galleryTitleGold}</span>
      </h3>
      <p className="lede">{copy.community.galleryCopy}</p>
      {stickers.length === 0 ? (
        <p>{copy.community.empty}</p>
      ) : (
        <ul className="sticker-grid">
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
                  className="sticker-card"
                  onClick={(event) => openSticker(sticker, event.currentTarget)}
                >
                  <img
                    src={stickerSrc(sticker.filename)}
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
      <div className="gallery-actions">
        <a className="btn btn-primary" href={stickerPackHref()} download>
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
                src={stickerSrc(selected.filename)}
                alt={selected.alt}
                width={512}
                height={512}
                decoding="async"
                onError={() => setDialogBroken(true)}
              />
            )}
            <div className="dialog-actions">
              {dialogBroken ? null : (
                <a href={stickerSrc(selected.filename)} download={selected.filename}>
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
