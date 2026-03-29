/**
 * Teams
 *
 * "The Structure." section. Explains App Team's two tracks:
 *   - Learning track: Bootcamps and Apprenticeships (4 cards in a row)
 *   - Production track: Client Teams and Start-up Teams (2 cards in a row)
 *
 * Card data is sourced from content.ts so copy changes don't require
 * touching this component.
 */

import { learningTracks, productionTracks } from '../../data/content'
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
            Students usually enter through one of two tracks: a learning path for building
            foundations with structure and mentorship, or a production path for shipping polished
            work on cross-functional teams.
          </p>
        </Reveal>

        <div className="row">
          {learningTracks.map((track, index) => (
            <Reveal key={track.title} className="col-md-3" delay={index * 0.05}>
              <div className={`card home-track-card${track.cardClass ? ` ${track.cardClass}` : ''}`}>
                <div className="card-body">
                  <p className="label learning"><mark>Learning</mark></p>
                  <h4 className="card-title">
                    <img className="teams-icon icon" src={track.icon} alt={track.iconAlt} />
                    {track.title}
                  </h4>
                  <p className="card-text">{track.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="row second-row">
          {productionTracks.map((track, index) => (
            <Reveal key={track.title} className="col-md-6" delay={index * 0.06}>
              <div className={`card home-track-card home-track-card--production${track.cardClass ? ` ${track.cardClass}` : ''}`}>
                <div className="card-body">
                  <p className="label production"><mark>Production</mark></p>
                  <h4 className="card-title">
                    <img className="teams-icon icon" src={track.icon} alt={track.iconAlt} />
                    {track.title}
                  </h4>
                  <p className="card-text">{track.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="home-section-actions" delay={0.12}>
          <NavLink to="/learning" className="landing-secondary-link">Learn more about Learning</NavLink>
          <NavLink to="/production" className="landing-secondary-link">Learn more about Production</NavLink>
        </Reveal>
      </div>
    </div>
  )
}
