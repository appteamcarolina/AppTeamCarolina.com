import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import { pillars, galleryImages, orgChart } from '../../data/content'
import { AboutBackgroundPaths } from '@/components/ui/background-paths-variants'
import SectionHeading from '@/components/site/SectionHeading'

export default function AboutPage() {
  return (
    <Layout>
      {/* ── Hero ── */}
      <div className="about-page-hero relative overflow-hidden">
        <AboutBackgroundPaths />
        <div className="relative z-10" style={{ padding: 'calc(var(--section-v) + 64px) var(--gutter) var(--section-v)' }}>
          <motion.p
            className="landing-eyebrow"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            UNC Chapel Hill · Since 2015
          </motion.p>
          <motion.h1
            className="display-4 about-hero-title"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
          >
            We build apps.<br />We build people.
          </motion.h1>
          <motion.p
            className="about-hero-sub"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
          >
            App Team Carolina is a student-run iOS development organization at UNC.
            We operate like a company — shipping real products, training real talent,
            and fostering a community that lasts long after graduation.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="about-stats"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { value: '100+', label: 'Active Members' },
              { value: '3',    label: 'Apps Shipped' },
              { value: '4',    label: 'Learning Programs' },
              { value: '2015', label: 'Year Founded' },
            ].map((s) => (
              <div key={s.label} className="about-stat">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="section">
        <SectionHeading title="What We Do." />
        <div className="pillar-content">
          <div className="row">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      <img className="icon" src={pillar.icon} alt={pillar.iconAlt} />
                      {pillar.title}
                    </h4>
                    <p className="card-text">{pillar.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="background-graphic-wave">
        <div className="gallery">
          {galleryImages.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHeading title="Our Leadership." />
        <div className="blurb">
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', marginTop: 0 }}>
            Names are placeholders — update them in <code style={{ color: '#4b8cb8' }}>src/data/content.ts</code>.
          </p>
        </div>
        <div className="org-tree">
          {orgChart.map((tier, ti) => (
            <motion.div
              key={tier.tier}
              className="org-tier"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ti * 0.08 }}
            >
              <div className="org-tier-label" style={{ borderColor: tier.color, color: tier.color }}>
                {tier.tier}
              </div>
              <div className="org-tier-members">
                {tier.members.map((member) => (
                  <div
                    key={member.role}
                    className="org-card"
                    style={{ '--tier-color': tier.color } as React.CSSProperties}
                  >
                    <div className="org-card-accent" style={{ background: tier.color }} />
                    <div className="org-card-body">
                      <p className="org-role">{member.role}</p>
                      <p className="org-name">{member.name}</p>
                      {member.major && (
                        <p className="org-meta">{member.major} · {member.year}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHeading title="Get In Touch." />
        <div className="about-contact">
          {[
            { label: 'Email', value: 'appteamcarolina@unc.edu', href: 'mailto:appteamcarolina@unc.edu' },
            { label: 'Location', value: 'Chapel Hill, NC 27514' },
            { label: 'Instagram', value: '@appteamcarolina', href: 'https://www.instagram.com/appteamcarolina/', external: true },
          ].map((c) => (
            <div key={c.label} className="about-contact-card">
              <p className="about-contact-label">{c.label}</p>
              {c.href ? (
                <a
                  href={c.href}
                  className="about-contact-value"
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                >
                  {c.value}
                </a>
              ) : (
                <p className="about-contact-value">{c.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
