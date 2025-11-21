import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "KN Property Management | Charlotte's Premier Property Concierge",
  description:
    "Charlotte's most exclusive property management and real estate concierge service. White-glove property management, AirBnB concierge, and real estate sales.",
  generator: "v0.app",
  openGraph: {
    title: "KN Property Management | Charlotte's Premier Property Concierge",
    description: "Elite property management and concierge services in Charlotte, Winston-Salem, and surrounding areas.",
    url: "https://knpropertymanagement.com",
    siteName: "KN Property Management",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KN Property Management | Charlotte's Premier Property Concierge",
    description: "Elite property management services in Charlotte and Winston-Salem",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-slate-950 text-slate-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
