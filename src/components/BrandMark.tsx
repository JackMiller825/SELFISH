import { project } from '../config/project.ts'

type BrandMarkProps = {
  heading?: boolean
}

export function BrandMark({ heading = false }: BrandMarkProps) {
  const identity = (
    <>
      <img
        className="brand-logo"
        src="/assets/brand/selfish-logo-transparent.png"
        srcSet="/assets/brand/selfish-logo-256.png 256w, /assets/brand/selfish-logo-transparent.png 1024w"
        sizes="56px"
        alt=""
        width={1024}
        height={1024}
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
