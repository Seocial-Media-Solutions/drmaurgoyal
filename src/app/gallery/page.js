import GalleryPage from "@/components/GalleryPage";

 
export const metadata = {
  title: 'Clinic Photo Gallery - Dr. Mayur Goyal Child Care Ajmer',
  description:
    'View the photo gallery of Mayur Child Care Center in Ajmer. Explore our pediatric clinic, child-friendly facilities, events, and compassionate healthcare environment.',
  keywords: [
    'pediatric clinic gallery Ajmer',
    'Mayur Child Care photos',
    'Dr. Mayur Goyal gallery',
    'child care center images',
    'Ajmer pediatric hospital photos',
    'clinic environment pictures',
    'child-friendly medical center',
    'pediatric staff photos',
    'vaccination center gallery',
    'newborn care facilities Ajmer'
  ],
  openGraph: {
    title: 'Photo Gallery of Pediatric Clinic - Dr. Mayur Goyal Ajmer',
    description:
      'Discover the caring environment of Mayur Child Care Center through our image gallery. See our facilities, staff, and pediatric care in action.',
    images: [
      {
        url: '/images/gallery-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Photo collage of Mayur Child Care Center in Ajmer',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/gallery',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/gallery',
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
    title: 'Gallery of Dr. Mayur Goyal Pediatric Clinic in Ajmer',
    description:
      'Take a visual tour of our pediatric clinic in Ajmer with photos of the child care center, staff, and welcoming spaces designed for young patients.',
    images: ['/images/gallery-cover.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This gallery page highlights the environment, pediatric care rooms, and facilities available at Mayur Child Care Center in Ajmer. A visual insight into the compassionate healthcare experience provided by Dr. Mayur Kumar Goyal.',
  },
};

export default function GalleryPagePage(){
  return (
    <>
     <GalleryPage/>
    </>
  )
}