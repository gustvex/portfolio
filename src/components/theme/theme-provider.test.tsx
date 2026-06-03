import { act, render, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { ThemeProvider } from './theme-provider'
import { useTheme } from './theme-context'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('light', 'dark')
})

describe('ThemeProvider', () => {
  it('aplica o tema padrão "dark" no documento', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <span>conteudo</span>
      </ThemeProvider>,
    )
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('persiste e aplica a mudança de tema', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider defaultTheme="dark" storageKey="test-theme">
        {children}
      </ThemeProvider>
    )

    const { result } = renderHook(() => useTheme(), { wrapper })

    act(() => {
      result.current.setTheme('light')
    })

    expect(document.documentElement.classList.contains('light')).toBe(true)
    expect(localStorage.getItem('test-theme')).toBe('light')
  })

  it('lança erro quando useTheme é usado fora do provider', () => {
    const consoleError = console.error
    console.error = () => {}
    try {
      expect(() => render(<ThrowingChild />)).toThrow(
        /useTheme deve ser usado dentro de um ThemeProvider/,
      )
    } finally {
      console.error = consoleError
    }
  })
})

function ThrowingChild() {
  useTheme()
  return null
}
