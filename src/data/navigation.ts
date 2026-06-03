import {
  Briefcase,
  FolderOpen,
  Github,
  Home,
  Linkedin,
  Mail,
  User,
  type LucideIcon,
} from 'lucide-react'
import { site } from './site'

export type NavLink = {
  label: string
  href: string
  icon: LucideIcon
}

export type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Sobre', href: '#sobre', icon: User },
  { label: 'Carreira', href: '#carreira', icon: Briefcase },
  { label: 'Projetos', href: '#projetos', icon: FolderOpen },
  { label: 'Contato', href: '#contato', icon: Mail },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: site.social.github, icon: Github },
  { label: 'LinkedIn', href: site.social.linkedin, icon: Linkedin },
]
