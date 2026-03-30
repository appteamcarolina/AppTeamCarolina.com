import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { App } from '../../data/content'
import Reveal from '@/components/site/Reveal'

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

type ProductCarouselProps = {
  apps: App[]
  summary: string
  eyebrow?: string
  learnMoreHref?: string
  learnMoreLabel?: string
  className?: string
}

export default function ProductCarousel({
  apps,
  summary,
  eyebrow = 'Product preview',
  learnMoreHref = '/apps',
  learnMoreLabel = 'Learn more',
  className,
}: ProductCarouselProps) {
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
    <Reveal className={cn('home-app-carousel section-content', className)} delay={0.04}>
      <div className="home-app-carousel__head">
        <p className="home-app-carousel__summary">{summary}</p>
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
            <p className="home-app-feature__eyebrow">{eyebrow}</p>
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
              <NavLink to={learnMoreHref} className="landing-secondary-link">{learnMoreLabel}</NavLink>
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
                <NavLink to={learnMoreHref} className="button secondary">See product details</NavLink>
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
  )
}
