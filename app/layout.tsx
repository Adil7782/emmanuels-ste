import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://emmanuelslanka.eliot.global'),
  title: {
    default: "Emmanuels Lanka Pvt Ltd - Smart Factory Solutions",
    template: "%s | Emmanuels Lanka"
  },
  description: "By Emmanuels Lanka Pvt Ltd - Industrial equipment design & development R&D firm specializing in IoT, Digitization and Industrial automation solutions.",
  authors: [{ name: "Adil Saaly", url: "https://www.linkedin.com/in/adil-saaly-dev/" }],
  creator: "Adil Saaly",
  keywords: ["Industrial Automation", "IoT", "Smart Factory", "R&D", "Electronics Design", "Sri Lanka", "Emmanuels Lanka", "Eliot"],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emmanuelslanka.eliot.global",
    title: "Emmanuels Lanka Pvt Ltd - Smart Factory Solutions",
    description: "Industrial equipment design & development R&D firm specializing in IoT, Digitization and Industrial automation solutions.",
    siteName: "Emmanuels Lanka Pvt Ltd",
    images: [
      {
        url: '/logo.png',
        alt: 'Emmanuels Lanka Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuels Lanka Pvt Ltd",
    description: "Industrial equipment design & development R&D firm specializing in IoT, Digitization and Industrial automation solutions.",
    images: ['/logo.png'],
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            AOS.init({
              duration: 800,
              easing: 'ease-in-out',
              once: true,
              offset: 100
            });
          `,
          }}
        />
      </body>
    </html>
  )
}
