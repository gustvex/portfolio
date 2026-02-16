import { Briefcase, Calendar, MapPin } from 'lucide-react'
import Page from '@/layout/page'
import { ScrollReveal } from '@/components/custom/scroll-reveal'
import { AnimatedDots } from '@/components/custom/animated-dots'

type Experience = {
  role: string
  company: string
  location: string
  period: string
  description: string
  techs: string[]
}

const experiences: Experience[] = [
  {
    role: 'Engenheiro de Software Full Stack',
    company: 'Agenda Assessoria',
    period: 'Out 2025 — Presente',
    location: 'Cuiabá, MT',
    description:
      'Atuo no desenvolvimento de sistemas corporativos de alta complexidade em uma empresa com atuação nacional e múltiplos clientes, incluindo órgãos públicos. Trabalho com .NET e C#, aplicando Clean Architecture, CQRS e boas práticas de engenharia para construir aplicações escaláveis e resilientes. Participo de decisões técnicas e da evolução arquitetural das plataformas.',
    techs: [
      '.NET',
      'C#',
      'Clean Architecture',
      'CQRS',
      'EF Core',
      'PostgreSQL',
    ],
  },
  {
    role: 'Engenheiro de Software Full Stack (Terceirizado)',
    company: 'Arbe Tecnologia / MTI',
    period: 'Jul 2025 — Out 2025',
    location: 'Remoto',
    description:
      'Contribuí para o desenvolvimento de plataformas institucionais de grande escala destinadas ao Governo do Estado de Mato Grosso. Atuei no backend com NestJS, TypeORM e PostgreSQL e no frontend com React, participando da modelagem de dados e da construção de APIs confiáveis para sistemas críticos.',
    techs: ['TypeScript', 'NestJS', 'React', 'PostgreSQL'],
  },
  {
    role: 'Desenvolvedor Front-End',
    company: 'Eaí Telecomunicações',
    period: 'Mai 2023 — Jul 2025',
    location: 'Remoto',
    description:
      'Evoluí rapidamente de ajustes de interface para a responsabilidade pelo desenvolvimento completo do front-end do Portal do Cliente. Construí aplicações modernas com React, Tailwind e integração com APIs, além de participar de sistemas internos voltados à gestão de dados operacionais.',
    techs: ['React', 'TypeScript', 'Vue.js', 'Tailwind'],
  },
  {
    role: 'Estagiário em Desenvolvimento Front-End',
    company: 'Controladoria Geral do Estado de Mato Grosso (CGE-MT)',
    period: 'Jan 2023 — Out 2023',
    location: 'Cuiabá, MT',
    description:
      'Atuei no desenvolvimento de sistemas institucionais utilizando Vue.js e Quasar, contribuindo para aplicações aderentes a padrões de software e utilizadas em ambiente governamental. A experiência fortaleceu minha base em desenvolvimento web, organização de código e construção de soluções voltadas a contextos públicos de alta responsabilidade.',
    techs: ['Vue.js', 'Quasar', 'JavaScript'],
  },
]

export function CareerSection() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-6">
        <div className="flex w-fit items-center gap-2 rounded-full border border-border/40 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
          <Briefcase className="size-4" />
          <span>Carreira</span>
        </div>

        <h1 className="font-mono text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Minha <span className="text-primary">experiência profissional</span>
        </h1>

        <code className="text-lg leading-relaxed text-muted-foreground">
          <AnimatedDots className="mb-2" />
          Uma linha do tempo com as experiências que moldaram minha carreira
          como desenvolvedor.
        </code>
      </section>

      <section className="relative">
        <div className="absolute left-4.75 top-2 bottom-2 w-px bg-border/60" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="relative flex gap-6 pl-2">
                <div className="relative z-10 mt-1.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-border/40 bg-card">
                  <Briefcase className="size-4 text-primary" />
                </div>

                <div className="flex-1 rounded-xl border border-border/40 bg-card p-6 transition-colors hover:border-border">
                  <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <h3 className="font-mono text-lg font-semibold">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}

function Career() {
  return (
    <Page>
      <CareerSection />
    </Page>
  )
}

export default Career
