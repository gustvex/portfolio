import { AnimatedDots } from './animated-dots'
import { cn } from '@/lib/utils'

type CodeLine = {
  key: string
  value: string
}

type CodeCardProps = {
  variableName?: string
  lines: CodeLine[]
  className?: string
}

export function CodeCard({
  variableName = 'dev',
  lines,
  className,
}: CodeCardProps) {
  return (
    <div
      className={cn(
        'w-full max-w-md rounded-xl border border-border/40 bg-card p-4 text-left font-mono text-sm text-muted-foreground',
        className,
      )}
    >
      <AnimatedDots className="mb-2" />
      <code>
        <span className="text-chart-2">const</span>{' '}
        <span className="text-chart-4">{variableName}</span>{' '}
        <span className="text-foreground">=</span>{' '}
        <span className="text-chart-1">{'{'}</span>
        {lines.map((line, index) => (
          <span key={line.key}>
            <br />
            {'  '}
            <span className="text-foreground">{line.key}:</span>{' '}
            <span className="text-chart-5">{`"${line.value}"`}</span>
            {index < lines.length - 1 ? ',' : ''}
          </span>
        ))}
        <br />
        <span className="text-chart-1">{'}'}</span>
      </code>
    </div>
  )
}

export default CodeCard
