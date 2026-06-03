import { Mail, Send } from 'lucide-react'
import { ExternalLink } from '@/components/shared/external-link'
import { ScrollReveal } from '@/components/shared/scroll-reveal'
import { SectionHeader } from '@/components/shared/section-header'
import { Card } from '@/components/ui/card'
import { contactLinks, type ContactLink } from '@/data/contacts'
import { site } from '@/data/site'

function ContactCardContent({ link }: { link: ContactLink }) {
  return (
    <Card className="flex items-start gap-4 p-6 transition-colors hover:border-border">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted">
        <link.icon className="size-5 text-primary" />
      </div>
      <div>
        <h3 className="font-mono font-semibold">{link.label}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{link.value}</p>
      </div>
    </Card>
  )
}

function ContactItem({ link, delay }: { link: ContactLink; delay: number }) {
  const content = <ContactCardContent link={link} />

  if (!link.href) {
    return (
      <ScrollReveal key={link.label} delay={delay}>
        <div>{content}</div>
      </ScrollReveal>
    )
  }

  return (
    <ScrollReveal key={link.label} delay={delay}>
      <ExternalLink href={link.href}>{content}</ExternalLink>
    </ScrollReveal>
  )
}

export function ContactSection() {
  return (
    <div className="space-y-12">
      <SectionHeader
        icon={Send}
        eyebrow="Contato"
        title={
          <>
            Vamos <span className="text-primary">conversar</span>?
          </>
        }
        description="Estou sempre aberto a novas oportunidades, projetos interessantes ou apenas um bate-papo sobre tecnologia."
      />

      <section>
        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link, index) => (
            <ContactItem
              key={link.label}
              link={link}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      <ScrollReveal>
        <Card className="p-8 text-center">
          <h2 className="mb-3 font-mono text-2xl font-semibold">
            Pronto para começar um projeto?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Me envie um email e vamos transformar sua ideia em realidade.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="size-4" />
            Enviar email
          </a>
        </Card>
      </ScrollReveal>
    </div>
  )
}
