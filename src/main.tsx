import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import '@fontsource/fredoka/latin-700.css'
import './styles/tokens.css'
import './styles/global.css'
import './styles/sections.css'
import './styles/home.css'
import './styles/story.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
