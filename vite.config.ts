import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const DESCRIPTION =
  'Meet SELLFISH, the selfish whale of Ethereum: a friendly grin, a secret sell, and an ocean of memes. Explore the story, token details, and reaction stickers.'

function readSiteOrigin(): string | null {
  const file = fileURLToPath(new URL('./src/config/project.ts', import.meta.url))
  const source = readFileSync(file, 'utf8')
  const match = source.match(/siteUrl:\s*(null|'(https:\/\/[^']*)'|"(https:\/\/[^"]*)")/)
  if (!match || match[1] === 'null') return null
  const value = match[2] ?? match[3]
  if (!value) return null
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:') return null
    return url.origin
  } catch {
    return null
  }
}

function sellfishSeo(): Plugin {
  const origin = readSiteOrigin()
  return {
    name: 'sellfish-seo',
    transformIndexHtml(html) {
      if (!origin) return html.replace('<!-- sellfish-absolute-meta -->', '')
      const image = `${origin}/assets/brand/selfish-banner-3to1.png`
      const imageAlt = 'SELLFISH whale on gold coins beside a chart that turns from green to red'
      const jsonLd = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SELLFISH ($SELFISH)',
        description: DESCRIPTION,
        url: `${origin}/`,
      })
      const tags = [
        `<link rel="canonical" href="${origin}/" />`,
        `<meta property="og:url" content="${origin}/" />`,
        `<meta property="og:image" content="${image}" />`,
        `<meta property="og:image:alt" content="${imageAlt}" />`,
        `<meta property="og:image:width" content="1500" />`,
        `<meta property="og:image:height" content="500" />`,
        `<meta name="twitter:image" content="${image}" />`,
        `<meta name="twitter:image:alt" content="${imageAlt}" />`,
        `<script type="application/ld+json">${jsonLd}</script>`,
      ].join('\n    ')
      return html.replace('<!-- sellfish-absolute-meta -->', tags)
    },
    generateBundle() {
      if (!origin) return
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${origin}/</loc></url>\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), sellfishSeo()],
})
