import { roles } from '../../data/content'
import Layout from '../../components/Layout'
import PageIntro from '@/components/site/PageIntro'

export default function ApplyPage() {
  return (
    <Layout>
      <PageIntro title="Apply." bodyClassName="about-lead">
        We're looking for passionate students across iOS development, UI/UX design, product
        management, marketing, and more. Find the role that fits you and apply below.
      </PageIntro>

      <div className="section">
        <div className="section-content">
          <div className="row">
            {roles.map((role) => (
              <div key={role.title} className="col-md-6">
                <div className="card" style={{ marginBottom: 0 }}>
                  <div className="card-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h4 className="card-title" style={{ marginBottom: '2px' }}>{role.title}</h4>
                        {role.subtitle && (
                          <p style={{ margin: '0 0 8px', fontSize: '12px', color: 'rgba(255,255,255,0.55)', fontWeight: 'bold' }}>
                            {role.subtitle}
                          </p>
                        )}
                      </div>
                      {role.label && (
                        <p className={`label ${role.label.toLowerCase()}`}>
                          <mark>{role.label}</mark>
                        </p>
                      )}
                    </div>
                    <p className="card-text" style={{ marginBottom: '12px' }}>{role.description}</p>
                    <p className="req" style={{ marginBottom: '4px' }}>What are we looking for?</p>
                    <ul style={{ margin: '4px 0 16px', paddingLeft: '20px', fontSize: '13.5px', lineHeight: 1.6 }}>
                      {role.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    <a href={role.applyUrl} target="_blank" rel="noopener noreferrer">
                      <div className="button" style={{ width: '100%', display: 'block', textAlign: 'center' }}>
                        {role.applyLabel}
                      </div>
                    </a>
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
