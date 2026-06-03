import { act, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { triggerIntersection } from '@/test/intersection-observer-mock'
import { useScrollReveal } from './use-scroll-reveal'

function Probe({ onState }: { onState: (visible: boolean) => void }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
  onState(isVisible)
  return <div ref={ref} data-testid="probe" />
}

describe('useScrollReveal', () => {
  it('começa invisível e fica visível quando intersecta', () => {
    let visible = false
    render(<Probe onState={(v) => (visible = v)} />)

    expect(visible).toBe(false)

    act(() => {
      triggerIntersection(true)
    })

    expect(visible).toBe(true)
  })

  it('não volta a invisível após sair quando once=true (padrão)', () => {
    let visible = false
    render(<Probe onState={(v) => (visible = v)} />)

    act(() => {
      triggerIntersection(true)
    })
    expect(visible).toBe(true)

    act(() => {
      triggerIntersection(false)
    })
    expect(visible).toBe(true)
  })
})
