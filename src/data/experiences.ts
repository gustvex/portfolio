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
    role: 'Analista Desenvolvedor Full Stack',
    company: 'Agenda Assessoria',
    period: 'Out 2025 — Atual',
    location: 'Cuiabá, MT',
    description:
      'Minha atuação atual representa um salto de maturidade na minha trajetória: pela primeira vez assumo ownership de módulos críticos de ponta a ponta, com responsabilidade direta sobre o que vai para produção. Trabalho em uma plataforma de cadastro social de abrangência nacional, integrada a um programa federal de assistência social e utilizada por equipes de mais de 70 municípios. Foi aqui que mais evoluí tecnicamente: nunca programei tanto em backend, front-end e, principalmente, em depuração de dados em produção, garantindo a integridade de informações que chegam a um órgão federal. Atuei também com autonomia em um sistema do setor financeiro, integrando APIs bancárias e implementando regras de negócio e cálculos complexos.',
    techs: [
      'React',
      'Vue.js',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'C#',
      '.NET 9',
      'Azure DevOps',
    ],
  },
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Arbe Tecnologia (Consultoria - MTI)',
    period: 'Jul 2025 — Out 2025',
    location: 'Cuiabá, MT',
    description:
      'A experiência na Arbe Tecnologia contribuiu de forma significativa para minha trajetória profissional. Atuando como profissional terceirizado na MTI, participei do desenvolvimento de sistemas internos de grande escala voltados ao Estado de Mato Grosso. Foi nessa fase que tive meu primeiro contato com backend em ambiente de produção e implementei testes unitários pela primeira vez em um contexto profissional — o que mudou profundamente minha visão sobre manutenibilidade e refatoração segura. Aprendi a entregar em squads com ciclos curtos, sem abrir mão da qualidade.',
    techs: ['NestJS', 'TypeScript', 'TypeORM', 'PostgreSQL', 'React', 'Material UI'],
  },
  {
    role: 'Desenvolvedor Front-End',
    company: 'Eaí Telecomunicações',
    period: 'Jun 2023 — Jul 2025',
    location: 'Paraná (Remoto)',
    description:
      'Atuei no desenvolvimento front-end com autonomia total em ambiente 100% remoto, o que consolidou minha disciplina e responsabilidade sobre as próprias entregas. Comecei realizando ajustes e evoluções de interfaces em diferentes aplicações com Vue.js e Quasar e, com o tempo, passei a arquitetar interfaces do zero — da estrutura de componentes ao deploy em produção — utilizando React, Next.js e Tailwind CSS, com consumo de APIs via Axios. A integração com diferentes APIs me forçou a entender contratos com precisão e a lidar com erros de integração de forma independente.',
    techs: ['React.js', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    role: 'Estagiário em Front-End',
    company: 'Controladoria Geral do Estado / MT',
    period: 'Jan 2023 — Set 2023',
    location: 'Cuiabá, MT',
    description:
      'A experiência na CGE marcou minha primeira atuação profissional na área de tecnologia e foi fundamental para consolidar conceitos de desenvolvimento de software em um ambiente real. Participei do desenvolvimento e manutenção de sistemas institucionais como CEIS, Gestor de Acessos e Normativa, utilizados por um grande volume de usuários. Ampliou minha capacidade de construir soluções estruturadas, aderentes a padrões e adequadas a contextos institucionais — além de me dar uma visão prática do funcionamento do setor público.',
    techs: ['HTML', 'CSS', 'TypeScript', 'Vue.js', 'Quasar'],
  },
]
