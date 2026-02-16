import { useState } from 'react'
import { ScrollReveal } from './scroll-reveal'

export function AnimatedDots({ className = '' }: { className?: string }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const colors = ['bg-destructive/60', 'bg-chart-4/60', 'bg-chart-2/60']

  return (
    <ScrollReveal>
      <div className={`flex gap-1.5 cursor-pointer ${className}`}>
        {colors.map((color, i) => (
          <div
            key={color}
            className={`size-3 rounded-full ${color}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              transition: 'transform 0.45s cubic-bezier(.4,1.4,.6,1)',
              transform: hovered === i ? 'translateY(-10px)' : 'translateY(0)',
            }}
          />
        ))}
      </div>
    </ScrollReveal>
  )
}
