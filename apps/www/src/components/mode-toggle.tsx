'use client'

import { Button } from '@wontory/ui/button'
import { Moon, Sun } from '@wontory/ui/lucide'
import { useTheme } from '@wontory/ui/theme-provider'

function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="dark:-rotate-90 size-4 rotate-0 scale-100 transition-all dark:scale-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export { ModeToggle }