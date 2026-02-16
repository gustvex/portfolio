import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import Page from '@/layout/page'
import { ScrollReveal } from '@/components/custom/scroll-reveal'
import { AnimatedDots } from '@/components/custom/animated-dots'

const contactLinks = [
  {
    label: 'Email',
    value: 'gustavooliveiraworks@gmail.com',
    href: 'mailto:gustavooliveiraworks@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/gustvex',
    href: 'https://github.com/gustvex',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gustavooliveiradevv',
    href: 'https://www.linkedin.com/in/gustavooliveiradevv/',
    icon: Linkedin,
  },
  {
    label: 'Localização',
    value: 'Brasil',
    href: undefined,
    icon: MapPin,
  },
]

export function ContactSection() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <div className="flex w-fit items-center gap-2 rounded-full border border-border/40 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
          <Send className="size-4" />
          <span>Contato</span>
        </div>

        <h1 className="font-mono text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Vamos <span className="text-primary">conversar</span>?
        </h1>

        <code className="text-lg leading-relaxed text-muted-foreground">
          <AnimatedDots className="mb-2" />
          Estou sempre aberto a novas oportunidades, projetos interessantes ou
          apenas um bate-papo sobre tecnologia.
        </code>
      </section>

      <section>
        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link, index) => {
            const content = (
              <div className="flex items-start gap-4 rounded-xl border border-border/40 bg-card p-6 transition-colors hover:border-border">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <link.icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold">{link.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {link.value}
                  </p>
                </div>
              </div>
            )

            if (link.href) {
              return (
                <ScrollReveal key={link.label} delay={index * 100}>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith('mailto') ? undefined : '_blank'
                    }
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                </ScrollReveal>
              )
            }

            return (
              <ScrollReveal key={link.label} delay={index * 100}>
                <div>{content}</div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      <ScrollReveal>
        <section className="rounded-xl border border-border/40 bg-card p-8 text-center">
          <h2 className="mb-3 font-mono text-2xl font-semibold">
            Pronto para começar um projeto?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Me envie um email e vamos transformar sua ideia em realidade.
          </p>
          <a
            href="mailto:gustavooliveiraworks@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="size-4" />
            Enviar email
          </a>
        </section>
      </ScrollReveal>
    </div>
  )
}

function Contact() {
  return (
    <Page>
      <ContactSection />
    </Page>
  )
}

export default Contact
