import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://inowi.fr'),
  title: "INOWI — Des agents IA qui bossent vraiment pour les PME françaises",
  description: "INOWI construit et déploie des agents IA sur mesure pour les PME françaises — intégrés à vos outils existants, opérationnels en 4 semaines. Audit gratuit.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "INOWI — Des agents IA qui bossent vraiment",
    description: "On construit et déploie des agents IA sur mesure pour vos équipes — intégrés à vos outils, opérationnels en 4 semaines.",
    url: 'https://inowi.fr',
    siteName: 'INOWI',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'INOWI — Agents IA pour PME françaises' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "INOWI — Des agents IA qui bossent vraiment",
    description: "Agents IA sur mesure pour PME françaises. Opérationnels en 4 semaines.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable} antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "INOWI",
              "url": "https://inowi.fr",
              "description": "Construction et déploiement d'agents IA sur mesure pour PME françaises",
              "areaServed": "FR",
              "serviceType": "Intelligence artificielle — agents autonomes"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
