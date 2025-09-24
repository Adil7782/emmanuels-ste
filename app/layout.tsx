import type React from "react"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal', 'italic'],
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
    <html lang="en" className={`${poppins.className} antialiased`}>
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className="font-sans">
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
