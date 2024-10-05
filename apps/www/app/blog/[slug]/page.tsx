import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

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
    <article className="space-y-4">
      <h1>{post.title}</h1>
      {post.description && <p>{post.description}</p>}
      <hr />
      <div className="prose dark:prose-invert">
        <MDXContent code={post.content} />
      </div>
    </article>
  )
}
