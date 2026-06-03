import { cn } from '@/lib/utils'

type TechBadgeProps = {
  children: React.ReactNode
  className?: string
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}
