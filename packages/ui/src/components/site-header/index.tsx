export function SiteHeader() {
  return (
    <div className="container fixed left-1/2 top-0 z-50 w-full max-w-screen-lg -translate-x-1/2 px-4 pt-4">
      <div className="bg-background/90 rounded-lg backdrop-blur-sm">
        <div className="from-foreground/[0.03] to-foreground/[0.01] shadow-foreground/15 border-border/60 shadow-header flex w-full items-center rounded-lg border bg-gradient-to-tr p-4 md:px-8 md:py-4 [&>*]:items-center">
          <div className="inline-flex w-1/2 justify-start [&>a]:text-lg [&>a]:font-medium">
            <a href="https://www.wontory.dev">wontory.dev</a>
          </div>
          <div className="[&>a]:text-muted-foreground/90 [&>a:hover]:text-foreground hidden shrink-0 gap-4 md:inline-flex [&>a]:px-2 [&>a]:py-3 [&>a]:text-sm [&>a]:font-medium [&>a]:transition-colors [&>a]:duration-200">
            <a href="https://www.wontory.dev">Home</a>
            <a href="https://blog.wontory.dev">Blog</a>
          </div>
          <div className="inline-flex w-1/2 justify-end">
            <button className="shadow-button text-background hidden rounded-sm bg-neutral-700 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-neutral-900 md:block dark:bg-neutral-200 dark:hover:bg-white">
              Welcome!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
