import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  description?: string
  draft?: boolean
  content: string
}

export interface BlogMeta {
  slug: string
  title: string
  date: string
  description?: string
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeStringify)

export async function getAllPosts(): Promise<BlogMeta[]> {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const posts: BlogMeta[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
    const { data } = matter(raw)
    return {
      slug: file.replace('.md', ''),
      title: data.title,
      date:
        data.date instanceof Date ? data.date.toISOString() : String(data.date),
      description: data.description,
    }
  })

  return posts
    .filter((p) => {
      const raw = fs.readFileSync(
        path.join(BLOG_DIR, `${p.slug}.md`),
        'utf-8',
      )
      const { data } = matter(raw)
      return !data.draft
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPost(slug: string): Promise<BlogPost> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  const html = await processor.process(content)

  return {
    slug,
    title: data.title,
    date:
      data.date instanceof Date ? data.date.toISOString() : String(data.date),
    description: data.description,
    draft: data.draft,
    content: String(html),
  }
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace('.md', ''))
}
