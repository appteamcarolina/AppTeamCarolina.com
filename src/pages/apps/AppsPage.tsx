import Layout from '../../components/Layout'
import { apps } from '../../data/content'
import { motion } from 'framer-motion'
import { BackgroundPaths } from '@/components/ui/background-paths'

export default function AppsPage() {
  return (
    <Layout>
      <section className="apps-hero">
        <div className="apps-hero-paths">
          <BackgroundPaths />
        </div>
        <div className="apps-hero-glow" />

        <div className="apps-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="apps-hero-copy"
          >
            <p className="landing-eyebrow">Apps · Shipped by App Team Carolina</p>
            <h1 className="apps-hero-title">Real products, built with care.</h1>
            <p className="apps-hero-sub">
              From accessibility tools to personal finance and educational experiences, our teams build software for real people with real needs.
            </p>

            <div className="apps-hero-tags">
              <span>Accessibility</span>
              <span>Finance</span>
              <span>Education</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section" style={{ paddingTop: 0 }}>
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
