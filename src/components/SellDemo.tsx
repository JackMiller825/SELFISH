import { useState } from 'react'
import { copy } from '../content/copy.ts'

const rising = [22, 30, 26, 42, 38, 56, 72]
const falling = [74, 60, 66, 48, 36, 24, 16]

function CandleChart({ falling: isDown }: { falling: boolean }) {
  const heights = isDown ? falling : rising
  const color = isDown ? '#FF665D' : '#3DDC97'
  return (
    <svg viewBox="0 0 220 150" aria-hidden="true">
      <rect className="chart-board" x="1" y="1" width="218" height="148" rx="16" />
      {[36, 68, 100].map((y) => (
        <line key={y} className="chart-grid" x1="18" x2="202" y1={y} y2={y} />
      ))}
      <line className="chart-axis" x1="18" x2="18" y1="16" y2="132" />
      <line className="chart-axis" x1="18" x2="202" y1="132" y2="132" />
      {heights.map((height, index) => (
        <g key={`${height}-${index}`}>
          <line
            x1={32 + index * 26}
            x2={32 + index * 26}
            y1={128 - height - 10}
            y2={128}
            stroke={color}
            strokeWidth="2"
          />
          <rect x={24 + index * 26} y={128 - height} width="16" height={height} rx="3" fill={color} />
        </g>
      ))}
      {isDown ? (
        <g className="splash">
          <circle cx="188" cy="22" r="6" />
          <circle cx="204" cy="14" r="4" />
          <circle cx="172" cy="12" r="3" />
        </g>
      ) : null}
    </svg>
  )
}

export function SellDemo() {
  const [pressed, setPressed] = useState(false)
  const [announcement, setAnnouncement] = useState('')
  const description = pressed ? copy.story.chartDown : copy.story.chartUp

  return (
    <div className="story-demo">
      <div className="story-demo-copy">
        <h3 id="story-demo-heading">{copy.story.demoTitle}</h3>
        <p>{copy.story.demoCopy}</p>
      </div>
      <button
        type="button"
        className="story-sell"
        aria-pressed={pressed}
        aria-label={pressed ? copy.story.reset : copy.story.sell}
        onClick={() => {
          const next = !pressed
          setPressed(next)
          setAnnouncement(next ? copy.story.sellStatus : copy.story.resetStatus)
        }}
      >
        <img
          src="/assets/story/selfish-story-sell-button.png"
          alt=""
          width={512}
          height={512}
          decoding="async"
          loading="lazy"
          aria-hidden="true"
        />
        <span className="sell-face">{copy.story.sell}</span>
      </button>
      <div className="story-demo-chart">
        <p id="cartoon-chart-title" className="visually-hidden">
          {copy.story.chartLabel}
        </p>
        <p id="cartoon-chart-desc" className="visually-hidden">
          {description}
        </p>
        <div
          className={pressed ? 'story-charts is-sold' : 'story-charts'}
          role="img"
          aria-labelledby="cartoon-chart-title cartoon-chart-desc"
        >
          <div className="chart-pair">
            <div className={pressed ? 'chart-card is-dim' : 'chart-card is-live'}>
              <CandleChart falling={false} />
            </div>
            <span className="chart-arrow" aria-hidden="true">
              →
            </span>
            <div className={pressed ? 'chart-card is-live' : 'chart-card is-dim'}>
              <CandleChart falling />
            </div>
          </div>
          <div className="chart-single">
            <CandleChart falling={pressed} />
          </div>
        </div>
        <p className="story-caption">{copy.story.caption}</p>
        <p className="sell-status">{pressed ? copy.story.sellStatus : copy.story.resetStatus}</p>
        <p className="visually-hidden" aria-live="polite">
          {announcement}
        </p>
      </div>
    </div>
  )
}
