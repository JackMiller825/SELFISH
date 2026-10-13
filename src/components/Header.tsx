import { useEffect, useRef, useState } from 'react'
import { navItems, type SectionId } from '../content/nav.ts'
import { activeNavId } from '../lib/scroll.ts'
import { BrandMark } from './BrandMark.tsx'

export function Header() {
  const [active, setActive] = useState<SectionId>('home')
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      const next = activeNavId()
      setActive((current) => (current === next ? current : next))
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

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    const onPointer = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Node)) return
      if (headerRef.current?.contains(target)) return
      setOpen(false)
    }
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const onNavigate = (id: SectionId) => {
    if (!open) return
    setOpen(false)
    const heading = document.getElementById(`${id}-heading`)
    if (!(heading instanceof HTMLElement)) return
    requestAnimationFrame(() => {
      heading.focus({ preventScroll: true })
    })
  }

  return (
    <header className="site-header" ref={headerRef}>
      <BrandMark />
      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Close menu' : 'Menu'}
      </button>
      <nav id="site-menu" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                aria-current={active === item.id ? 'location' : undefined}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
