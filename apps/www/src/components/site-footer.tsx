import { ModeToggle } from '@wontory/ui/mode-toggle'

function SiteFooter() {
  return (
    <footer className="container max-w-screen-lg">
      <div className="flex items-center justify-between py-4 text-sm">
        <span>&copy; {new Date().getFullYear()} · wontory.dev</span>
        <ModeToggle />
      </div>
    </footer>
  )
}

export { SiteFooter }
