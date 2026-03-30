import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type PageHeroProps = {
  eyebrow: ReactNode
  title: ReactNode
  description: ReactNode
  background?: ReactNode
  children?: ReactNode
  className?: string
  contentStyle?: React.CSSProperties
}

// Shared hero shell for top-of-page intros so each route gets the same elegant entry motion.
export default function PageHero({
  eyebrow,
  title,
  description,
  background,
  children,
  className = 'about-page-hero relative overflow-hidden',
  contentStyle,
}: PageHeroProps) {
  return (
    <div className={className}>
      {background}
      <div
        className="relative z-10"
        style={{
          padding: 'calc(var(--section-v) + 64px) var(--gutter) var(--section-v)',
          ...contentStyle,
        }}
      >
        <motion.p
          className="landing-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="display-4 about-hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="about-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {description}
        </motion.p>
        {children}
      </div>
    </div>
  )
}
