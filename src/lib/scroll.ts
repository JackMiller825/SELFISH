import { navItems, type SectionId } from '../content/nav.ts'

function markerOffset(): number {
  const header = window.matchMedia('(min-width: 1024px)').matches ? 120 : 100
  return Math.max(header, Math.round(window.innerHeight * 0.34))
}

export function activeNavId(): SectionId {
  const marker = markerOffset()
  let current: SectionId = 'home'
  for (const item of navItems) {
    const section = document.getElementById(item.id)
    if (!section) continue
    if (section.getBoundingClientRect().top <= marker) current = item.id
  }
  return current
}

export function diveStopId(): SectionId | 'footer' {
  const footer = document.getElementById('site-footer')
  if (footer && footer.getBoundingClientRect().top <= markerOffset()) return 'footer'
  return activeNavId()
}

export function diveRatio(): number {
  const max = document.documentElement.scrollHeight - window.innerHeight
  if (max <= 0) return 0
  return Math.min(1, Math.max(0, window.scrollY / max))
}
