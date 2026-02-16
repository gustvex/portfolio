import { useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { ModeToggle } from '@/components/theme/mode-toggle'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Carreira', href: '#carreira' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/gustvex', icon: Github },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gustavooliveiradevv/',
    icon: Linkedin,
  },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('#home')
          }}
          className="font-mono text-xl font-bold tracking-tight"
        >
          Gustavo.Dev
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground sm:inline-flex"
              aria-label={link.label}
            >
              <link.icon className="size-4" />
            </a>
          ))}

          <ModeToggle />

          {/* Botão mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="border-t border-border/40 bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2 border-t border-border/40 pt-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
                  aria-label={link.label}
                >
                  <link.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
