import { useEffect, useState } from 'react'
import { project } from '../config/project.ts'
import { displayAddress } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { trackCta } from '../analytics/tracker.ts'
import { copyText } from '../lib/copyText.ts'
import { PendingLink } from './PendingLink.tsx'

type CopyState = 'idle' | 'copied' | 'failed'

export function ContractCopy() {
  const [state, setState] = useState<CopyState>('idle')
  const address = displayAddress()

  useEffect(() => {
    if (state !== 'copied') return
    const timer = window.setTimeout(() => setState('idle'), 2000)
    return () => window.clearTimeout(timer)
  }, [state])

  const onCopy = async () => {
    const copied = await copyText(address)
    setState(copied ? 'copied' : 'failed')
  }

  return (
    <div className="contract-panel token-contract">
      <p className="contract-label">{copy.tokenomics.contractLabel}</p>
      <div className="contract-actions">
        <button
          type="button"
          className="btn btn-gold"
          aria-live="polite"
          onClick={() => {
            void onCopy()
          }}
        >
          {state === 'copied' ? copy.tokenomics.copied : copy.tokenomics.copy}
        </button>
        <PendingLink
          url={project.buyUrl}
          label={copy.hero.buy}
          pendingLabel={copy.hero.buy}
          className="btn btn-ghost"
          onActivate={() => trackCta('buy')}
        />
        <PendingLink
          url={project.chartUrl}
          label={copy.tokenomics.chart}
          pendingLabel={copy.tokenomics.chart}
          className="btn btn-ghost"
          onActivate={() => trackCta('chart')}
        />
      </div>
      <p className="copy-status" aria-live="polite">
        {state === 'failed' ? copy.tokenomics.copyFailed : ''}
      </p>
      <p className="address">{address}</p>
    </div>
  )
}
