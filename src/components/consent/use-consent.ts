import { useEffect, useState } from 'react'

export const CONSENT_KEY = 'portfolio-consent-v1'

const readConsent = (): boolean => {
  try {
    return localStorage.getItem(CONSENT_KEY) !== null
  } catch {
    return false
  }
}

const writeConsent = () => {
  try {
    localStorage.setItem(CONSENT_KEY, new Date().toISOString())
  } catch {
    // storage indisponível (modo privado): segue apenas em sessão
  }
}

export function useConsent() {
  const [accepted, setAccepted] = useState<boolean>(() => readConsent())

  useEffect(() => {
    document.documentElement.style.overflow = accepted ? '' : 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [accepted])

  const accept = () => {
    writeConsent()
    setAccepted(true)
  }

  return { accepted, accept }
}
