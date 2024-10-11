import Link from 'next/link'

import { buttonVariants } from '@wontory/ui/button'

import { SearchButton } from '~/components/search-button'

function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 w-full bg-background">
      <div className="container flex max-w-screen-lg items-center space-x-2 py-4">
        <Link href="/" className={buttonVariants()}>
          Home
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Link
            href="/blog"
            className={buttonVariants({ variant: 'secondary' })}
          >
            Blog
          </Link>
          <Link
            href="/playground"
            className={buttonVariants({ variant: 'secondary' })}
          >
            Playground
          </Link>
          <SearchButton />
        </div>
      </div>
    </div>
  )
}

export { SiteHeader }
