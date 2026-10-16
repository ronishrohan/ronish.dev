import { getPost, getAllSlugs } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Pressable } from '@/components/pressable'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPost(slug)
    const url = `https://ronish.dev/blog/${slug}`
    return {
      title: post.title,
      description: post.description,
      alternates: { canonical: `/blog/${slug}` },
      robots: post.draft ? { index: false, follow: false } : undefined,
      authors: [{ name: 'Ronish Rohan', url: 'https://ronish.dev' }],
      openGraph: {
        type: 'article',
        title: post.title,
        description: post.description,
        publishedTime: post.date,
        modifiedTime: post.date,
        authors: ['Ronish Rohan'],
        url,
        siteName: 'ronish.dev',
        locale: 'en_US',
        images: [{ url: '/og.png', width: 1200, height: 630, alt: post.title }],
      },
      twitter: {
        card: 'summary_large_image',
        site: '@ronish1o',
        creator: '@ronish1o',
        title: post.title,
        description: post.description,
        images: ['/og.png'],
      },
    }
  } catch {
    return {}
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  let post
  try {
    post = await getPost(slug)
  } catch {
    notFound()
  }

  const words = post.content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'en',
    wordCount: words,
    image: 'https://ronish.dev/og.png',
    author: {
      '@type': 'Person',
      '@id': 'https://ronish.dev/#person',
      name: 'Ronish Rohan',
      url: 'https://ronish.dev',
    },
    url: `https://ronish.dev/blog/${slug}`,
    publisher: {
      '@type': 'Person',
      '@id': 'https://ronish.dev/#person',
      name: 'Ronish Rohan',
      url: 'https://ronish.dev',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ronish.dev/blog/${slug}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ronish.dev' },
      { '@type': 'ListItem', position: 2, name: 'Writing', item: 'https://ronish.dev/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://ronish.dev/blog/${slug}` },
    ],
  }

  return (
    <article className="flex flex-col gap-4">
      <h1 className="mt-2">{post.title}</h1>
      <time dateTime={post.date} style={{ color: 'var(--theme-text)' }}>
        {formatDate(post.date)}
      </time>

      <div
        className="prose mt-2"
        style={{ fontSize: '1rem' }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Pressable className="mt-6">
        <Link
          href="/blog"
          style={{ color: 'var(--theme-text)' }}
        >
          More Writing &rarr;
        </Link>
      </Pressable>
      <div className="h-40" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </article>
  )
}
