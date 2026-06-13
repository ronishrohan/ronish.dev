export interface Repo {
  name: string
  description: string | null
  url: string
  pushedAt: string
}

const include = new Set(['flash', 'ghost'])

export async function getRepos(): Promise<Repo[]> {
  const results: Repo[] = []

  for (const name of include) {
    const res = await fetch(
      `https://api.github.com/repos/ronishrohan/${name}`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) continue
    const r = await res.json()
    results.push({
      name: r.name,
      description: r.description,
      url: r.html_url,
      pushedAt: r.pushed_at,
    })
  }

  return results.sort(
    (a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime(),
  )
}
