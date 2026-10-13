export const copy = {
  meta: {
    title: 'SELLFISH ($SELFISH) | Beneath the Smile',
    description:
      'Meet SELLFISH, the selfish whale of Ethereum: a friendly grin, a secret sell, and an ocean of memes. Explore the story, token details, and reaction stickers.',
  },
  hero: {
    eyebrow: 'ETHEREUM MAINNET · SELLFISH / $SELFISH',
    titleLead: 'BENEATH THE ',
    titleGold: 'SMILE.',
    hook: 'A selfish whale. A secret sell. A very red chart.',
    body: 'He waves with one fin. Sells with the other. Welcome to the ocean beneath the grin.',
    dive: 'Dive into the story',
    buy: 'Buy',
    buyPending: 'Buy — link pending',
    details: 'Contract & chart details',
    scroll: 'Scroll to dive',
  },
  buying: {
    pending: 'Buying is unavailable until the contract and official trading link are confirmed.',
    ready: 'Use the confirmed contract address and official trading destination below.',
  },
  story: {
    titleLead: 'SMILES ABOVE. ',
    titleGold: 'SELLS BELOW.',
    intro: "SELLFISH = sell + selfish + fish. The ocean's friendliest grin hides its most selfish button.",
    beats: [
      {
        title: 'The smile.',
        body: "At the surface, our whale is all waves, big teeth, and 'we're in this together.'",
      },
      {
        title: 'The secret.',
        body: 'Under the waterline, one fin finds the SELL button. Every thought comes back to his own stash.',
      },
      {
        title: 'The splash.',
        body: 'The chart turns red. The little fish stare. He keeps smiling. Classic SELLFISH.',
      },
    ],
    demoTitle: 'A small button. A whale-sized splash.',
    demoCopy: "Press to reveal the cartoon chart's reaction.",
    caption: 'Illustrative animation. This does not make a trade.',
    sell: 'SELL',
    reset: 'Reset scene',
    sellStatus: 'The whale pressed SELL. The cartoon chart drops.',
    resetStatus: 'The cartoon chart is reset.',
    chartLabel: 'Cartoon chart',
    chartUp: 'Green rising candles. Illustrative only, not live market data.',
    chartDown: 'Red falling candles. Illustrative only, not live market data.',
    bannerAlt:
      'SELLFISH whale waving from a crate of gold coins beside a red SELL button as a cartoon chart turns red',
  },
  tokenomics: {
    titleLead: 'OPEN THE ',
    titleGold: 'SUNKEN VAULT.',
    hook: 'The joke is selfish. The facts should be clear.',
    pending:
      'Project parameters will appear here once confirmed. No supply, tax, liquidity, or ownership claims have been assumed.',
    ready: 'Project parameters are listed below. Verify the contract and use the confirmed official links.',
    facts: [
      { key: 'totalSupply', label: 'Total supply' },
      { key: 'buySellTax', label: 'Buy / sell tax' },
      { key: 'liquidityStatus', label: 'Liquidity status' },
      { key: 'ownershipStatus', label: 'Ownership' },
    ] as const,
    networkLabel: 'Network',
    contractLabel: 'Contract address',
    copy: 'Copy',
    copied: 'Copied!',
    copyFailed: 'Could not copy. Select and copy the address below.',
    copyUnavailable: 'Copy is unavailable until a confirmed contract address is supplied.',
    chart: 'View chart',
    chartPending: 'Chart — link pending',
    chartNote: 'An official chart link has not been confirmed.',
  },
  howToBuy: {
    titleLead: 'YOUR ',
    titleGold: 'DIVE PLAN.',
    intro: 'Four checks before you swim. Use only confirmed official destinations.',
    steps: [
      {
        title: 'Get a wallet.',
        body: 'Set up an Ethereum-compatible wallet. Keep your recovery phrase private.',
      },
      {
        title: 'Add ETH.',
        body: 'Fund it on Ethereum mainnet. Leave enough ETH for network fees.',
      },
      {
        title: 'Verify the address.',
        before: 'Compare the full token contract with the confirmed official address:',
      },
      {
        title: 'Swap carefully.',
        body: 'Use the official trading link once available. Review the token, amount, fees, and minimum received.',
      },
    ],
  },
  faq: [
    {
      id: 'meaning',
      question: 'What does SELLFISH mean?',
      answer:
        'Sell + selfish + fish. Our whale smiles at the reef while secretly thinking about his own next sell.',
    },
    {
      id: 'network',
      question: 'Which network is $SELFISH on?',
      answer:
        'SELLFISH is planned for Ethereum mainnet. Confirm the official contract address before interacting with any token using the same name.',
    },
    {
      id: 'links',
      question: 'Where can I find the official contract and links?',
      answer:
        'Use the Tokenomics section and the configured community links on this page. Pending details are clearly marked until confirmed.',
    },
    {
      id: 'sell',
      question: 'Does the SELL button place a trade?',
      answer:
        "No. It changes an illustrative cartoon chart to explain the whale's joke. It does not connect to a wallet or execute a transaction.",
    },
    {
      id: 'returns',
      question: 'Does SELLFISH promise returns?',
      answer: 'No. SELLFISH is a meme about selfish trading. There are no promises of returns.',
    },
  ],
  community: {
    titleLead: 'SMALL FISH. ',
    titleGold: 'BIG ENERGY.',
    hook: 'Same ocean. Different fins.',
    body: 'Bring your best whale jokes, chart reactions, and underwater memes. The community is where the little fish make the noise.',
    telegram: 'Join Telegram',
    telegramPending: 'Join Telegram — link pending',
    telegramNote: "The reef's group chat.",
    x: 'Follow on X',
    xPending: 'Follow on X — link pending',
    xNote: 'Fresh memes from below.',
    socialPending: 'Official social links are pending.',
    addToTelegram: 'Add to Telegram',
    galleryTitleLead: 'REACTIONS FROM THE ',
    galleryTitleGold: 'REEF.',
    galleryCopy: '20 emotions. One selfish whale.',
    downloadPack: 'Download sticker pack',
    packNote: '20 transparent PNGs · 512 × 512.',
    fullArchiveNote: 'Full sticker archive.',
    preview: 'Download preview sheet',
    empty: 'Sticker previews are temporarily unavailable.',
    unavailable: 'Image unavailable',
    downloadPng: 'Download PNG',
    close: 'Close',
    closing: 'The whale thinks about himself. The reef brings the jokes.',
  },
  footer: {
    disclaimer: 'A meme about selfish trading. No promises of returns.',
    pending: 'PROJECT DETAILS PENDING · UNCONFIRMED LINKS ARE DISABLED.',
    back: 'Back to surface',
  },
  dive: {
    label: 'Dive progress',
    note: 'Fictional journey marker',
  },
} as const
