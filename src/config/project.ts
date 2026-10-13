/**
 * Editable SELLFISH project configuration.
 *
 * Unknown token facts stay `null`. Do not invent contract addresses, tax,
 * supply, liquidity, ownership, or social/trading URLs. A format-valid
 * address is not proof of chain identity or safety.
 *
 * `siteUrl` is the public site origin supplied for publication. It is not a
 * secret. It is used only for the canonical URL, absolute social image URLs,
 * robots.txt, and the sitemap. Set it to null to omit those absolute URLs.
 *
 * `fullStickerArchivePath` stays null because the 1024px master archive was
 * not supplied. The site then offers /downloads/selfish-chat-stickers.zip.
 */
export type MaybeString = string | null

export type ProjectConfig = {
  name: string
  ticker: string
  network: string
  chainId: number
  contractAddress: MaybeString
  totalSupply: MaybeString
  buySellTax: MaybeString
  liquidityStatus: MaybeString
  ownershipStatus: MaybeString
  buyUrl: MaybeString
  chartUrl: MaybeString
  telegramUrl: MaybeString
  xUrl: MaybeString
  telegramStickerPackUrl: MaybeString
  siteUrl: MaybeString
  fullStickerArchivePath: MaybeString
}

export const project: ProjectConfig = {
  name: 'SELLFISH',
  ticker: '$SELFISH',
  network: 'Ethereum mainnet',
  chainId: 1,
  contractAddress: null,
  totalSupply: '1,000,000,000',
  buySellTax: '0%',
  liquidityStatus: 'Burn',
  ownershipStatus: 'Renounce',
  buyUrl: 'https://www.dextools.io/app/ether/pair-explorer/0xb36da82329751142b8be2592d627a33865edb1ec',
  chartUrl: 'https://dexscreener.com/ethereum/0xb36da82329751142b8be2592d627a33865edb1ec',
  telegramUrl: 'https://t.me/selfish9891',
  xUrl: 'https://x.com/selfish9891',
  telegramStickerPackUrl: null,
  siteUrl: 'https://selfish.website',
  fullStickerArchivePath: null,
}

export const CHAT_STICKER_PACK_PATH = '/downloads/selfish-chat-stickers.zip'
export const STICKER_PREVIEW_SHEET_PATH = '/downloads/selfish-20-stickers-preview.png'
export const TOKENOMICS_PLACEHOLDER = '[TOKENOMICS]'
export const CONTRACT_PLACEHOLDER = 'Coming Soon..'
