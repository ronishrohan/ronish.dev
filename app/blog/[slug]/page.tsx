import { getPost, getAllSlugs } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPost(slug)
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        type: 'article',
        title: post.title,
        description: post.description,
        publishedTime: post.date,
        url: `https://ronish.dev/blog/${slug}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Ronish Rohan',
      url: 'https://ronish.dev',
    },
    url: `https://ronish.dev/blog/${slug}`,
    publisher: {
      '@type': 'Person',
      name: 'Ronish Rohan',
      url: 'https://ronish.dev',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ronish.dev/blog/${slug}`,
    },
  }

  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-2xl mt-2">{post.title}</h1>
      <span className="text-sm text-zinc-400">
        {formatDate(post.date)}
      </span>

      <div
        className="prose mt-2"
        style={{ fontSize: '1rem' }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Link
        href="/blog"
        className="text-zinc-400 hover:text-black mt-6"
      >
        More Writing &rarr;
      </Link>
      <div className="h-40" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </article>
  )
}
