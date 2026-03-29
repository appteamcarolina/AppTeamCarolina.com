import Layout from '../../components/Layout'
import { learningTracks, productionTracks } from '../../data/content'
import PageIntro from '@/components/site/PageIntro'
import SectionHeading from '@/components/site/SectionHeading'

export default function TeamsPage() {
  return (
    <Layout>
      <PageIntro title="The Structure." bodyClassName="about-lead">
        App Team Carolina operates across two tracks: a <strong>Learning track</strong> for
        members building their skills, and a <strong>Production track</strong> for experienced
        members shipping real apps.
      </PageIntro>

      <div className="section">
        <SectionHeading title="Learning Track." />
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

      <div className="section">
        <SectionHeading title="Production Track." />
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
