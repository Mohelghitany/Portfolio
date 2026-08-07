import { useEffect, useEffectEvent, useRef, type RefObject } from 'react'
import {
  useMotionValue,
  useSpring,
  type MotionValue,
} from 'motion/react'

interface PointerParallaxValues {
  x: MotionValue<number>
  y: MotionValue<number>
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  containerRef: RefObject<HTMLDivElement | null>
}

interface UsePointerParallaxOptions {
  /** Max translate in pixels. */
  strength?: number
  /** Max tilt in degrees. */
  tilt?: number
}

/**
 * Springs monogram position and tilt toward the pointer within a container.
 */
export function usePointerParallax({
  strength = 28,
  tilt = 12,
}: UsePointerParallaxOptions = {}): PointerParallaxValues {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springConfig = { stiffness: 120, damping: 18, mass: 0.6 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handlePointerMove = useEffectEvent((event: PointerEvent) => {
    const node = containerRef.current
    if (!node) {
      return
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      x.set(0)
      y.set(0)
      rotateX.set(0)
      rotateY.set(0)
      return
    }

    const rect = node.getBoundingClientRect()
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5

    x.set(offsetX * strength)
    y.set(offsetY * strength)
    rotateY.set(offsetX * tilt)
    rotateX.set(-offsetY * tilt)
  })

  const reset = useEffectEvent(() => {
    x.set(0)
    y.set(0)
    rotateX.set(0)
    rotateY.set(0)
  })

  useEffect(() => {
    const node = containerRef.current
    if (!node) {
      return
    }

    node.addEventListener('pointermove', handlePointerMove)
    node.addEventListener('pointerleave', reset)

    return () => {
      node.removeEventListener('pointermove', handlePointerMove)
      node.removeEventListener('pointerleave', reset)
    }
  }, [])

  return {
    x: springX,
    y: springY,
    rotateX: springRotateX,
    rotateY: springRotateY,
    containerRef,
  }
}
