import type { ReactNode } from 'react'
import SectionHeading from '@/components/site/SectionHeading'

type PageIntroProps = {
  title: ReactNode
  children: ReactNode
  bodyClassName?: string
}

export default function PageIntro({
  title,
  children,
  bodyClassName = 'about-lead',
}: PageIntroProps) {
  return (
    <section className="section" style={{ paddingTop: 'calc(var(--section-v) + 56px)' }}>
      <SectionHeading title={title} level="h1" titleClassName="display-4 section-title" />
      <div className="blurb">
        <div className={bodyClassName}>{children}</div>
      </div>
    </section>
  )
}
