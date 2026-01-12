 
import CommonConditionsGuide from "@/components/CommonConditionsGuide";
export const metadata = {
  title: 'Common Newborn Conditions - Pediatric Care in Ajmer',
  description:
    'Understand common newborn health issues like colic, jaundice, and reflux. Dr. Mayur Kumar Goyal in Ajmer offers trusted pediatric care and expert advice.',
  keywords: [
    'common newborn conditions',
    'baby health issues',
    'newborn doctor in Ajmer',
    'pediatrician in Ajmer',
    'child specialist Ajmer',
    'baby colic care',
    'infant jaundice treatment',
    'pediatric care Ajmer',
    'newborn reflux solutions',
    'best pediatricians Ajmer'
  ],
  openGraph: {
    title: 'Common Newborn Health Conditions - Expert Pediatric Tips',
    description:
      'Explore frequent newborn conditions like colic and jaundice. Get expert guidance from Dr. Mayur Kumar Goyal, leading pediatrician in Ajmer.',
    images: [
      {
        url: '/images/common-newborn-conditions.jpg',
        width: 1200,
        height: 630,
        alt: 'Common newborn health problems - Pediatric guidance',
      },
    ],
    type: 'article',
    url: 'https://www.drmayurkumargoyal.com/newborn-care/common-conditions',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/newborn-care/common-conditions',
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
    title: 'Newborn Health Conditions - Pediatric Help in Ajmer',
    description:
      'Find solutions for common newborn conditions with expert care from Dr. Mayur Kumar Goyal. Trusted pediatric guidance in Ajmer.',
    images: ['/images/common-newborn-conditions.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page highlights common newborn health conditions such as jaundice, colic, and feeding issues. Dr. Mayur Kumar Goyal, pediatrician in Ajmer, provides clear, practical solutions for parents.',
  },
};

 
export default function CommonConditionsGuidePage(){
  return (
    <>
     <CommonConditionsGuide/>
    </>
  )
}