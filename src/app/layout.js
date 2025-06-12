import { Inter, Montserrat } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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
        <meta name="robots" content="noindex, nofollow" />
        <title>Professional Data Recovery Services</title>
        <meta name="description" content="Recover data from hard drives, SSDs, RAID & more – fast, secure, and professional."></meta>
        <link rel="icon" href="/images/drs-favicon.svg" type="image/svg+xml" />
        
        {/* Google Tag Manager - Static Export Compatible */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17109057717"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17109057717');
              gtag('config', 'AW-17109057717/pVMDCMSHsdkaELWBnt4_', {
                'phone_conversion_number': '800-836-5414'
              });
            `,
          }}
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
        
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}