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
    <article className="flex flex-col gap-12">
      <header className="rule-heavy pt-4">
        <h1 className="display" style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 0.98, maxWidth: '16em' }}>
          {post.title}
        </h1>
      </header>

      <div className="rule-hair grid-12 pt-3">
        <div className="label flex gap-3 sm:flex-col sm:gap-1">
          <span>Published</span>
          <span className="label-strong numeric">{formatDate(post.date)}</span>
        </div>
        <div
          className="prose"
          style={{ fontSize: '1.0625rem' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      <div className="rule-hair grid-12 pt-3 pb-24">
        <span className="label">Next</span>
        <Pressable>
          <Link href="/blog" className="row" style={{ borderTop: 'none' }}>
            <span className="row-lead row-index">←</span>
            <span className="row-title">More writing</span>
          </Link>
        </Pressable>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </article>
  )
}
