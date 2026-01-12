 
import PediatricEmergencyServices from "@/components/PediatricEmergencyServices";
 
export const metadata = {
  title: 'Best Pediatric Emergency Services in Ajmer - Dr. Mayur Goyal',
  description:
    'Urgent and expert pediatric emergency services in Ajmer by Dr. Mayur Kumar Goyal - 24x7 emergency care for children with immediate medical needs.',
  keywords: [
    'pediatric emergency services Ajmer',
    'emergency child care Ajmer',
    'urgent pediatric care',
    'child emergency doctor',
    'Dr. Mayur Kumar Goyal',
    'emergency pediatrician Ajmer',
    '24x7 child hospital Ajmer',
    'immediate child treatment',
    'pediatric trauma care',
    'top emergency pediatric care'
  ],
  openGraph: {
    title: '24x7 Pediatric Emergency Care in Ajmer - Mayur Child Care',
    description:
      'Round-the-clock pediatric emergency care in Ajmer by Dr. Mayur Kumar Goyal - Fast and safe treatment for acute illnesses, injuries, and emergencies.',
    images: [
      {
        url: '/images/pediatrics-emergency-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Emergency pediatric care at Mayur Childern Hospital',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/services/pediatrics-emergency-services',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/services/pediatrics-emergency-services',
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
    title: 'Pediatric Emergency Services in Ajmer - Dr. Mayur Goyal',
    description:
      'Dr. Mayur Kumar Goyal offers expert pediatric emergency services in Ajmer - Quick response and quality treatment for child emergencies.',
    images: ['/images/pediatrics-emergency-services.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page highlights pediatric emergency services by Dr. Mayur Kumar Goyal at Mayur Childern Hospital in Ajmer - Offering rapid and expert treatment for children requiring urgent medical attention, trauma care, or emergency diagnosis.',
  },
};

 
export default function PediatricEmergencyServicesPage(){
  return (
    <>
     <PediatricEmergencyServices/>
    </>
  )
}