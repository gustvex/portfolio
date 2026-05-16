import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { navLinks, socialLinks } from '@/data/navigation'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

const scrollToSection = (href: string) => {
  const id = href.replace('#', '')
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}

type NavLinkItemProps = {
  href: string
  label: string
  onNavigate: (href: string) => void
  className?: string
}

function NavLinkItem({ href, label, onNavigate, className }: NavLinkItemProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault()
        onNavigate(href)
      }}
      className={cn(
        'rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground',
        className,
      )}
    >
      {label}
    </a>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = (href: string) => {
    scrollToSection(href)
    setIsOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault()
            handleNavigate('#home')
          }}
          className="font-mono text-xl font-bold tracking-tight"
        >
          {site.shortName}
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <NavLinkItem
              key={link.href}
              href={link.href}
              label={link.label}
              onNavigate={handleNavigate}
            />
          ))}
        </nav>

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

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          className="border-t border-border/40 bg-background px-6 py-4 md:hidden"
          aria-label="Navegação mobile"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLinkItem
                key={link.href}
                href={link.href}
                label={link.label}
                onNavigate={handleNavigate}
                className="px-3 py-2.5"
              />
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
