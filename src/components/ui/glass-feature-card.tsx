import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type GlassFeatureCardProps = {
  title: string
  description: string
  image: string
  imageAlt: string
  eyebrow: string
  icon: LucideIcon
  className?: string
}

export function GlassFeatureCard({
  title,
  description,
  image,
  imageAlt,
  eyebrow,
  icon: Icon,
  className,
}: GlassFeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn('about-feature-card group h-full', className)}
    >
      <div className="about-feature-card__inner">
        <div className="about-feature-card__media">
          <div className="about-feature-card__media-overlay" />
          <div className="about-feature-card__eyebrow">
            <div className="about-feature-card__icon-wrap">
              <Icon className="h-4 w-4 text-[#7bb8dd]" />
            </div>
            <span>{eyebrow}</span>
          </div>
          <div className="about-feature-card__image-wrap">
            <img
              src={image}
              alt={imageAlt}
              className="about-feature-card__image"
            />
          </div>
        </div>

        <div className="about-feature-card__content">
          <div className="about-feature-card__heading-row">
            <h3 className="about-feature-card__title">{title}</h3>
            <div className="about-feature-card__arrow">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          <p className="about-feature-card__description">{description}</p>
        </div>
      </div>
    </motion.article>
  )
}
