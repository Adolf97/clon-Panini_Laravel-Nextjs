import './globals.css'
import { Inter } from 'next/font/google'
import Header from './views/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tienda Panini México',
  description: 'Panini es la tienda de mangas y comics más grande del mundo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
