import { project } from '../config/project.ts'
import { configuredText } from '../config/links.ts'
import { copy } from '../content/copy.ts'
import { ContractCopy } from '../components/ContractCopy.tsx'

const factIcons = {
  totalSupply: '/assets/tokenomics/selfish-tokenomics-icon-supply.png',
  buySellTax: '/assets/tokenomics/selfish-tokenomics-icon-tax.png',
  liquidityStatus: '/assets/tokenomics/selfish-tokenomics-icon-liquidity.png',
  ownershipStatus: '/assets/tokenomics/selfish-tokenomics-icon-ownership.png',
} as const

const factValues = {
  totalSupply: project.totalSupply,
  buySellTax: project.buySellTax,
  liquidityStatus: project.liquidityStatus,
  ownershipStatus: project.ownershipStatus,
}

export function Tokenomics() {
  return (
    <section className="section section-vault" id="tokenomics" aria-labelledby="tokenomics-heading">
      <img
        className="token-ocean"
        src="/assets/tokenomics/selfish-tokenomics-ocean.webp"
        alt=""
        width={1672}
        height={941}
        decoding="async"
        loading="lazy"
        aria-hidden="true"
      />
      <div className="token-shade" aria-hidden="true" />
      <div className="token-wrap">
        <div className="token-copy">
          <p className="token-kicker">TOKENOMICS</p>
          <h2 id="tokenomics-heading" className="token-title" tabIndex={-1}>
            <span>OPEN THE</span>
            <span className="token-gold">SUNKEN VAULT.</span>
          </h2>
        </div>
        <div className="vault-stage">
          <div className="vault-frame">
            <img
              className="vault-whale"
              src="/assets/tokenomics/selfish-tokenomics-whale-coins.png"
              alt="SELLFISH whale resting on a pile of gold coins"
              width={900}
              height={618}
              decoding="async"
              loading="lazy"
            />
            <img
              className="vault-rim"
              src="/assets/tokenomics/selfish-tokenomics-vault-frame.png"
              alt=""
              width={1080}
              height={1080}
              decoding="async"
              loading="lazy"
              aria-hidden="true"
            />
            <ul className="vault-facts">
              {copy.tokenomics.facts.map((fact) => (
                <li key={fact.key} className="vault-fact">
                  <img
                    src={factIcons[fact.key]}
                    alt=""
                    width={512}
                    height={512}
                    decoding="async"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <span>{fact.label}</span>
                  <strong>{configuredText(factValues[fact.key]) ?? 'Pending confirmation'}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContractCopy />
      </div>
    </section>
  )
}
