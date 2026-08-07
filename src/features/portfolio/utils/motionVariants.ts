import type { Transition, Variants } from 'motion/react'

/**
 * Shared easing for entrance animations.
 */
export const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

/**
 * Default transition for in-view reveals.
 */
export const revealTransition: Transition = {
  duration: 0.55,
  ease: revealEase,
}

/**
 * Parent container that staggers children when it enters the viewport.
 */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

/**
 * Faster stagger for dense tag grids.
 */
export const staggerFastContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
}

/**
 * Fade + rise item used inside stagger containers.
 */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
}

/**
 * Fade + slight scale for chips/tags.
 */
export const chipItemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: revealEase },
  },
}

/**
 * Slide in from the left for timeline-style blocks.
 */
export const slideFromLeftVariants: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: revealTransition,
  },
}

/**
 * Slide in from the right for paired content.
 */
export const slideFromRightVariants: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: revealTransition,
  },
}
