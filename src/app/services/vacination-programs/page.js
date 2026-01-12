 
 
 
import VaccinationPrograms from "@/components/VaccinationPrograms";



export const metadata = {
  title: 'Child Vaccination Programs - Newborn Doctor in Ajmer',
  description:
    'Protect your child’s health with safe and timely vaccinations at Mayur Childern Hospital in Ajmer. Dr. Mayur Kumar Goyal offers complete immunization programs for newborns and children.',
  keywords: [
    'vaccination programs Ajmer',
    'child vaccination center',
    'newborn immunization Ajmer',
    'child specialist in Ajmer',
    'pediatrician in Ajmer',
    'newborn doctor in Ajmer',
    'child doctor in Ajmer',
    'baby vaccination clinic Ajmer',
    'child hospital in Ajmer',
    'best pediatricians Ajmer'
  ],
  openGraph: {
    title: 'Vaccination Services for Children - Pediatrician in Ajmer',
    description:
      'Explore comprehensive vaccination services at Mayur Childern Hospital by Dr. Mayur Kumar Goyal. Expert care for newborn and child immunization schedules.',
    images: [
      {
        url: '/images/vaccination-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Child vaccination program at Mayur Childern Hospital',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/services/vacination-programs',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/services/vacination-programs',
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
    title: 'Vaccination Programs for Children - Child Specialist in Ajmer',
    description:
      'Timely vaccinations for newborns and children by Dr. Mayur Kumar Goyal at Ajmer’s trusted pediatric center.',
    images: ['/images/vaccination-services.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page explains the structured child and newborn vaccination programs available at Mayur Childern Hospital, Ajmer. Learn about immunization schedules, vaccine safety, and expert pediatric guidance by Dr. Mayur Kumar Goyal.',
  },
};

export default function VaccinationProgramsPage(){
  return (
    <>
      <VaccinationPrograms/>
    </>
     
  )
}