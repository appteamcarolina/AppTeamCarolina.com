/**
 * AppProducts
 *
 * "The Products." section. Renders a card grid of App Team's published apps.
 * Cards with an external link render a CTA button; cards without a link
 * display description text only.
 *
 * App data (cover images, descriptions, links) lives in content.ts.
 */

import { apps } from '../../data/content'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const appMeta: Record<string, { summary: string; availability: string[] }> = {
  Luminary: {
    summary: 'Luminary helps people navigate campus more confidently by focusing on accessibility barriers, route clarity, and shared reporting.',
    availability: ['iPhone', 'Beta testing'],
  },
  Centible: {
    summary: 'Centible is a student finance app built to make spending easier to understand and day-to-day money habits easier to manage.',
    availability: ['iPhone', 'On the App Store'],
  },
  Bubbly: {
    summary: 'Bubbly is an iPad experience designed to support children and adolescents with Cortical Visual Impairment through playful visual exercises.',
    availability: ['iPad', 'On the App Store'],
  },
}

function getTagTone(label: string) {
  if (label === 'iPhone' || label === 'iPad') return 'home-app-feature__tag--device'
  if (label === 'On the App Store' || label === 'App Store') return 'home-app-feature__tag--store'
  if (label === 'Beta testing') return 'home-app-feature__tag--beta'
  return ''
}

export default function AppProducts() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeApp = apps[activeIndex]

  const goTo = (direction: number) => {
    setActiveIndex((current) => {
      const next = current + direction
      if (next < 0) return apps.length - 1
      if (next >= apps.length) return 0
      return next
    })
  }

  return (
    <div id="apps" className="section">
      <SectionHeading title="What We Build." />

      <Reveal className="home-app-carousel section-content" delay={0.04}>
        <div className="home-app-carousel__head">
          <p className="home-app-carousel__summary">
            Our teams and apps span accessibility, education, and personal finance, serving students, communities, and real users in different ways.
          </p>
          <div className="home-app-carousel__controls">
            <button type="button" className="home-app-carousel__arrow" onClick={() => goTo(-1)} aria-label="Previous app">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" className="home-app-carousel__arrow" onClick={() => goTo(1)} aria-label="Next app">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeApp.name}
            className="home-app-feature"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="home-app-feature__media">
              <img className="card-img-top" src={activeApp.coverSrc} alt={activeApp.coverAlt} />
            </div>
            <div className="home-app-feature__content">
              <p className="home-app-feature__eyebrow">Product preview</p>
              <h3 className="home-app-feature__title">
                <img className="apps-icon icon" src={activeApp.iconSrc} alt={activeApp.iconAlt} />
                {activeApp.name}
              </h3>
              <p className="home-app-feature__started">{activeApp.started}</p>
              <div className="home-app-feature__tags">
                {appMeta[activeApp.name]?.availability.map((item) => (
                  <span key={item} className={cn('home-app-feature__tag', getTagTone(item))}>{item}</span>
                ))}
              </div>
              <p className="home-app-feature__text">{appMeta[activeApp.name]?.summary ?? activeApp.description}</p>
              <div className="home-app-feature__actions">
                <NavLink to="/apps" className="landing-secondary-link">Learn more</NavLink>
                {activeApp.link ? (
                  <a
                    href={activeApp.link}
                    target={activeApp.link.startsWith('http') ? '_blank' : undefined}
                    rel={activeApp.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="button secondary"
                  >
                    {activeApp.linkLabel}
                  </a>
                ) : (
                  <NavLink to="/apps" className="button secondary">See product details</NavLink>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="home-app-carousel__dots">
          {apps.map((app, index) => (
            <button
              key={app.name}
              type="button"
              className={index === activeIndex ? 'home-app-carousel__dot home-app-carousel__dot--active' : 'home-app-carousel__dot'}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${app.name}`}
            />
          ))}
        </div>
      </Reveal>

      <Reveal className="home-section-actions" delay={0.12}>
        <NavLink to="/apps" className="landing-secondary-link">Explore all apps</NavLink>
      </Reveal>
    </div>
  )
}
