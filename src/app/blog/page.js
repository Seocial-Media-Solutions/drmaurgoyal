
import fs from 'fs';
import path from 'path';
import ClientBlogPage from './ClientBlogPage.jsx';

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileData);
  return blogs;
}

export const metadata = {
  title: 'Pediatric Health Blog and Articles - Dr. Mayur Goyal Ajmer',
  description:
    'Explore expert-written blog articles by Dr. Mayur Kumar Goyal on child health, parenting tips, immunization guidance, and pediatric care updates in Ajmer.',
  keywords: [
    'pediatric health blog',
    'child care articles Ajmer',
    'Dr. Mayur Kumar Goyal blog',
    'parenting tips Ajmer',
    'baby health advice',
    'immunization updates',
    'newborn care blog',
    'child development insights',
    'Ajmer pediatric clinic blog',
    'child specialist health tips'
  ],
  openGraph: {
    title: 'Pediatric Blog by Dr. Mayur Goyal - Child Care Tips and Insights',
    description:
      'Read educational and informative blogs by Dr. Mayur Goyal on pediatric care, vaccinations, newborn care, and health guidance for parents in Ajmer.',
    images: [
      {
        url: '/images/blog-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Pediatric health blog illustration at Mayur Childern Hospital',
      },
    ],
    type: 'website',
    url: 'https://drmayurkumargoyal.com/blog',
    siteName: 'Mayur Childern Hospital',
  },
  alternates: {
    canonical: 'https://drmayurkumargoyal.com/blog',
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
    title: 'Child Health Blog - Dr. Mayur Goyal Pediatric Center Ajmer',
    description:
      'Stay updated with blogs and tips on child health, parenting, and wellness from Dr. Mayur Kumar Goyal in Ajmer.',
    images: ['/images/blog-banner.jpg'],
  },
  other: {
    'application-name': 'Mayur Childern Hospital',
    author: 'Dr. Mayur Kumar Goyal',
    generator: 'Next.js',
    'theme-color': '#ffffff',
  },
  about: {
    description:
      'This blog page features insightful pediatric articles, health advice, and parenting tips written by Dr. Mayur Kumar Goyal. Ideal for parents in Ajmer seeking trusted child care knowledge and updates.',
  },
};

export default function BlogPage() {
  const blogs = getBlogs();
  console.log(blogs)
  return <ClientBlogPage blogs={blogs} />;
}