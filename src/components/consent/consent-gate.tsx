import { Cookie, Database, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useConsent } from './use-consent'

type ConsentGateProps = {
  children: React.ReactNode
}

export function ConsentGate({ children }: ConsentGateProps) {
  const { accepted, accept } = useConsent()

  if (accepted) return <>{children}</>

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background p-4"
    >
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center gap-3">
            <ShieldCheck
              className="size-7 shrink-0 text-primary"
              aria-hidden="true"
            />
            <CardTitle
              id="consent-title"
              className="text-xl leading-snug sm:text-2xl"
            >
              Aviso de privacidade e uso de armazenamento local
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-5 text-sm text-foreground sm:text-base">
          <p>
            Este site é um <strong>portfólio pessoal</strong>, sem fins
            comerciais. Para uma experiência consistente e rápida, ele utiliza{' '}
            <strong>armazenamento local</strong> no seu próprio navegador. Nada
            é enviado para servidores externos.
          </p>

          <div className="space-y-2">
            <p className="flex items-center gap-2 font-semibold">
              <Cookie className="size-4 text-primary" aria-hidden="true" />O que
              NÃO é coletado nem enviado
            </p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>
                Dados pessoais (nome, e-mail, telefone, IP, fingerprinting)
              </li>
              <li>Cookies de rastreamento, analytics ou marketing</li>
              <li>Qualquer identificador de sessão para terceiros</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="flex items-center gap-2 font-semibold">
              <Database className="size-4 text-primary" aria-hidden="true" />O
              que é armazenado <strong>localmente</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                  portfolio-consent-v1
                </code>{' '}
                — registro deste aceite, para não exibir o aviso novamente
              </li>
              <li>
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                  portfolio-theme
                </code>{' '}
                — sua preferência de tema (claro / escuro / sistema)
              </li>
              <li>
                Fonte tipográfica (JetBrains Mono) carregada do Google Fonts
                apenas após o aceite
              </li>
            </ul>
            <p className="text-muted-foreground">
              Esses itens ficam exclusivamente no seu dispositivo e podem ser
              apagados a qualquer momento limpando o armazenamento do navegador.
            </p>
          </div>

          <p className="text-muted-foreground">
            Ao clicar em <strong>Aceitar e continuar</strong>, você concorda com
            o uso descrito acima. O conteúdo só é renderizado e os recursos
            externos só são carregados após o aceite.
          </p>

          <div className="flex justify-end pt-1">
            <Button onClick={accept} size="lg" className="font-semibold">
              Aceitar e continuar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ConsentGate
