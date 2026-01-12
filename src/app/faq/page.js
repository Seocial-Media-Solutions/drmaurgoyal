import CarePartnerComponent from "@/components/CarePartnerComponent";
import FAQSection from "@/components/Faq";
export const metadata = {
  title: 'Frequently Asked Questions About Child Care - Dr. Mayur Goyal',
  description:
    'Find answers to common questions about pediatric consultations, clinic hours, vaccination schedules, and child care services at Mayur Childern Hospital in Ajmer.',
  keywords: [
    'pediatric FAQ Ajmer',
    'child care questions',
    'Dr. Mayur Goyal pediatrician',
    'vaccination FAQs',
    'infant health queries',
    'child specialist answers',
    'Ajmer clinic FAQs',
    'baby health consultations',
    'child immunization queries',
    'newborn care guidance'
  ],
  openGraph: {
    title: 'Pediatric Care FAQs in Ajmer - Mayur Childern Hospital',
    description:
      'Explore answers to frequently asked questions on child care, vaccinations, clinic timings, and pediatric visits at Dr. Mayur Goyal’s clinic in Ajmer.',
    images: [
      {
        url: '/images/faq-page.jpg',
        width: 1200,
        height: 630,
        alt: 'Parents asking questions at pediatric clinic',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/faq',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/faq',
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
    title: 'Common Pediatric Questions Answered - Dr. Mayur Goyal',
    description:
      'Helpful answers for parents about pediatric services, health advice, and clinic procedures from Dr. Mayur Kumar Goyal in Ajmer.',
    images: ['/images/faq-page.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This FAQ page provides clear, parent-friendly answers about child care, newborn visits, immunization, pediatric checkups, and clinic operations offered at Mayur Childern Hospital in Ajmer by Dr. Mayur Kumar Goyal.',
  },
};


export default function FAQ() {
  return(
  <>
  <div className="bg-white">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800  text-center pt-10 mb-5 ">Frequently Asked Questions</h1>
  <FAQSection />

  <hr className="text-[#1018281f]"/>
      <CarePartnerComponent/>
      </div>
  </>
  );
}
