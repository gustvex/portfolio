import { ExternalLink, FolderOpen, Github } from 'lucide-react'
import Page from '@/layout/page'
import { ScrollReveal } from '@/components/custom/scroll-reveal'
import { AnimatedDots } from '@/components/custom/animated-dots'

type Project = {
  title: string
  description: string
  techs: string[]
  github?: string
  demo?: string
  wtlm?: string
  organization?: string
}

const projects: Project[] = [
  {
    title: 'CEIS — Cadastro Estadual de Empresas Inidôneas e Suspensas',
    description:
      'Sistema público utilizado pelo Governo do Estado de Mato Grosso para consulta e controle de empresas sancionadas.',
    techs: ['Vue.js', 'Quasar', 'JavaScript'],
    demo: 'https://ceis.cge.mt.gov.br/',
    organization: 'CGE-MT',
  },
  {
    title: 'Normativa — Gestão de Atos Normativos',
    description:
      'Plataforma institucional voltada à organização e consulta de atos normativos do Estado.',
    techs: ['Vue.js', 'Quasar', 'JavaScript'],
    demo: 'https://normativa.mt.gov.br/',
    organization: 'CGE-MT',
  },

  {
    title: 'Desaparecidos MT',
    description:
      'Aplicação web construída a partir da API oficial da Polícia Judiciária Civil de Mato Grosso para consulta e gerenciamento de registros de pessoas desaparecidas e localizadas. O projeto foi desenvolvido com foco em acessibilidade, performance e experiência do usuário, apresentando buscas avançadas, páginas detalhadas e envio estruturado de informações pela população.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Axios'],
    github: 'https://github.com/gustvex/desaparecidos-mt',
    organization: 'Projeto Autoral',
  },

  {
    title: 'Instituto Paiaguás — Plataforma Institucional',
    description:
      'Plataforma web desenvolvida para centralizar a gestão e publicação de conteúdos institucionais, incluindo vagas, editais e documentos oficiais. O sistema conta com painel administrativo completo, permitindo gerenciamento em tempo real, upload de arquivos e organização estruturada das informações, com foco em usabilidade, performance e clareza na navegação.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    demo: 'https://www.institutopaiaguas.org.br/',
    organization: 'Projeto Autoral',
  },
]

export function ProjectsSection() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <div className="flex w-fit items-center gap-2 rounded-full border border-border/40 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
          <FolderOpen className="size-4" />
          <span>Projetos</span>
        </div>

        <h1 className="font-mono text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Meus <span className="text-primary">projetos</span>
        </h1>

        <code className="text-lg leading-relaxed text-muted-foreground">
          <AnimatedDots className="mb-2" />
          Uma seleção dos projetos que desenvolvi. Cada um representa um desafio
          diferente e uma oportunidade de aprendizado.
        </code>
      </section>

      <section>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <div className="group flex flex-col rounded-xl border border-border/40 bg-card p-6 transition-colors hover:border-border">
                {project.organization && (
                  <span className="mb-3 w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {project.organization}
                  </span>
                )}

                <h3 className="mb-2 font-mono text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 border-t border-border/40 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="size-4" />
                      Código
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="size-4" />
                      Ir
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}

function Projects() {
  return (
    <Page>
      <ProjectsSection />
    </Page>
  )
}

export default Projects
