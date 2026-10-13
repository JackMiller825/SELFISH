import { project } from '../config/project.ts'

type BrandMarkProps = {
  heading?: boolean
}

export function BrandMark({ heading = false }: BrandMarkProps) {
  const identity = (
    <>
      <img
        className="brand-logo"
        src="/assets/home/selfish-logo-transparent.png"
        alt=""
        width={256}
        height={256}
        decoding="async"
      />
      <span className="brand-text">
        <span className="brand-name">{project.name}</span>
        <span className="brand-ticker">{project.ticker}</span>
      </span>
    </>
  )

  if (heading) {
    return <div className="brand brand-static">{identity}</div>
  }

  return (
    <a className="brand" href="#home">
      {identity}
    </a>
  )
}
