import { User } from 'lucide-react'
import image from '@/assets/image.png'
import { AnimatedDots } from '@/components/custom/animated-dots'
import { ScrollReveal } from '@/components/custom/scroll-reveal'
import { SectionHeader } from '@/components/custom/section-header'
import { TechBadge } from '@/components/custom/tech-badge'
import { Card } from '@/components/ui/card'
import { techStack } from '@/data/tech-stack'

const ABOUT_DESCRIPTION =
  'Sou estudante de engenharia de computação, apaixonado por tecnologia e desenvolvimento de software. Tenho experiência sólida em desenvolvimento full stack, trabalhando em projetos que vão de aplicações web a sistemas mais complexos. Estou sempre em busca de novos desafios e oportunidades para crescer como desenvolvedor.'

export function AboutSection() {
  return (
    <div className="space-y-12">
      <SectionHeader
        icon={User}
        eyebrow="Sobre mim"
        title={
          <>
            Gustavo <span className="text-primary">Oliveira</span>
          </>
        }
        description={ABOUT_DESCRIPTION}
      />

      <section className="space-y-6">
        <ScrollReveal>
          <h2 className="font-mono text-2xl font-semibold tracking-tight">
            Tech Stack
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <img
            src={image}
            alt={`Foto de ${'Gustavo Oliveira'}`}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-full max-w-xs shrink-0 rounded-2xl object-cover ring-2 ring-border/60 ring-offset-4 ring-offset-background md:mx-0 md:h-100 md:w-75"
          />

          <div className="flex flex-row flex-wrap justify-center gap-8 md:justify-start">
            {techStack.map((stack, index) => (
              <ScrollReveal key={stack.category} delay={index * 100}>
                <Card className="mx-auto h-45 w-70 max-w-xs p-5 transition-colors hover:border-border">
                  <AnimatedDots className="mb-2" />
                  <div className="mb-3 flex gap-2">
                    <stack.icon className="size-5 text-primary" />
                    <h3 className="font-semibold">{stack.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech) => (
                      <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
