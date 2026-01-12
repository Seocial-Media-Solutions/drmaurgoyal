 
import DiaperRashGuide from "@/components/DiaperRashGuide";
export const metadata = {
  title: 'Diaper Rash Treatment for Babies - Newborn Care in Ajmer',
  description:
    'Learn safe and effective diaper rash treatments from Dr. Mayur Kumar Goyal, a leading pediatrician in Ajmer. Discover tips to prevent and soothe baby skin rashes.',
  keywords: [
    'diaper rash treatment',
    'baby rash care',
    'pediatrician in Ajmer',
    'newborn doctor in Ajmer',
    'child specialist in Ajmer',
    'best pediatricians Ajmer',
    'infant skin care',
    'diaper rash remedies',
    'baby care tips',
    'child doctor in Ajmer'
  ],
  openGraph: {
    title: 'Diaper Rash Remedies for Newborns - Child Care in Ajmer',
    description:
      'Soothe and prevent diaper rashes in babies with expert pediatric guidance from Dr. Mayur Kumar Goyal. Trusted newborn doctor in Ajmer.',
    images: [
      {
        url: '/images/diaper-rash-treatment.jpg',
        width: 1200,
        height: 630,
        alt: 'Diaper rash treatment tips by pediatrician',
      },
    ],
    type: 'article',
    url: 'https://www.drmayurkumargoyal.com/newborn-care/diaper-rash-treatment',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/newborn-care/diaper-rash-treatment',
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
    title: 'Newborn Diaper Rash Treatment - Expert Pediatric Tips',
    description:
      'Discover how to treat and prevent diaper rash in babies with tips from Dr. Mayur Kumar Goyal, a top child specialist in Ajmer.',
    images: ['/images/diaper-rash-treatment.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page helps parents manage diaper rash in newborns. It provides pediatrician-approved tips for soothing baby skin, preventing rashes, and maintaining proper hygiene. Trusted care by Dr. Mayur Kumar Goyal in Ajmer.',
  },
};

 
export default function DiaperRashGuidePage(){
  return (
    <>
      <DiaperRashGuide/>
    </>
  )
}