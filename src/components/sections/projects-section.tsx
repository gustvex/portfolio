import { FolderOpen } from 'lucide-react'
import { ScrollReveal } from '@/components/shared/scroll-reveal'
import { SectionHeader } from '@/components/shared/section-header'
import { TechBadge } from '@/components/shared/tech-badge'
import { Card } from '@/components/ui/card'
import { projects, type Project } from '@/data/projects'
import { ProjectLinks } from './project-links'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex flex-col p-6 transition-colors hover:border-border">
      {project.organization && (
        <span className="mb-3 w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {project.organization}
        </span>
      )}

      <h3 className="mb-2 font-mono text-lg font-semibold">{project.title}</h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <TechBadge key={tech}>{tech}</TechBadge>
        ))}
      </div>

      <ProjectLinks project={project} />
    </Card>
  )
}

export function ProjectsSection() {
  return (
    <div className="space-y-12">
      <SectionHeader
        icon={FolderOpen}
        eyebrow="Projetos"
        title={
          <>
            Meus <span className="text-primary">projetos</span>
          </>
        }
        description="Uma seleção dos projetos que desenvolvi. Cada um representa um desafio diferente e uma oportunidade de aprendizado."
      />

      <section>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
