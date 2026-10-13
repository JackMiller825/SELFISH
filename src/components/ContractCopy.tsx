import { useEffect, useState } from 'react'
import { project } from '../config/project.ts'
import { displayAddress, isValidAddress, isValidHttpsUrl } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { PendingLink } from './PendingLink.tsx'

type CopyState = 'idle' | 'copied' | 'failed'

export function ContractCopy() {
  const [state, setState] = useState<CopyState>('idle')
  const valid = isValidAddress(project.contractAddress)
  const address = displayAddress()

  useEffect(() => {
    if (state !== 'copied') return
    const timer = window.setTimeout(() => setState('idle'), 2000)
    return () => window.clearTimeout(timer)
  }, [state])

  const message =
    state === 'copied' ? copy.tokenomics.copied : state === 'failed' ? copy.tokenomics.copyFailed : ''

  const onCopy = async () => {
    if (!isValidAddress(project.contractAddress)) return
    try {
      await navigator.clipboard.writeText(project.contractAddress)
      setState('copied')
    } catch {
      setState('failed')
    }
  }

  return (
    <div className="contract-panel token-contract">
      <p className="contract-label">{copy.tokenomics.contractLabel}</p>
      <div className="contract-actions">
        <button
          type="button"
          className="btn btn-gold"
          disabled={!valid}
          aria-describedby={valid ? undefined : 'copy-unavailable'}
          onClick={() => {
            void onCopy()
          }}
        >
          {copy.tokenomics.copy}
        </button>
        <PendingLink
          url={project.chartUrl}
          label={copy.tokenomics.chart}
          pendingLabel={copy.tokenomics.chartPending}
          className="btn btn-ghost"
          describedBy={isValidHttpsUrl(project.chartUrl) ? undefined : 'chart-note'}
        />
      </div>
      <p className="copy-status" aria-live="polite">
        {message}
      </p>
      {!valid ? (
        <p id="copy-unavailable" className="pending-note">
          {copy.tokenomics.copyUnavailable}
        </p>
      ) : null}
      {!isValidHttpsUrl(project.chartUrl) ? (
        <p id="chart-note" className="pending-note">
          {copy.tokenomics.chartNote}
        </p>
      ) : null}
      <p className="address">{address}</p>
    </div>
  )
}
