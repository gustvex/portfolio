import { ExternalLink as ExternalLinkIcon, FolderOpen, Github } from 'lucide-react'
import { ExternalLink } from '@/components/custom/external-link'
import { ScrollReveal } from '@/components/custom/scroll-reveal'
import { SectionHeader } from '@/components/custom/section-header'
import { TechBadge } from '@/components/custom/tech-badge'
import { Card } from '@/components/ui/card'
import { projects, type Project } from '@/data/projects'

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

      <div className="flex items-center gap-3 border-t border-border/40 pt-4">
        {project.github && (
          <ExternalLink
            href={project.github}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`Repositório de ${project.title} no GitHub`}
          >
            <Github className="size-4" />
            Código
          </ExternalLink>
        )}
        {project.demo && (
          <ExternalLink
            href={project.demo}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`Demonstração de ${project.title}`}
          >
            <ExternalLinkIcon className="size-4" />
            Ir
          </ExternalLink>
        )}
      </div>
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
