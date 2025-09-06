import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Moin Khan | Full Stack Developer',
    template: '%s | Moin Khan'
  },
  description: 'Frontend Developer skilled in Next.js, React, and Tailwind CSS. Explore my portfolio projects and hire me for freelance work.',
  keywords: ['Full Stack Developer','Next.js Developer', 'Frontend Developer', 'React Developer', 'Backend Developer','UI/UX','Tailwind CSS', 'Portfolio', 'Javascript', 'WordPress', 'HTML', 'CSS','MongoDB','SQL'],
  openGraph: {
    title: 'Moin Khan | Frontend Developer',
    description: 'Portfolio showcasing Next.js and React projects.',
    url: 'https://www.moinkhan.site',
    siteName: 'Moin Khan Portfolio',
    images: [
      {
        url: 'https://moinkhan.site/images/projects/portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Moin Khan Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moin Khan | Frontend Developer',
    description: 'Frontend Developer skilled in Next.js, React, Tailwind CSS, and MongoDB.',
    images: ['https://moinkhan.site/images/projects/portfolio.jpg'],
    creator: '@khan__moin',
  },
  metadataBase: new URL('https://www.moinkhan.site'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
