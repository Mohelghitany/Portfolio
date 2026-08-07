import { useEffect, useEffectEvent, useState } from 'react'

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

/**
 * Reads the preferred theme from storage or system preference.
 */
function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

/**
 * Applies the theme class on the document element.
 */
function applyTheme(theme: ThemeMode): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

/**
 * Manages light/dark theme with localStorage persistence.
 */
export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme())

  const syncTheme = useEffectEvent((next: ThemeMode) => {
    applyTheme(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  })

  useEffect(() => {
    syncTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return { theme, setTheme, toggleTheme, isDark: theme === 'dark' }
}
