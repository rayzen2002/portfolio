import { ReactNode } from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ModeToggle } from '@/components/ModeToggle'

export const metadata = {
  title: 'Emanuel',
  description: 'Emanuel Simple portfolio application',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body className=" bg-gray-800">
        <main className=" flex min-h-screen flex-col bg-gray-800">
          <div className="flex h-36 max-w-full items-center justify-center gap-8 border-b-4 border-black bg-gray-800 text-3xl md:text-2xl xl:text-xl ">
            <a href="/">Home</a>
            <a href="/projetos">Projetos</a>
            <a href="/about">Sobre</a>
            <ModeToggle />
          </div>
          <div className="flex min-h-0 max-w-full flex-1 items-start justify-center rounded-xl pt-6">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </div>
        </main>
      </body>
    </html>
  )
}
