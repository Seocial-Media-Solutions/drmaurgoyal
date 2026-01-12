import SwaddleGuide from "@/components/SwaddleGuide";

export const metadata = {
  title: 'How to Swaddle a Newborn - Pediatric Guide Ajmer',

  description:
    'Learn how to swaddle your newborn safely and effectively. Dr. Mayur Kumar Goyal shares expert advice on swaddling techniques, benefits, and safety tips in Ajmer.',
  keywords: [
    'how to swaddle newborn',
    'swaddling baby guide',
    'newborn care Ajmer',
    'newborn doctor in Ajmer',
    'pediatrician in Ajmer',
    'baby sleep safety',
    'swaddling benefits',
    'child specialist in Ajmer',
    'best pediatricians Ajmer',
    'baby care techniques'
  ],
  openGraph: {
    title: 'How to Swaddle a Baby - Trusted Pediatric Guide in Ajmer',
    description:
      'Follow Dr. Mayur Kumar Goyal’s swaddling guide for safe and restful baby sleep. Learn techniques and tips from a trusted pediatrician in Ajmer.',
    images: [
      {
        url: '/images/how-to-swaddle.jpg',
        width: 1200,
        height: 630,
        alt: 'How to swaddle a newborn safely - Mayur Childern Hospital',
      },
    ],
    type: 'article',
    url: 'https://www.drmayurkumargoyal.com/newborn-care/how-to-swaddle',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/newborn-care/how-to-swaddle',
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
    title: 'How to Swaddle a Newborn - Pediatric Tips in Ajmer',
    description:
      'Get expert pediatric advice on swaddling techniques and benefits for newborns. Safe and soothing tips by Dr. Mayur Kumar Goyal in Ajmer.',
    images: ['/images/how-to-swaddle.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page explains how to swaddle a newborn correctly with easy-to-follow steps. Learn about the benefits, risks, and expert insights from pediatrician Dr. Mayur Kumar Goyal in Ajmer.',
  },
};

 
export default function SwaddleGuidePage(){
  return (
    <>
      <SwaddleGuide/>
    </>
  )
}