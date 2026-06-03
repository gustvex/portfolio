export type Experience = {
  role: string
  company: string
  location: string
  period: string
  description: string
  techs: string[]
}

export const experiences: Experience[] = [
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
