import { ModeToggle } from '@wontory/ui/mode-toggle'

function SiteFooter() {
  return (
    <footer className="container max-w-screen-sm">
      <div className="flex py-4 text-sm items-center justify-between">
        <span>&copy; {new Date().getFullYear()} · wontory.dev</span>
        <ModeToggle />
      </div>
    </footer>
  )
}

export { SiteFooter }
