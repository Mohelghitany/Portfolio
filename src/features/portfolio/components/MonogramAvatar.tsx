import { motion } from 'motion/react'
import { cn } from '@/shared/cn'
import { usePointerParallax } from '../hooks/usePointerParallax'

interface MonogramAvatarProps {
  monogram: string
  className?: string
}


export function MonogramAvatar({ monogram, className }: MonogramAvatarProps) {
  const { x, y, rotateX, rotateY, containerRef } = usePointerParallax({
    strength: 36,
    tilt: 14,
  })

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        'relative flex aspect-square w-full max-w-[22rem] items-center justify-center [perspective:900px]',
        className,
      )}
    >
      <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_30%_25%,var(--mesh-1),transparent_55%),radial-gradient(circle_at_75%_70%,var(--mesh-2),transparent_50%)] blur-2xl" />
      <motion.div
        style={{ x, y, rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{
          scale: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="relative flex size-[min(70vw,18rem)] items-center justify-center rounded-full border border-border bg-surface-elevated/80 shadow-[0_0_0_1px_var(--glow),0_24px_60px_-20px_var(--glow)] backdrop-blur-md md:size-72"
      >
        <span className="font-display text-6xl font-extrabold tracking-tight text-accent md:text-7xl">
          {monogram}
        </span>
        <span className="absolute inset-4 rounded-full border border-accent/25" />
        <span className="absolute -inset-px rounded-full bg-[conic-gradient(from_210deg,transparent_40%,var(--accent)_52%,transparent_64%)] opacity-30 mix-blend-screen" />
      </motion.div>
    </div>
  )
}
