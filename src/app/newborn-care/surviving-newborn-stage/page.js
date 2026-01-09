 
import NewbornSurvivalGuide from "@/components/NewbornSurvivalGuide";
export const metadata = {
  title: 'Newborn Care Tips - Surviving the First Weeks in Ajmer',
  description:
    'Get expert newborn care tips from Dr. Mayur Kumar Goyal in Ajmer. Learn how to handle feeding, sleep, and early parenting challenges from a top pediatrician.',
  keywords: [
    'newborn care tips Ajmer',
    'surviving newborn stage',
    'newborn doctor in Ajmer',
    'child specialist in Ajmer',
    'pediatrician in Ajmer',
    'baby sleep and feeding Ajmer',
    'early parenting support',
    'best pediatricians Ajmer',
    'newborn health guidance',
    'child doctor Ajmer'
  ],
  openGraph: {
    title: 'Top Newborn Care Tips from Pediatrician in Ajmer',
    description:
      'Navigate the newborn stage with professional advice from Dr. Mayur Kumar Goyal. Sleep, feeding, and health tips for new parents in Ajmer.',
    images: [
      {
        url: '/images/surviving-newborn-stage.jpg',
        width: 1200,
        height: 630,
        alt: 'Newborn care support in Ajmer by Dr. Mayur Kumar Goyal',
      },
    ],
    type: 'article',
    url: 'https://www.drmayurkumargoyal.com/newborn-care/surviving-newborn-stage',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/newborn-care/surviving-newborn-stage',
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
    title: 'Newborn Survival Guide - Pediatric Support in Ajmer',
    description:
      'Dr. Mayur Kumar Goyal offers expert guidance on newborn care in Ajmer. Get help with baby sleep, feeding, and first-time parenting.',
    images: ['/images/surviving-newborn-stage.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page guides new parents on surviving the newborn phase with trusted tips from Dr. Mayur Kumar Goyal, a leading pediatrician in Ajmer. Topics include sleep, feeding, bonding, and emotional care for both baby and parents.',
  },
};

 
export default function NewbornSurvivalGuidePage(){
  return (
    <>
     <NewbornSurvivalGuide/>
     </>
  )
}