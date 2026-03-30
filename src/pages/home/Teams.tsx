import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { NavLink } from 'react-router-dom'

const pillars = [
  {
    eyebrow: 'Learning',
    title: 'A hands-on environment where learning happens through making.',
    points: [
      'Where many members begin.',
      'For anyone new to iOS, UI/UX design, or feeling rusty.',
      'Foundations in development, interface design, and product thinking.',
    ],
    icon: '/assets/idea.svg',
    iconAlt: 'Lightbulb icon',
    href: '/learning',
    cta: 'Explore Learning',
  },
  {
    eyebrow: 'Production',
    title: 'An environment to build things with real impact.',
    points: [
      'Real project work for clients, users, and communities.',
      'See how design, development, and product fit together.',
      'Experience closer to how strong product teams work.',
    ],
    icon: '/assets/tools.svg',
    iconAlt: 'Tools icon',
    href: '/production',
    cta: 'Explore Production',
  },
] as const

export default function Teams() {
  return (
    <div id="home-teams" className="section">
      <SectionHeading title="Our Pillars." />

      <Reveal delay={0.04}>
        <div className="blurb home-pillars-blurb">
          <p>
            Our pillars are simple: give students a real place to learn, a real place to build, and a community that makes both feel meaningful.
          </p>
        </div>
      </Reveal>

      <div className="home-pillars-stack">
        {pillars.map((pillar, index) => (
          <Reveal
            key={pillar.eyebrow}
            delay={0.08 + index * 0.06}
            className="home-pillars-block"
          >
            <div className="home-pillars-block__icon-shell">
              <img src={pillar.icon} alt={pillar.iconAlt} className="home-pillars-block__icon" />
            </div>
            <div className="home-pillars-block__content">
              <p className="home-pillars-block__eyebrow">{pillar.eyebrow}</p>
              <h3 className="home-pillars-block__title">{pillar.title}</h3>
              <ul className="home-pillars-block__points">
                {pillar.points.map((point) => (
                  <li key={point} className="home-pillars-block__point">{point}</li>
                ))}
              </ul>
              <NavLink to={pillar.href} className="landing-secondary-link home-pillars-block__link">
                {pillar.cta}
              </NavLink>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
