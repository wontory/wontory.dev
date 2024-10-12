import Link from 'next/link'

import { ArrowLeftIcon, ArrowRightIcon } from '@wontory/ui/lucide'

import { blog } from '#site/content'

export interface PostNavigationProps {
  slug: string
}

function PostNavigation({ slug }: PostNavigationProps) {
  const posts = blog.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  )

  const current = posts.findIndex((post) => post.slug === slug)
  const prev = posts[current - 1]
  const next = posts[current + 1]

  return (
    <div className="grid grid-cols-2 gap-4">
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="flex items-center justify-start gap-6 rounded-xl border p-6 transition-colors hover:bg-primary/5"
        >
          <ArrowLeftIcon className="size-4" />
          <span className="line-clamp-1 text-sm">{prev.title}</span>
        </Link>
      ) : (
        <div className="invisible" />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="flex items-center justify-end gap-6 rounded-xl border p-6 transition-colors hover:bg-primary/5"
        >
          <span className="line-clamp-1 text-sm">{next.title}</span>
          <ArrowRightIcon />
        </Link>
      ) : (
        <div className="invisible" />
      )}
    </div>
  )
}

export { PostNavigation }
