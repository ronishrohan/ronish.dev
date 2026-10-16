import { getAllPosts } from '@/lib/blog'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  const latest = posts.length ? new Date(posts[0].date) : undefined

  return [
    { url: 'https://ronish.dev', lastModified: latest, changeFrequency: 'monthly', priority: 1 },
    { url: 'https://ronish.dev/blog', lastModified: latest, changeFrequency: 'weekly', priority: 0.8 },
    ...posts.map((post) => ({
      url: `https://ronish.dev/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
