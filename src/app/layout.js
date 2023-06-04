import { Comme } from 'next/font/google'
import "../scss/index.scss"
import Header from './components/Header'

const comme = Comme({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
}) 

export const metadata = {
  title: 'FutStats',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comme.className}>
        {children}
      </body>
    </html>
  )
}
