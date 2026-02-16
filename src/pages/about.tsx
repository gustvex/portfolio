import image from '@/assets/image.png'
import { AnimatedDots } from '@/components/custom/animated-dots'
import { Code2, Database, Globe, Server, User } from 'lucide-react'
import Page from '@/layout/page'
import { ScrollReveal } from '@/components/custom/scroll-reveal'

const techStack = [
  {
    category: 'Frontend',
    icon: Globe,
    techs: [
      'TypeScript',
      'React',
      'Next.js',
      'Vue.js',
      'Shadcn',
      'Quasar Framework',
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    techs: [
      'C#',
      '.Net 9',
      'Node.js',
      'Nest.js',
      'TypeORM',
      'EF (Entity Framework) ',
    ],
  },
  {
    category: 'Banco de Dados',
    icon: Database,
    techs: [
      'Bancos relacionais e não relacionais',
      'SQL',
      'PostgreSQL',
      'MongoDB',
    ],
  },

  {
    category: 'Outros',
    icon: Code2,
    techs: [
      'Git',
      'CI/CD',
      'Testes',
      'Clean Code',
      'Clean Architecture',
      'Linux',
      'VMs',
    ],
  },
]

export function AboutSection() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <ScrollReveal>
          <div className="flex w-fit items-center gap-2 rounded-full border border-border/40 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
            <User className="size-4" />
            <span>Sobre mim</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="space-y-4">
              <h1 className="font-mono text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Gustavo <span className="text-primary">Oliveira</span>
              </h1>
              <code className="text-lg leading-relaxed text-muted-foreground">
                <AnimatedDots className="mb-2" />
                Sou um estudande de engenharia de computação apaixonado por
                tecnologia e desenvolvimento de software. Com uma sólida
                experienncia em desenvolvimento full stack, tenho trabalhado em
                diversos projetos que vão desde aplicações web até sistemas mais
                complexos. Minha jornada na programação começou cedo, e desde
                então, tenho me dedicado a aprimorar minhas habilidades e
                expandir meu conhecimento em diferentes tecnologias. Estou
                sempre em busca de novos desafios e oportunidades para crescer
                como desenvolvedor e contribuir para projetos inovadores.
              </code>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="space-y-6">
        <ScrollReveal>
          <h2 className="font-mono text-2xl font-semibold tracking-tight">
            Tech Stack
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <img
            src={image}
            alt="Foto de Gustavo Oliveira"
            className="w-full max-w-xs h-auto md:w-75 md:h-100 shrink-0 rounded-2xl object-cover ring-2 ring-border/60 ring-offset-4 ring-offset-background mx-auto md:mx-0"
          />
          <div className="flex flex-row flex-wrap gap-8 justify-center md:justify-start">
            {techStack.map((stack, index) => (
              <ScrollReveal key={stack.category} delay={index * 100}>
                <div className="h-45 w-70 max-w-xs rounded-xl border border-border/40 bg-card p-5 transition-colors hover:border-border mx-auto">
                  <AnimatedDots className="mb-2" />
                  <div className="mb-3 flex  gap-2">
                    <stack.icon className="size-5 text-primary" />
                    <h3 className="font-semibold">{stack.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function About() {
  return (
    <Page>
      <AboutSection />
    </Page>
  )
}

export default About
