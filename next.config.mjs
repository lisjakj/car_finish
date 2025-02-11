/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,         // Pomaže u pronalaženju potencijalnih grešaka
    trailingSlash: true,           // URL-ovi završavaju znakom "/" što može biti korisno za SEO

    i18n: {
      locales: ['hr'],             // Stranica je na hrvatskom jeziku
      defaultLocale: 'hr',
    },
  };
  
  export default nextConfig;
  