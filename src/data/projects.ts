export type Project = {
  title: string
  description: string
  techs: string[]
  github?: string
  demo?: string
  organization?: string
}

export const projects: Project[] = [
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
