import Layout from '../../components/Layout'
import { learningTracks, productionTracks } from '../../data/content'

export default function TeamsPage() {
  return (
    <Layout>
      <div className="section" style={{ paddingTop: 'calc(var(--section-v) + 56px)' }}>
        <div className="section-header">
          <h1 className="display-4 section-title">The Structure.</h1>
        </div>
        <div className="blurb">
          <p style={{ maxWidth: '680px', lineHeight: 1.8 }}>
            App Team Carolina operates across two tracks: a <strong>Learning track</strong> for
            members building their skills, and a <strong>Production track</strong> for experienced
            members shipping real apps.
          </p>
        </div>
      </div>

      {/* Learning track */}
      <div className="section">
        <div className="section-header">
          <h2 className="display-6 section-title">Learning Track.</h2>
        </div>
        <div className="section-content">
          <div className="row">
            {learningTracks.map((track) => (
              <div key={track.title} className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <p className="label learning"><mark>Learning</mark></p>
                    <h4 className="card-title">
                      <img className="icon" src={track.icon} alt={track.iconAlt} />
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

      {/* Production track */}
      <div className="section">
        <div className="section-header">
          <h2 className="display-6 section-title">Production Track.</h2>
        </div>
        <div className="section-content">
          <div className="row">
            {productionTracks.map((track) => (
              <div key={track.title} className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <p className="label production"><mark>Production</mark></p>
                    <h4 className="card-title">
                      <img className="icon" src={track.icon} alt={track.iconAlt} />
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
    </Layout>
  )
}
