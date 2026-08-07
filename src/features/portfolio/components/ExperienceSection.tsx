import { motion } from 'motion/react'
import { InViewListItem, SectionReveal, StaggerReveal } from './SectionReveal'
import {
  chipItemVariants,
  slideFromLeftVariants,
  staggerFastContainerVariants,
} from '../utils/motionVariants'
import type { ExperienceItem } from '../types/portfolio.types'

interface ExperienceSectionProps {
  items: ExperienceItem[]
}

/**
 * Work experience timeline section with staggered in-view animations.
 */
export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section id="experience" className="scroll-mt-28 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Experience
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Shipping production frontend systems, mentoring teammates, and
            modernizing React codebases.
          </p>
        </SectionReveal>

        <StaggerReveal as="ol" className="mt-12 space-y-12">
          {items.map((item) => (
            <InViewListItem key={item.id}>
              <div className="grid gap-4 border-t border-border pt-8 md:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)]">
                <motion.div
                  variants={slideFromLeftVariants}
                  className="min-w-0"
                >
                  <p className="font-display text-xl font-bold text-ink">
                    {item.company}
                  </p>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.role}
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    {item.period} · {item.location}
                  </p>
                </motion.div>
                <motion.ul
                  variants={staggerFastContainerVariants}
                  className="space-y-3"
                >
                  {item.bullets.map((bullet) => (
                    <motion.li
                      key={bullet}
                      variants={chipItemVariants}
                      className="relative pl-4 text-base leading-relaxed text-ink-muted before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-accent"
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </InViewListItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
