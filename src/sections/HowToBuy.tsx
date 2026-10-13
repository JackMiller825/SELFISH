import { project } from '../config/project.ts'
import { canBuy, displayAddress } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { FAQ } from '../components/FAQ.tsx'
import { WaveDivider } from '../components/OceanScene.tsx'
import { PendingLink } from '../components/PendingLink.tsx'
import { ChecklistIcon, EthIcon, GogglesIcon, SwapIcon } from '../components/SceneArt.tsx'

const icons = [GogglesIcon, EthIcon, ChecklistIcon, SwapIcon]

export function HowToBuy() {
  const buyingReady = canBuy()
  return (
    <section className="section section-dive" id="how-to-buy" aria-labelledby="how-to-buy-heading">
      <div className="wrap">
        <div className="section-intro">
          <h2 id="how-to-buy-heading" className="display" tabIndex={-1}>
            {copy.howToBuy.titleLead}
            <span className="gold">{copy.howToBuy.titleGold}</span>
          </h2>
          <p className="lede">{copy.howToBuy.intro}</p>
        </div>
        <ol className="steps">
          {copy.howToBuy.steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <li key={step.title}>
                <span className="step-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{step.title}</h3>
                {'body' in step ? <p>{step.body}</p> : null}
                {'before' in step ? (
                  <p>
                    {step.before} <code className="address">{displayAddress()}</code>
                  </p>
                ) : null}
              </li>
            )
          })}
        </ol>
        <div className="buy-note copy-panel">
          <p id="howto-buy-note">{buyingReady ? copy.buying.ready : copy.buying.pending}</p>
          <PendingLink
            url={project.buyUrl}
            enabled={buyingReady}
            label={copy.hero.buy}
            pendingLabel={copy.hero.buyPending}
            describedBy="howto-buy-note"
          />
        </div>
        <FAQ />
      </div>
      <WaveDivider tone="deep" />
    </section>
  )
}
