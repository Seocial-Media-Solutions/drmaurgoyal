 
import SupportServices from "@/components/SupportServices";
export const metadata = {
  title: 'Pediatric Support Services - Best Child Hospital in Ajmer',
  description:
    'Explore essential pediatric support services offered by Dr. Mayur Kumar Goyal in Ajmer. From parental counseling to nutritional guidance, we ensure complete child healthcare.',
  keywords: [
    'pediatric support services',
    'child hospital in Ajmer',
    'best child care center in Ajmer',
    'pediatric counseling Ajmer',
    'child nutrition guidance',
    'pediatrician in Ajmer',
    'child specialist in Ajmer',
    'child doctor in Ajmer',
    'supportive care for children',
    'best pediatricians Ajmer'
  ],
  openGraph: {
    title: 'Child Healthcare Support Services - Pediatrician in Ajmer',
    description:
      'Mayur Childern Hospital offers support services like parent counseling, therapy referrals, and child nutrition advice to improve pediatric health outcomes.',
    images: [
      {
        url: '/images/support-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Supportive pediatric services at Mayur Childern Hospital',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/services/support-services',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/services/support-services',
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
    title: 'Support Services for Children - Child Specialist in Ajmer',
    description:
      'Get professional support services from Dr. Mayur Goyal including child nutrition advice and parental counseling at Ajmer’s trusted pediatric center.',
    images: ['/images/support-services.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page outlines the pediatric support services provided by Mayur Childern Hospital in Ajmer, such as developmental guidance, emotional support, and family counseling, ensuring overall well-being for every child.',
  },
};


export default function SupportServicesPage(){
  return (
    <>
     <SupportServices/>
    </>
  )
}