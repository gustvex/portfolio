function CodeCard() {
  return (
    <div className="w-full max-w-md rounded-xl border border-border/40 bg-card p-4 text-left font-mono text-sm text-muted-foreground">
      <div className="mb-2 flex gap-1.5">
        <div className="size-3 rounded-full bg-destructive/60" />
        <div className="size-3 rounded-full bg-chart-4/60" />
        <div className="size-3 rounded-full bg-chart-2/60" />
      </div>
      <code>
        <span className="text-chart-2">const</span>{' '}
        <span className="text-chart-4">dev</span>{' '}
        <span className="text-foreground">=</span>{' '}
        <span className="text-chart-1">{`{`}</span>
        <br />
        {'  '}
        <span className="text-foreground">nome:</span>{' '}
        <span className="text-chart-5">"Gustavo Oliveira"</span>
        ,
        <br />
        {'  '}
        <span className="text-foreground">stack:</span>{' '}
        <span className="text-chart-5">"Full Stack"</span>,
        <br />
        {'  '}
        <span className="text-foreground">paixão:</span>{' '}
        <span className="text-chart-5">"Resolver problemas"</span>
        <br />
        <span className="text-chart-1">{`}`}</span>
      </code>
    </div>
  )
}

export default CodeCard
