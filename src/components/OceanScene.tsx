export function WaveDivider({ tone }: { tone: 'surface' | 'mid' | 'deep' }) {
  return (
    <svg className={`wave-divider wave-${tone}`} viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 46c160 34 280 34 440 0s280-34 440 0 280 34 440 0 120-18 120-18v62H0Z" />
    </svg>
  )
}

export function OceanScene() {
  return (
    <div className="ocean-decor" aria-hidden="true">
      <svg className="light-rays" viewBox="0 0 1200 700">
        <polygon points="180,0 260,0 80,700" />
        <polygon points="430,0 520,0 390,700" />
        <polygon points="700,0 790,0 860,700" />
        <polygon points="960,0 1040,0 1180,700" />
      </svg>
      <span className="bubble b1" />
      <span className="bubble b2" />
      <span className="bubble b3" />
      <span className="bubble b4" />
      <span className="bubble b5" />
      <span className="bubble b6" />
      <span className="bubble b7" />
      <svg className="fish f1" viewBox="0 0 80 36">
        <ellipse cx="36" cy="18" rx="24" ry="12" />
        <polygon points="58,18 78,6 78,30" />
      </svg>
      <svg className="fish f2" viewBox="0 0 80 36">
        <ellipse cx="36" cy="18" rx="24" ry="12" />
        <polygon points="58,18 78,6 78,30" />
      </svg>
      <svg className="fish f3" viewBox="0 0 64 30">
        <ellipse cx="30" cy="15" rx="18" ry="9" />
        <polygon points="46,15 62,6 62,24" />
      </svg>
    </div>
  )
}

export function Coral({ side }: { side: 'left' | 'right' }) {
  return (
    <svg className={`coral coral-${side}`} viewBox="0 0 180 320" aria-hidden="true">
      <path d="M90 310c-36-28-58-78-42-120 18-8 28-30 16-52-22-8-30-40-8-62 20-28 58-24 70-2 18 8 40 2 48-18 22 18 18 52-4 70 8 22-2 48-24 58 8 36-10 86-56 126Z" />
      <circle cx="48" cy="214" r="26" />
      <circle cx="132" cy="168" r="20" />
      <circle cx="78" cy="96" r="16" />
    </svg>
  )
}
