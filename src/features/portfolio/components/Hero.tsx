import { motion } from 'motion/react'
import { MonogramAvatar } from './MonogramAvatar'
import { revealEase } from '../utils/motionVariants'
import type { PortfolioContent } from '../types/portfolio.types'

interface HeroProps {
  content: Pick<
    PortfolioContent,
    'name' | 'role' | 'summary' | 'monogram' | 'socials'
  >
}

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: revealEase },
  }),
}

/**
 * First-viewport hero: brand name, role, summary, CTAs, and monogram.
 */
export function Hero({ content }: HeroProps) {
  const github = content.socials.find((link) => link.label === 'GitHub')

  return (
    <section
      id="about"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pb-20 pt-28 md:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,var(--mesh-1),transparent_45%),radial-gradient(ellipse_at_85%_20%,var(--mesh-2),transparent_40%),radial-gradient(ellipse_at_50%_90%,var(--mesh-3),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <motion.div
          initial="hidden"
          animate="visible"
          className="min-w-0"
        >
          <motion.p
            custom={0}
            variants={heroItem}
            className="mb-4 text-sm font-medium tracking-[0.18em] text-accent uppercase"
          >
            Portfolio
          </motion.p>
          <motion.h1
            custom={0.06}
            variants={heroItem}
            className="font-display text-5xl leading-[0.95] font-extrabold tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            {content.name}
          </motion.h1>
          <motion.p
            custom={0.12}
            variants={heroItem}
            className="mt-5 max-w-xl font-display text-xl font-semibold text-ink md:text-2xl"
          >
            {content.role}
          </motion.p>
          <motion.p
            custom={0.18}
            variants={heroItem}
            className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg"
          >
            {content.summary}
          </motion.p>
          <motion.div
            custom={0.26}
            variants={heroItem}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-surface-elevated/70 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Contact
            </a>
            {github ? (
              <a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-ink-muted transition-colors hover:text-accent"
              >
                GitHub
              </a>
            ) : null}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: revealEase }}
          className="flex justify-center lg:justify-end"
        >
          <MonogramAvatar monogram={content.monogram} />
        </motion.div>
      </div>
    </section>
  )
}
