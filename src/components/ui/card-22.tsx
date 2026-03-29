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
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ApplyRoleCardProps {
  title: string
  description: string
  requirements: string[]
  applyUrl: string
  applyLabel: string
  label?: string
  subtitle?: string
  tags?: string[]
  className?: string
}

const roleDecor = {
  'iOS Bootcamp': {
    icon: Sparkles,
    accent: 'from-[#6da6d6]/30 via-[#4b8cb8]/16 to-transparent',
    tags: ['Learning', 'Starter Friendly', 'Weekly Build'],
  },
  'UI/UX Bootcamp': {
    icon: Layers3,
    accent: 'from-[#87b8d9]/26 via-[#4b8cb8]/14 to-transparent',
    tags: ['Design', 'Portfolio', 'Critique'],
  },
  'iOS Developer': {
    icon: Code2,
    accent: 'from-[#5f98ca]/28 via-[#2f5b79]/18 to-transparent',
    tags: ['SwiftUI', 'Production', 'Shipping'],
  },
  'UI/UX Designer': {
    icon: Layers3,
    accent: 'from-[#7bb8dd]/24 via-[#3d6d90]/14 to-transparent',
    tags: ['Figma', 'Research', 'Systems'],
  },
  'Product Manager': {
    icon: BriefcaseBusiness,
    accent: 'from-[#7ca8c7]/24 via-[#315a75]/14 to-transparent',
    tags: ['Strategy', 'Roadmaps', 'Teams'],
  },
  'Product Marketing Manager': {
    icon: Megaphone,
    accent: 'from-[#8cb6d4]/22 via-[#365f7b]/14 to-transparent',
    tags: ['Growth', 'Storytelling', 'Launch'],
  },
  'Web Developer': {
    icon: Blocks,
    accent: 'from-[#6d9bc0]/24 via-[#2d556f]/16 to-transparent',
    tags: ['Frontend', 'React', 'Website'],
  },
  'Backend Developer': {
    icon: ShieldCheck,
    accent: 'from-[#7fb2d5]/22 via-[#325f7d]/16 to-transparent',
    tags: ['APIs', 'Infra', 'Systems'],
  },
} as const

export const PlaceCard = ({
  title,
  description,
  requirements,
  applyUrl,
  applyLabel,
  label,
  subtitle,
  tags = [],
  className,
}: ApplyRoleCardProps) => {
  const decor = roleDecor[title as keyof typeof roleDecor] ?? {
    icon: Rocket,
    accent: 'from-[#6da6d6]/26 via-[#2f5b79]/16 to-transparent',
    tags: ['App Team', 'Open Role', 'Apply'],
  }

  const Icon = decor.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -5,
        transition: { type: 'spring', stiffness: 260, damping: 24 },
      }}
      className={cn('apply-role-card group h-full', className)}
    >
      <div className="apply-role-card__inner">
        <div className={cn('apply-role-card__hero', `bg-gradient-to-br ${decor.accent}`)}>
          <div className="apply-role-card__hero-top">
            {label ? <Badge variant="secondary">{label}</Badge> : <span />}
            <div className="apply-role-card__icon-shell">
              <Icon className="h-5 w-5" />
            </div>
          </div>

          <div className="apply-role-card__title-wrap">
            {subtitle && <p className="apply-role-card__subtitle">{subtitle}</p>}
            <h3 className="apply-role-card__title">{title}</h3>
          </div>

          <div className="apply-role-card__tags">
            {[...decor.tags, ...tags].map((tag, index) => (
              <Badge
                key={`${tag}-${index}`}
                variant={index === 0 ? 'default' : 'outline'}
                className="apply-role-card__tag"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="apply-role-card__content">
          <p className="apply-role-card__description">{description}</p>

          <div className="apply-role-card__requirements">
            <p className="apply-role-card__requirements-label">What we’re looking for</p>
            <ul className="apply-role-card__requirements-list">
              {requirements.slice(0, 3).map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>

          <div className="apply-role-card__footer">
            <a href={applyUrl} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="apply-role-card__button w-full rounded-full">
                {applyLabel}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
