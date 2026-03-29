import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import { productionTracks, apps } from '../../data/content'
import PageCta from '@/components/site/PageCta'
import SectionHeading from '@/components/site/SectionHeading'
import { ProductionBackgroundPaths } from '@/components/ui/background-paths-variants'

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
      <div className="about-page-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <ProductionBackgroundPaths />
        </div>
        <div className="relative z-10" style={{ padding: 'calc(var(--section-v) + 64px) var(--gutter) var(--section-v)' }}>
          <motion.p
            className="landing-eyebrow"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            App Team Carolina · Track
          </motion.p>
          <motion.h1
            className="display-4 about-hero-title"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
          >
            Production Track.
          </motion.h1>
          <motion.p
            className="about-hero-sub"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
          >
            Production is where ideas become real products. Our production members work in
            cross-functional teams — developers, designers, product managers, and marketers —
            shipping apps used by real people in the real world.
          </motion.p>
        </div>
      </div>

      <div className="section">
        <SectionHeading title="Team Types." />
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

      <div className="section">
        <SectionHeading title="Roles." />
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

      <div className="section">
        <SectionHeading title="What We've Built." />
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

      <PageCta
        title="Think you're ready?"
        description="Production roles require an application and interview. We're looking for dedicated, passionate students ready to ship."
        to="/apply"
        actionLabel="Apply for Production"
      />
    </Layout>
  )
}
