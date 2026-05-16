import { useEffect } from 'react'

const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap'

const PRECONNECT_HREFS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
] as const

/**
 * Injeta as fontes externas apenas após o consentimento do usuário.
 * Recursos de terceiros não devem carregar antes do aceite.
 */
export function FontsLoader() {
  useEffect(() => {
    const links: HTMLLinkElement[] = []

    PRECONNECT_HREFS.forEach((href) => {
      const preconnect = document.createElement('link')
      preconnect.rel = 'preconnect'
      preconnect.href = href
      if (href.includes('gstatic')) preconnect.crossOrigin = ''
      document.head.appendChild(preconnect)
      links.push(preconnect)
    })

    const stylesheet = document.createElement('link')
    stylesheet.rel = 'stylesheet'
    stylesheet.href = FONT_HREF
    document.head.appendChild(stylesheet)
    links.push(stylesheet)

    return () => {
      links.forEach((link) => link.remove())
    }
  }, [])

  return null
}
