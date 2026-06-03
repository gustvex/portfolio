import { useEffect, useMemo, useState } from 'react'
import {
  ThemeProviderContext,
  type Theme,
  type ThemeProviderState,
} from './theme-context'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

const readStoredTheme = (key: string, fallback: Theme): Theme => {
  try {
    return (localStorage.getItem(key) as Theme | null) ?? fallback
  } catch {
    return fallback
  }
}

const writeStoredTheme = (key: string, theme: Theme) => {
  try {
    localStorage.setItem(key, theme)
  } catch {
    // storage indisponível
  }
}

const resolveAppliedTheme = (theme: Theme): 'light' | 'dark' => {
  if (theme !== 'system') return theme
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'portfolio-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() =>
    readStoredTheme(storageKey, defaultTheme),
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolveAppliedTheme(theme))
  }, [theme])

  const value = useMemo<ThemeProviderState>(
    () => ({
      theme,
      setTheme: (next: Theme) => {
        writeStoredTheme(storageKey, next)
        setThemeState(next)
      },
    }),
    [theme, storageKey],
  )

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
