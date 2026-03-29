import Layout from '../../components/Layout'
import { learningTracks } from '../../data/content'
import PageCta from '@/components/site/PageCta'
import PageIntro from '@/components/site/PageIntro'
import SectionHeading from '@/components/site/SectionHeading'

const steps = [
  { num: '01', title: 'Apply', desc: 'Submit a short application. No experience needed for bootcamps — just curiosity and commitment.' },
  { num: '02', title: 'Learn', desc: 'Attend weekly sessions led by experienced App Team members covering design and development fundamentals.' },
  { num: '03', title: 'Build', desc: 'Work on real projects every week, applying what you learn immediately in a hands-on environment.' },
  { num: '04', title: 'Level Up', desc: 'Graduate into an Apprenticeship or Production team and start shipping real apps used by real people.' },
]

export default function LearningPage() {
  return (
    <Layout>
      <PageIntro title="Learning Track.">
        Whether you've never written a line of Swift or never opened Figma, our learning programs
        meet you where you are. We teach iOS development and UI/UX design from the ground up —
        the same skills used on real production teams.
      </PageIntro>

      <div className="section">
        <SectionHeading title="Our Programs." />
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
        <SectionHeading title="How It Works." />
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

      <PageCta
        title="Ready to start?"
        description="Applications open each semester. Check the apply page for current openings."
        to="/apply"
        actionLabel="Apply Now"
      />
    </Layout>
  )
}
