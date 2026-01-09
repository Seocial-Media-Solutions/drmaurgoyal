
import BookingPage from "@/components/BookingPage";


export const metadata = {
    title: 'Book Appointment with Pediatrician in Ajmer || Dr. Mayur Kumar Goyal',
    description: 'Schedule an appointment with Dr. Mayur Kumar Goyal, the best pediatrician in Ajmer. Book online for newborn care, vaccinations, and child health consultations.',
    keywords: [
      'pediatric appointment Ajmer',
      'book child specialist',
      'Dr. Mayur Kumar Goyal appointment',
      'online consultation pediatrician',
      'child doctor booking',
      'newborn care consultation',
      'vaccination appointment',
      'pediatric clinic booking',
      'child health checkup',
      'emergency pediatric consultation'
    ],
    openGraph: {
      title: 'Book Pediatric Appointment | Mayur Child Care Center - Ajmer',
      description: 'Easy online booking for pediatric consultations with Dr. Mayur Kumar Goyal. Schedule vaccinations, newborn checks, and child health services.',
      images: [
        {
          url: '/images/booking-hero.jpg',
          width: 800,
          height: 600,
          alt: 'Book Appointment at Mayur Child Care Center',
        },
      ],
      type: 'website',
      url: 'https://www.drmayurkumargoyal.com/bookconsultation',
      siteName: 'Mayur Child Care Center',
    },
    alternates: {
      canonical: 'https://www.drmayurkumargoyal.com/bookconsultation',
    },
    robots: {
      index: true, 
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-image-preview': 'standard',
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Book Pediatric Appointment in Ajmer | Dr. Mayur Kumar Goyal',
      description: 'Secure your child\'s consultation with Ajmer\'s leading pediatric specialist',
      images: ['/images/booking-hero.jpg'],
    },
    other: {
      'application-name': 'Mayur Child Care Center',
      'author': 'Dr. Mayur Kumar Goyal',
      'generator': 'Next.js',
      'theme-color': '#ffffff',
      'booking-page': 'true' // Custom meta for tracking
    },
  };

export default function BookConsultation(){
    return(
        <>
          <div className="bg-gray-50">
            <BookingPage/>
            </div>
        </>
    )
}