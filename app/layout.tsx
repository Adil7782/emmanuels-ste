import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Emmanuel's Lanka - Smart Factory Solutions",
  description:
    "Industrial equipment design & development R&D firm specializing in IoT, Digitization and Industrial automation solutions.",

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
