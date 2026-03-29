import Layout from '../../components/Layout'
import { learningTracks } from '../../data/content'
import PageCta from '@/components/site/PageCta'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { LearningBackgroundPaths } from '@/components/ui/background-paths-variants'
import { Testimonials } from '@/components/ui/unique-testimonial'
import { Badge } from '@/components/ui/badge'

const steps = [
  { num: '01', title: 'Apply', desc: 'Submit a short application. No experience needed for bootcamps — just curiosity and commitment.' },
  { num: '02', title: 'Learn', desc: 'Attend weekly sessions led by experienced App Team members covering design and development fundamentals.' },
  { num: '03', title: 'Build', desc: 'Work on real projects every week, applying what you learn immediately in a hands-on environment.' },
  { num: '04', title: 'Level Up', desc: 'Graduate into an Apprenticeship or Production team and start shipping real apps used by real people.' },
]

const learningBenefits = [
  {
    title: 'Learn from people who have done it',
    body: 'Bootcamps and apprenticeship tracks are led by students who have already shipped products, so the advice is practical, current, and grounded in real work.',
  },
  {
    title: 'Make things every week',
    body: 'You are not just listening to lectures. You are sketching flows, building interfaces, and turning concepts into projects you can actually point to.',
  },
  {
    title: 'Grow into production with confidence',
    body: 'The learning track is designed to help students become genuinely ready for client and startup teams, not just familiar with the vocabulary.',
  },
]

const learningShowcase = [
  {
    label: 'In practice',
    title: 'Design critiques and build reviews',
    body: 'Weekly feedback sessions help students sharpen visual judgment, code quality, and product thinking in a way that feels serious but still supportive.',
  },
  {
    label: 'Curriculum',
    title: 'Real tools from the start',
    body: 'Members work in Figma, SwiftUI, and Xcode with the same workflows they will use later on production teams, so the learning path feels connected instead of siloed.',
  },
  {
    label: 'Community',
    title: 'A smaller, tighter learning environment',
    body: 'Students join a group that values curiosity, discipline, and asking good questions. It feels more like a studio than a classroom.',
  },
]

const learningTestimonials = [
  {
    id: 1,
    quote: 'The learning track made product design and iOS development feel approachable without making it feel watered down. I always knew what I was building toward.',
    author: 'Ava Patel',
    role: 'Former Learning Track Member',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    quote: 'What stood out was how quickly we moved from concepts to actual projects. It felt challenging, but never in a way that made you feel left behind.',
    author: 'Daniel Kim',
    role: 'iOS Apprenticeship Alum',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    quote: 'I came in unsure of where I fit. The learning track gave me structure, high standards, and people who genuinely wanted to help me get better.',
    author: 'Maya Thompson',
    role: 'UI/UX Bootcamp Alum',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
  },
]

export default function LearningPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="App Team Carolina · Track"
        title="Learning Track."
        description="Whether you've never written a line of Swift or never opened Figma, our learning programs meet you where you are. We teach iOS development and UI/UX design from the ground up — the same skills used on real production teams."
        background={<div className="absolute inset-0"><LearningBackgroundPaths /></div>}
      >
        <Reveal delay={0.5} className="track-hero-stats" y={18}>
          <div className="track-hero-stat">
            <span className="track-hero-stat__value">4</span>
            <span className="track-hero-stat__label">entry points</span>
          </div>
          <div className="track-hero-stat">
            <span className="track-hero-stat__value">Weekly</span>
            <span className="track-hero-stat__label">hands-on sessions</span>
          </div>
          <div className="track-hero-stat">
            <span className="track-hero-stat__value">Real</span>
            <span className="track-hero-stat__label">product workflows</span>
          </div>
        </Reveal>
      </PageHero>

      <div className="section">
        <SectionHeading title="Our Programs." />
        <div className="section-content track-grid-shell">
          <div className="row">
            {learningTracks.map((track, index) => (
              <Reveal key={track.title} className="col-md-3" delay={index * 0.05}>
                <article className="track-card track-card--learning">
                  <div className="track-card__top">
                    <Badge variant="secondary">Learning</Badge>
                    <span className="track-card__eyebrow">Foundations to fluency</span>
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
        <div className="section-content track-insight-grid">
          {learningBenefits.map((item, index) => (
            <Reveal key={item.title} className="track-insight-card" delay={index * 0.06}>
              <p className="track-insight-card__label">Student value</p>
              <h3 className="track-insight-card__title">{item.title}</h3>
              <p className="track-insight-card__text">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHeading title="What Learning Actually Looks Like." />
        <div className="section-content track-showcase-grid">
          {learningShowcase.map((item, index) => (
            <Reveal key={item.title} className="track-showcase-card" delay={index * 0.05}>
              <p className="track-showcase-card__label">{item.label}</p>
              <h3 className="track-showcase-card__title">{item.title}</h3>
              <p className="track-showcase-card__text">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHeading title="How It Works." />
        <div className="section-content">
          <div className="learning-steps learning-steps--elevated">
            {steps.map((step, index) => (
              <Reveal key={step.num} className="learning-step" delay={index * 0.05}>
                <span className="learning-step-num">{step.num}</span>
                <div>
                  <p className="learning-step-title">{step.title}</p>
                  <p className="learning-step-desc">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <SectionHeading title="What It Feels Like." />
        <Reveal className="section-content">
          <div className="track-testimonial-shell">
            <Testimonials items={learningTestimonials} />
          </div>
        </Reveal>
      </div>

      <PageCta
        title="Ready to start?"
        description="Applications open each semester. Check the apply page for current openings."
        to="/apply"
        actionLabel="Apply Now"
      />
    </Layout>
  )
}
