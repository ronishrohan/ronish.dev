export function Postcard({
  children,
  className,
  src,
}: {
  children?: React.ReactNode
  className?: string
  src?: string
}) {
  return (
    <figure className={`flex flex-col gap-2 select-none ${className || ''}`}>
      {src && (
        <div className="figure-frame">
          <img
            src={src}
            alt=""
            width={600}
            height={450}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="block w-full object-cover aspect-[4/3]"
            draggable={false}
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      )}
      {children}
    </figure>
  )
}
