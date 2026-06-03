# ADR 001: Component Organization Strategy

## Status
Accepted

## Context
The portfolio project needed a clear organization strategy for React components as it grew. Components serve different purposes:
- Some are specific to certain sections (Hero, About, Career, Projects, Contact)
- Some are reused across multiple sections (Header, SectionHeader, ScrollReveal, etc)
- Some are primitives used throughout the app (Button, Card, etc)
- Some are feature-specific but self-contained (Consent, Theme)

Without clear organization, it becomes difficult to:
- Find components
- Understand component boundaries
- Promote code reuse
- Onboard new contributors

## Decision
Organize components into focused directories:

```
components/
├── sections/      # Feature-specific sections (Hero, About, Career, Projects, Contact)
├── shared/        # Globally reusable components (Header, SectionHeader, ScrollReveal, etc)
├── consent/       # Feature: LGPD consent gate + font loading
├── theme/         # Feature: Dark/light/system theme
└── ui/            # Primitives (Button, Card, DropdownMenu)
```

## Rationale
1. **Sections** - One directory per feature makes it easy to find and modify section-specific components
2. **Shared** - Centralize reusable components, making them discoverable and maintainable
3. **Feature modules** (consent, theme) - Self-contained features that can evolve independently
4. **UI primitives** - Unstyled or minimally styled components that serve as building blocks

This mirrors the structure used in the related project `desaparecidos-mt` and follows established patterns in the React ecosystem.

## Consequences
- **Positive**: Clear component responsibilities, easier discoverability, promotes reuse
- **Positive**: Aligns with other projects in the portfolio
- **Positive**: Scales well as new sections or features are added
- **Negative**: May require reorganization if a shared component becomes section-specific
