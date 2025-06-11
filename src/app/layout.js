import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import OurProcess from "@/components/sections/OurProcess";
import CustomerReview from "@/components/sections/CustomerReview";
import FinalCTA from "@/components/sections/FinalCta";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <Header />
        <main>
          {children}
          <WhyChooseUs/>
          <OurProcess />
          <CustomerReview />
          <FinalCTA />
        </main>

        <Footer />
      </body>
    </html>
  );
}
