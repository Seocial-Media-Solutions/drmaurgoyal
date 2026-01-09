 
 
import PediatricCriticalCare from "@/components/PediatricCriticalCare";
export const metadata = {
  title: 'Pediatric Critical Care in Ajmer - Dr. Mayur Goyal',
  description:
    'Expert pediatric critical care in Ajmer by Dr. Mayur Kumar Goyal. Specialized PICU services for serious illness, trauma, and life-saving interventions.',
  keywords: [
    'pediatric critical care Ajmer',
    'PICU services Ajmer',
    'child ICU specialist',
    'emergency pediatric care',
    'Dr. Mayur Kumar Goyal',
    'critical care children',
    'intensive care for kids',
    'life-saving pediatric treatments',
    'serious illness care Ajmer',
    'top child ICU Ajmer'
  ],
  openGraph: {
    title: 'Pediatric ICU Services - Dr. Mayur Goyal - Ajmer',
    description:
      'Advanced pediatric critical care by Dr. Mayur Kumar Goyal. Specialized treatment for critically ill children in a dedicated PICU environment.',
    images: [
      {
        url: '/images/pediatric-critical-care.jpg',
        width: 1200,
        height: 630,
        alt: 'Child receiving critical care at Mayur Child Care Center',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/services/pediatric-critical-care',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/services/pediatric-critical-care',
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
    title: 'Pediatric ICU in Ajmer / Dr. Mayur Goyal',
    description:
      'Specialized pediatric intensive care in Ajmer. 24x7 PICU services by Dr. Mayur Kumar Goyal for critical conditions and emergencies.',
    images: ['/images/pediatric-critical-care.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page presents pediatric critical care services by Dr. Mayur Kumar Goyal at Mayur Child Care Center in Ajmer. Offering advanced PICU support for life-threatening illnesses, infections, trauma, and organ failure.',
  },
};


export default function PediatricCriticalCarePage(){
  return (
    <>
    
    <PediatricCriticalCare/>
   </>
     
  )
}