import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@wontory/ui/card'
import { CalendarIcon, ClockIcon } from '@wontory/ui/lucide'
import { format, ko } from '@wontory/util/date-fns'

import type { Post } from '#site/content'

function PostCard({ post }: { post: Post }) {
  return (
    <Card className="shadow-none transition-colors hover:bg-primary/5">
      <CardHeader className="p-4">
        <CardTitle>{post.title}</CardTitle>
        <CardDescription className="text-primary/60 md:line-clamp-1">
          {post.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-4 pt-0">
        <div className="flex justify-center gap-4 text-primary text-sm">
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
      </CardFooter>
    </Card>
  )
}

export { PostCard }
