import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout'
import { learningTracks } from '../../data/content'

const steps = [
  { num: '01', title: 'Apply', desc: 'Submit a short application. No experience needed for bootcamps — just curiosity and commitment.' },
  { num: '02', title: 'Learn', desc: 'Attend weekly sessions led by experienced App Team members covering design and development fundamentals.' },
  { num: '03', title: 'Build', desc: 'Work on real projects every week, applying what you learn immediately in a hands-on environment.' },
  { num: '04', title: 'Level Up', desc: 'Graduate into an Apprenticeship or Production team and start shipping real apps used by real people.' },
]

export default function LearningPage() {
  return (
    <Layout>
      <div className="section" style={{ paddingTop: 'calc(var(--section-v) + 56px)' }}>
        <div className="section-header">
          <h1 className="display-4 section-title">Learning Track.</h1>
        </div>
        <div className="blurb">
          <p className="about-lead">
            Whether you've never written a line of Swift or never opened Figma, our learning programs
            meet you where you are. We teach iOS development and UI/UX design from the ground up —
            the same skills used on real production teams.
          </p>
        </div>
      </div>

      {/* Programs */}
      <div className="section">
        <div className="section-header">
          <h2 className="display-6 section-title">Our Programs.</h2>
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

      {/* How it works */}
      <div className="section">
        <div className="section-header">
          <h2 className="display-6 section-title">How It Works.</h2>
        </div>
        <div className="section-content">
          <div className="learning-steps">
            {steps.map((step) => (
              <div key={step.num} className="learning-step">
                <span className="learning-step-num">{step.num}</span>
                <div>
                  <p className="learning-step-title">{step.title}</p>
                  <p className="learning-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section" style={{ textAlign: 'center', paddingBottom: 'calc(var(--section-v) * 1.5)' }}>
        <div className="section-content">
          <h2 className="display-6" style={{ marginBottom: '16px' }}>Ready to start?</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '32px', fontSize: '15px' }}>
            Applications open each semester. Check the apply page for current openings.
          </p>
          <NavLink to="/apply" className="button" style={{ fontFamily: '"Comfortaa", cursive' }}>
            <h4>Apply Now</h4>
          </NavLink>
        </div>
      </div>
    </Layout>
  )
}
