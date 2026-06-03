import { Component, type ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

type ErrorBoundaryProps = {
  children: ReactNode
  fallback?: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: { componentStack?: string | null }) {
    if (import.meta.env.DEV) {
      console.error('[ErrorBoundary]', error, info)
    }
  }

  handleReset = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (!this.state.hasError) return this.props.children
    if (this.props.fallback) return this.props.fallback

    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
        <AlertTriangle className="size-12 text-destructive" />
        <div className="space-y-2">
          <h1 className="font-mono text-2xl font-bold">
            Algo deu errado
          </h1>
          <p className="text-muted-foreground">
            Tente recarregar a página. Se o problema persistir, entre em contato.
          </p>
        </div>
        <Button onClick={() => window.location.reload()}>
          Recarregar página
        </Button>
        <Button variant="ghost" onClick={this.handleReset}>
          Tentar novamente
        </Button>
      </div>
    )
  }
}
