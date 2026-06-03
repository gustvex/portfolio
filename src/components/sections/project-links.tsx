import { ExternalLink as ExternalLinkIcon, Github } from 'lucide-react'
import { ExternalLink } from '@/components/shared/external-link'
import type { Project } from '@/data/projects'

type ProjectLinksProps = {
  project: Project
}

export function ProjectLinks({ project }: ProjectLinksProps) {
  if (!project.github && !project.demo) {
    return null
  }

  return (
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
  )
}
