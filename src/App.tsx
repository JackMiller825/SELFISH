import { useEffect } from 'react'
import { DiveProgress } from './components/DiveProgress.tsx'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { OceanScene } from './components/OceanScene.tsx'
import { Community } from './sections/Community.tsx'
import { Hero } from './sections/Hero.tsx'
import { HowToBuy } from './sections/HowToBuy.tsx'
import { Story } from './sections/Story.tsx'
import { Tokenomics } from './sections/Tokenomics.tsx'

export function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace('#', '')
      if (!id) return
      document.getElementById(id)?.scrollIntoView()
    }
    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

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
