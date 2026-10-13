import { copy } from '../content/copy.ts'

function Answer({ id, answer }: { id: string; answer: string }) {
  if (id !== 'links') return <p>{answer}</p>
  const [before, after] = answer.split('Tokenomics')
  return (
    <p>
      {before}
      <a href="#tokenomics">Tokenomics</a>
      {after}
    </p>
  )
}

export function FAQ() {
  return (
    <div className="faq">
      {copy.faq.map((item) => (
        <details key={item.id}>
          <summary>
            <h3>{item.question}</h3>
          </summary>
          <div className="faq-answer">
            <Answer id={item.id} answer={item.answer} />
          </div>
        </details>
      ))}
    </div>
  )
}
