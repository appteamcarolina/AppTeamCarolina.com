import { motion } from 'framer-motion'
import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  Code2,
  Layers3,
  Megaphone,
  Rocket,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface ApplyRoleCardProps {
  title: string
  description: string
  requirements: string[]
  applyUrl: string
  applyLabel: string
  applicationsOpen?: boolean
  label?: string
  subtitle?: string
  tags?: string[]
  className?: string
}

const roleDecor = {
  'iOS Bootcamp': {
    icon: Sparkles,
    tags: ['Learning', 'No experience necessary', 'Builder focused'],
  },
  'UI/UX Bootcamp': {
    icon: Layers3,
    tags: ['Learning', 'No experience necessary', 'Design focused'],
  },
  'iOS Developer': {
    icon: Code2,
    tags: ['Production', 'Some experience expected', 'Builder focused'],
  },
  'UI/UX Designer': {
    icon: Layers3,
    tags: ['Production', 'Some experience expected', 'Design focused'],
  },
  'Product Manager': {
    icon: BriefcaseBusiness,
    tags: ['Production', 'Some experience expected', 'Cross-functional'],
  },
  'Product Marketing Manager': {
    icon: Megaphone,
    tags: ['Production', 'Some experience expected', 'Storytelling focused'],
  },
  /*'Web Developer': {
    icon: Blocks,
    tags: ['Production', 'Some experience expected', 'Builder focused'],
  },
  'Backend Developer': {
    icon: ShieldCheck,
    tags: ['Production', 'Some experience expected', 'Builder focused'],
  }, */
} as const

function getTagTone(tag: string) {
  if (tag === 'No experience necessary') return 'apply-role-card__tag apply-role-card__tag--starter'
  if (tag === 'Some experience expected') return 'apply-role-card__tag apply-role-card__tag--expected'
  if (tag === 'Design focused') return 'apply-role-card__tag apply-role-card__tag--design'
  if (tag === 'Builder focused') return 'apply-role-card__tag apply-role-card__tag--builder'
  if (tag === 'Storytelling focused') return 'apply-role-card__tag apply-role-card__tag--story'
  if (tag === 'Cross-functional') return 'apply-role-card__tag apply-role-card__tag--cross'
  if (tag === 'Learning') return 'apply-role-card__tag apply-role-card__tag--track'
  if (tag === 'Production') return 'apply-role-card__tag apply-role-card__tag--track'
  return 'apply-role-card__tag'
}

export const PlaceCard = ({
  title,
  description,
  requirements,
  applyUrl,
  applyLabel,
  applicationsOpen = true,
  label,
  subtitle,
  tags = [],
  className,
}: ApplyRoleCardProps) => {
  const decor = roleDecor[title as keyof typeof roleDecor] ?? {
    icon: Rocket,
    tags: ['Production', 'Some experience expected', 'Cross-functional'],
  }

  const Icon = decor.icon
  const roleTags = [...new Set([...decor.tags, ...tags])]

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -2,
        transition: { type: 'spring', stiffness: 260, damping: 26 },
      }}
      className={cn('apply-role-card group h-full', className)}
    >
      <div className="apply-role-card__inner">
        <div className="apply-role-card__hero">
          <div className="apply-role-card__hero-top">
            <div className="apply-role-card__icon-shell">
              <Icon className="h-5 w-5" />
            </div>
            {label ? <p className="apply-role-card__label">{label}</p> : null}
          </div>

          <div className="apply-role-card__title-wrap">
            {subtitle && <p className="apply-role-card__subtitle">{subtitle}</p>}
            <h3 className="apply-role-card__title">{title}</h3>
          </div>

          <div className="apply-role-card__tags">
            {roleTags.map((tag, index) => (
              <span key={`${tag}-${index}`} className={getTagTone(tag)}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="apply-role-card__content">
          <p className="apply-role-card__description">{description}</p>

          <div className="apply-role-card__requirements">
            <p className="apply-role-card__requirements-label">You'll work on</p>
            <ul className="apply-role-card__requirements-list">
              {requirements.slice(0, 3).map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>

          <div className="apply-role-card__footer">
            {applicationsOpen ? (
              <a href={applyUrl} target="_blank" rel="noopener noreferrer" className="button apply-role-card__button">
                  {applyLabel}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ) : (
              <button type="button" className="button apply-role-card__button apply-role-card__button--disabled" disabled>
                Applications Open
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
