import SpecializedPediatrics from "@/components/SpecializedPediatrics";

  
 
 





export const metadata = {
  title: 'Specialized Pediatric Care - Best Child Specialist in Ajmer',
  description:
    'Receive expert treatment for complex pediatric conditions from Dr. Mayur Kumar Goyal in Ajmer. Specialized care for allergies, asthma, infections, and developmental concerns.',
  keywords: [
    'specialized pediatric care',
    'pediatrician in Ajmer',
    'child specialist in Ajmer',
    'best pediatricians Ajmer',
    'pediatric allergy treatment',
    'child asthma specialist',
    'complex child conditions',
    'developmental pediatrician',
    'child doctor in Ajmer',
    'Dr. Mayur Kumar Goyal'
  ],
  openGraph: {
    title: 'Advanced Pediatric Services - Child Doctor in Ajmer',
    description:
      'Explore specialized pediatric services by Dr. Mayur Kumar Goyal. Get advanced child healthcare in Ajmer for chronic illness, developmental delays, and more.',
    images: [
      {
        url: '/images/specialized-pediatrics.jpg',
        width: 1200,
        height: 630,
        alt: 'Specialized pediatric services at Mayur Child Care Center',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/services/specialized-pediatrics',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/services/specialized-pediatrics',
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
    title: 'Specialized Pediatrics in Ajmer - Dr. Mayur Goyal',
    description:
      'Dr. Mayur Goyal offers specialized pediatric care in Ajmer. Advanced treatments for asthma, allergies, infections, and developmental disorders.',
    images: ['/images/specialized-pediatrics.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page details specialized pediatric services provided by Dr. Mayur Kumar Goyal at Mayur Child Care Center in Ajmer. From chronic illnesses to developmental assessments, we offer comprehensive child healthcare tailored to specific needs.',
  },
};


export default function SpecializedPediatricsPage(){
  return (
    <>
    

    <SpecializedPediatrics/>
    
   </>
     
  )
}