export function getReadSlugs(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem('read-posts')
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

export function markRead(slug: string) {
  const read = getReadSlugs()
  read.add(slug)
  localStorage.setItem('read-posts', JSON.stringify([...read]))
  document.documentElement.style.setProperty(
    `--read-${slug}`,
    'var(--theme-muted)',
  )
}
