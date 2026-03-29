import Layout from '../../components/Layout'
import { apps } from '../../data/content'
import { AppsBackgroundPaths } from '@/components/ui/background-paths-variants'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { Badge } from '@/components/ui/badge'

const appPrinciples = [
  {
    label: 'Intentional',
    title: 'We solve real student and community problems',
    text: 'Our projects are not fake portfolio prompts. They are rooted in accessibility, education, finance, and day-to-day needs people actually have.',
  },
  {
    label: 'Collaborative',
    title: 'Every product is shaped by multiple disciplines',
    text: 'Design, development, product, and marketing all shape the outcome, which makes the work more thoughtful and more reflective of how good products are actually made.',
  },
  {
    label: 'Polished',
    title: 'We care about how software feels',
    text: 'We want the things we ship to feel clear, useful, and well-crafted, not just technically complete.',
  },
]

const appStats = [
  { value: 'Accessibility', label: 'education, and finance' },
  { value: 'Student-run', label: 'cross-functional teams' },
  { value: 'Real', label: 'users and product constraints' },
]

const appMeta: Record<string, { devices: string[]; availability: string[] }> = {
  Luminary: {
    devices: ['iPhone'],
    availability: ['Beta testing'],
  },
  Centible: {
    devices: ['iPhone'],
    availability: ['Web preview', 'App in progress'],
  },
  Bubbly: {
    devices: ['iPad'],
    availability: ['App Store'],
  },
}

export default function AppsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="App Team Carolina · Our Work"
        title={<>Real products,<br />built with care.</>}
        description="From accessibility tools to personal finance and educational experiences, our teams build software for real people with real needs."
        background={<AppsBackgroundPaths />}
      >
        <Reveal delay={0.5} className="track-hero-stats" y={18}>
          {appStats.map((item) => (
            <div key={item.value} className="track-hero-stat">
              <span className="track-hero-stat__value">{item.value}</span>
              <span className="track-hero-stat__label">{item.label}</span>
            </div>
          ))}
        </Reveal>
      </PageHero>

      <div className="section">
        <SectionHeading title="How We Think About Products." />
        <div className="apps-principles-grid section-content">
          {appPrinciples.map((principle, index) => (
            <Reveal key={principle.title} className="apps-principle-card" delay={index * 0.06}>
              <p className="apps-principle-card__label">{principle.label}</p>
              <h3 className="apps-principle-card__title">{principle.title}</h3>
              <p className="apps-principle-card__text">{principle.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <SectionHeading title="Our Products." />
        <div className="apps-showcase-list section-content">
          {apps.map((app, index) => (
            <Reveal key={app.name} className="apps-showcase-item" delay={index * 0.05}>
              <article className={index % 2 === 1 ? 'apps-showcase-card apps-showcase-card--reverse' : 'apps-showcase-card'}>
                <div className="apps-showcase-card__media">
                  <img className="card-img-top" src={app.coverSrc} alt={app.coverAlt} />
                </div>
                <div className="apps-showcase-card__copy">
                  <div className="apps-showcase-card__top">
                    <div className="apps-header">
                      <h4 className="card-title">
                        <img
                          className="apps-icon icon"
                          src={app.iconSrc}
                          alt={app.iconAlt}
                          style={{ borderRadius: '5px', width: '28px', height: '28px' }}
                        />
                        {app.name}
                      </h4>
                      <p><i style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>{app.started}</i></p>
                    </div>
                    <Badge variant="secondary">Product</Badge>
                  </div>

                  <div className="apps-showcase-card__meta">
                    {appMeta[app.name]?.devices.map((device) => (
                      <Badge key={`${app.name}-${device}`} variant="outline" className="apps-showcase-card__badge">
                        {device}
                      </Badge>
                    ))}
                    {appMeta[app.name]?.availability.map((status) => (
                      <Badge key={`${app.name}-${status}`} variant="default" className="apps-showcase-card__badge">
                        {status}
                      </Badge>
                    ))}
                  </div>

                  <p className="apps-showcase-card__text">{app.description}</p>

                  {app.link ? (
                    <div className="project-content">
                      <a
                        href={app.link}
                        target={app.link.startsWith('http') ? '_blank' : undefined}
                        rel={app.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="button secondary" style={{ marginTop: '12px' }}>{app.linkLabel}</div>
                      </a>
                    </div>
                  ) : (
                    <div className="project-content">
                      <div className="landing-secondary-link apps-showcase-card__status-link">
                        Currently in active development
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Layout>
  )
}
