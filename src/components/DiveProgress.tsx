import { useEffect, useState } from 'react'
import { copy } from '../content/copy.ts'
import { diveRatio, diveStopId } from '../lib/scroll.ts'

const stops = [
  { id: 'home', label: 'Surface' },
  { id: 'story', label: 'Secret' },
  { id: 'tokenomics', label: 'Vault' },
  { id: 'how-to-buy', label: 'Dive plan' },
  { id: 'community', label: 'Reef' },
  { id: 'footer', label: 'Seabed' },
] as const

export function DiveProgress() {
  const [stop, setStop] = useState<(typeof stops)[number]['id']>('home')
  const [ratio, setRatio] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      const next = diveStopId()
      const nextRatio = diveRatio()
      setStop((current) => (current === next ? current : next))
      setRatio((current) => (Math.abs(current - nextRatio) < 0.01 ? current : nextRatio))
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <aside className="dive-progress" aria-label={copy.dive.label}>
      <p className="dive-label">{copy.dive.label}</p>
      <p className="dive-note">{copy.dive.note}</p>
      <div className="dive-track" aria-hidden="true">
        <span style={{ height: `${Math.round(ratio * 100)}%` }} />
      </div>
      <ol>
        {stops.map((item) => (
          <li key={item.id} className={stop === item.id ? 'is-current' : undefined}>
            {item.label}
          </li>
        ))}
      </ol>
    </aside>
  )
}
