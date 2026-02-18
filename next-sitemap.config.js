/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://drmayurkumagoyal.com', // ✅ Replace with your actual domain (no trailing slash)
  generateRobotsTxt: true, // ✅ Automatically generate robots.txt
  generateIndexSitemap: true, // ✅ Generate index for multi-sitemaps (good for large sites)

  // ⛔ Optional: Exclude specific routes from the sitemap
  exclude: ['/admin', '/dashboard', '/login'],

  // ⚙️ Robots.txt custom rules (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://drmayurkumargoyal.com/sitemap.xml', // If you have multiple sitemaps
    ],
  },

}
