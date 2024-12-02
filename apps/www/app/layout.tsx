import type { Metadata } from 'next'

import { Pretendard } from '@wontory/ui/pretendard'
import { ThemeProvider } from '@wontory/ui/theme-provider'
import { cn } from '@wontory/util/cn'
import '@wontory/ui/globals.css'

import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

export const metadata: Metadata = {
  title: 'wontory.dev',
  description: 'Personal website of wontory, frontend developer',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', Pretendard.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          {modal}
        </ThemeProvider>
      </body>
    </html>
  )
}
