import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mikkel Kornval',
  description: 'Resume of Mikkel Kornval',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
