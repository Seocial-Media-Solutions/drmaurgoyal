// app/layout.js
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import './globals.css';
import FloatingContact from '@/components/FloatingContact';
import Script from 'next/script';
import NewYearPopup from '@/components/NewYearPopup';


// Define the default metadata as a variable export
export const metadata = {
  metadataBase: new URL('https://drmayurkumargoyal.com'),
  title: {
    template: '%s',
    default: 'Mayur Childern Hospital | Pediatrician in Ajmer'
  },
  description: 'Best pediatrician in Ajmer, Rajasthan. Dr. Mayur Kumar Goyal specializes in child healthcare, newborn care, and vaccination services.',
  keywords: [
    'pediatrician in Ajmer',
    'child healthcare',
    'newborn care',
    'vaccination services',
    'best pediatrician in Ajmer',
    'child doctor in Ajmer',
    'Dr. Mayur Kumar Goyal',
    'Mayur Childern Hospital',
    'Ajmer pediatric clinic',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="bniGqcb6lAS--Rg7LOlEfz6y46F-nTwr-R9q_PszKS4" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TYC6WTHMGF"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-TYC6WTHMGF');
         `}
        </Script>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        {/* <NewYearPopup/> */}
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}