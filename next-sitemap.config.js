/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://brziotkupvozila.com', // Promijenite na vašu domenu
    generateRobotsTxt: true, // Omogućava generiranje robots.txt
    sitemapSize: 5000,
    exclude: [], // Ako imate stranice koje ne želite indeksirati, dodajte ih ovdje
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };
  