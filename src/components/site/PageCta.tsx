import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type PageCtaProps = {
  title: ReactNode
  description: ReactNode
  to: string
  actionLabel: ReactNode
}

export default function PageCta({
  title,
  description,
  to,
  actionLabel,
}: PageCtaProps) {
  return (
    <section className="section" style={{ textAlign: 'center', paddingBottom: 'calc(var(--section-v) * 1.5)' }}>
      <div className="section-content">
        <h2 className="display-6" style={{ marginBottom: '16px' }}>{title}</h2>
        <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '32px', fontSize: '15px' }}>
          {description}
        </p>
        <NavLink to={to} className="button" style={{ fontFamily: '"Comfortaa", cursive' }}>
          <h4>{actionLabel}</h4>
        </NavLink>
      </div>
    </section>
  )
}
