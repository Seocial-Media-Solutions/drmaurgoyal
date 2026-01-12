 
import RoomTemperatureGuide from "@/components/RoomTemperatureGuide";
export const metadata = {
  title: 'Ideal Room Temperature for Newborns - Baby Care Ajmer',
  description:
    'Maintain the perfect room temperature for your newborn’s comfort and safety. Expert advice by Dr. Mayur Kumar Goyal, leading pediatrician in Ajmer.',
  keywords: [
    'ideal room temperature newborn',
    'newborn sleep safety',
    'baby room temperature guide',
    'newborn care Ajmer',
    'child specialist in Ajmer',
    'pediatrician in Ajmer',
    'child doctor in Ajmer',
    'newborn doctor in Ajmer',
    'safe sleep tips newborn',
    'best pediatricians Ajmer'
  ],
  openGraph: {
    title: 'Newborn Room Temperature Tips - Pediatric Care Ajmer',
    description:
      'Get guidance on the best room temperature for newborns from Dr. Mayur Kumar Goyal. Keep your baby safe and comfortable in every season.',
    images: [
      {
        url: '/images/ideal-room-temperature.jpg',
        width: 1200,
        height: 630,
        alt: 'Recommended room temperature for newborn baby',
      },
    ],
    type: 'article',
    url: 'https://www.drmayurkumargoyal.com/newborn-care/ideal-room-temperature',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/newborn-care/ideal-room-temperature',
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
    title: 'Room Temperature for Newborn - Expert Pediatric Advice Ajmer',
    description:
      'Learn about optimal room temperature for newborns to ensure safe sleep and comfort. Tips from trusted child doctor in Ajmer.',
    images: ['/images/ideal-room-temperature.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page provides expert guidance on maintaining the best room temperature for newborns to ensure comfort and prevent health risks. Authored by Dr. Mayur Kumar Goyal, top pediatrician in Ajmer.',
  },
};

 
export default function RoomTemperatureGuidePage(){
  return (
    <>
    <RoomTemperatureGuide/>
     </>
  )
}