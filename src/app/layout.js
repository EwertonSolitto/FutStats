import { Oswald } from 'next/font/google'

const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
}) 

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  )
}
