import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CalendarIcon, ClockIcon } from '@wontory/ui/lucide'
import { format, ko } from '@wontory/util/date-fns'

import { GiscusComment } from '~/components/giscus-comment'
import { MDXContent } from '~/components/mdx-content'
import { PostNavigation } from '~/components/post-navigation'

import { blog } from '#site/content'

interface PostProps {
  params: {
    slug: string
  }
}

function getPostBySlug(slug: string) {
  return blog.find((post) => post.slug === slug)
}

export function generateMetadata({ params }: PostProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return { title: post.title, description: post.description }
}

export function generateStaticParams(): PostProps['params'][] {
  return blog.map((post) => ({
    slug: post.slug,
  }))
}

export default function Post({ params }: PostProps) {
  const post = getPostBySlug(params.slug)

  if (!post) notFound()

  return (
    <article className="container max-w-screen-sm space-y-24 py-16">
      <div className="space-y-4 text-center">
        <h1 className="font-semibold text-3xl">{post.title}</h1>
        <p className="text-primary/60 text-sm">{post.description}</p>
        <div className="flex justify-center gap-8 text-primary text-sm">
          <span className="flex items-center gap-2">
            <CalendarIcon className="size-3" />
            {format(post.date, 'PPP', { locale: ko })}
          </span>
          <span className="flex items-center gap-2">
            <ClockIcon className="size-3" />
            {post.metadata.readingTime > 0
              ? `${post.metadata.readingTime}분`
              : '1분 이하'}
          </span>
        </div>
      </div>
      <div className="prose dark:prose-invert">
        <MDXContent code={post.content} />
      </div>
      <PostNavigation slug={post.slug} />
      <div>
        <GiscusComment />
      </div>
    </article>
  )
}
