import { Code2, Lightbulb, PencilRuler } from 'lucide-react'
import Layout from '../../components/Layout'
import { executives, productionTeams, founders, galleryImages } from '../../data/content'
import { AboutBackgroundPaths } from '@/components/ui/background-paths-variants'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { GlassFeatureCard } from '@/components/ui/glass-feature-card'
import TestimonialSection from '@/components/ui/testimonials'

const offers = [
  {
    label: 'Learning',
    icon: '/assets/books.svg',
    title: 'iOS Bootcamp',
    desc: 'Learn Swift, SwiftUI, and Xcode from scratch. No experience needed — just curiosity.',
  },
  {
    label: 'Learning',
    icon: '/assets/eyedropper.svg',
    title: 'UI/UX Bootcamp',
    desc: 'Master Figma and the craft of designing products people actually love to use.',
  },
  {
    label: 'Learning',
    icon: '/assets/blocks.svg',
    title: 'Apprenticeship',
    desc: 'Bridge the gap between learning and shipping. Build real projects with senior mentorship.',
  },
  {
    label: 'Production',
    icon: '/assets/rocket.svg',
    title: 'Production Teams',
    desc: 'Join a cross-functional team and ship apps used by real people in the real world.',
  },
]

const pillars = [
  {
    title: 'Learn',
    eyebrow: 'Education',
    body: 'We teach the iOS product journey from design through development. Our curriculum goes beyond what most students get in class and gives members a practical, supportive place to build real product instincts.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Students collaborating around a laptop',
    icon: Lightbulb,
  },
  {
    title: 'Design',
    eyebrow: 'Craft',
    body: 'We hold high standards for how our products look and feel because great apps should be intuitive, exciting, and polished. Members learn to respect the role of thoughtful design in building things people actually love to use.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Designer sketching product ideas on glass',
    icon: PencilRuler,
  },
  {
    title: 'Develop',
    eyebrow: 'Execution',
    body: 'We give iOS developers of all experience levels the chance to improve fast by building with others. Our environment is collaborative, ambitious, and grounded in the kind of technical growth that translates outside the classroom.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Developer working at a laptop with code on screen',
    icon: Code2,
  },
]

const founderOrder = ['Max', 'Beliz', 'Sam', 'Morgan', 'Kush']

function InitialsAvatar({ initials, size = 72 }: { initials: string; size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(75,140,184,0.25), rgba(75,140,184,0.08))',
        border: '1px solid rgba(75,140,184,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.28,
        fontWeight: 700,
        color: 'rgba(75,140,184,0.85)',
        letterSpacing: '0.04em',
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
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
            We&apos;re App Team Carolina, a student iOS studio at UNC Chapel Hill built
            by people who genuinely love what they make. We run like a real company,
            care like a tight-knit team, and ship apps that actually matter to people.
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

      {/* ── What We Do ── */}
      <div className="section">
        <SectionHeading title="What We Do." />
        <div className="about-pillars">
          {pillars.map((p) => (
            <GlassFeatureCard
              key={p.title}
              title={p.title}
              description={p.body}
              image={p.image}
              imageAlt={p.imageAlt}
              eyebrow={p.eyebrow}
              icon={p.icon}
            />
          ))}
        </div>
      </div>

      {/* ── What We Offer ── */}
      <div className="section">
        <SectionHeading title="What We Offer." />
        <div className="about-offers">
          {offers.map((o, i) => (
            <Reveal
              key={o.title}
              className="about-offer-card"
              delay={i * 0.06}
            >
              <p className={`label ${o.label.toLowerCase()}`}><mark>{o.label}</mark></p>
              <img src={o.icon} alt={o.title} className="about-offer-icon" />
              <h4 className="about-offer-title">{o.title}</h4>
              <p className="about-offer-desc">{o.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Gallery ── */}
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
            <Reveal
              key={e.title}
              className="about-exec-card"
              delay={i * 0.05}
            >
              <InitialsAvatar initials={e.initials} size={64} />
              <div className="about-exec-info">
                <p className="about-exec-name">{e.name}</p>
                <p className="about-exec-title">{e.title}</p>
                {e.major && <p className="about-exec-meta">{e.major} · {e.year}</p>}
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
                <div className="about-team-lead-bubbles">
                  {team.leads.map((l) => (
                    <div key={l.name} className="about-team-lead-bubble" title={l.name}>
                      <InitialsAvatar initials={l.name.split(' ').map(n => n[0]).join('')} size={36} />
                      <span className="about-team-lead-bubble-name">{l.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Contact ── */}
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
