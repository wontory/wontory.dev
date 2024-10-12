import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { GiscusComment } from '~/components/giscus-comment'
import { MDXContent } from '~/components/mdx-content'

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
      </div>
      <div className="prose dark:prose-invert">
        <MDXContent code={post.content} />
      </div>
      <div>
        <GiscusComment />
      </div>
    </article>
  )
}
