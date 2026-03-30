import { useState } from 'react'
import {
  BriefcaseBusiness,
  Cpu,
  GraduationCap,
  Heart,
  Landmark,
  Megaphone,
  PenTool,
  Rows3,
  Users,
} from 'lucide-react'
import {
  siApple,
  siAppian,
  siBankofamerica,
  siBoeing,
  siCisco,
  siDatadog,
  siDatabricks,
  siDeepmind,
  siDoordash,
  siEpicgames,
  siGoldmansachs,
  siGoogle,
  siGithub,
  siIntuit,
  siMeta,
  siNetflix,
  siNvidia,
  siPaypal,
  siPinterest,
  siRedhat,
  siStripe,
  siTesla,
  siVisa,
  siWellsfargo,
} from 'simple-icons'
import Layout from '../../components/Layout'
import { executives, productionTeams, founders, galleryImages, networkDestinations } from '../../data/content'
import { AboutBackgroundPaths } from '@/components/ui/background-paths-variants'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import TestimonialSection from '@/components/ui/testimonials'

const whyWeExistCards = [
  {
    label: 'Learning',
    icon: '/assets/books.svg',
    title: 'iOS Bootcamp',
    desc: 'A place to learn iOS development from the ground up through practice, feedback, and product-minded thinking.',
  },
  {
    label: 'Learning',
    icon: '/assets/eyedropper.svg',
    title: 'UI/UX Bootcamp',
    desc: 'A place to build real design foundations in interface, interaction, critique, and visual decision-making.',
  },
  {
    label: 'Learning',
    icon: '/assets/blocks.svg',
    title: 'iOS Apprenticeship',
    desc: 'A bridge from learning to shipping, where members start applying Swift and SwiftUI with support from stronger builders.',
  },
  {
    label: 'Learning',
    icon: '/assets/bezier.svg',
    title: 'UI/UX Apprenticeship',
    desc: 'A bridge into product design work, where members move from exercises into real flows, systems, and team feedback.',
  },
  {
    label: 'Production',
    icon: '/assets/rocket.svg',
    title: 'Startup Production',
    desc: 'Teams build original products around real needs, with room for ownership, iteration, and long-term product thinking.',
  },
  {
    label: 'Production',
    icon: '/assets/tools.svg',
    title: 'Client Production',
    desc: 'Teams partner with organizations and communities to ship useful software for real people and real constraints.',
  },
]

const founderOrder = ['Max', 'Beliz', 'Sam', 'Morgan', 'Kush']

const leadershipIconMap = {
  'Chief Executive Officer': BriefcaseBusiness,
  'Chief Operating Officer': Rows3,
  'Chief Technology Officer': Cpu,
  'Chief Design Officer': PenTool,
  'Chief People Officer': Heart,
  'Chief Marketing Officer': Megaphone,
  'Chief Learning Officer': GraduationCap,
  'Chief Financial Officer': Landmark,
} as const

const companyIconMap = {
  Netflix: siNetflix,
  Apple: siApple,
  Meta: siMeta,
  Google: siGoogle,
  PayPal: siPaypal,
  'Wells Fargo': siWellsfargo,
  Datadog: siDatadog,
  Pinterest: siPinterest,
  'Google DeepMind': siDeepmind,
  Visa: siVisa,
  'Bank of America': siBankofamerica,
  'Goldman Sachs': siGoldmansachs,
  Appian: siAppian,
  DoorDash: siDoordash,
  NVIDIA: siNvidia,
  Tesla: siTesla,
  Cisco: siCisco,
  Stripe: siStripe,
  Boeing: siBoeing,
  Intuit: siIntuit,
  Databricks: siDatabricks,
  GitHub: siGithub,
  'Epic Games': siEpicgames,
  'Red Hat': siRedhat,
} as const

function CompanyLogo({
  company,
  logoSrc,
  logoAlt,
}: {
  company: string
  logoSrc: string
  logoAlt: string
}) {
  const [failed, setFailed] = useState(false)
  const localIcon = companyIconMap[company as keyof typeof companyIconMap]

  if (localIcon) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-label={logoAlt}
        role="img"
        className="about-network-logo__icon"
      >
        <path d={localIcon.path} fill={`#${localIcon.hex}`} />
      </svg>
    )
  }

  if (failed) {
    return (
      <span className="about-network-logo__fallback" aria-label={company}>
        {company}
      </span>
    )
  }

  return (
    <img
      src={logoSrc}
      alt={logoAlt}
      className="about-network-logo__image"
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  )
}

export default function AboutPage() {
  const orderedFounders = founderOrder
    .map((name) => founders.find((founder) => founder.name === name))
    .filter((founder): founder is (typeof founders)[number] => Boolean(founder))

  return (
    <Layout>
      <PageHero
        eyebrow="UNC Chapel Hill · Since 2021"
        title={<>Exceptional apps<br />start with exceptional people.</>}
        description={
          <>
            We&apos;re App Team Carolina, a student-run nonprofit at UNC Chapel Hill
            where people learn to design, build, and ship thoughtful products together.
            We care about doing meaningful work, getting better at the craft, and
            building a community people genuinely want to be part of.
          </>
        }
        background={<AboutBackgroundPaths />}
      >
        <Reveal delay={0.5} className="about-stats" y={18}>
            {[
              { value: '80+',   label: 'Engineers & Designers' },
              { value: '10k+',  label: 'App Store Users' },
              { value: '200+',  label: 'Alumni Network' },
            ].map((s) => (
              <div key={s.label} className="about-stat">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
        </Reveal>
      </PageHero>

      {/* ── Why We Exist ── */}
      <div className="section">
        <SectionHeading title="Why We Exist." />
        <div className="about-founders-intro">
          <p>
            App Team exists to give people real experience across design, development,
            and product work in a community that is collaborative, ambitious, and
            serious about doing things well.
          </p>
        </div>
        <div className="about-offers about-offers--expanded">
          {whyWeExistCards.map((o, i) => (
            <Reveal
              key={o.title}
              className="about-offer-card"
              delay={i * 0.05}
            >
              <p className={`label ${o.label.toLowerCase()}`}><mark>{o.label}</mark></p>
              <img src={o.icon} alt={o.title} className="about-offer-icon" />
              <h4 className="about-offer-title">{o.title}</h4>
              <p className="about-offer-desc">{o.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── What We Offer ── */}
      <div className="background-graphic-wave">
        <div className="gallery">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <img src={img.src} alt={img.alt} />
            </Reveal>
          ))}
        </div>
      </div>

      <TestimonialSection
        intro="We wanted to build a place where students could learn fast, make thoughtful products, and do it with people they genuinely cared about."
        quote="We started App Team to give students a place to learn by building intuitive products, make real impact, and have fun doing it in a tight-knit community."
        authors={orderedFounders}
      />

      {/* ── Leadership ── */}
      <div className="section">
        <SectionHeading title="Our Leadership." />
        <p className="about-section-note">Update names in <code>src/data/content.ts</code>.</p>
        <div className="about-exec-grid">
          {executives.map((e, i) => (
            <Reveal key={e.title} className="about-exec-card" delay={i * 0.05}>
              <div className="about-exec-icon-shell">
                {(() => {
                  const Icon = leadershipIconMap[e.title as keyof typeof leadershipIconMap] ?? Users
                  return <Icon className="h-4 w-4" />
                })()}
              </div>
              <div className="about-exec-info">
                <p className="about-exec-name">{e.name}</p>
                <p className="about-exec-title">{e.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Production Teams ── */}
      <div className="section">
        <SectionHeading title="Production Teams." />
        <div className="about-teams-grid">
          {productionTeams.map((team, i) => (
            <Reveal
              key={team.name}
              className={`about-team-card about-team-card--${team.type.toLowerCase()}`}
              delay={i * 0.06}
            >
              {/* App icons top-right */}
              <div className="about-team-app-icons">
                {team.apps.map((app) =>
                  app.icon
                    ? <img key={app.name} src={app.icon} alt={app.name} className="about-team-app-icon" title={app.name} />
                    : <div key={app.name} className="about-team-app-icon about-team-app-icon--placeholder" title={app.name} />
                )}
              </div>

              <p className="about-team-type">{team.type} Team</p>
              <h4 className="about-team-name">{team.name}</h4>

              <div className="about-team-apps-row">
                {team.apps.map((app) => (
                  <span key={app.name} className="about-team-app-tag">{app.name}</span>
                ))}
              </div>

              <div className="about-team-leads">
                <p className="about-team-leads-label">Production Leads</p>
                <div className="about-team-lead-list">
                  {team.leads.map((l) => (
                    <span key={l.name} className="about-team-lead-name">{l.name}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Contact ── */}
      <div className="section">
        <SectionHeading title="Where We Go." />
        <div className="about-network-intro">
          <p>
            Some of the places members have gone on to intern, work, and keep growing.
          </p>
        </div>
        <div className="about-network-grid">
          {networkDestinations.map((item, index) => (
            <Reveal key={`${item.company}-${index}`} className={`about-network-logo about-network-logo--${(index % 5) + 1}`} delay={index * 0.03}>
              <div className="about-network-logo__tooltip" role="tooltip">{item.company}</div>
              <CompanyLogo company={item.company} logoSrc={item.logoSrc} logoAlt={item.logoAlt} />
            </Reveal>
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
          ].map((c, index) => (
            <Reveal key={c.label} className="about-contact-card" delay={index * 0.05}>
              <p className="about-contact-label">{c.label}</p>
              {c.href ? (
                <a href={c.href} className="about-contact-value"
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}>
                  {c.value}
                </a>
              ) : (
                <p className="about-contact-value">{c.value}</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </Layout>
  )
}
