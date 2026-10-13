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
      <svg className="light-rays" viewBox="0 0 1200 800">
        <polygon points="140,0 250,0 20,800" fill="#fff" fillOpacity="0.16" />
        <polygon points="380,0 500,0 300,800" fill="#fff" fillOpacity="0.12" />
        <polygon points="680,0 790,0 860,800" fill="#fff" fillOpacity="0.14" />
        <polygon points="960,0 1080,0 1240,800" fill="#fff" fillOpacity="0.1" />
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

export function ReefFrame() {
  return (
    <div className="reef-frame" aria-hidden="true">
      <svg className="reef-svg reef-left" viewBox="0 0 260 720" preserveAspectRatio="xMinYMax meet">
        <Ruins x={12} />
        <RockPile />
        <CoralFan x={18} y={430} color="#ff5d8f" />
        <CoralBranch x={70} y={470} color="#7dffb2" />
        <CoralFan x={8} y={540} color="#b44bff" />
        <CoralBranch x={120} y={560} color="#ff7a3c" />
        <Fish x={40} y={180} />
        <Fish x={90} y={250} flip />
      </svg>
      <svg className="reef-svg reef-right" viewBox="0 0 260 720" preserveAspectRatio="xMaxYMax meet">
        <Ruins x={150} />
        <RockPile />
        <CoralFan x={150} y={420} color="#49e0c8" />
        <CoralBranch x={80} y={480} color="#ff5d8f" />
        <CoralFan x={170} y={545} color="#ffdb64" />
        <CoralBranch x={30} y={575} color="#7d6bff" />
        <Fish x={120} y={160} flip />
        <Fish x={70} y={280} />
      </svg>
      <span className="bubble b1" />
      <span className="bubble b2" />
      <span className="bubble b3" />
      <span className="bubble b4" />
    </div>
  )
}

function RockPile() {
  return (
    <g>
      <ellipse cx="70" cy="660" rx="90" ry="36" fill="#0c3558" />
      <ellipse cx="170" cy="678" rx="100" ry="32" fill="#082844" />
      <path d="M20 640c28-36 54-28 72-8 16-30 48-34 70-10 20-22 52-16 64 8 18-8 40 8 36 28H20Z" fill="#164e7c" />
    </g>
  )
}

function Ruins({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 470)`}>
      <rect x="18" y="18" width="70" height="16" rx="3" fill="#1d6296" />
      <rect x="28" y="32" width="16" height="120" rx="3" fill="#154e7a" />
      <rect x="58" y="40" width="14" height="112" rx="3" fill="#1a5888" />
      <rect x="22" y="148" width="62" height="12" rx="3" fill="#123f64" />
    </g>
  )
}

function CoralFan({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M28 92c-18-24-22-58-6-78 8 16 16 16 24 6 6 22 8 48 2 72-8 4-14 4-20 0Z" fill={color} />
      <path d="M28 92c2-30 18-58 40-70-8 22-8 40 0 62-12 8-26 10-40 8Z" fill={color} opacity="0.85" />
      <path d="M28 94c-8-28-28-46-48-44 14 16 22 32 24 50 8-2 16-4 24-6Z" fill={color} opacity="0.75" />
    </g>
  )
}

function CoralBranch({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y})`} stroke={color} strokeWidth="8" strokeLinecap="round" fill="none">
      <path d="M24 88V28" />
      <path d="M24 58C8 46 4 28 12 12" />
      <path d="M24 48c16-8 28-22 26-38" />
      <circle cx="24" cy="24" r="6" fill={color} stroke="none" />
      <circle cx="12" cy="12" r="5" fill={color} stroke="none" />
      <circle cx="50" cy="12" r="5" fill={color} stroke="none" />
    </g>
  )
}

function Fish({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`} fill="#08345a" opacity="0.55">
      <ellipse cx="22" cy="10" rx="16" ry="7" />
      <polygon points="36,10 50,2 50,18" />
    </g>
  )
}
