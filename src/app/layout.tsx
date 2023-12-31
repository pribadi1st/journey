import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout  from '@/components/layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pribadi1st',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-100vh`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
