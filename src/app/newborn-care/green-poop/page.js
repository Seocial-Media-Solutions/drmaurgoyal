 
import GreenPoopGuide from "@/components/GreenPoopGuide";
export const metadata = {
  title: 'Green Poop in Newborns - Pediatrician Advice Ajmer',
  description:
    'Worried about green poop in your newborn? Learn causes, when it’s normal, and when to consult Dr. Mayur Kumar Goyal, trusted pediatrician in Ajmer.',
  keywords: [
    'green poop in newborns',
    'baby stool color',
    'newborn poop guide',
    'pediatrician in Ajmer',
    'child doctor in Ajmer',
    'newborn doctor in Ajmer',
    'child specialist in Ajmer',
    'best pediatricians Ajmer',
    'infant digestion issues',
    'baby poop explained'
  ],
  openGraph: {
    title: 'Why Is My Baby’s Poop Green - Pediatric Guide Ajmer',
    description:
      'Dr. Mayur Kumar Goyal explains green poop in newborns. Know when it’s normal and when it requires pediatric attention. Trusted baby care in Ajmer.',
    images: [
      {
        url: '/images/green-poop-newborn.jpg',
        width: 1200,
        height: 630,
        alt: 'Green poop in newborn - explained by pediatrician',
      },
    ],
    type: 'article',
    url: 'https://www.drmayurkumargoyal.com/newborn-care/green-poop',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/newborn-care/green-poop',
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
    title: 'Newborn Green Poop Explained - Pediatrician in Ajmer',
    description:
      'Understand why your newborn has green poop. Learn from Dr. Mayur Kumar Goyal – a leading child specialist in Ajmer.',
    images: ['/images/green-poop-newborn.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page explains the causes of green poop in newborns and when to seek pediatric advice. Get trusted care tips from Dr. Mayur Kumar Goyal, top pediatrician in Ajmer.',
  },
};

 
export default function GreenPoopGuidePage(){
  return (
    <>
      <GreenPoopGuide/>
    </>
  )
}