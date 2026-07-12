import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import SmoothScroll from "@/components/smooth-scroll"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://uttampatra.dev"),
  title: "Uttam Patra - Frontend Developer",
  description:
    "Frontend Developer with experience in building enterprise-grade SaaS applications, scalable frontend architecture, and responsive, performance-optimized web apps.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "TypeScript", "Web Development", "UI/UX", "Uttam Patra"],
  authors: [{ name: "Uttam Patra" }],
  creator: "Uttam Patra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uttampatra.dev",
    title: "Uttam Patra - Frontend Developer",
    description:
      "Frontend Developer with experience in building enterprise-grade SaaS applications, scalable frontend architecture, and responsive web apps.",
    siteName: "Uttam Patra Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Uttam Patra - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uttam Patra - Frontend Developer",
    description:
      "Frontend Developer with experience in building enterprise-grade SaaS applications, scalable frontend architecture, and responsive web apps.",
    creator: "@uttampatra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-inter antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SmoothScroll />
          <CustomCursor />
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-slate-100 transition-all duration-500">
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
