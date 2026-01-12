import AboutMayur from "@/components/AboutMayur";
import DoctorProfileSection from "@/components/DoctorProfileSection";
import FAQSection from "@/components/Faq";

import HeroSection from "@/components/HeroSection";
import ImageGallerySlider from "@/components/ImageGallerySlider";
import PatientReviews from "@/components/PatientReviews";
 

  export const metadata = {
  title: 'Best Pediatrician in Ajmer | Dr. Mayur Kumar Goyal',
  description: 'Dr. Mayur Kumar Goyal, leading pediatrician and neonatologist in Ajmer, offers expert newborn care, vaccinations, and child health services at Mayur Childern Hospital.',
  keywords: [
    'best pediatrician in Ajmer',
    'child specialist doctor',
    'newborn baby doctor',
    'Dr. Mayur Kumar Goyal',
    'Mayur Childern Hospital',
    'neonatal specialist Ajmer',
    'child vaccination center',
    'pediatric clinic Ajmer',
    'premature baby care',
    'best child doctor near me'
  ],
  openGraph: {
    title: 'Top Pediatrician in Ajmer | Dr. Mayur Kumar Goyal',
    description: 'Expert pediatric and neonatal care at Mayur Childern Hospital in Ajmer. Specializing in newborn care, immunizations, and child health services.',
    images: [
      {
        url: '/images/dr-mayur-profile.jpg',
        width: 800,
        height: 600,
        alt: 'Dr. Mayur Kumar Goyal - Pediatrician Ajmer',
      },
    ],
    type: 'website',
    url: 'https://www.drmayurkumargoyal.com',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com',
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
    title: 'Best Pediatrician in Ajmer | Dr. Mayur Kumar Goyal',
    description: 'Specialized pediatric and neonatal care at Mayur Childern Hospital, Ajmer',
    images: ['/images/doctor.png'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    'author': 'Dr. Mayur Kumar Goyal',
    'generator': 'Next.js',
    'theme-color': '#ffffff',
  },
};

export default function Home() {
  return (
  <div className="">
    <HeroSection/>
     <hr className="text-[#1018281f]"/>

     <div className="relative bg-white w-full mx-auto">
  {/* Background image with minimal overlay */}
  <div className="absolute inset-0 z-0">
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/doctorbackground.webp')", opacity: 0.2 }}
    ></div>
  </div>

  {/* Content section */}
  <div className="relative z-10">
    <AboutMayur />
  </div>
</div>




    <hr className="text-[#1018281f]"/>
    <DoctorProfileSection/>
    <hr className="text-[#1018281f]"/>
    <PatientReviews/>
   
    {/* <hr className="text-[#1018281f]"/>
    <PediatricTherapySection/>  */}
    <hr className="text-[#1018281f]"/>
    <ImageGallerySlider/>
    <hr className="text-[#1018281f]"/>
   
    <div className="relative bg-white w-full mx-auto">
  {/* Background image with padding */}
  <div className="absolute 
  inset-x-0 
  top-[-15px]
  bottom-0  
  h-full
  opacity-30
  bg-[url('/images/Feq-background6.webp')] 
  bg-cover 
  bg-center 
  bg-no-repeat 
  z-0"  />

  
  <div className="relative z-10">
  <FAQSection/>
  </div>

    </div>
  </div>
  );
}
