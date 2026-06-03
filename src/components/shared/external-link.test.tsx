import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ExternalLink } from './external-link'

describe('ExternalLink', () => {
  it('abre links http em nova aba com rel seguro', () => {
    render(<ExternalLink href="https://example.com">visite</ExternalLink>)
    const link = screen.getByRole('link', { name: 'visite' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('mantém comportamento padrão para mailto', () => {
    render(<ExternalLink href="mailto:user@example.com">email</ExternalLink>)
    const link = screen.getByRole('link', { name: 'email' })
    expect(link).not.toHaveAttribute('target')
    expect(link).not.toHaveAttribute('rel')
  })
})
