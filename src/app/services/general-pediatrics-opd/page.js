import GeneralPediatricsOPD from "@/components/GeneralPediatricsOPD";

export const metadata = {
  title: 'Best General Pediatrics OPD in Ajmer - Dr. Mayur Kumar Goyal',
  description:
    'Get expert pediatric care in Ajmer with Dr. Mayur Kumar Goyal. Visit our General Pediatrics OPD for consultations, vaccinations, newborn care, and child wellness checkups.',
  keywords: [
    'general pediatrics OPD Ajmer',
    'pediatrician in Ajmer',
    'child specialist Ajmer',
    'Dr. Mayur Kumar Goyal',
    'pediatric consultations',
    'child healthcare Ajmer',
    'newborn baby doctor',
    'vaccination clinic Ajmer',
    'growth monitoring children',
    'best pediatric services'
  ],
  openGraph: {
    title: 'General Pediatrics OPD | Mayur Child Care Center Ajmer',
    description:
      'Book your child’s appointment with Dr. Mayur Kumar Goyal at our General Pediatrics OPD. Trusted pediatric care, growth monitoring, and complete wellness support.',
    images: [
      {
        url: '/images/services-pediatric.jpg',
        width: 1200,
        height: 630,
        alt: 'Child specialist examining a baby at Mayur Child Care Center',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/services/general-pediatrics-opd',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/services/general-pediatrics-opd',
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
    title: 'General Pediatrics OPD in Ajmer | Mayur Child Care Center',
    description:
      'Expert child care and pediatric consultations by Dr. Mayur Kumar Goyal in Ajmer. Visit our OPD for personalized child health services.',
    images: ['/images/services-pediatric.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
};


export default function GeneralPediatricsOPDPage(){
  return (
    <>
    <GeneralPediatricsOPD/>
    </>
  )
}