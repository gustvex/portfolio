import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TechBadge } from './tech-badge'

describe('TechBadge', () => {
  it('renderiza o conteúdo recebido', () => {
    render(<TechBadge>React</TechBadge>)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('aceita className adicional', () => {
    render(<TechBadge className="custom-class">Vue</TechBadge>)
    expect(screen.getByText('Vue')).toHaveClass('custom-class')
  })
})
