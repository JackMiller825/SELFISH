import { lazy, Suspense, useEffect, useState } from 'react'
import { startPublicAnalytics } from './analytics/tracker.ts'
import { DiveProgress } from './components/DiveProgress.tsx'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { OceanScene } from './components/OceanScene.tsx'
import { isDashboardLocation } from './dashboard/path.ts'
import { activeNavId } from './lib/scroll.ts'
import { Community } from './sections/Community.tsx'
import { Hero } from './sections/Hero.tsx'
import { HowToBuy } from './sections/HowToBuy.tsx'
import { Story } from './sections/Story.tsx'
import { Tokenomics } from './sections/Tokenomics.tsx'

const Dashboard = lazy(() => import('./dashboard/Dashboard.tsx'))

export function App() {
  const [dashboard, setDashboard] = useState(() => isDashboardLocation())

  useEffect(() => {
    const sync = () => setDashboard(isDashboardLocation())
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  useEffect(() => {
    if (!dashboard) return
    const previousTitle = document.title
    document.title = 'Private Visitor Dashboard'
    const meta = document.querySelector('meta[name="robots"]')
    if (meta) {
      const previous = meta.getAttribute('content')
      meta.setAttribute('content', 'noindex, nofollow')
      return () => {
        if (previous) meta.setAttribute('content', previous)
        document.title = previousTitle
      }
    }
    const created = document.createElement('meta')
    created.name = 'robots'
    created.content = 'noindex, nofollow'
    document.head.appendChild(created)
    return () => {
      created.remove()
      document.title = previousTitle
    }
  }, [dashboard])

  useEffect(() => {
    if (dashboard) return
    return startPublicAnalytics()
  }, [dashboard])

  useEffect(() => {
    if (dashboard) return
    let frame = 0
    let published = ''
    const update = () => {
      frame = 0
      const current = activeNavId()
      if (current === published) return
      published = current
      window.dispatchEvent(new CustomEvent('selfish-section', { detail: current }))
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('hashchange', update)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('hashchange', update)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [dashboard])

  useEffect(() => {
    if (dashboard) return
    const scrollToHash = () => {
      const id = window.location.hash.replace('#', '')
      if (!id) return
      document.getElementById(id)?.scrollIntoView()
    }
    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [dashboard])

  if (dashboard) {
    return (
      <Suspense fallback={<main className="dash"><p>Loading dashboard…</p></main>}>
        <Dashboard />
      </Suspense>
    )
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <OceanScene />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Story />
        <Tokenomics />
        <HowToBuy />
        <Community />
      </main>
      <Footer />
      <DiveProgress />
    </>
  )
}
