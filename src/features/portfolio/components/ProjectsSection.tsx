import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { cn } from '@/shared/cn'
import { SectionReveal } from './SectionReveal'
import {
  chipItemVariants,
  revealEase,
  staggerFastContainerVariants,
} from '../utils/motionVariants'
import type {
  PortfolioContent,
  ProjectCategory,
  ProjectItem,
} from '../types/portfolio.types'

interface ProjectsSectionProps {
  projects: ProjectItem[]
  filters: PortfolioContent['projectFilters']
}

/**
 * Filterable projects list with scroll and filter layout animations.
 */
export function ProjectsSection({ projects, filters }: ProjectsSectionProps) {
  const [active, setActive] = useState<ProjectCategory>('all')

  const visible =
    active === 'all'
      ? projects
      : projects.filter((project) => project.categories.includes(active))

  return (
    <section id="projects" className="scroll-mt-28 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Selected work across web, mobile, signal processing, and systems
            coursework.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.08} className="mt-8">
          <LayoutGroup>
            <div
              role="tablist"
              aria-label="Project categories"
              className="flex flex-wrap gap-2"
            >
              {filters.map((filter) => {
                const selected = active === filter.id
                return (
                  <button
                    key={filter.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(filter.id)}
                    className={cn(
                      'relative rounded-xl px-3.5 py-2 text-sm font-medium transition-colors',
                      selected
                        ? 'text-accent-fg'
                        : 'text-ink-muted hover:text-ink',
                    )}
                  >
                    {selected ? (
                      <motion.span
                        layoutId="project-filter"
                        className="absolute inset-0 rounded-xl bg-accent"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    ) : null}
                    <span className="relative z-10">{filter.label}</span>
                  </button>
                )
              })}
            </div>
          </LayoutGroup>
        </SectionReveal>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerFastContainerVariants}
          className="mt-10 divide-y divide-border border-y border-border"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, index) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.03,
                  ease: revealEase,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="grid gap-3 py-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-start"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-base leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                  <motion.ul
                    variants={staggerFastContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="mt-3 flex flex-wrap gap-2"
                  >
                    {project.tech.map((tech) => (
                      <motion.li
                        key={tech}
                        variants={chipItemVariants}
                        className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                {project.href ? (
                  <motion.a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: revealEase }}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                  >
                    View on GitHub
                    <span aria-hidden="true">↗</span>
                  </motion.a>
                ) : null}
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}
