import type { LucideIcon } from 'lucide-react'
import { AnimatedDots } from './animated-dots'
import { ScrollReveal } from './scroll-reveal'

type SectionHeaderProps = {
  icon: LucideIcon
  eyebrow: string
  title: React.ReactNode
  description: string
}

export function SectionHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <section className="space-y-6">
      <ScrollReveal>
        <div className="flex w-fit items-center gap-2 rounded-full border border-border/40 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
          <Icon className="size-4" />
          <span>{eyebrow}</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h1 className="font-mono text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="text-lg leading-relaxed text-muted-foreground">
          <AnimatedDots className="mb-2" />
          {description}
        </div>
      </ScrollReveal>
    </section>
  )
}
