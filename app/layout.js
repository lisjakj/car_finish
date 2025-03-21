import "./globals.css";

export const metadata = {
  title:
    "Otkup Vozila | Brzi Otkup Automobila, Motora, Quadova, Kombija i Više – Fer Procjena i Isplata na Licu Mjesta",
  description:
    "Prodajte svoje vozilo, automobil, motor, quad ili kombi brzo i sigurno uz našu profesionalnu uslugu otkupa vozila. Nudimo brzu isplatu, dolazak na adresu, fer procjenu i najbolje ponude za otkup automobila, motocikala, motora, kombija, teretnih i putničkih vozila. Kontaktirajte nas odmah za pouzdan, brzi otkup vozila u cijeloj Hrvatskoj.",
  keywords:
    "otkup vozila, otkup automobila, otkup motocikala, otkup kamiona, otkup motora, otkup auta, brzi otkup, otkup kombija, otkup teretnih vozila, otkup putničkih kombija, otkup motornih vozila, otkup vozila bez stresa, otkup vozila online, prodaja vozila, otkup vozila Hrvatska, otkup skutera, otkup quadova",
  openGraph: {
    title: "Otkup Vozila - Brzi Otkup Automobila, Motora, Quadova i Kombija",
    description:
      "Prodajte svoje vozilo brzo i sigurno uz naš otkup vozila. Nudimo fer procjenu, brzu isplatu, dolazak na adresu i najbolje ponude za otkup automobila, motocikala, motora, kombija, teretnih i putničkih vozila.",
    url: "https://brziotkupvozila.com", // prilagodite svojoj domeni ako je potrebno
    siteName: "Otkup Vozila",
    images: [
      {
        url: "https://brziotkupvozila.com/assets/bmw.jpg",
        width: 1200,
        height: 630,
        alt: "Otkup Vozila - Brza Isplata, Fer Procjena i Najbolje Ponude",
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@brziotkupvozila", // prilagodite korisničko ime
    title: "Otkup Vozila - Brzi Otkup Automobila, Motora, Quadova i Kombija",
    description:
      "Prodajte svoje vozilo brzo i sigurno. Nudimo fer procjenu, brzu isplatu, dolazak na adresu i najbolje ponude za otkup automobila, motocikala, motora, kombija, te ostalih vozila.",
    images: ["https://brziotkupvozila.com/assets/bmw.jpg"],
  },
  alternates: {
    canonical: "https://brziotkupvozila.com", // canonical URL treba biti primarni URL vaše stranice
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <head>
        {/* Osnovni meta podaci */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Ikonice i manifest */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* JSON-LD strukturirani podaci za lokalni biznis */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Otkup Vozila",
              "image": "https://brziotkupvozila.com/assets/logo.svg",
              "url": "https://brziotkupvozila.com",
              "telephone": "+385998284489",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dubrava 143", // prilagodite stvarnu adresu
                "addressLocality": "Zagreb",             // prilagodite stvarni grad
                "postalCode": "10040",                   // prilagodite poštanski broj
                "addressCountry": "HR"
              },
              "priceRange": "€",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "234"
              }
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
