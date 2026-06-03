import { Github, Linkedin, Mail, MapPin, type LucideIcon } from 'lucide-react'
import { site } from './site'

export type ContactLink = {
  label: string
  value: string
  href?: string
  icon: LucideIcon
}

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/gustvex',
    href: site.social.github,
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gustavooliveiradevv',
    href: site.social.linkedin,
    icon: Linkedin,
  },
  {
    label: 'Localização',
    value: site.location,
    icon: MapPin,
  },
]
