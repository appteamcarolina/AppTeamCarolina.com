import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { NavLink } from 'react-router-dom'

export default function Teams() {
  return (
    <div id="home-teams" className="section">
      <SectionHeading title="Choose Your Path." />

      <div className="section-content">
        <Reveal className="home-track-intro" delay={0.04}>
          <p>
            Students usually enter through one of two tracks: Learning for building
            foundations in iOS development and design, or Production for shipping
            real work for clients, users, and communities.
          </p>
        </Reveal>

        <div className="home-path-grid">
          <Reveal className="home-path-card home-path-card--learning" delay={0.08}>
            <p className="home-path-card__label">Learning</p>
            <h3 className="home-path-card__title">Start here if you&apos;re new to iOS or want to rebuild your fundamentals.</h3>
            <p className="home-path-card__text">
              Learning is where beginners and students who feel rusty can get strong in iOS
              development and design. Through bootcamps, mentorship, and repeated practice,
              members build the foundations that many of our alumni used to grow into the
              skills they have now.
            </p>
            <div className="home-path-card__highlights">
              <span>Swift & SwiftUI</span>
              <span>UI/UX design</span>
              <span>Mentorship</span>
            </div>
          </Reveal>

          <Reveal className="home-path-card home-path-card--production" delay={0.14}>
            <p className="home-path-card__label">Production</p>
            <h3 className="home-path-card__title">Build at a standard that feels closer to industry than to class.</h3>
            <p className="home-path-card__text">
              Production is where members work on real products for clients, users, and communities.
              Teams collaborate across design, development, and product to ship work that is polished,
              useful, and held to a professional standard.
            </p>
            <div className="home-path-card__highlights">
              <span>Real clients</span>
              <span>Cross-functional teams</span>
              <span>Industry standards</span>
            </div>
          </Reveal>
        </div>

        <Reveal className="home-section-actions" delay={0.12}>
          <NavLink to="/learning" className="landing-secondary-link">Learn more about Learning</NavLink>
          <NavLink to="/production" className="landing-secondary-link">Learn more about Production</NavLink>
        </Reveal>
      </div>
    </div>
  )
}
