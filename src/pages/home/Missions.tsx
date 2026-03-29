/**
 * Missions
 *
 * Home overview section. Introduces the organization with a short blurb,
 * then renders the three core pillars (Learn, Design, Develop) in a compact
 * staggered layout,
 * followed by a scrolling photo gallery.
 */

import { galleryImages } from '../../data/content'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { NavLink } from 'react-router-dom'

const homePillars = [
  {
    icon: '/assets/idea.svg',
    iconAlt: 'Lightbulb icon',
    eyebrow: 'Education',
    title: 'Learn',
    description:
      'Get practical foundations in iOS development and product thinking through feedback, repetition, and real project work.',
    className: 'home-offer-block--top',
  },
  {
    icon: '/assets/bezier.svg',
    iconAlt: 'Bezier icon',
    eyebrow: 'Craft',
    title: 'Design',
    description:
      'Learn to care about clarity, usability, and visual polish so the work feels intentional and ready for real users.',
    className: 'home-offer-block--mid',
  },
  {
    icon: '/assets/tools.svg',
    iconAlt: 'Tools icon',
    eyebrow: 'Execution',
    title: 'Develop',
    description:
      'Build in teams, ship real work, and get closer to the pace and standards of real product development.',
    className: 'home-offer-block--bottom',
  },
] as const

export default function Missions() {
  return (
    <div id="missions" className="section">
      <SectionHeading title="What We Offer." />

      <Reveal delay={0.04}>
        <div className="blurb home-purpose-blurb">
          <p>
            App Team gives students a place to learn how good products come together,
            build real experience in design and development, and grow with people who
            care about doing the work well.
          </p>
        </div>
      </Reveal>

      <div className="home-offer-staircase">
        {homePillars.map((pillar, index) => (
          <Reveal
            key={pillar.title}
            delay={0.08 + index * 0.06}
            className={`home-offer-block ${pillar.className}`}
          >
            <div className="home-offer-block__icon-shell">
              <img src={pillar.icon} alt={pillar.iconAlt} className="home-offer-block__icon" />
            </div>
            <div className="home-offer-block__content">
              <p className="home-offer-block__eyebrow">{pillar.eyebrow}</p>
              <h3 className="home-offer-block__title">{pillar.title}</h3>
              <p className="home-offer-block__description">{pillar.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="home-section-actions" delay={0.12}>
        <NavLink to="/about" className="landing-secondary-link">Learn more about App Team</NavLink>
      </Reveal>

      <div className="background-graphic-wave">
        <div className="gallery">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <img src={img.src} alt={img.alt} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
