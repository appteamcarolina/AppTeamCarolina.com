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

export default function Teams() {
  return (
    <div id="home-teams" className="section">
      <div className="section-header">
        <h2 className="display-6 section-title">The Structure.</h2>
      </div>

      <div className="section-content">
        {/* Learning track — bootcamps and apprenticeships */}
        <div className="row">
          {learningTracks.map((track) => (
            <div key={track.title} className="col-md-3">
              <div className={`card${track.cardClass ? ` ${track.cardClass}` : ''}`}>
                <div className="card-body">
                  <p className="label learning"><mark>Learning</mark></p>
                  <h4 className="card-title">
                    <img className="teams-icon icon" src={track.icon} alt={track.iconAlt} />
                    {track.title}
                  </h4>
                  <p className="card-text">{track.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Production track — client and start-up teams */}
        <div className="row second-row">
          {productionTracks.map((track) => (
            <div key={track.title} className="col-md-6">
              <div className={`card${track.cardClass ? ` ${track.cardClass}` : ''}`}>
                <div className="card-body">
                  <p className="label production"><mark>Production</mark></p>
                  <h4 className="card-title">
                    <img className="teams-icon icon" src={track.icon} alt={track.iconAlt} />
                    {track.title}
                  </h4>
                  <p className="card-text">{track.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
