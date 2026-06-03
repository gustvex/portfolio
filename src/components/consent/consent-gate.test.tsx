import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ConsentGate } from './consent-gate'
import { CONSENT_KEY } from './use-consent'

describe('ConsentGate', () => {
  it('mostra o aviso quando não há consentimento', () => {
    render(
      <ConsentGate>
        <span data-testid="conteudo">Protegido</span>
      </ConsentGate>,
    )

    expect(
      screen.getByRole('dialog', { name: /aviso de privacidade/i }),
    ).toBeInTheDocument()
    expect(screen.queryByTestId('conteudo')).not.toBeInTheDocument()
  })

  it('exibe o conteúdo quando o usuário já aceitou', () => {
    localStorage.setItem(CONSENT_KEY, new Date().toISOString())

    render(
      <ConsentGate>
        <span data-testid="conteudo">Protegido</span>
      </ConsentGate>,
    )

    expect(screen.getByTestId('conteudo')).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('exibe o conteúdo após o aceite e persiste no localStorage', async () => {
    const user = userEvent.setup()

    render(
      <ConsentGate>
        <span data-testid="conteudo">Protegido</span>
      </ConsentGate>,
    )

    await user.click(
      screen.getByRole('button', { name: /aceitar e continuar/i }),
    )

    expect(screen.getByTestId('conteudo')).toBeInTheDocument()
    expect(localStorage.getItem(CONSENT_KEY)).not.toBeNull()
  })
})
