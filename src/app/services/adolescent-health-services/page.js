import AdolescentHealthServices from "@/components/AdolescentHealthServices";
export const metadata = {
  title: 'Adolescent Health Services in Ajmer - Dr. Mayur Goyal',
  description:
    'Specialized adolescent health services in Ajmer by Dr. Mayur Kumar Goyal - Complete care for teenage physical, mental, and emotional well-being.',
  keywords: [
    'adolescent health services Ajmer',
    'teen health doctor Ajmer',
    'Dr. Mayur Kumar Goyal',
    'mental health for teens',
    'pediatric adolescent care',
    'teenager medical care',
    'growth and puberty counseling',
    'behavioral health for teens',
    'specialist for teenagers',
    'adolescent clinic Ajmer'
  ],
  openGraph: {
    title: 'Teen and Adolescent Healthcare in Ajmer - Mayur Child Care',
    description:
      'Trusted adolescent health services in Ajmer by Dr. Mayur Kumar Goyal - Addressing physical, hormonal, emotional, and mental needs of teenagers.',
    images: [
      {
        url: '/images/adolescent-health-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Teen consulting doctor at Mayur Childern Hospital',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/services/adolescent-health-services',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/services/adolescent-health-services',
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
    title: 'Adolescent Health in Ajmer - Dr. Mayur Goyal',
    description:
      'Expert adolescent healthcare services in Ajmer - Dr. Mayur Kumar Goyal provides guidance, counseling, and treatment for teenage health concerns.',
    images: ['/images/adolescent-health-services.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page provides detailed information about adolescent health services offered by Dr. Mayur Kumar Goyal at Mayur Childern Hospital in Ajmer - Focusing on physical development, puberty guidance, mental health support, and preventive care for teenagers.',
  },
};

 
export default function AdolescentHealthServicesPage(){
  return (
    <>
     <AdolescentHealthServices/>
    </>
  )
}