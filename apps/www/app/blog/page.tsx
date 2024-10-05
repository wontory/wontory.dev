import Link from 'next/link'
import { blog } from '#site/content'

export default function Blog() {
  return blog.map((post) => (
    <Link key={post.slug} href={`/blog/${post.slug}`}>
      <h2>{post.title}</h2>
    </Link>
  ))
}
