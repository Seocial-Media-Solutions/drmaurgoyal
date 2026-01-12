 
import EnoughFoodGuide from "@/components/EnoughFoodGuide";



export const metadata = {
  title: 'Is Your Newborn Eating Enough - Child Specialist Ajmer',
  description:
    'Wondering if your baby is feeding well? Learn the signs your newborn is getting enough milk. Expert pediatric advice by Dr. Mayur Kumar Goyal in Ajmer.',
  keywords: [
    'newborn feeding signs',
    'is baby getting enough milk',
    'baby hunger cues',
    'breastfeeding newborn',
    'formula feeding newborn',
    'newborn care Ajmer',
    'pediatrician in Ajmer',
    'child doctor in Ajmer',
    'newborn doctor in Ajmer',
    'best pediatricians Ajmer'
  ],
  openGraph: {
    title: 'Newborn Feeding Guide - Pediatric Advice in Ajmer',
    description:
      'Know if your newborn is eating enough with expert tips from Dr. Mayur Kumar Goyal, top child specialist in Ajmer. Learn hunger signs and feeding frequency.',
    images: [
      {
        url: '/images/newborn-feeding.jpg',
        width: 1200,
        height: 630,
        alt: 'Newborn baby feeding - pediatric care in Ajmer',
      },
    ],
    type: 'article',
    url: 'https://www.drmayurkumargoyal.com/newborn-care/enough-food',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/newborn-care/enough-food',
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
    title: 'Newborn Eating Enough - Tips from Child Doctor in Ajmer',
    description:
      'Discover how to tell if your newborn is feeding well. Trusted newborn care tips from Dr. Mayur Kumar Goyal, leading pediatrician in Ajmer.',
    images: ['/images/newborn-feeding.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page guides new parents in identifying whether their newborn is getting enough nutrition. Learn signs of healthy feeding from Dr. Mayur Kumar Goyal, trusted child specialist in Ajmer.',
  },
};

 
export default function EnoughFoodGuidePage(){
  return (
    <>
     <EnoughFoodGuide/>
    </>
  )
}