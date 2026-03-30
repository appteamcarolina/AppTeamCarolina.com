import Layout from '../../components/Layout'
import { apps } from '../../data/content'
import { AppsBackgroundPaths } from '@/components/ui/background-paths-variants'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { cn } from '@/lib/utils'

const appPrinciples = [
  {
    label: 'Purposeful',
    title: 'The work starts with a real problem to solve.',
    text: 'Our teams build around needs that actually exist, whether that means supporting accessibility, improving student life, or creating tools people can return to every day.',
  },
  {
    label: 'Collaborative',
    title: 'Products are shaped by more than one discipline.',
    text: 'Design, development, product, and marketing all have a voice in the work, which leads to decisions that are more thoughtful, practical, and sustainable.',
  },
  {
    label: 'Thoughtful',
    title: 'What gets built should feel useful and considered.',
    text: 'We care about whether something is clear, usable, and worth putting in front of real people, not just whether it technically works.',
  },
]

const appMeta: Record<string, { devices: string[]; availability: string[] }> = {
  Luminary: {
    devices: ['iPhone'],
    availability: ['In development'],
  },
  Centible: {
    devices: ['iPhone'],
    availability: ['On the App Store'],
  },
  Bubbly: {
    devices: ['iPad'],
    availability: ['On the App Store'],
  },
}

function getBadgeTone(label: string) {
  if (label === 'iPhone' || label === 'iPad') return 'apps-showcase-card__badge--device-special'
  if (label === 'On the App Store' || label === 'App Store') return 'apps-showcase-card__badge--store'
  if (label === 'In development') return 'apps-showcase-card__badge--beta'
  return ''
}

export default function AppsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="App Team Carolina · Our Work"
        title={<>Real products,<br />built with care.</>}
        description="From accessibility tools to personal finance and educational experiences, our teams build software for real people with real needs."
        background={<AppsBackgroundPaths />}
      />

      <div className="section">
        <SectionHeading title="What Guides The Work." />
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
                  <div className="apps-showcase-card__header">
                    <p className="apps-showcase-card__eyebrow">Product</p>
                    <div className="apps-showcase-card__title-row">
                      <img
                        className="apps-showcase-card__icon"
                        src={app.iconSrc}
                        alt={app.iconAlt}
                      />
                      <div className="apps-showcase-card__title-copy">
                        <h3 className="apps-showcase-card__name">{app.name}</h3>
                        <p className="apps-showcase-card__started">{app.started}</p>
                      </div>
                    </div>
                  </div>

                  <div className="apps-showcase-card__meta">
                    {appMeta[app.name]?.devices.map((device) => (
                      <span key={`${app.name}-${device}`} className={cn('apps-showcase-card__badge apps-showcase-card__badge--device', getBadgeTone(device))}>
                        {device}
                      </span>
                    ))}
                    {appMeta[app.name]?.availability.map((status) => (
                      <span key={`${app.name}-${status}`} className={cn('apps-showcase-card__badge apps-showcase-card__badge--status', getBadgeTone(status))}>
                        {status}
                      </span>
                    ))}
                  </div>

                  <p className="apps-showcase-card__text">{app.description}</p>

                  <div className="apps-showcase-card__footer">
                    {app.link ? (
                      <a
                        href={app.link}
                        target={app.link.startsWith('http') ? '_blank' : undefined}
                        rel={app.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="button apps-showcase-card__button"
                      >
                        {app.linkLabel}
                      </a>
                    ) : (
                      <div className="apps-showcase-card__status-note">
                        Currently being built and refined by the team.
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Layout>
  )
}
