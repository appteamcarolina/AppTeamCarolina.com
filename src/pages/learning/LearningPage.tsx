import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import { learningTracks } from '../../data/content'
import PageCta from '@/components/site/PageCta'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { LearningBackgroundPaths } from '@/components/ui/background-paths-variants'
import { Badge } from '@/components/ui/badge'

const benefits = [
  {
    number: '01',
    title: "Learn from people who've shipped.",
    body: "Every session is led by students who've already built and launched real products. The advice is practical, earned, and grounded in actual work.",
    accent: '#4b8cb8',
    tag: 'Mentorship',
  },
  {
    number: '02',
    title: "Build skills your classes will never teach you.",
    body: "Most courses don't touch iOS or product design. App Team is where you get to explore both, at low stakes, with real structure behind you.",
    accent: '#3a8a6a',
    tag: 'Unique',
  },
  {
    number: '03',
    title: 'Guidance, standards, and like-minded peers.',
    body: "Direct feedback, high expectations, and people who care about making good work. That combination is rare, and it changes how fast you grow.",
    accent: '#7a5cb8',
    tag: 'Community',
  },
]

const curriculum = [
  {
    number: '01',
    title: 'Project-based from day one.',
    body: "Every week you build something real. Not exercises or tutorials. Projects that push you to apply what you're learning in a context that actually matters.",
    accent: '#4b8cb8',
    tag: 'Hands-on',
  },
  {
    number: '02',
    title: 'Curriculum built by engineers and designers doing this work.',
    body: "The people who built our curriculum use Swift, SwiftUI, and Figma at work. What you learn reflects how products actually get made.",
    accent: '#3a8a6a',
    tag: 'Curriculum',
  },
  {
    number: '03',
    title: "TAs who are here to help, not just grade.",
    body: "Our TAs are App Team members who want to see you improve. Office hours, Slack, design reviews. They show up because they care.",
    accent: '#7a5cb8',
    tag: 'Support',
  },
]

const steps = [
  { num: '01', title: 'Apply', desc: "Submit a short application. No experience needed for bootcamps, just curiosity and commitment." },
  { num: '02', title: 'Learn', desc: "Attend weekly sessions led by App Team members who've done this work and want to help you get there too." },
  { num: '03', title: 'Build', desc: "Work on real projects every week. You're applying what you learn immediately, not saving it for later." },
  { num: '04', title: 'Level Up', desc: "Graduate into an Apprenticeship or Production team and start shipping apps used by real people." },
]

export default function LearningPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="App Team Carolina · Track"
        title="Learning Track."
        description="Whether you've never written a line of Swift or never opened Figma, our learning programs meet you where you are. We teach iOS development and UI/UX design from the ground up, using the same skills our production teams rely on."
        background={<div className="absolute inset-0"><LearningBackgroundPaths /></div>}
      />

      <div className="section">
        <SectionHeading title="Our Programs." />
        <div className="section-content track-grid-shell">
          <div className="row">
            {learningTracks.map((track, index) => (
              <Reveal key={track.title} className="col-md-3" delay={index * 0.05}>
                <article className="track-card track-card--learning">
                  <div className="track-card__top">
                    <Badge variant="secondary" className={track.badgeLabel === 'iOS' ? 'badge--ios' : 'badge--design'}>{track.badgeLabel}</Badge>
                    <span className="track-card__eyebrow">{track.eyebrow}</span>
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
        <SectionHeading title="Why Students Join." />
        <div className="about-pillars">
          {benefits.map((p, i) => (
            <motion.div
              key={p.number}
              className="about-pillar"
              style={{ '--pillar-accent': p.accent } as React.CSSProperties}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="about-pillar-top">
                <span className="about-pillar-num">{p.number}</span>
                <span className="about-pillar-tag">{p.tag}</span>
              </div>
              <h3 className="about-pillar-title">{p.title}</h3>
              <p className="about-pillar-body">{p.body}</p>
              <div className="about-pillar-bar" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHeading title="What Learning Looks Like." />
        <div className="about-pillars">
          {curriculum.map((p, i) => (
            <motion.div
              key={p.number}
              className="about-pillar"
              style={{ '--pillar-accent': p.accent } as React.CSSProperties}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="about-pillar-top">
                <span className="about-pillar-num">{p.number}</span>
                <span className="about-pillar-tag">{p.tag}</span>
              </div>
              <h3 className="about-pillar-title">{p.title}</h3>
              <p className="about-pillar-body">{p.body}</p>
              <div className="about-pillar-bar" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHeading title="How It Works." />
        <div className="section-content">
          <div className="learning-how-grid">
            {steps.map((step, index) => (
              <Reveal key={step.num} className="learning-how-card" delay={index * 0.08}>
                <span className="learning-how-num">{step.num}</span>
                <p className="learning-how-title">{step.title}</p>
                <p className="learning-how-desc">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <PageCta
        eyebrow="Interested in Learning?"
        title="A strong place to start, and a clear path to keep growing."
        description="Whether you're new to iOS or UI/UX, or picking it back up with more intention, Learning is designed to help you build real foundations you can carry into production work later on."
        to="/apply"
        actionLabel="Explore Open Roles"
        secondaryTo="/about"
        secondaryLabel="Learn more about App Team"
        notes={[
          {
            title: "What you can start with",
            body: "iOS Bootcamp and UI/UX Bootcamp are built for people who want structure, repetition, and room to improve.",
          },
          {
            title: "What it can lead into",
            body: "A lot of members continue into apprenticeship and then production once they're ready for more responsibility.",
          },
        ]}
      />
    </Layout>
  )
}
