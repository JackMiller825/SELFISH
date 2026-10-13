const HOSTED_API = 'https://selfish.103.161.35.238.sslip.io'

export function apiOrigin(): string {
  if (typeof location === 'undefined') return ''
  const host = location.hostname.toLowerCase()
  if (host === 'selfish.website' || host === 'www.selfish.website') return HOSTED_API
  return ''
}

export function apiUrl(path: string): string {
  return `${apiOrigin()}${path}`
}
