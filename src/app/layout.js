import { Inter, Montserrat } from 'next/font/google'
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from '@/components/layout/footer'
import OurProcess from '@/components/sections/OurProcess'
import CustomerReview from '@/components/sections/CustomerReview'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-body bg-background text-foreground antialiased">
        <Header />
        {children}
        <OurProcess/>
        <CustomerReview/>
        <Footer/>
      </body>
    </html>
  )
}
