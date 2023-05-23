import { Comme } from 'next/font/google'
import './index.css'

const comme = Comme({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
}) 

export const metadata = {
  title: 'Football API',
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
