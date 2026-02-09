import { db } from '@/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';

async function getAllBlogs() {
  // 1. Fetch from blogs.json
  let localBlogs = [];
  try {
    const filePath = path.join(process.cwd(), 'public', 'blogs.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    localBlogs = JSON.parse(fileData);
  } catch (e) {
    console.error("Error reading blogs.json for sitemap", e);
  }

  // 2. Fetch from Firestore
  let firestoreBlogs = [];
  try {
    if (db) {
      const snapshot = await getDocs(collection(db, 'blogs'));
      snapshot.forEach(doc => {
        firestoreBlogs.push({ id: doc.id, ...doc.data() });
      });
    }
  } catch (e) {
    console.error("Error fetching firestore blogs for sitemap", e);
  }

  // Merge and deduplicate by slug (preference to Firestore if needed, or just combine)
  const allBlogs = [...localBlogs, ...firestoreBlogs];

  // Basic deduplication if slugs might conflict
  const uniqueBlogs = [];
  const slugs = new Set();

  for (const blog of allBlogs) {
    if (blog.slug && !slugs.has(blog.slug)) {
      slugs.add(blog.slug);
      uniqueBlogs.push(blog);
    }
  }

  return uniqueBlogs;
}

export default async function sitemap() {
  const baseUrl = 'https://www.drmayurkumargoyal.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/general-pediatrics-opd`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/pediatrics-emergency-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/support-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/neonatology-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/pediatric-critical-care`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/vacination-programs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/adolescent-health-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/newborn-care`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Add all newborn-care subpages
    ...['surviving-newborn-stage', 'how-to-swaddle', 'first-bath', 'common-conditions',
      'vaginal-discharge', 'diaper-rash-treatment', 'black-poop', 'green-poop',
      'ideal-room-temperature', 'enough-food', 'decoding-cry', 'pacifiers']
      .map(path => ({
        url: `${baseUrl}/newborn-care/${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      })),
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    // Blog posts
    {
      url: `${baseUrl}/blog/newborn-child-care-tips-ajmer-pediatrician`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-child-care-center-ajmer-mayur-child-care`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-child-care-center-ajmer-mayur-child-care`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/child-doctor-ajmer-dr-mayur-kumar-goyal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/healthy-digestion-kids-tips-ajmer-pediatrician`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/prevent-childhood-illnesses-tips-ajmer-pediatrician`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/seasonal-flu-children-symptoms-treatment-prevention`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/pneumonia-in-children-symptoms-treatment-ajmer-pediatrician`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/child-skin-rashes-causes-treatment-ajmer-pediatrician`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/newborn-danger-signs-sick-baby-ajmer-pediatrician`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/newborn-baby-care-tips-ajmer-pediatrician`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/diarrhoea-in-children-complete-guide-ajmer-pediatrician`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/urine-tract-infection-uti-children-guide-ajmer-pediatrician`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/infantile-colic-baby-crying-causes-treatment-ajmer-pediatrician`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/dengue-fever-children-guide-symptoms-treatment-prevention-ajmer-pediatrician`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/adolescent-care`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Extract slugs from static pages to avoid duplication
  const staticSlugs = new Set();
  staticPages.forEach(page => {
    if (page.url.includes('/blog/')) {
      const slug = page.url.split('/blog/')[1];
      if (slug) staticSlugs.add(slug);
    }
  });

  // Fetch dynamic blogs
  const blogs = await getAllBlogs();
  const blogPages = blogs
    .filter(blog => !staticSlugs.has(blog.slug))
    .map(blog => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.date || blog.updatedAt || new Date()),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

  return [...staticPages, ...blogPages];
}