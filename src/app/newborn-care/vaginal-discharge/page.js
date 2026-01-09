 
import VaginalDischargeGuide from "@/components/VaginalDischargeGuide";
export const metadata = {
  title: 'Newborn Vaginal Discharge - Pediatric Advice in Ajmer',
  description:
    'Understand newborn vaginal discharge with expert guidance from Dr. Mayur Kumar Goyal. Learn causes, when it’s normal, and when to consult a pediatrician in Ajmer.',
  keywords: [
    'newborn vaginal discharge',
    'baby girl discharge',
    'infant vaginal care',
    'newborn care Ajmer',
    'pediatrician in Ajmer',
    'newborn doctor in Ajmer',
    'child specialist Ajmer',
    'baby hygiene guide',
    'normal baby discharge',
    'best pediatricians Ajmer'
  ],
  openGraph: {
    title: 'Newborn Vaginal Discharge - Pediatric Care Tips',
    description:
      'Learn about vaginal discharge in newborn girls. Dr. Mayur Kumar Goyal explains causes, normal signs, and when to seek help in Ajmer.',
    images: [
      {
        url: '/images/newborn-vaginal-discharge.jpg',
        width: 1200,
        height: 630,
        alt: 'Newborn girl care and hygiene advice',
      },
    ],
    type: 'article',
    url: 'https://www.drmayurkumargoyal.com/newborn-care/vaginal-discharge',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/newborn-care/vaginal-discharge',
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
    title: 'Vaginal Discharge in Newborns - Expert Pediatric Tips',
    description:
      'Dr. Mayur Kumar Goyal explains newborn vaginal discharge—what’s normal, what’s not, and how to care for your baby girl’s hygiene in Ajmer.',
    images: ['/images/newborn-vaginal-discharge.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page covers newborn vaginal discharge in baby girls, explaining what to expect, when to consult a doctor, and hygiene tips by pediatrician Dr. Mayur Kumar Goyal in Ajmer.',
  },
};


 
export default function VaginalDischargeGuidePage(){
  return (
    <>
     <VaginalDischargeGuide/>
     </>
  )
}