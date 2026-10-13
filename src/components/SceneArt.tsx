export function CoinPile() {
  return (
    <div className="coin-pile" aria-hidden="true">
      <span className="coin" />
      <span className="coin" />
      <span className="coin" />
      <span className="coin" />
      <span className="coin" />
      <span className="coin" />
      <span className="coin" />
    </div>
  )
}

export function SellProp() {
  return (
    <div className="sell-prop" aria-hidden="true">
      SELL
    </div>
  )
}

export function CandleDecor({ falling = false }: { falling?: boolean }) {
  const rising = [16, 28, 24, 40, 36, 58, 72]
  const dropping = [74, 62, 50, 58, 36, 24, 14]
  const heights = falling ? dropping : rising
  const color = falling ? '#FF665D' : '#3DDC97'
  return (
    <svg className="candle-decor" viewBox="0 0 160 100" aria-hidden="true">
      {heights.map((height, index) => (
        <g key={`${height}-${index}`}>
          <line
            x1={14 + index * 22}
            x2={14 + index * 22}
            y1={92 - height - 8}
            y2={96}
            stroke={color}
            strokeWidth="2"
          />
          <rect x={6 + index * 22} y={94 - height} width="16" height={height} rx="3" fill={color} />
        </g>
      ))}
    </svg>
  )
}

export function GogglesIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="20" cy="34" r="12" fill="none" stroke="#62E8EC" strokeWidth="4" />
      <circle cx="44" cy="34" r="12" fill="none" stroke="#62E8EC" strokeWidth="4" />
      <path d="M32 34h0M8 30c2-10 8-14 12-12M56 30c-2-10-8-14-12-12" fill="none" stroke="#FFDB64" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 32h0" stroke="#116CDD" strokeWidth="4" />
      <path d="M32 30c2 4 2 4 0 8" fill="none" stroke="#FFDB64" strokeWidth="3" />
    </svg>
  )
}

export function EthIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 6 48 32 32 26 16 32Z" fill="#FFDB64" />
      <path d="M32 30 48 36 32 58 16 36Z" fill="#E1B43A" />
      <path d="M32 26 48 32 32 36 16 32Z" fill="#FFF8DF" />
    </svg>
  )
}

export function ChecklistIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="8" width="36" height="48" rx="6" fill="#FFF8DF" stroke="#002746" strokeWidth="3" />
      <rect x="24" y="4" width="16" height="8" rx="3" fill="#FFDB64" stroke="#002746" strokeWidth="3" />
      <path d="M22 28h18M22 38h18M22 48h12" stroke="#116CDD" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 27l3 3 5-6" fill="none" stroke="#1f9d55" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function SwapIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 26h28l-8-8" fill="none" stroke="#FFDB64" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M46 40H18l8 8" fill="none" stroke="#62E8EC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ShellFrame() {
  return (
    <svg className="shell-frame" viewBox="0 0 220 200" aria-hidden="true">
      <path
        d="M110 176c-46-8-78-46-84-86-8-28 8-52 28-58 6-22 28-36 48-28 8-16 36-22 52-8 22-6 46 8 50 32 22 8 36 34 28 60-8 42-46 82-122 88Z"
        fill="#ffd7e2"
        stroke="#E7B93A"
        strokeWidth="7"
      />
      <path d="M110 168c-8-36-6-78 0-112M78 150c-10-30 2-62 18-90M142 150c10-30-2-62-18-90M58 118c8-16 28-28 52-28M162 118c-8-16-28-28-52-28" fill="none" stroke="#fff8df" strokeWidth="3" opacity="0.7" />
    </svg>
  )
}

export function TelegramIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="#116CDD" />
      <path d="M18 33 46 20 38 46l-8-8-8 4Z" fill="#FFF8DF" />
      <path d="M30 38 34 28" stroke="#116CDD" strokeWidth="2" />
    </svg>
  )
}

export function XIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="#02182C" />
      <path d="M22 22 42 42M42 22 22 42" stroke="#FFF8DF" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}
