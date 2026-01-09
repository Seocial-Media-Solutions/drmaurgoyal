import CarePartnerComponent from "@/components/CarePartnerComponent";
import FAQSection from "@/components/Faq";
import LocationForm from "@/components/LocationForm";
import LocationHero from "@/components/LocationHero";
import LocationMayur from "@/components/LocationMayur";

export const metadata = {
  title: 'Clinic Locations - Pediatrician and Child Hospital in Ajmer',
  description:
    'Find all clinic locations of Dr. Mayur Kumar Goyal in Ajmer. Visit our child hospital and pediatric centers for newborn care, vaccinations, and child health services.',
  keywords: [
    'pediatrician in Ajmer',
    'child hospital in Ajmer',
    'Dr. Mayur Kumar Goyal locations',
    'clinic locations Ajmer',
    'child care center Ajmer',
    'best pediatricians Ajmer',
    'child doctor in Ajmer',
    'child specialist in Ajmer',
    'newborn care locations',
    'pediatric clinics near me Ajmer'
  ],
  openGraph: {
    title: 'Our Clinic Locations - Mayur Child Care Center in Ajmer',
    description:
      'Explore all pediatric clinic locations in Ajmer by Dr. Mayur Kumar Goyal. Easily access newborn care, child specialist consultations, and vaccinations.',
    images: [
      {
        url: '/images/clinic-locations.jpg',
        width: 1200,
        height: 630,
        alt: 'Mayur Child Care Center Locations in Ajmer',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/locations',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/locations',
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
    title: 'Pediatric Clinic Locations in Ajmer - Dr. Mayur Goyal',
    description:
      'Get location details for Mayur Child Care Center in Ajmer. Trusted pediatrician and child specialist available across multiple clinic centers.',
    images: ['/images/clinic-locations.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page lists all the physical clinic locations of Dr. Mayur Kumar Goyal across Ajmer. Access quality pediatric care at multiple convenient centers for newborns, children, and adolescents.',
  },
};

export default function Location() {
    return (
<>
<div className="bg-white">
<LocationHero/>
<hr className="text-[#1018281f]"/>
<LocationMayur/>
<hr className="text-[#1018281f]"/>
<LocationForm/>
<hr className="text-[#1018281f]"/>
<FAQSection/>
<hr className="text-[#1018281f]"/>
      <CarePartnerComponent/>
</div>
</>
    );

}