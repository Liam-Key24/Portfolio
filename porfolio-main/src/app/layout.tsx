import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout/layout'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabriel L. Khidyer - Portfolio',
  description: 'Frontend Developer Portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body className={`${inter.className} mx-2 font-Teachers bg-smoke`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}