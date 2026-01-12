import AdolescentCare from "@/components/AdolescentCare";

export const metadata = {
  title: 'Adolescent Care by Pediatrician in Ajmer - Child Specialist Services',
  description:
    'Dr. Mayur Kumar Goyal provides expert adolescent care in Ajmer. Get teen-focused guidance on physical, mental, and emotional development with a trusted pediatrician.',
  keywords: [
    'adolescent care Ajmer',
    'pediatrician in Ajmer',
    'child specialist in Ajmer',
    'teen health counseling',
    'adolescent doctor Ajmer',
    'growth and puberty guidance',
    'child doctor in Ajmer',
    'mental health for teens',
    'hormonal health Ajmer',
    'best pediatricians Ajmer'
  ],
  openGraph: {
    title: 'Adolescent Health Support -  Pediatrician and Child Doctor in Ajmer',
    description:
      'Get personalized adolescent care with Dr. Mayur Kumar Goyal in Ajmer. Support for puberty, mental health, physical growth, and teen health development.',
    images: [
      {
        url: '/images/adolescent-care.jpg',
        width: 1200,
        height: 630,
        alt: 'Adolescent care consultation at Mayur Childern Hospital',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/adolescent-care',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/adolescent-care',
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
    title: 'Teen Health and Adolescent Care in Ajmer - Dr. Mayur Goyal',
    description:
      'Expert pediatrician Dr. Mayur Goyal offers adolescent health services in Ajmer focused on teen development, mental wellness, and hormonal health.',
    images: ['/images/adolescent-care.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This page presents detailed information about adolescent health services at Mayur Childern Hospital in Ajmer. Dr. Mayur Kumar Goyal provides trusted support for teen development, mental wellness, and puberty-related health care.',
  },
};

export default function AdolcentCarePage(){
  return(
    <div>
      <AdolescentCare/>
    </div>
  )
}
