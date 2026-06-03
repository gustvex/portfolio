# Portfolio — Gustavo Oliveira

Portfólio pessoal de Gustavo Oliveira (Engenheiro de Software Full Stack), construído com React, TypeScript e Vite.

## Demo

[![Ver demo online](https://img.shields.io/badge/Ver_demo_online-Render-46E3B7?logo=render&logoColor=white&style=for-the-badge)](https://portfolio-dgzd.onrender.com)

Acesse: **https://portfolio-dgzd.onrender.com**

---

## Stack

- **Framework:** React 19 + TypeScript
- **Build:** Vite 7 (+ SWC)
- **Estilo:** Tailwind CSS 4 + tw-animate-css
- **UI primitivos:** Radix UI + componentes locais (shadcn-style)
- **Roteamento:** React Router 7 (com lazy loading)
- **Ícones:** Lucide
- **Testes:** Vitest + Testing Library + jsdom
- **Lint/Format:** ESLint 9 (typescript-eslint, react-hooks, react-refresh) + Prettier

## Scripts

```bash
npm run dev            # ambiente de desenvolvimento
npm run build          # type-check + build de produção
npm run preview        # preview do build
npm run lint           # eslint
npm test               # vitest (uma execução)
npm run test:watch     # vitest em modo watch
npm run test:coverage  # vitest com cobertura V8
```

## Estrutura

```
src/
├── assets/                  # imagens estáticas
├── components/
│   ├── consent/             # gate de consentimento + carregamento condicional de fontes
│   ├── sections/            # seções da home (Hero, Sobre, Carreira, Projetos, Contato)
│   ├── shared/              # componentes reutilizáveis (Header, SectionHeader, ScrollReveal, ErrorBoundary, TechBadge, ExternalLink)
│   ├── theme/               # ThemeProvider + ModeToggle
│   └── ui/                  # primitivos (Button, Card, DropdownMenu)
├── data/                    # dados estáticos (experiências, projetos, navegação, contatos)
├── hooks/                   # hooks reutilizáveis (useScrollReveal)
├── layout/                  # Layout raiz + Page
├── lib/                     # utilitários (cn)
├── pages/                   # páginas roteáveis (Home, NotFound)
├── routes/                  # configuração de rotas
└── test/                    # setup do Vitest + mocks
```

### Princípios

- **Clean Code & SOLID** — componentes pequenos, com responsabilidade única; dados separados de visualização (`/data`); composição via primitivos (`Card`, `SectionHeader`, `TechBadge`, `ExternalLink`).
- **Acessibilidade** — `aria-*` em diálogo de consentimento, navegação e botões; alt em imagens; roles semânticos.
- **Privacidade-first** — nenhum recurso de terceiros (Google Fonts) é carregado antes do consentimento. Nada de cookies de rastreamento.
- **Performance** — code-splitting por rota com `React.lazy` + `Suspense`; imagens com `loading="lazy"`.
- **Resiliência** — `ErrorBoundary` global e fallback de 404.

## Decisões de Arquitetura

Decisões importantes estão documentadas em [`docs/adr/`](docs/adr/):

| ADR | Tópico |
|---|---|
| [001](docs/adr/001-component-organization.md) | Organização de componentes (shared, sections, ui, etc) |

## Privacidade & armazenamento local

Antes de qualquer conteúdo ser renderizado, um aviso solicita aceite. Após aceite, são utilizados apenas estes itens **no próprio navegador do usuário**:

| Chave                    | Finalidade                           |
| ------------------------ | ------------------------------------ |
| `portfolio-consent-v1`   | Registra o aceite                    |
| `portfolio-theme`        | Preferência de tema (light/dark/system) |

Nenhum dado pessoal é coletado ou transmitido.

## Fluxo Git

```
main              # produção (estável, apenas releases)
└── develop       # integração contínua
    └── feature/* # branches de funcionalidades/refatorações
```

Toda mudança nasce em `feature/*` a partir de `develop`, é integrada via Pull Request em `develop`, e periodicamente `develop` é promovido para `main`.

## Licença

Projeto pessoal — sem licença pública definida.
