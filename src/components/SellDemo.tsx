import { useState } from 'react'
import { copy } from '../content/copy.ts'

export function SellDemo() {
  const [pressed, setPressed] = useState(false)
  const [announcement, setAnnouncement] = useState('')
  const description = pressed ? copy.story.chartDown : copy.story.chartUp

  return (
    <div className="demo-panel">
      <div className="demo-copy">
        <h3 id="story-demo-heading">{copy.story.demoTitle}</h3>
        <p>{copy.story.demoCopy}</p>
        <p className="caption">{copy.story.caption}</p>
      </div>
      <button
        type="button"
        className="sell-button"
        aria-pressed={pressed}
        onClick={() => {
          const next = !pressed
          setPressed(next)
          setAnnouncement(next ? copy.story.sellStatus : copy.story.resetStatus)
        }}
      >
        {pressed ? copy.story.reset : copy.story.sell}
      </button>
      <div className="chart-column">
        <div
          className={pressed ? 'cartoon-chart is-down' : 'cartoon-chart'}
          role="img"
          aria-labelledby="cartoon-chart-title cartoon-chart-desc"
        >
          <p id="cartoon-chart-title" className="chart-label">
            {copy.story.chartLabel}
          </p>
          <p id="cartoon-chart-desc" className="visually-hidden">
            {description}
          </p>
          <svg viewBox="0 0 280 150" aria-hidden="true">
            <rect x="8" y="8" width="264" height="134" rx="16" className="chart-board" />
            <g className="chart-up">
              <polyline points="28,118 70,96 110,100 150,72 190,64 236,28" />
              <polygon points="228,20 248,28 226,40" />
            </g>
            <g className="chart-down">
              <polyline points="28,30 70,48 112,44 154,78 196,96 236,124" />
              <polygon points="226,112 248,124 224,132" />
            </g>
            <g className="splash">
              <circle cx="214" cy="28" r="8" />
              <circle cx="236" cy="18" r="5" />
              <circle cx="196" cy="16" r="4" />
            </g>
          </svg>
        </div>
        <p className="sell-status">{pressed ? copy.story.sellStatus : copy.story.resetStatus}</p>
        <p className="visually-hidden" aria-live="polite">
          {announcement}
        </p>
      </div>
    </div>
  )
}
