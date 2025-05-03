import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import MicroInteractions from "@/components/micro-interactions"
import CriticalStyles from "@/components/critical-styles"
import PerformanceMonitor from "@/components/performance-monitor"

// Optimize font loading with next/font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})

export const viewport: Viewport = {
  themeColor: "#197BBD",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  interactiveWidget: "resizes-content",
}

export const metadata: Metadata = {
  applicationName: "SIMEXTRACK",
  metadataBase: new URL("https://simextrack.my.id"), // Replace with your actual domain
  title: {
    default: "SIMEXTRACK - Simple Expense Tracker App",
    template: "%s - SIMEXTRACK | Simple Expense Tracker App",
  },
  description:
    "SIMEXTRACK is a simple yet powerful expense tracker and budgeting app. Easily manage your money, track income and spending, and set financial goals with customizable tools that adapt to your lifestyle.",
  keywords: [
    "expense tracker",
    "money tracker",
    "budget app",
    "spending tracker",
    "budget planner",
    "finance management app",
    "personal finance app",
    "track income and expenses",
    "customizable finance tracker",
    "simple budget app",
    "set financial goals",
    "easy money tracking",
    "money management tool",
    "secure financial tracker",
    "SIMEXTRACK",
  ],
  authors: [
    {
      name: "Granite Bagas",
      url: "https://simextrack.my.id/about",
    },
  ],
  creator: "Granite Bagas",
  publisher: "GBPS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simextrack.my.id",
    title: "SIMEXTRACK - Simple Expense Tracker App",
    description:
      "SIMEXTRACK is a simple yet powerful expense tracker and budgeting app. Easily manage your money, track income and spending, and set financial goals with customizable tools that adapt to your lifestyle.",
    siteName: "SIMEXTRACK",
    images: [
      {
        url: "https://simextrack.my.id/logo.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "SIMEXTRACK App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIMEXTRACK - Simple Expense Tracker App",
    description:
      "SIMEXTRACK is a simple yet powerful expense tracker and budgeting app. Easily manage your money, track income and spending, and set financial goals with customizable tools that adapt to your lifestyle.",
    creator: "@granitbps", // Replace with your actual Twitter handle
    images: ["https://simextrack.my.id/logo.png"], // Replace with your actual Twitter image
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SIMEXTRACK",
  },
  verification: {
    // google: "google-site-verification-code", // Replace with your actual verification code
    // yandex: "yandex-verification-code", // Replace with your actual verification code
    // yahoo: "yahoo-verification-code", // Replace with your actual verification code
    other: {
      me: ["info@granitebps.com"], // Replace with your actual email
    },
  },
  category: "Finance",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Critical CSS Inline Styles */}
        <CriticalStyles />

        {/* Resource Hints - Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical assets */}
        <link rel="preload" href="/favico.png" as="image" />
        <link rel="preload" href="/favico.png" as="image" type="image/x-icon" />

        {/* DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Icons and PWA assets */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favico.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favico.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favico.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#197BBD" />
        <meta name="msapplication-TileColor" content="#197BBD" />

        <Script defer src="https://cloud.umami.is/script.js" data-website-id="393ab485-bebe-492a-bd25-47f28fe74558" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <MicroInteractions />
          <PerformanceMonitor />
          <Analytics />
        </ThemeProvider>
        {/* Structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SIMEXTRACK",
              operatingSystem: "Android, iOS",
              applicationCategory: "FinanceApplication",
              description:
                "SIMEXTRACK is a simple yet powerful expense tracker and budgeting app. Easily manage your money, track income and spending, and set financial goals with customizable tools that adapt to your lifestyle.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              screenshot: "https://simextrack.my.id/screenshot-2.webp",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SIMEXTRACK",
              url: "https://simextrack.my.id",
              logo: "https://simextrack.my.id/logo.png",
              sameAs: [
                "https://twitter.com/granitbps",
                "https://www.facebook.com/granitebps",
                "https://www.instagram.com/granitbps",
                "https://www.linkedin.com/in/granitebps",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@granitebps.com",
                contactType: "customer support",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
