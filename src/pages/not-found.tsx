import { FileQuestion } from 'lucide-react'
import { Button } from '@/components/ui/button'

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <FileQuestion className="size-16 text-muted-foreground" />
      <div className="space-y-2">
        <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">
          404
        </h1>
        <p className="text-muted-foreground">
          A página que você está procurando não existe.
        </p>
      </div>
      <Button asChild>
        <a href="/">Voltar ao início</a>
      </Button>
    </div>
  )
}

export default NotFound
