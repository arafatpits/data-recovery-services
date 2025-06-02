import { Inter, Montserrat } from 'next/font/google'
import "./globals.css";

// Load Inter for body text
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
})

// Load Montserrat for headings
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
