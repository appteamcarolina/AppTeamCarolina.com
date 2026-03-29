import Layout from '../../components/Layout'
import { apps } from '../../data/content'
import { motion } from 'framer-motion'
import { AppsBackgroundPaths } from '@/components/ui/background-paths-variants'
import SectionHeading from '@/components/site/SectionHeading'

export default function AppsPage() {
  return (
    <Layout>
      <div className="about-page-hero relative overflow-hidden">
        <AppsBackgroundPaths />
        <div className="relative z-10" style={{ padding: 'calc(var(--section-v) + 64px) var(--gutter) var(--section-v)' }}>
          <motion.p
            className="landing-eyebrow"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            App Team Carolina · Our Work
          </motion.p>
          <motion.h1
            className="display-4 about-hero-title"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
          >
            Real products,<br />built with care.
          </motion.h1>
          <motion.p
            className="about-hero-sub"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
          >
            From accessibility tools to personal finance and educational experiences,
            our teams build software for real people with real needs.
          </motion.p>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <SectionHeading title="Our Products." />
        <div className="row section-content">
          {apps.map((app) => (
            <div key={app.name} className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={app.coverSrc} alt={app.coverAlt} />
                <div className="card-body">
                  <div className="apps-header">
                    <h4 className="card-title">
                      <img
                        className="apps-icon icon"
                        src={app.iconSrc}
                        alt={app.iconAlt}
                        style={{ borderRadius: '5px', width: '26px', height: '26px' }}
                      />
                      {app.name}
                    </h4>
                    <p><i style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>{app.started}</i></p>
                  </div>
                  {app.link ? (
                    <div className="project-content">
                      <p className="card-text">{app.description}</p>
                      <a
                        href={app.link}
                        target={app.link.startsWith('http') ? '_blank' : undefined}
                        rel={app.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="button secondary" style={{ marginTop: '12px' }}>{app.linkLabel}</div>
                      </a>
                    </div>
                  ) : (
                    <p className="card-text">{app.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
