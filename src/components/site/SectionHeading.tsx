import type { ReactNode } from 'react'
import Reveal from '@/components/site/Reveal'

type SectionHeadingProps = {
  title: ReactNode
  level?: 'h1' | 'h2'
  titleClassName?: string
}

export default function SectionHeading({
  title,
  level = 'h2',
  titleClassName,
}: SectionHeadingProps) {
  const HeadingTag = level

  return (
    <Reveal>
      <div className="section-header">
        <HeadingTag className={titleClassName ?? 'display-6 section-title'}>
          {title}
        </HeadingTag>
      </div>
    </Reveal>
  )
}
