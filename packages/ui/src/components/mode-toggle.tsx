'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '~/components/button'

function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="dark:-rotate-90 size-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
      <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export { ModeToggle }
