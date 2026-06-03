import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { ScrollReveal } from '@/components/shared/scroll-reveal'
import { SectionHeader } from '@/components/shared/section-header'
import { TechBadge } from '@/components/shared/tech-badge'
import { Card } from '@/components/ui/card'
import { experiences, type Experience } from '@/data/experiences'

function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="relative flex gap-6 pl-2">
      <div className="relative z-10 mt-1.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-border/40 bg-card">
        <Briefcase className="size-4 text-primary" />
      </div>

      <Card className="flex-1 p-6 transition-colors hover:border-border">
        <h3 className="mb-3 font-mono text-lg font-semibold">
          {experience.role}
        </h3>

        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            {experience.company}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5" />
            {experience.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="size-3.5" />
            {experience.period}
          </span>
        </div>

        <p className="mb-4 leading-relaxed text-muted-foreground">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.techs.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </Card>
    </div>
  )
}

export function CareerSection() {
  return (
    <div className="space-y-12">
      <SectionHeader
        icon={Briefcase}
        eyebrow="Carreira"
        title={
          <>
            Minha <span className="text-primary">experiência profissional</span>
          </>
        }
        description="Uma linha do tempo com as experiências que moldaram minha carreira como desenvolvedor."
      />

      <section className="relative">
        <div className="absolute bottom-2 left-[1.1875rem] top-2 w-px bg-border/60" />

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <ScrollReveal
              key={`${experience.company}-${experience.period}`}
              delay={index * 150}
            >
              <ExperienceItem experience={experience} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
