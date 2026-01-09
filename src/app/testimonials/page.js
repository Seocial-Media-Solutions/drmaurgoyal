import TestimonialHero from "@/components/TestimonialHero";
import TestimonialSection from "@/components/TestimonialSection";


export const metadata = {
  title: 'Patient Testimonials - Dr. Mayur Goyal Child Care Center Ajmer',
  description:
    'Read verified reviews and heartfelt testimonials from parents and guardians about their experience with Dr. Mayur Kumar Goyal’s pediatric care in Ajmer.',
  keywords: [
    'pediatric testimonials Ajmer',
    'Dr. Mayur Goyal reviews',
    'child care feedback',
    'best pediatrician Ajmer reviews',
    'parent experiences',
    'baby care testimonials',
    'Ajmer pediatric doctor rating',
    'trusted child specialist reviews',
    'Mayur Child Care patient stories',
    'Ajmer pediatric clinic reviews'
  ],
  openGraph: {
    title: 'What Parents Say - Testimonials for Dr. Mayur Goyal Pediatric Clinic',
    description:
      'Discover what parents have to say about their child’s care experience with Dr. Mayur Goyal. Read reviews, ratings, and real patient stories from Ajmer.',
    images: [
      {
        url: '/images/testimonials-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Happy parents giving feedback at pediatric clinic',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/testimonials',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/testimonials',
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
    title: 'Parent Reviews - Dr. Mayur Goyal Pediatric Services in Ajmer',
    description:
      'Read real testimonials and feedback from families who trust Dr. Mayur Kumar Goyal for their children’s health care needs in Ajmer.',
    images: ['/images/testimonials-cover.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This testimonials page showcases genuine feedback from parents and guardians who have experienced compassionate pediatric care at Mayur Child Care Center in Ajmer, under the guidance of Dr. Mayur Kumar Goyal.',
  },
};



export default function Testimonials() {
  return (
    <>
      <TestimonialHero/>
      <TestimonialSection/>
    </>
  );
}