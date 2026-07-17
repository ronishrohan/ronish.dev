import { getAllPosts } from '@/lib/blog'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()

  return [
    { url: 'https://ronish.dev', lastModified: new Date() },
    { url: 'https://ronish.dev/blog', lastModified: new Date() },
    ...posts.map((post) => ({
      url: `https://ronish.dev/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ]
}
