import NewbornCareHero from "@/components/NewbornCareHero";
import NewbornCareTopics from "@/components/NewbornCareTopics";


export const metadata = {
  title: 'Newborn Doctor in Ajmer - Best Child Specialist for Infant Care',
  description:
    'Trusted newborn care by Dr. Mayur Kumar Goyal, a top pediatrician in Ajmer. Specialized care for newborns, infant checkups, immunization, and parental guidance.',
  keywords: [
    'newborn doctor in Ajmer',
    'infant care Ajmer',
    'pediatrician for newborns',
    'best child doctor Ajmer',
    'child specialist in Ajmer',
    'newborn checkup Ajmer',
    'baby immunization Ajmer',
    'child hospital Ajmer',
    'best pediatricians Ajmer',
    'parenting support newborn'
  ],
  openGraph: {
    title: 'Newborn Care Services - Pediatrician and Child Doctor in Ajmer',
    description:
      'Comprehensive newborn healthcare by Dr. Mayur Kumar Goyal at Mayur Childern Hospital. Visit the best pediatrician and child specialist in Ajmer.',
    images: [
      {
        url: '/images/newborn-care.jpg',
        width: 1200,
        height: 630,
        alt: 'Newborn care at Mayur Childern Hospital Ajmer',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/newborn-care',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/newborn-care',
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
    title: 'Infant and Newborn Doctor in Ajmer - Dr. Mayur Goyal',
    description:
      'Get expert newborn care, early growth monitoring, and pediatric consultations from Dr. Mayur Goyal, the trusted child specialist in Ajmer.',
    images: ['/images/newborn-care.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page offers detailed information about specialized newborn care services at Mayur Childern Hospital in Ajmer. Dr. Mayur Kumar Goyal, a leading pediatrician and newborn care expert, provides complete infant health support including vaccinations, checkups, and parental education.',
  },
};



export default function NewbornCare() {
  return (
    <>
      <NewbornCareHero/>
      <NewbornCareTopics/>
    </>
  );
}