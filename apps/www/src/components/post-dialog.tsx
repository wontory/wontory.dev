'use client'

import { useRouter } from 'next/navigation'

import { Dialog, DialogContent } from '@wontory/ui/dialog'
import { ScrollArea } from '@wontory/ui/scroll-area'

function PostDialog({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const onOpenChange = () => router.back()

  return (
    <Dialog defaultOpen onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[calc(100dvh-64px)] w-full max-w-screen-md overflow-hidden">
        <ScrollArea className="max-h-[calc(100dvh-128px)] w-full">
          {children}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export { PostDialog }
