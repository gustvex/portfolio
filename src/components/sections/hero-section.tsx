import { Terminal } from 'lucide-react'
import { CodeCard } from '@/components/shared/code-card'
import { ScrollReveal } from '@/components/shared/scroll-reveal'

const HERO_CODE_LINES = [
  { key: 'nome', value: 'Gustavo Oliveira' },
  { key: 'stack', value: 'Full Stack' },
  { key: 'paixão', value: 'Resolver problemas' },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center gap-8 text-center"
    >
      <ScrollReveal delay={0}>
        <div className="flex items-center gap-2 rounded-full border border-border/40 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
          <Terminal className="size-4" />
          <span>Desenvolvedor Full Stack</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Faço seus projetos{' '}
          <span className="text-primary">virarem realidade</span> com código
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <p className="max-w-xl text-lg text-muted-foreground">
          Transformo ideias em aplicações web modernas, escaláveis e com
          experiências que fazem a diferença.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={450}>
        <CodeCard lines={HERO_CODE_LINES} />
      </ScrollReveal>
    </section>
  )
}
