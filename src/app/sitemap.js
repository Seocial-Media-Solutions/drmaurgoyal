// app/sitemap.js
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
        changeFrequency: 'weekly',
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
    
    return [...staticPages]; 
  }