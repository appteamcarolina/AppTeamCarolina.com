import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout'
import { productionTracks, apps } from '../../data/content'

const roles = [
  { icon: '/assets/tools.svg',      title: 'iOS Developer',           desc: 'Build native iOS apps with Swift and SwiftUI.' },
  { icon: '/assets/bezier.svg',     title: 'UI/UX Designer',          desc: 'Design intuitive, beautiful user experiences in Figma.' },
  { icon: '/assets/client.svg',     title: 'Product Manager',         desc: 'Drive strategy, scope, and delivery for a product team.' },
  { icon: '/assets/rocket.svg',     title: 'Marketing Manager',       desc: 'Shape how the world sees and adopts our apps.' },
  { icon: '/assets/tools.svg',      title: 'Backend Developer',       desc: 'Build the APIs and infrastructure that power our apps.' },
]

export default function ProductionPage() {
  return (
    <Layout>
      <div className="section" style={{ paddingTop: 'calc(var(--section-v) + 56px)' }}>
        <div className="section-header">
          <h1 className="display-4 section-title">Production Track.</h1>
        </div>
        <div className="blurb">
          <p className="about-lead">
            Production is where ideas become real products. Our production members work in
            cross-functional teams — developers, designers, product managers, and marketers —
            shipping apps used by real people in the real world.
          </p>
        </div>
      </div>

      {/* Team types */}
      <div className="section">
        <div className="section-header">
          <h2 className="display-6 section-title">Team Types.</h2>
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

      {/* Roles */}
      <div className="section">
        <div className="section-header">
          <h2 className="display-6 section-title">Roles.</h2>
        </div>
        <div className="section-content">
          <div className="prod-roles">
            {roles.map((role) => (
              <div key={role.title} className="prod-role-row">
                <img src={role.icon} alt={role.title} className="prod-role-icon" />
                <div>
                  <p className="prod-role-title">{role.title}</p>
                  <p className="prod-role-desc">{role.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apps we've built */}
      <div className="section">
        <div className="section-header">
          <h2 className="display-6 section-title">What We've Built.</h2>
        </div>
        <div className="row section-content">
          {apps.map((app) => (
            <div key={app.name} className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={app.coverSrc} alt={app.coverAlt} />
                <div className="card-body">
                  <h4 className="card-title">
                    <img className="apps-icon icon" src={app.iconSrc} alt={app.iconAlt} style={{ borderRadius: '5px', width: '26px', height: '26px' }} />
                    {app.name}
                  </h4>
                  <p className="card-text">{app.description}</p>
                  {app.link && (
                    <a href={app.link} target={app.link.startsWith('http') ? '_blank' : undefined} rel={app.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      <div className="button secondary" style={{ marginTop: '12px' }}>{app.linkLabel}</div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="section" style={{ textAlign: 'center', paddingBottom: 'calc(var(--section-v) * 1.5)' }}>
        <div className="section-content">
          <h2 className="display-6" style={{ marginBottom: '16px' }}>Think you're ready?</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '32px', fontSize: '15px' }}>
            Production roles require an application and interview. We're looking for dedicated,
            passionate students ready to ship.
          </p>
          <NavLink to="/apply" className="button" style={{ fontFamily: '"Comfortaa", cursive' }}>
            <h4>Apply for Production</h4>
          </NavLink>
        </div>
      </div>
    </Layout>
  )
}
