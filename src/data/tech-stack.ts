import { Code2, Database, Globe, Server, type LucideIcon } from 'lucide-react'

export type TechStackGroup = {
  category: string
  icon: LucideIcon
  techs: string[]
}

export const techStack: TechStackGroup[] = [
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
    techs: ['C#', '.NET 9', 'Node.js', 'NestJS', 'TypeORM', 'Entity Framework'],
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
