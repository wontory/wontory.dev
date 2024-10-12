import Link from 'next/link'

import { PostCard } from '~/components/post-card'

import { blog } from '#site/content'

export default function Blog() {
  const posts = blog.sort((a, b) => (a.date > b.date ? -1 : 1))

  return (
    <div className="container max-w-screen-lg space-y-24 py-16">
      <div className="space-y-2 text-center">
        <h1 className="font-semibold text-3xl">Blog</h1>
        <p className="text-primary/60 text-sm">
          My precious thoughts and inspirations.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  )
}
