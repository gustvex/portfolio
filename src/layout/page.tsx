import { cn } from '@/lib/utils'

type PageProps = {
  children: React.ReactNode
  className?: string
}

function Page({ children, className }: PageProps) {
  return (
    <section className={cn('flex h-full flex-col gap-8', className)}>
      {children}
    </section>
  )
}

export default Page
