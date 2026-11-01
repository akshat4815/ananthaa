import "./globals.css";

export const metadata = {
  title: "Ananthaa Global | Premier Indian Import-Export Trading House",
  description:
    "Ananthaa Global connects Indian manufacturing excellence to international markets across the Americas, Gulf (GCC), and Europe. Certified export management, global sourcing, and logistics.",
  keywords: [
    "import export India",
    "Ananthaa Global",
    "Indian exporter",
    "agricultural export",
    "engineering goods export",
    "trade with Americas",
    "trade with Gulf GCC",
    "trade with Europe",
    "FOB CIF shipping",
    "Nhava Sheva export",
    "IEC registered exporter"
  ],
  authors: [{ name: "Ananthaa Global" }],
  openGraph: {
    title: "Ananthaa Global | Indian Import-Export to Americas, Gulf & Europe",
    description: "Reliable, government-certified import-export partner in India with global multi-modal logistics and customs clearance.",
    url: "https://ananthaaglobal.com",
    siteName: "Ananthaa Global",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
