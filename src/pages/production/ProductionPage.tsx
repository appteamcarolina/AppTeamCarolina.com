import Layout from '../../components/Layout'
import { productionTracks } from '../../data/content'
import PageCta from '@/components/site/PageCta'
import PageHero from '@/components/site/PageHero'
import ProductShowcase from '@/components/site/ProductShowcase'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { ProductionBackgroundPaths } from '@/components/ui/background-paths-variants'
import { Badge } from '@/components/ui/badge'

const roles = [
  {
    icon: '/assets/icons/tools.svg',
    title: 'iOS Developer',
    desc: 'Build the iPhone and iPad experience in Swift and SwiftUI, turning product ideas and designs into something polished, reliable, and ready to ship.',
  },
  {
    icon: '/assets/icons/bezier.svg',
    title: 'UI/UX Designer',
    desc: 'Shape flows, interfaces, and visual systems in Figma so the product feels clear, intuitive, and thoughtful from the first interaction onward.',
  },
  {
    icon: '/assets/icons/client.svg',
    title: 'Product Manager',
    desc: 'Help define priorities, scope decisions, and keep the team moving with a strong understanding of the user problem and product direction.',
  },
  {
    icon: '/assets/icons/rocket.svg',
    title: 'Marketing Manager',
    desc: 'Think about launch, storytelling, and adoption so the product reaches the right people and communicates why it matters.',
  },
  {
    icon: '/assets/icons/tools.svg',
    title: 'Backend Developer',
    desc: 'Build the APIs, data flows, and infrastructure that support the app experience behind the scenes and help products scale well.',
  },
]

const productionProcess = [
  {
    label: 'Discover',
    icon: '/assets/icons/client.svg',
    title: 'Understand the problem',
    body: 'Teams begin with research, conversations, and product framing so they know what matters before jumping into execution.',
  },
  {
    label: 'Design',
    icon: '/assets/icons/bezier.svg',
    title: 'Shape the experience',
    body: 'Designers and PMs define flows, systems, and priorities while technical members stress-test feasibility early.',
  },
  {
    label: 'Ship',
    icon: '/assets/icons/tools.svg',
    title: 'Build with polish',
    body: 'Developers and designers iterate closely, review work together, and push toward something that feels intentional instead of rushed.',
  },
]

const productionTypeIcons = {
  'Client Teams': [
    { src: '/assets/apps/bubbly/bubbly-icon.svg', alt: 'Bubbly icon', name: 'Bubbly' },
    { src: '/assets/icons/client.svg', alt: 'PORCH placeholder icon', name: 'PORCH' },
  ],
  'Start-up Teams': [
    { src: '/assets/apps/luminary/luminary.png', alt: 'Luminary icon', name: 'Luminary' },
    { src: '/assets/apps/centible/centible.png', alt: 'Centible icon', name: 'Centible' },
  ],
}

export default function ProductionPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="App Team Carolina · Track"
        title="Production Track."
        description="Production is where ideas become real products. Teams are cross-functional: developers, designers, product managers, and marketers all working toward one thing. The apps ship. Real people use them."
        background={<div className="absolute inset-0"><ProductionBackgroundPaths /></div>}
      />

      <div className="section">
        <SectionHeading title="Team Types." />
        <div className="section-content track-grid-shell">
          <div className="row">
            {productionTracks.map((track, index) => (
              <Reveal key={track.title} className="col-md-6" delay={index * 0.05}>
                <article className="track-card track-card--production prod-type-card">
                  <div className="prod-type-card__top">
                    <Badge
                      variant="secondary"
                      className={track.title === 'Start-up Teams' ? 'badge--startup' : 'badge--production'}
                    >
                      {track.title === 'Start-up Teams' ? 'Start-up' : 'Production'}
                    </Badge>
                  </div>
                  <div className="prod-type-card__body">
                    <h4 className="track-card__title prod-type-card__title">
                      <span className="prod-type-card__icon-shell">
                        <img className="icon" src={track.icon} alt={track.iconAlt} />
                      </span>
                      {track.title}
                    </h4>
                    <p className="track-card__text prod-type-card__text">{track.text}</p>
                  </div>
                  <div className="prod-type-card__footer">
                    <p className="prod-type-card__label">Teams recently built</p>
                    <div className="track-card__app-icons prod-type-card__app-icons" aria-label={`${track.title} app examples`}>
                      {productionTypeIcons[track.title as keyof typeof productionTypeIcons]?.map((app) => (
                        <span key={app.name} className="track-card__app-icon-shell" title={app.name}>
                          <img src={app.src} alt={app.alt} className="track-card__app-icon" />
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <SectionHeading title="Roles On A Team." />
        <div className="section-content">
          <div className="prod-roles prod-roles--grid">
            {roles.map((role, index) => (
              <Reveal key={role.title} className="prod-role-row" delay={index * 0.04}>
                <div className="prod-role-icon-shell">
                  <img src={role.icon} alt={role.title} className="prod-role-icon" />
                </div>
                <div className="prod-role-copy">
                  <p className="prod-role-label">On a team</p>
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
        <div className="section-content prod-process-grid">
          {productionProcess.map((item, index) => (
            <Reveal key={item.title} className="prod-process-card" delay={index * 0.05}>
              <div className="prod-process-card__top">
                <div className="prod-process-card__icon-shell">
                  <img src={item.icon} alt={item.label} className="prod-process-card__icon" />
                </div>
                <p className="prod-process-card__label">{item.label}</p>
              </div>
              <h3 className="prod-process-card__title">{item.title}</h3>
              <p className="prod-process-card__text">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHeading title="What We've Built." />
        <ProductShowcase
          summary="Production teams work across accessibility, education, and personal finance, shaping products that have to be thoughtful enough to hold up for real people."
          exploreLabel="Explore the full app library"
          eyebrow="Built in production"
        />
      </div>

      <PageCta
        eyebrow="Interested in Production?"
        title="A place to build with real stakes, real teammates, and real users in mind."
        description="Production is for people who want to work closely with others, do serious product work, and keep raising their standards through projects that have to hold up in the real world."
        to="/apply"
        actionLabel="Explore Open Roles"
        secondaryTo="/apps"
        secondaryLabel="See what teams build"
        notes={[
          {
            title: 'How teams are structured',
            body: 'Client and startup teams bring together design, development, product, and marketing around one product direction.',
          },
          {
            title: 'What we look for',
            body: 'People who care about follow-through, collaboration, and making work that is genuinely useful to others.',
          },
        ]}
      />
    </Layout>
  )
}
