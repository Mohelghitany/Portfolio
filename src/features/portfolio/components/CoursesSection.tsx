import { motion } from 'motion/react'
import { InViewListItem, SectionReveal, StaggerReveal } from './SectionReveal'
import {
  slideFromLeftVariants,
  slideFromRightVariants,
} from '../utils/motionVariants'
import type { CourseItem } from '../types/portfolio.types'

interface CoursesSectionProps {
  courses: CourseItem[]
}

/**
 * Courses section with staggered slide-in blocks.
 */
export function CoursesSection({ courses }: CoursesSectionProps) {
  return (
    <section id="courses" className="scroll-mt-28 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Courses
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Continuous learning across machine learning and modern web
            development.
          </p>
        </SectionReveal>

        <StaggerReveal as="ul" className="mt-12 space-y-10">
          {courses.map((course) => (
            <InViewListItem key={course.id}>
              <div className="grid gap-4 border-t border-border pt-8 md:grid-cols-[minmax(12rem,0.32fr)_minmax(0,0.68fr)]">
                <motion.div
                  variants={slideFromLeftVariants}
                  className="flex min-h-28 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,var(--accent),#115e59)] px-5 py-6 text-center"
                >
                  <span className="font-display text-lg font-bold leading-snug text-white">
                    {course.title}
                  </span>
                </motion.div>
                <motion.div variants={slideFromRightVariants}>
                  {course.subtitle ? (
                    <p className="text-sm font-medium text-accent">
                      {course.subtitle}
                    </p>
                  ) : null}
                  <p className="mt-2 text-base leading-relaxed text-ink-muted">
                    {course.description}
                  </p>
                </motion.div>
              </div>
            </InViewListItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
