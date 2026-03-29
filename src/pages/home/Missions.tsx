/**
 * Missions
 *
 * "The Purpose." section. Introduces the organization with a short blurb,
 * then renders the three core pillars (Learn, Design, Develop) as cards,
 * followed by a scrolling photo gallery.
 */

import { pillars, galleryImages } from '../../data/content'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { NavLink } from 'react-router-dom'

export default function Missions() {
  return (
    <div id="missions" className="section">
      <SectionHeading title="Why We Exist." />

      <Reveal delay={0.04}>
        <div className="blurb home-purpose-blurb">
          <p>
            App Team was built for students who want more than surface-level exposure.
            We teach people how to think about product, how to care about craft, and how
            to make ambitious work in a community that feels warm, serious, and genuinely collaborative.
          </p>
        </div>
      </Reveal>

      <div className="pillar-content home-purpose-grid">
        <div className="row">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} className="col-md-4" delay={index * 0.06}>
              <div className={`card home-purpose-card${pillar.cardClass ? ` ${pillar.cardClass}` : ''}`}>
                <div className="card-body">
                  {pillar.eyebrow && <p className="home-purpose-card__eyebrow">{pillar.eyebrow}</p>}
                  <h4 className="card-title">
                    <img className="missions-icon icon" src={pillar.icon} alt={pillar.iconAlt} />
                    {pillar.title}
                  </h4>
                  <p className="card-text">{pillar.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
