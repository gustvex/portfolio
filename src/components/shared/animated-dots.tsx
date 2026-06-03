import { useState } from 'react'
import { cn } from '@/lib/utils'

const DOT_COLORS = [
  'bg-destructive/60',
  'bg-chart-4/60',
  'bg-chart-2/60',
] as const

type AnimatedDotsProps = {
  className?: string
}

export function AnimatedDots({ className }: AnimatedDotsProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className={cn('flex gap-1.5', className)}>
      {DOT_COLORS.map((color, index) => (
        <div
          key={color}
          className={cn('size-3 rounded-full', color)}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          style={{
            transition: 'transform 0.45s cubic-bezier(.4,1.4,.6,1)',
            transform:
              hovered === index ? 'translateY(-10px)' : 'translateY(0)',
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
