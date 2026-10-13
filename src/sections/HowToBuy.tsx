import { useEffect, useState } from 'react'
import { project } from '../config/project.ts'
import { canBuy, displayAddress, isValidAddress, isValidHttpsUrl } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { FAQ } from '../components/FAQ.tsx'
import { PendingLink } from '../components/PendingLink.tsx'

const stepIcons = [
  '/assets/how-to-buy/selfish-how-to-buy-step-wallet.png',
  '/assets/how-to-buy/selfish-how-to-buy-step-eth.png',
  '/assets/how-to-buy/selfish-how-to-buy-step-verify.png',
  '/assets/how-to-buy/selfish-how-to-buy-step-swap.png',
]

type CopyState = 'idle' | 'copied' | 'failed'

export function HowToBuy() {
  const buyingReady = canBuy()
  const addressReady = isValidAddress(project.contractAddress)
  const address = displayAddress()
  const [copyState, setCopyState] = useState<CopyState>('idle')

  useEffect(() => {
    if (copyState !== 'copied') return
    const timer = window.setTimeout(() => setCopyState('idle'), 2000)
    return () => window.clearTimeout(timer)
  }, [copyState])

  const copyMessage =
    copyState === 'copied' ? copy.howToBuy.copied : copyState === 'failed' ? copy.howToBuy.copyFailed : ''

  const onCopy = async () => {
    if (!isValidAddress(project.contractAddress)) return
    try {
      await navigator.clipboard.writeText(project.contractAddress)
      setCopyState('copied')
    } catch {
      setCopyState('failed')
    }
  }

  return (
    <section className="section section-dive" id="how-to-buy" aria-labelledby="how-to-buy-heading">
      <picture>
        <source media="(max-width: 760px)" srcSet="/assets/how-to-buy/selfish-how-to-buy-ocean-mobile.webp" />
        <img
          className="dive-ocean"
          src="/assets/how-to-buy/selfish-how-to-buy-ocean-desktop.webp"
          alt=""
          width={1672}
          height={941}
          decoding="async"
          loading="lazy"
          aria-hidden="true"
        />
      </picture>
      <div className="dive-shade" aria-hidden="true" />
      <div className="dive-wrap">
        <div className="dive-head">
          <div className="dive-copy">
            <p className="dive-kicker">HOW TO BUY</p>
            <h2 id="how-to-buy-heading" className="dive-title" tabIndex={-1}>
              <span>YOUR</span>
              <span className="dive-gold">DIVE PLAN.</span>
            </h2>
            <p className="dive-intro">{copy.howToBuy.intro}</p>
          </div>
          <img
            className="dive-whale"
            src="/assets/how-to-buy/selfish-how-to-buy-whale-guide.png"
            alt="SELLFISH whale guide"
            width={900}
            height={700}
            decoding="async"
            loading="lazy"
          />
        </div>
        <ol className="dive-steps">
          {copy.howToBuy.steps.map((step, index) => (
            <li key={step.title}>
              <span className="dive-num" aria-hidden="true">
                {index + 1}
              </span>
              <img
                className="dive-icon"
                src={stepIcons[index]}
                alt=""
                width={512}
                height={512}
                decoding="async"
                loading="lazy"
                aria-hidden="true"
              />
              <div className="dive-step-copy">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {index === 2 ? (
                  <div className="dive-contract">
                    <p className="dive-address">{address}</p>
                    <button
                      type="button"
                      className="btn btn-ghost"
                      disabled={!addressReady}
                      onClick={() => {
                        void onCopy()
                      }}
                    >
                      {copy.howToBuy.copy}
                    </button>
                    <p className="copy-status" aria-live="polite">
                      {copyMessage}
                    </p>
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
        <div className="dive-buy">
          <p id="howto-buy-note">{buyingReady ? copy.buying.ready : copy.howToBuy.buyPending}</p>
          <PendingLink
            url={project.buyUrl}
            enabled={buyingReady && isValidHttpsUrl(project.buyUrl)}
            label={copy.howToBuy.buy}
            pendingLabel={copy.howToBuy.buy}
            className={buyingReady ? 'btn btn-gold btn-wide' : 'btn btn-muted btn-wide'}
            describedBy="howto-buy-note"
          />
        </div>
        <FAQ />
      </div>
    </section>
  )
}
