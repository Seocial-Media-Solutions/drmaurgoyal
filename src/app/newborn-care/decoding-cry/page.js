 
import DecodingCryGuide from "@/components/DecodingCryGuide";
export const metadata = {
  title: 'Understanding Newborn Crying - Pediatrician in Ajmer',
  description:
    'Learn to decode your newborn’s crying—hunger, discomfort, sleep, or pain. Expert advice by Dr. Mayur Kumar Goyal, trusted child specialist in Ajmer.',
  keywords: [
    'newborn crying reasons',
    'why baby cries',
    'how to decode baby cries',
    'soothing crying newborn',
    'baby cry meaning',
    'newborn care Ajmer',
    'child doctor in Ajmer',
    'pediatrician in Ajmer',
    'newborn doctor in Ajmer',
    'best pediatricians Ajmer'
  ],
  openGraph: {
    title: 'Decode Baby Cries - Expert Newborn Advice Ajmer',
    description:
      'Figure out why your newborn is crying and how to respond. Trusted pediatric tips from Dr. Mayur Kumar Goyal in Ajmer.',
    images: [
      {
        url: '/images/newborn-crying.jpg',
        width: 1200,
        height: 630,
        alt: 'Crying newborn baby - pediatric advice',
      },
    ],
    type: 'article',
    url: 'https://www.drmayurkumargoyal.com/newborn-care/decoding-cry',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/newborn-care/decoding-cry',
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
    title: 'Newborn Crying Explained - Pediatric Tips Ajmer',
    description:
      'Understand your baby’s cries with help from Dr. Mayur Kumar Goyal, leading child doctor in Ajmer. Learn cues and calming techniques.',
    images: ['/images/newborn-crying.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page helps parents understand different types of newborn crying and how to respond effectively. Guidance from Dr. Mayur Kumar Goyal, top pediatrician in Ajmer.',
  },
};

 
export default function DecodingCryGuidePage(){
  return (
    <>
     <DecodingCryGuide/>
    </>
  )
}