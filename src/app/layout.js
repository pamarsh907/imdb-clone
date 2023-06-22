import Header from './components/header'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMBb Clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className }>
        {/*Header*/}
        <Header />
        {/*Navbar*/}

        {/*Searchbox*/}

        {children}</body>
    </html>
  )
}
