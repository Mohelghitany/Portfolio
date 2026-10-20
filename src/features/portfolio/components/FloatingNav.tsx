import { cn } from '@/shared/cn'
import { ThemeToggle } from './ThemeToggle'
import type { ThemeMode } from '../hooks/useTheme'
import type { PortfolioContent } from '../types/portfolio.types'

interface FloatingNavProps {
  items: PortfolioContent['nav']
  theme: ThemeMode
  onToggleTheme: () => void
}

/**
 * Floating top navigation with theme toggle.
 */
export function FloatingNav({ items, theme, onToggleTheme }: FloatingNavProps) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Primary"
        className="pointer-events-auto flex max-w-full items-center gap-2 rounded-2xl border border-border/80 bg-surface-elevated/75 px-2 py-2 shadow-[0_10px_40px_-18px_rgba(12,18,34,0.45)] backdrop-blur-xl"
      >
        <a
          href="#about"
          className="hidden rounded-xl px-3 py-2 font-display text-sm font-bold tracking-tight text-ink sm:inline"
        >
          ME
        </a>
        <ul className="flex max-w-[70vw] items-center gap-0.5 overflow-x-auto sm:max-w-none">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  'inline-flex whitespace-nowrap rounded-xl px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-accent-soft hover:text-ink',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </nav>
    </header>
  )
}
