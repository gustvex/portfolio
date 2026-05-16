import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { CONSENT_KEY, useConsent } from './use-consent'

describe('useConsent', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    document.documentElement.style.overflow = ''
  })

  it('inicia sem consentimento quando localStorage está vazio', () => {
    const { result } = renderHook(() => useConsent())
    expect(result.current.accepted).toBe(false)
    expect(document.documentElement.style.overflow).toBe('hidden')
  })

  it('lê consentimento persistido', () => {
    localStorage.setItem(CONSENT_KEY, new Date().toISOString())
    const { result } = renderHook(() => useConsent())
    expect(result.current.accepted).toBe(true)
    expect(document.documentElement.style.overflow).toBe('')
  })

  it('persiste o consentimento ao aceitar', () => {
    const { result } = renderHook(() => useConsent())

    act(() => {
      result.current.accept()
    })

    expect(result.current.accepted).toBe(true)
    expect(localStorage.getItem(CONSENT_KEY)).not.toBeNull()
    expect(document.documentElement.style.overflow).toBe('')
  })
})
