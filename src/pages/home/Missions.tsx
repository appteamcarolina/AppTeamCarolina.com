/**
 * Missions
 *
 * "The Purpose." section. Introduces the organization with a short blurb,
 * then renders the three core pillars (Learn, Design, Develop) as cards,
 * followed by a scrolling photo gallery.
 */

import { pillars, galleryImages } from '../../data/content'

export default function Missions() {
  return (
    <div id="missions" className="section">
      <div className="section-header">
        <h2 className="display-6 section-title">The Purpose.</h2>
      </div>

      {/* Organization introduction blurb */}
      <div className="blurb">
        <p><i>
          Welcome! We are App Team Carolina, a student iOS development team based out of the University of North
          Carolina at Chapel Hill. We aren't like any regular student organization… Here at App Team, we run like a
          company, where the people are at the heart of our work. Our team is multifaceted, as we train students in
          the arts of iOS development and UI/UX design to create exciting apps for anyone and everyone to enjoy. Read
          below to learn more about us!
        </i></p>
      </div>

      {/* Learn / Design / Develop pillar cards */}
      <div className="pillar-content">
        <div className="row">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="col-md-4">
              <div className={`card${pillar.cardClass ? ` ${pillar.cardClass}` : ''}`}>
                <div className="card-body">
                  <h4 className="card-title">
                    <img className="missions-icon icon" src={pillar.icon} alt={pillar.iconAlt} />
                    {pillar.title}
                  </h4>
                  <p className="card-text">{pillar.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling photo gallery */}
      <div className="background-graphic-wave">
        <div className="gallery">
          {galleryImages.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}
