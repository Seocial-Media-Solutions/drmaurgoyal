import NewbornScreening from "@/components/NewbornScreening";


export const metadata = {
  title: 'Newborn Screening Services - Early Detection by Child Specialist in Ajmer',
  description:
    'Ensure a healthy future with our newborn screening services in Ajmer. Detect genetic, metabolic, blood, and hearing disorders early with expert care from Dr. Mayur Kumar Goyal.',
  keywords: [
    'newborn screening Ajmer',
    'newborn doctor in Ajmer',
    'early detection for babies',
    'baby health tests',
    'child specialist in Ajmer',
    'pediatrician in Ajmer',
    'newborn metabolic screening',
    'baby hearing screening Ajmer',
    'child health screening',
    'best pediatricians Ajmer'
  ],
  openGraph: {
    title: 'Newborn Screening and Health Checks - Pediatrician in Ajmer',
    description:
      'Dr. Mayur Kumar Goyal offers essential newborn screening in Ajmer. Detect hidden health conditions early through safe and simple tests to secure your baby’s healthy future.',
    images: [
      {
        url: '/images/newborn-screening.jpg',
        width: 1200,
        height: 630,
        alt: 'Newborn screening test at Mayur Child Care Center',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/services/newborn-screening',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/services/newborn-screening',
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
    title: 'Newborn Screening Services - Newborn Doctor in Ajmer',
    description:
      'Early detection of hidden health conditions in newborns at Mayur Child Care Center. Safe and accurate screening for better baby health.',
    images: ['/images/newborn-screening.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'Our Newborn Screening Program detects genetic, metabolic, blood, and hearing disorders in babies before symptoms appear. With safe tests and expert care from Dr. Mayur Kumar Goyal, we help ensure your baby’s healthiest start.',
  },
};

export default function NewbornScreningPage(){
  return (
    <>
    <NewbornScreening/>
    </>
  )
}