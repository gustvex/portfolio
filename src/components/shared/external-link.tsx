import { cn } from '@/lib/utils'

type ExternalLinkProps = React.ComponentProps<'a'> & {
  href: string
}

export function ExternalLink({
  href,
  className,
  children,
  ...props
}: ExternalLinkProps) {
  const isMail = href.startsWith('mailto:')

  return (
    <a
      href={href}
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noopener noreferrer'}
      className={cn(className)}
      {...props}
    >
      {children}
    </a>
  )
}
