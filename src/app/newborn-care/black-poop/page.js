 
import BlackPoopGuide from "@/components/BlackPoopGuide";
export const metadata = {
  title: 'Black Poop in Newborns - Expert Pediatric Insight Ajmer',
  description:
    'Is your newborn passing black stool? Learn what’s normal and when to consult a pediatrician. Dr. Mayur Kumar Goyal explains newborn poop patterns in Ajmer.',
  keywords: [
    'black poop in newborns',
    'newborn stool color guide',
    'meconium in babies',
    'baby poop concerns',
    'pediatrician in Ajmer',
    'newborn doctor in Ajmer',
    'child specialist in Ajmer',
    'best pediatricians Ajmer',
    'baby digestive health',
    'infant care tips'
  ],
  openGraph: {
    title: 'Newborn Black Poop - What Parents Should Know in Ajmer',
    description:
      'Concerned about black poop in your baby? Get clarity from Dr. Mayur Kumar Goyal, a trusted pediatrician in Ajmer. Learn when it’s normal and when to act.',
    images: [
      {
        url: '/images/black-poop-newborn.jpg',
        width: 1200,
        height: 630,
        alt: 'Newborn black stool - pediatric explanation',
      },
    ],
    type: 'article',
    url: 'https://www.drmayurkumargoyal.com/newborn-care/black-poop',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/newborn-care/black-poop',
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
    title: 'Newborn Black Poop Explained - Pediatric Care in Ajmer',
    description:
      'Understand what black poop in newborns means. Dr. Mayur Kumar Goyal provides expert advice for parents in Ajmer.',
    images: ['/images/black-poop-newborn.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page provides parents with pediatric insights about black poop in newborns. Understand normal vs. abnormal signs and get expert advice from Dr. Mayur Kumar Goyal, one of the best pediatricians in Ajmer.',
  },
};

 
export default function BlackPoopGuidePage(){
  return (
    <>
      <BlackPoopGuide/>
    </>
  )
}