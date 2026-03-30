import Layout from '../../components/Layout'
import { productionTracks } from '../../data/content'
import PageCta from '@/components/site/PageCta'
import PageHero from '@/components/site/PageHero'
import ProductShowcase from '@/components/site/ProductShowcase'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { ProductionBackgroundPaths } from '@/components/ui/background-paths-variants'
import { Testimonials } from '@/components/ui/unique-testimonial'
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

const productionHighlights = [
  {
    icon: '/assets/icons/client.svg',
    label: 'What stands out',
    title: 'Work happens across roles, not in silos.',
    body: 'Design, development, product, and marketing all shape the same work together, so people learn how stronger teams actually make decisions.',
  },
  {
    icon: '/assets/icons/rocket.svg',
    label: 'What stands out',
    title: 'The work is tied to real needs.',
    body: 'Some teams build with outside partners, while others develop original ideas around real user problems and constraints.',
  },
  {
    icon: '/assets/icons/tools.svg',
    label: 'What stands out',
    title: 'There is room to stretch without doing it alone.',
    body: 'Production gives people space to take on harder work, learn through mistakes, and improve with feedback from a team that is serious about the craft.',
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
        description="Production is where ideas become real products. Our production members work in cross-functional teams with developers, designers, product managers, and marketers, shipping apps used by real people in the real world."
        background={<div className="absolute inset-0"><ProductionBackgroundPaths /></div>}
      />

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
        <div className="section-content prod-highlights-grid">
          {productionHighlights.map((item, index) => (
            <Reveal key={item.title} className="prod-highlight-card" delay={index * 0.06}>
              <div className="prod-highlight-card__top">
                <div className="prod-highlight-card__icon-shell">
                  <img src={item.icon} alt={item.label} className="prod-highlight-card__icon" />
                </div>
                <p className="prod-highlight-card__label">{item.label}</p>
              </div>
              <h3 className="prod-highlight-card__title">{item.title}</h3>
              <p className="prod-highlight-card__text">{item.body}</p>
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

      <div className="section">
        <SectionHeading title="What Members Say." />
        <Reveal className="section-content">
          <div className="track-testimonial-shell">
            <Testimonials items={productionTestimonials} />
          </div>
        </Reveal>
      </div>

      <PageCta
        eyebrow="Interested in Production?"
        title="A place to build with real stakes, real teammates, and real users in mind."
        description="Production is for people who want to work closely with others, contribute to serious product work, and keep raising their standards through projects that have to hold up outside the classroom."
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
