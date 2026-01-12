import AboutCoreValues from "@/components/AboutCoreValues";
import AboutDoctor from "@/components/AboutDoctor";
import AboutHero from "@/components/AboutHero";
import AboutMission from "@/components/AboutMission";
import CarePartnerComponent from "@/components/CarePartnerComponent";
export const metadata = {
  title: 'About Pediatrician in Ajmer - Dr. Mayur Goyal Child Specialist',
  description:
    'Learn about Dr. Mayur Kumar Goyal, a leading pediatrician in Ajmer known for his compassionate child care services. Trusted child doctor offering expert care for newborns, infants, and adolescents.',
  keywords: [
    'pediatrician in Ajmer',
    'child specialist in Ajmer',
    'Dr. Mayur Kumar Goyal',
    'best pediatricians Ajmer',
    'child doctor in Ajmer',
    'about Dr. Mayur Goyal',
    'child hospital in Ajmer',
    'newborn doctor in Ajmer',
    'experienced pediatrician Ajmer',
    'trusted child care center'
  ],
  openGraph: {
    title: 'Meet Dr. Mayur Goyal - Experienced Child Doctor in Ajmer',
    description:
      'Explore the journey of Dr. Mayur Kumar Goyal, a trusted pediatrician and child care expert in Ajmer. Get to know his medical background, philosophy, and care approach.',
    images: [
      {
        url: '/images/about-dr-mayur.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Mayur Goyal Pediatrician Ajmer',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/about-us',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/about-us',
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
    title: 'About Dr. Mayur Goyal - Pediatrician and Child Specialist in Ajmer',
    description:
      'Dr. Mayur Kumar Goyal is a highly experienced child specialist in Ajmer offering compassionate pediatric services at Mayur Childern Hospital.',
    images: ['/images/about-dr-mayur.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page provides a detailed overview of Dr. Mayur Kumar Goyal, his qualifications, vision, and commitment to child healthcare in Ajmer. Learn how his pediatric care services are helping families across the city.',
  },
};

export default function AboutUs() {
  return (
    <>
      <AboutHero />
      <hr className="text-[#1018281f]"/>
      <AboutDoctor/>
      <hr className="text-[#1018281f]"/>
      <AboutMission />
      <hr className="text-[#1018281f]"/>
      <div className="bg-white">
      <AboutCoreValues/>
      </div>
      <hr className="text-[#1018281f] "/>
      <CarePartnerComponent/>
    </>
  );
}
