import Page from '@/layout/page'
import { ScrollReveal } from '@/components/shared/scroll-reveal'
import { AboutSection } from '@/components/sections/about-section'
import { CareerSection } from '@/components/sections/career-section'
import { ContactSection } from '@/components/sections/contact-section'
import { HeroSection } from '@/components/sections/hero-section'
import { ProjectsSection } from '@/components/sections/projects-section'

const sections = [
  { id: 'sobre', component: AboutSection },
  { id: 'carreira', component: CareerSection },
  { id: 'projetos', component: ProjectsSection },
  { id: 'contato', component: ContactSection },
] as const

function Home() {
  return (
    <Page>
      <div className="space-y-32">
        <HeroSection />
        {sections.map(({ id, component: Section }) => (
          <ScrollReveal key={id}>
            <section id={id}>
              <Section />
            </section>
          </ScrollReveal>
        ))}
      </div>
    </Page>
  )
}

export default Home
