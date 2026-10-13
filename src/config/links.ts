import {
  CHAT_STICKER_PACK_PATH,
  CONTRACT_PLACEHOLDER,
  TOKENOMICS_PLACEHOLDER,
  project,
} from './project.ts'

const ADDRESS_PATTERN = /^0x[0-9a-fA-F]{40}$/

export function configuredText(value: string | null): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

/** Format check only. It does not prove the address is the official token. */
export function isValidAddress(value: string | null): value is string {
  return typeof value === 'string' && ADDRESS_PATTERN.test(value)
}

export function isValidHttpsUrl(value: string | null): value is string {
  if (!value) return false
  try {
    const url = new URL(value)
    return url.protocol === 'https:'
  } catch {
    return false
  }
}

export function canBuy(): boolean {
  return isValidAddress(project.contractAddress) && isValidHttpsUrl(project.buyUrl)
}

export function allFactsConfigured(): boolean {
  return [
    project.totalSupply,
    project.buySellTax,
    project.liquidityStatus,
    project.ownershipStatus,
  ].every((value) => configuredText(value) !== null)
}

export function hasUnconfirmedDetails(): boolean {
  return !(
    allFactsConfigured() &&
    isValidAddress(project.contractAddress) &&
    isValidHttpsUrl(project.buyUrl) &&
    isValidHttpsUrl(project.chartUrl) &&
    isValidHttpsUrl(project.telegramUrl) &&
    isValidHttpsUrl(project.xUrl)
  )
}

export function displayFact(value: string | null): string {
  return configuredText(value) ?? TOKENOMICS_PLACEHOLDER
}

export function displayAddress(): string {
  return isValidAddress(project.contractAddress) ? project.contractAddress : CONTRACT_PLACEHOLDER
}

export function stickerPackHref(): string {
  const configured = project.fullStickerArchivePath
  if (!configured) return CHAT_STICKER_PACK_PATH
  if (configured.startsWith('/') && !configured.startsWith('//')) return configured
  if (isValidHttpsUrl(configured)) return configured
  return CHAT_STICKER_PACK_PATH
}

export function usingChatStickerPack(): boolean {
  return stickerPackHref() === CHAT_STICKER_PACK_PATH
}
