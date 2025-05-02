import { Suspense } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import BackToTop from "@/components/back-to-top"
import CTAButton from "@/components/cta-button"
import LoadingFallback from "@/components/loading-fallback"

// Import client wrapper components
import DeveloperSectionClient from "@/components/client-sections/developer-section-client"
import FeedbackSectionClient from "@/components/client-sections/feedback-section-client"
import PerformanceDashboardClient from "@/components/client-sections/performance-dashboard-client"

// Dynamically import below-the-fold sections with SSR
const ScreenshotsSection = dynamic(() => import("@/components/sections/screenshots-section"), {
  loading: () => <LoadingFallback height="400px" />,
})

const ChangelogSection = dynamic(() => import("@/components/sections/changelog-section"), {
  loading: () => <LoadingFallback height="400px" />,
})

export default function LandingPage() {
  // You can replace this with your actual logo path
  const logoPath = "/favico.png"
  const isDevelopment = process.env.NODE_ENV === "development"

  return (
    <div className="flex min-h-screen flex-col">
      <Header logoSrc={logoPath} logoAlt="SIMEXTRACK Logo" />
      <main className="flex-1">
        <Suspense fallback={<LoadingFallback height="100vh" />}>
          {/* Critical above-the-fold content loaded eagerly */}
          <HeroSection />
          <FeaturesSection />

          {/* Below-the-fold content loaded lazily */}
          <Suspense fallback={<LoadingFallback height="400px" />}>
            <ScreenshotsSection />
          </Suspense>

          {/* Client components */}
          <DeveloperSectionClient />
          <FeedbackSectionClient />

          <Suspense fallback={<LoadingFallback height="400px" />}>
            <ChangelogSection />
          </Suspense>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <CTAButton />

      {/* Performance dashboard - only in development */}
      <PerformanceDashboardClient enabled={isDevelopment} />
    </div>
  )
}
