import { motion } from 'motion/react'
import { InViewItem, SectionReveal, StaggerReveal } from './SectionReveal'
import {
  chipItemVariants,
  staggerFastContainerVariants,
} from '../utils/motionVariants'
import type { SkillGroup } from '../types/portfolio.types'

interface SkillsSectionProps {
  groups: SkillGroup[]
}

/**
 * Grouped skills section with staggered group and chip animations.
 */
export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <section id="skills" className="scroll-mt-28 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Skills
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Frontend-first toolkit with full-stack, mobile, and ML familiarity.
          </p>
        </SectionReveal>

        <StaggerReveal className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <InViewItem key={group.id}>
              <h3 className="font-display text-lg font-bold text-ink">
                {group.title}
              </h3>
              <motion.ul
                variants={staggerFastContainerVariants}
                className="mt-4 flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={chipItemVariants}
                    whileHover={{ scale: 1.06, y: -1 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                    className="cursor-default rounded-lg border border-border bg-transparent px-3 py-1.5 text-sm text-ink-muted transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-accent-fg"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </InViewItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
