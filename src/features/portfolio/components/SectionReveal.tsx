import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '@/shared/cn'
import {
  revealTransition,
  staggerContainerVariants,
  staggerItemVariants,
} from '../utils/motionVariants'

type RevealDirection = 'up' | 'left' | 'right' | 'scale'

interface SectionRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
  delay?: number
  direction?: RevealDirection
}

const directionInitial: Record<
  RevealDirection,
  { opacity: number; x?: number; y?: number; scale?: number }
> = {
  up: { opacity: 0, y: 28 },
  left: { opacity: 0, x: -28 },
  right: { opacity: 0, x: 28 },
  scale: { opacity: 0, scale: 0.94, y: 12 },
}

/**
 * Fade/slide-in wrapper for section content when it enters the viewport.
 */
export function SectionReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  ...props
}: SectionRevealProps) {
  return (
    <motion.div
      initial={directionInitial[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -8% 0px' }}
      transition={{ ...revealTransition, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerRevealProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul' | 'ol'
  fast?: boolean
}

/**
 * Staggers child InViewItems when the container enters the viewport.
 */
export function StaggerReveal({
  children,
  className,
  as = 'div',
  fast = false,
}: StaggerRevealProps) {
  const containerVariants = fast
    ? {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.04, delayChildren: 0.02 },
        },
      }
    : staggerContainerVariants

  if (as === 'ul') {
    return (
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12, margin: '0px 0px -6% 0px' }}
        className={cn(className)}
      >
        {children}
      </motion.ul>
    )
  }

  if (as === 'ol') {
    return (
      <motion.ol
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12, margin: '0px 0px -6% 0px' }}
        className={cn(className)}
      >
        {children}
      </motion.ol>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -6% 0px' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

interface InViewItemProps {
  children: ReactNode
  className?: string
}

/**
 * Child of StaggerReveal — animates when the parent becomes visible.
 */
export function InViewItem({ children, className }: InViewItemProps) {
  return (
    <motion.div variants={staggerItemVariants} className={cn(className)}>
      {children}
    </motion.div>
  )
}

interface InViewListItemProps {
  children: ReactNode
  className?: string
}

/**
 * List-item variant of InViewItem for semantic ol/ul lists.
 */
export function InViewListItem({ children, className }: InViewListItemProps) {
  return (
    <motion.li variants={staggerItemVariants} className={cn(className)}>
      {children}
    </motion.li>
  )
}
