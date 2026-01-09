 
import FirstBathGuide from "@/components/FirstBathGuide";export const metadata = {
  title: 'Newborn First Bath Guide - Pediatric Tips in Ajmer',
  description:
    'Learn how to give your newborn a safe and soothing first bath. Dr. Mayur Kumar Goyal, top pediatrician in Ajmer, shares expert bathing tips for new parents.',
  keywords: [
    'newborn first bath',
    'how to bathe a baby',
    'baby bath tips',
    'newborn care Ajmer',
    'pediatrician in Ajmer',
    'newborn doctor in Ajmer',
    'child specialist Ajmer',
    'baby hygiene tips',
    'first bath safety',
    'best pediatricians Ajmer'
  ],
  openGraph: {
    title: 'First Bath for Newborn - Tips by Pediatrician in Ajmer',
    description:
      'Give your baby a gentle first bath with expert tips from Dr. Mayur Kumar Goyal. Learn step-by-step care and safety techniques.',
    images: [
      {
        url: '/images/newborn-first-bath.jpg',
        width: 1200,
        height: 630,
        alt: 'First bath for newborn at Mayur Child Care Center',
      },
    ],
    type: 'article',
    url: 'https://www.drmayurkumargoyal.com/newborn-care/first-bath',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/newborn-care/first-bath',
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
    title: 'How to Bathe a Newborn - Pediatric Guide in Ajmer',
    description:
      'Step-by-step newborn bathing guide from Dr. Mayur Kumar Goyal. Safe, gentle, and parent-friendly care for your baby in Ajmer.',
    images: ['/images/newborn-first-bath.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page provides parents with a simple guide to giving their newborn a first bath, including temperature tips, safety advice, and pediatric insights from Dr. Mayur Kumar Goyal in Ajmer.',
  },
};

 
export default function FirstBathGuidePage(){
  return (
    <>
    <FirstBathGuide/>
     </>
  )
}