import { Terminal } from 'lucide-react'
import Page from '@/layout/page'
import { ScrollReveal } from '@/components/custom/scroll-reveal'
import { AboutSection } from './about'
import { CareerSection } from './career'
import { ProjectsSection } from './projects'
import { ContactSection } from './contact'
import { AnimatedDots } from '@/components/custom/animated-dots'

function Home() {
  return (
    <Page>
      <div className="space-y-32">
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
            <div className="w-full max-w-md rounded-xl border border-border/40 bg-card p-4 text-left font-mono text-sm text-muted-foreground">
              <AnimatedDots className="mb-2" />
              <code>
                <span className="text-chart-2">const</span>{' '}
                <span className="text-chart-4">dev</span>{' '}
                <span className="text-foreground">=</span>{' '}
                <span className="text-chart-1">{`{`}</span>
                <br />
                {'  '}
                <span className="text-foreground">nome:</span>{' '}
                <span className="text-chart-5">"Gustavo Oliveira"</span>
                ,
                <br />
                {'  '}
                <span className="text-foreground">stack:</span>{' '}
                <span className="text-chart-5">"Full Stack"</span>,
                <br />
                {'  '}
                <span className="text-foreground">paixão:</span>{' '}
                <span className="text-chart-5">"Resolver problemas"</span>
                <br />
                <span className="text-chart-1">{`}`}</span>
              </code>
            </div>
          </ScrollReveal>
        </section>

        <ScrollReveal>
          <section id="sobre">
            <AboutSection />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="carreira">
            <CareerSection />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="projetos">
            <ProjectsSection />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="contato">
            <ContactSection />
          </section>
        </ScrollReveal>
      </div>
    </Page>
  )
}

export default Home
