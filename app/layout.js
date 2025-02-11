import "./globals.css";

export const metadata = {
  title: "Car Buyout Business",
  description: "Car Buyout Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
    <head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      ></link>
      <link rel="manifest" href="/site.webmanifest"></link>
    </head>
    <body>{children}</body>
  </html>
  );
}
