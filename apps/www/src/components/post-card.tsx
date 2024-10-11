import { Card, CardDescription, CardHeader, CardTitle } from '@wontory/ui/card'

import type { Post } from '#site/content'

function PostCard({ post }: { post: Post }) {
  return (
    <Card className="shadow-none transition-colors hover:bg-primary/5">
      <CardHeader className="p-4">
        <CardTitle>{post.title}</CardTitle>
        <CardDescription className="line-clamp-1 text-primary/60">
          {post.description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export { PostCard }
