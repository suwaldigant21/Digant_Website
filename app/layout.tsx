import type { Metadata } from "next"
import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Digant Suwal – Portfolio",
  description: "Welcome to Digant Suwal's portfolio. A passionate computing student from Nepal building innovative software solutions.",
  keywords: ["Digant Suwal", "portfolio", "Nepal", "BSc Computing", "developer", "AI", "student", "programming", "machine learning", "research"],
  authors: [{ name: "Digant Suwal", url: "https://digantsuwal.com.np" }],
  creator: "Digant Suwal",
  publisher: "Digant Suwal",
  robots: "index, follow",
  alternates: {
    canonical: "https://digantsuwal.com.np",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digantsuwal.com.np",
    title: "Digant Suwal – Portfolio",
    description: "Digant Suwal's portfolio showcasing software projects, skills, and vision for tech innovation.",
    siteName: "Digant Suwal",
    images: [
      {
        url: "/home.png", // Using your existing home.png
        width: 1200,
        height: 630,
        alt: "Digant Suwal Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Digant Suwal – Portfolio",
    description: "Explore the digital works and academic journey of Digant Suwal, a computing student from Nepal.",
    images: ["/home.png"], // Using your existing home.png
    creator: "@Suwaldigant_21" // Your actual Twitter handle
  },
  metadataBase: new URL("https://digantsuwal.com.np"),
  verification: {
    google: "pKaR8vbKRN6zMwR7tg4qjk0NBwzbhI5glu3a0PZ37_o", // Replace with your actual verification code
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured data for rich search results */}
        <Script id="schema-person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Digant Suwal",
              "url": "https://digantsuwal.com.np",
              "image": "https://digantsuwal.com.np/about.jpg",
              "jobTitle": "Computing Student & Developer",
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Leeds Beckett University"
                },
                {
                  "@type": "Organization",
                  "name": "The British College"
                }
              ],
              "sameAs": [
                "https://x.com/Suwaldigant_21",
                "https://github.com/DigantaSuwal",
                "https://linkedin.com/in/digantasuwal"
              ],
              "description": "Computing student from Nepal studying at Leeds Beckett University and The British College, with interests in AI, machine learning, and software development."
            }
          `}
        </Script>

        {/* Website schema markup */}
        <Script id="schema-website" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://digantsuwal.com.np",
              "name": "Digant Suwal – Portfolio",
              "description": "Welcome to Digant Suwal's portfolio. A passionate computing student from Nepal building innovative software solutions.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://digantsuwal.com.np/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}