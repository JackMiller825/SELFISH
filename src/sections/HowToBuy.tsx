import { useEffect, useState } from 'react'
import { displayAddress } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { copyText } from '../lib/copyText.ts'

const stepIcons = [
  '/assets/how-to-buy/selfish-how-to-buy-step-wallet.png',
  '/assets/how-to-buy/selfish-how-to-buy-step-eth.png',
  '/assets/how-to-buy/selfish-how-to-buy-step-verify.png',
  '/assets/how-to-buy/selfish-how-to-buy-step-swap.png',
]

type CopyState = 'idle' | 'copied' | 'failed'

export function HowToBuy() {
  const address = displayAddress()
  const [copyState, setCopyState] = useState<CopyState>('idle')

  useEffect(() => {
    if (copyState !== 'copied') return
    const timer = window.setTimeout(() => setCopyState('idle'), 2000)
    return () => window.clearTimeout(timer)
  }, [copyState])

  const onCopy = async () => {
    const copied = await copyText(address)
    setCopyState(copied ? 'copied' : 'failed')
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
                      aria-live="polite"
                      onClick={() => {
                        void onCopy()
                      }}
                    >
                      {copyState === 'copied' ? copy.howToBuy.copied : copy.howToBuy.copy}
                    </button>
                    <p className="copy-status" aria-live="polite">
                      {copyState === 'failed' ? copy.howToBuy.copyFailed : ''}
                    </p>
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
