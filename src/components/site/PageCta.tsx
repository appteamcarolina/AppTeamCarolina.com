import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import Reveal from '@/components/site/Reveal'

type PageCtaProps = {
  eyebrow?: ReactNode
  title: ReactNode
  description: ReactNode
  to: string
  actionLabel: ReactNode
  secondaryTo?: string
  secondaryLabel?: ReactNode
  notes?: Array<{
    title: ReactNode
    body: ReactNode
  }>
}

export default function PageCta({
  eyebrow,
  title,
  description,
  to,
  actionLabel,
  secondaryTo,
  secondaryLabel,
  notes = [],
}: PageCtaProps) {
  return (
    <section className="section page-cta">
      <Reveal className="page-cta__shell">
        <div className="page-cta__grid">
          <div className="page-cta__main">
            {eyebrow ? <p className="page-cta__eyebrow">{eyebrow}</p> : null}
            <h2 className="page-cta__title">{title}</h2>
            <p className="page-cta__text">{description}</p>
            <div className="page-cta__actions">
              <NavLink to={to} className="button page-cta__button">
                {actionLabel}
              </NavLink>
              {secondaryTo && secondaryLabel ? (
                <NavLink to={secondaryTo} className="landing-secondary-link page-cta__link">
                  {secondaryLabel}
                </NavLink>
              ) : null}
            </div>
          </div>

          {notes.length > 0 ? (
            <div className="page-cta__side">
              {notes.map((note) => (
                <div key={String(note.title)} className="page-cta__note">
                  <p className="page-cta__note-title">{note.title}</p>
                  <p className="page-cta__note-text">{note.body}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Reveal>
    </section>
  )
}
