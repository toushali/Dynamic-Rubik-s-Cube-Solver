import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rubik\'s Cube Solver | Solve Any Cube Instantly',
  description: 'AI-powered Rubik\'s Cube solver. Scan your cube and get instant solutions with step-by-step guidance.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050508',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-space">
        {children}
      </body>
    </html>
  )
}
