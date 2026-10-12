export function Section({
  index,
  title,
  children,
  className = '',
}: {
  index: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`rule-heavy grid-12 pt-3 ${className}`}>
      <h2 className="label flex gap-3 sm:flex-col sm:gap-1">
        <span>{index}</span>
        <span className="label-strong">{title}</span>
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}
