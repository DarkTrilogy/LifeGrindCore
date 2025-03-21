/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './out',
  exclude: ['*', '!/sign-in', '!/sign-up'],
}
