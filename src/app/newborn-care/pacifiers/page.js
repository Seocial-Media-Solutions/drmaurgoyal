 
import PacifierGuide from "@/components/PacifierGuide";
export const metadata = {
  title: 'Pacifiers for Newborns - Pediatric Advice in Ajmer',
  description:
    'Is it safe to give a pacifier to your newborn? Discover the benefits, risks, and expert pediatric guidelines by Dr. Mayur Kumar Goyal in Ajmer.',
  keywords: [
    'pacifier for newborn',
    'are pacifiers safe',
    'pacifier pros and cons',
    'baby soother use',
    'newborn care tips',
    'child doctor in Ajmer',
    'newborn doctor in Ajmer',
    'pediatrician in Ajmer',
    'child specialist in Ajmer',
    'baby oral health pacifier'
  ],
  openGraph: {
    title: 'Newborn Pacifier Use - Expert Pediatric Guide Ajmer',
    description:
      'Learn when and how to use a pacifier for your newborn. Get trusted insights from Dr. Mayur Kumar Goyal, top pediatrician in Ajmer.',
    images: [
      {
        url: '/images/newborn-pacifier.jpg',
        width: 1200,
        height: 630,
        alt: 'Newborn baby using pacifier - pediatric care in Ajmer',
      },
    ],
    type: 'article',
    url: 'https://www.drmayurkumargoyal.com/newborn-care/pacifiers',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/newborn-care/pacifiers',
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
    title: 'Pacifier Tips for Newborns - Child Doctor in Ajmer',
    description:
      'Explore the pros and cons of pacifier use for babies. Pediatric tips by Dr. Mayur Kumar Goyal, newborn care expert in Ajmer.',
    images: ['/images/newborn-pacifier.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page explains pacifier safety, benefits, and usage for newborns. Get clear, doctor-recommended advice from Dr. Mayur Kumar Goyal, leading pediatrician in Ajmer.',
  },
};

export default function PacifierGuidePage(){
  return (
    <>
     <PacifierGuide/>
    </>
  )
}