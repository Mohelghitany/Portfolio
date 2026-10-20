import { InViewListItem, SectionReveal, StaggerReveal } from './SectionReveal'
import type { EducationItem } from '../types/portfolio.types'

interface EducationSectionProps {
  items: EducationItem[]
}

/**
 * Education section with staggered in-view reveals.
 */
export function EducationSection({ items }: EducationSectionProps) {
  return (
    <section id="education" className="scroll-mt-28 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Education
          </h2>
        </SectionReveal>

        <StaggerReveal as="ul" className="mt-10 space-y-6">
          {items.map((item) => (
            <InViewListItem
              key={item.id}
              className="border-t border-border pt-6"
            >
              <p className="font-display text-2xl font-bold text-ink">
                {item.degree}
              </p>
              <p className="mt-2 text-base text-ink-muted">
                {item.institution} · {item.location}
              </p>
              <p className="mt-1 text-sm text-accent">{item.period}</p>
            </InViewListItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
