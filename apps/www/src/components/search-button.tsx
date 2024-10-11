import { Button } from '@wontory/ui/button'
import { SearchIcon } from '@wontory/ui/lucide'

function SearchButton() {
  return (
    <Button variant="secondary" size="icon">
      <SearchIcon className="size-4" />
      <span className="sr-only">Search</span>
    </Button>
  )
}

export { SearchButton }
