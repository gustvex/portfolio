export function useScrollToSection() {
  return (href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }
}
