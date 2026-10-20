import { useEffect, useEffectEvent, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react'

/**
 * Returns whether cursor-driven background effects should run.
 */
function getCursorEffectEnabled(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  const finePointer = window.matchMedia('(pointer: fine)').matches
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  return finePointer && !reduceMotion
}

/**
 * Full-page background glow that follows the pointer with spring lag.
 */
export function CursorBackground() {
  const [enabled] = useState(getCursorEffectEnabled)
  const rawX = useMotionValue(
    typeof window === 'undefined' ? 0 : window.innerWidth * 0.65,
  )
  const rawY = useMotionValue(
    typeof window === 'undefined' ? 0 : window.innerHeight * 0.35,
  )
  const x = useSpring(rawX, { stiffness: 90, damping: 22, mass: 0.45 })
  const y = useSpring(rawY, { stiffness: 90, damping: 22, mass: 0.45 })
  const lagX = useSpring(rawX, { stiffness: 40, damping: 18, mass: 0.8 })
  const lagY = useSpring(rawY, { stiffness: 40, damping: 18, mass: 0.8 })

  const primaryGlow = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, var(--cursor-glow-primary), transparent 55%)`
  const secondaryGlow = useMotionTemplate`radial-gradient(340px circle at ${lagX}px ${lagY}px, var(--cursor-glow-secondary), transparent 60%)`

  const syncPointer = useEffectEvent((event: PointerEvent) => {
    rawX.set(event.clientX)
    rawY.set(event.clientY)
  })

  useEffect(() => {
    if (!enabled) {
      return
    }

    window.addEventListener('pointermove', syncPointer, { passive: true })
    return () => {
      window.removeEventListener('pointermove', syncPointer)
    }
  }, [enabled])

  if (!enabled) {
    return null
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-90 dark:opacity-100"
        style={{ background: primaryGlow }}
      />
      <motion.div
        className="absolute inset-0 opacity-70 mix-blend-soft-light dark:opacity-80 dark:mix-blend-screen"
        style={{ background: secondaryGlow }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--surface)_95%)] opacity-70" />
    </div>
  )
}
