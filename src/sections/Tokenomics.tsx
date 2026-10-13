import { project } from '../config/project.ts'
import { allFactsConfigured, displayFact } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { ContractCopy } from '../components/ContractCopy.tsx'
import { WaveDivider } from '../components/OceanScene.tsx'

const factValues = {
  totalSupply: project.totalSupply,
  buySellTax: project.buySellTax,
  liquidityStatus: project.liquidityStatus,
  ownershipStatus: project.ownershipStatus,
}

export function Tokenomics() {
  return (
    <section className="section section-vault" id="tokenomics" aria-labelledby="tokenomics-heading">
      <div className="wrap token-layout">
        <div className="token-copy copy-panel">
          <h2 id="tokenomics-heading" className="display" tabIndex={-1}>
            {copy.tokenomics.titleLead}
            <span className="gold">{copy.tokenomics.titleGold}</span>
          </h2>
          <p className="hook">{copy.tokenomics.hook}</p>
          <p>{allFactsConfigured() ? copy.tokenomics.ready : copy.tokenomics.pending}</p>
          <p className="network-row">
            <span>{copy.tokenomics.networkLabel}</span>
            <strong>{project.network}</strong>
          </p>
        </div>
        <div className="vault">
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
