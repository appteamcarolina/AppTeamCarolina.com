import Layout from '../../components/Layout'
import { productionTracks, apps } from '../../data/content'
import PageCta from '@/components/site/PageCta'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { ProductionBackgroundPaths } from '@/components/ui/background-paths-variants'
import { Testimonials } from '@/components/ui/unique-testimonial'
import { Badge } from '@/components/ui/badge'

const roles = [
  { icon: '/assets/tools.svg',      title: 'iOS Developer',           desc: 'Build native iOS apps with Swift and SwiftUI.' },
  { icon: '/assets/bezier.svg',     title: 'UI/UX Designer',          desc: 'Design intuitive, beautiful user experiences in Figma.' },
  { icon: '/assets/client.svg',     title: 'Product Manager',         desc: 'Drive strategy, scope, and delivery for a product team.' },
  { icon: '/assets/rocket.svg',     title: 'Marketing Manager',       desc: 'Shape how the world sees and adopts our apps.' },
  { icon: '/assets/tools.svg',      title: 'Backend Developer',       desc: 'Build the APIs and infrastructure that power our apps.' },
]

const productionHighlights = [
  {
    title: 'Cross-functional team experience',
    body: 'Students work alongside designers, developers, product managers, and marketers in a structure that feels much closer to a real studio than a student club.',
  },
  {
    title: 'Real clients and original products',
    body: 'Some teams partner with outside organizations, while others incubate original ideas. Both paths teach students how to make decisions with real stakes.',
  },
  {
    title: 'A portfolio built on shipped work',
    body: 'Production teams create the kind of case studies, app launches, and collaborative experience that actually holds weight after college.',
  },
]

const productionProcess = [
  {
    label: 'Discover',
    title: 'Understand the problem',
    body: 'Teams begin with research, conversations, and product framing so they know what matters before jumping into execution.',
  },
  {
    label: 'Design',
    title: 'Shape the experience',
    body: 'Designers and PMs define flows, systems, and priorities while technical members stress-test feasibility early.',
  },
  {
    label: 'Ship',
    title: 'Build with polish',
    body: 'Developers and designers iterate closely, review work together, and push toward something that feels intentional instead of rushed.',
  },
]

const productionTestimonials = [
  {
    id: 1,
    quote: 'Production made me think beyond my own discipline. You start caring about the whole product, not just your own corner of it.',
    author: 'Ryan Lee',
    role: 'Former Client Team Product Manager',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    quote: 'It was the first time I felt like I was building something that had to hold up for real users. That changed how I approached quality.',
    author: 'Isabella Nguyen',
    role: 'Former Startup Team Designer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    quote: 'The best part was the standard. People here care about details, and that makes the work feel meaningful instead of performative.',
    author: 'Noah Carter',
    role: 'Former iOS Developer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
]

export default function ProductionPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="App Team Carolina · Track"
        title="Production Track."
        description="Production is where ideas become real products. Our production members work in cross-functional teams — developers, designers, product managers, and marketers — shipping apps used by real people in the real world."
        background={<div className="absolute inset-0"><ProductionBackgroundPaths /></div>}
      >
        <Reveal delay={0.5} className="track-hero-stats" y={18}>
          <div className="track-hero-stat">
            <span className="track-hero-stat__value">Client</span>
            <span className="track-hero-stat__label">and startup teams</span>
          </div>
          <div className="track-hero-stat">
            <span className="track-hero-stat__value">Multi</span>
            <span className="track-hero-stat__label">disciplinary roles</span>
          </div>
          <div className="track-hero-stat">
            <span className="track-hero-stat__value">Real</span>
            <span className="track-hero-stat__label">shipping experience</span>
          </div>
        </Reveal>
      </PageHero>

      <div className="section">
        <SectionHeading title="Team Types." />
        <div className="section-content track-grid-shell">
          <div className="row">
            {productionTracks.map((track, index) => (
              <Reveal key={track.title} className="col-md-6" delay={index * 0.05}>
                <article className="track-card track-card--production">
                  <div className="track-card__top">
                    <Badge variant="secondary">Production</Badge>
                    <span className="track-card__eyebrow">Real collaboration</span>
                  </div>
                  <div className="track-card__body">
                    <h4 className="track-card__title">
                      <img className="icon" src={track.icon} alt={track.iconAlt} />
                      {track.title}
                    </h4>
                    <p className="track-card__text">{track.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <SectionHeading title="Why Production Matters." />
        <div className="section-content track-insight-grid">
          {productionHighlights.map((item, index) => (
            <Reveal key={item.title} className="track-insight-card" delay={index * 0.06}>
              <p className="track-insight-card__label">Student value</p>
              <h3 className="track-insight-card__title">{item.title}</h3>
              <p className="track-insight-card__text">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHeading title="Roles On A Team." />
        <div className="section-content">
          <div className="prod-roles prod-roles--grid">
            {roles.map((role, index) => (
              <Reveal key={role.title} className="prod-role-row" delay={index * 0.04}>
                <img src={role.icon} alt={role.title} className="prod-role-icon" />
                <div>
                  <p className="prod-role-title">{role.title}</p>
                  <p className="prod-role-desc">{role.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <SectionHeading title="How Teams Operate." />
        <div className="section-content track-showcase-grid">
          {productionProcess.map((item, index) => (
            <Reveal key={item.title} className="track-showcase-card" delay={index * 0.05}>
              <p className="track-showcase-card__label">{item.label}</p>
              <h3 className="track-showcase-card__title">{item.title}</h3>
              <p className="track-showcase-card__text">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHeading title="What We've Built." />
        <div className="row section-content">
          {apps.map((app, index) => (
            <Reveal key={app.name} className="col-md-4" delay={index * 0.05}>
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
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHeading title="What Members Say." />
        <Reveal className="section-content">
          <div className="track-testimonial-shell">
            <Testimonials items={productionTestimonials} />
          </div>
        </Reveal>
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
