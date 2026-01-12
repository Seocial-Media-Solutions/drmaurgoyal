import CarePartnerComponent from "@/components/CarePartnerComponent";
import PediatricServices from "@/components/PediatricServices";
import ServiceBoxes from "@/components/ServiceBox";
import VaccinationPrograms from "@/components/Services";
import ServicesShowcase from "@/components/ServicesShowcase";

export const metadata = {
  title: 'Child Vaccination Programs in Ajmer - Dr. Mayur Goyal',
  description:
    'Child vaccination in Ajmer by Dr. Mayur Kumar Goyal. Safe immunization schedules for newborns, infants, and children with effective vaccines.',
  keywords: [
    'child vaccination Ajmer',
    'vaccination programs Ajmer',
    'immunization for children',
    'baby vaccines Ajmer',
    'pediatric vaccination',
    'Dr. Mayur Kumar Goyal',
    'child immunization schedule',
    'vaccination clinic Ajmer',
    'safe child vaccines',
    'infant immunization Ajmer'
  ],
  openGraph: {
    title: 'Pediatric Vaccination Services in Ajmer - Mayur Child Care',
    description:
      'Get your child vaccinated safely with Dr. Mayur Kumar Goyal in Ajmer - Expert pediatric immunization programs for disease prevention.',
    images: [
      {
        url: '/images/vaccination-programs.jpg',
        width: 1200,
        height: 630,
        alt: 'Child receiving vaccination at Mayur Childern Hospital',
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
    title: 'Vaccination Programs for Children in Ajmer - Dr. Mayur Goyal',
    description:
      'Pediatric vaccination services in Ajmer by Dr. Mayur Kumar Goyal - Complete and safe immunization programs for children of all ages.',
    images: ['/images/vaccination-programs.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page provides details about child vaccination programs at Mayur Childern Hospital in Ajmer by Dr. Mayur Kumar Goyal - Offering safe and effective immunizations for infants, toddlers, and children as per national immunization guidelines.',
  },
};

export default function Services() {
    return (
        <>
        {/* <VaccinationPrograms/> */}
            <PediatricServices />
            <div className="bg-white">
           <ServiceBoxes/>
           
           </div>
            {/* <ServicesShowcase/> */}
           <CarePartnerComponent/>
        </>
    );
}
