import type { ReactNode } from 'react'
import SectionHeading from '@/components/site/SectionHeading'
import Reveal from '@/components/site/Reveal'

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
      <Reveal delay={0.06}>
        <div className="blurb">
          <div className={bodyClassName}>{children}</div>
        </div>
      </Reveal>
    </section>
  )
}
