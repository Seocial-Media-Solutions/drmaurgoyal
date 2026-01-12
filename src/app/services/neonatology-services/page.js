 
import NeonatologyServices from "@/components/NeonatologyServices";
import NewbornScreening from "@/components/NewbornScreening";
export const metadata = {
  title: 'Best Neonatology Services in Ajmer - Dr. Mayur Goyal',
  description:
    'Expert neonatology care by Dr. Mayur Kumar Goyal in Ajmer. Specialized NICU services, newborn treatment, and premature infant care.',
  keywords: [
    'best neonatology Ajmer',
    'newborn care specialist',
    'NICU Ajmer',
    'premature baby care',
    'neonatal doctor Ajmer',
    'Dr. Mayur Kumar Goyal',
    'newborn treatment center',
    'infant health services',
    'NICU facility Ajmer',
    'top pediatrician Ajmer'
  ],
  openGraph: {
    title: 'Top Neonatal Care in Ajmer - Mayur Childern Hospital',
    description:
      'Leading neonatal care and NICU services in Ajmer by Dr. Mayur Kumar Goyal. Safe and compassionate care for premature and high-risk newborns.',
    images: [
      {
        url: '/images/neonatology-services.jpg',
        width: 1200,
        height: 630,
        alt: 'NICU and neonatal care at Mayur Childern Hospital',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/services/neonatology-services',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/services/neonatology-services',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Neonatal Care in Ajmer - Dr. Mayur Goyal',
    description:
      'Trusted neonatal and NICU services in Ajmer by Dr. Mayur Kumar Goyal. Providing expert care for newborns and premature babies.',
    images: ['/images/neonatology-services.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page highlights the best neonatology and NICU services provided by Dr. Mayur Kumar Goyal at Mayur Childern Hospital in Ajmer, offering expert care for premature, low-birth-weight, and critically ill newborns.',
  },
};


export default function NeonatologyServicesPage(){
  return (
    <>
    <NeonatologyServices/>
 
    </>
  )
}