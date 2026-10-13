import { project } from '../config/project.ts'
import { allFactsConfigured, displayFact } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { ContractCopy } from '../components/ContractCopy.tsx'
import { ReefFrame, WaveDivider } from '../components/OceanScene.tsx'
import { stickerSrc } from '../data/stickers.ts'

const factValues = {
  totalSupply: project.totalSupply,
  buySellTax: project.buySellTax,
  liquidityStatus: project.liquidityStatus,
  ownershipStatus: project.ownershipStatus,
}

export function Tokenomics() {
  return (
    <section className="section section-vault" id="tokenomics" aria-labelledby="tokenomics-heading">
      <ReefFrame />
      <div className="wrap token-layout">
        <div className="token-copy">
          <h2 id="tokenomics-heading" className="display" tabIndex={-1}>
            {copy.tokenomics.titleLead}
            <span className="gold">{copy.tokenomics.titleGold}</span>
          </h2>
          <p className="hook">{copy.tokenomics.hook}</p>
          <p>{allFactsConfigured() ? copy.tokenomics.ready : copy.tokenomics.pending}</p>
          <p className="network-row">
            <span className="net-gem" aria-hidden="true" />
            <span>{copy.tokenomics.networkLabel}</span>
            <strong>{project.network}</strong>
          </p>
          <img
            className="vault-peek"
            src={stickerSrc('017-selfish-greedy.png')}
            alt=""
            width={512}
            height={512}
            decoding="async"
            loading="lazy"
          />
        </div>
        <div className="vault">
          <div className="vault-ring" aria-hidden="true" />
          <ul className="fact-grid">
            {copy.tokenomics.facts.map((fact) => (
              <li key={fact.key} className="fact-tile">
                <span>{fact.label}</span>
                <strong>{displayFact(factValues[fact.key])}</strong>
              </li>
            ))}
          </ul>
        </div>
        <ContractCopy />
      </div>
      <WaveDivider tone="mid" />
    </section>
  )
}
