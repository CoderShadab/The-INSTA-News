import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/Header'
import Providers from './Providers'
import BackToTopButton from '@/components/BackToTopButton'
//import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'THE INSTANEWS',
  description: 'The Insta News - Get the Latest News Anytime Anywhere with InstaNews.',
  applicationName: 'THE Insta NEWS',
  manifest: '/manifest.json',
  keywords: ['insta-news', 'open-source', 'insta', 'insta news', 'nextjs project', 'mediastck', 'news', 'news app', 'news web app', 'nextjs pwa app'],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f4f6' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
  openGraph: {
    title: 'THE INSTANEWS',
    description: 'The Insta News - Get the Latest News Anytime Anywhere with DevNews.',
    siteName: 'THE INSTA NEWS',
    images: '/og-image.png',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE INSTA NEWS',
    description: 'The INSTA News - Get the Latest News Anytime Anywhere with DevNews.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light dark:bg-dark transition-all duration-1000 selection:bg-accent `} >
        <Providers>
          <div className="p-5">
            <Header />
            <main className="max-w-6xl mx-auto ">
              {children}
            </main>
          </div>
          <BackToTopButton />
        </Providers>
      </body>
    </html>
  )
}