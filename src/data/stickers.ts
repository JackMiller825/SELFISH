export type Sticker = {
  number: string
  emotion: string
  filename: string
  alt: string
}

/**
 * Gallery order matches the supplied chat stickers. 004 Sad, 007 Shocked,
 * 012 Suspicious, and 018 Innocent are the corrected complete files.
 * Masters in masters-1024/ were not supplied and are not referenced.
 */
export const stickers: Sticker[] = [
  { number: '001', emotion: 'Happy', filename: '001-selfish-happy.png', alt: 'SELLFISH whale, happy' },
  { number: '002', emotion: 'Laughing', filename: '002-selfish-laughing.png', alt: 'SELLFISH whale, laughing' },
  { number: '003', emotion: 'Excited', filename: '003-selfish-excited.png', alt: 'SELLFISH whale, excited' },
  { number: '004', emotion: 'Sad', filename: '004-selfish-sad.png', alt: 'SELLFISH whale, sad' },
  { number: '005', emotion: 'Angry', filename: '005-selfish-angry.png', alt: 'SELLFISH whale, angry' },
  { number: '006', emotion: 'Scared', filename: '006-selfish-scared.png', alt: 'SELLFISH whale, scared' },
  { number: '007', emotion: 'Shocked', filename: '007-selfish-shocked.png', alt: 'SELLFISH whale, shocked' },
  { number: '008', emotion: 'Confused', filename: '008-selfish-confused.png', alt: 'SELLFISH whale, confused' },
  { number: '009', emotion: 'Smug', filename: '009-selfish-smug.png', alt: 'SELLFISH whale, smug' },
  { number: '010', emotion: 'Embarrassed', filename: '010-selfish-embarrassed.png', alt: 'SELLFISH whale, embarrassed' },
  { number: '011', emotion: 'Loving', filename: '011-selfish-loving.png', alt: 'SELLFISH whale, loving' },
  { number: '012', emotion: 'Suspicious', filename: '012-selfish-suspicious.png', alt: 'SELLFISH whale, suspicious' },
  { number: '013', emotion: 'Facepalm', filename: '013-selfish-facepalm.png', alt: 'SELLFISH whale, facepalm' },
  { number: '014', emotion: 'Crying', filename: '014-selfish-crying.png', alt: 'SELLFISH whale, crying' },
  { number: '015', emotion: 'Celebrating', filename: '015-selfish-celebrating.png', alt: 'SELLFISH whale, celebrating' },
  { number: '016', emotion: 'Begging', filename: '016-selfish-begging.png', alt: 'SELLFISH whale, begging' },
  { number: '017', emotion: 'Greedy', filename: '017-selfish-greedy.png', alt: 'SELLFISH whale, greedy' },
  { number: '018', emotion: 'Innocent', filename: '018-selfish-innocent.png', alt: 'SELLFISH whale, innocent' },
  { number: '019', emotion: 'Disappointed', filename: '019-selfish-disappointed.png', alt: 'SELLFISH whale, disappointed' },
  { number: '020', emotion: 'Tired', filename: '020-selfish-tired.png', alt: 'SELLFISH whale, tired' },
]

export function stickerSrc(filename: string): string {
  return `/assets/stickers/${filename}`
}
