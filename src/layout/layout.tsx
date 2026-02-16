import { Outlet } from 'react-router-dom'
import Header from '@/components/custom/header'

function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex min-h-screen flex-col pt-16">
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 sm:px-8 lg:px-10">
          <Outlet />
        </main>

        <footer className="border-t border-border/40">
          <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-muted-foreground sm:px-8 lg:px-10">
            © 2026 Portfólio. Todos os direitos reservados.
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
