import { AnimatedName } from '@/components/animated-name'
import { WritingList } from '@/components/writing-list'
import { getAllPosts } from '@/lib/blog'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function Home() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 5).map((p) => ({
    slug: p.slug,
    title: p.title,
    date: formatDate(p.date),
  }))

  return (
    <div className="max-w-4xl w-full mx-auto text-base mt-[100px] flex flex-col gap-4 px-6 pb-24">
      <span className="text-2xl">
        <AnimatedName />
      </span>

      <div className="text-zinc-600 flex flex-col gap-3">
        <p>
          I&apos;m 21 and I live in Bengaluru, India.
        </p>
        <p>
          I design and build things for the web. Most of what I make starts
          from a feeling, a texture, a rhythm, a small detail that won&apos;t
          leave my head until I&apos;ve built it.
        </p>
        <p>
          Currently a software engineer at{' '}
          <a href="https://tryghost.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Ghost</a>,
          where we create extremely powerful agents for your computer.
          You can find my projects on{' '}
          <a href="https://github.com/ronishrohan" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">GitHub</a>.
        </p>
        <p>
          Reach out to me on{' '}
          <a href="https://x.com/ronish1o" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">X</a>
          {' '}or{' '}
          <a href="https://discord.com/users/769140296939470859" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Discord</a>.
        </p>
      </div>

      {recentPosts.length > 0 && (
        <div className="mt-6 flex flex-col gap-3">
          <div className="pb-2 border-b border-zinc-300">
            <span className="text-zinc-700">Recent Writing</span>
          </div>
          <WritingList posts={recentPosts} />
        </div>
      )}
    </div>
  )
}
