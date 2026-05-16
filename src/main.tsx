import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ConsentGate } from '@/components/consent/consent-gate'
import { FontsLoader } from '@/components/consent/fonts-loader'
import { ErrorBoundary } from '@/components/custom/error-boundary'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { router } from '@/routes/routes'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Elemento #root não encontrado no documento.')
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <ErrorBoundary>
        <ConsentGate>
          <FontsLoader />
          <RouterProvider router={router} />
        </ConsentGate>
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>,
)
