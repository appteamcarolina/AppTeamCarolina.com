import type { ReactNode } from 'react'

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
    <div className="section-header">
      <HeadingTag className={titleClassName ?? 'display-6 section-title'}>
        {title}
      </HeadingTag>
    </div>
  )
}
