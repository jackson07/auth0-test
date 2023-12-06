import { UserProvider } from '@auth0/nextjs-auth0/client'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next Auth0',
  description: 'Auth Test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  )
}
